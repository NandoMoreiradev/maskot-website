'use client'

import styled, { keyframes, css } from 'styled-components'
import {
    Building2, Globe, TrendingUp, Eye,
    Users, Share2, MapPin, Store,
    ShieldCheck, ArrowRightLeft
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
            color: #1E40AF; /* Azul Royal */
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

// --- MOCKUP 1: SWITCHER DE ESCOLAS ---
const SwitcherMock = styled.div`
    padding: 40px;
    background: #111827; /* Fundo escuro simulando header */
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`
const Dropdown = styled.div`
    background: white;
    width: 280px;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 25px rgba(0,0,0,0.3);

    .item {
        display: flex; align-items: center; gap: 12px; padding: 12px 15px;
        border-bottom: 1px solid #F3F4F6; cursor: pointer; transition: background 0.2s;
        &:hover { background: #F9FAFB; }
        &:last-child { border: none; }

        &.active { border-left: 3px solid #1E40AF; background: #EFF6FF; }
    }

    .info {
        display: flex; flex-direction: column;
        strong { font-size: 13px; color: #1F2937; }
        span { font-size: 11px; color: #6B7280; }
    }

    .icon { color: #6B7280; }
    .active .icon { color: #1E40AF; }
`

// --- MOCKUP 2: DASHBOARD CONSOLIDADO ---
const ConsolidatedMock = styled.div`
    padding: 20px;
    background: #F3F4F6;

    .kpi-row { display: flex; gap: 15px; margin-bottom: 20px; }
    .kpi {
        flex: 1; background: white; padding: 15px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        small { display: block; font-size: 11px; color: #6B7280; margin-bottom: 5px; text-transform: uppercase; }
        strong { font-size: 20px; color: #111827; }
        .trend { font-size: 10px; color: #10B981; margin-left: 5px; }
    }

    .chart-box {
        background: white; padding: 20px; border-radius: 8px;
        h4 { margin: 0 0 15px 0; font-size: 14px; color: #374151; }

        .bars { display: flex; align-items: flex-end; gap: 15px; height: 120px; padding-bottom: 10px; border-bottom: 1px solid #E5E7EB; }
        .bar-group { flex: 1; display: flex; flex-direction: column; align-items: center; gap: 5px; }
        .bar { width: 30px; background: #3B82F6; border-radius: 4px 4px 0 0; }
        .label { font-size: 10px; color: #6B7280; }
    }
`

// --- MOCKUP 3: GESTÃO DE UNIDADES ---
const UnitsMock = styled.div`
    padding: 20px;
    background: white;

    .header-table {
        display: flex; justify-content: space-between; margin-bottom: 15px; border-bottom: 1px solid #E5E7EB; padding-bottom: 10px;
        strong { font-size: 14px; color: #1F2937; }
        span { font-size: 12px; color: #1E40AF; font-weight: bold; cursor: pointer; }
    }

    .unit-row {
        display: flex; align-items: center; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #F3F4F6;
        &:last-child { border: none; }

        .left { display: flex; gap: 10px; align-items: center; }
        .pin { color: #9CA3AF; }
        .pin.main { color: #F59E0B; }

        .name { font-size: 13px; font-weight: 600; color: #374151; }
        .code { font-size: 11px; color: #9CA3AF; margin-left: 5px; }

        .status {
            font-size: 10px; padding: 2px 8px; border-radius: 10px; background: #DCFCE7; color: #166534; font-weight: bold;
        }
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
        border-color: #1E40AF;
        .icon { background: #1E40AF; color: white; }
    }
    .icon {
        width: 48px; height: 48px; border-radius: 12px;
        background: white; display: flex; align-items: center; justify-content: center;
        color: #1E40AF; margin-bottom: 1.5rem;
        box-shadow: ${props => props.theme.shadows.sm};
    }
    h4 { font-size: 1.25rem; font-weight: 700; margin-bottom: 0.75rem; color: ${props => props.theme.colors.textDark}; }
    p { font-size: 1rem; color: ${props => props.theme.colors.textMedium}; line-height: 1.5; margin: 0; }
`

export default function MultiSchoolDeepDive() {
    return (
        <Section>
            <Container>

                {/* 1. SELETOR E VISÃO CONSOLIDADA */}
                <FeatureRow>
                    <TextContent>
                        <h3>Troque de Unidade<br/>Com Um Clique</h3>
                        <p>
                            Gerencie 2, 10 ou 50 escolas sem fazer login/logout. O seletor global permite navegar entre as filiais instantaneamente ou ativar a <strong>Visão Consolidada</strong> para ver o grupo todo.
                        </p>
                        <ul>
                            <li><ArrowRightLeft size={20}/> <strong>Navegação Fluida:</strong> Acesse os dados de qualquer unidade em segundos.</li>
                            <li><Eye size={20}/> <strong>Visão de Grupo:</strong> Some matrículas, faturamento e leads de todas as escolas.</li>
                            <li><ShieldCheck size={20}/> <strong>Permissões:</strong> Diretores veem só sua escola; Donos veem tudo.</li>
                        </ul>
                    </TextContent>
                    <MockupCard>
                        <MockupHeader><div className="dots"><div></div><div></div><div></div></div></MockupHeader>
                        <SwitcherMock>
                            <Dropdown>
                                <div className="item active">
                                    <Eye size={18} className="icon"/>
                                    <div className="info">
                                        <strong>Visão Consolidada</strong>
                                        <span>Todas as unidades</span>
                                    </div>
                                </div>
                                <div className="item">
                                    <Building2 size={18} className="icon"/>
                                    <div className="info">
                                        <strong>Colégio Maskot - Matriz</strong>
                                        <span>São Paulo • SP</span>
                                    </div>
                                </div>
                                <div className="item">
                                    <Building2 size={18} className="icon"/>
                                    <div className="info">
                                        <strong>Unidade Jardins</strong>
                                        <span>Filial • JD-01</span>
                                    </div>
                                </div>
                                <div className="item">
                                    <Building2 size={18} className="icon"/>
                                    <div className="info">
                                        <strong>Unidade Barra Funda</strong>
                                        <span>Filial • BF-02</span>
                                    </div>
                                </div>
                            </Dropdown>
                        </SwitcherMock>
                    </MockupCard>
                </FeatureRow>

                {/* 2. DASHBOARD CONSOLIDADO */}
                <FeatureRow $reverse>
                    <MockupCard>
                        <MockupHeader><div className="dots"><div></div><div></div><div></div></div></MockupHeader>
                        <ConsolidatedMock>
                            <div className="kpi-row">
                                <div className="kpi">
                                    <small>Total Matrículas (Grupo)</small>
                                    <strong>1.245 <span className="trend">+12%</span></strong>
                                </div>
                                <div className="kpi">
                                    <small>Faturamento Global</small>
                                    <strong>R$ 2.4Mi <span className="trend">+5%</span></strong>
                                </div>
                            </div>
                            <div className="chart-box">
                                <h4>Matrículas por Unidade (Este Mês)</h4>
                                <div className="bars">
                                    <div className="bar-group">
                                        <div className="bar" style={{height: '80%'}}></div>
                                        <span className="label">Matriz</span>
                                    </div>
                                    <div className="bar-group">
                                        <div className="bar" style={{height: '45%'}}></div>
                                        <span className="label">Jardins</span>
                                    </div>
                                    <div className="bar-group">
                                        <div className="bar" style={{height: '60%'}}></div>
                                        <span className="label">Barra</span>
                                    </div>
                                    <div className="bar-group">
                                        <div className="bar" style={{height: '30%'}}></div>
                                        <span className="label">Sul</span>
                                    </div>
                                </div>
                            </div>
                        </ConsolidatedMock>
                    </MockupCard>
                    <TextContent>
                        <h3>Compare Desempenho<br/>Em Tempo Real</h3>
                        <p>
                            Qual unidade está vendendo mais? Qual tem a maior taxa de inadimplência?
                            O dashboard consolidado responde essas perguntas sem você precisar abrir 10 planilhas diferentes.
                        </p>
                        <ul>
                            <li><TrendingUp size={20}/> <strong>Ranking de Vendas:</strong> Descubra as filiais campeãs.</li>
                            <li><Share2 size={20}/> <strong>Centralização Financeira:</strong> Controle o fluxo de caixa do grupo inteiro.</li>
                            <li><Globe size={20}/> <strong>Padronização:</strong> Garanta que todas usem os mesmos processos de venda.</li>
                        </ul>
                    </TextContent>
                </FeatureRow>

                {/* 3. GESTÃO DE UNIDADES */}
                <FeatureRow>
                    <TextContent>
                        <h3>Expanda sua Rede<br/>Sem Complicação</h3>
                        <p>
                            Abriu uma nova unidade? Adicione-a ao painel em minutos. O Maskot foi feito para escalar junto com o seu negócio, seja uma escola de bairro que virou franquia ou um grande grupo educacional.
                        </p>
                        <ul>
                            <li><Store size={20}/> <strong>Cadastro Rápido:</strong> Replique configurações da Matriz para a nova Filial.</li>
                            <li><Users size={20}/> <strong>Equipe Compartilhada:</strong> Um funcionário pode ter acesso a várias unidades (ex: Diretor Pedagógico).</li>
                            <li><MapPin size={20}/> <strong>Organização Geográfica:</strong> Filtre escolas por região ou estado.</li>
                        </ul>
                    </TextContent>
                    <MockupCard>
                        <MockupHeader><div className="dots"><div></div><div></div><div></div></div></MockupHeader>
                        <UnitsMock>
                            <div className="header-table">
                                <strong>Gerenciar Unidades</strong>
                                <span>+ Nova Unidade</span>
                            </div>
                            <div className="unit-row">
                                <div className="left">
                                    <MapPin size={16} className="pin main"/>
                                    <div>
                                        <div className="name">Colégio Maskot <span className="code">(MTZ)</span></div>
                                    </div>
                                </div>
                                <span className="status">Ativa</span>
                            </div>
                            <div className="unit-row">
                                <div className="left">
                                    <MapPin size={16} className="pin"/>
                                    <div>
                                        <div className="name">Unidade Jardins <span className="code">(JD1)</span></div>
                                    </div>
                                </div>
                                <span className="status">Ativa</span>
                            </div>
                            <div className="unit-row">
                                <div className="left">
                                    <MapPin size={16} className="pin"/>
                                    <div>
                                        <div className="name">Unidade Zona Norte <span className="code">(ZN3)</span></div>
                                    </div>
                                </div>
                                <span className="status">Inauguração</span>
                            </div>
                        </UnitsMock>
                    </MockupCard>
                </FeatureRow>

                {/* 4. POWER GRID */}
                <div style={{textAlign: 'center', marginBottom: '3rem'}}>
                    <h3 style={{
                        fontSize: '2rem',
                        fontWeight: 800,
                        color: '#333',
                        fontFamily: 'var(--font-inter)'
                    }}>Arquitetura Enterprise</h3>
                    <p style={{color: '#666', marginTop: '0.5rem'}}>Tecnologia robusta para grandes operações.</p>
                </div>

                <PowerGrid>
                    <PowerCard>
                        <div className="icon"><Users size={24}/></div>
                        <h4>Login Único (SSO)</h4>
                        <p>Seus gestores usam um único e-mail e senha para acessar todas as unidades permitidas.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><Share2 size={24}/></div>
                        <h4>CRM Unificado</h4>
                        <p>Se um aluno estuda na Unidade A e o irmão quer vaga na Unidade B, o sistema reconhece a família.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><TrendingUp size={24}/></div>
                        <h4>Relatórios BI</h4>
                        <p>Exporte dados brutos de todas as unidades para conectar com PowerBI ou Excel.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><ShieldCheck size={24}/></div>
                        <h4>Hierarquia de Acesso</h4>
                        <p>Controle granular: &quot;Secretária&quot; vê só a unidade dela; &quot;Diretor Regional&quot; vê as 5 da região.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><Globe size={24}/></div>
                        <h4>Auditoria Central</h4>
                        <p>Acompanhe logs de atividade de todos os usuários em todas as filiais em um só lugar.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><Store size={24}/></div>
                        <h4>White Label</h4>
                        <p>Para grandes redes, personalizamos o sistema com a sua marca e domínio (consulte plano Enterprise).</p>
                    </PowerCard>
                </PowerGrid>

            </Container>
        </Section>
    )
}