'use client'

import styled, {keyframes, css} from 'styled-components'
import {
    Zap, Mail, MessageCircle, Clock, GitBranch,
    TrendingUp, Users, CheckCircle2,
    BarChart3, Award
} from 'lucide-react'

// --- ANIMATIONS ---
const slideUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`

const dashFlow = keyframes`
    to {
        stroke-dashoffset: -20;
    }
`

// --- LAYOUT ---
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

const Header = styled.div`
    text-align: center;
    max-width: 800px;
    margin: 0 auto 4rem;

    h2 {
        font-size: 2.5rem;
        font-weight: 800;
        color: ${props => props.theme.colors.textDark};
        margin-bottom: 1rem;
        
        span { color: ${props => props.theme.colors.accent}; }
    }
    
    p {
        font-size: 1.125rem;
        color: ${props => props.theme.colors.textMedium};
        line-height: 1.6;
    }
`

// --- BUILDER VISUALIZATION ---
const BuilderContainer = styled.div`
    background: #F8F9FA;
    border: 1px solid ${(props) => (props.theme.colors as unknown as {
        borderLight?: string
    }).borderLight || '#DEE2E6'};
    border-radius: 16px;
    height: 600px;
    position: relative;
    overflow: hidden;
    margin-bottom: 5rem;
    box-shadow: ${props => props.theme.shadows.xl};
    background-image: radial-gradient(#CBD5E1 1.5px, transparent 0);
    background-size: 24px 24px;
    animation: ${slideUp} 0.8s ease-out;
`

const BuilderOverlay = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    background: white;
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 700;
    color: #10B981;
    border: 1px solid #10B98140;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    display: flex;
    align-items: center;
    gap: 6px;
    z-index: 10;

    &::before {
        content: '';
        width: 8px;
        height: 8px;
        background: currentColor;
        border-radius: 50%;
        animation: pulse 2s infinite;
    }
`

// --- RÉPLICA DO "CustomNode.tsx" ---
const NodeCard = styled.div<{ $type: 'trigger' | 'action' | 'condition' | 'exit' }>`
    position: absolute;
    width: 240px;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    transition: transform 0.2s;
    z-index: 2;
    cursor: default;

    /* Estilo baseado no tipo */

    ${props => props.$type === 'trigger' && css`
        background: linear-gradient(135deg, ${props.theme.colors.primary} 0%, #0056b3 100%);
        color: white;
        border: none;
    `}
    ${props => props.$type !== 'trigger' && css`
        border: 2px solid ${props.theme.colors.primary};
        border-color: ${props.$type === 'exit' ? '#64748b' : props.$type === 'condition' ? '#F59E0B' : props.theme.colors.primary};
        ${props.$type === 'exit' && 'border-style: dashed; opacity: 0.9;'}
    `}
    &:hover {
        transform: translateY(-2px);
        z-index: 3;
    }
`

const NodeContent = styled.div`
    padding: 1rem;
`

const NodeHeaderRow = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.5rem;
`

const NodeIcon = styled.div<{ $isTrigger?: boolean; $color?: string }>`
    width: 36px;
    height: 36px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    ${props => props.$isTrigger ? css`
        background: rgba(255, 255, 255, 0.2);
        color: white;
    ` : css`
        background: ${props.$color}15;
        color: ${props.$color};
    `}
`

const NodeTitle = styled.div<{ $isTrigger?: boolean }>`
    font-weight: 600;
    font-size: 0.9rem;
    color: ${props => props.$isTrigger ? 'white' : props.theme.colors.textDark};
    line-height: 1.2;
`

const NodeInfo = styled.div<{ $isTrigger?: boolean }>`
    font-size: 0.75rem;
    color: ${props => props.$isTrigger ? 'rgba(255,255,255,0.8)' : props.theme.colors.textMedium};
    margin-top: 4px;
`

// Réplica da StatsBar do seu código
const StatsBar = styled.div`
    display: flex;
    border-top: 1px solid #E2E8F0;
    background: #F8F9FA;
    height: 28px;
    border-radius: 0 0 12px 12px;
    overflow: hidden;
`

const StatItem = styled.div<{ $color: string; $border?: boolean }>`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    font-size: 0.7rem;
    font-weight: 600;
    color: ${props => props.$color};
    border-right: ${props => props.$border ? '1px solid #E2E8F0' : 'none'};
`

// SVG Connections
const Connections = styled.svg`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    pointer-events: none;

    path {
        stroke: #94A3B8;
        stroke-width: 2;
        fill: none;
        stroke-dasharray: 6;
        animation: ${dashFlow} 1s linear infinite;
    }

    text {
        fill: #64748B;
        font-size: 10px;
        font-weight: 600;
        background: white;
    }
`

// --- FEATURE GRID (Replacing the list) ---
const FeatureGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-bottom: 4rem;

    @media (max-width: ${props => props.theme.breakpoints.md}) {
        grid-template-columns: 1fr;
    }
`

const FeatureCard = styled.div`
    background: white;
    padding: 1.5rem;
    border-radius: 12px;
    border: 1px solid ${(props) => (props.theme.colors as unknown as {
        borderLight?: string
    }).borderLight || '#DEE2E6'};
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h4 {
        font-size: 1.1rem;
        font-weight: 700;
        color: ${props => props.theme.colors.textDark};
    }

    p {
        font-size: 0.9rem;
        color: ${props => props.theme.colors.textMedium};
        line-height: 1.5;
    }

    .icon {
        width: 40px;
        height: 40px;
        border-radius: 8px;
        background: ${props => props.theme.colors.pageBackground};
        color: ${props => props.theme.colors.primary};
        display: flex;
        alignItems: center;
        justifyContent: center;
    }
`

export default function MarketingJourneysDeepDive() {
    return (
        <Section>
            <Container>

                <Header>
                    <h2>Não é só um fluxo, é uma <br/><span>Máquina de Vendas</span></h2>
                    <p>Visualize exatamente onde cada lead está. O Maskot mostra em tempo real quantos pais abriram o
                        e-mail, clicaram no link e avançaram para a matrícula.</p>
                </Header>

                {/* --- VISUAL BUILDER MOCKUP --- */}
                <BuilderContainer>
                    <BuilderOverlay>● EM EXECUÇÃO</BuilderOverlay>

                    <Connections>
                        {/* Trigger -> Email */}
                        <path d="M600 80 L600 140"/>
                        {/* Email -> Condition */}
                        <path d="M600 240 L600 290"/>
                        {/* Condition -> Left (YES) */}
                        <path d="M600 390 L600 410 L450 410 L450 440"/>
                        {/* Condition -> Right (NO) */}
                        <path d="M600 390 L600 410 L750 410 L750 440"/>

                        {/* Labels on paths */}
                        <rect x="480" y="400" width="40" height="20" rx="4" fill="#DCFCE7"/>
                        <text x="490" y="414" fill="#166534">SIM</text>

                        <rect x="680" y="400" width="40" height="20" rx="4" fill="#FEE2E2"/>
                        <text x="690" y="414" fill="#991B1B">NÃO</text>
                    </Connections>

                    {/* NODE 1: TRIGGER */}
                    <NodeCard $type="trigger" style={{top: 20, left: '50%', transform: 'translateX(-50%)'}}>
                        <NodeContent>
                            <NodeHeaderRow>
                                <NodeIcon $isTrigger><Zap size={18}/></NodeIcon>
                                <NodeTitle $isTrigger>Lead Criado</NodeTitle>
                            </NodeHeaderRow>
                            <NodeInfo $isTrigger>Origem: Landing Page 2025</NodeInfo>
                        </NodeContent>
                        {/* Stats removidas do trigger para ficar igual ao seu design real */}
                    </NodeCard>

                    {/* NODE 2: EMAIL ACTION */}
                    <NodeCard $type="action" style={{top: 140, left: '50%', transform: 'translateX(-50%)'}}>
                        <NodeContent>
                            <NodeHeaderRow>
                                <NodeIcon $color="#007BFF"><Mail size={18}/></NodeIcon>
                                <NodeTitle>Enviar Email</NodeTitle>
                            </NodeHeaderRow>
                            <NodeInfo>Template: Apresentação Pedagógica</NodeInfo>
                        </NodeContent>
                        <StatsBar>
                            <StatItem $color="#007BFF" $border><Users size={12}/> 1.2k</StatItem>
                            <StatItem $color="#28a745"><CheckCircle2 size={12}/> 98%</StatItem>
                        </StatsBar>
                    </NodeCard>

                    {/* NODE 3: CONDITION */}
                    <NodeCard $type="condition" style={{top: 290, left: '50%', transform: 'translateX(-50%)'}}>
                        <NodeContent>
                            <NodeHeaderRow>
                                <NodeIcon $color="#F59E0B"><GitBranch size={18}/></NodeIcon>
                                <NodeTitle>Verificar Leitura</NodeTitle>
                            </NodeHeaderRow>
                            <NodeInfo>Lead abriu o email?</NodeInfo>
                        </NodeContent>
                        <StatsBar>
                            <StatItem $color="#007BFF" $border><Users size={12}/> 1.2k</StatItem>
                            <StatItem $color="#F59E0B"><Clock size={12}/> 2h</StatItem>
                        </StatsBar>
                    </NodeCard>

                    {/* NODE 4: WHATSAPP (Branch YES) */}
                    <NodeCard $type="action" style={{top: 440, left: '28%'}}>
                        <NodeContent>
                            <NodeHeaderRow>
                                <NodeIcon $color="#28a745"><MessageCircle size={18}/></NodeIcon>
                                <NodeTitle>Enviar WhatsApp</NodeTitle>
                            </NodeHeaderRow>
                            <NodeInfo>Template: Convite para Visita</NodeInfo>
                        </NodeContent>
                        <StatsBar>
                            <StatItem $color="#007BFF" $border><Users size={12}/> 850</StatItem>
                            <StatItem $color="#28a745"><CheckCircle2 size={12}/> 45%</StatItem>
                        </StatsBar>
                    </NodeCard>

                    {/* NODE 5: ADD TAG (Branch NO) */}
                    <NodeCard $type="action" style={{top: 440, left: '52%'}}>
                        <NodeContent>
                            <NodeHeaderRow>
                                <NodeIcon $color="#64748b"><TrendingUp size={18}/></NodeIcon>
                                <NodeTitle>Mudar Estágio</NodeTitle>
                            </NodeHeaderRow>
                            <NodeInfo>Mover para: Nutrição Fria</NodeInfo>
                        </NodeContent>
                        <StatsBar>
                            <StatItem $color="#007BFF" $border><Users size={12}/> 350</StatItem>
                            <StatItem $color="#28a745"><CheckCircle2 size={12}/> 100%</StatItem>
                        </StatsBar>
                    </NodeCard>

                </BuilderContainer>

                {/* --- FEATURES GRID --- */}
                <FeatureGrid>
                    <FeatureCard>
                        <div className="icon"><GitBranch size={20}/></div>
                        <h4>Ramificação Lógica</h4>
                        <p>Crie caminhos diferentes baseados no comportamento. Se o pai clicou, ofereça desconto. Se não
                            abriu, tente por WhatsApp.</p>
                    </FeatureCard>

                    <FeatureCard>
                        <div className="icon"><Award size={20}/></div>
                        <h4>Lead Scoring Automático</h4>
                        <p>Configure regras para pontuar leads. <em>Abriu email: +5 pontos</em>. Quando chegar a 50,
                            avise o consultor.</p>
                    </FeatureCard>

                    <FeatureCard>
                        <div className="icon"><BarChart3 size={20}/></div>
                        <h4>Analytics em Tempo Real</h4>
                        <p>Veja os gargalos do funil. O card de cada etapa mostra quantos leads entraram, completaram ou
                            falharam.</p>
                    </FeatureCard>
                </FeatureGrid>

                {/* --- EXEMPLOS DE USO (Use Cases) --- */}
                <div style={{textAlign: 'center', marginBottom: '3rem'}}>
                    <h3 style={{fontSize: '1.75rem', fontWeight: 800, color: '#333'}}>Casos de Uso Comuns</h3>
                </div>

                <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem'}}>
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
                            Recuperação de Leads Antigos
                        </h4>
                        <p style={{color: '#666', fontSize: '0.95rem'}}>
                            Busque leads que não fecharam no ano passado. Envie um WhatsApp perguntando se já decidiram
                            a escola. Se responderem Não, mova para o funil de vendas.
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
                            Pós-Visita (Matrícula)
                        </h4>
                        <p style={{color: '#666', fontSize: '0.95rem'}}>
                            Após a visita, espere 2 horas e envie um vídeo institucional. Aguarde 2 dias. Se não houver
                            matrícula, crie uma tarefa de Ligação de Fechamento.
                        </p>
                    </div>
                </div>

            </Container>
        </Section>
    )
}