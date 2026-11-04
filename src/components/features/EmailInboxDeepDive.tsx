'use client'

import styled, { keyframes, css } from 'styled-components'
import {
    Mail, Inbox, Send, Clock, Tag as TagIcon,
    ShieldCheck, Users, Sparkles, CheckCircle2,
    Paperclip, Reply, Star, Archive, Trash2,
    Calendar, User, Lock, PhoneCall, MessageCircle,
    CalendarCheck, AlertTriangle, ArrowRight, CornerUpLeft,
    Keyboard, ChevronRight, FileText, Check, Layers
} from 'lucide-react'

const float = keyframes`
    0% { transform: translateY(0px); }
    50% { transform: translateY(-8px); }
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

const ActHeader = styled.div`
    text-align: center;
    max-width: 760px;
    margin: 0 auto 5rem;

    .eyebrow {
        display: inline-block;
        padding: 0.35rem 0.9rem;
        border-radius: 999px;
        background: #EFF6FF;
        color: #2563EB;
        font-size: 0.8rem;
        font-weight: 800;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        margin-bottom: 1rem;
    }

    h2 {
        font-size: 2.5rem;
        font-weight: 800;
        line-height: 1.15;
        color: #0F172A;
        margin-bottom: 1rem;
        letter-spacing: -0.02em;
    }

    p {
        font-size: 1.1rem;
        color: #475569;
        line-height: 1.6;
        margin: 0;
    }

    @media (max-width: 640px) {
        margin-bottom: 3.5rem;
        h2 { font-size: 1.85rem; }
    }
`

const ActDivider = styled.div`
    height: 1px;
    background: linear-gradient(90deg, transparent, #E2E8F0, transparent);
    margin: 2rem 0 6rem;
`

const FeatureRow = styled.div<{ $reverse?: boolean }>`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4.5rem;
    align-items: center;
    margin-bottom: 7.5rem;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
        gap: 3rem;
        margin-bottom: 5.5rem;
        display: flex;
        flex-direction: column-reverse;

        ${props => !props.$reverse && css`
            flex-direction: column;
        `}
    }
`

const TextContent = styled.div`
    h3 {
        font-size: 2.1rem;
        font-weight: 800;
        margin-bottom: 1.25rem;
        line-height: 1.2;
        color: #0F172A;
        letter-spacing: -0.02em;
    }

    p {
        font-size: 1.05rem;
        color: #475569;
        line-height: 1.6;
        margin-bottom: 1.8rem;
    }

    ul {
        list-style: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 1.1rem;
    }

    li {
        display: flex;
        align-items: flex-start;
        gap: 0.85rem;
        font-size: 0.95rem;
        font-weight: 600;
        color: #1E293B;

        svg {
            color: #2563EB;
            flex-shrink: 0;
            margin-top: 3px;
            width: 18px;
            height: 18px;
        }
    }
`

const MockupCard = styled.div`
    background: #FFFFFF;
    border-radius: 20px;
    box-shadow: 0 25px 50px -10px rgba(15, 23, 42, 0.08);
    border: 1px solid #E2E8F0;
    overflow: hidden;
    position: relative;
    animation: ${float} 8s ease-in-out infinite;
