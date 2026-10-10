'use client'

import styled, {keyframes, css} from 'styled-components'
import {
    Zap, Mail, MessageCircle, Clock, GitBranch,
    TrendingUp, Users, CheckCircle2,
    BarChart3, Award, FlaskConical, Send, Braces
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
    padding: 6rem 0;
    background: #FFFFFF;
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
        color: #0F172A;
        letter-spacing: -0.02em;
        margin-bottom: 1rem;
        
        span { color: #0284C7; }
    }
    
    p {
        font-size: 1.125rem;
        color: #475569;
        line-height: 1.6;
    }
`

// --- BUILDER VISUALIZATION ---
const BuilderContainer = styled.div`
    background: #F8FAFC;
    border: 1px solid #E2E8F0;
    border-radius: 20px;
    height: 600px;
    position: relative;
    overflow: hidden;
    margin-bottom: 5rem;
    box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.05);
    background-image: radial-gradient(#CBD5E1 1.5px, transparent 0);
    background-size: 24px 24px;
    animation: ${slideUp} 0.8s ease-out;
`

const BuilderOverlay = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    background: #FFFFFF;
    padding: 8px 16px;
    border-radius: 100px;
    font-size: 0.75rem;
    font-weight: 700;
    color: #166534;
    border: 1px solid #DCFCE7;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    display: flex;
    align-items: center;
    gap: 6px;
    z-index: 10;

    &::before {
        content: '';
        width: 8px;
        height: 8px;
        background: #22C55E;
        border-radius: 50%;
    }
`

// --- RÉPLICA DO "CustomNode.tsx" ---
const NodeCard = styled.div<{ $type: 'trigger' | 'action' | 'condition' | 'exit' }>`
    position: absolute;
    width: 240px;
    background: #FFFFFF;
    border-radius: 12px;
    border: 1px solid #E2E8F0;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
    transition: all 0.2s ease;
    z-index: 2;
    cursor: default;

    ${props => props.$type === 'trigger' && css`
        background: #0F172A;
        color: white;
        border: 1px solid #0F172A;
    `}
    ${props => props.$type === 'condition' && css`
        border-top: 3px solid #D97706;
    `}
    ${props => props.$type === 'action' && css`
        border-top: 3px solid #0284C7;
    `}
    ${props => props.$type === 'exit' && css`
        border: 1px dashed #94A3B8;
        opacity: 0.9;
    `}

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
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
        background: rgba(255, 255, 255, 0.15);
        color: white;
    ` : css`
        background: ${props.$color}15;
        color: ${props.$color};
    `}
`

const NodeTitle = styled.div<{ $isTrigger?: boolean }>`
    font-weight: 700;
    font-size: 0.9rem;
    color: ${props => props.$isTrigger ? 'white' : '#0F172A'};
    line-height: 1.2;
`

const NodeInfo = styled.div<{ $isTrigger?: boolean }>`
    font-size: 0.75rem;
    color: ${props => props.$isTrigger ? 'rgba(255,255,255,0.7)' : '#64748B'};
    margin-top: 4px;
`

// Réplica da StatsBar do seu código
const StatsBar = styled.div`
    display: flex;
    border-top: 1px solid #E2E8F0;
    background: #F8FAFC;
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
    font-weight: 700;
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
        font-weight: 700;
    }
`

// --- FEATURE GRID (Replacing the list) ---
const FeatureGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-bottom: 5rem;

    @media (max-width: ${props => props.theme.breakpoints.md}) {
        grid-template-columns: 1fr;
    }
`

const FeatureCard = styled.div`
    background: #FFFFFF;
    padding: 2rem;
    border-radius: 16px;
    border: 1px solid #E2E8F0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
        border-color: #0284C7;
        .icon {
            background: #0284C7;
            color: #FFFFFF;
            border-color: #0284C7;
        }
    }

    h4 {
        font-size: 1.15rem;
        font-weight: 700;
        color: #0F172A;
        letter-spacing: -0.01em;
    }

    p {
        font-size: 0.95rem;
        color: #475569;
        line-height: 1.6;
    }

    .icon {
        width: 44px;
        height: 44px;
        border-radius: 12px;
        background: #F8FAFC;
        color: #0284C7;
        border: 1px solid #E2E8F0;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
    }
`

