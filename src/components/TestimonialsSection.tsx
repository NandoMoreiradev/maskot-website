'use client'

import styled from 'styled-components'
import Image from 'next/image'
import { Zap, Archive, BellRing, Quote } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeader, SectionTitle, SectionSubtitle, GradientText } from '@/components/ui/SectionHeading'

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

const Highlight = styled(GradientText)`
    font-weight: 700;
`

const BenefitsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 2rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
`

const BenefitCard = styled.div`
    background: ${props => props.theme.colors.white};
    border: 1px solid rgba(0,0,0,0.05);
    border-radius: 20px;
    padding: 2.5rem 2rem;
    text-align: center;
    box-shadow: 0 4px 20px rgba(0,0,0,0.04);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-6px);
        box-shadow: 0 18px 35px -10px rgba(0,0,0,0.12);
    }
`

const BenefitIcon = styled.div`
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: ${props => props.theme.colors.primary}10;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.25rem;

    svg {
        width: 28px;
        height: 28px;
        color: ${props => props.theme.colors.primary};
    }
`

const BenefitTitle = styled.h3`
    font-size: 1.35rem;
    font-weight: 800;
    color: ${props => props.theme.colors.textDark};
    margin: 0 0 0.6rem 0;
`

const BenefitDescription = styled.p`
    font-size: 0.95rem;
    color: ${props => props.theme.colors.textMedium};
    margin: 0;
    line-height: 1.5;
`

const TestimonialCard = styled.div`
    position: relative;
    max-width: 860px;
    margin: 4rem auto 0;
    background: ${props => props.theme.colors.white};
    border: 1px solid rgba(0,0,0,0.05);
    border-radius: 24px;
    padding: 3rem;
    box-shadow: 0 4px 20px rgba(0,0,0,0.04);

    @media (max-width: 768px) {
        padding: 2rem 1.5rem;
    }
`

const QuoteIcon = styled(Quote)`
    width: 36px;
    height: 36px;
    color: ${props => props.theme.colors.primary};
    opacity: 0.25;
    margin-bottom: 1rem;
`

const TestimonialText = styled.p`
    font-size: 1.1rem;
    line-height: 1.7;
    color: ${props => props.theme.colors.textDark};
    margin: 0 0 2rem 0;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
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

export default function TestimonialsSection() {
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
                    <QuoteIcon />
                    <TestimonialText>
                        Estamos muito satisfeitos com o Maskot Edu. Ele é muito completo e atende muito bem às
                        necessidades do Colégio Intellectus.
                        <br /><br />
                        Com ele conseguimos realizar um atendimento mais acolhedor e estratégico, tendo ao nosso
                        alcance todas as informações importantes para oferecer um atendimento de qualidade às
                        famílias. Também temos acesso aos dados dos leads, às negociações e a todo o histórico
                        necessário para acompanhar cada oportunidade de forma mais organizada.
                        <br /><br />
                        Além disso, é intuitivo, prático e fácil de utilizar no dia a dia. Estamos gostando bastante
                        da experiência e percebemos que o Maskot Edu tem contribuído muito para tornar nossos
                        processos de atendimento, análise de dados e gestão de leads mais eficientes.
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
                </TestimonialCard>
            </Container>
        </Section>
    )
}
