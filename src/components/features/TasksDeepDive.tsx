'use client'

import styled, { keyframes, css } from 'styled-components'
import {
    Layout, Kanban, Calendar, Clock, CheckSquare,
    Play, Pause, Users, Zap, Bell, Repeat,
    List, ArrowRight, Tag, Filter
} from 'lucide-react'

// --- Animations ---
const float = keyframes`
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
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
            color: ${props => props.theme.colors.primary};
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
    .dots { display: flex; gap: 6px; div { width: 8px; height: 8px; border-radius: 50%; background: #ccc; } }
`

// --- MOCKUP 1: KANBAN BOARD ---
const KanbanMock = styled.div`
    padding: 20px;
    background: #F8F9FA;
    height: 350px;
    display: flex;
    gap: 15px;
    overflow: hidden;
`
const Column = styled.div`
    flex: 1;
    background: #F1F5F9;
    border-radius: 8px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    
    .header { 
        font-size: 12px; font-weight: bold; color: #64748B; 
        display: flex; justify-content: space-between; margin-bottom: 5px;
    }
`
const Card = styled.div`
    background: white;
    padding: 12px;
    border-radius: 6px;
    box-shadow: 0 1px 2px rgba(0,0,0,0.05);
    border: 1px solid #E2E8F0;
    
    .tag { font-size: 9px; padding: 2px 6px; border-radius: 4px; display: inline-block; margin-bottom: 6px; font-weight: 600; }
    .tag.sec { background: #DBEAFE; color: #1E40AF; }
    .tag.fin { background: #D1FAE5; color: #065F46; }
    
    h4 { font-size: 13px; margin: 0 0 8px 0; color: #334155; }
    
    .footer { 
        display: flex; justify-content: space-between; align-items: center; 
        border-top: 1px solid #F1F5F9; padding-top: 8px;
    }
    .avatar { width: 20px; height: 20px; border-radius: 50%; background: #CBD5E1; color: white; font-size: 9px; display: flex; alignItems: center; justifyContent: center; }
    .date { font-size: 10px; color: #94A3B8; display: flex; align-items: center; gap: 4px; }
`

// --- MOCKUP 2: TASK DETAIL & TIMETRACKING ---
const TaskDetailMock = styled.div`
    display: flex;
    height: 380px;
    background: white;
`
const MainArea = styled.div`
    flex: 2;
    padding: 20px;
    border-right: 1px solid #E2E8F0;
    
    h2 { font-size: 18px; color: #1E293B; margin-bottom: 20px; }
    
    .tabs { display: flex; gap: 15px; border-bottom: 1px solid #E2E8F0; margin-bottom: 20px; }
    .tab { font-size: 12px; padding-bottom: 8px; color: #64748B; cursor: pointer; }
    .tab.active { color: ${props => props.theme.colors.primary}; border-bottom: 2px solid ${props => props.theme.colors.primary}; font-weight: 600; }
    
    .checklist-item {
        display: flex; gap: 10px; align-items: center; margin-bottom: 12px; font-size: 13px; color: #334155;
        input { accent-color: ${props => props.theme.colors.primary}; }
        &.done { text-decoration: line-through; color: #94A3B8; }
    }
`
const SidebarMock = styled.div`
    flex: 1;
    padding: 20px;
    background: #F8FAFC;
    
    .section { margin-bottom: 20px; }
    .label { font-size: 10px; font-weight: bold; color: #64748B; text-transform: uppercase; margin-bottom: 8px; }
    
    .timer-box {
        background: white; border: 1px solid #E2E8F0; border-radius: 8px; padding: 12px;
        display: flex; align-items: center; justify-content: space-between;
        margin-bottom: 20px;
    }
    .time { font-family: monospace; font-size: 16px; font-weight: bold; color: #1E293B; }
    .play-btn { 
        width: 28px; height: 28px; border-radius: 50%; background: #EF4444; color: white; 
        display: flex; align-items: center; justify-content: center;
    }
`

// --- MOCKUP 3: AUTOMATION BUILDER ---
const AutomationMock = styled.div`
    padding: 30px;
    background: #F8FAFC;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
`
const LogicBlock = styled.div`
    background: white;
    border: 1px solid #E2E8F0;
    border-radius: 12px;
    padding: 20px;
    display: flex;
    align-items: center;
    gap: 15px;
    box-shadow: 0 4px 6px -2px rgba(0,0,0,0.05);
    
    .icon { 
        width: 40px; height: 40px; border-radius: 8px; background: #EFF6FF; 
        color: ${props => props.theme.colors.primary}; display: flex; align-items: center; justify-content: center;
    }
    
    .content {
        h5 { margin: 0 0 4px 0; font-size: 14px; font-weight: bold; color: #1E293B; }
        p { margin: 0; font-size: 12px; color: #64748B; }
    }

    &.action .icon { background: #DCFCE7; color: #16A34A; }
`
const Connector = styled.div`
    height: 20px;
    width: 2px;
    background: #CBD5E1;
    margin-left: 40px;
    position: relative;
    
    &:after {
        content: '▼';
        position: absolute; bottom: -5px; left: -5px; color: #CBD5E1; font-size: 10px;
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
    background: ${props => props.theme.colors.lightGray};
    padding: 2rem;
    border-radius: 16px;
    border: 1px solid #eee;
    transition: all ${props => props.theme.transitions.base};
    &:hover {
        transform: translateY(-5px);
        background: white;
        box-shadow: ${props => props.theme.shadows.lg};
        border-color: ${props => props.theme.colors.primary}40;
    }
    .icon {
        width: 48px; height: 48px; border-radius: 12px;
        background: white; display: flex; align-items: center; justify-content: center;
        color: ${props => props.theme.colors.primary}; margin-bottom: 1.5rem;
        box-shadow: ${props => props.theme.shadows.sm};
    }
    h4 { font-size: 1.25rem; font-weight: 700; margin-bottom: 0.75rem; color: ${props => props.theme.colors.textDark}; }
    p { font-size: 1rem; color: ${props => props.theme.colors.textMedium}; line-height: 1.5; margin: 0; }
`

