'use client'

import styled, { keyframes } from 'styled-components'
import {
    Sparkles, Wrench, Search, MessageSquare,
    Zap, BrainCircuit, ListChecks, Activity,
    ShieldCheck, Clock, FileText, ArrowRight,
    Calendar, Mail, BookOpen, Globe, Bot,
    TrendingUp, AlertTriangle, CheckCircle2,
    Copy, MessageCircle, Users, BarChart3,
    History
} from 'lucide-react'

const float = keyframes`
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
`

const Section = styled.section`
    padding: 4rem 0 6rem;
    background: ${props => props.theme.colors.pageBackground};
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
        font-size: 2rem;
        font-weight: 800;
        color: ${props => props.theme.colors.textDark};
        margin-bottom: 1rem;
        line-height: 1.2;
    }

    p {
        font-size: 1.1rem;
        color: ${props => props.theme.colors.textMedium};
        line-height: 1.6;
        margin-bottom: 2rem;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    li {
        display: flex;
        align-items: center;
        gap: 1rem;
        font-weight: 500;
        color: ${props => props.theme.colors.textDark};

        svg {
            color: #F97316;
            flex-shrink: 0;
        }
    }
`

const SectionLabel = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: #FFF7ED;
    color: #C2410C;
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: 0.4rem 0.8rem;
    border-radius: 20px;
    margin-bottom: 1rem;
`

// --- MOCKUP DE CHAT / TOOL CALLING ---
const ChatMockup = styled.div`
    background: #1E293B;
    border-radius: 20px;
    border: 8px solid #0F172A;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    padding: 1.5rem;
    max-width: 450px;
    margin: 0 auto;
    position: relative;
    animation: ${float} 6s ease-in-out infinite;
`

const UserBubble = styled.div`
    background: #334155;
    color: white;
    padding: 1rem;
    border-radius: 12px 12px 0 12px;
    margin-bottom: 1rem;
    align-self: flex-end;
    width: fit-content;
    margin-left: auto;
    font-size: 0.95rem;
`

const ToolCallIndicator = styled.div`
    background: rgba(249, 115, 22, 0.1);
    border: 1px solid rgba(249, 115, 22, 0.2);
    color: #FDBA74;
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
        background: rgba(255,255,255,0.1);
        border-radius: 6px;
        padding: 8px;
        font-size: 0.85rem;
    }
`

const FeatureGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    @media (max-width: ${props => props.theme.breakpoints.md}) {
        grid-template-columns: 1fr;
    }
`

const FeatureCard = styled.div`
    background: #F8F9FA;
    padding: 2rem;
    border-radius: 16px;
    border: 1px solid #DEE2E6;
    transition: all 0.3s ease;

    &:hover {
        background: #fff;
        box-shadow: 0 10px 30px rgba(249, 115, 22, 0.1);
        transform: translateY(-5px);
        border-color: #F97316;
    }

    .icon {
        width: 48px;
        height: 48px;
        background: #fff;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #F97316;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        margin-bottom: 1.5rem;
    }

    h4 {
        font-size: 1.25rem;
        font-weight: 700;
        color: ${props => props.theme.colors.textDark};
        margin-bottom: 0.75rem;
    }

    p {
        font-size: 1rem;
        color: ${props => props.theme.colors.textMedium};
        line-height: 1.5;
        margin: 0;
    }
`

// --- CARD DE NEXT BEST ACTION ---
const NbaCard = styled.div`
    background: white;
    border-radius: 16px;
    box-shadow: 0 15px 35px rgba(0,0,0,0.1);
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
            background: #E0F2FE;
            color: #0284C7;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
        }

        .info {
            h5 { margin: 0; color: #0F172A; font-size: 1rem; }
            span { font-size: 0.8rem; color: #64748B; }
        }
    }

    .mia-insight {
        background: #FFF7ED;
        border-left: 4px solid #F97316;
        padding: 1rem;
        border-radius: 0 8px 8px 0;

        .title {
            display: flex;
            align-items: center;
            gap: 6px;
            color: #C2410C;
            font-weight: 800;
            font-size: 0.85rem;
            margin-bottom: 8px;
            text-transform: uppercase;
        }

        p {
            font-size: 0.95rem;
            color: #431407;
            margin: 0;
            line-height: 1.4;
        }

        .action-btn {
            background: #F97316;
            color: white;
            padding: 8px 12px;
            border-radius: 6px;
            font-size: 0.85rem;
            font-weight: bold;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            margin-top: 12px;
            cursor: pointer;
        }
    }
`