`

const MockupHeader = styled.div`
    height: 42px;
    background: #F8FAFC;
    border-bottom: 1px solid #E2E8F0;
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
            background: #CBD5E1;
        }
    }

    .title-tab {
        margin-left: 0.5rem;
        font-size: 0.76rem;
        font-weight: 700;
        color: #475569;
        display: flex;
        align-items: center;
        gap: 0.35rem;

        svg { width: 13px; height: 13px; color: #2563EB; }
    }
`

const WindowDots = ({ title }: { title: string }) => (
    <MockupHeader>
        <div className="dots">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div className="title-tab">
            <Mail />
            {title}
        </div>
    </MockupHeader>
)

/* =========================================================================
   MOCKUP 1: CAIXAS COMPARTILHADAS (MULTI-MAILBOX & LOGS DE AUDITORIA)
   ========================================================================= */
const MailboxesMock = styled.div`
    padding: 1.25rem;
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
    gap: 0.85rem;

    .head-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 0.75rem;
        border-bottom: 1px solid #F1F5F9;

        h4 {
            margin: 0;
            font-size: 0.88rem;
            font-weight: 800;
            color: #0F172A;
        }

        span {
            font-size: 0.72rem;
            color: #64748B;
        }
    }

    .mailboxes-list {
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
    }

    .box-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.75rem 0.9rem;
        border-radius: 12px;
        border: 1px solid #E2E8F0;
        background: #F8FAFC;
        gap: 0.75rem;

        &.active {
            border-color: #BFDBFE;
            background: #EFF6FF;
        }

        .box-info {
            display: flex;
            align-items: center;
            gap: 0.65rem;

            .box-icon {
                width: 32px;
                height: 32px;
                border-radius: 8px;
                background: #FFFFFF;
                border: 1px solid #E2E8F0;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #2563EB;
                flex-shrink: 0;

                svg { width: 16px; height: 16px; }
            }

            .box-meta {
                display: flex;
                flex-direction: column;

                strong {
                    font-size: 0.82rem;
                    color: #0F172A;
                }

                span {
                    font-size: 0.7rem;
                    color: #64748B;
                }
            }
        }

        .box-badge {
            display: inline-flex;
            align-items: center;
            gap: 0.35rem;
            padding: 0.2rem 0.55rem;
            border-radius: 999px;
            font-size: 0.7rem;
            font-weight: 700;

            &.shared {
                background: #DCFCE7;
                color: #166534;
            }

            &.private {
                background: #F1F5F9;
                color: #475569;
            }
        }
    }

    .audit-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.65rem 0.85rem;
        border-radius: 10px;
        background: #F1F5F9;
        font-size: 0.72rem;
        color: #475569;
        font-weight: 600;

        .log-tag {
            display: flex;
            align-items: center;
            gap: 0.35rem;
            color: #0F172A;
            font-weight: 700;

            svg { width: 13px; height: 13px; color: #2563EB; }
        }
    }
