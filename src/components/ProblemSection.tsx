'use client'

import styled from 'styled-components'
import { AlertTriangle, Rocket, ArrowRight } from 'lucide-react'

const Section = styled.section`
    padding: 6rem 0;
    background: ${props => props.theme.colors.white};
    position: relative;
`

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
`

const SectionHeader = styled.div`
    text-align: center;
    margin-bottom: 4rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
`

const SectionTitle = styled.h2`
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.textDark};

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`

const SectionSubtitle = styled.p`
    font-size: 1.1rem;
    color: ${props => props.theme.colors.textMedium};
    line-height: 1.6;
`

const ComparisonGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 100px 1fr;
    gap: 2rem;
    align-items: center;
    margin-bottom: 3rem;

    @media (max-width: 968px) {
        grid-template-columns: 1fr;
        gap: 3rem;
    }
`

const ProblemCard = styled.div`
    background: linear-gradient(135deg, #ff6b6b15 0%, #ee5a5215 100%);
    border: 2px solid #ff6b6b30;
    border-radius: 16px;
    padding: 2rem;
    position: relative;
`

const SolutionCard = styled.div`
    background: linear-gradient(135deg,
    ${props => props.theme.colors.primary}15 0%,
    ${props => props.theme.colors.secondary}15 100%
    );
    border: 2px solid ${props => props.theme.colors.primary}30;
    border-radius: 16px;
    padding: 2rem;
    position: relative;
`

const ProblemIcon = styled.div`
    position: absolute;
    top: -15px;
    left: 2rem;
    background: white;
    padding: 0.5rem;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(255, 107, 107, 0.3);
    z-index: 2;

    svg {
        width: 20px;
        height: 20px;
        color: #ff6b6b;
    }
`

const SolutionIcon = styled.div`
    position: absolute;
    top: -15px;
    left: 2rem;
    background: white;
    padding: 0.5rem;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px ${props => props.theme.colors.primary}30;
    z-index: 2;

    svg {
        width: 20px;
        height: 20px;
        color: ${props => props.theme.colors.primary};
    }
`

const CardTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    margin-top: 1rem;
`

const ProblemList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`

const ProblemItem = styled.li`
    display: flex;
    align-items: flex-start;
    margin-bottom: 1rem;
    font-size: 0.95rem;
    color: ${props => props.theme.colors.textDark};

    svg {
        width: 16px;
        height: 16px;
        color: #ff6b6b;
        margin-right: 0.75rem;
        margin-top: 0.2rem;
        flex-shrink: 0;
    }
`

const SolutionList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`

const SolutionItem = styled.li`
    display: flex;
    align-items: flex-start;
    margin-bottom: 1rem;
    font-size: 0.95rem;
    color: ${props => props.theme.colors.textDark};

    svg {
        width: 16px;
        height: 16px;
        color: ${props => props.theme.colors.secondary};
        margin-right: 0.75rem;
        margin-top: 0.2rem;
        flex-shrink: 0;
    }
`

const VSIcon = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: linear-gradient(135deg,
    ${props => props.theme.colors.accent} 0%,
    ${props => props.theme.colors.primary} 100%
    );
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    box-shadow: 0 8px 25px rgba(253, 126, 20, 0.3);
    margin: 0 auto;

    svg {
        width: 32px;
        height: 32px;
    }

    @media (max-width: 968px) {
        display: none;
    }
`

const ResultsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 4rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
`

const ResultCard = styled.div`
    text-align: center;
    padding: 2rem 1rem;
    background: ${props => props.theme.colors.lightGray};
    border-radius: 12px;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }
`

const ResultNumber = styled.div`
    font-size: 2.5rem;
    font-weight: 800;
    background: linear-gradient(135deg,
    ${props => props.theme.colors.primary} 0%,
    ${props => props.theme.colors.secondary} 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5rem;
`

const ResultLabel = styled.p`
    font-size: 1rem;
    color: ${props => props.theme.colors.textDark};
    font-weight: 600;
    margin: 0;
`

const ResultDescription = styled.p`
  font-size: 0.875rem;
  color: ${props => props.theme.colors.textMedium};
  margin: 0.5rem 0 0 0;
  line-height: 1.4;
`

export default function ProblemSection() {
    return (
        <Section>
            <Container>
                <SectionHeader>
                    <SectionTitle>
                        Por que as escolas perdem leads todos os dias?
                    </SectionTitle>
                    <SectionSubtitle>
                        A maioria das escolas usa ferramentas separadas que não se comunicam.
                        O resultado? Informações perdidas, oportunidades que escapam e muito retrabalho.
                    </SectionSubtitle>
                </SectionHeader>

                <ComparisonGrid>
                    <ProblemCard>
                        <ProblemIcon>
                            <AlertTriangle />
                        </ProblemIcon>
                        <CardTitle>Como está hoje (Caótico)</CardTitle>
                        <ProblemList>
                            <ProblemItem>
                                <AlertTriangle />
                                WhatsApp Business desconectado do controle
                            </ProblemItem>
                            <ProblemItem>
                                <AlertTriangle />
                                Planilhas manuais para acompanhar leads
                            </ProblemItem>
                            <ProblemItem>
                                <AlertTriangle />
                                Google Calendar para agendamentos isolados
                            </ProblemItem>
                            <ProblemItem>
                                <AlertTriangle />
                                Email marketing em ferramenta separada
                            </ProblemItem>
                            <ProblemItem>
                                <AlertTriangle />
                                Relatórios manuais que tomam horas
                            </ProblemItem>
                            <ProblemItem>
                                <AlertTriangle />
                                Follow-ups esquecidos constantemente
                            </ProblemItem>
                            <ProblemItem>
                                <AlertTriangle />
                                Informações espalhadas e perdidas
                            </ProblemItem>
                        </ProblemList>
                    </ProblemCard>

                    <VSIcon><ArrowRight /></VSIcon>

                    <SolutionCard>
                        <SolutionIcon>
                            <Rocket />
                        </SolutionIcon>
                        <CardTitle>Com Maskot (Integrado)</CardTitle>
                        <SolutionList>
                            <SolutionItem>
                                <Rocket />
                                WhatsApp Business nativo na plataforma
                            </SolutionItem>
                            <SolutionItem>
                                <Rocket />
                                Funil visual automático (Kanban)
                            </SolutionItem>
                            <SolutionItem>
                                <Rocket />
                                Agendamento público integrado
                            </SolutionItem>
                            <SolutionItem>
                                <Rocket />
                                Email builder visual com triggers
                            </SolutionItem>
                            <SolutionItem>
                                <Rocket />
                                Relatórios automáticos em tempo real
                            </SolutionItem>
                            <SolutionItem>
                                <Rocket />
                                Follow-ups automáticos por estágio
                            </SolutionItem>
                            <SolutionItem>
                                <Rocket />
                                Tudo conectado, nada se perde
                            </SolutionItem>
                        </SolutionList>
                    </SolutionCard>
                </ComparisonGrid>

                <ResultsGrid>
                    <ResultCard>
                        <ResultNumber>+40%</ResultNumber>
                        <ResultLabel>Mais Conversões</ResultLabel>
                        <ResultDescription>
                            Com follow-ups automáticos e nenhum lead esquecido
                        </ResultDescription>
                    </ResultCard>

                    <ResultCard>
                        <ResultNumber>-80%</ResultNumber>
                        <ResultLabel>Menos Trabalho Manual</ResultLabel>
                        <ResultDescription>
                            Automações inteligentes cuidam do operacional
                        </ResultDescription>
                    </ResultCard>

                    <ResultCard>
                        <ResultNumber>100%</ResultNumber>
                        <ResultLabel>Visibilidade Total</ResultLabel>
                        <ResultDescription>
                            Relatórios em tempo real, decisões baseadas em dados
                        </ResultDescription>
                    </ResultCard>
                </ResultsGrid>
            </Container>
        </Section>
    )
}