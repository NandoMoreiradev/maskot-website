const fs = require('fs');

const heroContent = `'use client'

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
    background-color: #060B19; /* Azul Marinho Profundo / Quase Preto */
    position: relative;
    padding-top: 11rem;
    padding-bottom: 6rem;
    z-index: 1;
    overflow: hidden;

    /* Brilho sofisticado no fundo (Spotlight) */
    &::before {
        content: '';
        position: absolute;
        top: -20%;
        left: 20%;
        width: 60vw;
        height: 60vw;
        background: radial-gradient(circle, \${props => props.theme.colors.primary} 0%, transparent 60%);
        opacity: 0.15;
        filter: blur(120px);
        z-index: -2;
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
    color: #F8FAFC; /* Branco elegante */
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
    color: #94A3B8; /* Cinza claro elegante */
    max-width: 540px;
    animation: \${fadeUp} 0.8s ease-out 0.2s forwards;
    opacity: 0;

    strong {
        color: #F8FAFC;
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
        box-shadow: 0 6px 20px rgba(37, 99, 235, 0.6);
    }
\`

const SecondaryButton = styled(ButtonBase)\`
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    color: #F8FAFC;
    border: 1px solid rgba(255,255,255,0.1);
    
    &:hover {
        background: rgba(255, 255, 255, 0.1);
        border-color: rgba(255,255,255,0.2);
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
        color: #64748B;
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
    background: #0B141A; /* Fundo WhatsApp Dark Mode */
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 24px;
    width: 100%;
    max-width: 340px;
    box-shadow: 0 30px 60px rgba(0,0,0,0.4), 
                inset 0 1px 0 rgba(255,255,255,0.1);
    transform: rotateY(-4deg) rotateX(4deg);
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    animation: \${floatSlow} 6s ease-in-out infinite;
    overflow: hidden;

    &:hover {
        transform: rotateY(0deg) rotateX(0deg);
    }
\`

const ChatHeader = styled.div\`
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 1rem;
    background: #202C33; /* Header WhatsApp Dark */
    color: #E9EDEF;

    .avatar {
        width: 38px;
        height: 38px;
        background: #DFE5E7;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #54656F;
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
            opacity: 0.7;
            color: #00A884; /* Verde status online */
        }
    }
\`

const ChatBody = styled.div\`
    padding: 1.5rem 1rem;
    /* Imagem de fundo opcional do WhatsApp escuro pode ir aqui */
\`

const Bubble = styled.div\`
    background: #202C33; /* Bubble incoming WhatsApp Dark */
    color: #E9EDEF;
    padding: 0.6rem 0.8rem;
    border-radius: 0 12px 12px 12px;
    font-size: 0.9rem;
    line-height: 1.4;
    box-shadow: 0 1px 1px rgba(0,0,0,0.2);
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
        background: #202C33;
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
        background: rgba(37, 99, 235, 0.15);
        color: #60A5FA;
        border: 1px solid rgba(37, 99, 235, 0.3);
        padding: 0.3rem 0.8rem;
        border-radius: 100px;
        font-size: 0.7rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 1px;
        display: flex;
        align-items: center;
        gap: 0.4rem;
    }

    .line {
        flex: 1;
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
    }
\`

const LeadCard = styled.div\`
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 12px;
    padding: 1rem;
    box-shadow: 0 8px 20px rgba(0,0,0,0.2);
    backdrop-filter: blur(10px);

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
                background: \${props => props.theme.colors.accent}20;
                color: \${props => props.theme.colors.accent};
                font-weight: 700;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 0.9rem;
            }

            h5 { margin: 0; font-size: 0.9rem; color: #E9EDEF; }
            p { margin: 0; font-size: 0.75rem; color: #8696A0; }
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
        .pill.new { background: rgba(37, 99, 235, 0.2); color: #60A5FA; border: 1px solid rgba(37,99,235,0.3); }
        .pill.src { background: rgba(255,255,255,0.1); color: #94A3B8; }
    }
\`

const FloatingTag = styled.div\`
    position: absolute;
    background: #1E293B;
    padding: 0.6rem 1rem;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-weight: 600;
    font-size: 0.8rem;
    color: #F8FAFC;
    z-index: 10;
    border: 1px solid rgba(255,255,255,0.1);
    animation: \${float} 4s ease-in-out infinite;

    svg {
        color: \${props => props.theme.colors.primaryLight};
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

fs.writeFileSync('src/components/Hero.tsx', heroContent, 'utf8');

// Now we need to update Header.tsx so the text is white when scrolled=false (at the top of the dark hero)
let headerContent = fs.readFileSync('src/components/Header.tsx', 'utf8');
// Assuming we already have the $scrolled prop in HeaderWrapper, we need to pass it to links.
// Since modifying all links is complex, we can use a CSS cascade in HeaderWrapper:
headerContent = headerContent.replace(
    /const HeaderWrapper = styled\.header<\{ \$scrolled: boolean \}>`[\s\S]*?transition: all 0\.3s ease;\n`/m,
    `const HeaderWrapper = styled.header<{ $scrolled: boolean }>\`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: \${props => props.$scrolled ? 'rgba(255, 255, 255, 0.90)' : 'transparent'};
    backdrop-filter: \${props => props.$scrolled ? 'blur(12px) saturate(180%)' : 'none'};
    border-bottom: \${props => props.$scrolled ? '1px solid rgba(0, 0, 0, 0.05)' : '1px solid transparent'};
    transition: all 0.3s ease;
    
    /* Trick to change text color when on top of dark hero */
    \${props => !props.$scrolled && \`
        color: white;
        a, button:not([class*="TrialButton"]) {
            color: white !important;
        }
        svg {
            color: white !important;
        }
        .text strong, .text span {
            color: inherit !important;
        }
    \`}
\``
);

fs.writeFileSync('src/components/Header.tsx', headerContent, 'utf8');