export default function TasksDeepDive() {
    return (
        <Section>
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
                            <li><Kanban size={20}/> <strong>Quadro Kanban:</strong> Arraste e solte para mover matrículas de etapa.</li>
                            <li><List size={20}/> <strong>Lista Rápida:</strong> Ideal para processar várias pendências em sequência.</li>
                            <li><Calendar size={20}/> <strong>Calendário:</strong> Visualize prazos de entrega e visitas agendadas.</li>
                        </ul>
                    </TextContent>
                    <MockupCard>
                        <MockupHeader><div className="dots"><div></div><div></div><div></div></div></MockupHeader>
                        <KanbanMock>
                            <Column>
                                <div className="header">A FAZER <span>3</span></div>
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
                                        <div className="date" style={{color: 'orange'}}><Clock size={10}/> Atrasado</div>
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
                                <h2>Preparar Contrato 2025 (João Silva)</h2>
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
                                    <div style={{display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px'}}>
                                        <div style={{width: '24px', height: '24px', borderRadius: '50%', background: '#3B82F6', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px'}}>M</div>
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
                            (ex: "Passo a passo da Matrícula") e o cronômetro (Time Tracking) para medir a produtividade.
                        </p>
                        <ul>
                            <li><CheckSquare size={20}/> <strong>Checklists:</strong> Quebre tarefas grandes em passos menores.</li>
                            <li><Clock size={20}/> <strong>Time Tracking:</strong> Dê "Play" na tarefa e saiba quanto tempo sua equipe gasta.</li>
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
                            <li><Zap size={20}/> <strong>Gatilhos:</strong> "Quando o status mudar", "Quando a prioridade for Alta".</li>
                            <li><Bell size={20}/> <strong>Ações:</strong> Enviar e-mail, notificar gestor, criar subtarefa.</li>
                            <li><Repeat size={20}/> <strong>Produtividade:</strong> Garanta que nenhum processo pare por falta de aviso.</li>
                        </ul>
                    </TextContent>
                    <MockupCard>
                        <MockupHeader><div className="dots"><div></div><div></div><div></div></div></MockupHeader>
                        <AutomationMock>
                            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
                                <span style={{fontWeight: 'bold', fontSize: '14px', color: '#334155'}}>Regra: Notificar Conclusão</span>
                                <div style={{width: '30px', height: '16px', background: '#DCFCE7', borderRadius: '10px', border: '1px solid #BBF7D0'}}></div>
                            </div>

                            <LogicBlock>
                                <div className="icon"><Layout size={20}/></div>
                                <div className="content">
                                    <h5>QUANDO Status Mudar</h5>
                                    <p>De "Em Andamento" para <strong>"Concluído"</strong></p>
                                </div>
                            </LogicBlock>

                            <Connector />

                            <LogicBlock className="action">
                                <div className="icon"><Bell size={20}/></div>
                                <div className="content">
                                    <h5>ENTÃO Enviar E-mail</h5>
                                    <p>Para: <strong>Diretoria Pedagógica</strong></p>
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
                        color: '#333',
                        fontFamily: 'var(--font-inter)'
                    }}>Muito Mais que um To-Do List</h3>
                    <p style={{color: '#666', marginTop: '0.5rem'}}>Recursos avançados para gestão escolar profissional.</p>
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
                        <p>Organize tarefas por área: "Campanha de Matrículas", "Festa Junina", "Manutenção Predial".</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><Users size={24}/></div>
                        <h4>Permissões Granulares</h4>
                        <p>Defina quem pode ver, editar ou excluir tarefas em cada projeto ou categoria.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><Tag size={24}/></div>
                        <h4>Etiquetas Coloridas</h4>
                        <p>Classifique demandas visualmente com tags personalizadas para filtro rápido.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><Play size={24}/></div>
                        <h4>Dependências</h4>
                        <p>Bloqueie uma tarefa até que outra seja concluída (ex: "Enviar Contrato" depende de "Aprovar Financeiro").</p>
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