'use client'

import styled, {keyframes} from 'styled-components'
import {
    Kanban, List, Filter, UserCheck,
    TrendingUp, ArrowRight, CheckCircle, Users,
    Calendar, Bell, CheckSquare, Clock,
    MessageCircle, Phone, FileText
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
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 20px 60px -10px rgba(0, 0, 0, 0.15);
    border: 1px solid #e0e0e0;
    overflow: hidden;
    position: relative;
    animation: ${float} 8s ease-in-out infinite;
`

const MockupHeader = styled.div`
    height: 40px;
    background: #f8f9fa;
    border-bottom: 1px solid #eee;
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

// --- MOCKUP 1: KANBAN BOARD ---
const KanbanMock = styled.div`
    padding: 20px;
    display: flex;
    gap: 15px;
    height: 380px;
    background: #f4f5f7;
    overflow-x: hidden;

    .col {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 10px;
        min-width: 140px;

        .header {
            font-size: 12px;
            font-weight: bold;
            text-transform: uppercase;
            color: #5e6c84;
            margin-bottom: 5px;
            display: flex;
            justify-content: space-between;
        }

        .card {
            background: #fff;
            padding: 12px;
            border-radius: 6px;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
            border-left: 4px solid transparent;

            h4 {
                font-size: 13px;
                margin: 0 0 5px 0;
                color: #333;
            }

            p {
                font-size: 11px;
                color: #666;
                margin: 0;
                display: flex;
                align-items: center;
                gap: 4px;
            }

            .tag {
                display: inline-block;
                font-size: 9px;
                padding: 2px 6px;
                background: #e9f5ff;
                color: #007bff;
                border-radius: 4px;
                margin-top: 8px;
            }
        }
    }
`

// --- MOCKUP 2: CALENDAR & AGENDA ---
const CalendarMock = styled.div`
    padding: 20px;
    background: #fff;

    .view-switch {
        display: flex;
        gap: 10px;
        margin-bottom: 20px;

        .btn {
            padding: 6px 12px;
            border-radius: 6px;
            font-size: 12px;
            font-weight: bold;
            color: #666;
            background: #f0f2f5;
        }

        .btn.active {
            background: #fff3cd;
            color: #d97706;
        }
    }

    .layout {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 20px;
    }

    .cal-grid {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 5px;

        .day-header {
            font-size: 10px;
            color: #999;
            text-align: center;
            margin-bottom: 5px;
        }

        .day {
            aspect-ratio: 1;
            border: 1px solid #eee;
            border-radius: 6px;
            font-size: 10px;
            padding: 4px;
            color: #333;
            position: relative;

            &.has-event:after {
                content: '';
                position: absolute;
                bottom: 4px;
                left: 50%;
                transform: translateX(-50%);
                width: 4px;
                height: 4px;
                background: #f59e0b;
                border-radius: 50%;
            }

            &.today {
                background: #f59e0b;
                color: white;
                font-weight: bold;
                border: none;

                &.has-event:after {
                    background: white;
                }
            }
        }
    }

    .task-list {
        display: flex;
        flex-direction: column;
        gap: 10px;

        .task {
            padding: 10px;
            border: 1px solid #eee;
            border-radius: 8px;
            border-left: 3px solid #f59e0b;

            h4 {
                margin: 0;
                font-size: 12px;
                color: #333;
            }

            span {
                font-size: 10px;
                color: #888;
                display: flex;
                align-items: center;
                gap: 4px;
                margin-top: 4px;
            }
        }
    }
`

// --- MOCKUP 3: UNIFIED TIMELINE ---
const TimelineMock = styled.div`
    padding: 25px;
    background: #fff;
    max-height: 400px;
    overflow: hidden;

    .event {
        display: flex;
        gap: 15px;
        margin-bottom: 20px;
        position: relative;

        &:last-child {
            margin-bottom: 0;
        }

        /* Linha conectora */

        &:not(:last-child):before {
            content: '';
            position: absolute;
            top: 35px;
            left: 16px;
            bottom: -25px;
            width: 2px;
            background: #f0f2f5;
        }

        .icon-box {
            width: 34px;
            height: 34px;
            border-radius: 50%;
            background: #f0f2f5;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            z-index: 1;
            color: #666;
        }

        .content {
            flex: 1;
            background: #f8f9fa;
            padding: 12px;
            border-radius: 8px;
            border: 1px solid #eee;

            .header {
                display: flex;
                justify-content: space-between;
                margin-bottom: 5px;
            }

            h4 {
                margin: 0;
                font-size: 13px;
                color: #333;
            }

            .date {
                font-size: 10px;
                color: #999;
            }

            p {
                margin: 0;
                font-size: 12px;
                color: #666;
                line-height: 1.4;
            }
        }

        &.whatsapp .icon-box {
            background: #e6fffa;
            color: #00a884;
        }

        &.call .icon-box {
            background: #e9f5ff;
            color: #007bff;
        }

        &.visit .icon-box {
            background: #fff3cd;
            color: #f59e0b;
        }
    }
`

// --- MOCKUP 4: LIST VIEW ---
const ListMock = styled.div`
    padding: 0;
    background: white;

    .toolbar {
        padding: 15px;
        border-bottom: 1px solid #eee;
        display: flex;
        gap: 10px;

        .btn {
            padding: 6px 12px;
            border: 1px solid #ddd;
            border-radius: 6px;
            font-size: 12px;
            color: #555;
            display: flex;
            gap: 6px;
            align-items: center;
        }

        .btn.primary {
            background: ${props => props.theme.colors.primary};
            color: white;
            border-color: ${props => props.theme.colors.primary};
        }
    }

    table {
        width: 100%;
        border-collapse: collapse;
    }

    th {
        text-align: left;
        padding: 12px 15px;
        font-size: 11px;
        color: #999;
        text-transform: uppercase;
        border-bottom: 1px solid #eee;
    }

    td {
        padding: 12px 15px;
        font-size: 13px;
        color: #333;
        border-bottom: 1px solid #f5f5f5;
    }

    .status {
        padding: 4px 8px;
        border-radius: 12px;
        font-size: 10px;
        font-weight: bold;
    }

    .status.new {
        background: #e3f2fd;
        color: #1976d2;
    }

    .status.visit {
        background: #fff3e0;
        color: #f57c00;
    }

    .status.won {
        background: #e8f5e9;
        color: #388e3c;
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
    background: #f8f9fa;
    padding: 2rem;
    border-radius: 16px;
    border: 1px solid #eee;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        background: white;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        border-color: ${props => props.theme.colors.primary}40;
    }

    .icon {
        width: 48px;
        height: 48px;
        border-radius: 12px;
        background: white;
        display: flex;
        align-items: center;
        justifyContent: center;
        color: ${props => props.theme.colors.primary};
        margin-bottom: 1.5rem;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
    }

    h4 {
        font-size: 1.25rem;
        font-weight: 700;
        margin-bottom: 0.75rem;
        color: #333;
    }

    p {
        font-size: 1rem;
        color: #666;
        line-height: 1.5;
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
                        <h3>Funil de Vendas Visual<br/>(Kanban)</h3>
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
                                <div className="card" style={{borderLeftColor: '#3498db'}}>
                                    <h4>Mãe do Pedro</h4>
                                    <p>Fundamental 1 • Manhã</p>
                                    <span className="tag">WhatsApp</span>
                                </div>
                                <div className="card" style={{borderLeftColor: '#3498db'}}>
                                    <h4>Pai da Júlia</h4>
                                    <p>Infantil • Tarde</p>
                                    <span className="tag">Site</span>
                                </div>
                            </div>
                            <div className="col">
                                <div className="header">Visita (5)</div>
                                <div className="card" style={{borderLeftColor: '#f1c40f'}}>
                                    <h4>Lucas Silva</h4>
                                    <p>Visita: Amanhã 14h</p>
                                    <span className="tag">Indicação</span>
                                </div>
                            </div>
                            <div className="col">
                                <div className="header">Matriculado (8)</div>
                                <div className="card" style={{borderLeftColor: '#2ecc71'}}>
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
                                    <div className="task">
                                        <h4>Ligar: Mãe do Pedro</h4>
                                        <span><Clock size={10}/> 10:00 • Follow-up</span>
                                    </div>
                                    <div className="task" style={{borderLeftColor: '#007bff'}}>
                                        <h4>Visita: Família Silva</h4>
                                        <span><Users size={10}/> 14:30 • Apresentação</span>
                                    </div>
                                    <div className="task" style={{borderLeftColor: '#28a745'}}>
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
                <div style={{textAlign: 'center', marginBottom: '3rem'}}>
                    <h3 style={{fontSize: '2rem', fontWeight: 800, color: '#333'}}>Gestão Completa do Ciclo de
                        Matrícula</h3>
                    <p style={{color: '#666'}}>Ferramentas que garantem que nenhum aluno seja esquecido.</p>
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

            </Container>
        </Section>
    )
}