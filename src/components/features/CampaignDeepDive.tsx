'use client'

import styled, {keyframes, css} from 'styled-components'
import {
    LineChart, PieChart, Sparkles, Filter, Link as LinkIcon, 
    Share2, Megaphone, PenTool, LayoutTemplate, Target,
    Globe, Users, Image as ImageIcon, FileText, CheckCircle2, Clock,
    MessageSquare, Layers
} from 'lucide-react'

// --- Animations ---
const float = keyframes`
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
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
            color: ${props => props.theme.colors.primary};
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

    .dots {
        display: flex;
        gap: 6px;
        div { width: 8px; height: 8px; border-radius: 50%; background: #ccc; }
    }
`

// --- MOCKUP 1: ESTÚDIO CRIATIVO AIA ---
const StudioMock = styled.div`
    height: 380px;
    background: #fafafa;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    .toolbar {
        display: flex;
        gap: 10px;
        button {
            padding: 6px 12px;
            border-radius: 20px;
            border: 1px solid ${props => props.theme.colors.backgroundMedium};
            background: white;
            font-size: 11px;
            font-weight: bold;
            color: #555;
            display: flex;
            align-items: center;
            gap: 6px;
        }
        button.active {
            background: ${props => props.theme.colors.primary}15;
            color: ${props => props.theme.colors.primary};
            border-color: ${props => props.theme.colors.primary};
        }
    }

    .ai-box {
        background: white;
        border: 2px solid #e0baf5;
        border-radius: 12px;
        padding: 16px;
        flex: 1;

        .sparkle-header {
            display: flex;
            align-items: center;
            gap: 6px;
            color: #a855f7;
            font-weight: bold;
            font-size: 12px;
            margin-bottom: 12px;
        }

        .generated-text {
            font-size: 13px;
            color: #333;
            line-height: 1.5;
            background: #f9f4ff;
            padding: 12px;
            border-radius: 8px;
            border-left: 3px solid #a855f7;
        }
    }
`

// --- MOCKUP 2: DASHBOARD 360 ---
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

    .progress-bar {
        height: 8px;
        background: #eee;
        border-radius: 4px;
        margin-top: 10px;
        overflow: hidden;
        
        .fill {
            height: 100%;
            background: ${props => props.theme.colors.secondary};
            width: 65%;
        }
    }
