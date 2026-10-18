'use client'

import styled, {keyframes} from 'styled-components'
import {
    Kanban, List, Filter, UserCheck,
    TrendingUp, ArrowRight, CheckCircle, Users,
    Calendar, Bell, CheckSquare, Clock,
    MessageCircle, Phone, FileText, Flame
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
    padding: 4rem 0;
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

    @media (max-width: 968px) {
        grid-template-columns: 1fr;
        gap: 3rem;
        margin-bottom: 6rem;
        display: flex;
        flex-direction: column-reverse;

        ${props => !props.$reverse && `
            flex-direction: column;
        `}
    }
`

const TextContent = styled.div`
    h3 {
        font-size: 2.25rem;
        font-weight: 800;
        margin-bottom: 1.5rem;
        line-height: 1.2;
        color: ${props => props.theme.colors.textDark};
    }

    p {
        font-size: 1.125rem;
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
        align-items: start;
        gap: 1rem;
        font-size: 1.05rem;
        font-weight: 500;
        color: ${props => props.theme.colors.textDark};

        svg {
            color: ${props => props.theme.colors.primary};
            flex-shrink: 0;
            margin-top: 2px;
        }
    }
`

const MockupCard = styled.div`
    background: #FFFFFF;
    border-radius: 24px;
    box-shadow: 0 30px 60px -10px rgba(0, 0, 0, 0.08);
    border: 1px solid #E2E8F0;
    overflow: hidden;
    position: relative;
    animation: ${float} 8s ease-in-out infinite;
`

const MockupHeader = styled.div`
    height: 48px;
    background: #F8FAFC;
    border-bottom: 1px solid #E2E8F0;
    display: flex;
    align-items: center;
    padding: 0 1.25rem;
    gap: 0.5rem;

    .dots {
        display: flex;
        gap: 8px;

        div {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: #CBD5E1;
        }
    }
`

// --- MOCKUP 1: KANBAN BOARD ---
const KanbanMock = styled.div`
    padding: 24px;
    display: flex;
    gap: 16px;
    height: 380px;
    background: #FFFFFF;
    overflow-x: hidden;

    @media (max-width: 640px) {
        gap: 8px;
        padding: 12px;
        height: auto;
        min-height: 240px;
        overflow-x: hidden;
    }

    .col {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 12px;
        min-width: 140px;

        @media (max-width: 640px) {
            min-width: 0;
            flex: 1;
            gap: 8px;

            .header { font-size: 9px; }

            .card {
                padding: 8px;

                h4 {
                    font-size: 11px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                p { display: none; }

                .tag {
                    font-size: 8px;
                    padding: 2px 6px;
                    margin-top: 4px;
                }
            }
        }

        .header {
            font-size: 13px;
            font-weight: 700;
            text-transform: uppercase;
            color: #64748B;
            margin-bottom: 8px;
            display: flex;
            justify-content: space-between;
        }

        .card {
            background: #FFFFFF;
            padding: 16px;
            border-radius: 12px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
            border: 1px solid #E2E8F0;
            border-left: 4px solid #E2E8F0; /* Default border */

            h4 {
                font-size: 14px;
                margin: 0 0 6px 0;
                color: #0F172A;
                font-weight: 600;
            }

            p {
                font-size: 12px;
                color: #64748B;
                margin: 0;
                display: flex;
                align-items: center;
                gap: 4px;
            }

            .tag {
                display: inline-block;
                font-size: 10px;
                font-weight: 600;
                padding: 4px 8px;
                background: #F8FAFC;
                color: #475569;
                border: 1px solid #E2E8F0;
                border-radius: 6px;
                margin-top: 10px;
            }
        }
    }
`

// --- MOCKUP 2: CALENDAR & AGENDA ---
const CalendarMock = styled.div`
    padding: 24px;
    background: #FFFFFF;

    .view-switch {
        display: flex;
        gap: 12px;
        margin-bottom: 24px;

        .btn {
            padding: 8px 16px;
            border-radius: 8px;
            font-size: 13px;
            font-weight: 600;
            color: #64748B;
            background: #F8FAFC;
            border: 1px solid #E2E8F0;
        }

        .btn.active {
            background: #FFFFFF;
            color: #0F172A;
            border-color: #2563EB;
            box-shadow: 0 2px 4px rgba(0,0,0,0.02);
        }
    }

    .layout {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 24px;

        @media (max-width: 640px) {
            grid-template-columns: 1fr;
        }
    }

    .cal-grid {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 8px;

        .day-header {
            font-size: 11px;
            font-weight: 600;
            color: #64748B;
            text-align: center;
            margin-bottom: 8px;
        }

        .day {
            aspect-ratio: 1;
            border: 1px solid #E2E8F0;
            border-radius: 8px;
            font-size: 11px;
            font-weight: 500;
            padding: 6px;
            color: #334155;
            position: relative;
            background: #F8FAFC;

            &.has-event:after {
                content: '';
                position: absolute;
                bottom: 6px;
                left: 50%;
                transform: translateX(-50%);
                width: 4px;
                height: 4px;
                background: #2563EB;
                border-radius: 50%;
            }

            &.today {
                background: #2563EB;
                color: #FFFFFF;
                font-weight: 700;
                border: none;

                &.has-event:after {
                    background: #FFFFFF;
                }
            }
        }
    }

    .task-list {
        display: flex;
        flex-direction: column;
        gap: 12px;

        .task {
            padding: 12px;
            border: 1px solid #E2E8F0;
            border-radius: 12px;
            background: #F8FAFC;
            border-left: 4px solid #E2E8F0;

            h4 {
                margin: 0;
                font-size: 13px;
                color: #0F172A;
                font-weight: 600;
            }

            span {
                font-size: 11px;
                color: #64748B;
                display: flex;
                align-items: center;
                gap: 6px;
                margin-top: 6px;
            }
        }
    }
`

// --- MOCKUP 3: UNIFIED TIMELINE ---
const TimelineMock = styled.div`
    padding: 32px;
    background: #FFFFFF;
    max-height: 400px;
    overflow: hidden;

    @media (max-width: 640px) {
        padding: 24px;
    }

    .event {
        display: flex;
        gap: 20px;
        margin-bottom: 24px;
        position: relative;

        &:last-child {
            margin-bottom: 0;
        }

        /* Linha conectora */

        &:not(:last-child):before {
            content: '';
            position: absolute;
            top: 40px;
            left: 20px;
            bottom: -24px;
            width: 2px;
            background: #E2E8F0;
        }

        .icon-box {
            width: 40px;
            height: 40px;
            border-radius: 10px;
            background: #F8FAFC;
            border: 1px solid #E2E8F0;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            z-index: 1;
            color: #475569;
        }

        .content {
            flex: 1;
            background: #F8FAFC;
            padding: 16px;
            border-radius: 12px;
            border: 1px solid #E2E8F0;

            .header {
                display: flex;
                justify-content: space-between;
                margin-bottom: 8px;
                flex-wrap: wrap;
                gap: 4px;
            }

            h4 {
                margin: 0;
                font-size: 14px;
                color: #0F172A;
                font-weight: 600;
            }

            .date {
                font-size: 11px;
                color: #64748B;
            }

            p {
                margin: 0;
                font-size: 13px;
                color: #475569;
                line-height: 1.5;
            }
        }

        &.whatsapp .icon-box {
            background: #FFFFFF;
            color: #2563EB;
        }

        &.call .icon-box {
            background: #FFFFFF;
            color: #2563EB;
        }

        &.visit .icon-box {
            background: #FFFFFF;
            color: #2563EB;
        }
    }
`

// --- MOCKUP 4: LIST VIEW ---
const ListMock = styled.div`
    padding: 0;
    background: #FFFFFF;

    .toolbar {
        padding: 20px;
        border-bottom: 1px solid #E2E8F0;
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
        background: #F8FAFC;

        .btn {
            padding: 8px 16px;
            border: 1px solid #E2E8F0;
            background: #FFFFFF;
            border-radius: 8px;
            font-size: 13px;
            font-weight: 600;
            color: #475569;
            display: flex;
            gap: 8px;
            align-items: center;

            @media (max-width: 640px) {
                font-size: 12px;
                padding: 6px 10px;
            }
        }

        .btn.primary {
            background: #2563EB;
            color: #FFFFFF;
            border-color: #2563EB;
        }
    }

    table {
        width: 100%;
        border-collapse: collapse;
    }

    th {
        text-align: left;
        padding: 16px 20px;
        font-size: 12px;
        font-weight: 600;
        color: #64748B;
        text-transform: uppercase;
        border-bottom: 1px solid #E2E8F0;

        @media (max-width: 640px) {
            padding: 12px;
        }

        &:nth-child(3), &:nth-child(4) {
            @media (max-width: 640px) { display: none; }
        }
    }

    td {
        padding: 16px 20px;
        font-size: 14px;
        color: #0F172A;
        border-bottom: 1px solid #E2E8F0;
        background: #FFFFFF;

        @media (max-width: 640px) {
            padding: 12px;
            font-size: 13px;
        }

        &:nth-child(3), &:nth-child(4) {
            @media (max-width: 640px) { display: none; }
        }
    }

    .status {
        padding: 4px 10px;
        border-radius: 6px;
        font-size: 11px;
        font-weight: 600;
        background: #F8FAFC;
        color: #475569;
        border: 1px solid #E2E8F0;
    }

    .status.new {
        color: #2563EB;
    }

    .status.visit {
        color: #F59E0B;
    }

    .status.won {
        color: #10B981;
    }
`

// --- POWER GRID ---
const PowerGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 4rem;
    @media (max-width: 968px) {
        grid-template-columns: 1fr;
    }
`

const PowerCard = styled.div`
    background: #FFFFFF;
    padding: 2.5rem;
    border-radius: 24px;
    border: 1px solid #E2E8F0;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.01);

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.05);
        border-color: #CBD5E1;
    }

    .icon {
        width: 48px;
        height: 48px;
        border-radius: 12px;
        background: #F8FAFC;
        border: 1px solid #E2E8F0;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #2563EB;
        margin-bottom: 1.5rem;
    }

    h4 {
        font-size: 1.25rem;
        font-weight: 700;
        margin-bottom: 0.75rem;
        color: #0F172A;
        letter-spacing: -0.02em;
    }

    p {
        font-size: 1rem;
        color: #475569;
        line-height: 1.6;
        margin: 0;
    }
`

export default function CrmDeepDive() {
    return (
        <Section>
            <Container>

                {/* 1. KANBAN BOARD */}
                <FeatureRow>
                    <TextContent>
                        <h3>Funil de Matrículas Visual<br/>(Kanban)</h3>
                        <p>
                            Tenha uma visão panorâmica da sua escola. Mova os cartões de Novo Interessado
                            para Visita Agendada ou Matriculado com um simples arrastar e soltar.
                        </p>
                        <ul>
                            <li><Kanban size={20}/> <strong>Gestão Visual:</strong> Identifique gargalos no processo na
                                hora.
                            </li>
                            <li><ArrowRight size={20}/> <strong>Drag & Drop:</strong> Atualize o status do aluno em
                                segundos.
                            </li>
                            <li><TrendingUp size={20}/> <strong>Métricas no Topo:</strong> Veja o valor total em
                                negociação em tempo real.
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
                        <KanbanMock>
                            <div className="col">
                                <div className="header">Novos (12)</div>
                                <div className="card" style={{borderLeftColor: '#2563EB'}}>
                                    <h4>Mãe do Pedro</h4>
                                    <p>Fundamental 1 • Manhã</p>
                                    <span className="tag">WhatsApp</span>
                                </div>
                                <div className="card" style={{borderLeftColor: '#2563EB'}}>
                                    <h4>Pai da Júlia</h4>
                                    <p>Infantil • Tarde</p>
                                    <span className="tag">Site</span>
                                </div>
                            </div>
                            <div className="col">
                                <div className="header">Visita (5)</div>
                                <div className="card" style={{borderLeftColor: '#F59E0B'}}>
                                    <h4>Lucas Silva</h4>
                                    <p>Visita: Amanhã 14h</p>
                                    <span className="tag">Indicação</span>
                                </div>
                            </div>
                            <div className="col">
                                <div className="header">Matriculado (8)</div>
                                <div className="card" style={{borderLeftColor: '#10B981'}}>
                                    <h4>Ana Clara</h4>
                                    <p>Contrato Assinado</p>
                                    <span className="tag">Bolsa 10%</span>
                                </div>
                            </div>
                        </KanbanMock>
                    </MockupCard>
                </FeatureRow>

                {/* 2. AGENDA & FOLLOW-UP (NOVO) */}
                <FeatureRow $reverse>
                    <MockupCard>
                        <MockupHeader>
                            <div className="dots">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </MockupHeader>
                        <CalendarMock>
                            <div className="view-switch">
                                <div className="btn active">Calendário</div>
                                <div className="btn">Lista</div>
                                <div className="btn">Kanban</div>
                            </div>
                            <div className="layout">
                                <div className="cal-grid">
                                    <div className="day-header">D</div>
                                    <div className="day-header">S</div>
                                    <div className="day-header">T</div>
                                    <div className="day-header">Q</div>
                                    <div className="day-header">Q</div>
                                    <div className="day-header">S</div>
                                    <div className="day-header">S</div>
                                    <div className="day">29</div>
                                    <div className="day has-event">30</div>
                                    <div className="day">1</div>
                                    <div className="day has-event">2</div>
                                    <div className="day">3</div>
                                    <div className="day">4</div>
                                    <div className="day">5</div>
                                    <div className="day">6</div>
                                    <div className="day has-event">7</div>
                                    <div className="day today">8</div>
                                    <div className="day has-event">9</div>
                                    <div className="day">10</div>
                                    <div className="day has-event">11</div>
                                    <div className="day">12</div>
                                </div>
                                <div className="task-list">
                                    <div className="task" style={{borderLeftColor: '#F59E0B'}}>
                                        <h4>Ligar: Mãe do Pedro</h4>
                                        <span><Clock size={10}/> 10:00 • Follow-up</span>
                                    </div>
                                    <div className="task" style={{borderLeftColor: '#2563EB'}}>
                                        <h4>Visita: Família Silva</h4>
                                        <span><Users size={10}/> 14:30 • Apresentação</span>
                                    </div>
                                    <div className="task" style={{borderLeftColor: '#10B981'}}>
                                        <h4>WhatsApp: Enviar Contrato</h4>
                                        <span><MessageCircle size={10}/> 16:00 • Fechamento</span>
                                    </div>
                                </div>
                            </div>
                        </CalendarMock>
                    </MockupCard>

                    <TextContent>
                        <h3>Sua Agenda Organizada<br/>Automaticamente</h3>
                        <p>
                            Para mover um lead no funil, você precisa de ação. O Maskot centraliza todas
                            as suas tarefas: visitas, ligações de retorno e reuniões.
                        </p>
                        <ul>
                            <li><Calendar size={20}/> <strong>Visão de Calendário:</strong> Evite conflitos de horário
                                em visitas.
                            </li>
                            <li><Bell size={20}/> <strong>Lembretes Inteligentes:</strong> O sistema avisa o que você
                                precisa fazer hoje.
                            </li>
                            <li><CheckSquare size={20}/> <strong>Checklist de Follow-up:</strong> Marque como concluído
                                e avance o lead.
                            </li>
                        </ul>
                    </TextContent>
                </FeatureRow>

                {/* 3. UNIFIED TIMELINE (NOVO) */}
                <FeatureRow>
                    <TextContent>
                        <h3>A Memória Completa<br/>de Cada Aluno</h3>
                        <p>
                            Nunca mais pergunte o que foi falado com esse pai?. O Maskot cria uma
                            Timeline Unificada que registra automaticamente cada ponto de contato.
                        </p>
                        <ul>
                            <li><MessageCircle size={20}/> <strong>WhatsApp & Calls:</strong> Mensagens e registros de
                                ligação em ordem cronológica.
                            </li>
                            <li><Users size={20}/> <strong>Visitas:</strong> Histórico de agendamentos, remarcações e
                                comparecimentos.
                            </li>
                            <li><FileText size={20}/> <strong>Notas da Equipe:</strong> Comentários internos para passar
                                o bastão sem perder contexto.
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
                        <TimelineMock>
                            <div className="event whatsapp">
                                <div className="icon-box"><MessageCircle size={16}/></div>
                                <div className="content">
                                    <div className="header">
                                        <h4>Mensagem Recebida</h4>
                                        <span className="date">Hoje 09:30</span>
                                    </div>
                                    <p>Gostaria de agendar uma visita para conhecer o berçário.</p>
                                </div>
                            </div>
                            <div className="event call">
                                <div className="icon-box"><Phone size={16}/></div>
                                <div className="content">
                                    <div className="header">
                                        <h4>Ligação Realizada</h4>
                                        <span className="date">Ontem 14:15</span>
                                    </div>
                                    <p>Conversei com a mãe. Ela tem interesse no período integral. Ficou de confirmar
                                        horário.</p>
                                </div>
                            </div>
                            <div className="event visit">
                                <div className="icon-box"><Users size={16}/></div>
                                <div className="content">
                                    <div className="header">
                                        <h4>Lead Criado</h4>
                                        <span className="date">12/05 10:00</span>
                                    </div>
                                    <p>Origem: Formulário do Site (Google Ads)</p>
                                </div>
                            </div>
                        </TimelineMock>
                    </MockupCard>
                </FeatureRow>

                {/* 4. LIST VIEW & BULK ACTIONS */}
                <FeatureRow $reverse>
                    <MockupCard>
                        <MockupHeader>
                            <div className="dots">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </MockupHeader>
                        <ListMock>
                            <div className="toolbar">
                                <div className="btn primary"><Filter size={14}/> Filtrar</div>
                                <div className="btn"><ArrowRight size={14}/> Mover em Massa</div>
                                <div className="btn"><UserCheck size={14}/> Atribuir</div>
                            </div>
                            <table>
                                <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Status</th>
                                    <th>Responsável</th>
                                    <th>Origem</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td><strong>Pedro Santos</strong></td>
                                    <td><span className="status new">Novo</span></td>
                                    <td>Maria (Sec)</td>
                                    <td>Instagram</td>
                                </tr>
                                <tr>
                                    <td><strong>Mariana Lima</strong></td>
                                    <td><span className="status visit">Visita</span></td>
                                    <td>João (Com)</td>
                                    <td>Google</td>
                                </tr>
                                <tr>
                                    <td><strong>Carlos Edu</strong></td>
                                    <td><span className="status won">Matriculado</span></td>
                                    <td>Maria (Sec)</td>
                                    <td>Indicação</td>
                                </tr>
                                </tbody>
                            </table>
                        </ListMock>
                    </MockupCard>

                    <TextContent>
                        <h3>Ações em Massa e<br/>Filtros Poderosos</h3>
                        <p>
                            Precisa mover 50 leads frios para Perdidos? Ou atribuir todos os novos
                            leads do Google para um consultor específico?
                        </p>
                        <ul>
                            <li><List size={20}/> <strong>Modo Lista:</strong> Ideal para gerenciar grandes volumes de
                                dados.
                            </li>
                            <li><CheckCircle size={20}/> <strong>Ações em Massa:</strong> Edite, mova ou exclua
                                múltiplos alunos de uma vez.
                            </li>
                            <li><Filter size={20}/> <strong>Filtros Avançados:</strong> Encontre leads por Data, Origem,
                                Curso ou Status.
                            </li>
                        </ul>
                    </TextContent>
                </FeatureRow>

                {/* 5. POWER FEATURES */}
                <div style={{textAlign: 'center', marginBottom: '4rem'}}>
                    <h3 style={{fontSize: '2rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em'}}>Gestão Completa do Ciclo de
                        Matrícula</h3>
                    <p style={{color: '#475569', fontSize: '1.125rem'}}>Ferramentas que garantem que nenhum aluno seja esquecido.</p>
                </div>

                <PowerGrid>
                    <PowerCard>
                        <div className="icon"><Users size={24}/></div>
                        <h4>Atribuição Automática</h4>
                        <p>Defina regras para que leads do turno da manhã vão para o consultor A e da tarde para o
                            consultor B.</p>
                    </PowerCard>

                    <PowerCard>
                        <div className="icon"><TrendingUp size={24}/></div>
                        <h4>Previsão de Receita</h4>
                        <p>Saiba o valor potencial de matrículas que está na mesa em cada etapa do funil.</p>
                    </PowerCard>

                    <PowerCard>
                        <div className="icon"><UserCheck size={24}/></div>
                        <h4>Resolução Estruturada</h4>
                        <p>Ao dar Ganho, o sistema já pergunta turma e valor. Ao dar Perda, exige o motivo (Preço,
                            Distância, etc).</p>
                    </PowerCard>
                </PowerGrid>

                {/* --- EXEMPLOS DE USO (Use Cases) --- */}
                <div style={{textAlign: 'center', marginBottom: '3rem', marginTop: '6rem'}}>
                    <h3 style={{fontSize: '1.75rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em'}}>O Dia a Dia do Comercial</h3>
                </div>

                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
                    {/* CASE 1 */}
                    <div style={{
                        background: '#FFFFFF',
                        padding: '2rem',
                        borderRadius: '24px',
                        border: '1px solid #E2E8F0'
                    }}>
                        <h4 style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            fontSize: '1.25rem',
                            fontWeight: 700,
                            marginBottom: '1rem',
                            color: '#0F172A'
                        }}>
                            <span style={{
                                background: '#F8FAFC',
                                color: '#2563EB',
                                padding: '8px',
                                borderRadius: '10px',
                                border: '1px solid #E2E8F0',
                                display: 'flex'
                            }}><Users size={18}/></span>
                            Negociação de Irmãos
                        </h4>
                        <p style={{color: '#475569', fontSize: '1rem', lineHeight: 1.6, margin: 0}}>
                            Uma mãe busca vaga para dois filhos de turmas diferentes. Você atende a família no mesmo ticket de WhatsApp, matricula um e perde o outro, e o sistema já calcula faturas e comissões do consultor automaticamente.
                        </p>
                    </div>

                    {/* CASE 2 */}
                    <div style={{
                        background: '#FFFFFF',
                        padding: '2rem',
                        borderRadius: '24px',
                        border: '1px solid #E2E8F0'
                    }}>
                        <h4 style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            fontSize: '1.25rem',
                            fontWeight: 700,
                            marginBottom: '1rem',
                            color: '#0F172A'
                        }}>
                            <span style={{
                                background: '#F8FAFC',
                                color: '#F97316',
                                padding: '8px',
                                borderRadius: '10px',
                                border: '1px solid #E2E8F0',
                                display: 'flex'
                            }}><Flame size={18}/></span>
                            O &quot;Piloto&quot; Matinal
                        </h4>
                        <p style={{color: '#475569', fontSize: '1rem', lineHeight: 1.6, margin: 0}}>
                            O vendedor chega de manhã, abre a Dashboard e foca direto nos &quot;Leads Quentes&quot; piscando no alerta. Ele liga apenas para quem o sistema identificou como SLA estourado ou com alto engajamento, multiplicando conversões.
                        </p>
                    </div>
                </div>

            </Container>
        </Section>
    )
}