'use client'

import styled, { css, keyframes } from 'styled-components'
import {
    LayoutTemplate, MousePointer2, Blocks, Palette,
    Users, CalendarCheck, Megaphone,
    Clock, Star, MessageCircleQuestion,
    Smartphone, Zap, Search, ShieldCheck,
    BarChart3, Target, History, Share2,
    GraduationCap, BookOpen, CalendarDays, MonitorPlay,
    CheckCircle2, Copy, Eye, Globe,
    TrendingUp, ArrowUpRight
} from 'lucide-react'

const float = keyframes`
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
`

const pulse = keyframes`
    0% { box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.4); }
    70% { box-shadow: 0 0 0 10px rgba(139, 92, 246, 0); }
    100% { box-shadow: 0 0 0 0 rgba(139, 92, 246, 0); }
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
            color: #8B5CF6;
            flex-shrink: 0;
        }
    }
`

const SectionLabel = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: #F5F3FF;
    color: #7C3AED;
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: 0.4rem 0.8rem;
    border-radius: 20px;
    margin-bottom: 1rem;
`

const BuilderMockup = styled.div`
    background: #1E293B;
    border-radius: 16px;
    border: 8px solid #0F172A;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    overflow: hidden;
    display: flex;
    height: 400px;
`

const Sidebar = styled.div`
    width: 80px;
    background: #0F172A;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem 0;
    gap: 1.5rem;
    border-right: 1px solid #334155;

    .icon-btn {
        width: 40px;
        height: 40px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #94A3B8;
        cursor: pointer;
        transition: 0.2s;

        &:hover, &.active {
            background: #8B5CF6;
            color: white;
        }
    }
`

const Canvas = styled.div`
    flex: 1;
    background: #F1F5F9;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow-y: hidden;
`

const BlockMock = styled.div<{ $type?: 'hero' | 'form' | 'countdown' }>`
    background: white;
    border-radius: 8px;
    border: 2px dashed #CBD5E1;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #64748B;
    font-size: 0.875rem;
    font-weight: 600;
    min-height: 80px;
    transition: 0.2s;
    cursor: grab;

    &:hover {
        border-color: #8B5CF6;
        color: #8B5CF6;
        background: #F5F3FF;
    }

    ${props => props.$type === 'hero' && css`
        min-height: 120px;
        background: #E0E7FF;
        border-style: solid;
        border-color: #C7D2FE;
        color: #4F46E5;
    `}

    ${props => props.$type === 'form' && css`
        min-height: 100px;
        background: #DCFCE7;
        border-style: solid;
        border-color: #BBF7D0;
        color: #16A34A;
    `}
`

const FloatingWidget = styled.div`
    position: absolute;
    background: white;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    bottom: -20px;
    right: -20px;
    border: 1px solid #E2E8F0;
    animation: ${float} 5s ease-in-out infinite;

    .header {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 12px;
        color: #0F172A;
        font-weight: 700;

        svg { color: #8B5CF6; }
    }

    .time {
        display: flex;
        gap: 8px;

        span {
            background: #F1F5F9;
            padding: 8px 12px;
            border-radius: 6px;
            font-weight: 800;
            color: #1E293B;
            font-size: 1.2rem;
            min-width: 45px;
            text-align: center;
        }
    }
`

const BenefitList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`

const BenefitItem = styled.div`
    display: flex;
    gap: 1rem;
    align-items: flex-start;

    .icon {
        width: 24px;
        height: 24px;
        color: #EC4899;
        flex-shrink: 0;
        margin-top: 2px;
    }

    div {
        h4 {
            font-size: 1.1rem;
            font-weight: 700;
            color: ${props => props.theme.colors.textDark};
            margin-bottom: 0.25rem;
        }

        p {
            font-size: 0.95rem;
            color: ${props => props.theme.colors.textMedium};
            margin: 0;
        }
    }
`

const FeatureGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    @media (max-width: ${props => props.theme.breakpoints.lg}) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${props => props.theme.breakpoints.sm}) {
        grid-template-columns: 1fr;
    }
