'use client'

import styled, { keyframes } from 'styled-components'
import Link from 'next/link'
import {
    Sparkles, Wrench, Search, MessageSquare,
    Zap, BrainCircuit, ListChecks, Activity,
    ShieldCheck, Clock, FileText, ArrowRight,
    Calendar, Mail, BookOpen, Globe, Bot,
    TrendingUp, AlertTriangle, CheckCircle2,
    Copy, MessageCircle, Users, BarChart3,
    History, BellRing
} from 'lucide-react'

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

const SplitLayout = styled.div<{ $reverse?: boolean }>`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    align-items: center;
    margin-bottom: 8rem;

    @media (max-width: ${props => props.theme.breakpoints.lg}) {
        grid-template-columns: 1fr;
        gap: 3rem;
        display: flex;
        flex-direction: column-reverse;
        ${props => !props.$reverse && 'flex-direction: column;'}
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
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
        list-style: none;
        padding: 0;
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

const SectionLabel = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: transparent;
    color: #475569;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: 0.4rem 0.8rem;
    border-radius: 999px;
    margin-bottom: 1rem;
    border: 1px solid #E2E8F0;
`

// --- MOCKUP DE CHAT / TOOL CALLING ---
const ChatMockup = styled.div`
    background: #FFFFFF;
    border-radius: 1rem;
    border: 1px solid #E2E8F0;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
    padding: 1.5rem;
    max-width: 450px;
    margin: 0 auto;
    position: relative;
    animation: ${float} 8s ease-in-out infinite;
`

const UserBubble = styled.div`
    background: #F1F5F9;
    color: #0F172A;
    padding: 1rem;
    border-radius: 12px 12px 0 12px;
    margin-bottom: 1rem;
    align-self: flex-end;
    width: fit-content;
    margin-left: auto;
    font-size: 0.95rem;
    border: 1px solid #E2E8F0;
`

const ToolCallIndicator = styled.div`
    background: #F8FAFC;
    border: 1px dashed #CBD5E1;
    color: #64748B;
    padding: 0.75rem;
    border-radius: 8px;
    font-size: 0.8rem;
    font-family: monospace;
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 1rem;

    svg {
        animation: spin 3s linear infinite;
    }

    @keyframes spin {
        100% { transform: rotate(360deg); }
    }
`

const MiaBubble = styled.div`
    background: linear-gradient(135deg, #F97316 0%, #F59E0B 100%);
    color: white;
    padding: 1rem;
    border-radius: 12px 12px 12px 0;
    margin-bottom: 1rem;
    width: 90%;
    font-size: 0.95rem;
    line-height: 1.5;

    .data-table {
        margin-top: 10px;
        background: rgba(255,255,255,0.15);
        border-radius: 6px;
        padding: 8px;
        font-size: 0.85rem;
    }
`

const FeatureGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;

    @media (max-width: ${props => props.theme.breakpoints.md}) {
        grid-template-columns: 1fr;
    }
`

const FeatureCard = styled.div`
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
        width: 40px;
        height: 40px;
        background: #F8FAFC;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #475569;
        border: 1px solid #E2E8F0;
        margin-bottom: 1.25rem;
    }

    h4 {
        font-size: 1.125rem;
        font-weight: 600;
        color: #0F172A;
        margin-bottom: 0.5rem;
    }

    p {
        font-size: 0.875rem;
        color: #64748B;
        line-height: 1.5;
        margin: 0;
    }
