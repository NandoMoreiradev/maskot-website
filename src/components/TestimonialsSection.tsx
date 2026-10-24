'use client'

import { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Zap, Archive, BellRing, Quote, Play } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeader, SectionTitle, SectionSubtitle, GradientText } from '@/components/ui/SectionHeading'

const Section = styled.section`
    padding: 5rem 0; /* Reduzido de 6rem */
    background: linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%);
    position: relative;
    overflow: hidden;
`

const Highlight = styled(GradientText)`
    font-weight: 800;
`

const BenefitsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem; /* Reduzido de 2rem */
    margin-top: 2rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
`

const BenefitCard = styled.div`
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 16px; /* Reduzido de 20px */
    padding: 1.75rem 1.5rem; /* Reduzido de 2.5rem 2rem */
    text-align: center;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 20px -5px rgba(0,0,0,0.05);
    }
`

const BenefitIcon = styled.div`
    width: 48px; /* Reduzido de 64px */
    height: 48px;
    border-radius: 12px;
    background: rgba(37, 99, 235, 0.08);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1rem;

    svg {
        width: 24px; /* Reduzido de 28px */
        height: 24px;
        color: #2563EB;
    }
`

const BenefitTitle = styled.h3`
    font-size: 1.15rem; /* Reduzido de 1.35rem */
    font-weight: 800;
    color: #0F172A;
    margin: 0 0 0.5rem 0;
`

const BenefitDescription = styled.p`
    font-size: 0.85rem; /* Reduzido de 0.95rem */
    color: #64748B;
    margin: 0;
    line-height: 1.5;
`

const TestimonialCard = styled.div`
    position: relative;
    max-width: 860px;
    margin: 3.5rem auto 0; /* Reduzido de 4rem */
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 20px;
    padding: 2.5rem; /* Reduzido de 3rem */
    box-shadow: 0 4px 15px rgba(0,0,0,0.03);
    display: grid;
    grid-template-columns: 240px 1fr;
    gap: 2.5rem;
    align-items: center;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        justify-items: center;
        padding: 2rem 1.5rem;
        gap: 1.75rem;
    }
`

const TestimonialBody = styled.div`
    min-width: 0;
    width: 100%;
`

const VideoFrame = styled.div`
    position: relative;
    width: 100%;
    max-width: 240px;
    aspect-ratio: 9 / 16;
    border-radius: 16px;
    overflow: hidden;
    background: #0F172A;
    box-shadow: 0 10px 25px -8px rgba(15, 23, 42, 0.35);
`

const VideoPlayButton = styled.button`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    border: 0;
    cursor: pointer;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;

    &:focus-visible {
        outline: 3px solid #2563EB;
        outline-offset: -3px;
    }
`

const VideoThumb = styled.img`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const VideoShade = styled.span`
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.05) 55%);
`

const VideoPlayIcon = styled.span`
    position: relative;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: #FFFFFF;
    color: #2563EB;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease;

    ${VideoPlayButton}:hover & {
        transform: scale(1.08);
    }

    svg {
        margin-left: 3px;
    }
`

const VideoLabel = styled.span`
    position: absolute;
    left: 12px;
    right: 12px;
    bottom: 12px;
    color: #FFFFFF;
    font-size: 0.85rem;
    font-weight: 700;
    text-align: left;
`

const VideoIframe = styled.iframe`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
`

const QuoteIcon = styled(Quote)`
    width: 32px; /* Reduzido de 36px */
    height: 32px;
    color: #2563EB;
    opacity: 0.2;
    margin-bottom: 0.75rem;
`

const TestimonialText = styled.p`
    font-size: 0.95rem;
    line-height: 1.6;
    color: #334155;
    margin: 0 0 1.25rem 0;
`

const TestimonialFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    flex-wrap: wrap;
`

const TestimonialAuthor = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`

const AuthorAvatar = styled(Image)`
    border-radius: 50%;
    object-fit: cover;
    flex-shrink: 0;
`

const AuthorInfo = styled.div`
    display: flex;
    flex-direction: column;

    strong {
        font-size: 1rem;
        color: ${props => props.theme.colors.textDark};
    }

    span {
        font-size: 0.85rem;
        color: ${props => props.theme.colors.textMedium};
    }
`

const SchoolLogoLink = styled.a`
    display: flex;
    align-items: center;
    flex-shrink: 0;
`

const SchoolLogo = styled(Image)`
    object-fit: contain;
`

