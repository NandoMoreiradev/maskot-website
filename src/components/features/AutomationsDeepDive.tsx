'use client'

import styled, {keyframes, css} from 'styled-components'
import {
    Zap, Mail, MessageSquare, Clock, CheckCircle2,
    ArrowRight, ListChecks, Play, MoreVertical,
    Plus, UserPlus, GripVertical, MousePointerClick,
    UserX, Calendar, UserCheck, AlertCircle, Phone
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

const flowLineAnim = keyframes`
    0% {
        height: 0;
        opacity: 0;
    }
    100% {
        height: 24px;
        opacity: 1;
    }
`

// --- LAYOUT PRINCIPAL ---
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

// --- PARTE 1: CONSTRUTOR VISUAL (Split Layout) ---
const SplitLayout = styled.div`
    display: grid;
    grid-template-columns: 40% 60%;
    gap: 4rem;
    align-items: center;
    margin-bottom: 8rem; // Espaço grande antes de começar os casos de uso

    @media (max-width: ${props => props.theme.breakpoints.lg}) {
        grid-template-columns: 1fr;
        gap: 3rem;
        margin-bottom: 6rem;
    }
`

const FeatureList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

const FeatureItem = styled.div`
    display: flex;
    gap: 1.25rem;
    align-items: flex-start;

    .icon-box {
        width: 42px;
        height: 42px;
        border-radius: 10px;
        background: ${props => props.theme.colors.white};
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${props => props.theme.colors.primary};
        // Cast seguro para TS
        border: 1px solid ${props => (props.theme.colors as unknown as {
            borderLight?: string
        }).borderLight || '#DEE2E6'};
        flex-shrink: 0;
    }

    h4 {
        font-size: 1.1rem;
        font-weight: 700;
        color: ${props => props.theme.colors.textDark};
        margin-bottom: 0.25rem;
    }

    p {
        color: ${props => props.theme.colors.textMedium};
        line-height: 1.5;
        font-size: 0.95rem;
    }
`

// --- ELEMENTOS DO MOCKUP (Builder) ---
const MockupWindow = styled.div`
    background: ${props => props.theme.colors.white};
    border-radius: 16px;
    box-shadow: ${props => props.theme.shadows['2xl']};
    border: 1px solid ${props => (props.theme.colors as unknown as { borderLight?: string }).borderLight || '#DEE2E6'};
    overflow: hidden;
    position: relative;
    animation: ${slideUp} 0.8s ease-out;
`
const WindowHeader = styled.div`
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #E9ECEF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #FAFAFA;

    .title-group {
        display: flex;
        flex-direction: column;
    }

    .status {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 0.75rem;
        font-weight: 700;
        color: #28A745;
        background: #DCFCE7;
        padding: 4px 10px;
        border-radius: 20px;
        text-transform: uppercase;
    }
`
const BuilderCanvas = styled.div`
    padding: 2rem;
    background: #F8F9FA;
    background-image: radial-gradient(#E5E7EB 1px, transparent 0);
    background-size: 20px 20px;
    min-height: 520px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const NodeCard = styled.div<{ $type: 'trigger' | 'action' }>`
    width: 100%;
    max-width: 380px;
    background: #fff;
    border: 1px solid ${props => props.$type === 'trigger' ? props.theme.colors.secondary : '#DEE2E6'};
    border-left: 4px solid ${props => props.$type === 'trigger' ? props.theme.colors.secondary : props.theme.colors.primary};
    border-radius: 8px;
    padding: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
    position: relative;
    z-index: 2;
    ${props => props.$type === 'trigger' && css`
        &::before { content: 'GATILHO'; position: absolute; top: -10px; left: 12px; background: ${props.theme.colors.secondary}; color: white; font-size: 0.6rem; font-weight: bold; padding: 2px 8px; border-radius: 4px; }
    `}
`
const ConnectorLine = styled.div` height: 24px;
    width: 2px;
    background: #CBD5E1;
    margin: 4px 0;
    animation: ${flowLineAnim} 0.5s ease forwards; `
const NodeIcon = styled.div<{ $color: string }>` width: 36px;
    height: 36px;
    border-radius: 8px;
    background: ${props => props.$color}15;
    color: ${props => props.$color};
    display: flex;
    align-items: center;
    justify-content: center; `
const NodeContent = styled.div` flex: 1;

    h5 {
        font-size: 0.9rem;
        font-weight: 600;
        margin: 0 0 2px 0;
        color: #333;
    }

    p {
        font-size: 0.75rem;
        color: #666;
        margin: 0;
    } `
const AddNodeButton = styled.div` width: 32px;
    height: 32px;
    border-radius: 50%;
    background: white;
    border: 1px dashed #94A3B8;
    color: #94A3B8;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 4px; `
const TagChip = styled.span` display: inline-block;
    font-size: 0.7rem;
    padding: 2px 6px;
    background: #E0F2F1;
    color: #00695C;
    border-radius: 4px;
    margin-top: 4px; `


// --- PARTE 2: CASOS DE USO (RECIPES) ---

const UseCasesHeader = styled.div`
    text-align: center;
    margin-bottom: 3rem;

    h3 {
        font-size: 2rem;
        font-weight: 800;
        color: ${props => props.theme.colors.textDark};
        margin-bottom: 1rem;
    }

    p {
        color: ${props => props.theme.colors.textMedium};
        font-size: 1.1rem;
    }
`

const UseCasesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    @media (max-width: ${props => props.theme.breakpoints.lg}) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: ${props => props.theme.breakpoints.md}) {
        grid-template-columns: 1fr;
    }
