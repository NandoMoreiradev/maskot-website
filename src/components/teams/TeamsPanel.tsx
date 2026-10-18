'use client'

import Link from 'next/link'
import styled from 'styled-components'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeader, Eyebrow, SectionTitle, SectionSubtitle, GradientText } from '@/components/ui/SectionHeading'
import { TEAMS } from '@/lib/teams'
import { TEAM_VISUALS } from './teamIcons'

const Section = styled.section`
    padding: 5rem 0;
    background: ${props => props.theme.colors.white};
`

const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;

    > * {
        flex: 0 1 calc((100% - 2rem) / 3);
    }

    @media (max-width: ${props => props.theme.breakpoints.lg}) {
        > * {
            flex-basis: calc((100% - 1rem) / 2);
        }
    }

    @media (max-width: ${props => props.theme.breakpoints.sm}) {
        > * {
            flex-basis: 100%;
        }
    }
`

const TeamLink = styled(Link)<{ $accent: string }>`
    display: flex;
    align-items: center;
    gap: 0.9rem;
    padding: 1.1rem 1.25rem;
    background: ${props => props.theme.colors.lightGray};
    border: 1px solid ${props => props.theme.colors.borderLight};
    border-radius: 16px;
    text-decoration: none;
    transition: all 0.2s ease;

    .icon {
        flex-shrink: 0;
        width: 44px;
        height: 44px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${props => props.$accent}1A;
        color: ${props => props.$accent};
        transition: all 0.2s ease;
    }

    .text {
        flex: 1;
        min-width: 0;

        strong {
            display: block;
            font-size: 1rem;
            font-weight: 800;
            color: ${props => props.theme.colors.textDark};
        }

        span {
            display: block;
            font-size: 0.8rem;
            color: ${props => props.theme.colors.textMedium};
            margin-top: 0.1rem;
        }
    }

    .arrow {
        flex-shrink: 0;
        color: ${props => props.theme.colors.textMedium};
        transition: transform 0.2s ease;
    }

    &:hover {
        background: ${props => props.theme.colors.white};
        border-color: ${props => props.$accent}66;
        box-shadow: ${props => props.theme.shadows.md};
        transform: translateY(-2px);

        .icon {
            background: ${props => props.$accent};
            color: #fff;
        }

        .arrow {
            transform: translateX(3px);
            color: ${props => props.$accent};
        }
    }
`

const Footer = styled.div`
    margin-top: 2rem;
    text-align: center;
`

const AllTeamsLink = styled(Link)`
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 700;
    font-size: 0.95rem;
    color: ${props => props.theme.colors.primary};
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`

/** Chamariz da home: leva cada equipe da escola para a sua página. A visão geral é /equipes. */
export default function TeamsPanel() {
    return (
        <Section id="equipes">
            <Container>
                <SectionHeader $maxWidth="760px">
                    <Eyebrow>Para cada equipe da escola</Eyebrow>
                    <SectionTitle>
                        Sua equipe trabalhando <GradientText>do jeito certo</GradientText> e com produtividade
                    </SectionTitle>
                    <SectionSubtitle>
                        Marketing, atendimento, comercial, coordenação e direção usam os mesmos módulos, cada
                        um do seu jeito, e passam a trabalhar juntos. Escolha a sua equipe e veja como.
                    </SectionSubtitle>
                </SectionHeader>

                <Grid>
                    {TEAMS.map(team => {
                        const { icon: Icon, accent } = TEAM_VISUALS[team.slug]
                        return (
                            <TeamLink key={team.slug} href={`/equipes/${team.slug}`} $accent={accent}>
                                <span className="icon" aria-hidden="true">
                                    <Icon size={22} />
                                </span>
                                <span className="text">
                                    <strong>{team.shortName}</strong>
                                    <span>{team.stage}</span>
                                </span>
                                <ArrowRight className="arrow" size={18} aria-hidden="true" />
                            </TeamLink>
                        )
                    })}
                </Grid>

                <Footer>
                    <AllTeamsLink href="/equipes">
                        Ver como as equipes trabalham juntas <ArrowRight size={16} />
                    </AllTeamsLink>
                </Footer>
            </Container>
        </Section>
    )
}
