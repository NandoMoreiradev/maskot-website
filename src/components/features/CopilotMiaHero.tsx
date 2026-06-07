'use client'

import styled from 'styled-components'
import Image from 'next/image'

const HeroWrapper = styled.section`
    background: linear-gradient(180deg, ${props => props.theme.colors.pageBackground} 0%, #fff 100%);
    padding: 6rem 2rem 4rem;
    text-align: center;
`

const HeroContainer = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Tag = styled.span`
    background: #FFF0F5; /* Rosa claro/laranja */
    color: #F97316; /* Laranja raposa */
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-weight: 700;
    font-size: 0.875rem;
    margin-bottom: 1.5rem;
    border: 1px solid #FFEDD5;
`

const Title = styled.h1`
    font-size: 3.5rem;
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    color: ${props => props.theme.colors.textDark};
    font-family: ${props => props.theme.typography.fontFamily.main};

    span {
        background: linear-gradient(135deg, #F97316 0%, #F59E0B 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    @media (max-width: ${props => props.theme.breakpoints.md}) {
        font-size: 2.25rem;
    }
`

const Subtitle = styled.p`
    font-size: 1.25rem;
    color: ${props => props.theme.colors.textMedium};
    max-width: 760px;
    line-height: 1.6;
    font-family: ${props => props.theme.typography.fontFamily.main};
    margin-bottom: 3rem;
`

const ImageWrapper = styled.div`
    position: relative;
    width: 200px;
    height: 200px;
    margin-bottom: 2rem;
    filter: drop-shadow(0 20px 30px rgba(249, 115, 22, 0.2));
    animation: float 6s ease-in-out infinite;

    @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-15px); }
        100% { transform: translateY(0px); }
    }
`

export default function CopilotMiaHero() {
    return (
        <HeroWrapper>
            <HeroContainer>
                <ImageWrapper>
                    <Image 
                        src="/mia.png" 
                        alt="Mia - A Raposinha Copilot do Maskot Edu" 
                        fill 
                        style={{ objectFit: 'contain' }} 
                        priority
                    />
                </ImageWrapper>
                <Tag>Inteligência Artificial Nativa</Tag>
                <Title>Conheça a Mia, sua nova <br/><span>Assistente Inteligente</span></Title>
                <Subtitle>
                    A Mia não é apenas um chat. Ela entende o contexto da sua escola, invoca ferramentas complexas 
                    e vasculha o seu banco de dados para te entregar respostas estruturadas em segundos.
                </Subtitle>
            </HeroContainer>
        </HeroWrapper>
    )
}
