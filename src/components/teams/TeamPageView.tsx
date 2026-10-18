'use client'

import Link from 'next/link'
import styled, { keyframes } from 'styled-components'
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react'
import { Container as BaseContainer } from '@/components/ui/Container'
import { SectionHeader, Eyebrow, SectionTitle, SectionSubtitle } from '@/components/ui/SectionHeading'
import AuroraBackground from '@/components/AuroraBackground'
import { TEAMS, getTeam, type Team } from '@/lib/teams'
import { TEAM_VISUALS, splitHighlight } from './teamIcons'

const fadeUp = keyframes`
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: translateY(0); }
`

// --- HERO ---

const HeroSection = styled.section`
    position: relative;
    padding: 10rem 0 5rem;
    overflow: hidden;
    z-index: 1;

    @media (max-width: ${props => props.theme.breakpoints.md}) {
        padding: 8rem 0 3.5rem;
    }
`

const Container = styled(BaseContainer)`
    position: relative;
    z-index: 2;
`

const HeroGrid = styled.div`
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: 3.5rem;
    align-items: center;

    @media (max-width: ${props => props.theme.breakpoints.lg}) {
        grid-template-columns: 1fr;
        gap: 2.5rem;
    }
`

const HeroText = styled.div<{ $accent: string }>`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    animation: ${fadeUp} 0.7s ease-out both;

    .tag {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        width: fit-content;
        padding: 0.35rem 0.9rem;
        border-radius: 100px;
        font-size: 0.85rem;
        font-weight: 700;
        color: ${props => props.$accent};
        background: ${props => props.$accent}14;
        border: 1px solid ${props => props.$accent}33;
    }

    h1 {
        font-size: 3rem;
        font-weight: 800;
        line-height: 1.15;
        letter-spacing: -0.02em;
        color: ${props => props.theme.colors.textDark};

        strong {
            color: ${props => props.$accent};
        }

        @media (max-width: ${props => props.theme.breakpoints.md}) {
            font-size: 2.25rem;
        }
    }

    p {
        font-size: 1.1rem;
        line-height: 1.65;
        color: #475569;
        max-width: 560px;
    }
`

const ButtonRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 0.5rem;

    @media (max-width: ${props => props.theme.breakpoints.sm}) {
        flex-direction: column;
    }
`

const PrimaryButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.85rem 2rem;
    border-radius: 100px;
    border: none;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    color: #fff;
    background: ${props => props.theme.colors.primary};
    box-shadow: 0 4px 14px rgba(37, 99, 235, 0.3);
    transition: all 0.25s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(37, 99, 235, 0.45);
    }
`

const SecondaryLink = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.85rem 2rem;
    border-radius: 100px;
    font-size: 1rem;
    font-weight: 600;
    color: ${props => props.theme.colors.textDark};
    background: #fff;
    border: 1px solid ${props => props.theme.colors.borderLight};
    text-decoration: none;
    transition: all 0.25s ease;

    &:hover {
        background: ${props => props.theme.colors.lightGray};
        transform: translateY(-2px);
    }
`

// --- Jornada da família: mostra onde esta equipe entra ---

const JourneyCard = styled.aside`
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(12px);
    border: 1px solid ${props => props.theme.colors.borderLight};
    border-radius: 24px;
    padding: 1.75rem;
    box-shadow: ${props => props.theme.shadows.xl};
    animation: ${fadeUp} 0.7s ease-out 0.15s both;

    h2 {
        font-size: 0.8rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: ${props => props.theme.colors.textMedium};
        margin-bottom: 1rem;
    }