// --- BRIEFING DIÁRIO ---
const BriefingCard = styled.div`
    background: white;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    padding: 1.5rem;
    border: 1px solid #E2E8F0;
    max-width: 420px;
    margin: 0 auto;
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
        width: 36px;
        height: 36px;
        background: linear-gradient(135deg, #F97316 0%, #F59E0B 100%);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 1rem;
    }

    .greeting {
        h5 { margin: 0; font-size: 0.95rem; font-weight: 700; color: #0F172A; }
        span { font-size: 0.75rem; color: #64748B; }
    }
`

const BriefingSection = styled.div`
    margin-bottom: 1rem;

    .section-title {
        font-size: 0.75rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: #94A3B8;
        margin-bottom: 0.5rem;
    }

    .metric-row {
        display: flex;
        justify-content: space-between;
        font-size: 0.9rem;
        color: #334155;
        padding: 0.4rem 0;
        border-bottom: 1px solid #F8FAFC;

        strong { color: #0F172A; }
    }

    .alert-row {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 0.9rem;
        color: #DC2626;
        padding: 0.4rem 0;

        svg { flex-shrink: 0; }
    }

    .ok-row {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 0.9rem;
        color: #16A34A;
        padding: 0.4rem 0;
    }
`

const BriefingSuggestion = styled.div`
    background: #FFF7ED;
    border-left: 4px solid #F97316;
    padding: 0.75rem 1rem;
    border-radius: 0 8px 8px 0;
    font-size: 0.9rem;
    color: #431407;
    line-height: 1.4;

    strong { display: block; margin-bottom: 4px; color: #C2410C; font-size: 0.8rem; text-transform: uppercase; }
`

// --- ANÁLISE DE LEAD ---
const LeadAnalysisCard = styled.div`
    background: white;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
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
        background: #E0F2FE;
        color: #0284C7;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 1rem;
    }

    .lead-info {
        flex: 1;
        h5 { margin: 0; font-size: 1rem; font-weight: 700; color: #0F172A; }

        .tags {
            display: flex;
            gap: 6px;
            margin-top: 4px;
        }

        .tag {
            font-size: 0.7rem;
            padding: 2px 8px;
            border-radius: 20px;
            font-weight: 600;
        }

        .tag-hot { background: #FEE2E2; color: #DC2626; }
        .tag-stage { background: #E0F2FE; color: #0369A1; }
    }
`

const AnalysisBlock = styled.div`
    background: #F8FAFC;
    border-radius: 12px;
    padding: 1rem;
    margin-bottom: 0.75rem;

    .block-title {
        font-size: 0.75rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: #64748B;
        margin-bottom: 0.5rem;
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
            color: #334155;
            line-height: 1.5;
        }
    }
`

// --- REDIGIR MENSAGEM ---
const ComposeCard = styled.div`
    background: #1E293B;
    border-radius: 20px;
    border: 8px solid #0F172A;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    padding: 1.5rem;
    max-width: 450px;
    margin: 0 auto;
    animation: ${float} 6s ease-in-out infinite;
`

const ComposeInput = styled.div`
    background: #334155;
    border-radius: 10px;
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
    color: #CBD5E1;
    margin-bottom: 1rem;
    border: 1px solid #475569;

    .label { font-size: 0.75rem; color: #94A3B8; margin-bottom: 4px; }
`

const ComposedMessage = styled.div`
    background: linear-gradient(135deg, #F97316 0%, #F59E0B 100%);
    border-radius: 12px 12px 12px 0;
    padding: 1rem;
    color: white;
    font-size: 0.9rem;
    line-height: 1.6;
    margin-bottom: 1rem;
`

const CopyButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    background: #334155;
    color: #94A3B8;
    border-radius: 8px;
    padding: 0.6rem;
    font-size: 0.8rem;
    cursor: pointer;
    transition: all 0.2s;

    &:hover { background: #475569; color: white; }
`

// --- ONDE A MIA ESTÁ PRESENTE ---
const PresenceSection = styled.div`
    margin-bottom: 8rem;
`

const PresenceSectionHeader = styled.div`
    text-align: center;
    margin-bottom: 3rem;

    h3 {
        font-size: 2rem;
        font-weight: 800;
        color: ${props => props.theme.colors.textDark};
        margin-bottom: 0.75rem;
    }

    p {
        font-size: 1.1rem;
        color: ${props => props.theme.colors.textMedium};
    }
`

const PresenceGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    @media (max-width: ${props => props.theme.breakpoints.md}) {
        grid-template-columns: 1fr;
    }
`

const PresenceCard = styled.div`
    background: white;
    border: 1px solid #E2E8F0;
    border-radius: 20px;
    padding: 2rem;
    text-align: center;
    transition: all 0.3s ease;

    &:hover {
        box-shadow: 0 15px 40px rgba(249, 115, 22, 0.12);
        transform: translateY(-4px);
        border-color: #FDBA74;
    }

    .icon-wrapper {
        width: 64px;
        height: 64px;
        background: linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%);
        border-radius: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 1.5rem;
        color: #F97316;
    }

    h4 {
        font-size: 1.15rem;
        font-weight: 700;
        color: ${props => props.theme.colors.textDark};
        margin-bottom: 0.75rem;
    }

    p {
        font-size: 0.95rem;
        color: ${props => props.theme.colors.textMedium};
        line-height: 1.5;
        margin: 0;
    }
`

const SectionDivider = styled.div`
    text-align: center;
    margin-bottom: 3rem;

    h3 {
        font-size: 2rem;
        font-weight: 800;
        color: ${props => props.theme.colors.textDark};
        margin-bottom: 0.5rem;
    }

    p {
        color: ${props => props.theme.colors.textMedium};
        font-size: 1.05rem;
    }
`

export default function CopilotMiaDeepDive() {
    return (
        <Section>
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

                    <div style={{ background: '#F8FAFC', padding: '3rem', borderRadius: '24px', border: '1px solid #E2E8F0' }}>
                        <div style={{ color: '#64748B', fontWeight: 600, marginBottom: '1rem', display: 'flex', gap: '8px' }}>
                            <FileText size={20} /> Resumo Gerado pela Mia
                        </div>
                        <p style={{ fontSize: '1rem', color: '#334155', lineHeight: 1.6 }}>
                            - A mãe quer transferir dois filhos (1º e 3º ano) <br/>
                            - Ela tem preocupações com a adaptação <br/>
                            - Perguntou sobre descontos para irmãos
                        </p>
                        <div style={{ background: '#E0F2FE', color: '#0369A1', padding: '1rem', borderRadius: '8px', marginTop: '1rem', fontSize: '0.9rem' }}>
                            <strong>Sugestão de Resposta:</strong> Olá Juliana! Compreendo sua preocupação com a adaptação. Temos um programa de acolhimento excelente. Sobre o valor, para dois filhos conseguimos oferecer 15% de desconto na mensalidade do caçula. Vamos agendar uma visita?
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

                        <div style={{ background: '#F0FDF4', borderLeft: '4px solid #16A34A', padding: '0.75rem 1rem', borderRadius: '0 8px 8px 0', fontSize: '0.9rem', color: '#14532D' }}>
                            <strong style={{ display: 'block', marginBottom: 4, color: '#15803D', fontSize: '0.75rem', textTransform: 'uppercase' }}>✅ Ação Sugerida</strong>
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
                        <h4>Modelos LLM Otimizados</h4>
                        <p>Treinada especificamente para o nicho educacional, compreendendo as dores e jargões de escolas e cursos.</p>
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
            </Container>
        </Section>
    )
}