`

const FeatureCard = styled.div`
    background: #F8F9FA;
    padding: 2rem;
    border-radius: 16px;
    border: 1px solid ${(props) => (props.theme.colors as unknown as { borderLight?: string }).borderLight || '#DEE2E6'};
    transition: all 0.3s ease;

    &:hover {
        background: #fff;
        box-shadow: 0 10px 30px rgba(139, 92, 246, 0.1);
        transform: translateY(-5px);
        border-color: #8B5CF6;
    }

    .icon {
        width: 48px;
        height: 48px;
        background: #fff;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #8B5CF6;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        margin-bottom: 1.5rem;
    }

    h4 {
        font-size: 1.1rem;
        font-weight: 700;
        color: ${props => props.theme.colors.textDark};
        margin-bottom: 0.75rem;
    }

    p {
        font-size: 0.9rem;
        color: ${props => props.theme.colors.textMedium};
        line-height: 1.5;
        margin: 0;
    }
`

const FormMockup = styled.div`
    background: white;
    padding: 2rem;
    border-radius: 16px;
    box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.1);
    max-width: 360px;
    margin: 0 auto;
    border: 1px solid #E2E8F0;

    .title {
        font-weight: 800;
        color: #1E293B;
        margin-bottom: 1rem;
        font-size: 1.2rem;
        text-align: center;
    }

    .input-group {
        margin-bottom: 1rem;

        .label {
            height: 8px;
            width: 40%;
            background: #E2E8F0;
            border-radius: 4px;
            margin-bottom: 8px;
        }

        .input {
            height: 40px;
            background: #F8FAFC;
            border: 1px solid #CBD5E1;
            border-radius: 8px;
        }
    }

    .btn {
        background: #22C55E;
        height: 44px;
        border-radius: 8px;
        width: 100%;
        margin-top: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
        animation: ${pulse} 2s infinite;
    }
`

// --- TEMPLATES ---
const TemplatesSection = styled.div`
    margin-bottom: 8rem;
`

const TemplatesSectionHeader = styled.div`
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
        max-width: 600px;
        margin: 0 auto 2rem;
    }
`

const TemplateGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin-bottom: 2.5rem;

    @media (max-width: ${props => props.theme.breakpoints.lg}) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${props => props.theme.breakpoints.sm}) {
        grid-template-columns: 1fr;
    }
`

const TemplateCard = styled.div<{ $color: string; $bg: string }>`
    background: white;
    border: 1px solid #E2E8F0;
    border-radius: 16px;
    padding: 1.75rem;
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    transition: all 0.3s ease;

    &:hover {
        box-shadow: 0 10px 30px rgba(139, 92, 246, 0.1);
        transform: translateY(-3px);
        border-color: ${props => props.$color};
    }

    .icon-wrap {
        width: 48px;
        height: 48px;
        border-radius: 12px;
        background: ${props => props.$bg};
        color: ${props => props.$color};
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }

    .content {
        flex: 1;

        .tag {
            font-size: 0.7rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: ${props => props.$color};
            margin-bottom: 4px;
        }

        h4 {
            font-size: 1rem;
            font-weight: 700;
            color: ${props => props.theme.colors.textDark};
            margin-bottom: 4px;
        }

        p {
            font-size: 0.85rem;
            color: ${props => props.theme.colors.textMedium};
            margin: 0;
            line-height: 1.4;
        }
    }
`

const TemplatesFeatureRow = styled.div`
    display: flex;
    justify-content: center;
    gap: 3rem;
    flex-wrap: wrap;

    @media (max-width: ${props => props.theme.breakpoints.md}) {
        gap: 1.5rem;
    }
`