`

// --- MOCKUP 3: GESTÃO DE CANAIS ---
const ChannelMock = styled.div`
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .channel-row {
        background: #fff;
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .info {
            display: flex;
            align-items: center;
            gap: 12px;
            
            .icon-box {
                width: 40px; height: 40px; border-radius: 8px; 
                display: flex; align-items: center; justify-content: center;
            }
            .name { font-size: 0.9rem; font-weight: 600; color: #1e293b; }
            .type { font-size: 0.75rem; color: #64748b; }
        }
        
        .stats {
            text-align: right;
            .leads { font-weight: bold; color: #1e293b; font-size: 1.1rem; }
            .cac { font-size: 0.8rem; color: #10B981; font-weight: 500; }
        }
    }
`

// --- MOCKUP 4: APROVAÇÃO DE ATIVOS ---
const AssetMock = styled.div`
    padding: 1.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    .asset-card {
        background: #fff;
        border: 1px solid #e2e8f0;
        border-radius: 10px;
        overflow: hidden;
        
        .preview {
            height: 100px;
            background: #f8fafc;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #cbd5e1;
        }
        .details {
            padding: 1rem;
            .title { font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px; }
            .status { 
                font-size: 0.7rem; font-weight: 600; padding: 4px 8px; border-radius: 12px; display: inline-flex; align-items: center; gap: 4px;
                &.approved { background: #dcfce7; color: #166534; }
                &.pending { background: #fef9c3; color: #854d0e; }
            }
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

export default function CampaignDeepDive() {
    return (
        <Section>
            <Container>

                {/* 1. DASHBOARD ORÇAMENTO */}
                <FeatureRow>
                    <TextContent>
                        <h3>Gestão de Orçamento e<br/>Retorno em Tempo Real</h3>
                        <p>
                            Defina o budget global da campanha e distribua pelos canais (Online Pago, Offline, Parcerias). 
                            Acompanhe Leads gerados versus o custo planejado.
                        </p>
                        <ul>
                            <li><Target size={20}/> <strong>Controle de Verba:</strong> Saiba exatamente quanto foi alocado e quanto já foi consumido.</li>
                            <li><PieChart size={20}/> <strong>Performance por Canal:</strong> Veja qual mídia (Facebook, Instagram, Outdoor) gera mais conversão.</li>
                            <li><LineChart size={20}/> <strong>Dashboard 360º:</strong> Relatório unindo Marketing e Vendas na mesma tela.</li>
                        </ul>
                    </TextContent>

                    <MockupCard>
                        <MockupHeader>
                            <div className="dots"><div></div><div></div><div></div></div>
                        </MockupHeader>
                        <DashboardMock>
                            <div className="card full-width">
                                <h4><Target size={16}/> Orçamento da Campanha (Matrículas 2026)</h4>
                                <div className="val">R$ 15.000,00</div>
                                <div className="progress-bar"><div className="fill"></div></div>
                                <p style={{ fontSize: '11px', marginTop: '6px', color: '#666' }}>R$ 9.750,00 gastos (65%)</p>
                            </div>
                            <div className="card">
                                <h4><Filter size={16}/> Leads Gerados</h4>
                                <div className="val">428</div>
                            </div>
                            <div className="card">
                                <h4><Megaphone size={16}/> Custo por Lead</h4>
                                <div className="val">R$ 22,78</div>
                            </div>
                        </DashboardMock>
                    </MockupCard>
                </FeatureRow>

                {/* 2. ESTÚDIO CRIATIVO IA */}
                <FeatureRow $reverse>
                    <MockupCard>
                        <MockupHeader>
                            <div className="dots"><div></div><div></div><div></div></div>
                        </MockupHeader>
                        <StudioMock>
                            <div className="toolbar">
                                <button className="active"><Megaphone size={12}/> Instagram</button>
                                <button><Share2 size={12}/> WhatsApp</button>
                                <button><PenTool size={12}/> E-mail</button>
                            </div>
                            <div className="ai-box">
                                <div className="sparkle-header"><Sparkles size={16}/> IA: Tom Amigável e Urgente</div>
                                <div className="generated-text">
                                    🚨 Últimas vagas para o Ensino Médio 2026! 🚨<br/><br/>
                                    Garanta o futuro do seu filho com a melhor infraestrutura da cidade. 
                                    Agende uma visita hoje mesmo e conheça de perto nossos laboratórios e corpo docente. 
                                    Clique no link da bio! 👇
                                </div>
                            </div>
                        </StudioMock>
                    </MockupCard>

                    <TextContent>
                        <h3>Estúdio Criativo com IA:<br/>Sua agência de bolso</h3>
                        <p>
                            Sem tempo para criar textos? Nossa Inteligência Artificial redige copys persuasivas para 
                            cada canal, adaptando o tom de voz para Instagram, WhatsApp ou E-mail.
                        </p>
                        <ul>
                            <li><PenTool size={20}/> <strong>Múltiplos Tons:</strong> Escolha entre amigável, urgente, formal ou direto.</li>
                            <li><LayoutTemplate size={20}/> <strong>Formatos Adaptados:</strong> A IA já cria o texto no limite de caracteres e com emojis da rede social.</li>
                            <li><Sparkles size={20}/> <strong>Bloqueio Criativo Zero:</strong> Gere infinitas variações em segundos.</li>
                        </ul>
                    </TextContent>
                </FeatureRow>

                {/* 3. GESTÃO DE CANAIS (MULTICANAL) */}
                <FeatureRow>
                    <TextContent>
                        <h3>Múltiplos Canais,<br/>Uma Só Verdade</h3>
                        <p>
                            Chega de planilhas separadas. Organize suas frentes: 
                            Tráfego Pago, Indicações, Outdoors e Parcerias em um só lugar.
                        </p>
                        <ul>
                            <li><Globe size={20}/> <strong>Meta & Google Ads:</strong> Compare o custo de aquisição (CAC) em tempo real.</li>
                            <li><Users size={20}/> <strong>Parceiros Estratégicos:</strong> Saiba exatamente quantas matrículas vieram da escola parceira.</li>
                            <li><Layers size={20}/> <strong>Tracking Automático:</strong> Os leads caem no CRM com a origem <code>UTM</code> já preenchida.</li>
                        </ul>
                    </TextContent>

                    <MockupCard>
                        <MockupHeader>
                            <div className="dots"><div></div><div></div><div></div></div>
                        </MockupHeader>
                        <ChannelMock>
                            <div className="channel-row">
                                <div className="info">
                                    <div className="icon-box" style={{ background: '#e0f2fe', color: '#0ea5e9' }}><Globe size={20}/></div>
                                    <div>
                                        <div className="name">Meta Ads - Inverno</div>
                                        <div className="type">Online Secundário</div>
                                    </div>
                                </div>
                                <div className="stats">
                                    <div className="leads">128 leads</div>
                                    <div className="cac">R$ 18,50 / lead</div>
                                </div>
                            </div>
                            <div className="channel-row">
                                <div className="info">
                                    <div className="icon-box" style={{ background: '#fef3c7', color: '#d97706' }}><Users size={20}/></div>
                                    <div>
                                        <div className="name">Escola Parceira ABC</div>
                                        <div className="type">Indicação</div>
                                    </div>
                                </div>
                                <div className="stats">
                                    <div className="leads">45 leads</div>
                                    <div className="cac">R$ 0,00 / lead</div>
                                </div>
                            </div>
                        </ChannelMock>
                    </MockupCard>
                </FeatureRow>

                {/* 4. APROVAÇÃO DE ATIVOS (ASSET MANAGEMENT) */}
                <FeatureRow $reverse>
                    <MockupCard>
                        <MockupHeader>
                            <div className="dots"><div></div><div></div><div></div></div>
                        </MockupHeader>
                        <AssetMock>
                            <div className="asset-card">
                                <div className="preview"><ImageIcon size={32}/></div>
                                <div className="details">
                                    <div className="title">Banner Insta - V1</div>
                                    <span className="status approved"><CheckCircle2 size={12}/> Aprovado</span>
                                </div>
                            </div>
                            <div className="asset-card">
                                <div className="preview"><FileText size={32}/></div>
                                <div className="details">
                                    <div className="title">Copy WhatsApp</div>
                                    <span className="status pending"><Clock size={12}/> Pendente</span>
                                </div>
                            </div>
                        </AssetMock>
                    </MockupCard>

                    <TextContent>
                        <h3>Biblioteca de Criativos:<br/>Adeus ao &quot;Manda de novo?&quot;</h3>
                        <p>
                            Sua agência fez uma arte nova? Eles sobem direto na campanha. 
                            Você aprova, e toda a sua equipe na mesma hora tem acesso 
                            ao PDF ou Vídeo para disparar aos pais.
                        </p>
                        <ul>
                            <li><ImageIcon size={20}/> <strong>Gestão de Ativos:</strong> Imagens, Vídeos e Documentos centralizados.</li>
                            <li><CheckCircle2 size={20}/> <strong>Fluxo de Aprovação:</strong> A arte só vai pra rua após o &quot;OK&quot; da Direção.</li>
                            <li><MessageSquare size={20}/> <strong>Ligado à Ponta:</strong> O consultor pode enviar anexos da campanha em 1 clique.</li>
                        </ul>
                    </TextContent>
                </FeatureRow>

                {/* 5. ASSETS E RASTREIO */}
                <div style={{ textAlign: 'center', marginBottom: '3rem', marginTop: '4rem' }}>
                    <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#333' }}>Ferramentas de Tração</h3>
                    <p style={{ color: '#666', marginTop: '0.5rem' }}>Tudo que seu time precisa para dominar a prospecção.</p>
                </div>

                <PowerGrid>
                    <PowerCard>
                        <div className="icon"><LinkIcon size={24}/></div>
                        <h4>Gerador de UTM</h4>
                        <p>Crie links rastreáveis parametrizados automaticamente para saber a origem exata de cada clique e lead.</p>
                    </PowerCard>

                    <PowerCard>
                        <div className="icon"><LayoutTemplate size={24}/></div>
                        <h4>Gestão de Ativos</h4>
                        <p>Centralize vídeos, imagens, banners e PDFs da campanha em uma única biblioteca acessível por toda a equipe.</p>
                    </PowerCard>

                    <PowerCard>
                        <div className="icon"><Share2 size={24}/></div>
                        <h4>Omnichannel</h4>
                        <p>Organize suas ações entre Parcerias (escolas parceiras), Panfletagem (offline) e tráfego pago (online).</p>
                    </PowerCard>
                </PowerGrid>

                {/* --- EXEMPLOS DE USO (Use Cases) --- */}
                <div style={{textAlign: 'center', marginBottom: '3rem', marginTop: '6rem'}}>
                    <h3 style={{fontSize: '1.75rem', fontWeight: 800, color: '#333'}}>Casos de Uso Comuns</h3>
                </div>

                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
                    {/* CASE 1 */}
                    <div style={{
                        background: 'white',
                        padding: '2rem',
                        borderRadius: '16px',
                        border: '1px solid #DEE2E6'
                    }}>
                        <h4 style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            fontSize: '1.2rem',
                            marginBottom: '1rem',
                            color: '#333'
                        }}>
                            <span style={{
                                background: '#E0F2FE',
                                color: '#007BFF',
                                padding: '6px',
                                borderRadius: '8px'
                            }}><Users size={18}/></span>
                            Captação Antecipada (Bolsões)
                        </h4>
                        <p style={{color: '#666', fontSize: '0.95rem'}}>
                            Gere uma Landing Page pública, associe cupons de desconto limitados e acompanhe o batimento da sua Meta de Inscrições em tempo real.
                        </p>
                    </div>

                    {/* CASE 2 */}
                    <div style={{
                        background: 'white',
                        padding: '2rem',
                        borderRadius: '16px',
                        border: '1px solid #DEE2E6'
                    }}>
                        <h4 style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            fontSize: '1.2rem',
                            marginBottom: '1rem',
                            color: '#333'
                        }}>
                            <span style={{
                                background: '#DCFCE7',
                                color: '#166534',
                                padding: '6px',
                                borderRadius: '8px'
                            }}><CheckCircle2 size={18}/></span>
                            Recuperação de Evasão
                        </h4>
                        <p style={{color: '#666', fontSize: '0.95rem'}}>
                            Defina um orçamento reduzido para disparos de WhatsApp e crie uma campanha focada em ligar para alunos que deixaram a escola no último ano.
                        </p>
                    </div>
                </div>

            </Container>
        </Section>
    )
}
