'use client'

import styled from 'styled-components'
import { TrendingUp, Zap, Target } from 'lucide-react'

const Section = styled.section`
    padding: 6rem 0;
    /* Background sutil para destacar os cards brancos */
    background: linear-gradient(180deg,
    ${props => props.theme.colors.pageBackground} 0%,
    ${props => props.theme.colors.lightGray} 100%
    );
    position: relative;
    overflow: hidden;
`

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
`

const SectionHeader = styled.div`
    text-align: center;
    margin-bottom: 4rem;
    max-width: 700px;
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

const Highlight = styled.span`
    background: linear-gradient(135deg,
    ${props => props.theme.colors.primary} 0%,
    ${props => props.theme.colors.secondary} 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 700;
`

const StatsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 2rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
`

const StatCard = styled.div`
    text-align: center;
    padding: 1rem;
`

const StatIcon = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: ${props => props.theme.colors.white};
    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1rem;

    svg {
        width: 28px;
        height: 28px;
        color: ${props => props.theme.colors.primary};
    }
`

const StatNumber = styled.div`
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

const StatLabel = styled.h3`
    font-size: 1.1rem;
    font-weight: 700;
    color: ${props => props.theme.colors.textDark};
    margin: 0 0 0.5rem 0;
`

const StatDescription = styled.p`
    font-size: 0.9rem;
    color: ${props => props.theme.colors.textMedium};
    margin: 0;
    line-height: 1.4;
`

export default function TestimonialsSection() {
    return (
        <Section id="impacto"> {/* ID ESSENCIAL PARA O MENU */}
            <Container>
                <SectionHeader>
                    <SectionTitle>
                        O impacto do <Highlight>Maskot</Highlight> nas escolas
                    </SectionTitle>
                    <SectionSubtitle>
                        Veja os resultados médios que um CRM especializado pode trazer para a captação de alunos da sua instituição.
                    </SectionSubtitle>
                </SectionHeader>

                <StatsGrid>
                    <StatCard>
                        <StatIcon>
                            <TrendingUp />
                        </StatIcon>
                        <StatNumber>+45%</StatNumber>
                        <StatLabel>Aumento de Conversão</StatLabel>
                        <StatDescription>
                            Aumento médio na taxa de conversão ao utilizar um CRM especializado em vez de planilhas.
                        </StatDescription>
                    </StatCard>

                    <StatCard>
                        <StatIcon>
                            <Zap />
                        </StatIcon>
                        <StatNumber>3x</StatNumber>
                        <StatLabel>Mais Rápido</StatLabel>
                        <StatDescription>
                            Agilidade no primeiro contato com os leads usando automações de WhatsApp e respostas rápidas.
                        </StatDescription>
                    </StatCard>

                    <StatCard>
                        <StatIcon>
                            <Target />
                        </StatIcon>
                        <StatNumber>100%</StatNumber>
                        <StatLabel>Controle</StatLabel>
                        <StatDescription>
                            Visibilidade total da jornada da família, do primeiro contato até a matrícula, sem perdas no funil.
                        </StatDescription>
                    </StatCard>
                </StatsGrid>
            </Container>
        </Section>
    )
}