`

const RecipeCard = styled.div`
    background: #fff;
    border: 1px solid ${(props) => (props.theme.colors as unknown as { borderLight?: string }).borderLight || '#DEE2E6'};
    border-radius: 16px;
    padding: 2rem;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(0,0,0,0.08);
        border-color: ${props => props.theme.colors.primary}40;
    }
`

const IconHeader = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: #F0F7FF;
    color: ${props => props.theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
`

const Title = styled.h4`
    font-size: 1.25rem;
    font-weight: 700;
    color: ${props => props.theme.colors.textDark};
    margin-bottom: 0.5rem;
`

const Description = styled.p`
    font-size: 0.9rem;
    color: ${props => props.theme.colors.textMedium};
    margin-bottom: 2rem;
    flex: 1;
    line-height: 1.5;
`

const WorkflowList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    background: #F8F9FA;
    padding: 1rem;
    border-radius: 8px;
    border: 1px solid #E9ECEF;
`

const Step = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 0.8rem;
    font-weight: 500;
    color: ${props => props.theme.colors.textDark};

    svg {
        flex-shrink: 0;
    }
    
    &.trigger { color: ${props => props.theme.colors.secondary}; }
    &.action { color: ${props => props.theme.colors.textDark}; }
`

// Ícone helper
const ListIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
         strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 6h11"/>
        <path d="M10 12h11"/>
        <path d="M10 18h11"/>
        <path d="M3 6h1"/>
        <path d="M3 12h1"/>
        <path d="M3 18h1"/>
    </svg>
)

