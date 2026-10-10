const fs = require('fs');

const content = `'use client'

import styled, { keyframes } from 'styled-components'
import { CheckCircle, ShieldCheck, ArrowRight, BadgeCheck, GraduationCap, Sparkles, User } from 'lucide-react'
import { Container as BaseContainer } from '@/components/ui/Container'

const float = keyframes\`
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
\`

const floatSlow = keyframes\`
    0% { transform: translateY(0px); }
    50% { transform: translateY(-15px); }
    100% { transform: translateY(0px); }
\`

const fadeUp = keyframes\`
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
\`

const HeroSection = styled.section\`
    min-height: 100vh;
    display: flex;
    align-items: center;
    background-color: \${props => props.theme.colors.pageBackground};
    position: relative;
    padding-top: 11rem;
    padding-bottom: 6rem;
    z-index: 1;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        /* Dot Grid Pattern */
        background-image: radial-gradient(\${props => props.theme.colors.borderMedium} 1px, transparent 1px);
        background-size: 32px 32px;
        /* Máscara para desaparecer nas bordas */
        mask-image: radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 80%);
        -webkit-mask-image: radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 80%);
        z-index: -2;
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(to bottom, transparent 60%, \${props => props.theme.colors.pageBackground} 100%);
        z-index: -1;
        pointer-events: none;
    }
\`

const Container = styled(BaseContainer)\`
    position: relative;
    z-index: 2;
\`

const HeroContent = styled.div\`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
        gap: 4rem;
        text-align: center;
    }
\`

const TextContent = styled.div\`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (max-width: 1024px) {
        align-items: center;
    }
\`

const MainHeading = styled.h1\`
    font-size: \${props => props.theme.typography.fontSize['5xl']};
    font-weight: \${props => props.theme.typography.fontWeight.extrabold};
    line-height: 1.1;
    color: \${props => props.theme.colors.textDark};
    letter-spacing: -0.02em;
    animation: \${fadeUp} 0.8s ease-out 0.1s forwards;
    opacity: 0;

    strong {
        background: \${props => props.theme.gradients.primary};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        display: inline-block;
    }

    @media (max-width: 768px) {
        font-size: \${props => props.theme.typography.fontSize['4xl']};
    }
\`

const Subtitle = styled.p\`
    font-size: \${props => props.theme.typography.fontSize.lg};
    line-height: 1.6;
    color: \${props => props.theme.colors.textMedium};
    max-width: 540px;
    animation: \${fadeUp} 0.8s ease-out 0.2s forwards;
    opacity: 0;

    strong {
        color: \${props => props.theme.colors.textDark};
        font-weight: 600;
    }

    @media (max-width: 1024px) {
        margin: 0 auto;
    }
\`

const ButtonGroup = styled.div\`
    display: flex;
    gap: 1rem;
    animation: \${fadeUp} 0.8s ease-out 0.3s forwards;
    opacity: 0;

    @media (max-width: 640px) {
        flex-direction: column;
        width: 100%;
    }
\`

const ButtonBase = styled.button\`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    border-radius: 100px;
    font-size: \${props => props.theme.typography.fontSize.base};
    font-weight: 600;
    transition: all \${props => props.theme.transitions.base};
    cursor: pointer;
    border: none;
\`

const CTAButton = styled(ButtonBase)\`
    background: \${props => props.theme.gradients.primary};
    color: \${props => props.theme.colors.white};
    box-shadow: 0 4px 14px 0 rgba(37, 99, 235, 0.39);

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(37, 99, 235, 0.5);
    }
\`

const SecondaryButton = styled(ButtonBase)\`
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    color: \${props => props.theme.colors.textDark};
    border: 1px solid rgba(0,0,0,0.05);
    box-shadow: \${props => props.theme.shadows.sm};

    &:hover {
        background: \${props => props.theme.colors.white};
        border-color: rgba(0,0,0,0.1);
        transform: translateY(-2px);
    }
\`

const TrustBadges = styled.div\`
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-top: 1rem;
    animation: \${fadeUp} 0.8s ease-out 0.4s forwards;
    opacity: 0;

    div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: \${props => props.theme.typography.fontSize.sm};
        color: \${props => props.theme.colors.textMedium};
        font-weight: 500;

        svg {
            color: \${props => props.theme.colors.success};
            width: 18px;
            height: 18px;
        }
    }

    @media (max-width: 1024px) {
        justify-content: center;
    }
\`

const Visual = styled.div\`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 1000px;
    animation: \${fadeUp} 1s ease-out 0.2s forwards;
    opacity: 0;
\`

const PhoneCard = styled.div\`
    background: #EFEAE2; /* Fundo clássico do WhatsApp */
    border: 1px solid rgba(0,0,0,0.05);
    border-radius: 24px;
    width: 100%;
    max-width: 340px;
    box-shadow: 0 25px 50px rgba(0,0,0,0.1), 
                0 10px 15px rgba(0,0,0,0.05),
                inset 0 1px 0 rgba(255,255,255,0.5);
    transform: rotateY(-4deg) rotateX(4deg);
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    animation: \${floatSlow} 6s ease-in-out infinite;
    overflow: hidden; /* Corta o header arredondado */

    &:hover {
        transform: rotateY(0deg) rotateX(0deg);
    }
\`

const ChatHeader = styled.div\`
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 1rem;
    background: #008069; /* Verde WhatsApp */
    color: white;

    .avatar {
        width: 38px;
        height: 38px;
        background: #E0E0E0;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #757575;
    }
    
    .meta {
        display: flex;
        flex-direction: column;
        
        strong {
            font-size: 1rem;
            font-weight: 600;
        }
        
        span {
            font-size: 0.75rem;
            opacity: 0.9;
        }
    }
\`

const ChatBody = styled.div\`
    padding: 1.5rem 1rem;
\`

const Bubble = styled.div\`
    background: #FFFFFF;
    color: #111B21;
    padding: 0.6rem 0.8rem;
    border-radius: 0 12px 12px 12px;
    font-size: 0.9rem;
    line-height: 1.4;
    box-shadow: 0 1px 1px rgba(0,0,0,0.1);
    margin-bottom: 1.5rem;
    position: relative;
    max-width: 90%;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -8px;
        width: 10px;
        height: 10px;
        background: #FFFFFF;
        clip-path: polygon(100% 0, 0 0, 100% 100%);
    }
\`

const TransformRow = styled.div\`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    margin: 1.5rem 0;
    
    .badge {
        background: \${props => props.theme.colors.primary}15;
        color: \${props => props.theme.colors.primary};
        padding: 0.3rem 0.8rem;
        border-radius: 100px;
        font-size: 0.7rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 1px;
        display: flex;
        align-items: center;
        gap: 0.4rem;
        box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    }

    .line {
        flex: 1;
        height: 1px;
        background: linear-gradient(90deg, transparent, \${props => props.theme.colors.primary}40, transparent);
    }
\`

const LeadCard = styled.div\`
    background: rgba(255, 255, 255, 0.95);
    border: 1px solid rgba(0,0,0,0.05);
    border-radius: 12px;
    padding: 1rem;
    box-shadow: 0 8px 20px rgba(0,0,0,0.06);

    .top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.8rem;

        .who {
            display: flex;
            align-items: center;
            gap: 0.6rem;

            .av {
                width: 32px;
                height: 32px;
                border-radius: 50%;
                background: \${props => props.theme.colors.accent}15;
                color: \${props => props.theme.colors.accent};
                font-weight: 700;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 0.9rem;
            }

            h5 { margin: 0; font-size: 0.9rem; color: \${props => props.theme.colors.textDark}; }
            p { margin: 0; font-size: 0.75rem; color: \${props => props.theme.colors.textMedium}; }
        }
    }

    .pills {
        display: flex;
        gap: 0.4rem;

        .pill {
            font-size: 0.65rem;
            font-weight: 600;
            padding: 0.2rem 0.6rem;
            border-radius: 100px;
        }
        .pill.new { background: \${props => props.theme.colors.primary}15; color: \${props => props.theme.colors.primary}; }
        .pill.src { background: \${props => props.theme.colors.backgroundMedium}; color: \${props => props.theme.colors.textMedium}; }
    }
\`

const FloatingTag = styled.div\`
    position: absolute;
    background: \${props => props.theme.colors.white};
    padding: 0.6rem 1rem;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.08);
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-weight: 600;
    font-size: 0.8rem;
    color: \${props => props.theme.colors.textDark};
    z-index: 10;
    border: 1px solid rgba(255,255,255,0.8);
    animation: \${float} 4s ease-in-out infinite;

    svg {
        color: \${props => props.theme.colors.primary};
        width: 16px;
        height: 16px;
    }

    &.top-right {
        top: 10%;
        right: -10%;
        animation-delay: 1s;
    }

    &.bottom-left {
        bottom: 15%;
        left: -15%;
        animation-delay: 2s;
    }

    @media (max-width: 1200px) {
        &.top-right { right: 0; top: -5%; }
        &.bottom-left { left: 0; bottom: -5%; }
    }

    @media (max-width: 640px) {
        display: none;
    }
\`

function scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
    return (
        <HeroSection>
            <Container>
                <HeroContent>
                    <TextContent>
                        <MainHeading>
                            Transforme conversas de WhatsApp em <strong>Matrículas Reais</strong>
                        </MainHeading>

                        <Subtitle>
                            Sua escola perde matrículas quando um pai interessado fica horas sem resposta. O Maskot centraliza o WhatsApp, organiza seu funil e automatiza o follow-up — para que <strong>nenhuma família esfrie</strong>.
                        </Subtitle>

                        <ButtonGroup>
                            <CTAButton onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}>
                                Fale com um Consultor
                            </CTAButton>
                            <SecondaryButton onClick={() => scrollToSection('como-funciona')}>
                                Ver como funciona <ArrowRight size={18} />
                            </SecondaryButton>
                        </ButtonGroup>

                        <TrustBadges>
                            <div><ShieldCheck /> API Oficial Meta</div>
                            <div><CheckCircle /> Implantação Rápida</div>
                            <div><BadgeCheck /> Suporte Dedicado</div>
                        </TrustBadges>
                    </TextContent>

                    <Visual aria-hidden="true">
                        <PhoneCard>
                            <ChatHeader>
                                <div className="avatar"><User size={20} /></div>
                                <div className="meta">
                                    <strong>Mãe da Ana Clara</strong>
                                    <span>online</span>
                                </div>
                            </ChatHeader>

                            <ChatBody>
                                <Bubble>
                                    Olá! Vi o Instagram da escola. Ainda tem vaga para o Infantil em 2026? ✨
                                </Bubble>

                                <TransformRow>
                                    <span className="line" />
                                    <span className="badge">Maskot CRM</span>
                                    <span className="line" />
                                </TransformRow>

                                <LeadCard>
                                    <div className="top">
                                        <div className="who">
                                            <span className="av">A</span>
                                            <div>
                                                <h5>Ana Clara Souza</h5>
                                                <p>Interesse: Educação Infantil</p>
                                            </div>
                                        </div>
                                        <span style={{ fontSize: '1rem' }}>🎉</span>
                                    </div>
                                    <div className="pills">
                                        <span className="pill new">Novo Lead</span>
                                        <span className="pill src">Instagram</span>
                                    </div>
                                </LeadCard>
                            </ChatBody>
                        </PhoneCard>

                        <FloatingTag className="top-right">
                            <Sparkles /> Resposta Instantânea
                        </FloatingTag>
                        <FloatingTag className="bottom-left">
                            <GraduationCap /> Matrícula Garantida
                        </FloatingTag>
                    </Visual>
                </HeroContent>
            </Container>
        </HeroSection>
    )
}
`;

fs.writeFileSync('src/components/Hero.tsx', content, 'utf8');

