'use client'

import styled, { keyframes } from 'styled-components'
import { Megaphone, LayoutDashboard, BrainCircuit, Sparkles, GraduationCap } from 'lucide-react'

const float1 = keyframes`
    0% { transform: translateY(0px) rotateZ(var(--r)); }
    50% { transform: translateY(-10px) rotateZ(var(--r)); }
    100% { transform: translateY(0px) rotateZ(var(--r)); }
`

const float2 = keyframes`
    0% { transform: translateY(0px) rotateZ(var(--r)); }
    50% { transform: translateY(-15px) rotateZ(var(--r)); }
    100% { transform: translateY(0px) rotateZ(var(--r)); }
`

const float3 = keyframes`
    0% { transform: translateY(0px) rotateZ(var(--r)); }
    50% { transform: translateY(-8px) rotateZ(var(--r)); }
    100% { transform: translateY(0px) rotateZ(var(--r)); }
`

const VisualContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 500px;
    height: 400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    perspective: 1000px;
    
    @media (max-width: 768px) {
        height: 350px;
        transform: scale(0.9);
    }
`

const StackCard = styled.div<{ $delay: string, $zIndex: number, $rotate: string, $translateY: string }>`
    --r: ${props => props.$rotate};
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 16px;
    padding: 1.25rem;
    width: 320px;
    box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.08);
    position: absolute;
    z-index: ${props => props.$zIndex};
    display: flex;
    align-items: center;
    gap: 1rem;
    top: calc(50% + ${props => props.$translateY});
    margin-top: -42px; /* half of height roughly */
    animation: ${props => props.$zIndex === 3 ? float2 : (props.$zIndex === 2 ? float1 : float3)} 6s ease-in-out infinite;
    animation-delay: ${props => props.$delay};
    transition: all 0.3s ease;

    &:hover {
        --r: 0deg;
        z-index: 10;
        box-shadow: 0 20px 40px -10px rgba(37, 99, 235, 0.15);
        border-color: #BFDBFE;
    }
`

const IconBox = styled.div<{ $color: string, $bg: string }>`
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: ${props => props.$bg};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    border: 1px solid rgba(255, 255, 255, 0.5);

    svg {
        width: 24px;
        height: 24px;
        color: ${props => props.$color};
    }
`

const CardContent = styled.div`
    display: flex;
    flex-direction: column;

    strong {
        font-size: 0.95rem;
        color: #0F172A;
        font-weight: 700;
    }

    span {
        font-size: 0.8rem;
        color: #64748B;
        margin-top: 0.1rem;
    }
`

const ConnectionLine = styled.div`
    position: absolute;
    width: 2px;
    height: 60%;
    background: linear-gradient(to bottom, transparent, #2563EB40, transparent);
    left: 50%;
    top: 20%;
    transform: translateX(-50%);
    z-index: 0;
`

const floatBadgeAnim = keyframes`
    0% { transform: translateY(0px); }
    50% { transform: translateY(-8px); }
    100% { transform: translateY(0px); }
`

const FloatingBadge = styled.div<{ $top: string, $right?: string, $left?: string, $delay: string }>`
    position: absolute;
    top: ${props => props.$top};
    ${props => props.$right && `right: ${props.$right};`}
    ${props => props.$left && `left: ${props.$left};`}
    background: #FFFFFF;
    padding: 0.6rem 1rem;
    border-radius: 100px;
    box-shadow: 0 8px 20px rgba(0,0,0,0.08);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 600;
    font-size: 0.8rem;
    color: #0F172A;
    z-index: 15;
    border: 1px solid #E2E8F0;
    animation: ${floatBadgeAnim} 4s ease-in-out infinite;
    animation-delay: ${props => props.$delay};

    svg {
        color: #2563EB;
        width: 16px;
        height: 16px;
    }
`

export default function EcosystemVisual() {
    return (
        <VisualContainer aria-hidden="true">
            <ConnectionLine />
            
            <StackCard $zIndex={1} $delay="0s" $rotate="-4deg" $translateY="-80px">
                <IconBox $bg="#F0FDF4" $color="#16A34A">
                    <Megaphone />
                </IconBox>
                <CardContent>
                    <strong>Marketing & Atração</strong>
                    <span>+42 Leads Qualificados Hoje</span>
                </CardContent>
            </StackCard>

            <StackCard $zIndex={2} $delay="1s" $rotate="2deg" $translateY="0px">
                <IconBox $bg="#EFF6FF" $color="#2563EB">
                    <LayoutDashboard />
                </IconBox>
                <CardContent>
                    <strong>CRM & Vendas</strong>
                    <span>Negociação Avançada</span>
                </CardContent>
            </StackCard>

            <StackCard $zIndex={3} $delay="2s" $rotate="-2deg" $translateY="80px">
                <IconBox $bg="#FAF5FF" $color="#9333EA">
                    <BrainCircuit />
                </IconBox>
                <CardContent>
                    <strong>Mia IA Copilot</strong>
                    <span>&quot;Sugiro enviar o vídeo institucional&quot;</span>
                </CardContent>
            </StackCard>

            <FloatingBadge $top="-10px" $right="-10px" $delay="0.5s">
                <Sparkles />
                Ecossistema Único
            </FloatingBadge>
            <FloatingBadge $top="320px" $left="-20px" $delay="1.5s">
                <GraduationCap />
                Foco na Matrícula
            </FloatingBadge>
        </VisualContainer>
    )
}

