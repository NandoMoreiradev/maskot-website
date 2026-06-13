'use client'

import styled, { keyframes } from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import {
    Sparkles, Sun, BrainCircuit, Zap, PencilLine,
    ArrowRight, BarChart3, Calendar, AlertTriangle, CheckCircle2
} from 'lucide-react'

const float = keyframes`
    0% { transform: translateY(0px); }
    50% { transform: translateY(-12px); }
    100% { transform: translateY(0px); }
`

const Section = styled.section`
    padding: 6rem 0;
    background: linear-gradient(180deg, ${props => props.theme.colors.white} 0%, #FFFBF7 100%);
    position: relative;
    overflow: hidden;
`

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
`

const Layout = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;

    @media (max-width: 968px) {
        grid-template-columns: 1fr;
        gap: 3rem;
    }
`

const TextContent = styled.div`
    @media (max-width: 968px) {
        text-align: center;
    }
`

const MiaTopRow = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.25rem;

    @media (max-width: 968px) {
        flex-direction: column;
        gap: 0.75rem;
    }
`

const MascotWrapper = styled.div`
    position: relative;
    width: 64px;
    height: 64px;
    flex-shrink: 0;
    filter: drop-shadow(0 8px 16px rgba(249, 115, 22, 0.25));
    animation: ${float} 6s ease-in-out infinite;
`

const Tag = styled.span`
    background: #FFF0F5;
    color: #F97316;
    padding: 0.4rem 0.9rem;
    border-radius: 20px;
    font-weight: 700;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    border: 1px solid #FFEDD5;
