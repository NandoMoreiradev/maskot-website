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
            color: #059669; /* Emerald */
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

// --- MOCKUP 1: DASHBOARD DE COMISSÕES ---
const DashboardMock = styled.div`
    padding: 20px;
    background: #FFFFFF;
    
    .summary-bar {
        display: flex;
        justify-content: flex-end;
        gap: 12px;
        margin-bottom: 15px;

        .card { 
            background: #F8FAFC;
            border: 1px solid #E2E8F0;
            padding: 8px 14px;
            border-radius: 8px; 
            display: flex;
            gap: 8px;
            align-items: center;
            font-size: 12px;
            color: #64748B;
            font-weight: 600;

            strong {
                font-size: 13px;
                color: #0F172A;
                font-weight: 800;
            }

            &.highlight {
                background: #ECFDF5;
                border-color: #A7F3D0;
                color: #065F46;

                strong {
                    color: #059669;
                }
            }
        }
    }

    .table {
        background: #FFFFFF;
        border-radius: 10px;
        border: 1px solid #E2E8F0;
        overflow: hidden;

        .row {
            display: flex;
            padding: 12px 14px;
            border-bottom: 1px solid #F1F5F9;
            align-items: center;
            font-size: 13px;
            color: #0F172A;
            font-weight: 500;

            &:last-child {
                border-bottom: none;
            }
        }

        .head {
            background: #F8FAFC;
            font-weight: 700;
            color: #64748B;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.04em;
            border-bottom: 1px solid #E2E8F0;
        }

        .cell { flex: 1; }
        .cell.right { text-align: right; }

        .badge { 
            padding: 3px 8px;
            border-radius: 100px;
            font-size: 10px;
            font-weight: 700;
            display: inline-block;

            &.pending {
                background: #FFFBEB;
                color: #D97706;
                border: 1px solid #FDE68A;
            }
            &.confirmed {
                background: #ECFDF5;
                color: #059669;
                border: 1px solid #A7F3D0;
            }
            &.paid {
                background: #F1F5F9;
                color: #0F172A;
                border: 1px solid #E2E8F0;
            }
        }
    }
`

// --- MOCKUP 2: RECIBO DE PAGAMENTO ---
const ReceiptMock = styled.div`
    padding: 25px;
    background: #F8FAFC;
    display: flex;
    justify-content: center;

    .paper {
        background: #FFFFFF;
        width: 85%;
        padding: 24px;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.03);
        border: 1px solid #E2E8F0;
        font-family: inherit;
        position: relative;
    }
    
    .header {
        text-align: center;
        border-bottom: 1px dashed #CBD5E1;
        padding-bottom: 15px;
        margin-bottom: 15px;

        strong {
            color: #0F172A;
            font-size: 14px;
            letter-spacing: 0.04em;
        }
    }

    .row {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        font-size: 12px;
    }

    .label { color: #64748B; }
    .val { font-weight: 700; color: #0F172A; }
    
    .signatures { 
        margin-top: 25px;
        border-top: 1px dashed #CBD5E1;
        padding-top: 20px;
        display: flex;
        gap: 20px;
    }

    .sign-box { flex: 1; text-align: center; }
    .line { border-bottom: 1px solid #94A3B8; margin-bottom: 6px; height: 16px; }
    .small { font-size: 10px; color: #64748B; font-weight: 600; }
`

// --- MOCKUP 3: SETTINGS (DTO) ---
const SettingsMock = styled.div`
    padding: 25px;
    background: #FFFFFF;
    
    .toggle-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 0;
        border-bottom: 1px solid #F1F5F9;

        &:last-child { border: none; }
    }

    .toggle-info h4 { margin: 0; font-size: 13px; font-weight: 700; color: #0F172A; }
    .toggle-info p { margin: 3px 0 0; font-size: 12px; color: #64748B; }
    
    .switch {
        width: 44px;
        height: 24px;
        background: #E2E8F0;
        border-radius: 20px;
        position: relative;
        cursor: pointer;

        &.active { background: #059669; }

        &:after {
            content: '';
            position: absolute;
            top: 2px;
            left: 2px;
            width: 20px;
            height: 20px;
            background: white;
            border-radius: 50%;
            transition: all 0.3s;
        }

        &.active:after { left: 22px; }
    }
    
    .input-group {
        margin-top: 10px;
        label { display: block; font-size: 11px; font-weight: 700; color: #64748B; margin-bottom: 4px; text-transform: uppercase; letter-spacing: 0.04em; }
        input {
            width: 100%;
            border: 1px solid #E2E8F0;
            background: #F8FAFC;
            padding: 8px 12px;
            border-radius: 8px;
            font-size: 13px;
            color: #0F172A;
            font-weight: 600;
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
    background: #FFFFFF;
    padding: 2rem;
    border-radius: 16px;
    border: 1px solid #E2E8F0;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
        border-color: #059669;
        .icon {
            background: #059669;
            color: #FFFFFF;
            border-color: #059669;
        }
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
        color: #059669;
        margin-bottom: 1.5rem;
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

export default function CommissionsDeepDive() {
    return (
        <Section id="recursos">
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
                                <div className="card highlight">
                                    <span>A Pagar:</span> <strong>R$ 2.350</strong>
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
                                    <span style={{fontSize: '11px', color: '#64748B'}}>Maskot Edu • Ref: #8291</span>
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
                                    <span className="val" style={{color: '#059669'}}>R$ 150,00</span>
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
                            Evite o disse-me-disse. Ao pagar uma comissão, o Maskot gera automaticamente
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
                        <h3>Proteção Financeira:<br/>O Famoso Clawback</h3>
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
                                    <div style={{display: 'flex', gap: '8px', marginTop: '6px'}}>
                                        <span style={{padding: '4px 10px', background: '#F1F5F9', color: '#475569', borderRadius: '6px', fontSize: '11px', fontWeight: 600}}>Valor Fixo</span>
                                        <span style={{padding: '4px 10px', background: '#ECFDF5', color: '#059669', borderRadius: '6px', fontSize: '11px', fontWeight: 700, border: '1px solid #A7F3D0'}}>Porcentagem</span>
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
                        color: '#0F172A',
                        fontFamily: 'var(--font-inter)',
                        letterSpacing: '-0.02em'
                    }}>Vantagens para Gestão Comercial</h3>
                    <p style={{color: '#475569', marginTop: '0.5rem', fontSize: '1.125rem'}}>Ferramentas que profissionalizam seu time de vendas.</p>
                </div>

                <PowerGrid>
                    <PowerCard>
                        <div className="icon"><CheckCircle size={24}/></div>
                        <h4>Validação de Vendas</h4>
                        <p>A comissão só entra como Confirmada após a matrícula ser efetivada e paga.</p>
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