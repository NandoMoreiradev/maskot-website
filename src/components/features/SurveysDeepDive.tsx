'use client'

import styled, { keyframes, css } from 'styled-components'
import {
    Gauge, TrendingUp, Users, Smile, Meh, Frown,
    ListChecks, Star, MessageSquare, ClipboardList,
    Send, MessageCircle, Mail, Link2,
    Filter, Download, ShieldCheck, Palette, Globe, Layers
} from 'lucide-react'

// --- Animations ---
const float = keyframes`
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
`

const Section = styled.section`
    padding: 6rem 0;
    background: #FFFFFF;
    overflow: hidden;
`

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
`

const FeatureRow = styled.div<{ $reverse?: boolean }>`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    align-items: center;
    margin-bottom: 8rem;

    @media (max-width: ${props => props.theme.breakpoints.lg}) {
        grid-template-columns: 1fr;
        gap: 3rem;
        margin-bottom: 6rem;
        display: flex;
        flex-direction: column-reverse;
        ${props => !props.$reverse && css`flex-direction: column;`}
    }
`

const TextContent = styled.div`
    h3 {
        font-family: ${props => props.theme.typography.fontFamily.main};
        font-size: ${props => props.theme.typography.fontSize['3xl']};
        font-weight: 700;
        margin-bottom: 1.5rem;
        letter-spacing: -0.02em;
        line-height: 1.2;
        color: #0F172A;
    }
    p {
        font-family: ${props => props.theme.typography.fontFamily.main};
        font-size: ${props => props.theme.typography.fontSize.lg};
        color: #475569;
        line-height: 1.6;
        margin-bottom: 2.5rem;
    }
    ul {
        list-style: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
    }
    li {
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        font-size: ${props => props.theme.typography.fontSize.base};
        font-weight: 500;
        color: #334155;
        svg {
            color: #64748B;
            flex-shrink: 0;
            margin-top: 2px;
        }
    }
`

const MockupCard = styled.div`
    background: #FFFFFF;
    border-radius: 1rem;
    border: 1px solid #E2E8F0;
    overflow: hidden;
    position: relative;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
