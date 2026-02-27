'use client'

import styled, {keyframes, css} from 'styled-components'
import {
    Users, ShieldCheck, Send, LineChart, Filter,
    Clock, Thermometer, Lock, Mic, Zap, Tag, Paperclip,
    Workflow, Bot, GitBranch, MessageSquare,
    Network, Sparkles, CalendarSync, FileHeart, UserPlus, FileDown, Route
} from 'lucide-react'

// --- Animations ---
const float = keyframes`
    0% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-10px);
    }
    100% {
        transform: translateY(0px);
    }
`

const Section = styled.section`
    padding: 6rem 0;
    background: ${props => props.theme.colors.white};
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

        ${props => !props.$reverse && css`
            flex-direction: column;
        `}
    }
`

const TextContent = styled.div`
    h3 {
        font-family: ${props => props.theme.typography.fontFamily.main};
        font-size: ${props => props.theme.typography.fontSize['3xl']};
        font-weight: ${props => props.theme.typography.fontWeight.extrabold};
        margin-bottom: 1.5rem;
        line-height: 1.2;
        color: ${props => props.theme.colors.textDark};
    }

    p {
        font-family: ${props => props.theme.typography.fontFamily.main};
        font-size: ${props => props.theme.typography.fontSize.lg};
        color: ${props => props.theme.colors.textMedium};
        line-height: 1.6;
        margin-bottom: 2rem;
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
        font-weight: ${props => props.theme.typography.fontWeight.medium};
        color: ${props => props.theme.colors.textDark};

        svg {
            color: ${props => props.theme.colors.secondary};
            flex-shrink: 0;
            margin-top: 2px;
        }
    }
`

// --- UI MOCKUPS BASE ---
const MockupCard = styled.div`
    background: ${props => props.theme.colors.cardBackground};
    border-radius: ${props => props.theme.borderRadius.xl};
    box-shadow: ${props => props.theme.shadows['2xl']};
    border: 1px solid ${props => props.theme.colors.backgroundMedium};
    overflow: hidden;
    position: relative;
    animation: ${float} 8s ease-in-out infinite;
`

const MockupHeader = styled.div`
    height: 40px;
    background: ${props => props.theme.colors.lightGray};
    border-bottom: 1px solid ${props => props.theme.colors.backgroundMedium};
    display: flex;
    align-items: center;
    padding: 0 1rem;
    gap: 0.5rem;

    .dots {
        display: flex;
        gap: 6px;

        div {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #ccc;
        }
    }
`

// --- MOCKUP 1: INBOX & CHATBOT ---
const ChatLayout = styled.div`
    display: flex;
    height: 400px;
`
const SidebarMock = styled.div`
    width: 30%;
    border-right: 1px solid ${props => props.theme.colors.backgroundMedium};
    padding: 10px;

    .item {
        padding: 10px;
        margin-bottom: 5px;
        border-radius: 6px;
        display: flex;
        gap: 10px;
        align-items: center;
        transition: background 0.2s;
    }

    .item.active {
        background: #F0F2F5;
    }

    .avatar {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background: ${props => props.theme.colors.backgroundMedium};
    }

    .lines {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 6px;

        div {
            height: 8px;
            background: #eee;
            border-radius: 4px;
        }
    }
`
const ChatAreaMock = styled.div`
    flex: 1;
    background: ${props => props.theme.colors.whatsapp.background};
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    background-image: radial-gradient(#00000008 1px, transparent 0);
    background-size: 12px 12px;
`
const Bubble = styled.div<{ $sent?: boolean; $bot?: boolean; $note?: boolean }>`
    padding: 10px 14px;
    border-radius: 8px;
    background: ${props => props.$sent ? props.theme.colors.whatsapp.outboundMessage : props.theme.colors.whatsapp.inboundMessage};
    align-self: ${props => props.$sent ? 'flex-end' : 'flex-start'};
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    font-size: 13px;
    max-width: 80%;
    position: relative;
    line-height: 1.4;

    ${props => props.$bot && css`
        border-left: 3px solid ${props.theme.colors.primary};
        &::before {
            content: '🤖 Bot';
            font-size: 9px;
            color: ${props.theme.colors.primary};
            font-weight: bold;
            display: block;
            margin-bottom: 4px;
        }
    `}

    ${props => props.$note && css`
        background: #FFF9C4;
        border: 1px dashed #FBC02D;
        align-self: center;
        width: 90%;
        max-width: 100%;
        color: #555;
        font-style: italic;
        font-size: 12px;
        text-align: center;
    `}
`