export default function AutomationsDeepDive() {
    return (
        <Section>
            <Container>

                {/* --- PARTE 1: EXPLICAÇÃO DO CONSTRUTOR --- */}
                <SplitLayout>
                    <FeatureList>
                        <div style={{marginBottom: '1rem'}}>
                            <h3 style={{fontSize: '1.75rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.2}}>
                                Construtor Visual <br/>
                                <span style={{color: '#007BFF'}}>Simples e Poderoso</span>
                            </h3>
                            <p style={{color: '#6C757D', lineHeight: 1.6}}>
                                Não precisa saber programar. Crie fluxos complexos apenas arrastando e soltando blocos
                                lógicos.
                            </p>
                        </div>

                        <FeatureItem>
                            <div className="icon-box"><MousePointerClick size={20}/></div>
                            <div>
                                <h4>Interface No-Code</h4>
                                <p>Clique em + e escolha o que deve acontecer.
                                    Adicione <strong>Gatilhos</strong>, <strong>Ações</strong> e <strong>Esperas</strong> (Delays)
                                    visualmente.</p>
                            </div>
                        </FeatureItem>

                        <FeatureItem>
                            <div className="icon-box"><Clock size={20}/></div>
                            <div>
                                <h4>Controle de Tempo (Delays)</h4>
                                <p>Defina intervalos inteligentes: <em>Espere 2 dias</em> ou <em>Espere 30
                                    minutos</em> antes de enviar a próxima mensagem.</p>
                            </div>
                        </FeatureItem>

                        <FeatureItem>
                            <div className="icon-box"><CheckCircle2 size={20}/></div>
                            <div>
                                <h4>Condições de Parada</h4>
                                <p>O sistema é inteligente: se o pai responder o WhatsApp, a automação de cobrança para
                                    imediatamente.</p>
                            </div>
                        </FeatureItem>
                    </FeatureList>

                    <MockupWindow>
                        <WindowHeader>
                            <div className="title-group">
                                <strong>Boas-vindas + Nutrição</strong>
                                <span style={{fontSize: '0.7rem', color: '#999'}}>ID: #AUTO-8921</span>
                            </div>
                            <div className="status"><Play size={10} fill="currentColor"/> Ativa</div>
                        </WindowHeader>

                        <BuilderCanvas>
                            {/* Trigger */}
                            <NodeCard $type="trigger">
                                <NodeIcon $color="#28A745"><UserPlus size={20}/></NodeIcon>
                                <NodeContent>
                                    <h5>Novo Lead Cadastrado</h5>
                                    <p>Origem: Site ou Landing Page</p>
                                </NodeContent>
                                <MoreVertical size={16} color="#ccc"/>
                            </NodeCard>
                            <ConnectorLine/>

                            {/* Action 1 */}
                            <NodeCard $type="action">
                                <GripVertical size={16} color="#ccc" style={{marginRight: -4}}/>
                                <NodeIcon $color="#00A884"><MessageSquare size={20}/></NodeIcon>
                                <NodeContent>
                                    <h5>Enviar WhatsApp</h5>
                                    <p>Template: <em>Oi! Vi seu interesse...</em></p>
                                </NodeContent>
                            </NodeCard>
                            <ConnectorLine/>

                            {/* Action 2 */}
                            <div style={{
                                padding: '4px 12px', background: '#E9ECEF', borderRadius: '12px',
                                fontSize: '0.75rem', color: '#495057', border: '1px solid #DEE2E6',
                                display: 'flex', alignItems: 'center', gap: '6px'
                            }}>
                                <Clock size={12}/> Aguardar 10 minutos
                            </div>
                            <ConnectorLine/>

                            {/* Action 3 */}
                            <NodeCard $type="action">
                                <GripVertical size={16} color="#ccc" style={{marginRight: -4}}/>
                                <NodeIcon $color="#6C757D"><CheckCircle2 size={20}/></NodeIcon>
                                <NodeContent>
                                    <h5>Adicionar Tag</h5>
                                    <TagChip>Em Atendimento</TagChip>
                                </NodeContent>
                            </NodeCard>
                            <ConnectorLine/>
                            <AddNodeButton><Plus size={16}/></AddNodeButton>
                        </BuilderCanvas>
                    </MockupWindow>
                </SplitLayout>


                {/* --- PARTE 2: EXEMPLOS PRÁTICOS (ANTIGO AUTOMATION TEMPLATES) --- */}

                <UseCasesHeader>
                    <h3>Receitas Prontas para Usar</h3>
                    <p>Veja o que as escolas mais eficientes estão automatizando no Maskot.</p>
                </UseCasesHeader>

                <UseCasesGrid>
                    {/* CARD 1: RESGATE */}
                    <RecipeCard>
                        <IconHeader><UserX size={24}/></IconHeader>
                        <Title>Resgate de Sumidos</Title>
                        <Description>
                            Detecta leads que pararam de responder e tenta reengajá-los antes de arquivar.
                        </Description>
                        <WorkflowList>
                            <Step className="trigger">
                                <AlertCircle size={14}/> Lead sem contato há 5 dias
                            </Step>
                            <Step className="action">
                                <ArrowRight size={12} style={{transform: 'rotate(90deg)', marginLeft: 2}}/>
                                <MessageSquare size={14}/> WhatsApp: Ainda tem interesse?
                            </Step>
                            <Step className="action">
                                <ArrowRight size={12} style={{transform: 'rotate(90deg)', marginLeft: 2}}/>
                                <Phone size={14}/> Criar Tarefa: Tentar última ligação
                            </Step>
                        </WorkflowList>
                    </RecipeCard>

                    {/* CARD 2: VISITA AGENDADA */}
                    <RecipeCard>
                        <IconHeader><Calendar size={24}/></IconHeader>
                        <Title>Confirmação de Visita</Title>
                        <Description>
                            Reduza o No-Show (pais que faltam) enviando lembretes automáticos e localização.
                        </Description>
                        <WorkflowList>
                            <Step className="trigger">
                                <Calendar size={14}/> Visita Agendada
                            </Step>
                            <Step className="action">
                                <ArrowRight size={12} style={{transform: 'rotate(90deg)', marginLeft: 2}}/>
                                <MessageSquare size={14}/> WhatsApp (1 dia antes): Confirmando...
                            </Step>
                            <Step className="action">
                                <ArrowRight size={12} style={{transform: 'rotate(90deg)', marginLeft: 2}}/>
                                <MessageSquare size={14}/> Enviar Localização (1 hora antes)
                            </Step>
                        </WorkflowList>
                    </RecipeCard>

                    {/* CARD 3: MATRÍCULA GANHA */}
                    <RecipeCard>
                        <IconHeader><UserCheck size={24}/></IconHeader>
                        <Title>Onboarding de Aluno</Title>
                        <Description>
                            Garanta que o Financeiro e o Pedagógico recebam os dados assim que a venda for fechada.
                        </Description>
                        <WorkflowList>
                            <Step className="trigger">
                                <UserCheck size={14}/> Venda Ganha (Matriculado)
                            </Step>
                            <Step className="action">
                                <ArrowRight size={12} style={{transform: 'rotate(90deg)', marginLeft: 2}}/>
                                <Mail size={14}/> Email de Boas-vindas para os Pais
                            </Step>
                            <Step className="action">
                                <ArrowRight size={12} style={{transform: 'rotate(90deg)', marginLeft: 2}}/>
                                <ListIcon/> Tarefa Secretaria: Separar material
                            </Step>
                        </WorkflowList>
                    </RecipeCard>
                </UseCasesGrid>

            </Container>
        </Section>
    )
}