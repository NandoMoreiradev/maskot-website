'use client'

import { useEffect, useRef } from 'react'
import styled from 'styled-components'

const CanvasContainer = styled.canvas`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
    pointer-events: none; /* Deixa os cliques passarem pros botões */
    opacity: 0.8; /* Um pouco mais sutil globalmente */
`

interface Particle {
    x: number
    y: number
    vx: number
    vy: number
    radius: number
    color: string
}

export default function NetworkBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let animationFrameId: number
        let particles: Particle[] = []
        
        // Configurações Nível A
        const particleCount = window.innerWidth < 768 ? 40 : 90; // Mais partículas
        const maxDistance = 160; // Distância para conectar entre si
        const mouseDistance = 250; // Raio de interação com o mouse

        // Cores da paleta Maskot (predominância do branco/cinza sutil para não ficar chamativo)
        const colors = [
            'rgba(255, 255, 255, 0.4)',
            'rgba(255, 255, 255, 0.3)',
            'rgba(37, 99, 235, 0.6)',  // Primary
            'rgba(255, 122, 0, 0.6)',  // Accent
            'rgba(34, 197, 94, 0.6)'   // Success
        ];

        let mouse = { x: -1000, y: -1000 };

        const resize = () => {
            const parent = canvas.parentElement;
            if (parent) {
                canvas.width = parent.offsetWidth;
                canvas.height = parent.offsetHeight;
            } else {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
            initParticles();
        }

        const initParticles = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.6,
                    vy: (Math.random() - 0.5) * 0.6,
                    radius: Math.random() * 1.5 + 1, // Pontos menores e mais sutis
                    color: colors[Math.floor(Math.random() * colors.length)]
                });
            }
        }

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        }

        const handleMouseLeave = () => {
            mouse.x = -1000;
            mouse.y = -1000;
        }

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseLeave);

        resize();

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update & Draw Particles
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.x += p.vx;
                p.y += p.vy;

                // Bounce off edges smoothly
                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                // Draw Particle
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.fill();
            }

            // Draw Connections
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const p1 = particles[i];
                    const p2 = particles[j];
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < maxDistance) {
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        const alpha = (1 - (distance / maxDistance)) * 0.15;
                        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
                        ctx.lineWidth = 0.8;
                        ctx.stroke();
                    }
                }

                // Connect to mouse
                const dxMouse = particles[i].x - mouse.x;
                const dyMouse = particles[i].y - mouse.y;
                const distanceMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

                if (distanceMouse < mouseDistance) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(mouse.x, mouse.y);
                    const alpha = (1 - (distanceMouse / mouseDistance)) * 0.25;
                    ctx.strokeStyle = `rgba(96, 165, 250, ${alpha})`; // Linha azul suave puxando
                    ctx.lineWidth = 1;
                    ctx.stroke();
                    
                    // Subtle interaction: particles gently float towards mouse
                    particles[i].x -= dxMouse * 0.005;
                    particles[i].y -= dyMouse * 0.005;
                }
            }

            animationFrameId = requestAnimationFrame(draw);
        }

        draw();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        }
    }, [])

    return <CanvasContainer ref={canvasRef} />
}

