'use client'

import styled, { keyframes } from 'styled-components'
import { ArrowRight, BadgeDollarSign, Receipt, CheckCircle2, ShieldCheck, TrendingUp, Users, FileText, Banknote } from 'lucide-react'
import { Container as BaseContainer } from '@/components/ui/Container'
import AuroraBackground from '@/components/AuroraBackground'

const float = keyframes`
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
`

const floatSlow = keyframes`
    0% { transform: translateY(0px) rotateZ(-1deg); }
    50% { transform: translateY(-12px) rotateZ(1deg); }
    100% { transform: translateY(0px) rotateZ(-1deg); }
`

const fadeUp = keyframes`
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
`

const pulse = keyframes`
    0% { transform: scale(0.95); opacity: 0.8; }
    50% { transform: scale(1.1); opacity: 1; }
    100% { transform: scale(0.95); opacity: 0.8; }
`

const HeroSection = styled.section`
    min-height: 90vh;
    display: flex;
    align-items: center;
    background-color: transparent;
    position: relative;
    padding-top: 10rem;
    padding-bottom: 6rem;
    z-index: 1;
    overflow: hidden;
`

const Container = styled(BaseContainer)`
    position: relative;
    z-index: 2;
`

const HeroContent = styled.div`
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 4rem;
    align-items: center;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
        gap: 4rem;
        text-align: center;
    }
`

const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    @media (max-width: 1024px) {
        align-items: center;
    }
`

const Tag = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    background: transparent;
    color: #475569;
    padding: 0.35rem 0.85rem;
    border-radius: 100px;
    font-weight: 600;
    font-size: 0.85rem;
    border: 1px solid #E2E8F0;
    animation: ${fadeUp} 0.8s ease-out forwards;
    width: fit-content;
    box-shadow: 0 1px 2px rgba(0,0,0,0.02);

    svg {
        color: #059669;
        width: 14px;
        height: 14px;
    }
`

const MainHeading = styled.h1`
    font-size: 3rem;
    font-weight: 800;
    line-height: 1.15;
    color: #0F172A;
    letter-spacing: -0.02em;
    animation: ${fadeUp} 0.8s ease-out 0.1s forwards;
    opacity: 0;

    strong {
        color: #059669;
    }

    @media (max-width: 768px) {
        font-size: 2.25rem;
    }
`

const Subtitle = styled.p`
    font-size: 1.1rem;
    line-height: 1.6;
    color: #475569;
    max-width: 530px;
    animation: ${fadeUp} 0.8s ease-out 0.2s forwards;
    opacity: 0;

    @media (max-width: 1024px) {
        margin: 0 auto;
    }
`

const ButtonGroup = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 0.5rem;
    animation: ${fadeUp} 0.8s ease-out 0.3s forwards;
    opacity: 0;

    @media (max-width: 640px) {
        flex-direction: column;
        width: 100%;
    }
`

const CTAButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.85rem 2rem;
    border-radius: 100px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    border: none;
    background: #059669;
    color: white;
    box-shadow: 0 4px 14px 0 rgba(5, 150, 105, 0.3);
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(5, 150, 105, 0.45);
        background: #047857;
    }
`

const SecondaryButton = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.85rem 2rem;
    border-radius: 100px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    background: #FFFFFF;
    color: #0F172A;
    border: 1px solid #E2E8F0;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.02);
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
        background: #F8FAFC;
        border-color: #CBD5E1;
        transform: translateY(-2px);
    }
`

const TrustBadges = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-top: 1.5rem;
    animation: ${fadeUp} 0.8s ease-out 0.4s forwards;
    opacity: 0;

    div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.85rem;
        color: #64748B;
        font-weight: 600;

        svg {
            color: #059669;
            width: 18px;
            height: 18px;
        }
    }

    @media (max-width: 1024px) {
        justify-content: center;
    }
`

const Visual = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 1000px;
    animation: ${fadeUp} 1s ease-out 0.2s forwards;
    opacity: 0;