// --- MOCKUP 2: VISUAL FLOW BUILDER ---
const FlowBuilderMock = styled.div`
    height: 380px;
    background: #f0f2f5;
    background-image: radial-gradient(#ccc 1px, transparent 0);
    background-size: 20px 20px;
    position: relative;
    padding: 20px;
    overflow: hidden;

    .node {
        background: white;
        border-radius: 8px;
        width: 200px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        border: 1px solid #ddd;
        position: absolute;
        z-index: 2;

        &.start {
            top: 40px;
            left: 40%;
            border-top: 4px solid ${props => props.theme.colors.secondary};
        }

        &.question {
            top: 160px;
            left: 20%;
            border-top: 4px solid ${props => props.theme.colors.primary};
        }

        &.action {
            top: 160px;
            left: 60%;
            border-top: 4px solid ${props => props.theme.colors.accent};
        }
    }

    .node-header {
        padding: 8px 12px;
        font-size: 11px;
        font-weight: bold;
        border-bottom: 1px solid #eee;
        display: flex;
        align-items: center;
        gap: 6px;
    }

    .node-body {
        padding: 10px;
        font-size: 12px;
        color: #555;
    }

    .connection-line {
        position: absolute;
        height: 2px;
        background: #ccc;
        z-index: 1;
    }
`

// --- MOCKUP 3: PROFILE PANE ---
const ProfileLayout = styled.div`
    display: flex;
    height: 420px;
`
const ChatSection = styled(ChatAreaMock)`
    width: 60%;
    border-right: 1px solid ${props => props.theme.colors.backgroundMedium};
`
const ProfileSidebar = styled.div`
    width: 40%;
    background: white;
    display: flex;
    flex-direction: column;

    .profile-header {
        padding: 20px;
        text-align: center;
        border-bottom: 1px solid ${props => props.theme.colors.backgroundMedium};
        background: ${props => props.theme.colors.lightGray};

        .avatar-large {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: ${props => props.theme.colors.primary};
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            font-weight: bold;
            margin: 0 auto 10px;
            border: 3px solid white;
            box-shadow: ${props => props.theme.shadows.md};
        }
        h4 { margin: 0; font-size: 16px; color: ${props => props.theme.colors.textDark}; }
        p { margin: 0; font-size: 12px; color: ${props => props.theme.colors.textMedium}; }
    }

    .tabs {
        display: flex;
        border-bottom: 1px solid #eee;
        div {
            flex: 1;
            text-align: center;
            padding: 10px;
            font-size: 12px;
            font-weight: bold;
            color: #999;
            cursor: pointer;
        }
        div.active {
            color: ${props => props.theme.colors.primary};
            border-bottom: 2px solid ${props => props.theme.colors.primary};
        }
    }

    .content { padding: 15px; flex: 1; overflow-y: auto; }

    .info-row {
        margin-bottom: 15px;
        label {
            display: block;
            font-size: 10px;
            color: #999;
            font-weight: bold;
            text-transform: uppercase;
            margin-bottom: 4px;
        }
        .val {
            font-size: 13px;
            color: ${props => props.theme.colors.text};
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 6px;
        }
    }

    .tag {
        display: inline-block;
        padding: 2px 8px;
        border-radius: 10px;
        font-size: 10px;
        background: #e6fffa;
        color: ${props => props.theme.colors.whatsapp.accentGreen};
        border: 1px solid #b2f5ea;
    }
`

// === CORREÇÃO: Componente criado para substituir o estilo inline que causava erro ===
const ActionButton = styled.div`
    margin-top: 20px;
    padding: 10px;
    background: ${props => props.theme.colors.primary};
    color: white;
    text-align: center;
    border-radius: 6px;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
    transition: opacity 0.2s;

    &:hover {
        opacity: 0.9;
    }
`

// --- MOCKUP 4: ANALYTICS ---
const DashboardMock = styled.div`
    padding: 1.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    .card {
        background: #fff;
        border: 1px solid #eee;
        border-radius: 10px;
        padding: 1rem;
    }

    h4 {
        font-size: 0.8rem;
        color: #666;
        margin-bottom: 0.5rem;
        display: flex;
        align-items: center;
        gap: 6px;
    }

    .val {
        font-size: 1.5rem;
        font-weight: bold;
        color: #333;
    }

    .full-width {
        grid-column: 1 / -1;
    }

    .heatmap {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        gap: 2px;

        div {
            height: 20px;
            border-radius: 2px;
        }
    }
`

