'use client'

import styled from 'styled-components'

const HeroSection = styled.section`
  min-height: 90vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, 
    ${props => props.theme.colors.primary}15 0%, 
    ${props => props.theme.colors.secondary}10 50%, 
    ${props => props.theme.colors.accent}08 100%
  );
  position: relative;
  overflow: hidden;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
`

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`

const TextContent = styled.div`
  z-index: 2;
`

const MainHeading = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, 
    ${props => props.theme.colors.primary} 0%, 
    ${props => props.theme.colors.secondary} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: ${props => props.theme.colors.textMedium};
  margin-bottom: 2rem;
  line-height: 1.6;
  max-width: 500px;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin: 0 auto 2rem;
  }
`

const CTAButton = styled.button`
  background: linear-gradient(135deg, 
    ${props => props.theme.colors.primary} 0%, 
    ${props => props.theme.colors.secondary} 100%
  );
  color: white;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3);
  margin-right: 1rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 25px rgba(0, 123, 255, 0.4);
  }

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 1rem;
    width: 100%;
  }
`

const SecondaryButton = styled.button`
  background: transparent;
  color: ${props => props.theme.colors.primary};
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.primary};
    color: white;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

const VisualContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const MockupCard = styled.div`
  background: ${props => props.theme.colors.white};
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  max-width: 400px;
  width: 100%;
  transform: rotate(-5deg);
  transition: all 0.3s ease;

  &:hover {
    transform: rotate(0deg) scale(1.05);
  }
`

const MockupHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${props => props.theme.colors.lightGray};
`

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, 
    ${props => props.theme.colors.primary} 0%, 
    ${props => props.theme.colors.secondary} 100%
  );
  margin-right: 1rem;
`

const MockupText = styled.div`
  h4 {
    margin: 0 0 0.5rem 0;
    font-size: 1rem;
    color: ${props => props.theme.colors.textDark};
  }
  p {
    margin: 0;
    font-size: 0.875rem;
    color: ${props => props.theme.colors.textMedium};
  }
`

const StatsRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`

const StatItem = styled.div`
  text-align: center;
  
  .number {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${props => props.theme.colors.primary};
    margin-bottom: 0.25rem;
  }
  
  .label {
    font-size: 0.75rem;
    color: ${props => props.theme.colors.textMedium};
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
`

const ProgressBar = styled.div`
  background: ${props => props.theme.colors.lightGray};
  height: 8px;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 0.5rem;
  
  &:after {
    content: '';
    display: block;
    height: 100%;
    width: 75%;
    background: linear-gradient(90deg, 
      ${props => props.theme.colors.primary} 0%, 
      ${props => props.theme.colors.secondary} 100%
    );
    border-radius: 4px;
    animation: fillProgress 2s ease-out;
  }
  
  @keyframes fillProgress {
    from { width: 0; }
    to { width: 75%; }
  }
`

export default function Hero() {
    return (
        <HeroSection>
            <Container>
                <HeroContent>
                    <TextContent>
                        <MainHeading>
                            A única plataforma que <strong>realmente</strong> entende escolas
                        </MainHeading>
                        <Subtitle>
                            Pare de perder leads entre WhatsApp, planilhas e emails.
                            Centralize tudo em uma plataforma que conecta cada ponto da jornada do prospect.
                        </Subtitle>
                        <div>
                            <CTAButton>
                                Teste 14 dias grátis
                            </CTAButton>
                            <SecondaryButton>
                                Ver demonstração
                            </SecondaryButton>
                        </div>
                    </TextContent>

                    <VisualContent>
                        <MockupCard>
                            <MockupHeader>
                                <Avatar />
                                <MockupText>
                                    <h4>Maria Santos</h4>
                                    <p>Coordenadora Pedagógica</p>
                                </MockupText>
                            </MockupHeader>

                            <StatsRow>
                                <StatItem>
                                    <div className="number">127</div>
                                    <div className="label">Leads Ativos</div>
                                </StatItem>
                                <StatItem>
                                    <div className="number">89%</div>
                                    <div className="label">Conv. Rate</div>
                                </StatItem>
                                <StatItem>
                                    <div className="number">45</div>
                                    <div className="label">Matrículas</div>
                                </StatItem>
                            </StatsRow>

                            <div>
                                <p style={{fontSize: '0.875rem', marginBottom: '0.5rem', color: '#6C757D'}}>
                                    Meta de conversão mensal
                                </p>
                                <ProgressBar />
                                <p style={{fontSize: '0.75rem', color: '#28A745', margin: 0}}>
                                    ↗ +23% vs mês anterior
                                </p>
                            </div>
                        </MockupCard>
                    </VisualContent>
                </HeroContent>
            </Container>
        </HeroSection>
    )
}