`

// --- CARD DE NEXT BEST ACTION ---
const NbaCard = styled.div`
    background: #FFFFFF;
    border-radius: 1rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
    padding: 1.5rem;
    border: 1px solid #E2E8F0;
    position: relative;

    .header {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 1rem;
        border-bottom: 1px solid #F1F5F9;
        padding-bottom: 1rem;

        .avatar {
            width: 40px;
            height: 40px;
            background: #F8FAFC;
            color: #475569;
            border: 1px solid #E2E8F0;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
        }

        .info {
            h5 { margin: 0; color: #0F172A; font-size: 1rem; font-weight: 600; }
            span { font-size: 0.8rem; color: #64748B; font-weight: 500; }
        }
    }

    .mia-insight {
        background: #FFFFFF;
        border: 1px solid #E2E8F0;
        border-left: 4px solid #F97316;
        padding: 1rem;
        border-radius: 8px;

        .title {
            display: flex;
            align-items: center;
            gap: 6px;
            color: #0F172A;
            font-weight: 700;
            font-size: 0.85rem;
            margin-bottom: 8px;
            text-transform: uppercase;
        }

        p {
            font-size: 0.95rem;
            color: #334155;
            margin: 0;
            line-height: 1.5;
        }

        .action-btn {
            background: #0F172A;
            color: white;
            padding: 8px 16px;
            border-radius: 6px;
            font-size: 0.85rem;
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            margin-top: 12px;
            cursor: pointer;
            border: 1px solid transparent;
            transition: all 0.2s;

            &:hover {
                background: #1E293B;
            }
        }
    }
`

// --- BRIEFING DIÁRIO ---
const BriefingCard = styled.div`
    background: #FFFFFF;
    border-radius: 1rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
    padding: 1.5rem;
    border: 1px solid #E2E8F0;
    max-width: 420px;
    margin: 0 auto;
    animation: ${float} 7s ease-in-out infinite;
`

const BriefingHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
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
        color: white;
        font-size: 1.1rem;
    }

    .greeting {
        h5 { margin: 0; font-size: 0.95rem; font-weight: 600; color: #0F172A; }
        span { font-size: 0.75rem; color: #64748B; font-weight: 500; }
    }
`

const BriefingSection = styled.div`
    margin-bottom: 1.25rem;

    .section-title {
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: #64748B;
        margin-bottom: 0.5rem;
    }

    .metric-row {
        display: flex;
        justify-content: space-between;
        font-size: 0.9rem;
        color: #475569;
        padding: 0.5rem 0;
        border-bottom: 1px solid #F8FAFC;

        strong { color: #0F172A; font-weight: 600; }
    }

    .alert-row {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 0.9rem;
        color: #0F172A;
        font-weight: 500;
        padding: 0.5rem 0;

        svg { flex-shrink: 0; color: #EF4444; }
    }

    .ok-row {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 0.9rem;
        color: #0F172A;
        font-weight: 500;
        padding: 0.5rem 0;

        svg { flex-shrink: 0; color: #10B981; }
    }
`

const BriefingSuggestion = styled.div`
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-left: 4px solid #F97316;
    padding: 1rem;
    border-radius: 8px;
    font-size: 0.9rem;
    color: #334155;
    line-height: 1.5;

    strong { display: flex; align-items: center; gap: 6px; margin-bottom: 6px; color: #0F172A; font-size: 0.85rem; font-weight: 600; text-transform: uppercase; }
`

// --- ANÁLISE DE LEAD ---
const LeadAnalysisCard = styled.div`
    background: #FFFFFF;
    border-radius: 1rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
    padding: 1.5rem;
    border: 1px solid #E2E8F0;
    max-width: 420px;
    margin: 0 auto;
    animation: ${float} 8s ease-in-out infinite;
`

const LeadHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 1.25rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #F1F5F9;

    .avatar {
        width: 44px;
        height: 44px;
        background: #F8FAFC;
        color: #475569;
        border: 1px solid #E2E8F0;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        font-size: 1rem;
    }

    .lead-info {
        flex: 1;
        h5 { margin: 0; font-size: 1rem; font-weight: 600; color: #0F172A; }

        .tags {
            display: flex;
            gap: 6px;
            margin-top: 4px;
        }

        .tag {
            font-size: 0.7rem;
            padding: 2px 8px;
            border-radius: 999px;
            font-weight: 500;
            border: 1px solid #E2E8F0;
        }

        .tag-hot { background: #FFFFFF; color: #0F172A; }
        .tag-stage { background: #F8FAFC; color: #475569; }
    }
`

const AnalysisBlock = styled.div`
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 0.75rem;

    .block-title {
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: #0F172A;
        margin-bottom: 0.75rem;
        display: flex;
        align-items: center;
        gap: 6px;

        svg { color: #F97316; }
    }

    ul {
        padding-left: 1rem;
        margin: 0;

        li {
            font-size: 0.9rem;
            color: #475569;
            line-height: 1.5;
            margin-bottom: 0.25rem;
        }
    }
`

// --- REDIGIR MENSAGEM ---
const ComposeCard = styled.div`
    background: #FFFFFF;
    border-radius: 1rem;
    border: 1px solid #E2E8F0;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
    padding: 1.5rem;
    max-width: 450px;
    margin: 0 auto;
    animation: ${float} 8s ease-in-out infinite;
`

const ComposeInput = styled.div`
    background: #F8FAFC;
    border-radius: 8px;
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
    color: #475569;
    margin-bottom: 1rem;
    border: 1px dashed #CBD5E1;

    .label { font-size: 0.75rem; color: #64748B; margin-bottom: 4px; font-weight: 500; }
`

const ComposedMessage = styled.div`
    background: #F1F5F9;
    border-radius: 12px 12px 12px 0;
    padding: 1rem;
    color: #0F172A;
    font-size: 0.9rem;
    line-height: 1.6;
    margin-bottom: 1rem;
    border: 1px solid #E2E8F0;
`

const CopyButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    background: #F8FAFC;
    color: #475569;
    border: 1px solid #E2E8F0;
    border-radius: 8px;
    padding: 0.6rem;
    font-size: 0.8rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;

    &:hover { background: #E2E8F0; color: #0F172A; }
`

// --- ONDE A MIA ESTÁ PRESENTE ---
const PresenceSection = styled.div`
    margin-bottom: 8rem;
`

const PresenceSectionHeader = styled.div`
    text-align: center;
    margin-bottom: 3rem;

    h3 {
        font-family: ${props => props.theme.typography.fontFamily.main};
        font-size: 2rem;
        font-weight: 700;
        color: #0F172A;
        margin-bottom: 0.75rem;
        letter-spacing: -0.02em;
    }

    p {
        font-family: ${props => props.theme.typography.fontFamily.main};
        font-size: 1.125rem;
        color: #475569;
    }
`

const PresenceGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;

    @media (max-width: ${props => props.theme.breakpoints.md}) {
        grid-template-columns: 1fr;
    }
`

const PresenceCard = styled.div`
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 1rem;
    padding: 2rem;
    text-align: center;
    transition: all 0.2s;

    &:hover {
        border-color: #CBD5E1;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
        transform: translateY(-4px);
    }

    .icon-wrapper {
        width: 48px;
        height: 48px;
        background: #F8FAFC;
        border: 1px solid #E2E8F0;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 1.25rem;
        color: #475569;
    }

    h4 {
        font-size: 1.125rem;
        font-weight: 600;
        color: #0F172A;
        margin-bottom: 0.75rem;
    }

    p {
        font-size: 0.875rem;
        color: #64748B;
        line-height: 1.5;
        margin: 0;
    }
`

const SectionDivider = styled.div`
    text-align: center;
    margin-bottom: 3rem;

    h3 {
        font-family: ${props => props.theme.typography.fontFamily.main};
        font-size: 2rem;
        font-weight: 700;
        color: #0F172A;
        margin-bottom: 0.5rem;
        letter-spacing: -0.02em;
    }

    p {
        font-family: ${props => props.theme.typography.fontFamily.main};
        color: #475569;
        font-size: 1.125rem;
    }
`

// --- TEASER DO AGENTE COMERCIAL ---
const AgentTeaser = styled(Link)`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-top: 5rem;
    padding: 2rem;
    border-radius: 1rem;
    border: 1px solid #FDBA74;
    background: #FFFBF5;
    text-decoration: none;
    transition: all 0.2s;

    &:hover {
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
        transform: translateY(-2px);
    }

    .icon {
        width: 48px;
        height: 48px;
        border-radius: 12px;
        background: #FFF7ED;
        border: 1px solid #FED7AA;
        color: #EA580C;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }

    .text { flex: 1; }
    h4 { font-size: 1.25rem; font-weight: 700; color: #0F172A; margin: 0 0 0.25rem; }
    p { font-size: 0.95rem; color: #475569; line-height: 1.5; margin: 0; }

    .go {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-weight: 600;
        color: #0F172A;
        white-space: nowrap;
    }

    @media (max-width: ${props => props.theme.breakpoints.md}) {
        flex-direction: column;
        align-items: flex-start;
    }
`

export default function CopilotMiaDeepDive() {
    return (
        <Section id="recursos">
            <Container>
                {/* BLOCO 1: TOOL CALLING E DADOS ESTRUTURADOS */}
                <SplitLayout>
                    <TextContent>
                        <SectionLabel><Wrench size={14} /> Modo: Chat Livre</SectionLabel>
                        <h3>Muito além do Chat: <br />Tool Calling Dinâmico</h3>
                        <p>
                            A Mia não apenas lê textos, ela sabe invocar ferramentas do sistema. Quando você pergunta sobre relatórios complexos, ela ativa os filtros, busca direto no banco de dados e traz a resposta estruturada.
                        </p>
                        <ul>
                            <li><Wrench size={20}/> <strong>Invocação de Ferramentas:</strong> Consulta leads, agenda, tarefas e métricas em tempo real.</li>
                            <li><Search size={20}/> <strong>Filtros Inteligentes:</strong> Ela entende intenções de tempo (ex: &quot;esta semana&quot;, &quot;mês passado&quot;).</li>
                            <li><Activity size={20}/> <strong>Dados Estruturados:</strong> Formata as respostas em tabelas fáceis de ler e decidir.</li>
                        </ul>
                    </TextContent>

                    <ChatMockup>
                        <UserBubble>
                            Quais leads ficaram sem resposta essa semana?
                        </UserBubble>

                        <ToolCallIndicator>
                            <BrainCircuit size={16} />
                            Mia está chamando: search_leads(&#123; status: &quot;no_reply&quot;, timeframe: &quot;this_week&quot; &#125;)
                        </ToolCallIndicator>

                        <MiaBubble>
                            Encontrei 3 leads sem resposta nesta semana. Aqui estão os detalhes para priorizarmos o contato:
                            <div className="data-table">
                                <strong>1. João Pedro</strong> (Matrícula) - Aguardando desde Segunda<br/>
                                <strong>2. Ana Clara</strong> (Visita) - Aguardando desde Terça<br/>
                                <strong>3. Marcos Silva</strong> (Dúvida) - Aguardando desde Quarta
                            </div>
                        </MiaBubble>
                    </ChatMockup>
                </SplitLayout>

                {/* BLOCO 2: NEXT BEST ACTION */}
                <SplitLayout $reverse>
                    <NbaCard>
                        <div className="header">
                            <div className="avatar">CB</div>
                            <div className="info">
                                <h5>Carlos Batista</h5>
                                <span>Lead Quente • 3 interações</span>
                            </div>
                        </div>
                        <div className="mia-insight">
                            <div className="title"><Sparkles size={14}/> Insight da Mia (Next Best Action)</div>
                            <p>O Carlos visitou a escola ontem e demonstrou muito interesse no Ensino Médio. A probabilidade de conversão é alta (85%). Sugiro enviar a proposta financeira agora.</p>
                            <div className="action-btn">
                                Gerar Proposta <ArrowRight size={14} />
                            </div>
                        </div>
                    </NbaCard>

                    <TextContent>
                        <SectionLabel><Zap size={14} /> Modo: Próxima Melhor Ação</SectionLabel>
                        <h3>Ações Sugeridas <br />(Next Best Action)</h3>
                        <p>
                            A Mia analisa constantemente o comportamento dos leads no seu funil e sugere o que o seu consultor deve fazer em seguida para fechar a matrícula.
                        </p>
                        <ul>
                            <li><ListChecks size={20}/> <strong>Análise de Temperatura:</strong> Avalia se o lead está quente ou frio com base no histórico.</li>
                            <li><Clock size={20}/> <strong>Timing Perfeito:</strong> Indica o momento exato para ligar ou enviar propostas.</li>
                            <li><Zap size={20}/> <strong>Atalhos Rápidos:</strong> Gera botões de ação com um clique direto do insight.</li>
                        </ul>
                    </TextContent>
                </SplitLayout>

                {/* BLOCO 3: RESUMO DE CONVERSAS */}
                <SplitLayout>
                    <TextContent>
                        <SectionLabel><MessageSquare size={14} /> Modos: Resumir + Sugerir Resposta</SectionLabel>
                        <h3>Resumo de Históricos e <br />Sugestão de Respostas</h3>
                        <p>
                            Sabe aquele lead que mandou 50 áudios e mensagens no WhatsApp? A Mia lê a conversa inteira, cria um resumo em tópicos e já escreve a melhor resposta para você enviar.
                        </p>
                        <ul>
                            <li><FileText size={20}/> <strong>Resumo Imediato:</strong> Entenda o contexto de negociações longas em 10 segundos.</li>
                            <li><MessageSquare size={20}/> <strong>Respostas Prontas:</strong> Ela sugere mensagens humanizadas baseadas no tom da escola.</li>
                            <li><ShieldCheck size={20}/> <strong>Revisão Humana:</strong> Você sempre pode editar e aprovar a mensagem antes de enviar.</li>
                        </ul>
                    </TextContent>

                    <div style={{ background: '#FFFFFF', padding: '3rem', borderRadius: '24px', border: '1px solid #E2E8F0' }}>
                        <div style={{ color: '#64748B', fontWeight: 600, marginBottom: '1rem', display: 'flex', gap: '8px' }}>
                            <FileText size={20} /> Resumo Gerado pela Mia
                        </div>
                        <p style={{ fontSize: '1rem', color: '#334155', lineHeight: 1.6 }}>
                            - A mãe quer transferir dois filhos (1º e 3º ano) <br/>
                            - Ela tem preocupações com a adaptação <br/>
                            - Perguntou sobre descontos para irmãos
                        </p>
                        <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', color: '#334155', padding: '1rem', borderRadius: '8px', marginTop: '1rem', fontSize: '0.9rem' }}>
                            <strong style={{ color: '#0F172A' }}>Sugestão de Resposta:</strong> Olá Juliana! Compreendo sua preocupação com a adaptação. Temos um programa de acolhimento excelente. Sobre o valor, para dois filhos conseguimos oferecer 15% de desconto na mensalidade do caçula. Vamos agendar uma visita?
                        </div>
                    </div>
                </SplitLayout>

                {/* BLOCO 4: BRIEFING DIÁRIO */}
                <SplitLayout $reverse>
                    <BriefingCard>
                        <BriefingHeader>
                            <div className="avatar-mia">🦊</div>
                            <div className="greeting">
                                <h5>Bom dia, Ana! Aqui está seu briefing.</h5>
                                <span>Segunda-feira, 09 de Junho — 08:02</span>
                            </div>
                        </BriefingHeader>

                        <BriefingSection>
                            <div className="section-title"><BarChart3 size={12} style={{ display: 'inline', marginRight: 4 }} /> Funil de Matrículas</div>
                            <div className="metric-row"><span>🔥 Quentes</span><strong>12 leads</strong></div>
                            <div className="metric-row"><span>🌡️ Mornos</span><strong>28 leads</strong></div>
                            <div className="metric-row"><span>✅ Matrículas (mês)</span><strong>18 alunos</strong></div>
                        </BriefingSection>

                        <BriefingSection>
                            <div className="section-title"><Calendar size={12} style={{ display: 'inline', marginRight: 4 }} /> Agenda de Hoje</div>
                            <div className="ok-row"><CheckCircle2 size={14} /> 3 visitas agendadas</div>
                            <div className="alert-row"><AlertTriangle size={14} /> 2 tarefas atrasadas</div>
                            <div className="alert-row"><AlertTriangle size={14} /> 4 leads em risco de abandono</div>
                        </BriefingSection>

                        <BriefingSuggestion>
                            <strong>✨ Sugestão da Mia</strong>
                            Priorize ligar para os 4 leads em risco hoje — eles estão há mais de 5 dias sem contato e têm visita marcada essa semana.
                        </BriefingSuggestion>
                    </BriefingCard>

                    <TextContent>
                        <SectionLabel><Calendar size={14} /> Modo: Briefing Diário</SectionLabel>
                        <h3>Seu dia começa com <br />a Mia já preparada</h3>
                        <p>
                            Na primeira vez que você abre o sistema, a Mia já consultou o funil, verificou a agenda, identificou tarefas atrasadas e preparou uma sugestão de prioridade só para você.
                        </p>
                        <ul>
                            <li><Calendar size={20}/> <strong>Briefing automático:</strong> Dispara sozinho ao abrir o sistema pela primeira vez no dia.</li>
                            <li><BarChart3 size={20}/> <strong>Visão 360º:</strong> Resume funil, agenda, atrasados, riscos e resultado do mês.</li>
                            <li><Sparkles size={20}/> <strong>Sugestão diária:</strong> Uma ação prioritária baseada nos dados reais da sua escola.</li>
                        </ul>
                    </TextContent>
                </SplitLayout>

                {/* BLOCO 5: ANALISAR LEAD */}
                <SplitLayout>
                    <TextContent>
                        <SectionLabel><BrainCircuit size={14} /> Modo: Analisar Lead</SectionLabel>
                        <h3>Análise profunda <br />de cada lead</h3>
                        <p>
                            Com um clique, a Mia carrega o histórico completo do lead — estágio, atividades, visitas, tarefas e tags — e entrega um diagnóstico claro com riscos, oportunidades e próximos passos.
                        </p>
                        <ul>
                            <li><History size={20}/> <strong>Histórico completo:</strong> Estágio, atividades, visitas, chamadas e interações no WhatsApp.</li>
                            <li><AlertTriangle size={20}/> <strong>Identifica riscos:</strong> Detecta leads frios, sem contato há dias ou com visita cancelada.</li>
                            <li><CheckCircle2 size={20}/> <strong>Próximos passos:</strong> Sugere ações concretas baseadas no comportamento do lead.</li>
                        </ul>
                    </TextContent>

                    <LeadAnalysisCard>
                        <LeadHeader>
                            <div className="avatar">FS</div>
                            <div className="lead-info">
                                <h5>Fernanda Souza</h5>
                                <div className="tags">
                                    <span className="tag tag-hot">🔥 Lead Quente</span>
                                    <span className="tag tag-stage">Proposta Enviada</span>
                                </div>
                            </div>
                        </LeadHeader>

                        <AnalysisBlock>
                            <div className="block-title"><Sparkles size={12} /> Resumo da Mia</div>
                            <ul>
                                <li>Visitou a escola na terça-feira, ficou 45 min</li>
                                <li>Perguntou sobre parcelamento do material</li>
                                <li>Sem resposta desde o envio da proposta (3 dias)</li>
                            </ul>
                        </AnalysisBlock>

                        <AnalysisBlock>
                            <div className="block-title"><AlertTriangle size={12} /> Risco Identificado</div>
                            <ul>
                                <li>Proposta visualizada mas não respondida</li>
                                <li>Concorrente com desconto ativo na região</li>
                            </ul>
                        </AnalysisBlock>

                        <div style={{ background: '#F8FAFC', borderLeft: '4px solid #F97316', border: '1px solid #E2E8F0', borderLeftWidth: '4px', padding: '0.75rem 1rem', borderRadius: '0 8px 8px 0', fontSize: '0.9rem', color: '#334155' }}>
                            <strong style={{ display: 'block', marginBottom: 4, color: '#F97316', fontSize: '0.75rem', textTransform: 'uppercase' }}>✅ Ação Sugerida</strong>
                            Ligue hoje à tarde e ofereça parcelamento do material didático. Alta chance de fechar.
                        </div>
                    </LeadAnalysisCard>
                </SplitLayout>

                {/* BLOCO 6: REDIGIR MENSAGEM */}
                <SplitLayout $reverse>
                    <ComposeCard>
                        <ComposeInput>
                            <div className="label">Você pediu à Mia:</div>
                            &quot;Crie uma mensagem de follow-up para o Lucas, que visitou ontem e demonstrou interesse no Ensino Médio.&quot;
                        </ComposeInput>

                        <ToolCallIndicator>
                            <BrainCircuit size={16} />
                            Mia carregando: perfil do lead + kit de marca da escola...
                        </ToolCallIndicator>

                        <ComposedMessage>
                            Olá, Lucas! 😊 Que ótimo ter você aqui ontem — ficamos muito felizes com sua visita!<br/><br/>
                            Vi que você se interessou bastante pelo nosso Ensino Médio. Temos uma turma nova começando em agosto com vagas limitadas.<br/><br/>
                            Podemos reservar a sua? Qualquer dúvida estou aqui! 🎓
                        </ComposedMessage>

                        <CopyButton>
                            <Copy size={14} /> Copiar mensagem
                        </CopyButton>
                    </ComposeCard>

                    <TextContent>
                        <SectionLabel><Mail size={14} /> Modo: Redigir Mensagem</SectionLabel>
                        <h3>Mensagens perfeitas, <br />escritas em segundos</h3>
                        <p>
                            Descreva o que você quer comunicar e a Mia redige a mensagem completa, usando o nome do lead, o contexto da conversa e o tom de voz da sua escola.
                        </p>
                        <ul>
                            <li><Users size={20}/> <strong>Contexto do lead:</strong> Usa nome, estágio, visitas e histórico de interações.</li>
                            <li><Sparkles size={20}/> <strong>Tom da escola:</strong> Respeita o kit de marca cadastrado — formal, descontraído ou informal.</li>
                            <li><Copy size={20}/> <strong>Pronto para enviar:</strong> Mensagem gerada com um clique para copiar ou enviar direto.</li>
                        </ul>
                    </TextContent>
                </SplitLayout>

                {/* BLOCO 7: ONDE A MIA ESTÁ PRESENTE */}
                <PresenceSection>
                    <PresenceSectionHeader>
                        <SectionLabel style={{ margin: '0 auto 1rem' }}><Globe size={14} /> Presença</SectionLabel>
                        <h3>A Mia está em todo lugar</h3>
                        <p>Acesse a Mia de onde estiver no sistema — sem precisar sair do contexto do seu trabalho.</p>
                    </PresenceSectionHeader>

                    <PresenceGrid>
                        <PresenceCard>
                            <div className="icon-wrapper">
                                <MessageCircle size={28} />
                            </div>
                            <h4>WhatsApp & Instagram</h4>
                            <p>Um ícone ✨ aparece diretamente na conversa. A Mia abre com o histórico do canal já carregado e sugere respostas no contexto certo.</p>
                        </PresenceCard>

                        <PresenceCard>
                            <div className="icon-wrapper">
                                <Users size={28} />
                            </div>
                            <h4>Ficha do Lead</h4>
                            <p>Dentro de cada lead, a Mia aparece como painel lateral com acesso a análise, próxima ação, redigir mensagem e agendar visita.</p>
                        </PresenceCard>

                        <PresenceCard>
                            <div className="icon-wrapper">
                                <Bot size={28} />
                            </div>
                            <h4>Em qualquer tela</h4>
                            <p>Um botão flutuante no canto da tela dá acesso global à Mia. Pergunte sobre o funil, métricas ou peça o briefing a qualquer momento.</p>
                        </PresenceCard>
                    </PresenceGrid>
                </PresenceSection>

                {/* BLOCO 8: GRID DE FUNCIONALIDADES (expandido para 6) */}
                <SectionDivider>
                    <h3>Por dentro do cérebro da Mia</h3>
                    <p>Recursos avançados para gestores educacionais de alta performance.</p>
                </SectionDivider>

                <FeatureGrid>
                    <FeatureCard>
                        <div className="icon"><BrainCircuit size={24}/></div>
                        <h4>Especialista em Educação</h4>
                        <p>Especializada no contexto educacional por design — instruções, ferramentas e base de conhecimento da sua escola — para entender as dores e o jargão de escolas e cursos.</p>
                    </FeatureCard>

                    <FeatureCard>
                        <div className="icon"><ShieldCheck size={24}/></div>
                        <h4>Privacidade Total</h4>
                        <p>Os dados da sua escola não treinam modelos públicos. A Mia opera em um ambiente isolado (Sandboxed), por escola.</p>
                    </FeatureCard>

                    <FeatureCard>
                        <div className="icon"><Wrench size={24}/></div>
                        <h4>24+ Ferramentas CRM</h4>
                        <p>Consulta funil, agenda, métricas, automações e jornadas por linguagem natural — sem precisar clicar em nenhum menu.</p>
                    </FeatureCard>

                    <FeatureCard>
                        <div className="icon"><History size={24}/></div>
                        <h4>Memória de Conversa</h4>
                        <p>A Mia mantém o contexto de até 20 mensagens por sessão, por lead ou por conversa, sem perder o fio da meada.</p>
                    </FeatureCard>

                    <FeatureCard>
                        <div className="icon"><BookOpen size={24}/></div>
                        <h4>Base de Conhecimento</h4>
                        <p>Faça upload de PDFs e textos sobre sua escola. A Mia usa busca semântica para responder com base no seu próprio conteúdo.</p>
                    </FeatureCard>

                    <FeatureCard>
                        <div className="icon"><TrendingUp size={24}/></div>
                        <h4>Extensibilidade</h4>
                        <p>Ela se conecta perfeitamente às outras áreas do Maskot — CRM, Financeiro, Automações e Jornadas de marketing.</p>
                    </FeatureCard>
                </FeatureGrid>

                {/* TEASER: A MIA QUE VIGIA O FUNIL */}
                <AgentTeaser href="/funcionalidades/agente-comercial">
                    <div className="icon"><BellRing size={24} /></div>
                    <div className="text">
                        <h4>Além de responder, a Mia agora vigia o seu funil</h4>
                        <p>
                            O Agente Comercial avisa quando um lead fica sem resposta, uma família falta à visita ou a matrícula para,
                            com o motivo e o próximo passo.
                        </p>
                    </div>
                    <span className="go">Conhecer o Agente Comercial <ArrowRight size={16} /></span>
                </AgentTeaser>
            </Container>
        </Section>
    )
}
