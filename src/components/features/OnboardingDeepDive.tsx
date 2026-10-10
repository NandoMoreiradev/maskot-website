'use client'

import styled, { keyframes, css } from 'styled-components'
import {
    Rocket, CheckSquare, GraduationCap, Copy,
    FileCheck, Users, Zap,
    LayoutTemplate, Clock, CalendarCheck
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
    background: #FFFFFF;
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

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
        gap: 3rem;
        margin-bottom: 6rem;
        display: flex;
        flex-direction: column-reverse;
        ${props => !props.$reverse && css`flex-direction: column;`}
    }
`

const TextContent = styled.div`
    h3 {
        font-family: ${props => props.theme.typography.fontFamily.main};
        font-size: 2.25rem;
        font-weight: 800;
        margin-bottom: 1.5rem;
        line-height: 1.2;
        color: #0F172A;
        letter-spacing: -0.02em;
    }

    p {
        font-family: ${props => props.theme.typography.fontFamily.main};
        font-size: 1.1rem;
        color: #475569;
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
        font-size: 1rem;
        font-weight: 500;
        color: #334155;

        svg {
            color: #7C3AED;
            flex-shrink: 0;
            margin-top: 2px;
        }

        strong {
            color: #0F172A;
        }
    }
`

const MockupCard = styled.div`
    background: #FFFFFF;
    border-radius: 16px;
    box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.05);
    border: 1px solid #E2E8F0;
    overflow: hidden;
    position: relative;
    animation: ${float} 8s ease-in-out infinite;
`

const MockupHeader = styled.div`
    height: 40px;
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
`

// --- MOCKUP 1: KANBAN DE ALUNOS ---
const KanbanMock = styled.div`
    padding: 20px;
    background: #F8FAFC;
    height: 360px;
    display: flex;
    gap: 15px;
    overflow: hidden;
`

const Column = styled.div`
    flex: 1;
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 12px;
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);

    .header {
        font-size: 11px;
        font-weight: 700;
        color: #64748B;
        text-transform: uppercase;
        display: flex;
        justify-content: space-between;
        margin-bottom: 4px;
        letter-spacing: 0.02em;
    }

    .card {
        background: #F8FAFC;
        border: 1px solid #E2E8F0;
        padding: 12px;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        border-left: 3px solid transparent;

        &.new {
            border-left-color: #3B82F6;
        }

        &.warn {
            border-left-color: #F59E0B;
        }

        &.done {
            border-left-color: #10B981;
        }

        .name {
            font-weight: 700;
            font-size: 13px;
            color: #0F172A;
        }

        .info {
            font-size: 11px;
            color: #64748B;
            display: flex;
            gap: 6px;
            align-items: center;
        }

        .progress {
            height: 5px;
            background: #E2E8F0;
            border-radius: 99px;
            overflow: hidden;

            .fill {
                height: 100%;
                background: #7C3AED;
                border-radius: 99px;
            }
        }
    }
`

// --- MOCKUP 2: CHECKLIST MODAL ---
const ModalMock = styled.div`
    background: #FFFFFF;
    height: 380px;
    display: flex;
    flex-direction: column;
`

const ModalTop = styled.div`
    padding: 18px 20px;
    border-bottom: 1px solid #E2E8F0;
    display: flex;
    align-items: center;
    gap: 15px;

    .avatar {
        width: 44px;
        height: 44px;
        background: #F5F3FF;
        color: #7C3AED;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 14px;
    }

    .details h4 {
        margin: 0;
        font-size: 15px;
        font-weight: 700;
        color: #0F172A;
    }

    .details p {
        margin: 2px 0 0;
        font-size: 12px;
        color: #64748B;
    }