`

const JourneyStep = styled(Link)<{ $accent: string; $current: boolean }>`
    display: flex;
    align-items: center;
    gap: 0.85rem;
    padding: 0.7rem 0.85rem;
    border-radius: 14px;
    text-decoration: none;
    border: 1px solid ${props => (props.$current ? props.$accent + '55' : 'transparent')};
    background: ${props => (props.$current ? props.$accent + '12' : 'transparent')};
    transition: background 0.2s ease;

    &:hover {
        background: ${props => props.$accent}12;
    }

    .icon {
        flex-shrink: 0;
        width: 38px;
        height: 38px;
        border-radius: 11px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${props => (props.$current ? '#fff' : props.$accent)};
        background: ${props => (props.$current ? props.$accent : props.$accent + '1A')};
    }

    .label {
        display: flex;
        flex-direction: column;
        font-size: 0.8rem;
        color: ${props => props.theme.colors.textMedium};

        strong {
            font-size: 0.95rem;
            color: ${props => props.theme.colors.textDark};
        }
    }
`

// --- Seções ---

const Section = styled.section<{ $alt?: boolean }>`
    padding: 5rem 0;
    background: ${props => (props.$alt ? props.theme.colors.lightGray : props.theme.colors.white)};

    @media (max-width: ${props => props.theme.breakpoints.md}) {
        padding: 3.5rem 0;
    }
`

const ChallengeGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;

    @media (max-width: ${props => props.theme.breakpoints.md}) {
        grid-template-columns: 1fr;
    }
`

const ChallengeItem = styled.div`
    display: flex;
    gap: 0.85rem;
    padding: 1.25rem 1.4rem;
    background: ${props => props.theme.colors.dangerSoft};
    border: 1px solid ${props => props.theme.colors.dangerBorder};
    border-radius: 16px;
    font-size: 0.98rem;
    line-height: 1.55;
    color: ${props => props.theme.colors.text};

    svg {
        flex-shrink: 0;
        margin-top: 0.15rem;
        color: ${props => props.theme.colors.danger};
    }
`

const ModuleGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;

    @media (max-width: ${props => props.theme.breakpoints.lg}) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${props => props.theme.breakpoints.md}) {
        grid-template-columns: 1fr;
    }
