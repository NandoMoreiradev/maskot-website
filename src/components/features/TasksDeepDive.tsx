'use client'

import styled, { keyframes, css } from 'styled-components'
import {
    Layout, Kanban, Calendar, Clock, CheckSquare,
    Play, Pause, Users, Zap, Bell, Repeat,
    List, Tag, Filter
} from 'lucide-react'

// --- Animations ---
const float = keyframes`
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
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
        font-weight: 800;
        margin-bottom: 1.5rem;
        line-height: 1.2;
        color: #0F172A;
        letter-spacing: -0.02em;
    }
    p {
        font-family: ${props => props.theme.typography.fontFamily.main};
        font-size: ${props => props.theme.typography.fontSize.lg};
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
        font-size: ${props => props.theme.typography.fontSize.base};
        font-weight: 500;
        color: #334155;
        svg {
            color: #4F46E5; /* Indigo */
            flex-shrink: 0;
            margin-top: 2px;
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
    .dots { display: flex; gap: 6px; div { width: 8px; height: 8px; border-radius: 50%; background: #CBD5E1; } }
`

// --- MOCKUP 1: KANBAN BOARD ---
const KanbanMock = styled.div`
    padding: 20px;
    background: #FFFFFF;
    height: 360px;
    display: flex;
    gap: 14px;
    overflow: hidden;
`
const Column = styled.div`
    flex: 1;
    background: #F8FAFC;
    border: 1px solid #E2E8F0;
    border-radius: 10px;
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    
    .header { 
        font-size: 11px;
        font-weight: 700;
        color: #64748B; 
        text-transform: uppercase;
        letter-spacing: 0.04em;
        display: flex;
        justify-content: space-between;
        margin-bottom: 4px;
    }
`
const Card = styled.div`
    background: #FFFFFF;
    padding: 12px;
    border-radius: 8px;
    box-shadow: 0 1px 2px rgba(0,0,0,0.03);
    border: 1px solid #E2E8F0;
    
    .tag { font-size: 9px; padding: 2px 6px; border-radius: 4px; display: inline-block; margin-bottom: 6px; font-weight: 700; }
    .tag.sec { background: #EEF2FF; color: #4F46E5; }
    .tag.fin { background: #ECFDF5; color: #059669; }
    
    h4 { font-size: 12px; font-weight: 700; margin: 0 0 8px 0; color: #0F172A; line-height: 1.35; }
    
    .footer { 
        display: flex; justify-content: space-between; align-items: center; 
        border-top: 1px solid #F1F5F9; padding-top: 8px;
    }
    .avatar { width: 20px; height: 20px; border-radius: 50%; background: #4F46E5; color: white; font-size: 9px; font-weight: 700; display: flex; align-items: center; justify-content: center; }
    .date { font-size: 10px; color: #64748B; font-weight: 500; display: flex; align-items: center; gap: 4px; }
`

// --- MOCKUP 2: TASK DETAIL & TIMETRACKING ---
const TaskDetailMock = styled.div`
    display: flex;
    height: 380px;
    background: #FFFFFF;
`
const MainArea = styled.div`
    flex: 2;
    padding: 24px;
    border-right: 1px solid #E2E8F0;
    
    h2 { font-size: 16px; font-weight: 700; color: #0F172A; margin-bottom: 18px; }
    
    .tabs { display: flex; gap: 15px; border-bottom: 1px solid #E2E8F0; margin-bottom: 20px; }
    .tab { font-size: 12px; padding-bottom: 8px; color: #64748B; cursor: pointer; font-weight: 500; }
    .tab.active { color: #4F46E5; border-bottom: 2px solid #4F46E5; font-weight: 700; }
    
    .checklist-item {
        display: flex; gap: 10px; align-items: center; margin-bottom: 12px; font-size: 13px; color: #334155; font-weight: 500;
        input { accent-color: #4F46E5; }
        &.done { text-decoration: line-through; color: #94A3B8; }
    }
`
const SidebarMock = styled.div`
    flex: 1;
    padding: 24px;
    background: #F8FAFC;
    
    .section { margin-bottom: 20px; }
    .label { font-size: 10px; font-weight: 700; color: #64748B; text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 8px; }
    
    .timer-box {
        background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 8px; padding: 12px;
        display: flex; align-items: center; justify-content: space-between;
        margin-bottom: 10px;
    }
    .time { font-family: monospace; font-size: 16px; font-weight: 800; color: #0F172A; }
    .play-btn { 
        width: 28px; height: 28px; border-radius: 50%; background: #EF4444; color: white; 
        display: flex; align-items: center; justify-content: center;
    }
`

