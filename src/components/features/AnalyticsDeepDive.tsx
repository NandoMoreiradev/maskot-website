'use client'

import styled, { keyframes, css } from 'styled-components'
import {
    BarChart2, TrendingUp, Filter, Target,
    Users, PieChart, ArrowUpRight, ArrowDownRight,
    Trophy, Calendar, Download, FileText
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
            color: #0D9488; /* Teal-600 */
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

// --- MOCKUP 1: FUNIL DE VENDAS ---
const FunnelMock = styled.div`
    padding: 30px;
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    
    .stage {
        width: 100%; border-radius: 8px; color: white; padding: 10px; text-align: center; position: relative;
        display: flex; justify-content: space-between; align-items: center; font-size: 13px; font-weight: 600;
        box-shadow: 0 1px 2px rgba(0,0,0,0.05);
    }
    
    .conversion {
        background: #F8FAFC; padding: 4px 10px; border-radius: 12px; font-size: 11px; color: #475569; font-weight: 600;
        border: 1px solid #E2E8F0; margin: -5px 0; z-index: 1; display: flex; align-items: center; gap: 4px;
    }
`

// --- MOCKUP 2: DASHBOARD EXECUTIVO ---
const DashboardMock = styled.div`
    padding: 20px;
    background: #FFFFFF;
    
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px; }
    
    .kpi-card {
        background: #F8FAFC; padding: 15px; border-radius: 10px; border: 1px solid #E2E8F0;
        .label { font-size: 11px; color: #64748B; text-transform: uppercase; font-weight: 600; display: block; margin-bottom: 5px; letter-spacing: 0.05em; }
        .value { font-size: 20px; font-weight: 700; color: #0F172A; display: block; letter-spacing: -0.02em; }
        .trend { 
            font-size: 11px; margin-top: 5px; display: flex; align-items: center; gap: 4px; font-weight: 600;
            &.up { color: #0D9488; }
            &.down { color: #EF4444; }
        }
    }
    
    .chart-area {
        background: #F8FAFC; border-radius: 10px; border: 1px solid #E2E8F0; padding: 20px;
        h4 { margin: 0 0 15px 0; font-size: 14px; color: #0F172A; font-weight: 600; }
        .graph { 
            height: 100px; width: 100%; position: relative;
            border-bottom: 1px solid #E2E8F0; border-left: 1px solid #E2E8F0;
        }
        svg { width: 100%; height: 100%; overflow: visible; }
        path { fill: url(#gradient); stroke: #0D9488; stroke-width: 2; }
    }
`

// --- MOCKUP 3: TEAM RANKING ---
const RankingMock = styled.div`
    padding: 0;
    background: #FFFFFF;
    
    .table-header {
        display: flex; padding: 15px 20px; background: #F8FAFC; border-bottom: 1px solid #E2E8F0;
        font-size: 11px; font-weight: 600; color: #64748B; text-transform: uppercase; letter-spacing: 0.05em;
        div { flex: 1; }
        .right { text-align: right; }
        .center { text-align: center; flex: 0.5; }
    }
    
    .row {
        display: flex; padding: 15px 20px; border-bottom: 1px solid #F1F5F9; align-items: center;
        &:last-child { border: none; }
        div { flex: 1; font-size: 13px; color: #334155; font-weight: 500; }
        .right { text-align: right; font-weight: 600; color: #0F172A; }
        .center { text-align: center; flex: 0.5; font-weight: 600; color: #0D9488; }
        .medal { color: #0D9488; margin-right: 8px; }
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
        border-color: #0D9488;
        .icon { background: #0D9488; color: #FFFFFF; border-color: #0D9488; }
    }
    .icon {
        width: 48px; height: 48px; border-radius: 12px;
        background: #F8FAFC; display: flex; align-items: center; justify-content: center;
        color: #0D9488; margin-bottom: 1.5rem;
        border: 1px solid #E2E8F0;
        transition: all 0.3s ease;
    }
    h4 { font-size: 1.25rem; font-weight: 700; margin-bottom: 0.75rem; color: #0F172A; letter-spacing: -0.02em; }
    p { font-size: 1rem; color: #475569; line-height: 1.5; margin: 0; }
`

export default function AnalyticsDeepDive() {
    return (
        <Section id="recursos">
            <Container>

                {/* 1. FUNIL DE VENDAS */}
                <FeatureRow>
                    <TextContent>
                        <h3>Onde seus alunos desistem?</h3>
                        <p>
                            Não adianta ter muitos leads se eles não viram matrícula.
                            O <strong>Funil de Conversão</strong> mostra exatamente em qual etapa (Visita, Proposta, Contrato) você está perdendo vendas.
                        </p>
                        <ul>
                            <li><Filter size={20}/> <strong>Gargalos Visuais:</strong> Identifique em segundos onde o processo trava.</li>
                            <li><TrendingUp size={20}/> <strong>Taxa de Conversão:</strong> Saiba quantos % dos visitantes viram alunos.</li>
                            <li><Target size={20}/> <strong>Metas:</strong> Compare o funil atual com a meta do mês.</li>
                        </ul>
                    </TextContent>
                    <MockupCard>
                        <MockupHeader><div className="dots"><div></div><div></div><div></div></div></MockupHeader>
                        <FunnelMock>
                            <div className="stage" style={{width: '100%', background: '#334155'}}>
                                <span>Leads (Interessados)</span>
                                <span>245</span>
                            </div>
                            <div className="conversion"><ArrowDownRight size={12}/> 40% agendaram</div>
                            <div className="stage" style={{width: '75%', background: '#0D9488'}}>
                                <span>Visitas Agendadas</span>
                                <span>98</span>
                            </div>
                            <div className="conversion"><ArrowDownRight size={12}/> 75% compareceram</div>
                            <div className="stage" style={{width: '55%', background: '#14B8A6'}}>
                                <span>Visitas Realizadas</span>
                                <span>74</span>
                            </div>
                            <div className="conversion"><ArrowDownRight size={12}/> 60% fecharam</div>
                            <div className="stage" style={{width: '35%', background: '#2DD4BF'}}>
                                <span>Matrículas (Vendas)</span>
                                <span>45</span>
                            </div>
                        </FunnelMock>
                    </MockupCard>
                </FeatureRow>

                {/* 2. DASHBOARD EXECUTIVO */}
                <FeatureRow $reverse>
                    <MockupCard>
                        <MockupHeader><div className="dots"><div></div><div></div><div></div></div></MockupHeader>
                        <DashboardMock>
                            <div className="grid">
                                <div className="kpi-card">
                                    <span className="label">Receita Estimada</span>
                                    <span className="value">R$ 145k</span>
                                    <div className="trend up"><ArrowUpRight size={14}/> +12% vs mês ant.</div>
                                </div>
                                <div className="kpi-card">
                                    <span className="label">Ticket Médio</span>
                                    <span className="value">R$ 1.250</span>
                                    <div className="trend up"><ArrowUpRight size={14}/> +2% vs mês ant.</div>
                                </div>
                            </div>
                            <div className="chart-area">
                                <h4>Evolução de Matrículas (90 dias)</h4>
                                <div className="graph">
                                    <svg viewBox="0 0 100 50" preserveAspectRatio="none">
                                        <defs>
                                            <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                                                <stop offset="0%" stopColor="#0D9488" stopOpacity="0.2"/>
                                                <stop offset="100%" stopColor="#0D9488" stopOpacity="0"/>
                                            </linearGradient>
                                        </defs>
                                        <path d="M0,50 L0,40 Q10,30 20,35 T40,20 T60,25 T80,10 L100,5 L100,50 Z" />
                                    </svg>
                                </div>
                            </div>
                        </DashboardMock>
                    </MockupCard>
                    <TextContent>
                        <h3>Resumo Executivo para Diretores</h3>
                        <p>
                            Não perca tempo consolidando planilhas. O Dashboard Executivo entrega os números que importam para a saúde financeira da escola em tempo real.
                        </p>
                        <ul>
                            <li><BarChart2 size={20}/> <strong>Ticket Médio:</strong> Monitore o valor médio das mensalidades vendidas.</li>
                            <li><Calendar size={20}/> <strong>Comparativo Anual:</strong> &quot;Estamos melhor que no mesmo mês do ano passado?&quot;</li>
                            <li><PieChart size={20}/> <strong>Origem dos Leads:</strong> Saiba se o aluno veio do Google, Instagram ou Indicação.</li>
                        </ul>
                    </TextContent>
                </FeatureRow>

                {/* 3. RANKING DE VENDAS */}
                <FeatureRow>
                    <TextContent>
                        <h3>Quem é seu Melhor Vendedor?</h3>
                        <p>
                            Reconheça talentos e identifique quem precisa de treinamento. A tabela de performance mostra quem converte mais visitas em matrículas.
                        </p>
                        <ul>
                            <li><Trophy size={20}/> <strong>Gamificação:</strong> Estimule a competição saudável na secretaria.</li>
                            <li><Users size={20}/> <strong>Métricas Individuais:</strong> Volume de ligações, visitas agendadas e fechamentos por pessoa.</li>
                            <li><Target size={20}/> <strong>Feedback Real:</strong> Baseie suas reuniões de time em números, não em opiniões.</li>
                        </ul>
                    </TextContent>
                    <MockupCard>
                        <MockupHeader><div className="dots"><div></div><div></div><div></div></div></MockupHeader>
                        <RankingMock>
                            <div className="table-header">
                                <div className="center">#</div>
                                <div>Vendedor</div>
                                <div className="right">Matrículas</div>
                                <div className="right">Conversão</div>
                            </div>
                            <div className="row">
                                <div className="center"><Trophy size={14} className="medal"/> 1</div>
                                <div>Ana Silva</div>
                                <div className="right">28</div>
                                <div className="right" style={{color: '#0D9488'}}>42%</div>
                            </div>
                            <div className="row">
                                <div className="center">2</div>
                                <div>Carlos Souza</div>
                                <div className="right">19</div>
                                <div className="right" style={{color: '#0D9488'}}>35%</div>
                            </div>
                            <div className="row">
                                <div className="center">3</div>
                                <div>Mariana Lima</div>
                                <div className="right">12</div>
                                <div className="right" style={{color: '#0F172A'}}>22%</div>
                            </div>
                        </RankingMock>
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
                    }}>Análises Profundas</h3>
                    <p style={{color: '#475569', marginTop: '0.5rem', fontSize: '1.125rem'}}>Inteligência para cada setor da escola.</p>
                </div>

                <PowerGrid>
                    <PowerCard>
                        <div className="icon"><Target size={24}/></div>
                        <h4>Motivos de Perda</h4>
                        <p>Gráfico que mostra por que os pais não fecharam (Preço? Localização? Pedagógico?).</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><Download size={24}/></div>
                        <h4>Exportação Excel</h4>
                        <p>Baixe todos os relatórios em .CSV ou .XLSX para cruzar dados externamente.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><Filter size={24}/></div>
                        <h4>Filtros Avançados</h4>
                        <p>Analise dados por Turma, Segmento (Infantil/Médio) ou Unidade específica.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><BarChart2 size={24}/></div>
                        <h4>Previsão de Receita</h4>
                        <p>Projeção de faturamento baseada nos contratos fechados e na recorrência.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><Users size={24}/></div>
                        <h4>Origem de Tráfego</h4>
                        <p>Descubra qual campanha de marketing (Facebook, Outdoor) traz mais retorno.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><TrendingUp size={24}/></div>
                        <h4>Tempo de Ciclo</h4>
                        <p>Média de dias que um pai leva desde o primeiro contato até assinar o contrato.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><FileText size={24}/></div>
                        <h4>Relatórios Personalizados</h4>
                        <p>Monte seu próprio relatório: escolha as métricas, aplique filtros e gere o gráfico exato que a sua escola precisa.</p>
                    </PowerCard>
                </PowerGrid>

            </Container>
        </Section>
    )
}