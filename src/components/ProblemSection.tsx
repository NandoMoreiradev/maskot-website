'use client'

import styled from 'styled-components'
import {
    Clock,
    UserX,
    Ban,
    FileWarning,
    SearchX,
    Zap,
    ShieldCheck,
    MessageSquare,
    ArrowRight,
    BarChart3,
    Inbox,
    TrendingUp
} from 'lucide-react'
import { Container as BaseContainer } from '@/components/ui/Container'
import { SectionHeader, SectionTitle, SectionSubtitle, GradientText } from '@/components/ui/SectionHeading'
import SectionDecor from '@/components/ui/SectionDecor'

const Container = styled(BaseContainer)`
    position: relative;
    z-index: 1;
`

const Section = styled.section`
    padding: 4.5rem 0;
    background: #F8FAFC;
    position: relative;
    overflow: hidden;

    @media (max-width: 768px) {
        padding: 3rem 0;
    }
`

const ComparisonGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 44px 1fr;
    gap: 1rem;
    align-items: center;
    margin-bottom: 1.5rem;
    position: relative;
    z-index: 2;

    @media (max-width: 968px) {
        grid-template-columns: 1fr;
        gap: 1.25rem;
    }
`

const CardBase = styled.div`
    background: #FFFFFF;
    border-radius: 16px;
    padding: 1.5rem 1.5rem 1.25rem;
    position: relative;
    height: 100%;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
`

const ProblemCard = styled(CardBase)`
    border: 1px solid #FEE2E2;
    box-shadow: 0 4px 6px -1px rgba(239, 68, 68, 0.04);

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 12px 24px -8px rgba(239, 68, 68, 0.12);
    }
`

const SolutionCard = styled(CardBase)`
    border: 1px solid #DBEAFE;
    box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.06);

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 12px 24px -8px rgba(37, 99, 235, 0.16);
    }
`

const AccentBarMask = styled.div`
    position: absolute;
    inset: 0;
    border-radius: 16px;
    overflow: hidden;
    pointer-events: none;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: linear-gradient(90deg, #2563EB, #06B6D4);
    }
`

const IconHeader = styled.div<{ $type: 'problem' | 'solution' }>`
    background: ${props => props.$type === 'problem' ? '#FEF2F2' : '#EFF6FF'};
    border: 1px solid ${props => props.$type === 'problem' ? '#FEE2E2' : '#DBEAFE'};
    width: 40px;
    height: 40px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.9rem;

    svg {
        width: 20px;
        height: 20px;
        color: ${props => props.$type === 'problem' ? '#EF4444' : '#2563EB'};
    }
`

const CardTitle = styled.h3`
    font-size: 1.15rem;
    font-weight: 800;
    margin-bottom: 1rem;
    color: #0F172A;
    letter-spacing: -0.02em;
`

const FeatureList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`

const FeatureItem = styled.li<{ $type: 'problem' | 'solution' }>`
    display: flex;
    align-items: flex-start;
    margin-bottom: 0.75rem;
    font-size: 0.85rem;
    color: ${props => props.$type === 'problem' ? '#64748B' : '#334155'};
    line-height: 1.5;

    &:last-child {
        margin-bottom: 0;
    }

    svg {
        width: 16px;
        height: 16px;
        margin-right: 0.65rem;
        flex-shrink: 0;
        margin-top: 2px;
        color: ${props => props.$type === 'problem' ? '#EF4444' : '#10B981'};
        opacity: ${props => props.$type === 'problem' ? 0.7 : 1};
    }

    span {
        flex: 1;
        strong {
            color: ${props => props.$type === 'problem' ? '#991B1B' : '#0F172A'};
            font-weight: 700;
        }
    }
`

const VsDivider = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 3;

    div {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: #FFFFFF;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #2563EB;
        border: 1px solid #E2E8F0;
        box-shadow: 0 4px 10px rgba(15, 23, 42, 0.05);

        svg {
            width: 18px;
            height: 18px;
        }

        @media (max-width: 968px) {
            transform: rotate(90deg);
        }
    }
`
const ResultsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
    position: relative;
    z-index: 2;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

const ResultCard = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 0.9rem;
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 16px;
    padding: 1.25rem;
    box-shadow: 0 4px 6px -1px rgba(15, 23, 42, 0.03);
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-3px);
        border-color: #BFDBFE;
        box-shadow: 0 12px 24px -8px rgba(37, 99, 235, 0.15);
    }
`

const ResultIcon = styled.div`
    width: 44px;
    height: 44px;
    flex-shrink: 0;
    border-radius: 12px;
    background: #EFF6FF;
    border: 1px solid #DBEAFE;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 22px;
        height: 22px;
        color: #2563EB;
    }
`

const ResultText = styled.div`
    display: block;
    flex: 1;
    min-width: 0;
`

