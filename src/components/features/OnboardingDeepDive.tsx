'use client'

import styled, {keyframes, css} from 'styled-components'
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
        ${props => !props.$reverse && css`flex-direction: column;`}
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
            color: #7C3AED; /* Roxo */
            flex-shrink: 0;
            margin-top: 2px;
        }
    }
`

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

// --- MOCKUP 1: KANBAN DE ALUNOS ---
const KanbanMock = styled.div`
    padding: 20px;
    background: #F3F4F6;
    height: 360px;
    display: flex;
    gap: 15px;
    overflow: hidden;
`
const Column = styled.div`
    flex: 1;
    background: #E5E7EB;
    border-radius: 8px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .header {
        font-size: 11px;
        font-weight: bold;
        color: #4B5563;
        text-transform: uppercase;
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;
    }

    .card {
        background: white;
        padding: 12px;
        border-radius: 6px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
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
            font-weight: bold;
            font-size: 13px;
            color: #1F2937;
        }

        .info {
            font-size: 11px;
            color: #6B7280;
            display: flex;
            gap: 6px;
            align-items: center;
        }

        .progress {
            height: 4px;
            background: #E5E7EB;
            border-radius: 2px;
            overflow: hidden;

            .fill {
                height: 100%;
                background: #10B981;
            }
        }
    }
`

// --- MOCKUP 2: CHECKLIST MODAL ---
const ModalMock = styled.div`
    background: white;
    height: 380px;
    display: flex;
    flex-direction: column;
`
const ModalTop = styled.div`
    padding: 20px;
    border-bottom: 1px solid #E5E7EB;
    display: flex;
    align-items: center;
    gap: 15px;

    .avatar {
        width: 48px;
        height: 48px;
        background: #E0E7FF;
        color: #4338CA;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
    }

    .details h4 {
        margin: 0;
        font-size: 16px;
        color: #1F2937;
    }

    .details p {
        margin: 2px 0 0;
        font-size: 12px;
        color: #6B7280;
    }
`
const Checklist = styled.div`
    padding: 20px;
    overflow-y: auto;

    .item {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px;
        border: 1px solid #E5E7EB;
        border-radius: 8px;
        margin-bottom: 10px;
        transition: all 0.2s;

        &.completed {
            background: #F9FAFB;
            border-color: #F3F4F6;
            color: #9CA3AF;
            text-decoration: line-through;
        }

        &.overdue {
            border-color: #FECACA;
            background: #FEF2F2;
        }

        .check {
            width: 20px;
            height: 20px;
            border: 2px solid #D1D5DB;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        &.completed .check {
            background: #10B981;
            border-color: #10B981;
            color: white;
        }
    }
