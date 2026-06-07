'use client'

import styled, { keyframes } from 'styled-components'
import {
    Sparkles, Wrench, Search, MessageSquare, 
    Zap, BrainCircuit, ListChecks, Activity,
    ShieldCheck, Clock, FileText, ArrowRight
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
            color: #F97316; /* Laranja da Mia */
            flex-shrink: 0;
        }
    }
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

export default function CopilotMiaDeepDive() {
    return (
        <Section>
            <Container>
                {/* BLOCO 1: TOOL CALLING E DADOS ESTRUTURADOS */}
                <SplitLayout>
                    <TextContent>
                        <h3>Muito além do Chat: <br />Tool Calling Dinâmico</h3>
                        <p>
                            A Mia não apenas lê textos, ela sabe invocar ferramentas do sistema. Quando você pergunta sobre relatórios complexos, ela ativa os filtros, busca direto no banco de dados e traz a resposta estruturada.
                        </p>
                        <ul>
                            <li><Wrench size={20}/> <strong>Invocação de Ferramentas:</strong> Consulta leads, agenda, tarefas e métricas em tempo real.</li>
                            <li><Search size={20}/> <strong>Filtros Inteligentes:</strong> Ela entende intenções de tempo (ex: "esta semana", "mês passado").</li>
                            <li><Activity size={20}/> <strong>Dados Estruturados:</strong> Formata as respostas em tabelas fáceis de ler e decidir.</li>
                        </ul>
                    </TextContent>

                    <ChatMockup>
                        <UserBubble>
                            Quais leads ficaram sem resposta essa semana?
                        </UserBubble>
                        
                        <ToolCallIndicator>
                            <BrainCircuit size={16} />
                            Mia está chamando: search_leads(&#123; status: "no_reply", timeframe: "this_week" &#125;)
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

                {/* BLOCO 4: GRID DE FUNCIONALIDADES */}
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#333' }}>Por dentro do cérebro da Mia</h3>
                    <p style={{ color: '#666' }}>Recursos avançados para gestores educacionais de alta performance.</p>
                </div>

                <FeatureGrid>
                    <FeatureCard>
                        <div className="icon"><BrainCircuit size={24}/></div>
                        <h4>Modelos LLM Otimizados</h4>
                        <p>Treinada especificamente para o nicho educacional, compreendendo as dores e jargões de escolas e cursos.</p>
                    </FeatureCard>

                    <FeatureCard>
                        <div className="icon"><ShieldCheck size={24}/></div>
                        <h4>Privacidade Total</h4>
                        <p>Os dados da sua escola não treinam modelos públicos. A Mia opera em um ambiente isolado (Sandboxed).</p>
                    </FeatureCard>

                    <FeatureCard>
                        <div className="icon"><Wrench size={24}/></div>
                        <h4>Extensibilidade</h4>
                        <p>Ela se conecta perfeitamente às outras áreas do Maskot, desde o CRM até o módulo Financeiro.</p>
                    </FeatureCard>
                </FeatureGrid>
            </Container>
        </Section>
    )
}