const TESTIMONIAL_VIDEO_ID = 'FEoJjLfu5Sw'

export default function TestimonialsSection() {
    const [videoPlaying, setVideoPlaying] = useState(false)

    return (
        <Section id="impacto"> {/* ID ESSENCIAL PARA O MENU */}
            <Container>
                <SectionHeader $maxWidth="720px">
                    <SectionTitle>
                        O que muda na rotina da <Highlight>sua escola</Highlight>
                    </SectionTitle>
                    <SectionSubtitle>
                        Sem promessas de número mágico. O que o Maskot entrega é o fim do lead esquecido,
                        do atendimento lento e da captação dependente de planilhas.
                    </SectionSubtitle>
                </SectionHeader>

                <BenefitsGrid>
                    <BenefitCard>
                        <BenefitIcon>
                            <Zap />
                        </BenefitIcon>
                        <BenefitTitle>Resposta em segundos</BenefitTitle>
                        <BenefitDescription>
                            Atendimento imediato 24/7, mesmo fora do horário comercial. O primeiro a responder
                            é quem ganha a matrícula.
                        </BenefitDescription>
                    </BenefitCard>

                    <BenefitCard>
                        <BenefitIcon>
                            <Archive />
                        </BenefitIcon>
                        <BenefitTitle>100% do histórico salvo</BenefitTitle>
                        <BenefitDescription>
                            Cada conversa, visita e proposta fica registrada no funil — nada se perde quando
                            um consultor sai da equipe.
                        </BenefitDescription>
                    </BenefitCard>

                    <BenefitCard>
                        <BenefitIcon>
                            <BellRing />
                        </BenefitIcon>
                        <BenefitTitle>Zero lead sem follow-up</BenefitTitle>
                        <BenefitDescription>
                            A régua de automação cobra o retorno sozinha e lembra o consultor de agir — nenhuma
                            família esfria por esquecimento.
                        </BenefitDescription>
                    </BenefitCard>
                </BenefitsGrid>

                <TestimonialCard>
                    <VideoFrame>
                        {videoPlaying ? (
                            <VideoIframe
                                src={`https://www.youtube-nocookie.com/embed/${TESTIMONIAL_VIDEO_ID}?autoplay=1&playsinline=1&rel=0&start=0`}
                                title="Depoimento do Colégio Intellectus"
                                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                                allowFullScreen
                            />
                        ) : (
                            <VideoPlayButton
                                type="button"
                                onClick={() => setVideoPlaying(true)}
                                aria-label="Assistir ao depoimento do Colégio Intellectus"
                            >
                                <VideoThumb
                                    src={`https://i.ytimg.com/vi/${TESTIMONIAL_VIDEO_ID}/hqdefault.jpg`}
                                    alt=""
                                />
                                <VideoShade />
                                <VideoPlayIcon>
                                    <Play size={24} fill="currentColor" />
                                </VideoPlayIcon>
                                <VideoLabel>Assista ao depoimento</VideoLabel>
                            </VideoPlayButton>
                        )}
                    </VideoFrame>

                    <TestimonialBody>
                        <QuoteIcon />
                        <TestimonialText>
                            Estamos muito satisfeitos com o Maskot Edu! É completo, intuitivo e muito fácil de usar
                            no dia a dia. Com ele, atendemos as famílias de um jeito mais acolhedor e temos leads,
                            negociações e todo o histórico num só lugar, para acompanhar cada oportunidade com
                            mais organização.
                        </TestimonialText>
                        <TestimonialFooter>
                            <TestimonialAuthor>
                                <AuthorAvatar
                                    src="/depoimento-maria-helena.png"
                                    alt="Maria Helena"
                                    width={56}
                                    height={56}
                                />
                                <AuthorInfo>
                                    <strong>Maria Helena</strong>
                                    <span>Colégio Intellectus</span>
                                </AuthorInfo>
                            </TestimonialAuthor>
                            <SchoolLogoLink
                                href="https://www.colegiointellectus.com.br/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Site do Colégio Intellectus"
                            >
                                <SchoolLogo
                                    src="/logo-colegio-intellectus.png"
                                    alt="Colégio Intellectus"
                                    width={140}
                                    height={48}
                                />
                            </SchoolLogoLink>
                        </TestimonialFooter>
                    </TestimonialBody>
                </TestimonialCard>
            </Container>
        </Section>
    )
}