// --- MOCKUP 3: AUTOMATION BUILDER ---
const AutomationMock = styled.div`
    padding: 30px;
    background: #FFFFFF;
    height: 360px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
`
const LogicBlock = styled.div`
    background: #F8FAFC;
    border: 1px solid #E2E8F0;
    border-radius: 12px;
    padding: 16px;
    display: flex;
    align-items: center;
    gap: 15px;
    
    .icon { 
        width: 38px; height: 38px; border-radius: 10px; background: #EEF2FF; 
        color: #4F46E5; display: flex; align-items: center; justify-content: center;
        border: 1px solid #E0E7FF;
    }
    
    .content {
        h5 { margin: 0 0 3px 0; font-size: 13px; font-weight: 700; color: #0F172A; }
        p { margin: 0; font-size: 12px; color: #64748B; }
    }

    &.action .icon { background: #ECFDF5; color: #059669; border-color: #A7F3D0; }
`
const Connector = styled.div`
    height: 18px;
    width: 2px;
    background: #CBD5E1;
    margin-left: 36px;
    position: relative;
    
    &:after {
        content: '▼';
        position: absolute; bottom: -5px; left: -4px; color: #94A3B8; font-size: 8px;
    }
`

// --- POWER GRID ---
const PowerGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 4rem;
    @media (max-width: ${props => props.theme.breakpoints.md}) { grid-template-columns: 1fr; }
`
const PowerCard = styled.div`
    background: #FFFFFF;
    padding: 2rem;
    border-radius: 16px;
    border: 1px solid #E2E8F0;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
        border-color: #4F46E5;
        .icon {
            background: #4F46E5;
            color: #FFFFFF;
            border-color: #4F46E5;
        }
    }

    .icon {
        width: 48px; height: 48px; border-radius: 12px;
        background: #F8FAFC; border: 1px solid #E2E8F0;
        display: flex; align-items: center; justify-content: center;
        color: #4F46E5; margin-bottom: 1.5rem;
        transition: all 0.3s ease;
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
        line-height: 1.5;
        margin: 0;
    }