// --- POWER GRID ---
const PowerGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 4rem;

    @media (max-width: ${props => props.theme.breakpoints.md}) {
        grid-template-columns: 1fr;
    }
`

const PowerCard = styled.div`
    background: ${props => props.theme.colors.lightGray};
    padding: 2rem;
    border-radius: 16px;
    border: 1px solid #eee;
    transition: all ${props => props.theme.transitions.base};

    &:hover {
        transform: translateY(-5px);
        background: white;
        box-shadow: ${props => props.theme.shadows.lg};
        border-color: ${props => props.theme.colors.primary}40;
    }

    .icon {
        width: 48px;
        height: 48px;
        border-radius: 12px;
        background: white;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${props => props.theme.colors.primary};
        margin-bottom: 1.5rem;
        box-shadow: ${props => props.theme.shadows.sm};
    }

    h4 {
        font-size: 1.25rem;
        font-weight: 700;
        margin-bottom: 0.75rem;
        color: ${props => props.theme.colors.textDark};
    }

    p {
        font-size: 1rem;
        color: ${props => props.theme.colors.textMedium};
        line-height: 1.5;
        margin: 0;
    }
`

export default function WhatsAppDeepDive() {
    return (
        <Section>
            <Container>

                {/* 1. INBOX & CHATBOT */}
                <FeatureRow>
                    <TextContent>
                        <h3>Nenhum pai sem resposta.<br/>Organização total.</h3>
                        <p>
                            Tenha dezenas de usuários em um único número. Organize o atendimento por departamentos (Secretaria, Financeiro, Pedagógico) e defina regras de distribuição.
                        </p>
                        <ul>
                            <li><Users size={20}/> <strong>Usuários Ilimitados:</strong> Sem limites. Toda a escola conectada ao mesmo tempo.
                            </li>
                            <li><Network size={20}/> <strong>Departamentos e Fila:</strong> Direcione o pai para o setor certo, organizando quem chegou primeiro.
                            </li>
                            <li><ShieldCheck size={20}/> <strong>Regras e Transferências:</strong> Transfira conversas entre setores com um clique levando todo o histórico.</li>
                        </ul>
                    </TextContent>

                    <MockupCard>
                        <MockupHeader>
                            <div className="dots">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </MockupHeader>
                        <ChatLayout>
                            <SidebarMock>
                                <div className="item active">
                                    <div className="avatar">Pai</div>
                                    <div className="lines">
                                        <div style={{width: '60%'}}></div>
                                        <div style={{width: '40%'}}></div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="avatar">Mãe</div>
                                    <div className="lines">
                                        <div></div>
                                    </div>
                                </div>
                            </SidebarMock>
                            <ChatAreaMock>
                                <Bubble>Queria saber os valores do Berçário.</Bubble>
                                <Bubble $sent $bot>Temos planos a partir de R$ 900. Quer ver a tabela completa?</Bubble>
                                <Bubble>Não, quero falar com alguém.</Bubble>
                                <Bubble $note>🚨 <strong>Sistema:</strong> Palavra-chave &quot;falar com
                                    alguém&quot; detectada. Transferindo para @Secretaria.</Bubble>
                                <Bubble $sent>Olá! Sou a Ana da Secretaria. Como posso ajudar?</Bubble>
                            </ChatAreaMock>
                        </ChatLayout>
                    </MockupCard>
                </FeatureRow>

                {/* 2. VISUAL FLOW BUILDER */}
                <FeatureRow $reverse>
                    <MockupCard>
                        <MockupHeader>
                            <div className="dots">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </MockupHeader>
                        <FlowBuilderMock>
                            <div className="node start">
                                <div className="node-header"><GitBranch size={12}/> Início (Mensagem Recebida)</div>
                                <div className="node-body">Olá! Bem vindo à Escola Maskot...</div>
                            </div>

                            <div className="connection-line"
                                 style={{top: '90px', left: '50%', height: '70px', width: '2px'}}></div>
                            <div className="connection-line"
                                 style={{top: '160px', left: '30%', height: '2px', width: '40%'}}></div>

                            <div className="node question">
                                <div className="node-header"><MessageSquare size={12}/> Pergunta</div>
                                <div className="node-body">Qual unidade você prefere?</div>
                            </div>

                            <div className="node action">
                                <div className="node-header"><Zap size={12}/> Ação Automática</div>
                                <div className="node-body">Criar Lead no CRM <br/> <span
                                    style={{fontSize: '10px', color: '#999'}}>Agendar Visita</span></div>
                            </div>
                        </FlowBuilderMock>
                    </MockupCard>

                    <TextContent>
                        <h3>Editor de Fluxos Visual</h3>
                        <p>
                            Configure fluxos de atendimento sem precisar de código. Crie caminhos personalizados para
                            Matrícula, Financeiro ou Pedagógico.
                        </p>
                        <ul>
                            <li><Workflow size={20}/> <strong>Drag-and-drop:</strong> Arraste e solte para criar seu
                                robô.
                            </li>
                            <li><Zap size={20}/> <strong>Automações:</strong> O bot pode agendar visitas ou criar leads
                                automaticamente.
                            </li>
                            <li><Bot size={20}/> <strong>Retomada:</strong> O sistema detecta inatividade e tenta
                                retomar a conversa.
                            </li>
                        </ul>
                    </TextContent>
                </FeatureRow>

                {/* 3. CRM CONTEXT */}
                <FeatureRow>
                    <TextContent>
                        <h3>O CRM na palma da mão<br/>dentro do WhatsApp</h3>
                        <p>
                            Não perca tempo trocando de tela. Adicione leads, acesse dados, carteirize contatos e crie tarefas diretamente na interface do chat.
                        </p>
                        <ul>
                            <li><UserPlus size={20}/> <strong>Adicionar Leads & Dados:</strong> Crie um novo lead e edite informações no funil sem sair da conversa.
                            </li>
                            <li><CalendarSync size={20}/> <strong>Agendar & Tarefas:</strong> Marque eventos e tarefas pontuais vinculadas ao CRM com 1 clique.
                            </li>
                            <li><FileHeart size={20}/> <strong>Carteirização:</strong> Favorite ou designe um lead especificamente para um consultor.
                            </li>
                        </ul>
                    </TextContent>

                    <MockupCard>
                        <MockupHeader>
                            <div className="dots">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </MockupHeader>
                        <ProfileLayout>
                            <ChatSection>
                                <Bubble>Poderia agendar uma visita?</Bubble>
                                <Bubble $sent>Claro! Qual o melhor horário para você?</Bubble>
                            </ChatSection>
                            <ProfileSidebar>
                                <div className="profile-header">
                                    <div className="avatar-large">MP</div>
                                    <h4>Mãe do Pedro</h4>
                                    <p>+55 11 99999-9999</p>
                                </div>
                                <div className="tabs">
                                    <div className="active">Info</div>
                                    <div>Notas</div>
                                    <div>Anexos</div>
                                </div>
                                <div className="content">
                                    <div className="info-row">
                                        <label>Funil de Vendas</label>
                                        <div className="val">
                                            <span style={{
                                                width: '8px',
                                                height: '8px',
                                                borderRadius: '50%',
                                                background: '#f1c40f',
                                                marginRight: '6px'
                                            }}></span>
                                            Em Negociação
                                        </div>
                                    </div>
                                    <div className="info-row">
                                        <label>Aluno de Interesse</label>
                                        <div className="val">Pedro Henrique (1º Ano)</div>
                                    </div>
                                    <div className="info-row">
                                        <label>Tags</label>
                                        <div style={{display: 'flex', gap: '4px'}}>
                                            <span className="tag">Matrícula 2026</span>
                                            <span className="tag">Quente</span>
                                        </div>
                                    </div>

                                    {/* CORREÇÃO: Uso do componente estilizado ActionButton */}
                                    <ActionButton>
                                        Agendar Visita
                                    </ActionButton>

                                </div>
                            </ProfileSidebar>
                        </ProfileLayout>
                    </MockupCard>
                </FeatureRow>

                {/* 3.1 AI CHATBOT */}
                <FeatureRow $reverse>
                    <MockupCard>
                        <MockupHeader>
                            <div className="dots">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </MockupHeader>
                        <ChatLayout>
                            <SidebarMock>
                                <div className="item active">
                                    <div className="avatar">Mãe</div>
                                    <div className="lines">
                                        <div style={{width: '60%'}}></div>
                                        <div style={{width: '40%'}}></div>
                                    </div>
                                </div>
                            </SidebarMock>
                            <ChatAreaMock>
                                <Bubble>Boa noite! O Berçário funciona até que horas?</Bubble>
                                <Bubble $sent $bot>
                                    Olá, boa noite! 🌙 O nosso Berçário funciona das 07h às 19h no período estendido.
                                </Bubble>
                                <Bubble>Posso visitar amanhã às 14h?</Bubble>
                                <Bubble $sent $bot>
                                    Deixe-me conferir a agenda... Sim, temos disponibilidade! Agendei sua visita para amanhã às 14h. 🎉
                                </Bubble>
                                <Bubble $note>✅ <strong>IA:</strong> Visita agendada. Lead atualizada no CRM.</Bubble>
                            </ChatAreaMock>
                        </ChatLayout>
                    </MockupCard>
                    <TextContent>
                        <h3>Inteligência Artificial:<br/>Sua melhor secretária 24/7</h3>
                        <p>
                            Treine nossa Inteligência Artificial com a base de conhecimento da sua escola. Ela tira dúvidas complexas, atende de madrugada e até agenda visitas sozinha.
                        </p>
                        <ul>
                            <li><Sparkles size={20}/> <strong>Respostas Humanizadas:</strong> A IA entende o contexto e responde como membro da sua equipe.
                            </li>
                            <li><Clock size={20}/> <strong>Atendimento 24 horas:</strong> Pais nunca ficam sem resposta, mesmo fora do expediente.
                            </li>
                            <li><CalendarSync size={20}/> <strong>Agendamento Automático:</strong> A IA acessa a agenda da escola e marca visitas no CRM.
                            </li>
                        </ul>
                    </TextContent>
                </FeatureRow>

                {/* 3.2 MARKETING & AUTOMATIONS */}
                <FeatureRow>
                    <TextContent>
                        <h3>Jornadas de Marketing<br/>com WhatsApp Nativo</h3>
                        <p>
                            Insira o WhatsApp em todas as suas automações. Envie mensagens proativas, réguas de relacionamento e lembretes financeiros baseados em disparos de gatilhos do CRM.
                        </p>
                        <ul>
                            <li><Route size={20}/> <strong>Automações de Funil:</strong> Mande mensagens após X dias do envio da proposta caso o pai não responda.
                            </li>
                            <li><Bot size={20}/> <strong>Régua de Cobrança:</strong> Lembretes de vencimento enviados no WhatsApp automaticamente.
                            </li>
                            <li><Zap size={20}/> <strong>Disparos em Massa Personalizados:</strong> Comunique campanhas usando as tags do Maskot.
                            </li>
                        </ul>
                    </TextContent>
                    <MockupCard>
                        <MockupHeader>
                            <div className="dots">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </MockupHeader>
                        <FlowBuilderMock>
                            <div className="node start" style={{top: '40px', left: '30%', width: '220px'}}>
                                <div className="node-header"><Filter size={12}/> Etapa do Funil: Proposta</div>
                                <div className="node-body">Sem resposta há 2 dias.</div>
                            </div>
                            
                            <div className="connection-line"
                                 style={{top: '90px', left: '50%', height: '70px', width: '2px'}}></div>

                            <div className="node action" style={{top: '160px', left: '20%', width: '260px'}}>
                                <div className="node-header"><Send size={12}/> Disparo WhatsApp Automático</div>
                                <div className="node-body">Template: &quot;Olá [Nome], restou alguma dúvida...&quot;</div>
                            </div>
                        </FlowBuilderMock>
                    </MockupCard>
                </FeatureRow>

                {/* 4. ANALYTICS */}
                <FeatureRow $reverse>
                    <MockupCard>
                        <MockupHeader>
                            <div className="dots">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </MockupHeader>
                        <DashboardMock>
                            <div className="card"><h4><LineChart size={16}/> Total de Atendimentos</h4>
                                <div className="val">1,284</div>
                            </div>
                            <div className="card"><h4><Clock size={16}/> Tempo Médio</h4>
                                <div className="val">4min</div>
                            </div>
                            <div className="card full-width">
                                <h4><Thermometer size={16}/> Mapa de Calor (Horários de Pico)</h4>
                                <div className="heatmap">
                                    {Array.from({length: 48}).map((_, i) => (
                                        <div key={i} style={{background: `rgba(37, 99, 235, ${Math.random()})`}}></div>
                                    ))}
                                </div>
                            </div>
                        </DashboardMock>
                    </MockupCard>
                    <TextContent>
                        <h3>Gestão Baseada em Dados</h3>
                        <p>
                            O Analytics do Maskot te dá a visão de raio-X sobre o atendimento da sua equipe.
                        </p>
                        <ul>
                            <li><Thermometer size={20}/> <strong>Mapa de Calor:</strong> Descubra horários de pico.</li>
                            <li><Clock size={20}/> <strong>SLA de Resposta:</strong> Monitore a agilidade da equipe.
                            </li>
                            <li><LineChart size={20}/> <strong>Conversão:</strong> Saiba quantos atendimentos viraram
                                matrícula.
                            </li>
                        </ul>
                    </TextContent>
                </FeatureRow>

                {/* 5. POWER FEATURES GRID */}
                <div style={{textAlign: 'center', marginBottom: '3rem'}}>
                    <h3 style={{
                        fontSize: '2rem',
                        fontWeight: 800,
                        color: '#333',
                        fontFamily: 'var(--font-inter)'
                    }}>Ferramentas de Produtividade</h3>
                    <p style={{color: '#666', marginTop: '0.5rem'}}>Funcionalidades pensadas para a rotina escolar.</p>
                </div>

                <PowerGrid>
                    <PowerCard>
                        <div className="icon"><Lock size={24}/></div>
                        <h4>Notas Internas</h4>
                        <p>Converse com sua equipe dentro do chat do pai (&quot;@Financeiro, verificar boleto&quot;) sem
                            que o cliente veja. Colaboração total.</p>
                    </PowerCard>

                    <PowerCard>
                        <div className="icon"><Mic size={24}/></div>
                        <h4>Áudio Acelerado</h4>
                        <p>Otimize o tempo dos seus consultores ouvindo áudios longos de pais em velocidade 1.5x ou
                            2x.</p>
                    </PowerCard>

                    <PowerCard>
                        <div className="icon"><Zap size={24}/></div>
                        <h4>Respostas Rápidas</h4>
                        <p>Crie atalhos (ex: /materiais) para enviar listas, documentos e textos padrões com apenas um
                            clique.</p>
                    </PowerCard>

                    <PowerCard>
                        <div className="icon"><Tag size={24}/></div>
                        <h4>Etiquetas Visuais</h4>
                        <p>Classifique conversas com tags coloridas (&quot;Financeiro&quot;, &quot;Pedagógico&quot;)
                            para filtrar sua inbox em segundos.</p>
                    </PowerCard>

                    <PowerCard>
                        <div className="icon"><Paperclip size={24}/></div>
                        <h4>Central de Anexos</h4>
                        <p>Acesse uma galeria organizada com todos os documentos, fotos e comprovantes trocados na
                            conversa.</p>
                    </PowerCard>

                    <PowerCard>
                        <div className="icon"><Users size={24}/></div>
                        <h4>Transferência Inteligente</h4>
                        <p>Transfira atendimentos entre departamentos (ex: Secretaria para Financeiro) levando todo o
                            histórico junto.</p>
                    </PowerCard>

                    <PowerCard>
                        <div className="icon"><MessageSquare size={24}/></div>
                        <h4>Templates Aprovados</h4>
                        <p>Inicie conversas enviando templates oficiais de WhatsApp aprovados pela Meta para reengajar contatos frios.</p>
                    </PowerCard>

                    <PowerCard>
                        <div className="icon"><FileDown size={24}/></div>
                        <h4>Exportação em PDF</h4>
                        <p>Precisa documentar um atendimento crítico? Exporte o histórico completo da conversa em um arquivo PDF em 1 clique.</p>
                    </PowerCard>

                    <PowerCard>
                        <div className="icon"><Clock size={24}/></div>
                        <h4>Histórico Vitalício</h4>
                        <p>Nunca perca o contexto. Acesse conversas de meses atrás para relembrar acordos ou informações trocadas com as famílias.</p>
                    </PowerCard>
                </PowerGrid>

            </Container>
        </Section>
    )
}