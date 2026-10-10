'use client'

import styled from 'styled-components'
import { Heart, ShieldCheck, Zap, Users, Compass } from 'lucide-react'

const Section = styled.section`
    padding: 6rem 0;
    background: #F8FAFC;
    border-top: 1px solid #E2E8F0;
`

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
`

const Header = styled.div`
    text-align: center;
    margin-bottom: 4rem;

    .tag {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        background: #FFFFFF;
        color: #475569;
        padding: 0.35rem 0.85rem;
        border-radius: 100px;
        font-weight: 600;
        font-size: 0.85rem;
        border: 1px solid #E2E8F0;
        margin-bottom: 1.25rem;
        box-shadow: 0 1px 2px rgba(0,0,0,0.02);

        svg {
            color: #2563EB;
            width: 14px;
            height: 14px;
        }
    }

    h2 {
        font-size: 2.5rem;
        font-weight: 800;
        margin-bottom: 1rem;
        color: #0F172A;
        letter-spacing: -0.02em;
    }

    p {
        font-size: 1.125rem;
        color: #64748B;
        max-width: 600px;
        margin: 0 auto;
        line-height: 1.6;
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.75rem;

    @media (max-width: 1024px) { grid-template-columns: repeat(2, 1fr); }
    @media (max-width: 640px) { grid-template-columns: 1fr; }
`

const ValueCard = styled.div`
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    padding: 2.25rem 1.75rem;
    border-radius: 20px;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);

    &:hover {
        transform: translateY(-4px);
        border-color: #CBD5E1;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05);
    }

    .icon-box {
        width: 52px;
        height: 52px;
        border-radius: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1.5rem;
        transition: transform 0.3s ease;
    }

    &:hover .icon-box {
        transform: scale(1.08);
    }

    h4 {
        font-size: 1.2rem;
        font-weight: 700;
        margin-bottom: 0.75rem;
        color: #0F172A;
    }

    p {
        font-size: 0.95rem;
        color: #64748B;
        line-height: 1.6;
        margin: 0;
    }
`

export default function ValuesGrid() {
    return (
        <Section>
            <Container>
                <Header>
                    <div className="tag">
                        <Compass /> Princípios & Cultura
                    </div>
                    <h2>Nosso DNA Escolar</h2>
                    <p>Não somos apenas uma empresa de tecnologia. Somos parceiros dedicados ao crescimento sustentável da sua escola.</p>
                </Header>

                <Grid>
                    <ValueCard>
                        <div className="icon-box" style={{ background: '#EFF6FF', color: '#2563EB' }}>
                            <Heart size={24} />
                        </div>
                        <h4>Empatia Real</h4>
                        <p>Sabemos que época de matrículas é de altíssima pressão. Criamos automações pensadas para devolver a tranquilidade à sua equipe.</p>
                    </ValueCard>

                    <ValueCard>
                        <div className="icon-box" style={{ background: '#FEF3C7', color: '#D97706' }}>
                            <Zap size={24} />
                        </div>
                        <h4>Simplicidade Intuitiva</h4>
                        <p>Secretarias e consultores não têm tempo para sistemas complexos. O Maskot é fluido e pronto para uso desde o primeiro minuto.</p>
                    </ValueCard>

                    <ValueCard>
                        <div className="icon-box" style={{ background: '#F5F3FF', color: '#7C3AED' }}>
                            <Users size={24} />
                        </div>
                        <h4>O Aluno no Centro</h4>
                        <p>Não tratamos famílias como números ou tickets frios. O Maskot preserva todo o histórico afetivo e o contexto de cada aluno.</p>
                    </ValueCard>

                    <ValueCard>
                        <div className="icon-box" style={{ background: '#F0FDF4', color: '#166534' }}>
                            <ShieldCheck size={24} />
                        </div>
                        <h4>Transparência Total</h4>
                        <p>Sem letras miúdas ou taxas surpresa de implantação. Atuamos como extensão do seu time, comprometidos com seu resultado.</p>
                    </ValueCard>
                </Grid>
            </Container>
        </Section>
    )
}