`

const Checklist = styled.div`
    padding: 18px 20px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 8px;

    .item {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 10px 12px;
        border: 1px solid #E2E8F0;
        border-radius: 8px;
        transition: all 0.2s;
        font-size: 13px;
        font-weight: 500;
        color: #334155;

        &.completed {
            background: #F8FAFC;
            border-color: #E2E8F0;
            color: #94A3B8;
            text-decoration: line-through;
        }

        &.overdue {
            border-color: #FECACA;
            background: #FEF2F2;
        }

        .check {
            width: 18px;
            height: 18px;
            border: 1.5px solid #CBD5E1;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 11px;
            flex-shrink: 0;
        }

        &.completed .check {
            background: #10B981;
            border-color: #10B981;
            color: white;
            font-weight: 700;
        }
    }
`

// --- MOCKUP 3: TEMPLATE BUILDER ---
const TemplateMock = styled.div`
    padding: 24px;
    background: #FFFFFF;

    .header-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }

    .title {
        font-weight: 700;
        color: #0F172A;
        font-size: 14px;
    }

    .task-list {
        border: 1px solid #E2E8F0;
        border-radius: 12px;
        overflow: hidden;

        .task {
            padding: 12px 14px;
            border-bottom: 1px solid #E2E8F0;
            display: flex;
            justify-content: space-between;
            align-items: center;

            &:last-child {
                border: none;
            }
        }

        .task-name {
            font-size: 13px;
            font-weight: 500;
            color: #334155;
            display: flex;
            gap: 8px;
            align-items: center;
        }

        .meta {
            font-size: 11px;
            font-weight: 600;
            background: #F1F5F9;
            padding: 2px 8px;
            border-radius: 12px;
            color: #64748B;
        }
    }

    .trigger-box {
        margin-top: 18px;
        padding: 14px;
        background: #F8FAFC;
        border: 1px dashed #CBD5E1;
        border-radius: 10px;
        display: flex;
        gap: 10px;
        align-items: center;
        color: #475569;
        font-size: 12px;
        font-weight: 500;

        svg {
            color: #7C3AED;
            flex-shrink: 0;
        }
    }
`

// --- POWER GRID ---
const PowerGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 4rem;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 640px) {
        grid-template-columns: 1fr;
    }
`

const PowerCard = styled.div`
    background: #FFFFFF;
    padding: 2rem;
    border-radius: 16px;
    border: 1px solid #E2E8F0;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05);
        border-color: #CBD5E1;
    }

    .icon {
        width: 48px;
        height: 48px;
        border-radius: 12px;
        background: #F5F3FF;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #7C3AED;
        margin-bottom: 1.5rem;
    }

    h4 {
        font-size: 1.25rem;
        font-weight: 700;
        margin-bottom: 0.75rem;
        color: #0F172A;
    }

    p {
        font-size: 0.95rem;
        color: #64748B;
        line-height: 1.5;
        margin: 0;
    }
`