`

const CommissionCard = styled.div`
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 20px;
    width: 100%;
    max-width: 440px;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.08);
    transform: rotateY(-4deg) rotateX(2deg);
    animation: ${floatSlow} 8s ease-in-out infinite;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    &:hover {
        transform: rotateY(0deg) rotateX(0deg);
        transition: transform 0.5s ease;
    }
`

const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #F1F5F9;
    padding-bottom: 1rem;

    .info {
        display: flex;
        align-items: center;
        gap: 0.75rem;

        .icon-box {
            width: 38px;
            height: 38px;
            border-radius: 10px;
            background: #ECFDF5;
            color: #059669;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #D1FAE5;
        }

        .title {
            font-weight: 700;
            color: #0F172A;
            font-size: 0.95rem;
        }

        .subtitle {
            font-size: 0.75rem;
            color: #64748B;
        }
    }

    .badge {
        display: flex;
        align-items: center;
        gap: 0.35rem;
        font-size: 0.75rem;
        font-weight: 700;
        color: #166534;
        background: #F0FDF4;
        border: 1px solid #DCFCE7;
        padding: 0.25rem 0.6rem;
        border-radius: 100px;

        .dot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #22C55E;
            animation: ${pulse} 2s infinite ease-in-out;
        }
    }
`

const MetricsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;

    .metric {
        background: #F8FAFC;
        border: 1px solid #E2E8F0;
        border-radius: 10px;
        padding: 0.75rem 1rem;

        .label {
            font-size: 0.7rem;
            color: #64748B;
            text-transform: uppercase;
            font-weight: 700;
            letter-spacing: 0.04em;
        }

        .val {
            font-size: 1.25rem;
            font-weight: 800;
            color: #0F172A;
            margin-top: 0.2rem;
            letter-spacing: -0.02em;
        }

        &.highlight .val {
            color: #059669;
        }
    }
`

const TablePreview = styled.div`
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 12px;
    overflow: hidden;

    .table-head {
        display: flex;
        justify-content: space-between;
        background: #F8FAFC;
        padding: 0.6rem 0.85rem;
        font-size: 0.7rem;
        font-weight: 700;
        color: #64748B;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        border-bottom: 1px solid #E2E8F0;
    }

    .table-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.65rem 0.85rem;
        border-bottom: 1px solid #F1F5F9;
        font-size: 0.8rem;

        &:last-child {
            border-bottom: none;
        }

        .rep-info {
            display: flex;
            flex-direction: column;

            .rep-name {
                font-weight: 700;
                color: #0F172A;
            }

            .student {
                font-size: 0.7rem;
                color: #64748B;
            }
        }

        .rep-amount {
            text-align: right;

            .value {
                font-weight: 700;
                color: #059669;
            }

            .status {
                font-size: 0.65rem;
                font-weight: 700;
                color: #166534;
                background: #DCFCE7;
                padding: 1px 6px;
                border-radius: 4px;
                display: inline-block;
                margin-top: 2px;
            }
        }
    }
`

const FloatingBadgeTop = styled.div`
    position: absolute;
    top: -15px;
    right: -10px;
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 12px;
    padding: 0.6rem 0.9rem;
    box-shadow: 0 10px 25px rgba(0,0,0,0.06);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.8rem;
    font-weight: 700;
    color: #0F172A;
    animation: ${float} 6s ease-in-out infinite;
    z-index: 10;

    .icon {
        width: 24px;
        height: 24px;
        border-radius: 6px;
        background: #ECFDF5;
        color: #059669;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 640px) {
        display: none;
    }
`

const FloatingBadgeBottom = styled.div`
    position: absolute;
    bottom: -20px;
    left: -15px;
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 12px;
    padding: 0.65rem 1rem;
    box-shadow: 0 10px 25px rgba(0,0,0,0.06);
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-size: 0.8rem;
    font-weight: 700;
    color: #0F172A;
    animation: ${float} 7s ease-in-out 1s infinite;
    z-index: 10;

    .icon {
        width: 26px;
        height: 26px;
        border-radius: 6px;
        background: #F0FDF4;
        color: #16A34A;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 640px) {
        display: none;
    }