`

const MockupHeader = styled.div`
    height: 48px;
    background: #F8FAFC;
    border-bottom: 1px solid #E2E8F0;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    gap: 0.5rem;
    .dots { display: flex; gap: 6px; div { width: 8px; height: 8px; border-radius: 50%; background: #CBD5E1; } }
`

// --- MOCKUP 1: NPS SCORE ---
const NpsMock = styled.div`
    padding: 24px;
    background: #FFFFFF;

    .score-row { display: flex; align-items: center; gap: 24px; margin-bottom: 24px; }
    .score-circle {
        width: 80px; height: 80px; border-radius: 50%;
        background: white; border: 2px solid #E2E8F0;
        display: flex; align-items: center; justify-content: center;
        flex-direction: column; flex-shrink: 0;
        .num { font-size: 24px; font-weight: 700; color: #0F172A; line-height: 1; }
        .label { font-size: 10px; color: #64748B; font-weight: 600; text-transform: uppercase; margin-top: 4px; }
    }
    .breakdown { flex: 1; display: flex; flex-direction: column; gap: 12px; }
    .bar-row { display: flex; align-items: center; gap: 12px; font-size: 13px; color: #475569; }
    .bar-track { flex: 1; height: 6px; background: #F1F5F9; border-radius: 3px; overflow: hidden; }
    .bar-fill { height: 100%; border-radius: 3px; background: #94A3B8; }
    .pct { width: 36px; text-align: right; font-weight: 500; font-variant-numeric: tabular-nums; }

    .chart-area {
        background: #F8FAFC; border-radius: 0.75rem; border: 1px solid #E2E8F0; padding: 20px;
        h4 { margin: 0 0 16px 0; font-size: 13px; color: #475569; font-weight: 500; }
        .graph { height: 80px; width: 100%; position: relative; border-bottom: 1px dashed #CBD5E1; }
        svg.trend { width: 100%; height: 100%; overflow: visible; }
        path { fill: none; stroke: #94A3B8; stroke-width: 2; }
    }
`

// --- MOCKUP 2: CONSTRUTOR DE PERGUNTAS ---
const BuilderMock = styled.div`
    padding: 20px;
    background: #FFFFFF;

    .q-item {
        display: flex; align-items: center; gap: 16px;
        padding: 16px; border-radius: 0.75rem; margin-bottom: 12px;
        border: 1px solid #E2E8F0; background: #FFFFFF;
        transition: all 0.2s;
        &.active { border-color: #94A3B8; background: #F8FAFC; }
    }
    .q-icon {
        width: 32px; height: 32px; border-radius: 6px; flex-shrink: 0;
        background: #F1F5F9; border: 1px solid #E2E8F0;
        display: flex; align-items: center; justify-content: center; color: #64748B;
    }
    .q-text { flex: 1; min-width: 0; }
    .q-title { font-size: 13px; font-weight: 500; color: #0F172A; margin-bottom: 4px; }
    .q-type { font-size: 12px; color: #64748B; }
    .q-req { font-size: 11px; font-weight: 500; color: #64748B; background: #F1F5F9; padding: 4px 8px; border-radius: 4px; flex-shrink: 0; border: 1px solid #E2E8F0; }
`

// --- MOCKUP 3: DISPARO MULTICANAL ---
const DispatchMock = styled.div`
    padding: 0;
    background: #FFFFFF;

    .table-header {
        display: flex; padding: 16px 24px; background: #F8FAFC; border-bottom: 1px solid #E2E8F0;
        font-size: 12px; font-weight: 500; color: #64748B; text-transform: none;
        div { flex: 1; }
        .right { text-align: right; }
    }
    .row {
        display: flex; padding: 16px 24px; border-bottom: 1px solid #F1F5F9; align-items: center;
        &:last-child { border: none; }
        div { flex: 1; font-size: 13px; color: #334155; }
        .channel { display: flex; align-items: center; gap: 12px; font-weight: 500; }
        .right { text-align: right; font-weight: 500; font-variant-numeric: tabular-nums; }
        .rate-good { color: #475569; }
        .rate-mid { color: #64748B; }
    }
    .icon-wa, .icon-mail, .icon-link { color: #64748B; width: 16px; height: 16px; }
`

// --- MOCKUP 4: RESPOSTAS INDIVIDUAIS ---
const ResponsesMock = styled.div`
    padding: 20px;
    background: #FFFFFF;

    .r-item {
        display: flex; align-items: center; gap: 16px;
        padding: 16px; border-radius: 0.75rem; margin-bottom: 12px;
        background: #FFFFFF; border: 1px solid #E2E8F0;
    }
    .avatar {
        width: 36px; height: 36px; border-radius: 50%; flex-shrink: 0;
        display: flex; align-items: center; justify-content: center;
        font-size: 12px; font-weight: 600; color: #475569; background: #F1F5F9;
        border: 1px solid #E2E8F0;
    }
    .r-text { flex: 1; min-width: 0; }
    .r-name { font-size: 13px; font-weight: 500; color: #0F172A; margin-bottom: 4px; }
    .r-date { font-size: 12px; color: #64748B; }
    .badge {
        font-size: 11px; font-weight: 500; padding: 4px 10px; border-radius: 999px; flex-shrink: 0;
        background: #F8FAFC; color: #475569; border: 1px solid #E2E8F0;
    }
`

// --- POWER GRID ---
const PowerGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin-top: 4rem;
    @media (max-width: ${props => props.theme.breakpoints.md}) { grid-template-columns: 1fr; }
`
const PowerCard = styled.div`
    background: #FFFFFF;
    padding: 2rem;
    border-radius: 1rem;
    border: 1px solid #E2E8F0;
    transition: all 0.2s;
    &:hover {
        border-color: #CBD5E1;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
    }
    .icon {
        width: 40px; height: 40px; border-radius: 8px;
        background: #F8FAFC; display: flex; align-items: center; justify-content: center;
        color: #475569; margin-bottom: 1.25rem;
        border: 1px solid #E2E8F0;
    }
    h4 { font-size: 1.125rem; font-weight: 600; margin-bottom: 0.5rem; color: #0F172A; }
    p { font-size: 0.875rem; color: #64748B; line-height: 1.5; margin: 0; }
`

export default function SurveysDeepDive() {
    return (
        <Section id="recursos">
            <Container>

                {/* 1. NPS SCORE */}
                <FeatureRow>
                    <TextContent>
                        <h3>Meça a lealdade com NPS automático</h3>
                        <p>
                            Chega de planilha para calcular satisfação. O Maskot Edu calcula o
                            <strong> Net Promoter Score</strong> em tempo real a cada resposta recebida,
                            classificando pais e alunos entre Promotores, Neutros e Detratores.
                        </p>
                        <ul>
                            <li><Gauge size={20}/> <strong>Score em tempo real:</strong> Acompanhe a nota da sua escola sem planilhas manuais.</li>
                            <li><Users size={20}/> <strong>Classificação automática:</strong> Promotores, Neutros e Detratores separados por resposta.</li>
                            <li><TrendingUp size={20}/> <strong>Tendência histórica:</strong> Veja se a satisfação está subindo ou caindo mês a mês.</li>
                        </ul>
                    </TextContent>
                    <MockupCard>
                        <MockupHeader><div className="dots"><div></div><div></div><div></div></div></MockupHeader>
                        <NpsMock>
                            <div className="score-row">
                                <div className="score-circle">
                                    <span className="num">78</span>
                                    <span className="label">NPS</span>
                                </div>
                                <div className="breakdown">
                                    <div className="bar-row">
                                        <Smile size={14} color="#10B981" />
                                        <div className="bar-track"><div className="bar-fill" style={{width: '82%', background: '#10B981'}} /></div>
                                        <span className="pct">82%</span>
                                    </div>
                                    <div className="bar-row">
                                        <Meh size={14} color="#F59E0B" />
                                        <div className="bar-track"><div className="bar-fill" style={{width: '12%', background: '#F59E0B'}} /></div>
                                        <span className="pct">12%</span>
                                    </div>
                                    <div className="bar-row">
                                        <Frown size={14} color="#EF4444" />
                                        <div className="bar-track"><div className="bar-fill" style={{width: '6%', background: '#EF4444'}} /></div>
                                        <span className="pct">6%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="chart-area">
                                <h4>Evolução do NPS (90 dias)</h4>
                                <div className="graph">
                                    <svg className="trend" viewBox="0 0 100 50" preserveAspectRatio="none">
                                        <defs>
                                            <linearGradient id="npsGradient" x1="0" x2="0" y1="0" y2="1">
                                                <stop offset="0%" stopColor="#4338CA" stopOpacity="0.2"/>
                                                <stop offset="100%" stopColor="#4338CA" stopOpacity="0"/>
                                            </linearGradient>
                                        </defs>
                                        <path d="M0,40 L0,35 Q10,32 20,30 T40,22 T60,25 T80,12 L100,8 L100,50 L0,50 Z" />
                                    </svg>
                                </div>
                            </div>
                        </NpsMock>
                    </MockupCard>
                </FeatureRow>

                {/* 2. CONSTRUTOR DE PERGUNTAS */}
                <FeatureRow $reverse>
                    <MockupCard>
                        <MockupHeader><div className="dots"><div></div><div></div><div></div></div></MockupHeader>
                        <BuilderMock>
                            <div className="q-item active">
                                <div className="q-icon"><Gauge size={16}/></div>
                                <div className="q-text">
                                    <div className="q-title">O quanto você recomendaria a escola?</div>
                                    <div className="q-type">Escala NPS (0 a 10)</div>
                                </div>
                                <div className="q-req">Obrigatória</div>
                            </div>
                            <div className="q-item">
                                <div className="q-icon"><Star size={16}/></div>
                                <div className="q-text">
                                    <div className="q-title">Como avalia o atendimento?</div>
                                    <div className="q-type">Avaliação por estrelas</div>
                                </div>
                            </div>
                            <div className="q-item">
                                <div className="q-icon"><ListChecks size={16}/></div>
                                <div className="q-text">
                                    <div className="q-title">O que mais te chamou atenção?</div>
                                    <div className="q-type">Múltipla escolha</div>
                                </div>
                            </div>
                            <div className="q-item">
                                <div className="q-icon"><MessageSquare size={16}/></div>
                                <div className="q-text">
                                    <div className="q-title">Deixe um comentário</div>
                                    <div className="q-type">Texto livre</div>
                                </div>
                            </div>
                        </BuilderMock>
                    </MockupCard>
                    <TextContent>
                        <h3>Monte a pesquisa do seu jeito</h3>
                        <p>
                            Um construtor visual com <strong>11 tipos de pergunta</strong> — de NPS e CSAT
                            a estrelas, matriz e ranqueamento. Escolha um modelo pronto ou monte do zero
                            em minutos.
                        </p>
                        <ul>
                            <li><ClipboardList size={20}/> <strong>Modelos prontos:</strong> Pós-matrícula, pós-visita e satisfação anual já configurados.</li>
                            <li><Layers size={20}/> <strong>Uma pergunta por vez:</strong> Ative o modo com barra de progresso para aumentar a taxa de conclusão.</li>
                            <li><Palette size={20}/> <strong>Página de agradecimento:</strong> Personalize a mensagem final e o botão de ação.</li>
                        </ul>
                    </TextContent>
                </FeatureRow>

                {/* 3. DISPARO MULTICANAL */}
                <FeatureRow>
                    <TextContent>
                        <h3>Alcance a família onde ela está</h3>
                        <p>
                            Dispare pesquisas direto pelas campanhas de <strong>WhatsApp e E-mail</strong> que
                            você já usa, ou compartilhe um link público com o seu domínio e a sua marca.
                        </p>
                        <ul>
                            <li><Send size={20}/> <strong>Disparo integrado:</strong> Envie para toda a base ou um segmento específico direto do CRM.</li>
                            <li><Globe size={20}/> <strong>Link com domínio próprio:</strong> Página de resposta com a sua logo, cores e domínio.</li>
                            <li><ShieldCheck size={20}/> <strong>Anônimo ou identificado:</strong> Você decide se quer rastrear quem respondeu.</li>
                        </ul>
                    </TextContent>
                    <MockupCard>
                        <MockupHeader><div className="dots"><div></div><div></div><div></div></div></MockupHeader>
                        <DispatchMock>
                            <div className="table-header">
                                <div>Canal</div>
                                <div>Enviados</div>
                                <div className="right">Taxa de resposta</div>
                            </div>
                            <div className="row">
                                <div className="channel"><MessageCircle size={16} className="icon-wa" /> WhatsApp</div>
                                <div>312</div>
                                <div className="right rate-good">64%</div>
                            </div>
                            <div className="row">
                                <div className="channel"><Mail size={16} className="icon-mail" /> E-mail</div>
                                <div>540</div>
                                <div className="right rate-mid">28%</div>
                            </div>
                            <div className="row">
                                <div className="channel"><Link2 size={16} className="icon-link" /> Link público</div>
                                <div>89</div>
                                <div className="right rate-good">71%</div>
                            </div>
                        </DispatchMock>
                    </MockupCard>
                </FeatureRow>

                {/* 4. RESPOSTAS INDIVIDUAIS */}
                <FeatureRow $reverse>
                    <MockupCard>
                        <MockupHeader><div className="dots"><div></div><div></div><div></div></div></MockupHeader>
                        <ResponsesMock>
                            <div className="r-item">
                                <div className="avatar">AS</div>
                                <div className="r-text">
                                    <div className="r-name">Ana Silva (Mãe do João)</div>
                                    <div className="r-date">Respondeu há 2 horas</div>
                                </div>
                                <div className="badge">Promotor</div>
                            </div>
                            <div className="r-item">
                                <div className="avatar">CS</div>
                                <div className="r-text">
                                    <div className="r-name">Carlos Souza (Pai da Beatriz)</div>
                                    <div className="r-date">Respondeu ontem</div>
                                </div>
                                <div className="badge">Neutro</div>
                            </div>
                            <div className="r-item">
                                <div className="avatar">ML</div>
                                <div className="r-text">
                                    <div className="r-name">Mariana Lima (Mãe do Pedro)</div>
                                    <div className="r-date">Respondeu há 3 dias</div>
                                </div>
                                <div className="badge">Detrator</div>
                            </div>
                        </ResponsesMock>
                    </MockupCard>
                    <TextContent>
                        <h3>Cada resposta vira uma ação</h3>
                        <p>
                            Toda resposta fica conectada ao cadastro do aluno ou responsável no CRM.
                            Filtre detratores e crie uma tarefa ou automação de recuperação na hora.
                        </p>
                        <ul>
                            <li><Filter size={20}/> <strong>Filtro por categoria:</strong> Isole rapidamente quem está insatisfeito.</li>
                            <li><Users size={20}/> <strong>Contexto completo:</strong> Veja o histórico do lead junto com a resposta.</li>
                            <li><Download size={20}/> <strong>Exportação:</strong> Baixe todas as respostas em CSV ou Excel.</li>
                        </ul>
                    </TextContent>
                </FeatureRow>

                {/* 5. POWER GRID */}
                <div style={{textAlign: 'center', marginBottom: '3rem'}}>
                    <h3 style={{
                        fontSize: '2rem',
                        fontWeight: 700,
                        color: '#0F172A',
                        fontFamily: 'var(--font-inter)',
                        letterSpacing: '-0.02em'
                    }}>Feito para o dia a dia da escola</h3>
                    <p style={{color: '#475569', marginTop: '0.75rem', fontSize: '1.125rem'}}>Recursos que garantem respostas de verdade, não só envios.</p>
                </div>

                <PowerGrid>
                    <PowerCard>
                        <div className="icon"><Palette size={24}/></div>
                        <h4>Marca personalizada</h4>
                        <p>Logo, cores e fonte da sua escola na página de resposta pública.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><Globe size={24}/></div>
                        <h4>Domínio próprio</h4>
                        <p>Publique a pesquisa em um endereço com a cara da sua marca.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><ClipboardList size={24}/></div>
                        <h4>Modelos prontos</h4>
                        <p>Pesquisas de pós-matrícula, pós-visita e satisfação já configuradas.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><Layers size={24}/></div>
                        <h4>Uma pergunta por vez</h4>
                        <p>Modo com barra de progresso que aumenta a taxa de conclusão.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><ShieldCheck size={24}/></div>
                        <h4>Respostas anônimas</h4>
                        <p>Permita feedback sincero sem identificar quem respondeu.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><Send size={24}/></div>
                        <h4>Disparo por campanha</h4>
                        <p>Envie pesquisas junto das suas campanhas de WhatsApp e E-mail.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><Download size={24}/></div>
                        <h4>Exportação completa</h4>
                        <p>Baixe respostas, notas e comentários para analisar onde quiser.</p>
                    </PowerCard>
                </PowerGrid>

            </Container>
        </Section>
    )
}
