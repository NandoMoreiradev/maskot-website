'use client'

import styled from 'styled-components'

const HeroWrapper = styled.section`
    background: linear-gradient(180deg, ${props => props.theme.colors.pageBackground} 0%, #fff 100%);
    padding: 6rem 2rem 4rem;
    text-align: center;
`

const HeroContainer = styled.div`
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Tag = styled.span`
    background: #E0F2FE;
    color: #0284C7;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-weight: 700;
    font-size: 0.875rem;
    margin-bottom: 1.5rem;
    border: 1px solid #BAE6FD;
`

const Title = styled.h1`
    font-size: 3.5rem;
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    color: ${props => props.theme.colors.textDark};
    font-family: ${props => props.theme.typography.fontFamily.main};

    span {
        background: linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%);
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
    margin-bottom: 2.5rem;
`

const CTAButton = styled.button`
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%);
    color: white;
    font-weight: 700;
    font-size: 1.1rem;
    padding: 1rem 2.5rem;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    text-decoration: none;
    box-shadow: 0 8px 25px rgba(139, 92, 246, 0.35);
    transition: all 0.3s ease;
    margin-bottom: 3rem;

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 12px 35px rgba(139, 92, 246, 0.45);
    }
`

const StatsBar = styled.div`
    display: flex;
    gap: 3rem;
    justify-content: center;
    flex-wrap: wrap;
    padding: 2rem 3rem;
    background: white;
    border-radius: 20px;
    border: 1px solid #F1F5F9;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
    width: 100%;
    max-width: 760px;

    @media (max-width: ${props => props.theme.breakpoints.md}) {
        gap: 1.5rem;
        padding: 1.5rem;
    }
`

const StatItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;

    .number {
        font-size: 2rem;
        font-weight: 800;
        background: linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        line-height: 1;
    }

    .label {
        font-size: 0.875rem;
        color: ${props => props.theme.colors.textMedium};
        font-weight: 500;
        text-align: center;
    }
`

const StatDivider = styled.div`
    width: 1px;
    background: #E2E8F0;
    align-self: stretch;

    @media (max-width: ${props => props.theme.breakpoints.md}) {
        display: none;
    }
`

export default function LandingPagesHero() {
    return (
        <HeroWrapper>
            <HeroContainer>
                <Tag>Criador de Landing Pages</Tag>
                <Title>Páginas que Convertem <br/><span>Sem Digitar Nenhum Código</span></Title>
                <Subtitle>
                    Crie páginas de captura profissionais, com gatilhos de urgência, agendamento de visitas e formulários
                    conectados diretamente ao seu CRM Maskot Edu. Atraia mais alunos em poucos cliques.
                </Subtitle>
                <CTAButton onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}>
                    Criar minha landing page
                </CTAButton>
                <StatsBar>
                    <StatItem>
                        <span className="number">31</span>
                        <span className="label">Tipos de Blocos</span>
                    </StatItem>
                    <StatDivider />
                    <StatItem>
                        <span className="number">7</span>
                        <span className="label">Templates Prontos</span>
                    </StatItem>
                    <StatDivider />
                    <StatItem>
                        <span className="number">100%</span>
                        <span className="label">Sem Código</span>
                    </StatItem>
                    <StatDivider />
                    <StatItem>
                        <span className="number">&lt;5min</span>
                        <span className="label">Para Publicar</span>
                    </StatItem>
                </StatsBar>
            </HeroContainer>
        </HeroWrapper>
    )
}