`

export default function TasksDeepDive() {
    return (
        <Section id="recursos">
            <Container>

                {/* 1. KANBAN & VIEWS */}
                <FeatureRow>
                    <TextContent>
                        <h3>Visualize do Seu Jeito:<br/>Kanban, Lista ou Calendário</h3>
                        <p>
                            Cada setor da escola trabalha de um jeito. A secretaria prefere listas, o financeiro prefere Kanban
                            e a coordenação precisa ver o Calendário. No Maskot, você alterna a visão com um clique.
                        </p>
                        <ul>
                            <li><Kanban size={20}/> <strong>Quadro Kanban:</strong> Arraste e solte para mover demandas de etapa.</li>
                            <li><List size={20}/> <strong>Lista Rápida:</strong> Ideal para processar várias pendências em sequência.</li>
                            <li><Calendar size={20}/> <strong>Calendário:</strong> Visualize prazos de entrega e visitas agendadas.</li>
                        </ul>
                    </TextContent>
                    <MockupCard>
                        <MockupHeader><div className="dots"><div></div><div></div><div></div></div></MockupHeader>
                        <KanbanMock>
                            <Column>
                                <div className="header">A FAZER <span>2</span></div>
                                <Card>
                                    <span className="tag sec">Secretaria</span>
                                    <h4>Organizar documentos do Berçário</h4>
                                    <div className="footer">
                                        <div className="avatar">A</div>
                                        <div className="date"><Clock size={10}/> Amanhã</div>
                                    </div>
                                </Card>
                                <Card>
                                    <span className="tag fin">Financeiro</span>
                                    <h4>Baixar boletos do dia 10</h4>
                                    <div className="footer">
                                        <div className="avatar">C</div>
                                        <div className="date"><Clock size={10}/> Hoje</div>
                                    </div>
                                </Card>
                            </Column>
                            <Column>
                                <div className="header">EM ANDAMENTO <span>1</span></div>
                                <Card>
                                    <span className="tag sec">Comercial</span>
                                    <h4>Retornar contato mãe do Pedro</h4>
                                    <div className="footer">
                                        <div className="avatar">M</div>
                                        <div className="date" style={{color: '#DC2626', fontWeight: 700}}><Clock size={10}/> Atrasado</div>
                                    </div>
                                </Card>
                            </Column>
                            <Column>
                                <div className="header">CONCLUÍDO <span>12</span></div>
                                <Card style={{opacity: 0.6}}>
                                    <span className="tag sec">Secretaria</span>
                                    <h4>Enviar lista de materiais</h4>
                                    <div className="footer">
                                        <div className="avatar">A</div>
                                        <div className="date">Ontem</div>
                                    </div>
                                </Card>
                            </Column>
                        </KanbanMock>
                    </MockupCard>
                </FeatureRow>

                {/* 2. TASK DETAIL & TIME TRACKING */}
                <FeatureRow $reverse>
                    <MockupCard>
                        <MockupHeader><div className="dots"><div></div><div></div><div></div></div></MockupHeader>
                        <TaskDetailMock>
                            <MainArea>
                                <h2>Preparar Contrato 2026 (João Silva)</h2>
                                <div className="tabs">
                                    <div className="tab active">Checklist</div>
                                    <div className="tab">Comentários</div>
                                    <div className="tab">Anexos</div>
                                </div>
                                <div>
                                    <div className="checklist-item done">
                                        <input type="checkbox" checked readOnly/> Verificar RG e CPF
                                    </div>
                                    <div className="checklist-item done">
                                        <input type="checkbox" checked readOnly/> Confirmar endereço
                                    </div>
                                    <div className="checklist-item">
                                        <input type="checkbox"/> Gerar PDF do Contrato
                                    </div>
                                    <div className="checklist-item">
                                        <input type="checkbox"/> Enviar para assinatura digital
                                    </div>
                                </div>
                            </MainArea>
                            <SidebarMock>
                                <div className="section">
                                    <div className="label">Tempo Gasto</div>
                                    <div className="timer-box">
                                        <div className="time">00:45:12</div>
                                        <div className="play-btn"><Pause size={12}/></div>
                                    </div>
                                    <span style={{fontSize: '11px', color: '#64748B'}}>Em execução por Maria</span>
                                </div>
                                <div className="section">
                                    <div className="label">Responsável</div>
                                    <div style={{display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 600, color: '#0F172A'}}>
                                        <div style={{width: '24px', height: '24px', borderRadius: '50%', background: '#4F46E5', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 700}}>M</div>
                                        Maria Souza
                                    </div>
                                </div>
                            </SidebarMock>
                        </TaskDetailMock>
                    </MockupCard>
                    <TextContent>
                        <h3>Controle Total da Execução:<br/>Checklists e Cronômetro</h3>
                        <p>
                            Não basta criar a tarefa, é preciso saber se ela foi feita. Use checklists para padronizar processos
                            (ex: Passo a passo da Matrícula) e o cronômetro (Time Tracking) para medir a produtividade.
                        </p>
                        <ul>
                            <li><CheckSquare size={20}/> <strong>Checklists:</strong> Quebre demandas grandes em passos simples.</li>
                            <li><Clock size={20}/> <strong>Time Tracking:</strong> Dê Play na tarefa e saiba quanto tempo sua equipe gasta.</li>
                            <li><Users size={20}/> <strong>Colaboradores:</strong> Adicione múltiplos responsáveis na mesma tarefa.</li>
                        </ul>
                    </TextContent>
                </FeatureRow>

                {/* 3. AUTOMATION */}
                <FeatureRow>
                    <TextContent>
                        <h3>Automação Inteligente:<br/>O Robô Trabalha por Você</h3>
                        <p>
                            Configure regras simples para eliminar trabalho manual. Quando algo acontecer,
                            o Maskot reage automaticamente.
                        </p>
                        <ul>
                            <li><Zap size={20}/> <strong>Gatilhos:</strong> Quando o status mudar, Quando a prioridade for Alta.</li>
                            <li><Bell size={20}/> <strong>Ações:</strong> Enviar e-mail, notificar gestor, criar subtarefa.</li>
                            <li><Repeat size={20}/> <strong>Produtividade:</strong> Garanta que nenhum processo pare por falta de aviso.</li>
                        </ul>
                    </TextContent>
                    <MockupCard>
                        <MockupHeader><div className="dots"><div></div><div></div><div></div></div></MockupHeader>
                        <AutomationMock>
                            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
                                <span style={{fontWeight: '700', fontSize: '13px', color: '#0F172A'}}>Regra: Notificar Conclusão</span>
                                <div style={{display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', fontWeight: 700, color: '#166534', background: '#F0FDF4', padding: '2px 8px', borderRadius: '100px', border: '1px solid #DCFCE7'}}>Ativa</div>
                            </div>

                            <LogicBlock>
                                <div className="icon"><Layout size={20}/></div>
                                <div className="content">
                                    <h5>QUANDO Status Mudar</h5>
                                    <p>De Em Andamento para <strong>Concluído</strong></p>
                                </div>
                            </LogicBlock>

                            <Connector />

                            <LogicBlock className="action">
                                <div className="icon"><Bell size={20}/></div>
                                <div className="content">
                                    <h5>ENTÃO Notificar por E-mail</h5>
                                    <p>Para: <strong>Coordenação Pedagógica</strong></p>
                                </div>
                            </LogicBlock>
                        </AutomationMock>
                    </MockupCard>
                </FeatureRow>

                {/* 4. POWER GRID */}
                <div style={{textAlign: 'center', marginBottom: '3rem'}}>
                    <h3 style={{
                        fontSize: '2rem',
                        fontWeight: 800,
                        color: '#0F172A',
                        fontFamily: 'var(--font-inter)',
                        letterSpacing: '-0.02em'
                    }}>Muito Mais que um To-Do List</h3>
                    <p style={{color: '#475569', marginTop: '0.5rem', fontSize: '1.125rem'}}>Recursos avançados para gestão escolar profissional.</p>
                </div>

                <PowerGrid>
                    <PowerCard>
                        <div className="icon"><Repeat size={24}/></div>
                        <h4>Tarefas Recorrentes</h4>
                        <p>Configure tarefas que se repetem automaticamente (diária, semanal, mensal). Ideal para fechamento de caixa.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><Filter size={24}/></div>
                        <h4>Contextos e Projetos</h4>
                        <p>Organize tarefas por área: Campanha de Matrículas, Feira Cultural, Manutenção Predial.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><Users size={24}/></div>
                        <h4>Permissões Granulares</h4>
                        <p>Defina quem pode ver, editar ou excluir tarefas em cada projeto ou categoria.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><Tag size={24}/></div>
                        <h4>Etiquetas e Prioridades</h4>
                        <p>Classifique demandas visualmente com tags e níveis de prioridade para filtro rápido.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><Play size={24}/></div>
                        <h4>Dependências de Tarefas</h4>
                        <p>Bloqueie uma tarefa até que outra seja concluída (ex: Enviar Contrato depende de Aprovar Financeiro).</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><Layout size={24}/></div>
                        <h4>Templates Prontos</h4>
                        <p>Crie modelos de tarefas com checklists padrão para não começar do zero sempre.</p>
                    </PowerCard>
                </PowerGrid>

            </Container>
        </Section>
    )
}