`

/* =========================================================================
   MOCKUP 2: FICHA DO LEAD NO E-MAIL (EMAIL LEAD PANEL)
   ========================================================================= */
const LeadPanelMock = styled.div`
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    background: #FFFFFF;
    min-height: 380px;

    .mail-content {
        padding: 1.15rem;
        border-right: 1px solid #E2E8F0;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;

        .from-header {
            display: flex;
            align-items: center;
            gap: 0.65rem;

            .avatar {
                width: 34px;
                height: 34px;
                border-radius: 50%;
                background: #2563EB;
                color: #FFFFFF;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 0.78rem;
                font-weight: 700;
            }

            .info {
                display: flex;
                flex-direction: column;
                font-size: 0.8rem;
                color: #0F172A;

                small {
                    font-size: 0.7rem;
                    color: #64748B;
                }
            }
        }

        .mail-subject {
            font-size: 0.92rem;
            font-weight: 800;
            color: #0F172A;
            margin-top: 0.2rem;
        }

        .mail-text {
            font-size: 0.78rem;
            color: #475569;
            line-height: 1.55;
            background: #F8FAFC;
            padding: 0.75rem;
            border-radius: 10px;
            border: 1px solid #F1F5F9;
        }
    }

    .lead-sidebar {
        background: #F8FAFC;
        padding: 1.15rem;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;

        .lead-head {
            display: flex;
            align-items: center;
            justify-content: space-between;

            strong {
                font-size: 0.85rem;
                color: #0F172A;
            }

            span.pill {
                padding: 1px 7px;
                border-radius: 999px;
                font-size: 0.68rem;
                font-weight: 700;
                background: #EFF6FF;
                color: #2563EB;
                border: 1px solid #BFDBFE;
            }
        }

        .meta-row {
            display: flex;
            flex-direction: column;
            gap: 0.3rem;
            font-size: 0.74rem;
            color: #64748B;

            b { color: #0F172A; }
        }

        .activities-box {
            display: flex;
            flex-direction: column;
            gap: 0.4rem;
            margin-top: 0.3rem;

            .act-label {
                font-size: 0.68rem;
                font-weight: 800;
                color: #94A3B8;
                text-transform: uppercase;
                letter-spacing: 0.05em;
            }

            .act-item {
                display: flex;
                align-items: center;
                gap: 0.45rem;
                font-size: 0.72rem;
                color: #334155;
                background: #FFFFFF;
                padding: 0.4rem 0.55rem;
                border-radius: 8px;
                border: 1px solid #E2E8F0;

                svg { width: 13px; height: 13px; color: #2563EB; }
            }
        }
    }

    @media (max-width: 640px) {
        grid-template-columns: 1fr;
        .lead-sidebar { border-top: 1px solid #E2E8F0; }
    }
`

/* =========================================================================
   MOCKUP 3: PRODUTIVIDADE & SNOOZE (ADIAR MENSAGEM & ATALHOS)
   ========================================================================= */
const SnoozeMock = styled.div`
    padding: 1.25rem;
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .toolbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 0.75rem;
        border-bottom: 1px solid #F1F5F9;

        .actions {
            display: flex;
            align-items: center;
            gap: 0.4rem;

            button {
                display: flex;
                align-items: center;
                gap: 0.35rem;
                padding: 0.4rem 0.65rem;
                border-radius: 8px;
                border: 1px solid #E2E8F0;
                background: #FFFFFF;
                font-size: 0.74rem;
                font-weight: 700;
                color: #334155;
                cursor: pointer;

                &.active {
                    background: #FEF3C7;
                    border-color: #FDE68A;
                    color: #92400E;
                }

                svg { width: 13px; height: 13px; }
            }
        }

        .shortcuts-hint {
            display: flex;
            align-items: center;
            gap: 0.35rem;
            font-size: 0.72rem;
            color: #64748B;

            kbd {
                background: #F1F5F9;
                border: 1px solid #CBD5E1;
                border-radius: 4px;
                padding: 1px 5px;
                font-family: monospace;
                font-size: 0.7rem;
                font-weight: 700;
                color: #0F172A;
            }
        }
    }

    .snooze-popover {
        background: #FFFFFF;
        border: 1px solid #E2E8F0;
        border-radius: 12px;
        box-shadow: 0 10px 25px rgba(15, 23, 42, 0.08);
        padding: 0.75rem;
        display: flex;
        flex-direction: column;
        gap: 0.35rem;

        .title {
            font-size: 0.72rem;
            font-weight: 800;
            color: #64748B;
            text-transform: uppercase;
            letter-spacing: 0.04em;
            padding: 0.2rem 0.4rem;
        }

        .option {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.5rem 0.65rem;
            border-radius: 8px;
            font-size: 0.78rem;
            font-weight: 600;
            color: #0F172A;
            background: #F8FAFC;
            cursor: pointer;

            &:hover {
                background: #EFF6FF;
                color: #2563EB;
            }

            small {
                color: #94A3B8;
                font-size: 0.7rem;
            }
        }
    }

    .draft-save-indicator {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        font-size: 0.72rem;
        color: #16A34A;
        font-weight: 600;
        padding-top: 0.25rem;

        svg { width: 13px; height: 13px; }
    }
`

/* =========================================================================
   MOCKUP 4: RESPOSTAS AUTOMÁTICAS & ASSISTÊNCIA DA MIA COPILOT
   ========================================================================= */
const AutoReplyMock = styled.div`
    padding: 1.25rem;
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
    gap: 0.85rem;

    .modal-head {
        display: flex;
        align-items: center;
        justify-content: space-between;

        strong {
            font-size: 0.9rem;
            color: #0F172A;
        }

        .toggle-active {
            display: inline-flex;
            align-items: center;
            gap: 0.4rem;
            font-size: 0.74rem;
            font-weight: 700;
            color: #166534;
            background: #DCFCE7;
            padding: 0.25rem 0.65rem;
            border-radius: 999px;

            .dot {
                width: 6px;
                height: 6px;
                border-radius: 50%;
                background: #16A34A;
            }
        }
    }

    .schedule-bar {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.6rem;
        background: #F8FAFC;
        padding: 0.65rem 0.75rem;
        border-radius: 10px;
        border: 1px solid #E2E8F0;
        font-size: 0.74rem;

        .date-col {
            display: flex;
            flex-direction: column;
            gap: 0.2rem;
            span { color: #64748B; font-weight: 500; }
            b { color: #0F172A; font-weight: 700; }
        }
    }

    .ai-bubble {
        display: flex;
        align-items: flex-start;
        gap: 0.6rem;
        background: #FAF5FF;
        border: 1px solid #E9D5FF;
        padding: 0.75rem;
        border-radius: 10px;

        .ai-icon {
            width: 24px;
            height: 24px;
            border-radius: 6px;
            background: #7C3AED;
            color: #FFFFFF;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;

            svg { width: 13px; height: 13px; }
        }

        .ai-text {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;

            strong {
                font-size: 0.76rem;
                color: #6B21A8;
            }

            p {
                margin: 0;
                font-size: 0.74rem;
                line-height: 1.45;
                color: #581C87;
            }
        }
    }

    .preview-msg {
        background: #F8FAFC;
        border: 1px solid #E2E8F0;
        border-radius: 10px;
        padding: 0.75rem;
        font-size: 0.75rem;
        line-height: 1.5;
        color: #334155;

        .msg-subj {
            font-weight: 700;
            color: #0F172A;
            margin-bottom: 0.35rem;
        }
    }
`

/* =========================================================================
   MOCKUP 5: PASTAS, MARCADORES E PROTEÇÃO LGPD
   ========================================================================= */
const OrganizeMock = styled.div`
    padding: 1.25rem;
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
    gap: 0.85rem;

    .tags-cloud {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }

    .tag-badge {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        padding: 0.35rem 0.7rem;
        border-radius: 8px;
        font-size: 0.74rem;
        font-weight: 700;

        &.blue { background: #EFF6FF; color: #1E40AF; border: 1px solid #BFDBFE; }
        &.green { background: #F0FDF4; color: #166534; border: 1px solid #BBF7D0; }
        &.orange { background: #FFF7ED; color: #9A3412; border: 1px solid #FED7AA; }
        &.purple { background: #FAF5FF; color: #6B21A8; border: 1px solid #E9D5FF; }
    }

    .security-banner {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.85rem;
        border-radius: 12px;
        background: #F0FDF4;
        border: 1px solid #BBF7D0;

        .shield-icon {
            width: 34px;
            height: 34px;
            border-radius: 8px;
            background: #16A34A;
            color: #FFFFFF;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;

            svg { width: 18px; height: 18px; }
        }

        .shield-text {
            display: flex;
            flex-direction: column;

            strong {
                font-size: 0.82rem;
                color: #14532D;
            }

            span {
                font-size: 0.72rem;
                color: #166534;
            }
        }
    }

    .folder-tree-card {
        background: #F8FAFC;
        border: 1px solid #E2E8F0;
        border-radius: 10px;
        padding: 0.75rem;
        display: flex;
        flex-direction: column;
        gap: 0.45rem;

        .tree-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 0.75rem;
            color: #334155;
            font-weight: 600;

            .name {
                display: flex;
                align-items: center;
                gap: 0.45rem;
                svg { width: 14px; height: 14px; color: #2563EB; }
            }

            .count {
                color: #94A3B8;
                font-size: 0.7rem;
            }
        }
    }
`

export default function EmailInboxDeepDive() {
    return (
        <Section id="recursos">
            <Container>
                <ActHeader>
                    <span className="eyebrow">Funcionalidades em detalhes</span>
                    <h2>Tudo o que sua escola precisa para profissionalizar a comunicação por e-mail</h2>
                    <p>
                        A comunicação institucional da sua escola conectada ao CRM. Diga adeus aos e-mails perdidos em caixas individuais e às respostas descontextualizadas.
                    </p>
                </ActHeader>

                {/* ATO 1: CAIXAS COMPARTILHADAS & MULTI-MAILBOX */}
                <FeatureRow>
                    <TextContent>
                        <h3>Caixas compartilhadas da escola, sem expor senhas</h3>
                        <p>
                            Gerencie as caixas institucionais da escola (<code>matriculas@</code>, <code>secretaria@</code>, <code>financeiro@</code>) e as caixas individuais da coordenação pela mesma tela. Toda a equipe atende com segurança, sem post-its de senha e com histórico preservado.
                        </p>
                        <ul>
                            <li>
                                <Check />
                                <div>
                                    <strong>Múltiplos atendentes no mesmo endereço:</strong> Vários consultores respondem em tempo real pela caixa de matrículas sem duplicidade.
                                </div>
                            </li>
                            <li>
                                <Check />
                                <div>
                                    <strong>Níveis de visibilidade granulares:</strong> Defina quais caixas são compartilhadas (<code>SHARED</code>) com a equipe e quais são privadas (<code>PRIVATE</code>).
                                </div>
                            </li>
                            <li>
                                <Check />
                                <div>
                                    <strong>Auditoria de acessos para conformidade LGPD:</strong> Registre e visualize quem visualizou, respondeu ou abriu mensagens institucionais.
                                </div>
                            </li>
                        </ul>
                    </TextContent>

                    <MockupCard>
                        <WindowDots title="Gestão de Caixas de E-mail da Escola" />
                        <MailboxesMock>
                            <div className="head-bar">
                                <h4>Caixas Ativas no Colégio Vanguarda</h4>
                                <span>3 caixas conectadas</span>
                            </div>

                            <div className="mailboxes-list">
                                <div className="box-row active">
                                    <div className="box-info">
                                        <div className="box-icon"><Mail /></div>
                                        <div className="box-meta">
                                            <strong>matriculas@colegiovanguarda.edu.br</strong>
                                            <span>4 consultores com acesso</span>
                                        </div>
                                    </div>
                                    <span className="box-badge shared">Compartilhada</span>
                                </div>

                                <div className="box-row">
                                    <div className="box-info">
                                        <div className="box-icon"><Mail /></div>
                                        <div className="box-meta">
                                            <strong>secretaria@colegiovanguarda.edu.br</strong>
                                            <span>Equipe pedagógica e administrativa</span>
                                        </div>
                                    </div>
                                    <span className="box-badge shared">Compartilhada</span>
                                </div>

                                <div className="box-row">
                                    <div className="box-info">
                                        <div className="box-icon"><Lock /></div>
                                        <div className="box-meta">
                                            <strong>diretoria@colegiovanguarda.edu.br</strong>
                                            <span>Acesso restrito à direção</span>
                                        </div>
                                    </div>
                                    <span className="box-badge private">Individual</span>
                                </div>
                            </div>

                            <div className="audit-footer">
                                <div className="log-tag">
                                    <ShieldCheck />
                                    <span>Log de Auditoria LGPD</span>
                                </div>
                                <span>Todos os acessos registrados com IP e horário</span>
                            </div>
                        </MailboxesMock>
                    </MockupCard>
                </FeatureRow>

                <ActDivider />

                {/* ATO 2: FICHA DO LEAD NO E-MAIL */}
                <FeatureRow $reverse>
                    <MockupCard>
                        <WindowDots title="Conversa com Ficha do Lead Integrada" />
                        <LeadPanelMock>
                            <div className="mail-content">
                                <div className="from-header">
                                    <div className="avatar">RS</div>
                                    <div className="info">
                                        <strong>Roberta Silveira</strong>
                                        <small>roberta.silveira@gmail.com</small>
                                    </div>
                                </div>
                                <div className="mail-subject">
                                    Confirmação de matrícula e histórico do 7º ano
                                </div>
                                <div className="mail-text">
                                    &ldquo;Boa tarde! Estive na visita presencial na terça-feira e fiquei encantada com a proposta pedagógica. Segue em anexo a declaração de transferência do Lucas...&rdquo;
                                </div>
                            </div>

                            <div className="lead-sidebar">
                                <div className="lead-head">
                                    <strong>Ficha do Lead</strong>
                                    <span className="pill">No Funil</span>
                                </div>
                                <div className="meta-row">
                                    <div>Aluno: <b>Lucas Silveira (Filho)</b></div>
                                    <div>Etapa: <b>Proposta Enviada</b></div>
                                    <div>Consultor: <b>Carla Mendes</b></div>
                                </div>

                                <div className="activities-box">
                                    <span className="act-label">Últimas Atividades</span>
                                    <div className="act-item">
                                        <CalendarCheck /> Visita realizada em 28/10
                                    </div>
                                    <div className="act-item">
                                        <MessageCircle /> Conversa no WhatsApp ativa
                                    </div>
                                </div>
                            </div>
                        </LeadPanelMock>
                    </MockupCard>

                    <TextContent>
                        <h3>A ficha do lead na tela enquanto você lê o e-mail</h3>
                        <p>
                            Chega de abrir três abas diferentes para saber quem está escrevendo. O Maskot reconhece o remetente automaticamente e traz o histórico educacional completo para o painel lateral da mensagem.
                        </p>
                        <ul>
                            <li>
                                <Check />
                                <div>
                                    <strong>Reconhecimento instantâneo:</strong> Saiba na hora se o remetente já é um lead, um responsável financeiro ou um contato novo.
                                </div>
                            </li>
                            <li>
                                <Check />
                                <div>
                                    <strong>Contexto de matrícula completo:</strong> Veja o curso e ano de interesse do filho, o consultor responsável e a etapa no funil de vendas.
                                </div>
                            </li>
                            <li>
                                <Check />
                                <div>
                                    <strong>Ações com um clique:</strong> Crie um novo lead, vincule a uma oportunidade existente ou abra a ficha completa no CRM.
                                </div>
                            </li>
                        </ul>
                    </TextContent>
                </FeatureRow>

                <ActDivider />

                {/* ATO 3: PRODUTIVIDADE & SNOOZE */}
                <FeatureRow>
                    <TextContent>
                        <h3>Produtividade de alto nível: Threads, Snooze e Atalhos</h3>
                        <p>
                            Uma caixa de entrada veloz inspirada nos melhores clientes de e-mail modernos (como Superhuman e Gmail), desenhada para zerar pendências sem atrito (Inbox Zero).
                        </p>
                        <ul>
                            <li>
                                <Check />
                                <div>
                                    <strong>Adiar (Snooze) com retorno programado:</strong> Remova mensagens da caixa de entrada e faça-as voltar como novas no horário ideal de follow-up.
                                </div>
                            </li>
                            <li>
                                <Check />
                                <div>
                                    <strong>Atalhos de teclado produtivos:</strong> Use <code>E</code> para arquivar, <code>R</code> para responder, <code>B</code> para adiar e <code>/</code> para buscar instantaneamente.
                                </div>
                            </li>
                            <li>
                                <Check />
                                <div>
                                    <strong>Rascunhos com autosave na nuvem:</strong> Comece a redigir uma resposta longa e termine em outro momento sem risco de perder o texto.
                                </div>
                            </li>
                        </ul>
                    </TextContent>

                    <MockupCard>
                        <WindowDots title="Atalhos Produtivos & Adiar (Snooze)" />
                        <SnoozeMock>
                            <div className="toolbar">
                                <div className="actions">
                                    <button className="active">
                                        <Clock /> Adiado até 2ª-feira 08:00
                                    </button>
                                    <button>
                                        <Archive /> Arquivar
                                    </button>
                                </div>
                                <div className="shortcuts-hint">
                                    <span>Atalhos:</span>
                                    <kbd>E</kbd> arquivar <kbd>B</kbd> adiar <kbd>R</kbd> responder
                                </div>
                            </div>

                            <div className="snooze-popover">
                                <span className="title">Adiar mensagem até quando?</span>
                                <div className="option">
                                    <span>Hoje mais tarde</span>
                                    <small>18:00</small>
                                </div>
                                <div className="option">
                                    <span>Amanhã de manhã</span>
                                    <small>08:00</small>
                                </div>
                                <div className="option">
                                    <span>Próxima segunda-feira</span>
                                    <small>08:00</small>
                                </div>
                                <div className="option">
                                    <span>Escolher data e horário personalizados</span>
                                    <small>Calendário</small>
                                </div>
                            </div>

                            <div className="draft-save-indicator">
                                <CheckCircle2 /> Rascunho salvo automaticamente na nuvem há 10s
                            </div>
                        </SnoozeMock>
                    </MockupCard>
                </FeatureRow>

                <ActDivider />

                {/* ATO 4: RESPOSTAS AUTOMÁTICAS & MIA COPILOT */}
                <FeatureRow $reverse>
                    <MockupCard>
                        <WindowDots title="Configuração de Resposta Automática & IA" />
                        <AutoReplyMock>
                            <div className="modal-head">
                                <strong>Resposta de Ausência / Recesso Escolar</strong>
                                <span className="toggle-active">
                                    <div className="dot"></div> Ativado
                                </span>
                            </div>

                            <div className="schedule-bar">
                                <div className="date-col">
                                    <span>Início do período</span>
                                    <b>20/12/2026 às 18:00</b>
                                </div>
                                <div className="date-col">
                                    <span>Término do recesso</span>
                                    <b>05/01/2027 às 08:00</b>
                                </div>
                            </div>

                            <div className="ai-bubble">
                                <div className="ai-icon"><Sparkles /></div>
                                <div className="ai-text">
                                    <strong>Mia Copilot (IA Educacional)</strong>
                                    <p>
                                        Redigiu mensagem com tom institucional acolhedor, links de matrícula online e horário de atendimento de plantão.
                                    </p>
                                </div>
                            </div>

                            <div className="preview-msg">
                                <div className="msg-subj">
                                    Recebemos sua mensagem • Plantão de Matrículas Colégio Vanguarda
                                </div>
                                Olá! Agradecemos o contato. Estamos em período de recesso de fim de ano, mas nossa equipe de matrículas retornará com prioridade em até 24h úteis...
                            </div>
                        </AutoReplyMock>
                    </MockupCard>

                    <TextContent>
                        <h3>Respostas automáticas para férias, recessos e plantões</h3>
                        <p>
                            Não deixe nenhuma família sem retorno durante fins de semana, férias escolares ou recessos de fim de ano. O Maskot envia respostas automáticas personalizadas e orienta os pais sobre os próximos passos.
                        </p>
                        <ul>
                            <li>
                                <Check />
                                <div>
                                    <strong>Programação por data e hora:</strong> Defina o período exato em que a resposta de ausência deve ser disparada automaticamente.
                                </div>
                            </li>
                            <li>
                                <Check />
                                <div>
                                    <strong>Respostas personalizadas por caixa:</strong> Mensagem acolhedora de matrículas para novos alunos e orientações específicas para a secretaria.
                                </div>
                            </li>
                            <li>
                                <Check />
                                <div>
                                    <strong>Redação assistida com a Mia Copilot:</strong> Conte com a inteligência artificial para ajustar a clareza, tom e cordialidade das respostas da escola.
                                </div>
                            </li>
                        </ul>
                    </TextContent>
                </FeatureRow>

                <ActDivider />

                {/* ATO 5: PASTAS, MARCADORES & CONFORMIDADE LGPD */}
                <FeatureRow>
                    <TextContent>
                        <h3>Organização colaborativa e proteção rigorosa de dados</h3>
                        <p>
                            Chega de caixas de entrada desordenadas. Organize fluxos de atendimento com marcadores coloridos e pastas temáticas compartilhadas por toda a equipe da escola.
                        </p>
                        <ul>
                            <li>
                                <Check />
                                <div>
                                    <strong>Marcadores coloridos compartilhados:</strong> Sinalize prioridades (<code>#Urgente</code>, <code>#Matrículas 2027</code>, <code>#Documentação Pendente</code>) de forma visível para todos.
                                </div>
                            </li>
                            <li>
                                <Check />
                                <div>
                                    <strong>Filtro antiphishing e quarentena de spam:</strong> Proteja a equipe escolar contra mensagens suspeitas com verificação de autenticidade (SPF/DKIM).
                                </div>
                            </li>
                            <li>
                                <Check />
                                <div>
                                    <strong>Importação e retenção de dados:</strong> Importe mensagens antigas de outros provedores e mantenha políticas de retenção adequadas à LGPD.
                                </div>
                            </li>
                        </ul>
                    </TextContent>

                    <MockupCard>
                        <WindowDots title="Organização e Segurança Escolar" />
                        <OrganizeMock>
                            <div className="tags-cloud">
                                <span className="tag-badge blue"># Matrículas 2027</span>
                                <span className="tag-badge orange"># Urgente Secretaria</span>
                                <span className="tag-badge green"># Documento Validado</span>
                                <span className="tag-badge purple"># Pedido de Bolsa</span>
                            </div>

                            <div className="folder-tree-card">
                                <div className="tree-row">
                                    <span className="name"><Layers /> Matrículas Ensino Médio</span>
                                    <span className="count">14 conversas</span>
                                </div>
                                <div className="tree-row">
                                    <span className="name"><Layers /> Transferências 2027</span>
                                    <span className="count">8 conversas</span>
                                </div>
                                <div className="tree-row">
                                    <span className="name"><Layers /> Acordos Financeiros</span>
                                    <span className="count">5 conversas</span>
                                </div>
                            </div>

                            <div className="security-banner">
                                <div className="shield-icon"><ShieldCheck /></div>
                                <div className="shield-text">
                                    <strong>Proteção Antiphishing & LGPD Ativa</strong>
                                    <span>Remetentes verificados com SPF e DKIM válidos</span>
                                </div>
                            </div>
                        </OrganizeMock>
                    </MockupCard>
                </FeatureRow>
            </Container>
        </Section>
    )
}