const ResultLabel = styled.p`
    font-size: 1rem;
    color: #0F172A;
    font-weight: 800;
    margin-bottom: 0.3rem;
    letter-spacing: -0.01em;
`

const ResultDescription = styled.p`
    font-size: 0.85rem;
    color: #64748B;
    line-height: 1.5;
    margin: 0;
`

export default function ProblemSection() {
    return (
        <Section>
            <SectionDecor $variant="right" />
            <Container>
                <SectionHeader>
                    <SectionTitle>
                        Onde sua escola está <GradientText>perdendo matrículas?</GradientText>
                    </SectionTitle>
                    <SectionSubtitle style={{ color: '#64748B' }}>
                        Leads perdidos no WhatsApp, dados descentralizados entre marketing e vendas, e gestores sem visibilidade do processo. O resultado? Muito esforço para atrair, pouca conversão na matrícula.
                    </SectionSubtitle>
                </SectionHeader>

                <ComparisonGrid>
                    {/* LADO DO PROBLEMA (Processo Manual/Antigo) */}
                    <ProblemCard>
                        <IconHeader $type="problem">
                            <UserX />
                        </IconHeader>
                        <CardTitle>Captação Analógica</CardTitle>
                        <FeatureList>
                            <FeatureItem $type="problem">
                                <Clock />
                                <span>
                                    <strong>O lead esfria:</strong> você demora horas (ou dias) para responder um pai interessado — e ele já fechou com a escola vizinha.
                                </span>
                            </FeatureItem>
                            <FeatureItem $type="problem">
                                <FileWarning />
                                <span>
                                    <strong>Ninguém faz follow-up:</strong> o pai para de responder e a equipe esquece de retomar o contato.
                                </span>
                            </FeatureItem>
                            <FeatureItem $type="problem">
                                <SearchX />
                                <span>
                                    <strong>Cegueira comercial:</strong> você não sabe quantos leads chegaram, de onde vieram nem por que foram perdidos.
                                </span>
                            </FeatureItem>
                            <FeatureItem $type="problem">
                                <Ban />
                                <span>
                                    <strong>WhatsApp bloqueado:</strong> o número trava bem no meio de uma campanha importante.
                                </span>
                            </FeatureItem>
                        </FeatureList>
                    </ProblemCard>

                    <VsDivider>
                        <div><ArrowRight size={28} /></div>
                    </VsDivider>

                    {/* LADO DA SOLUÇÃO (CRM Maskot) */}
                    <SolutionCard>
                        <AccentBarMask />
                        <IconHeader $type="solution">
                            <ShieldCheck />
                        </IconHeader>
                        <CardTitle>Máquina de Matrículas</CardTitle>
                        <FeatureList>
                            <FeatureItem $type="solution">
                                <MessageSquare />
                                <span>
                                    <strong>Resposta imediata 24/7:</strong> o atendimento acolhe, tira dúvidas e agenda a visita na hora.
                                </span>
                            </FeatureItem>
                            <FeatureItem $type="solution">
                                <Zap />
                                <span>
                                    <strong>Régua de follow-up:</strong> o sistema cobra o retorno sozinho e lembra o consultor de ligar.
                                </span>
                            </FeatureItem>
                            <FeatureItem $type="solution">
                                <BarChart3 />
                                <span>
                                    <strong>Visão total:</strong> saiba quantos leads chegaram, de qual canal e o motivo de cada perda.
                                </span>
                            </FeatureItem>
                            <FeatureItem $type="solution">
                                <Inbox />
                                <span>
                                    <strong>Tudo centralizado:</strong> WhatsApp, Instagram e site caindo no mesmo funil seguro.
                                </span>
                            </FeatureItem>
                        </FeatureList>
                    </SolutionCard>
                </ComparisonGrid>

                <ResultsGrid>
                    <ResultCard>
                        <ResultIcon><Zap /></ResultIcon>
                        <ResultText>
                            <ResultLabel>Zero Lead Esperando</ResultLabel>
                            <ResultDescription>
                                O primeiro a responder é quem ganha a matrícula. O Maskot garante atendimento em segundos.
                            </ResultDescription>
                        </ResultText>
                    </ResultCard>

                    <ResultCard>
                        <ResultIcon><BarChart3 /></ResultIcon>
                        <ResultText>
                            <ResultLabel>Gestão do Comercial</ResultLabel>
                            <ResultDescription>
                                Saiba exatamente como sua equipe está atendendo e onde estão os gargalos do funil.
                            </ResultDescription>
                        </ResultText>
                    </ResultCard>

                    <ResultCard>
                        <ResultIcon><TrendingUp /></ResultIcon>
                        <ResultText>
                            <ResultLabel>Nutrição Automática</ResultLabel>
                            <ResultDescription>
                                Não deixe o lead esquecer de você. Automações mantêm a escola na mente dos pais.
                            </ResultDescription>
                        </ResultText>
                    </ResultCard>
                </ResultsGrid>
            </Container>
        </Section>
    )
}