export default function OnboardingDeepDive() {
    return (
        <Section id="recursos">
            <Container>

                {/* 1. KANBAN DE ALUNOS */}
                <FeatureRow>
                    <TextContent>
                        <h3>Nenhum Aluno Fica para Trás</h3>
                        <p>
                            Assim que a matrícula é confirmada, o aluno entra automaticamente no quadro de Onboarding.
                            Acompanhe visualmente quem está com pendência de documentos, quem já retirou o material e quem
                            está 100% integrado ao cotidiano escolar.
                        </p>
                        <ul>
                            <li><Users size={20}/> <strong>Visão de Funil:</strong> Saiba exatamente em qual etapa cada novo aluno está posicionado.</li>
                            <li><Clock size={20}/> <strong>Prazos Automáticos:</strong> O sistema alerta a equipe se um aluno fica estagnado na mesma etapa.</li>
                            <li><Zap size={20}/> <strong>Integração Nativa:</strong> Matrícula no CRM cria o card de acolhimento sem retrabalho manual.</li>
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
                            <Column>
                                <div className="header">Pendente (2)</div>
                                <div className="card new">
                                    <div className="name">Enzo Gabriel</div>
                                    <div className="info"><GraduationCap size={12}/> Berçário I</div>
                                    <div className="progress">
                                        <div className="fill" style={{ width: '15%' }}></div>
                                    </div>
                                </div>
                                <div className="card warn">
                                    <div className="name">Valentina S.</div>
                                    <div className="info"><GraduationCap size={12}/> 1º Ano</div>
                                    <div className="progress">
                                        <div className="fill" style={{ width: '35%' }}></div>
                                    </div>
                                </div>
                            </Column>
                            <Column>
                                <div className="header">Em Andamento (1)</div>
                                <div className="card">
                                    <div className="name">João Pedro</div>
                                    <div className="info"><GraduationCap size={12}/> 3º Ano Médio</div>
                                    <div className="progress">
                                        <div className="fill" style={{ width: '65%' }}></div>
                                    </div>
                                </div>
                            </Column>
                            <Column>
                                <div className="header">Concluído (15)</div>
                                <div className="card done">
                                    <div className="name">Maria Alice</div>
                                    <div className="info"><CheckSquare size={12}/> Tudo pronto!</div>
                                    <div className="progress">
                                        <div className="fill" style={{ width: '100%', background: '#10B981' }}></div>
                                    </div>
                                </div>
                            </Column>
                        </KanbanMock>
                    </MockupCard>
                </FeatureRow>

                {/* 2. CHECKLIST DETALHADO */}
                <FeatureRow $reverse>
                    <MockupCard>
                        <MockupHeader>
                            <div className="dots">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </MockupHeader>
                        <ModalMock>
                            <ModalTop>
                                <div className="avatar">EG</div>
                                <div className="details">
                                    <h4>Enzo Gabriel</h4>
                                    <p>Turma: Berçário I • Responsável: Ana Paula</p>
                                </div>
                            </ModalTop>
                            <Checklist>
                                <div className="item completed">
                                    <div className="check">✓</div>
                                    <span>Assinar Contrato de Matrícula</span>
                                </div>
                                <div className="item completed">
                                    <div className="check">✓</div>
                                    <span>Compensar 1ª Mensalidade</span>
                                </div>
                                <div className="item overdue">
                                    <div className="check"></div>
                                    <div style={{ flex: 1 }}>
                                        <span style={{ color: '#DC2626', fontWeight: 700 }}>Entregar Carteira de Vacinação</span>
                                        <div style={{ fontSize: '10px', color: '#DC2626' }}>Venceu há 2 dias</div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="check"></div>
                                    <span>Entrevista com Coordenação Pedagógica</span>
                                </div>
                                <div className="item">
                                    <div className="check"></div>
                                    <span>Entregar Kit de Uniforme & Agenda</span>
                                </div>
                            </Checklist>
                        </ModalMock>
                    </MockupCard>
                    <TextContent>
                        <h3>Checklists que Guiam a Equipe</h3>
                        <p>
                            Não confie na memória. Cada aluno possui um checklist digital padronizado.
                            A secretaria e coordenação sabem com precisão o que falta para completar a pasta do aluno.
                        </p>
                        <ul>
                            <li><CheckSquare size={20}/> <strong>Controle de Pendências:</strong> Documentos, fichas de saúde e entrevistas em lista clara.</li>
                            <li><CalendarCheck size={20}/> <strong>Alertas de Atraso:</strong> O sistema notifica responsáveis se um documento obrigatório faltar.</li>
                            <li><Users size={20}/> <strong>Responsáveis por Setor:</strong> Atribua tarefas para Secretaria, Enfermagem ou Coordenação.</li>
                        </ul>
                    </TextContent>
                </FeatureRow>

                {/* 3. TEMPLATES */}
                <FeatureRow>
                    <TextContent>
                        <h3>Templates Personalizados<br/>Por Segmento</h3>
                        <p>
                            O processo de acolhimento no Berçário é bem diferente do Ensino Médio.
                            Crie modelos de onboarding específicos para cada etapa de ensino e o Maskot aplica as regras certas automaticamente.
                        </p>
                        <ul>
                            <li><LayoutTemplate size={20}/> <strong>Modelos Flexíveis:</strong> Crie quantos fluxos sua instituição educacional necessitar.</li>
                            <li><Copy size={20}/> <strong>Padronização de Excelência:</strong> Garanta a mesma qualidade no acolhimento de todas as turmas.</li>
                            <li><Zap size={20}/> <strong>Gatilho Inteligente:</strong> Matrícula no Infantil ativa o template da Educação Infantil na hora.</li>
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
                        <TemplateMock>
                            <div className="header-row">
                                <div className="title">Template Ativo: <strong>Educação Infantil</strong></div>
                                <div style={{
                                    fontSize: '11px',
                                    fontWeight: 700,
                                    background: '#F0FDF4',
                                    color: '#166534',
                                    padding: '3px 8px',
                                    borderRadius: '12px',
                                    border: '1px solid #BBF7D0'
                                }}>Ativo</div>
                            </div>

                            <div className="task-list">
                                <div className="task">
                                    <div className="task-name">1. Coletar Ficha de Saúde e Alergias</div>
                                    <div className="meta">Prazo: 2 dias</div>
                                </div>
                                <div className="task">
                                    <div className="task-name">2. Autorização de Uso de Imagem</div>
                                    <div className="meta">Prazo: 5 dias</div>
                                </div>
                                <div className="task">
                                    <div className="task-name">3. Agendar Período de Adaptação</div>
                                    <div className="meta">Coordenação</div>
                                </div>
                                <div className="task">
                                    <div className="task-name">4. Entregar Acesso ao App dos Pais</div>
                                    <div className="meta">No 1º dia</div>
                                </div>
                            </div>

                            <div className="trigger-box">
                                <Zap size={16}/>
                                Aplicado automaticamente para matrículas em: Berçário, Maternal e Jardim
                            </div>
                        </TemplateMock>
                    </MockupCard>
                </FeatureRow>

                {/* 4. POWER GRID */}
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h3 style={{
                        fontSize: '2rem',
                        fontWeight: 800,
                        color: '#0F172A',
                        letterSpacing: '-0.02em'
                    }}>Por que investir no Onboarding?</h3>
                    <p style={{ color: '#64748B', marginTop: '0.5rem', fontSize: '1.05rem' }}>A retenção e fidelização do aluno começam no primeiro dia de aula.</p>
                </div>

                <PowerGrid>
                    <PowerCard>
                        <div className="icon"><Rocket size={24}/></div>
                        <h4>Experiência Encantadora</h4>
                        <p>Surpreenda as famílias com um atendimento ágil e profissional desde a assinatura do contrato.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><FileCheck size={24}/></div>
                        <h4>Compliance & Documentação</h4>
                        <p>Garanta que 100% dos alunos matriculados tenham suas pastas documentais completas e em dia.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><Clock size={24}/></div>
                        <h4>Zero Retrabalho</h4>
                        <p>Evite ligar para os pais meses depois do início das aulas solicitando documentos esquecidos.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><Users size={24}/></div>
                        <h4>Alinhamento entre Setores</h4>
                        <p>Envolva Secretaria, Financeiro e Pedagógico de forma síncrona no recebimento de cada aluno.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><LayoutTemplate size={24}/></div>
                        <h4>Escalabilidade Operacional</h4>
                        <p>Receba 20 ou 2.000 alunos mantendo o mesmo padrão rigoroso de acolhimento e organização.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><Zap size={24}/></div>
                        <h4>Automação sem Esforço</h4>
                        <p>O fluxo inicia no exato momento da matrícula sem demandar criação manual de planilhas e tarefas.</p>
                    </PowerCard>
                </PowerGrid>

            </Container>
        </Section>
    )
}