`

const Title = styled.h2`
    font-size: 2.5rem;
    font-weight: 800;
    line-height: 1.15;
    margin-bottom: 1.25rem;
    color: ${props => props.theme.colors.textDark};

    span {
        background: linear-gradient(135deg, #F97316 0%, #F59E0B 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`

const Subtitle = styled.p`
    font-size: 1.1rem;
    color: ${props => props.theme.colors.textMedium};
    line-height: 1.6;
    margin-bottom: 2rem;
`

const Highlights = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;
    margin-bottom: 2.5rem;

    @media (max-width: 560px) {
        grid-template-columns: 1fr;
    }
`

const Highlight = styled.div`
    display: flex;
    gap: 0.85rem;
    align-items: flex-start;
    text-align: left;

    .ic {
        width: 38px;
        height: 38px;
        border-radius: 10px;
        background: #FFF7ED;
        color: #F97316;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }

    h4 {
        font-size: 0.98rem;
        font-weight: 700;
        color: ${props => props.theme.colors.textDark};
        margin: 0 0 0.2rem;
    }

    p {
        font-size: 0.85rem;
        color: ${props => props.theme.colors.textMedium};
        margin: 0;
        line-height: 1.4;
    }
`

const Buttons = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;

    @media (max-width: 968px) {
        justify-content: center;
    }

    @media (max-width: 480px) {
        flex-direction: column;
    }
`

const PrimaryBtn = styled(Link)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background: linear-gradient(135deg, #F97316 0%, #F59E0B 100%);
    color: white;
    font-weight: 700;
    font-size: 1rem;
    padding: 0.9rem 2rem;
    border-radius: 8px;
    text-decoration: none;
    box-shadow: 0 8px 20px rgba(249, 115, 22, 0.3);
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 12px 28px rgba(249, 115, 22, 0.4);
    }
`

const SecondaryBtn = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background: white;
    color: ${props => props.theme.colors.textDark};
    font-weight: 600;
    font-size: 1rem;
    padding: 0.9rem 2rem;
    border: 1px solid ${props => props.theme.colors.borderLight};
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        border-color: #F97316;
        color: #F97316;
    }
`

// --- VISUAL: BRIEFING DIÁRIO DA MIA ---

const Visual = styled.div`
    display: flex;
    justify-content: center;
`

const BriefingCard = styled.div`
    background: white;
    border-radius: 20px;
    box-shadow: 0 25px 50px -12px rgba(249, 115, 22, 0.15);
    padding: 1.5rem;
    border: 1px solid #FFEDD5;
    max-width: 400px;
    width: 100%;
    animation: ${float} 7s ease-in-out infinite;
`

const BriefingHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 1.25rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #F1F5F9;

    .avatar-mia {
        width: 40px;
        height: 40px;
        background: linear-gradient(135deg, #F97316 0%, #F59E0B 100%);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.1rem;
    }

    .greeting {
        h5 { margin: 0; font-size: 0.95rem; font-weight: 700; color: #0F172A; }
        span { font-size: 0.75rem; color: #64748B; }
    }
`

const BriefingBlock = styled.div`
    margin-bottom: 1rem;

    .section-title {
        font-size: 0.72rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: #94A3B8;
        margin-bottom: 0.5rem;
        display: flex;
        align-items: center;
        gap: 5px;
    }

    .metric-row {
        display: flex;
        justify-content: space-between;
        font-size: 0.9rem;
        color: #334155;
        padding: 0.35rem 0;
        border-bottom: 1px solid #F8FAFC;

        strong { color: #0F172A; }
    }

    .alert-row {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 0.9rem;
        color: #DC2626;
        padding: 0.35rem 0;
    }

    .ok-row {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 0.9rem;
        color: #16A34A;
        padding: 0.35rem 0;
    }
`

const BriefingSuggestion = styled.div`
    background: #FFF7ED;
    border-left: 4px solid #F97316;
    padding: 0.75rem 1rem;
    border-radius: 0 8px 8px 0;
    font-size: 0.88rem;
    color: #431407;
    line-height: 1.4;

    strong { display: block; margin-bottom: 4px; color: #C2410C; font-size: 0.75rem; text-transform: uppercase; }
`

const highlights = [
    { icon: <Sun size={20} />, title: 'Briefing diário', text: 'Seu dia começa com funil, agenda e prioridades já resumidos.' },
    { icon: <BrainCircuit size={20} />, title: 'Análise de lead', text: 'Diagnóstico de risco e oportunidade de cada família, em um clique.' },
    { icon: <Zap size={20} />, title: 'Próxima melhor ação', text: 'Ela sugere o que fazer para fechar a matrícula — e quando.' },
    { icon: <PencilLine size={20} />, title: 'Redigir mensagem', text: 'Mensagens humanizadas no tom da sua escola, prontas em segundos.' },
]

export default function HomeMiaSection() {
    return (
        <Section id="mia">
            <Container>
                <Layout>
                    <TextContent>
                        <MiaTopRow>
                            <MascotWrapper>
                                <Image src="/mia.png" alt="Mia, a copilota de IA do Maskot" fill style={{ objectFit: 'contain' }} />
                            </MascotWrapper>
                            <Tag>Inteligência Artificial Nativa</Tag>
                        </MiaTopRow>

                        <Title>
                            Conheça a <span>Mia</span>, a copilota de IA do seu comercial
                        </Title>

                        <Subtitle>
                            A Mia entende o contexto da sua escola: prepara o briefing do seu dia, analisa cada lead,
                            sugere a próxima ação e escreve a mensagem perfeita no tom da sua escola — para o consultor
                            focar no que importa: fechar a matrícula.
                        </Subtitle>

                        <Highlights>
                            {highlights.map(h => (
                                <Highlight key={h.title}>
                                    <span className="ic">{h.icon}</span>
                                    <div>
                                        <h4>{h.title}</h4>
                                        <p>{h.text}</p>
                                    </div>
                                </Highlight>
                            ))}
                        </Highlights>

                        <Buttons>
                            <PrimaryBtn href="/funcionalidades/copilot-mia">
                                Conheça a Mia <ArrowRight size={18} />
                            </PrimaryBtn>
                            <SecondaryBtn onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}>
                                Agendar uma demo
                            </SecondaryBtn>
                        </Buttons>
                    </TextContent>

                    <Visual aria-hidden="true">
                        <BriefingCard>
                            <BriefingHeader>
                                <div className="avatar-mia">🦊</div>
                                <div className="greeting">
                                    <h5>Bom dia, Ana! Aqui está seu briefing.</h5>
                                    <span>Segunda-feira — 08:02</span>
                                </div>
                            </BriefingHeader>

                            <BriefingBlock>
                                <div className="section-title"><BarChart3 size={12} /> Funil de Matrículas</div>
                                <div className="metric-row"><span>🔥 Quentes</span><strong>12 leads</strong></div>
                                <div className="metric-row"><span>🌡️ Mornos</span><strong>28 leads</strong></div>
                                <div className="metric-row"><span>✅ Matrículas (mês)</span><strong>18 alunos</strong></div>
                            </BriefingBlock>

                            <BriefingBlock>
                                <div className="section-title"><Calendar size={12} /> Agenda de Hoje</div>
                                <div className="ok-row"><CheckCircle2 size={14} /> 3 visitas agendadas</div>
                                <div className="alert-row"><AlertTriangle size={14} /> 4 leads em risco de abandono</div>
                            </BriefingBlock>

                            <BriefingSuggestion>
                                <strong><Sparkles size={11} style={{ display: 'inline', marginRight: 4 }} />Sugestão da Mia</strong>
                                Priorize ligar para os 4 leads em risco hoje — estão há mais de 5 dias sem contato e têm visita marcada essa semana.
                            </BriefingSuggestion>
                        </BriefingCard>
                    </Visual>
                </Layout>
            </Container>
        </Section>
    )
}