`

const ModuleCard = styled.article<{ $accent: string }>`
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    padding: 1.5rem;
    background: ${props => props.theme.colors.white};
    border: 1px solid ${props => props.theme.colors.borderLight};
    border-top: 3px solid ${props => props.$accent};
    border-radius: 16px;
    box-shadow: ${props => props.theme.shadows.sm};

    h3 {
        font-size: 1.05rem;
        font-weight: 800;
        color: ${props => props.theme.colors.textDark};
    }

    p {
        font-size: 0.93rem;
        line-height: 1.6;
        color: ${props => props.theme.colors.textMedium};
        flex: 1;
    }

    a {
        display: inline-flex;
        align-items: center;
        gap: 0.35rem;
        font-size: 0.85rem;
        font-weight: 700;
        color: ${props => props.theme.colors.primary};
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`

const Timeline = styled.ol<{ $accent: string }>`
    list-style: none;
    margin: 0 auto;
    padding: 0;
    max-width: 820px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    counter-reset: step;

    li {
        position: relative;
        display: grid;
        grid-template-columns: 170px 1fr;
        gap: 1.5rem;
        align-items: start;
        padding: 1.25rem 1.5rem 1.25rem 4rem;
        background: ${props => props.theme.colors.white};
        border: 1px solid ${props => props.theme.colors.borderLight};
        border-radius: 16px;
        counter-increment: step;

        &::before {
            content: counter(step);
            position: absolute;
            left: 1.25rem;
            top: 1.2rem;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.85rem;
            font-weight: 800;
            color: #fff;
            background: ${props => props.$accent};
        }

        strong {
            font-size: 0.95rem;
            font-weight: 800;
            color: ${props => props.theme.colors.textDark};
        }

        span {
            font-size: 0.95rem;
            line-height: 1.6;
            color: ${props => props.theme.colors.textMedium};
        }

        @media (max-width: ${props => props.theme.breakpoints.md}) {
            grid-template-columns: 1fr;
            gap: 0.35rem;
        }
    }
`

const HandoffGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;

    @media (max-width: ${props => props.theme.breakpoints.lg}) {
        grid-template-columns: 1fr;
    }
`

const HandoffCard = styled(Link)<{ $accent: string }>`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 1.5rem;
    background: ${props => props.theme.colors.white};
    border: 1px solid ${props => props.theme.colors.borderLight};
    border-radius: 16px;
    text-decoration: none;
    transition: all 0.2s ease;

    .head {
        display: flex;
        align-items: center;
        gap: 0.7rem;
        font-weight: 800;
        font-size: 1rem;
        color: ${props => props.theme.colors.textDark};

        .icon {
            width: 38px;
            height: 38px;
            border-radius: 11px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: ${props => props.$accent}1A;
            color: ${props => props.$accent};
        }
    }

    p {
        font-size: 0.93rem;
        line-height: 1.6;
        color: ${props => props.theme.colors.textMedium};
    }

    &:hover {
        border-color: ${props => props.$accent}66;
        box-shadow: ${props => props.theme.shadows.md};
        transform: translateY(-2px);
    }
`

const OutcomeList = styled.ul`
    list-style: none;
    margin: 0 auto;
    padding: 0;
    max-width: 720px;
    display: flex;
    flex-direction: column;
    gap: 0.85rem;

    li {
        display: flex;
        align-items: flex-start;
        gap: 0.75rem;
        font-size: 1.05rem;
        line-height: 1.55;
        font-weight: 600;
        color: ${props => props.theme.colors.textDark};

        svg {
            flex-shrink: 0;
            margin-top: 0.2rem;
            color: ${props => props.theme.colors.success};
        }
    }
`

const Note = styled.p`
    margin: 2.5rem auto 0;
    max-width: 720px;
    text-align: center;
    font-size: 0.85rem;
    color: ${props => props.theme.colors.textMedium};
`

function openContact() {
    window.dispatchEvent(new Event('open-contact-modal'))
}

export default function TeamPageView({ team }: { team: Team }) {
    const { icon: TeamIcon, accent } = TEAM_VISUALS[team.slug]

    return (
        <>
            <HeroSection>
                <AuroraBackground />
                <Container>
                    <HeroGrid>
                        <HeroText $accent={accent}>
                            <span className="tag">
                                <TeamIcon size={16} aria-hidden="true" /> {team.name}
                            </span>
                            <h1>
                                {splitHighlight(team.headline).map((part, index) =>
                                    part.highlight ? <strong key={index}>{part.text}</strong> : part.text
                                )}
                            </h1>
                            <p>{team.intro}</p>
                            <ButtonRow>
                                <PrimaryButton onClick={openContact}>
                                    Fale com um Consultor <ArrowRight size={18} />
                                </PrimaryButton>
                                <SecondaryLink href="#modulos">Ver os módulos da equipe</SecondaryLink>
                            </ButtonRow>
                        </HeroText>

                        <JourneyCard aria-label="Jornada da família na escola">
                            <h2>Onde a sua equipe entra na jornada</h2>
                            {TEAMS.map(item => {
                                const visual = TEAM_VISUALS[item.slug]
                                const StepIcon = visual.icon
                                return (
                                    <JourneyStep
                                        key={item.slug}
                                        href={`/equipes/${item.slug}`}
                                        $accent={visual.accent}
                                        $current={item.slug === team.slug}
                                        aria-current={item.slug === team.slug ? 'page' : undefined}
                                    >
                                        <span className="icon" aria-hidden="true">
                                            <StepIcon size={18} />
                                        </span>
                                        <span className="label">
                                            <span>{item.stage}</span>
                                            <strong>{item.shortName}</strong>
                                        </span>
                                    </JourneyStep>
                                )
                            })}
                        </JourneyCard>
                    </HeroGrid>
                </Container>
            </HeroSection>

            <Section $alt>
                <Container>
                    <SectionHeader>
                        <Eyebrow>O que costuma travar</Eyebrow>
                        <SectionTitle>Os problemas do dia a dia da equipe</SectionTitle>
                    </SectionHeader>
                    <ChallengeGrid>
                        {team.challenges.map(challenge => (
                            <ChallengeItem key={challenge}>
                                <AlertCircle size={20} aria-hidden="true" />
                                <span>{challenge}</span>
                            </ChallengeItem>
                        ))}
                    </ChallengeGrid>
                </Container>
            </Section>

            <Section id="modulos">
                <Container>
                    <SectionHeader>
                        <Eyebrow>Módulos do Maskot</Eyebrow>
                        <SectionTitle>O que {team.shortName} usa no Maskot</SectionTitle>
                        <SectionSubtitle>
                            Cada módulo resolve uma parte da rotina da equipe e conversa com os módulos das outras.
                        </SectionSubtitle>
                    </SectionHeader>
                    <ModuleGrid>
                        {team.modules.map(module => (
                            <ModuleCard key={module.name} $accent={accent}>
                                <h3>{module.name}</h3>
                                <p>{module.what}</p>
                                {module.href && (
                                    <Link href={module.href}>
                                        Conhecer o módulo <ArrowRight size={14} aria-hidden="true" />
                                    </Link>
                                )}
                            </ModuleCard>
                        ))}
                    </ModuleGrid>
                </Container>
            </Section>

            <Section $alt>
                <Container>
                    <SectionHeader>
                        <Eyebrow>Rotina na prática</Eyebrow>
                        <SectionTitle>Um dia de trabalho com o Maskot</SectionTitle>
                    </SectionHeader>
                    <Timeline $accent={accent}>
                        {team.routine.map(step => (
                            <li key={step.when}>
                                <strong>{step.when}</strong>
                                <span>{step.text}</span>
                            </li>
                        ))}
                    </Timeline>
                </Container>
            </Section>

            <Section>
                <Container>
                    <SectionHeader>
                        <Eyebrow>Equipes trabalhando juntas</Eyebrow>
                        <SectionTitle>Como {team.shortName} trabalha junto das outras equipes</SectionTitle>
                        <SectionSubtitle>
                            Como todos usam a mesma base de dados, o trabalho passa de uma equipe para a outra sem
                            recadastro, sem planilha e sem o “me manda por WhatsApp”.
                        </SectionSubtitle>
                    </SectionHeader>
                    <HandoffGrid>
                        {team.handoffs.map(handoff => {
                            const other = getTeam(handoff.with)
                            if (!other) return null
                            const visual = TEAM_VISUALS[other.slug]
                            const OtherIcon = visual.icon
                            return (
                                <HandoffCard key={other.slug} href={`/equipes/${other.slug}`} $accent={visual.accent}>
                                    <span className="head">
                                        <span className="icon" aria-hidden="true">
                                            <OtherIcon size={18} />
                                        </span>
                                        {team.shortName} + {other.shortName}
                                    </span>
                                    <p>{handoff.text}</p>
                                </HandoffCard>
                            )
                        })}
                    </HandoffGrid>
                </Container>
            </Section>

            <Section $alt>
                <Container>
                    <SectionHeader>
                        <Eyebrow>O que muda</Eyebrow>
                        <SectionTitle>Resultado esperado para a equipe</SectionTitle>
                    </SectionHeader>
                    <OutcomeList>
                        {team.outcomes.map(outcome => (
                            <li key={outcome}>
                                <CheckCircle2 size={20} aria-hidden="true" />
                                <span>{outcome}</span>
                            </li>
                        ))}
                    </OutcomeList>
                    <Note>
                        A disponibilidade de alguns módulos depende do plano contratado e dos add-ons da escola.
                    </Note>
                </Container>
            </Section>
        </>
    )
}
