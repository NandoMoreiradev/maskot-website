'use client'

import styled from 'styled-components'
import { Star, Quote, TrendingUp, Users, Target } from 'lucide-react'

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

const TestimonialsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-bottom: 5rem;

    @media (max-width: 968px) {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
`

const TestimonialCard = styled.div`
    background: ${props => props.theme.colors.white};
    border-radius: 20px;
    padding: 2.5rem 2rem;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    position: relative;
    height: 100%; /* Garante altura igual */

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
    }

    /* Detalhe colorido no topo */
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg,
        ${props => props.theme.colors.primary} 0%,
        ${props => props.theme.colors.secondary} 100%
        );
        border-radius: 20px 20px 0 0;
    }
`

const QuoteIcon = styled.div`
    position: absolute;
    top: -20px;
    right: 2rem;
    background: linear-gradient(135deg,
    ${props => props.theme.colors.primary} 0%,
    ${props => props.theme.colors.secondary} 100%
    );
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3);

    svg {
        width: 20px;
        height: 20px;
        color: white;
        fill: white;
    }
`

const TestimonialText = styled.p`
    font-size: 1rem;
    line-height: 1.7;
    color: ${props => props.theme.colors.textDark};
    margin-bottom: 2rem;
    font-style: italic;
`

const AuthorInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: auto; /* Empurra para o fundo se o card for alto */
`

const Avatar = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg,
    ${props => props.theme.colors.primary}15 0%,
    ${props => props.theme.colors.primary}30 100%
    );
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    font-weight: 700;
    color: ${props => props.theme.colors.primary};
`

const AuthorDetails = styled.div`
    flex: 1;
`

const AuthorName = styled.h4`
    font-size: 1rem;
    font-weight: 700;
    color: ${props => props.theme.colors.textDark};
    margin: 0 0 0.25rem 0;
`

const AuthorRole = styled.p`
    font-size: 0.85rem;
    color: ${props => props.theme.colors.textMedium};
    margin: 0;
`

const StarsContainer = styled.div`
    display: flex;
    gap: 2px;
    margin-top: 0.25rem;

    svg {
        width: 14px;
        height: 14px;
        color: #FFC107;
        fill: #FFC107;
    }
`

const StatsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 2rem;
    padding-top: 4rem;
    border-top: 1px solid ${props => props.theme.colors.borderLight};

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 2rem;
        padding-top: 3rem;
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
    const testimonials = [
        {
            text: "O Maskot revolucionou nossa gestão de leads. Aumentamos nossa conversão em 45% no primeiro trimestre. A integração do WhatsApp foi um divisor de águas!",
            author: "Maria Silva",
            role: "Diretora Pedagógica",
            initial: "MS"
        },
        {
            text: "Finalmente um CRM que entende escolas! Automatizamos todo nosso processo de captação e nossa equipe pode focar no que importa: atender bem as famílias.",
            author: "Carlos Santos",
            role: "Coord. de Marketing",
            initial: "CS"
        },
        {
            text: "A facilidade de usar é impressionante. Em 2 semanas já estávamos operando 100%. Os relatórios nos dão insights que nunca tivemos antes.",
            author: "Ana Costa",
            role: "Gestora Comercial",
            initial: "AC"
        }
    ];

    return (
        <Section id="depoimentos"> {/* ID ESSENCIAL PARA O MENU */}
            <Container>
                <SectionHeader>
                    <SectionTitle>
                        Escolas que <Highlight>transformaram</Highlight> seus resultados
                    </SectionTitle>
                    <SectionSubtitle>
                        Mais de 500 escolas já descobriram como aumentar matrículas e
                        reduzir trabalho manual com o Maskot CRM.
                    </SectionSubtitle>
                </SectionHeader>

                <TestimonialsGrid>
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index}>
                            <QuoteIcon>
                                <Quote />
                            </QuoteIcon>

                            <TestimonialText>
                                {testimonial.text}
                            </TestimonialText>

                            <AuthorInfo>
                                <Avatar>
                                    {testimonial.initial}
                                </Avatar>
                                <AuthorDetails>
                                    <AuthorName>{testimonial.author}</AuthorName>
                                    <AuthorRole>{testimonial.role}</AuthorRole>
                                    <StarsContainer>
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} />
                                        ))}
                                    </StarsContainer>
                                </AuthorDetails>
                            </AuthorInfo>
                        </TestimonialCard>
                    ))}
                </TestimonialsGrid>

                <StatsGrid>
                    <StatCard>
                        <StatIcon>
                            <TrendingUp />
                        </StatIcon>
                        <StatNumber>+67%</StatNumber>
                        <StatLabel>Conversão Média</StatLabel>
                        <StatDescription>
                            Crescimento real nas matrículas nos primeiros 6 meses de uso.
                        </StatDescription>
                    </StatCard>

                    <StatCard>
                        <StatIcon>
                            <Users />
                        </StatIcon>
                        <StatNumber>500+</StatNumber>
                        <StatLabel>Escolas Atendidas</StatLabel>
                        <StatDescription>
                            Da educação infantil ao ensino médio, em todo o Brasil.
                        </StatDescription>
                    </StatCard>

                    <StatCard>
                        <StatIcon>
                            <Target />
                        </StatIcon>
                        <StatNumber>98%</StatNumber>
                        <StatLabel>Satisfação</StatLabel>
                        <StatDescription>
                            Escolas que renovam o contrato anualmente com o Maskot.
                        </StatDescription>
                    </StatCard>
                </StatsGrid>
            </Container>
        </Section>
    )
}