export default function MarketingJourneysDeepDive() {
    return (
        <Section id="recursos">
            <Container>

                <Header>
                    <h2>Não é só um fluxo, é uma <br/><span>Máquina de Vendas</span></h2>
                    <p>Visualize exatamente onde cada lead está. O Maskot mostra quantos pais entraram em cada etapa,
                        abriram o e-mail, clicaram no link e avançaram para a matrícula.</p>
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
                        <h4>Condições Avançadas (E / OU / NÃO)</h4>
                        <p>Vá muito além do &quot;se/senão&quot;. Combine regras aninhadas com mais de 20 operadores
                            (contém, maior que, entre, está vazio, data antes de…) sobre score, origem, tags e campos do lead.</p>
                    </FeatureCard>

                    <FeatureCard>
                        <div className="icon"><Award size={20}/></div>
                        <h4>Lead Scoring Automático</h4>
                        <p>A própria jornada pontua o lead conforme ele age. <em>Abriu o e-mail: +5</em>. Ao atingir o
                            limite, o lead é atribuído a um consultor e a equipe é avisada.</p>
                    </FeatureCard>

                    <FeatureCard>
                        <div className="icon"><FlaskConical size={20}/></div>
                        <h4>Teste A/B Integrado</h4>
                        <p>Não fique no achismo. Divida a audiência em caminhos diferentes (assunto, canal ou oferta)
                            e deixe os dados mostrarem qual mensagem converte mais matrículas.</p>
                    </FeatureCard>

                    <FeatureCard>
                        <div className="icon"><Send size={20}/></div>
                        <h4>Omnichannel de Verdade</h4>
                        <p>Combine <strong>e-mail, WhatsApp Oficial e SMS</strong> na mesma jornada — além de mudar
                            estágio, aplicar tags, criar tarefas e notificar a equipe automaticamente.</p>
                    </FeatureCard>

                    <FeatureCard>
                        <div className="icon"><Braces size={20}/></div>
                        <h4>Personalização com Merge Tags</h4>
                        <p>Cada mensagem sai com a cara da família: nome do responsável, aluno, escola e campos
                            personalizados — com formatação automática de datas e valores.</p>
                    </FeatureCard>

                    <FeatureCard>
                        <div className="icon"><BarChart3 size={20}/></div>
                        <h4>Analytics por Etapa</h4>
                        <p>Veja os gargalos do funil em cada nó: quantos leads entraram, saíram, o tempo médio e a
                            taxa de conversão — com linha do tempo de inscritos e concluídos.</p>
                    </FeatureCard>
                </FeatureGrid>

                {/* --- EXEMPLOS DE USO (Use Cases) --- */}
                <div style={{textAlign: 'center', marginBottom: '3rem'}}>
                    <h3 style={{
                        fontSize: '2rem',
                        fontWeight: 800,
                        color: '#0F172A',
                        fontFamily: 'var(--font-inter)',
                        letterSpacing: '-0.02em'
                    }}>Casos de Uso Comuns</h3>
                    <p style={{color: '#475569', marginTop: '0.5rem', fontSize: '1.125rem'}}>Estratégias já testadas e validadas em centenas de escolas parceiras.</p>
                </div>

                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
                    {/* CASE 1 */}
                    <div style={{
                        background: '#FFFFFF',
                        padding: '2rem',
                        borderRadius: '16px',
                        border: '1px solid #E2E8F0',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.02)'
                    }}>
                        <h4 style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            fontSize: '1.2rem',
                            fontWeight: 700,
                            marginBottom: '1rem',
                            color: '#0F172A',
                            letterSpacing: '-0.01em'
                        }}>
                            <span style={{
                                background: '#F0F9FF',
                                color: '#0284C7',
                                padding: '8px',
                                borderRadius: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: '1px solid #BAE6FD'
                            }}><Users size={18}/></span>
                            Recuperação de Leads Antigos
                        </h4>
                        <p style={{color: '#475569', fontSize: '0.95rem', lineHeight: '1.6'}}>
                            Busque leads que não fecharam no ano anterior. Envie um WhatsApp cordial perguntando se já definiram a escola. Se responderem positivamente a uma nova visita, o lead volta imediatamente para o topo do funil do CRM.
                        </p>
                    </div>

                    {/* CASE 2 */}
                    <div style={{
                        background: '#FFFFFF',
                        padding: '2rem',
                        borderRadius: '16px',
                        border: '1px solid #E2E8F0',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.02)'
                    }}>
                        <h4 style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            fontSize: '1.2rem',
                            fontWeight: 700,
                            marginBottom: '1rem',
                            color: '#0F172A',
                            letterSpacing: '-0.01em'
                        }}>
                            <span style={{
                                background: '#F0FDF4',
                                color: '#16A34A',
                                padding: '8px',
                                borderRadius: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: '1px solid #DCFCE7'
                            }}><CheckCircle2 size={18}/></span>
                            Pós-Visita e Fechamento
                        </h4>
                        <p style={{color: '#475569', fontSize: '0.95rem', lineHeight: '1.6'}}>
                            Após a visita presencial, aguarde 2 horas e dispare um vídeo pedagógico acolhedor. Se após 48h o contrato não for assinado, a jornada cria uma tarefa prioritária com notificação para a secretária ligar.
                        </p>
                    </div>

                    {/* CASE 3 */}
                    <div style={{
                        background: '#FFFFFF',
                        padding: '2rem',
                        borderRadius: '16px',
                        border: '1px solid #E2E8F0',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.02)'
                    }}>
                        <h4 style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            fontSize: '1.2rem',
                            fontWeight: 700,
                            marginBottom: '1rem',
                            color: '#0F172A',
                            letterSpacing: '-0.01em'
                        }}>
                            <span style={{
                                background: '#FFFBEB',
                                color: '#D97706',
                                padding: '8px',
                                borderRadius: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: '1px solid #FDE68A'
                            }}><TrendingUp size={18}/></span>
                            Régua de Nutrição Ativa
                        </h4>
                        <p style={{color: '#475569', fontSize: '0.95rem', lineHeight: '1.6'}}>
                            Envie conteúdos pedagógicos e diferenciais da escola semanalmente para famílias em processo de decisão. Conforme clicam nos materiais, acumulam pontos no Lead Scoring até a abordagem comercial ideal.
                        </p>
                    </div>
                </div>

            </Container>
        </Section>
    )
}