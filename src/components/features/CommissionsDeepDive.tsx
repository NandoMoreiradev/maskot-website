'use client'

import styled, { keyframes, css } from 'styled-components'
import {
    Handshake, Receipt, ShieldAlert, TrendingUp,
    User, CheckCircle, Clock, FileText, Settings,
    Banknote, XCircle
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
            color: #CA8A04; /* Dourado */
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

// --- MOCKUP 1: DASHBOARD DE COMISSÕES ---
const DashboardMock = styled.div`
    padding: 20px;
    background: #F8F9FA;
    
    .summary-bar {
        display: flex; justify-content: flex-end; gap: 15px; margin-bottom: 15px;
        .card { 
            background: #FEFCE8; border: 1px solid #FEF08A; padding: 8px 15px; border-radius: 8px; 
            display: flex; gap: 10px; align-items: center; font-size: 13px; color: #854D0E;
        }
        strong { font-size: 14px; color: #713F12; }
    }

    .table {
        background: white; border-radius: 8px; border: 1px solid #E5E7EB; overflow: hidden;
        .row { display: flex; padding: 12px; border-bottom: 1px solid #F3F4F6; align-items: center; font-size: 13px; }
        .head { background: #F9FAFB; font-weight: bold; color: #4B5563; font-size: 11px; text-transform: uppercase; }
        .cell { flex: 1; }
        .cell.right { text-align: right; }
        .badge { 
            padding: 4px 8px; border-radius: 12px; font-size: 10px; font-weight: bold; display: inline-block;
            &.pending { background: #FEF3C7; color: #D97706; }
            &.confirmed { background: #DBEAFE; color: #1E40AF; }
            &.paid { background: #DCFCE7; color: #166534; }
        }
    }
`

// --- MOCKUP 2: RECIBO DE PAGAMENTO ---
const ReceiptMock = styled.div`
    padding: 30px;
    background: #F3F4F6;
    display: flex;
    justify-content: center;

    .paper {
        background: white; width: 80%; padding: 20px; border-radius: 4px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        font-family: 'Courier New', monospace; position: relative;
        
        &:before {
            content: ''; position: absolute; top: 0; left: 0; right: 0; height: 5px;
            background: repeating-linear-gradient(45deg, #e5e7eb, #e5e7eb 10px, white 10px, white 20px);
        }
    }
    
    .header { text-align: center; border-bottom: 2px dashed #E5E7EB; padding-bottom: 15px; margin-bottom: 15px; }
    .row { display: flex; justify-content: space-between; margin-bottom: 10px; font-size: 12px; }
    .label { color: #6B7280; }
    .val { font-weight: bold; }
    
    .signatures { 
        margin-top: 30px; border-top: 2px dashed #E5E7EB; padding-top: 20px;
        display: flex; gap: 20px;
    }
    .sign-box { flex: 1; text-align: center; }
    .line { border-bottom: 1px solid #333; margin-bottom: 5px; height: 20px; }
    .small { font-size: 9px; color: #9CA3AF; }
`

// --- MOCKUP 3: SETTINGS (DTO) ---
const SettingsMock = styled.div`
    padding: 30px;
    background: white;
    
    .toggle-row {
        display: flex; justify-content: space-between; align-items: center; padding: 15px 0; border-bottom: 1px solid #F3F4F6;
        &:last-child { border: none; }
    }
    .toggle-info h4 { margin: 0; font-size: 14px; color: #1F2937; }
    .toggle-info p { margin: 4px 0 0; font-size: 12px; color: #6B7280; }
    
    .switch {
        width: 44px; height: 24px; background: #E5E7EB; border-radius: 20px; position: relative;
        &.active { background: #10B981; }
        &:after {
            content: ''; position: absolute; top: 2px; left: 2px; width: 20px; height: 20px; background: white; border-radius: 50%;
            transition: all 0.3s;
        }
        &.active:after { left: 22px; }
    }
    
    .input-group {
        margin-top: 10px;
        label { display: block; font-size: 11px; color: #6B7280; margin-bottom: 4px; }
        input { width: 100%; border: 1px solid #D1D5DB; padding: 8px; border-radius: 6px; font-size: 13px; }
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
        border-color: #CA8A04;
        .icon { background: #CA8A04; color: white; }
    }
    .icon {
        width: 48px; height: 48px; border-radius: 12px;
        background: white; display: flex; align-items: center; justify-content: center;
        color: #CA8A04; margin-bottom: 1.5rem;
        box-shadow: ${props => props.theme.shadows.sm};
    }
    h4 { font-size: 1.25rem; font-weight: 700; margin-bottom: 0.75rem; color: ${props => props.theme.colors.textDark}; }
    p { font-size: 1rem; color: ${props => props.theme.colors.textMedium}; line-height: 1.5; margin: 0; }
`

export default function CommissionsDeepDive() {
    return (
        <Section>
            <Container>

                {/* 1. PAINEL DE GESTÃO */}
                <FeatureRow>
                    <TextContent>
                        <h3>Controle Absoluto de <br/>Quem Vendeu o Quê</h3>
                        <p>
                            Chega de dúvidas no final do mês. O sistema rastreia cada matrícula,
                            calcula a comissão automaticamente e exibe tudo em um painel claro para gestores e vendedores.
                        </p>
                        <ul>
                            <li><TrendingUp size={20}/> <strong>Cálculo Automático:</strong> Baseado em % ou valor fixo.</li>
                            <li><Clock size={20}/> <strong>Status da Comissão:</strong> Pendente, Confirmada ou Paga.</li>
                            <li><User size={20}/> <strong>Visão por Vendedor:</strong> Filtre extratos individuais com um clique.</li>
                        </ul>
                    </TextContent>
                    <MockupCard>
                        <MockupHeader><div className="dots"><div></div><div></div><div></div></div></MockupHeader>
                        <DashboardMock>
                            <div className="summary-bar">
                                <div className="card">
                                    <span>Total Vendas:</span> <strong>R$ 45.200</strong>
                                </div>
                                <div className="card" style={{background: '#F0FDF4', borderColor: '#BBF7D0', color: '#166534'}}>
                                    <span>A Pagar:</span> <strong style={{color: '#15803D'}}>R$ 2.350</strong>
                                </div>
                            </div>
                            <div className="table">
                                <div className="row head">
                                    <div className="cell">Data</div>
                                    <div className="cell">Vendedor</div>
                                    <div className="cell">Aluno</div>
                                    <div className="cell right">Comissão</div>
                                    <div className="cell right">Status</div>
                                </div>
                                <div className="row">
                                    <div className="cell">Hoje</div>
                                    <div className="cell">Ana Silva</div>
                                    <div className="cell">Pedro H.</div>
                                    <div className="cell right">R$ 120,00</div>
                                    <div className="cell right"><span className="badge pending">Pendente</span></div>
                                </div>
                                <div className="row">
                                    <div className="cell">Ontem</div>
                                    <div className="cell">Carlos B.</div>
                                    <div className="cell">Maria J.</div>
                                    <div className="cell right">R$ 150,00</div>
                                    <div className="cell right"><span className="badge confirmed">Confirmada</span></div>
                                </div>
                                <div className="row">
                                    <div className="cell">12/Out</div>
                                    <div className="cell">Ana Silva</div>
                                    <div className="cell">Lucas T.</div>
                                    <div className="cell right">R$ 100,00</div>
                                    <div className="cell right"><span className="badge paid">Paga</span></div>
                                </div>
                            </div>
                        </DashboardMock>
                    </MockupCard>
                </FeatureRow>

                {/* 2. RECIBOS FORMAIS */}
                <FeatureRow $reverse>
                    <MockupCard>
                        <MockupHeader><div className="dots"><div></div><div></div><div></div></div></MockupHeader>
                        <ReceiptMock>
                            <div className="paper">
                                <div className="header">
                                    <strong>RECIBO DE PAGAMENTO</strong><br/>
                                    <span style={{fontSize: '10px', color: '#666'}}>Escola Maskot - Ref: #8291</span>
                                </div>
                                <div className="row">
                                    <span className="label">Vendedor:</span>
                                    <span className="val">Carlos Barreto</span>
                                </div>
                                <div className="row">
                                    <span className="label">Aluno:</span>
                                    <span className="val">Maria Joana (1º Ano)</span>
                                </div>
                                <div className="row">
                                    <span className="label">Valor Venda:</span>
                                    <span className="val">R$ 1.500,00</span>
                                </div>
                                <div className="row">
                                    <span className="label">Comissão (10%):</span>
                                    <span className="val">R$ 150,00</span>
                                </div>
                                <div className="signatures">
                                    <div className="sign-box">
                                        <div className="line"></div>
                                        <span className="small">Assinatura Vendedor</span>
                                    </div>
                                    <div className="sign-box">
                                        <div className="line"></div>
                                        <span className="small">Assinatura Gestor</span>
                                    </div>
                                </div>
                            </div>
                        </ReceiptMock>
                    </MockupCard>
                    <TextContent>
                        <h3>Formalize o Pagamento<br/>Gere Recibos em 1 Clique</h3>
                        <p>
                            Evite o "disse-me-disse". Ao pagar uma comissão, o Maskot gera automaticamente
                            um comprovante detalhado com campos para assinatura.
                        </p>
                        <ul>
                            <li><Receipt size={20}/> <strong>Documento Oficial:</strong> Histórico seguro para ambas as partes.</li>
                            <li><Handshake size={20}/> <strong>Transparência:</strong> Detalha qual matrícula gerou qual valor.</li>
                            <li><FileText size={20}/> <strong>PDF Pronto:</strong> Imprima ou salve digitalmente para o RH.</li>
                        </ul>
                    </TextContent>
                </FeatureRow>

                {/* 3. CLAWBACK & REGRAS */}
                <FeatureRow>
                    <TextContent>
                        <h3>Proteção Financeira:<br/>O Famoso "Clawback"</h3>
                        <p>
                            E se o aluno cancelar a matrícula na primeira semana? O Maskot protege seu caixa com o
                            <strong> Estorno Automático</strong>.
                        </p>
                        <ul>
                            <li><ShieldAlert size={20}/> <strong>Estorno Inteligente:</strong> Defina um período (ex: 30 dias). Se o aluno sair, a comissão é anulada.</li>
                            <li><Settings size={20}/> <strong>Regras Flexíveis:</strong> Configure valores fixos (R$ 100 por aluno) ou porcentagem (50% da 1ª mensalidade).</li>
                            <li><XCircle size={20}/> <strong>Cancelamentos:</strong> O sistema alerta quando uma venda comissionada é cancelada.</li>
                        </ul>
                    </TextContent>
                    <MockupCard>
                        <MockupHeader><div className="dots"><div></div><div></div><div></div></div></MockupHeader>
                        <SettingsMock>
                            <div className="toggle-row">
                                <div className="toggle-info">
                                    <h4>Sistema de Comissionamento</h4>
                                    <p>Ativar módulo para esta unidade</p>
                                </div>
                                <div className="switch active"></div>
                            </div>

                            <div className="toggle-row">
                                <div className="toggle-info">
                                    <h4>Tipo de Cálculo</h4>
                                    <div style={{display: 'flex', gap: '10px', marginTop: '5px'}}>
                                        <span style={{padding: '4px 8px', background: '#E5E7EB', borderRadius: '4px', fontSize: '11px'}}>Valor Fixo</span>
                                        <span style={{padding: '4px 8px', background: '#DBEAFE', color: '#1E40AF', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold'}}>Porcentagem</span>
                                    </div>
                                </div>
                            </div>

                            <div className="toggle-row" style={{alignItems: 'flex-start'}}>
                                <div className="toggle-info">
                                    <h4>Proteção de Estorno (Clawback)</h4>
                                    <p>Cancelar comissão se aluno sair em breve</p>
                                    <div className="input-group">
                                        <label>Período de Carência (Dias)</label>
                                        <input type="number" defaultValue="30" />
                                    </div>
                                </div>
                                <div className="switch active"></div>
                            </div>
                        </SettingsMock>
                    </MockupCard>
                </FeatureRow>

                {/* 4. POWER GRID */}
                <div style={{textAlign: 'center', marginBottom: '3rem'}}>
                    <h3 style={{
                        fontSize: '2rem',
                        fontWeight: 800,
                        color: '#333',
                        fontFamily: 'var(--font-inter)'
                    }}>Vantagens para Gestão Comercial</h3>
                    <p style={{color: '#666', marginTop: '0.5rem'}}>Ferramentas que profissionalizam seu time de vendas.</p>
                </div>

                <PowerGrid>
                    <PowerCard>
                        <div className="icon"><CheckCircle size={24}/></div>
                        <h4>Validação de Vendas</h4>
                        <p>A comissão só entra como "Confirmada" após a matrícula ser efetivada e paga.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><Banknote size={24}/></div>
                        <h4>Visão Consolidada</h4>
                        <p>Tem várias unidades? Veja quanto pagar de comissão em todas as escolas em uma única tela.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><TrendingUp size={24}/></div>
                        <h4>Motivação do Time</h4>
                        <p>Vendedores acompanham seus ganhos em tempo real, aumentando o engajamento na meta.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><Settings size={24}/></div>
                        <h4>Regras por Unidade</h4>
                        <p>Defina comissões diferentes para o Berçário (valor maior) e Ensino Médio, se necessário.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><Clock size={24}/></div>
                        <h4>Histórico Completo</h4>
                        <p>Acesse o extrato de meses anteriores para auditoria e controle financeiro.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><ShieldAlert size={24}/></div>
                        <h4>Anti-Fraude</h4>
                        <p>O sistema impede pagamentos duplicados e alerta sobre inconsistências na venda.</p>
                    </PowerCard>
                </PowerGrid>

            </Container>
        </Section>
    )
}