const TemplateFeatureItem = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.95rem;
    font-weight: 600;
    color: ${props => props.theme.colors.textDark};

    svg { color: #8B5CF6; }
`

// --- ANALYTICS ---
const AnalyticsCard = styled.div`
    background: white;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    padding: 1.5rem;
    border: 1px solid #E2E8F0;
    max-width: 440px;
    margin: 0 auto;
    animation: ${float} 7s ease-in-out infinite;
`

const AnalyticsHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.25rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #F1F5F9;

    h5 { margin: 0; font-size: 1rem; font-weight: 700; color: #0F172A; }

    .badges {
        display: flex;
        gap: 6px;

        .badge {
            font-size: 0.7rem;
            font-weight: 700;
            padding: 3px 8px;
            border-radius: 6px;

            &.ga4 { background: #FEF3C7; color: #D97706; }
            &.pixel { background: #DBEAFE; color: #1D4ED8; }
        }
    }
`

const MetricsRow = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-bottom: 1.25rem;
`

const MetricItem = styled.div`
    text-align: center;
    background: #F8FAFC;
    border-radius: 10px;
    padding: 0.75rem 0.5rem;

    .value {
        font-size: 1.4rem;
        font-weight: 800;
        color: #0F172A;
        line-height: 1;
        margin-bottom: 4px;
    }

    .label {
        font-size: 0.7rem;
        color: #64748B;
        font-weight: 500;
    }

    .trend {
        font-size: 0.7rem;
        color: #16A34A;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2px;
        margin-top: 2px;
    }
`

const UtmTable = styled.div`
    .table-header {
        display: grid;
        grid-template-columns: 1fr auto auto;
        gap: 1rem;
        font-size: 0.7rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: #94A3B8;
        padding: 0.5rem 0;
        border-bottom: 1px solid #F1F5F9;
        margin-bottom: 0.5rem;
    }

    .table-row {
        display: grid;
        grid-template-columns: 1fr auto auto;
        gap: 1rem;
        align-items: center;
        padding: 0.5rem 0;
        font-size: 0.875rem;
        border-bottom: 1px solid #F8FAFC;

        .source { color: #334155; font-weight: 600; }
        .views { color: #64748B; }
        .conv { color: #16A34A; font-weight: 700; }

        .bar-wrap {
            display: flex;
            align-items: center;
            gap: 8px;

            .bar {
                height: 4px;
                border-radius: 2px;
                background: linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%);
            }
        }
    }
`

// --- PUBLICAR / VERSIONAR ---
const PublishMockup = styled.div`
    background: white;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    padding: 1.5rem;
    border: 1px solid #E2E8F0;
    max-width: 440px;
    margin: 0 auto;
    animation: ${float} 8s ease-in-out infinite;
`

const EditorToolbar = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0.75rem 1rem;
    background: #0F172A;
    border-radius: 10px;
    margin-bottom: 1.25rem;

    .page-name {
        font-size: 0.9rem;
        font-weight: 700;
        color: white;
        flex: 1;
    }

    .status-badge {
        font-size: 0.7rem;
        font-weight: 700;
        padding: 3px 8px;
        border-radius: 6px;
        background: #16A34A;
        color: white;
        display: flex;
        align-items: center;
        gap: 4px;

        .dot { width: 6px; height: 6px; border-radius: 50%; background: #86EFAC; }
    }

    .save-indicator {
        font-size: 0.7rem;
        color: #94A3B8;
        display: flex;
        align-items: center;
        gap: 4px;
    }

    .toolbar-btn {
        width: 32px;
        height: 32px;
        border-radius: 6px;
        background: #1E293B;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #94A3B8;
        cursor: pointer;
        transition: 0.2s;

        &:hover { background: #334155; color: white; }
    }
`

const VersionHistory = styled.div`
    background: #F8FAFC;
    border-radius: 10px;
    padding: 1rem;
    margin-bottom: 1rem;

    .vh-title {
        font-size: 0.75rem;
        font-weight: 700;
        color: #64748B;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 0.75rem;
    }

    .version-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.5rem 0;
        border-bottom: 1px solid #E2E8F0;
        font-size: 0.875rem;

        &:last-child { border: none; }

        .ver-info {
            display: flex;
            align-items: center;
            gap: 8px;
            color: #334155;

            .ver-num { font-weight: 700; color: #0F172A; }
        }

        .restore-btn {
            font-size: 0.75rem;
            color: #8B5CF6;
            font-weight: 600;
            cursor: pointer;
        }
    }
`

const DomainCard = styled.div`
    background: #F0FDF4;
    border: 1px solid #BBF7D0;
    border-radius: 10px;
    padding: 1rem;
    display: flex;
    align-items: center;
    gap: 10px;

    .domain-icon { color: #16A34A; }

    .domain-info {
        flex: 1;

        .domain-name { font-size: 0.875rem; font-weight: 700; color: #0F172A; }
        .domain-status { font-size: 0.75rem; color: #16A34A; }
    }

    .copy-btn {
        width: 28px;
        height: 28px;
        border-radius: 6px;
        background: #DCFCE7;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #16A34A;
        cursor: pointer;
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

export default function LandingPagesDeepDive() {
    return (
        <Section>
            <Container>
                {/* BLOCO 1: CONSTRUTOR ARRASTE E SOLTE */}
                <SplitLayout>
                    <TextContent>
                        <SectionLabel><Blocks size={14} /> Editor Visual</SectionLabel>
                        <h3>Arraste, Solte e <br />Publique</h3>
                        <p>
                            Não dependa mais de programadores ou agências para criar páginas de campanha.
                            Nosso construtor visual permite montar landing pages completas em minutos.
                        </p>
                        <ul>
                            <li><LayoutTemplate size={20}/> <strong>31 tipos de blocos:</strong> Heros, Formulários, Countdown, Depoimentos, FAQ, Vídeo e muito mais.</li>
                            <li><Palette size={20}/> <strong>Customizável:</strong> Altere cores, fontes e backgrounds com seletor visual.</li>
                            <li><MousePointer2 size={20}/> <strong>Nenhuma linha de código:</strong> Arraste o que precisa e veja o resultado ao vivo.</li>
                        </ul>
                    </TextContent>

                    <div style={{ position: 'relative' }}>
                        <BuilderMockup>
                            <Sidebar>
                                <div className="icon-btn active"><Blocks size={20}/></div>
                                <div className="icon-btn"><LayoutTemplate size={20}/></div>
                                <div className="icon-btn"><Palette size={20}/></div>
                            </Sidebar>
                            <Canvas>
                                <BlockMock $type="hero">Hero Block (Capa)</BlockMock>
                                <BlockMock $type="form">Formulário de Captação</BlockMock>
                                <BlockMock>Arraste novos blocos aqui...</BlockMock>
                            </Canvas>
                        </BuilderMockup>

                        <FloatingWidget>
                            <div className="header">
                                <Clock size={16} /> Oferta Expira Em:
                            </div>
                            <div className="time">
                                <span>02</span>:<span>45</span>:<span>10</span>
                            </div>
                        </FloatingWidget>
                    </div>
                </SplitLayout>

                {/* BLOCO 2: FOCO EM CONVERSÃO */}
                <SplitLayout $reverse>
                    <FormMockup>
                        <div className="title">Matrículas Abertas</div>
                        <div className="input-group">
                            <div className="label"></div>
                            <div className="input"></div>
                        </div>
                        <div className="input-group">
                            <div className="label"></div>
                            <div className="input"></div>
                        </div>
                        <div className="btn">Garantir Vaga</div>
                    </FormMockup>

                    <TextContent>
                        <SectionLabel><Users size={14} /> CRM Integrado</SectionLabel>
                        <h3>Formulários Conectados <br />ao seu CRM</h3>
                        <p>
                            O verdadeiro poder está na integração. Qualquer lead que preencher um formulário na sua
                            Landing Page cai instantaneamente no funil de vendas do Maskot, pronto para ser atendido.
                        </p>
                        <BenefitList>
                            <BenefitItem>
                                <Users className="icon"/>
                                <div>
                                    <h4>Captura de Leads Automática</h4>
                                    <p>Oportunidades criadas na etapa correta do pipeline sem digitação manual.</p>
                                </div>
                            </BenefitItem>
                            <BenefitItem>
                                <CalendarCheck className="icon"/>
                                <div>
                                    <h4>Agendamento de Visitas</h4>
                                    <p>Incorpore sua agenda diretamente na página para os pais marcarem horários.</p>
                                </div>
                            </BenefitItem>
                            <BenefitItem>
                                <MessageCircleQuestion className="icon"/>
                                <div>
                                    <h4>Botão de WhatsApp</h4>
                                    <p>Um clique e o pai já está falando com a sua secretaria via WhatsApp Web.</p>
                                </div>
                            </BenefitItem>
                        </BenefitList>
                    </TextContent>
                </SplitLayout>

                {/* BLOCO 3: GATILHOS MENTAIS */}
                <SplitLayout>
                    <TextContent>
                        <SectionLabel><Megaphone size={14} /> Conversão</SectionLabel>
                        <h3>Urgência e Prova Social</h3>
                        <p>
                            Para matricular mais, você precisa de elementos que convençam os pais. Nossas páginas
                            possuem blocos focados em gatilhos mentais.
                        </p>
                        <ul>
                            <li><Clock size={20}/> <strong>Contadores Regressivos:</strong> Crie escassez real para campanhas de matrícula.</li>
                            <li><Star size={20}/> <strong>Depoimentos:</strong> Mostre o que outros pais falam da sua escola.</li>
                            <li><Megaphone size={20}/> <strong>Estatísticas e FAQs:</strong> Quebre objeções e mostre números de aprovação.</li>
                        </ul>
                    </TextContent>

                    <div style={{ background: '#F8FAFC', padding: '3rem', borderRadius: '24px', border: '1px solid #E2E8F0', textAlign: 'center' }}>
                        <div style={{ display: 'inline-flex', gap: '8px', color: '#F59E0B', marginBottom: '1rem' }}>
                            <Star fill="currentColor" />
                            <Star fill="currentColor" />
                            <Star fill="currentColor" />
                            <Star fill="currentColor" />
                            <Star fill="currentColor" />
                        </div>
                        <p style={{ fontSize: '1.2rem', fontStyle: 'italic', color: '#334155', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                            &quot;A melhor escolha que fizemos para nosso filho. A estrutura da escola é impecável e o
                            atendimento da equipe nos passou muita segurança desde o primeiro dia.&quot;
                        </p>
                        <strong style={{ color: '#0F172A' }}>Maria Silva</strong>
                        <div style={{ color: '#64748B', fontSize: '0.9rem' }}>Mãe do Pedro (2º Ano)</div>
                    </div>
                </SplitLayout>

                {/* BLOCO 4: TEMPLATES PRONTOS */}
                <TemplatesSection>
                    <TemplatesSectionHeader>
                        <SectionLabel style={{ margin: '0 auto 1rem' }}><LayoutTemplate size={14} /> Templates</SectionLabel>
                        <h3>Comece com um template — não do zero</h3>
                        <p>7 templates criados especificamente para escolas. Escolha, personalize e publique em minutos.</p>
                    </TemplatesSectionHeader>

                    <TemplateGrid>
                        <TemplateCard $color="#8B5CF6" $bg="#F5F3FF">
                            <div className="icon-wrap"><GraduationCap size={22} /></div>
                            <div className="content">
                                <div className="tag">Matrícula</div>
                                <h4>Matrícula Básica</h4>
                                <p>Hero, formulário e botão WhatsApp. Ideal para campanhas rápidas.</p>
                            </div>
                        </TemplateCard>

                        <TemplateCard $color="#EC4899" $bg="#FDF2F8">
                            <div className="icon-wrap"><Star size={22} /></div>
                            <div className="content">
                                <div className="tag">Matrícula</div>
                                <h4>Matrícula Premium</h4>
                                <p>Recursos, depoimentos, preços e FAQ para convencer os pais.</p>
                            </div>
                        </TemplateCard>

                        <TemplateCard $color="#0284C7" $bg="#E0F2FE">
                            <div className="icon-wrap"><CalendarDays size={22} /></div>
                            <div className="content">
                                <div className="tag">Evento</div>
                                <h4>Open House</h4>
                                <p>Página de visitação aberta com contagem regressiva e agenda.</p>
                            </div>
                        </TemplateCard>

                        <TemplateCard $color="#D97706" $bg="#FEF3C7">
                            <div className="icon-wrap"><MonitorPlay size={22} /></div>
                            <div className="content">
                                <div className="tag">Evento</div>
                                <h4>Webinar</h4>
                                <p>Inscrição para aulas ao vivo ou apresentações institucionais.</p>
                            </div>
                        </TemplateCard>

                        <TemplateCard $color="#059669" $bg="#D1FAE5">
                            <div className="icon-wrap"><BookOpen size={22} /></div>
                            <div className="content">
                                <div className="tag">Curso</div>
                                <h4>Curso Online</h4>
                                <p>Captação de alunos para cursos livres com galeria e preços.</p>
                            </div>
                        </TemplateCard>

                        <TemplateCard $color="#7C3AED" $bg="#EDE9FE">
                            <div className="icon-wrap"><Megaphone size={22} /></div>
                            <div className="content">
                                <div className="tag">Evento</div>
                                <h4>Evento Especial</h4>
                                <p>Formaturas, feiras culturais e eventos com registro de presença.</p>
                            </div>
                        </TemplateCard>
                    </TemplateGrid>

                    <TemplatesFeatureRow>
                        <TemplateFeatureItem><CheckCircle2 size={18} /> Prontos para escolas</TemplateFeatureItem>
                        <TemplateFeatureItem><CheckCircle2 size={18} /> Editáveis em qualquer detalhe</TemplateFeatureItem>
                        <TemplateFeatureItem><CheckCircle2 size={18} /> SEO e CRM já configurados</TemplateFeatureItem>
                    </TemplatesFeatureRow>
                </TemplatesSection>

                {/* BLOCO 5: ANALYTICS E RASTREAMENTO */}
                <SplitLayout $reverse>
                    <AnalyticsCard>
                        <AnalyticsHeader>
                            <h5>Matrícula 2025 — Análise</h5>
                            <div className="badges">
                                <span className="badge ga4">GA4</span>
                                <span className="badge pixel">Meta Pixel</span>
                            </div>
                        </AnalyticsHeader>

                        <MetricsRow>
                            <MetricItem>
                                <div className="value">1.284</div>
                                <div className="label">Visualizações</div>
                                <div className="trend"><ArrowUpRight size={10} />+12%</div>
                            </MetricItem>
                            <MetricItem>
                                <div className="value">94</div>
                                <div className="label">Leads</div>
                                <div className="trend"><ArrowUpRight size={10} />+8%</div>
                            </MetricItem>
                            <MetricItem>
                                <div className="value">7,3%</div>
                                <div className="label">Conversão</div>
                                <div className="trend"><ArrowUpRight size={10} />+1,2pp</div>
                            </MetricItem>
                        </MetricsRow>

                        <UtmTable>
                            <div className="table-header">
                                <span>Origem</span>
                                <span>Views</span>
                                <span>Leads</span>
                            </div>
                            <div className="table-row">
                                <span className="source">Google Ads</span>
                                <span className="views">621</span>
                                <span className="conv">48</span>
                            </div>
                            <div className="table-row">
                                <span className="source">Instagram</span>
                                <span className="views">389</span>
                                <span className="conv">29</span>
                            </div>
                            <div className="table-row">
                                <span className="source">Facebook</span>
                                <span className="views">274</span>
                                <span className="conv">17</span>
                            </div>
                        </UtmTable>
                    </AnalyticsCard>

                    <TextContent>
                        <SectionLabel><BarChart3 size={14} /> Analytics</SectionLabel>
                        <h3>Saiba de qual anúncio <br />veio cada matrícula</h3>
                        <p>
                            Conecte sua landing page ao Google Analytics e ao Meta Pixel com um único campo. Acompanhe visualizações, leads e taxas de conversão em tempo real — por fonte de tráfego.
                        </p>
                        <ul>
                            <li><Target size={20}/> <strong>UTM Tracking:</strong> Veja qual campanha, anúncio ou canal trouxe cada lead.</li>
                            <li><TrendingUp size={20}/> <strong>GA4 + Meta Pixel:</strong> Injetados automaticamente, sem mexer no código.</li>
                            <li><BarChart3 size={20}/> <strong>Painel nativo:</strong> Views, conversões e taxa de conversão por fonte — tudo dentro do Maskot.</li>
                        </ul>
                    </TextContent>
                </SplitLayout>

                {/* BLOCO 6: PUBLICAR, VERSIONAR E DISTRIBUIR */}
                <SplitLayout>
                    <TextContent>
                        <SectionLabel><Share2 size={14} /> Publicação</SectionLabel>
                        <h3>Publique, Versione <br />e Distribua</h3>
                        <p>
                            Do rascunho à página publicada em segundos. Faça preview antes de lançar, restaure versões anteriores com um clique e compartilhe com domínio próprio ou link direto.
                        </p>
                        <ul>
                            <li><History size={20}/> <strong>Auto-save + 20 versões:</strong> Nunca perca o trabalho — restaure qualquer versão anterior.</li>
                            <li><Eye size={20}/> <strong>Preview antes de publicar:</strong> Veja exatamente como vai ficar antes de ir ao ar.</li>
                            <li><Globe size={20}/> <strong>CDN + domínio próprio:</strong> Publicação instantânea em CDN com seu domínio verificado.</li>
                        </ul>
                    </TextContent>

                    <PublishMockup>
                        <EditorToolbar>
                            <span className="page-name">Matrícula 2025</span>
                            <span className="status-badge"><span className="dot"></span>Publicada</span>
                            <span className="save-indicator"><CheckCircle2 size={12} /> Salvo</span>
                            <div className="toolbar-btn"><Eye size={14} /></div>
                            <div className="toolbar-btn"><Copy size={14} /></div>
                        </EditorToolbar>

                        <VersionHistory>
                            <div className="vh-title"><History size={11} style={{ display: 'inline', marginRight: 4 }} /> Histórico de Versões</div>
                            <div className="version-row">
                                <div className="ver-info"><span className="ver-num">v3</span> Hoje, 14:32 — Atual</div>
                                <span className="restore-btn">Restaurar</span>
                            </div>
                            <div className="version-row">
                                <div className="ver-info"><span className="ver-num">v2</span> Ontem, 09:15</div>
                                <span className="restore-btn">Restaurar</span>
                            </div>
                            <div className="version-row">
                                <div className="ver-info"><span className="ver-num">v1</span> 05/Jun, 16:40</div>
                                <span className="restore-btn">Restaurar</span>
                            </div>
                        </VersionHistory>

                        <DomainCard>
                            <Globe size={18} className="domain-icon" />
                            <div className="domain-info">
                                <div className="domain-name">matriculas.colegioexemplo.com.br</div>
                                <div className="domain-status">✓ Domínio verificado</div>
                            </div>
                            <div className="copy-btn"><Copy size={13} /></div>
                        </DomainCard>
                    </PublishMockup>
                </SplitLayout>

                {/* BLOCO 7: GRID DE BENEFÍCIOS (expandido para 6) */}
                <SectionDivider>
                    <h3>Tecnologia de Ponta</h3>
                    <p>Páginas rápidas, seguras e prontas para rodar anúncios.</p>
                </SectionDivider>

                <FeatureGrid>
                    <FeatureCard>
                        <div className="icon"><Smartphone size={24}/></div>
                        <h4>Mobile First</h4>
                        <p>Mais de 80% dos acessos vêm do celular. Nossas páginas se adaptam perfeitamente a qualquer tela.</p>
                    </FeatureCard>

                    <FeatureCard>
                        <div className="icon"><Zap size={24}/></div>
                        <h4>Carregamento Rápido</h4>
                        <p>Otimizadas para carregar em milissegundos, evitando que o pai desista antes de ver sua oferta.</p>
                    </FeatureCard>

                    <FeatureCard>
                        <div className="icon"><Search size={24}/></div>
                        <h4>Otimizadas para SEO</h4>
                        <p>Meta title, description, OG image e estrutura limpa configuráveis para o Google encontrar sua escola.</p>
                    </FeatureCard>

                    <FeatureCard>
                        <div className="icon"><ShieldCheck size={24}/></div>
                        <h4>Domínio Próprio</h4>
                        <p>Publique as páginas com o seu próprio endereço web, garantindo autoridade para sua marca.</p>
                    </FeatureCard>

                    <FeatureCard>
                        <div className="icon"><Target size={24}/></div>
                        <h4>GA4 + Meta Pixel</h4>
                        <p>Rastreie conversões de anúncios automaticamente — injete seu ID de pixel com um único campo.</p>
                    </FeatureCard>

                    <FeatureCard>
                        <div className="icon"><History size={24}/></div>
                        <h4>Controle de Versões</h4>
                        <p>20 snapshots automáticos com restauração em 1 clique. Nunca perca uma versão aprovada.</p>
                    </FeatureCard>
                </FeatureGrid>

            </Container>
        </Section>
    )
}