`

// --- MOCKUP 3: TEMPLATE BUILDER ---
const TemplateMock = styled.div`
    padding: 25px;
    background: white;

    .header-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }

    .title {
        font-weight: bold;
        color: #1F2937;
        font-size: 14px;
    }

    .task-list {
        border: 1px solid #E5E7EB;
        border-radius: 8px;
        overflow: hidden;

        .task {
            padding: 12px;
            border-bottom: 1px solid #E5E7EB;
            display: flex;
            justify-content: space-between;
            align-items: center;

            &:last-child {
                border: none;
            }
        }

        .task-name {
            font-size: 13px;
            color: #374151;
            display: flex;
            gap: 8px;
            align-items: center;
        }

        .meta {
            font-size: 11px;
            background: #F3F4F6;
            padding: 2px 8px;
            border-radius: 12px;
            color: #6B7280;
        }
    }

    .trigger-box {
        margin-top: 20px;
        padding: 15px;
        background: #EFF6FF;
        border: 1px dashed #BFDBFE;
        border-radius: 8px;
        display: flex;
        gap: 10px;
        align-items: center;
        color: #1E40AF;
        font-size: 12px;
        font-weight: 500;
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
        border-color: #7C3AED;

        .icon {
            background: #7C3AED;
            color: white;
        }
    }

    .icon {
        width: 48px;
        height: 48px;
        border-radius: 12px;
        background: white;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #7C3AED;
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

export default function OnboardingDeepDive() {
    return (
        <Section>
            <Container>

                {/* 1. KANBAN DE ALUNOS */}
                <FeatureRow>
                    <TextContent>
                        <h3>Nenhum Aluno Fica para Trás</h3>
                        <p>
                            Assim que a matrícula é feita, o aluno entra automaticamente no quadro de Onboarding.
                            Acompanhe visualmente quem está pendente de documentos, quem já recebeu o uniforme e quem
                            está 100% integrado.
                        </p>
                        <ul>
                            <li><Users size={20}/> <strong>Visão de Funil:</strong> Saiba exatamente onde cada novo
                                aluno está.
                            </li>
                            <li><Clock size={20}/> <strong>Prazos Automáticos:</strong> O sistema alerta se um aluno
                                está há muito tempo na mesma etapa.
                            </li>
                            <li><Zap size={20}/> <strong>Integração Nativa:</strong> Matrícula no CRM &rarr; Card no
                                Onboarding (sem digitação).
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
                            <Column>
                                <div className="header">PENDENTE (2)</div>
                                <div className="card new">
                                    <div className="name">Enzo Gabriel</div>
                                    <div className="info"><GraduationCap size={12}/> Berçário I</div>
                                    <div className="progress">
                                        <div className="fill" style={{width: '10%'}}></div>
                                    </div>
                                </div>
                                <div className="card warn">
                                    <div className="name">Valentina S.</div>
                                    <div className="info"><GraduationCap size={12}/> 1º Ano</div>
                                    <div className="progress">
                                        <div className="fill" style={{width: '30%'}}></div>
                                    </div>
                                </div>
                            </Column>
                            <Column>
                                <div className="header">EM ANDAMENTO (1)</div>
                                <div className="card">
                                    <div className="name">João Pedro</div>
                                    <div className="info"><GraduationCap size={12}/> 3º Ano Médio</div>
                                    <div className="progress">
                                        <div className="fill" style={{width: '60%'}}></div>
                                    </div>
                                </div>
                            </Column>
                            <Column>
                                <div className="header">CONCLUÍDO (15)</div>
                                <div className="card done">
                                    <div className="name">Maria Alice</div>
                                    <div className="info"><CheckSquare size={12}/> Tudo pronto!</div>
                                    <div className="progress">
                                        <div className="fill" style={{width: '100%'}}></div>
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
                                    <span>Assinar Contrato</span>
                                </div>
                                <div className="item completed">
                                    <div className="check">✓</div>
                                    <span>Pagar 1ª Mensalidade</span>
                                </div>
                                <div className="item overdue">
                                    <div className="check"></div>
                                    <div style={{flex: 1}}>
                                        <span style={{color: '#DC2626', fontWeight: 'bold'}}>Entregar Carteira de Vacinação</span>
                                        <div style={{fontSize: '10px', color: '#DC2626'}}>Venceu há 2 dias</div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="check"></div>
                                    <span>Entrevista com Nutricionista</span>
                                </div>
                                <div className="item">
                                    <div className="check"></div>
                                    <span>Entregar Kit de Uniforme</span>
                                </div>
                            </Checklist>
                        </ModalMock>
                    </MockupCard>
                    <TextContent>
                        <h3>Checklists que Guiam a Equipe</h3>
                        <p>
                            Não confie na memória. Cada aluno tem um checklist digital detalhado.
                            A secretaria sabe exatamente o que falta para completar a pasta do aluno.
                        </p>
                        <ul>
                            <li><CheckSquare size={20}/> <strong>Controle de Pendências:</strong> Documentos, exames,
                                entrevistas. Nada passa batido.
                            </li>
                            <li><CalendarCheck size={20}/> <strong>Alertas de Atraso:</strong> O sistema avisa se um
                                documento obrigatório não foi entregue.
                            </li>
                            <li><Users size={20}/> <strong>Responsáveis:</strong> Atribua tarefas específicas (ex:
                                Nutricionista para validar cardápio).
                            </li>
                        </ul>
                    </TextContent>
                </FeatureRow>

                {/* 3. TEMPLATES */}
                <FeatureRow>
                    <TextContent>
                        <h3>Templates Personalizados<br/>Por Segmento</h3>
                        <p>
                            O processo de entrada no Berçário é diferente do Ensino Médio.
                            Crie modelos de onboarding específicos para cada curso e o Maskot aplica o correto
                            automaticamente.
                        </p>
                        <ul>
                            <li><LayoutTemplate size={20}/> <strong>Modelos Flexíveis:</strong> Crie quantos templates
                                sua escola precisar.
                            </li>
                            <li><Copy size={20}/> <strong>Padronização:</strong> Garanta que todo aluno do mesmo curso
                                passe pelo mesmo processo.
                            </li>
                            <li><Zap size={20}/> <strong>Gatilho Inteligente:</strong> Matrícula no
                                Infantil &rarr; Ativa Template Infantil.
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
                        <TemplateMock>
                            <div className="header-row">
                                <div className="title">Editando Template: <strong>Educação Infantil</strong></div>
                                <div style={{
                                    fontSize: '11px',
                                    background: '#D1FAE5',
                                    color: '#065F46',
                                    padding: '4px 8px',
                                    borderRadius: '12px'
                                }}>Ativo
                                </div>
                            </div>

                            <div className="task-list">
                                <div className="task">
                                    <div className="task-name">1. Coletar Ficha de Saúde</div>
                                    <div className="meta">Prazo: 2 dias</div>
                                </div>
                                <div className="task">
                                    <div className="task-name">2. Autorização de Uso de Imagem</div>
                                    <div className="meta">Prazo: 5 dias</div>
                                </div>
                                <div className="task">
                                    <div className="task-name">3. Agendar Adaptação</div>
                                    <div className="meta">Responsável: Coordenação</div>
                                </div>
                                <div className="task">
                                    <div className="task-name">4. Entregar Agenda Digital</div>
                                    <div className="meta">No 1º dia</div>
                                </div>
                            </div>

                            <div className="trigger-box">
                                <Zap size={16}/>
                                Aplicar automaticamente para matrículas em: Maternal I, Maternal II, Jardim
                            </div>
                        </TemplateMock>
                    </MockupCard>
                </FeatureRow>

                {/* 4. POWER GRID */}
                <div style={{textAlign: 'center', marginBottom: '3rem'}}>
                    <h3 style={{
                        fontSize: '2rem',
                        fontWeight: 800,
                        color: '#333',
                        fontFamily: 'var(--font-inter)'
                    }}>Por que investir no Onboarding?</h3>
                    <p style={{color: '#666', marginTop: '0.5rem'}}>A retenção do aluno começa no primeiro dia.</p>
                </div>

                <PowerGrid>
                    <PowerCard>
                        <div className="icon"><Rocket size={24}/></div>
                        <h4>Experiência Uau</h4>
                        <p>Surpreenda os pais com uma organização impecável desde a assinatura do contrato.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><FileCheck size={24}/></div>
                        <h4>Compliance</h4>
                        <p>Garanta que 100% dos alunos tenham a documentação legal obrigatória em dia.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><Clock size={24}/></div>
                        <h4>Menos Retrabalho</h4>
                        <p>Evite ligar para os pais 3 meses depois pedindo um documento esquecido.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><Users size={24}/></div>
                        <h4>Colaboração</h4>
                        <p>Envolva Secretaria, Financeiro e Pedagógico no processo de recebimento do aluno.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><LayoutTemplate size={24}/></div>
                        <h4>Escalabilidade</h4>
                        <p>Matricule 10 ou 1000 alunos mantendo o mesmo padrão de qualidade no atendimento.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><Zap size={24}/></div>
                        <h4>Automação</h4>
                        <p>O processo inicia sozinho. Sua equipe não precisa criar cards manualmente.</p>
                    </PowerCard>
                </PowerGrid>

            </Container>
        </Section>
    )
}