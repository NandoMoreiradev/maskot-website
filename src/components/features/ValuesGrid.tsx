'use client'

import styled from 'styled-components'
import { Heart, ShieldCheck, Zap, Users } from 'lucide-react'

const Section = styled.section`
    padding: 6rem 0;
    background: ${props => props.theme.colors.textDark};
`

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
`

const Header = styled.div`
    text-align: center;
    margin-bottom: 5rem;

    h2 {
        font-size: 2.5rem;
        font-weight: 800;
        margin-bottom: 1rem;
        color: #FFFFFF;
    }

    p {
        font-size: 1.1rem;
        color: rgba(255, 255, 255, 0.8);
        max-width: 600px;
        margin: 0 auto;
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;

    @media (max-width: 968px) { grid-template-columns: repeat(2, 1fr); }
    @media (max-width: 576px) { grid-template-columns: 1fr; }
`

// --- ESTILOS ATUALIZADOS DO CARD E DO ÍCONE ---
const ValueCard = styled.div`
    background: rgba(255, 255, 255, 0.03); // Fundo do card mais sutil
    border: 1px solid rgba(255, 255, 255, 0.08);
    padding: 2.5rem 2rem; // Mais espaçamento interno
    border-radius: 24px; // Bordas mais arredondadas
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: flex-start; // Alinha tudo à esquerda
    position: relative;
    overflow: hidden;

    &:hover {
        transform: translateY(-8px);
        background: rgba(255, 255, 255, 0.06);
        border-color: rgba(255, 255, 255, 0.2);
        box-shadow: 0 20px 40px -10px rgba(0,0,0,0.3);
    }

    /* ESTILO NOVO DO ÍCONE */
    .icon {
        width: 64px;
        height: 64px;
        /* Fundo translúcido em vez de sólido */
        background: linear-gradient(135deg, rgba(0, 123, 255, 0.1), rgba(0, 123, 255, 0.2));
        border: 1px solid rgba(0, 123, 255, 0.3);
        border-radius: 20px; // Squircle (entre quadrado e círculo)
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1.5rem;
        /* Cor do ícone mais clara para contrastar com o fundo escuro */
        color: #60A5FA;
        transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    /* Efeito ao passar o mouse no CARD */
    &:hover .icon {
        background: ${props => props.theme.colors.primary}; // Fica sólido no hover
        color: white;
        transform: scale(1.1) rotate(3deg); // Pequeno movimento
        box-shadow: 0 10px 20px rgba(0, 123, 255, 0.3);
        border-color: transparent;
    }

    h4 {
        font-size: 1.25rem;
        font-weight: 700;
        margin-bottom: 0.75rem;
        color: #FFFFFF;
    }

    p {
        font-size: 0.95rem;
        color: rgba(255, 255, 255, 0.6);
        line-height: 1.6;
    }
`

export default function ValuesGrid() {
    return (
        <Section>
            <Container>
                <Header>
                    <h2>Nosso DNA Escolar</h2>
                    <p>Não somos uma empresa de software. Somos parceiros de educação.</p>
                </Header>

                <Grid>
                    <ValueCard>
                        <div className="icon"><Heart size={28} strokeWidth={1.5} /></div>
                        <h4>Empatia Real</h4>
                        <p>Sabemos que &quot;rematrícula&quot; é uma época estressante. Criamos recursos para aliviar essa pressão.</p>
                    </ValueCard>

                    <ValueCard>
                        <div className="icon"><Zap size={28} strokeWidth={1.5} /></div>
                        <h4>Simplicidade</h4>
                        <p>Secretarias não têm tempo para aprender sistemas complexos. O Maskot é intuitivo desde o dia 1.</p>
                    </ValueCard>

                    <ValueCard>
                        <div className="icon"><Users size={28} strokeWidth={1.5} /></div>
                        <h4>Aluno no Centro</h4>
                        <p>Não tratamos alunos como &quot;tickets&quot;. Nosso CRM mostra o histórico, a família e o contexto.</p>
                    </ValueCard>

                    <ValueCard>
                        <div className="icon"><ShieldCheck size={28} strokeWidth={1.5} /></div>
                        <h4>Transparência</h4>
                        <p>Sem letras miúdas. Sem taxas de implementação surpresa. Somos parceiros do seu crescimento.</p>
                    </ValueCard>
                </Grid>
            </Container>
        </Section>
    )
}