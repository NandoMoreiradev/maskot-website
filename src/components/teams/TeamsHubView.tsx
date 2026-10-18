'use client'

import Link from 'next/link'
import styled, { keyframes } from 'styled-components'
import { ArrowRight } from 'lucide-react'
import { Container as BaseContainer } from '@/components/ui/Container'
import { SectionHeader, Eyebrow, SectionTitle, SectionSubtitle } from '@/components/ui/SectionHeading'
import AuroraBackground from '@/components/AuroraBackground'
import { TEAMS } from '@/lib/teams'
import { TEAM_VISUALS } from './teamIcons'

const fadeUp = keyframes`
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: translateY(0); }
`

const HeroSection = styled.section`
    position: relative;
    padding: 10rem 0 3rem;
    text-align: center;
    overflow: hidden;
    z-index: 1;

    @media (max-width: ${props => props.theme.breakpoints.md}) {
        padding: 8rem 0 2rem;
    }
`

const Container = styled(BaseContainer)`
    position: relative;
    z-index: 2;
`

const HeroText = styled.div`
    max-width: 780px;
    margin: 0 auto;
    animation: ${fadeUp} 0.7s ease-out both;

    h1 {
        font-size: 3rem;
        font-weight: 800;
        line-height: 1.15;
        letter-spacing: -0.02em;
        color: ${props => props.theme.colors.textDark};
        margin-bottom: 1.1rem;

        strong {
            color: ${props => props.theme.colors.primary};
        }

        @media (max-width: ${props => props.theme.breakpoints.md}) {
            font-size: 2.25rem;
        }
    }

    p {
        font-size: 1.1rem;
        line-height: 1.65;
        color: #475569;
    }
`

const Section = styled.section<{ $alt?: boolean }>`
    padding: 4rem 0 5rem;
    background: ${props => (props.$alt ? props.theme.colors.lightGray : 'transparent')};
`

const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.25rem;

    > * {
        flex: 0 1 calc((100% - 2.5rem) / 3);
    }

    @media (max-width: ${props => props.theme.breakpoints.lg}) {
        > * {
            flex-basis: calc((100% - 1.25rem) / 2);
        }
    }

    @media (max-width: ${props => props.theme.breakpoints.md}) {
        > * {
            flex-basis: 100%;
        }
    }
`

const TeamCard = styled(Link)<{ $accent: string }>`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 1.75rem;
    background: ${props => props.theme.colors.white};
    border: 1px solid ${props => props.theme.colors.borderLight};
    border-radius: 20px;
    text-decoration: none;
    box-shadow: ${props => props.theme.shadows.sm};
    transition: all 0.2s ease;

    .stage {
        font-size: 0.75rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: ${props => props.$accent};
    }

    .icon {
        width: 48px;
        height: 48px;
        border-radius: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${props => props.$accent};
        background: ${props => props.$accent}1A;
        transition: all 0.2s ease;
    }

    h3 {
        font-size: 1.25rem;
        font-weight: 800;
        color: ${props => props.theme.colors.textDark};
    }

    p {
        flex: 1;
        font-size: 0.95rem;
        line-height: 1.6;
        color: ${props => props.theme.colors.textMedium};
    }

    .more {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        font-size: 0.9rem;
        font-weight: 700;
        color: ${props => props.$accent};
    }

    &:hover {
        border-color: ${props => props.$accent}66;
        box-shadow: ${props => props.theme.shadows.lg};
        transform: translateY(-3px);

        .icon {
            background: ${props => props.$accent};
            color: #fff;
        }
    }
`

const ConnectionList = styled.ul`
    list-style: none;
    margin: 0 auto;
    padding: 0;
    max-width: 860px;
    display: flex;
    flex-direction: column;
    gap: 0.9rem;

    li {
        display: grid;
        grid-template-columns: 150px 1fr;
        gap: 1.25rem;
        padding: 1.1rem 1.4rem;
        background: ${props => props.theme.colors.white};
        border: 1px solid ${props => props.theme.colors.borderLight};
        border-radius: 14px;
        font-size: 0.95rem;
        line-height: 1.6;
        color: ${props => props.theme.colors.textMedium};

        strong {
            color: ${props => props.theme.colors.textDark};
            font-weight: 800;
        }

        @media (max-width: ${props => props.theme.breakpoints.md}) {
            grid-template-columns: 1fr;
            gap: 0.25rem;
        }
    }
`

const CONNECTIONS = [
    {
        flow: 'Marketing → Comercial',
        text: 'O lead nasce numa landing page ou formulário e entra no funil de matrículas com a origem registrada.',
    },
    {
        flow: 'Atendimento → Comercial',
        text: 'A conversa que virou oportunidade vira lead, e o consultor assume com todo o histórico.',
    },
    {
        flow: 'Comercial → Coordenação',
        text: 'Quando a família fecha, o aluno novo entra no onboarding, e a coordenação acolhe sem pedir os dados de novo.',
    },
    {
        flow: 'Todas → Direção',
        text: 'Funil, conversão por origem, desempenho da equipe e pesquisas chegam aos painéis da direção sem planilha no meio.',
    },
]

export default function TeamsHubView() {
    return (
        <>
            <HeroSection>
                <AuroraBackground />
                <Container>
                    <HeroText>
                        <h1>
                            Sua equipe trabalhando <strong>do jeito certo</strong> e com produtividade
                        </h1>
                        <p>
                            O Maskot reúne marketing, atendimento, comercial, coordenação e direção numa só
                            plataforma. Cada equipe usa os módulos da sua rotina, e todas trabalham sobre os mesmos
                            dados.
                        </p>
                    </HeroText>
                </Container>
            </HeroSection>

            <Section>
                <Container>
                    <Grid>
                        {TEAMS.map(team => {
                            const { icon: Icon, accent } = TEAM_VISUALS[team.slug]
                            return (
                                <TeamCard key={team.slug} href={`/equipes/${team.slug}`} $accent={accent}>
                                    <span className="stage">{team.stage}</span>
                                    <span className="icon" aria-hidden="true">
                                        <Icon size={24} />
                                    </span>
                                    <h3>{team.name}</h3>
                                    <p>{team.tagline}</p>
                                    <span className="more">
                                        Ver como funciona <ArrowRight size={16} aria-hidden="true" />
                                    </span>
                                </TeamCard>
                            )
                        })}
                    </Grid>
                </Container>
            </Section>

            <Section $alt>
                <Container>
                    <SectionHeader>
                        <Eyebrow>Equipes trabalhando juntas</Eyebrow>
                        <SectionTitle>O trabalho passa de uma equipe para a outra, sem recomeçar</SectionTitle>
                        <SectionSubtitle>
                            É isso que os módulos conectados fazem: a informação coletada por uma equipe já está pronta
                            para a próxima.
                        </SectionSubtitle>
                    </SectionHeader>
                    <ConnectionList>
                        {CONNECTIONS.map(connection => (
                            <li key={connection.flow}>
                                <strong>{connection.flow}</strong>
                                <span>{connection.text}</span>
                            </li>
                        ))}
                    </ConnectionList>
                </Container>
            </Section>
        </>
    )
}