`

export default function CommissionsHero() {
    return (
        <HeroSection>
            <AuroraBackground />
            <Container>
                <HeroContent>
                    <TextContent>
                        <Tag>
                            <BadgeDollarSign /> Gestão de Comissões Comerciais
                        </Tag>
                        <MainHeading>
                            Fim das Planilhas de Comissão. <strong>Transparência e Controle Total.</strong>
                        </MainHeading>
                        <Subtitle>
                            Automatize o cálculo de comissões do time comercial e da secretaria. Gere recibos formais em um clique, configure regras de estorno (clawback) e elimine erros no fechamento do mês.
                        </Subtitle>
                        <ButtonGroup>
                            <CTAButton onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}>
                                Falar com um Consultor <ArrowRight size={18} />
                            </CTAButton>
                            <SecondaryButton href="#recursos">
                                Conhecer Recursos
                            </SecondaryButton>
                        </ButtonGroup>
                        <TrustBadges>
                            <div><CheckCircle2 /> Cálculo Automático no Fechamento</div>
                            <div><CheckCircle2 /> Emissão de Recibos em PDF</div>
                            <div><CheckCircle2 /> Proteção contra Cancelamentos</div>
                        </TrustBadges>
                    </TextContent>

                    <Visual>
                        <FloatingBadgeTop>
                            <div className="icon"><Receipt size={14} /></div>
                            <span>Recibos Automáticos com Assinatura</span>
                        </FloatingBadgeTop>

                        <CommissionCard>
                            <CardHeader>
                                <div className="info">
                                    <div className="icon-box"><BadgeDollarSign size={18} /></div>
                                    <div>
                                        <div className="title">Extrato Comercial Consolidado</div>
                                        <div className="subtitle">Mês de Fechamento • Outubro</div>
                                    </div>
                                </div>
                                <div className="badge">
                                    <div className="dot" />
                                    Ativo
                                </div>
                            </CardHeader>

                            <MetricsGrid>
                                <div className="metric">
                                    <div className="label">Total Vendas</div>
                                    <div className="val">R$ 45.200</div>
                                </div>
                                <div className="metric highlight">
                                    <div className="label">A Pagar</div>
                                    <div className="val">R$ 2.350</div>
                                </div>
                            </MetricsGrid>

                            <TablePreview>
                                <div className="table-head">
                                    <span>Vendedor / Matrícula</span>
                                    <span>Comissão</span>
                                </div>
                                <div className="table-row">
                                    <div className="rep-info">
                                        <span className="rep-name">Ana Silva</span>
                                        <span className="student">Pedro H. • Ensino Médio</span>
                                    </div>
                                    <div className="rep-amount">
                                        <div className="value">R$ 150,00</div>
                                        <span className="status">Confirmada</span>
                                    </div>
                                </div>
                                <div className="table-row">
                                    <div className="rep-info">
                                        <span className="rep-name">Carlos Barreto</span>
                                        <span className="student">Maria J. • 1º Ano</span>
                                    </div>
                                    <div className="rep-amount">
                                        <div className="value">R$ 120,00</div>
                                        <span className="status">Confirmada</span>
                                    </div>
                                </div>
                                <div className="table-row">
                                    <div className="rep-info">
                                        <span className="rep-name">Mariana Lima</span>
                                        <span className="student">Lucas T. • Ed. Infantil</span>
                                    </div>
                                    <div className="rep-amount">
                                        <div className="value">R$ 100,00</div>
                                        <span className="status">Paga</span>
                                    </div>
                                </div>
                            </TablePreview>
                        </CommissionCard>

                        <FloatingBadgeBottom>
                            <div className="icon"><ShieldCheck size={16} /></div>
                            <div>
                                <div>Proteção Clawback Ativa</div>
                                <div style={{ fontSize: '0.7rem', color: '#64748B', fontWeight: 500 }}>Estorno automático se o aluno desistir</div>
                            </div>
                        </FloatingBadgeBottom>
                    </Visual>
                </HeroContent>
            </Container>
        </HeroSection>
    )
}