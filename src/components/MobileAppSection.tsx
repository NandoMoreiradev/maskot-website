'use client'

import styled from 'styled-components'
import {
    LayoutDashboard,
    MapPin,
    CheckSquare,
    BarChart3,
    MessageSquare,
    Smartphone,
    Users,
    CheckCircle,
    Calendar,
    MessageCircle,
    BarChart2,
    List,
    LayoutGrid,
    SlidersHorizontal,
    Search,
    Plus,
    Menu
} from 'lucide-react'

const Section = styled.section`
    padding: 6rem 0;
    background: linear-gradient(180deg, ${props => props.theme.colors.pageBackground} 0%, #f8faff 100%);
    position: relative;
    overflow: hidden;
`

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
`

const FlexWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 4rem;

    @media (max-width: 968px) {
        flex-direction: column-reverse;
        gap: 3rem;
    }
`

// --- PHONE MOCKUP STYLES ---

const PhoneWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    position: relative;
    
    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 120%;
        height: 120%;
        background: radial-gradient(circle, ${props => props.theme.colors.primary}30 0%, transparent 60%);
        z-index: 0;
        filter: blur(40px);
    }
    
    animation: float 6s ease-in-out infinite;
        
    @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-15px); }
        100% { transform: translateY(0px); }
    }
`

const PhoneMockup = styled.div`
    width: 320px;
    height: 640px;
    background: #111;
    border-radius: 40px;
    border: 10px solid #111;
    box-shadow: 
        0 25px 50px -12px rgba(0, 0, 0, 0.4),
        inset 0 0 0 2px rgba(255, 255, 255, 0.1);
    position: relative;
    overflow: hidden;
    z-index: 1;
    display: flex;
    flex-direction: column;
`

const BezelNotch = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 110px;
    height: 24px;
    background: #111;
    border-bottom-left-radius: 18px;
    border-bottom-right-radius: 18px;
    z-index: 20;

    &::after {
        content: '';
        position: absolute;
        top: 6px;
        right: 28px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #000;
        box-shadow: inset 0 0 2px rgba(255,255,255,0.15);
    }
`

const PhoneScreen = styled.div`
    flex: 1;
    background: #f4f6f8; /* Core Mobile Theme */
    display: flex;
    flex-direction: column;
    color: #343A40;
    position: relative;
    border-radius: 30px; /* Inside border radius */
    overflow: hidden;
`

const ScreenHeader = styled.div`
    padding: 2.5rem 1rem 1rem;
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const HeaderTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.5rem;
    
    h3 {
        font-size: 1.3rem;
        font-weight: 700;
        margin: 0;
        color: #212529;
    }
`

const AddButton = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 10px;
    background: #007BFF;
    display: flex;
    align-items: center;
    justify-content: center;
    
    svg {
        color: #FFFFFF;
    }
`

const Toolbar = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: #FFFFFF;
    padding: 0.5rem 1rem;
    border-bottom: 1px solid #DEE2E6;
    box-shadow: 0 1px 2px rgba(0,0,0,0.02);
`

const SearchMock = styled.div`
    flex: 1;
    background: #f4f6f8;
    height: 36px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    padding: 0 0.8rem;
    gap: 0.5rem;

    span {
        font-size: 0.8rem;
        color: #6C757D;
    }
    
    svg {
        color: #6C757D;
    }
`

const ActionIcon = styled.div<{ $active?: boolean }>`
    width: 36px;
    height: 36px;
    border-radius: 10px;
    background: ${props => props.$active ? '#e0f2fe' : '#f4f6f8'};
    display: flex;
    align-items: center;
    justify-content: center;
    
    svg {
        color: ${props => props.$active ? '#007BFF' : '#6C757D'};
    }
`

const ViewToggle = styled.div`
    display: flex;
    background: #f4f6f8;
    border-radius: 10px;
    border: 1px solid #DEE2E6;
    overflow: hidden;

    div {
        padding: 0.4rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .active {
        background: rgba(0,123,255,0.08);
        svg { color: #007BFF; }
    }
    .inactive {
        svg { color: #6C757D; }
    }
`

const ScreenBody = styled.div`
    flex: 1;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    overflow: hidden;
`

const LeadCardMock = styled.div`
    background: #FFFFFF;
    border: 1px solid #DEE2E6;
    border-radius: 12px;
    padding: 1rem;
    box-shadow: 0 1px 3px rgba(0,0,0,0.05);
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    .top {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        .lead-info {
            display: flex;
            align-items: center;
            gap: 0.8rem;
            
            .avatar {
                width: 38px;
                height: 38px;
                border-radius: 19px;
                background: #e0f2fe;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 0.9rem;
                font-weight: 700;
                color: #007BFF;
            }
            
            .text {
                h4 {
                    font-size: 0.95rem;
                    margin: 0 0 0.1rem;
                    color: #212529;
                }
                p {
                    font-size: 0.75rem;
                    color: #6C757D;
                    margin: 0;
                }
            }
        }
        
        .score {
            font-size: 1.1rem;
        }
    }

    .bottom {
        display: flex;
        gap: 0.5rem;
        
        .pill {
            font-size: 0.65rem;
            padding: 0.25rem 0.5rem;
            border-radius: 100px;
            font-weight: 600;
            background: #E9ECEF;
            color: #6C757D;

            &.blue { background: #e0f2fe; color: #0056b3; }
            &.green { background: #d3f9d8; color: #2b8a3e; }
        }
    }
`

const PhoneNav = styled.div`
    height: 70px;
    background: #FFFFFF;
    border-top: 1px solid #DEE2E6;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 10px; /* Safe area inset */
    z-index: 10;
`

const NavItemMock = styled.div<{ $active?: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.2rem;
    color: ${props => props.$active ? '#007BFF' : '#6C757D'};
    padding: 0.5rem;
    position: relative;
    
    svg {
        width: 22px;
        height: 22px;
    }
    
    span {
        font-size: 0.55rem;
        font-weight: 700;
    }

    .badge {
        position: absolute;
        top: 5px;
        right: 8px;
        width: 8px; height: 8px;
        border-radius: 4px;
        background: #e03131;
    }
`

// --- CONTENT STYLES ---

const ContentContainer = styled.div`
    flex: 1;
`

const Badge = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: ${props => props.theme.colors.primary}15;
    color: ${props => props.theme.colors.primary};
    border-radius: 100px;
    font-size: 0.85rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 1.5rem;
`

const Title = styled.h2`
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
    color: ${props => props.theme.colors.textDark};
    line-height: 1.2;

    span {
        color: ${props => props.theme.colors.primary};
        display: block;
    }
        
    @media (max-width: 768px) {
        font-size: 2rem;
    }
`

const Description = styled.p`
    font-size: 1.1rem;
    color: ${props => props.theme.colors.textMedium};
    line-height: 1.6;
    margin-bottom: 2.5rem;
`

const FeaturesList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    margin-bottom: 3rem;
    
    @media (max-width: 500px) {
        grid-template-columns: 1fr;
    }
`

const FeatureItem = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 1rem;
`

const IconBox = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background: ${props => props.theme.colors.primary}10;
    color: ${props => props.theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    
    svg {
        width: 20px;
        height: 20px;
    }
`

const FeatureText = styled.div`
    h4 {
        font-size: 1rem;
        font-weight: 700;
        color: ${props => props.theme.colors.textDark};
        margin-bottom: 0.2rem;
    }
    p {
        font-size: 0.85rem;
        color: ${props => props.theme.colors.textMedium};
        margin: 0;
        line-height: 1.4;
    }
`

const StoreButtonsWrapper = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
`

const StoreButton = styled.div`
    display: flex;
    align-items: center;
    gap: 0.8rem;
    background: #1A1A1A;
    color: white;
    padding: 0.8rem 1.2rem;
    border-radius: 12px;
    cursor: not-allowed;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
    border: 1px solid rgba(255,255,255,0.1);
    
    svg {
        width: 24px;
        height: 24px;
    }
    
    .text-wrapper {
        display: flex;
        flex-direction: column;
        
        span.small {
            font-size: 0.65rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            color: rgba(255,255,255,0.7);
        }
        
        span.large {
            font-size: 1.1rem;
            font-weight: 600;
            line-height: 1.1;
        }
    }
    
    .coming-soon {
        position: absolute;
        top: 0;
        right: 0;
        background: ${props => props.theme.colors.primary};
        color: white;
        font-size: 0.6rem;
        font-weight: 700;
        padding: 0.2rem 0.6rem;
        border-bottom-left-radius: 8px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        border-color: rgba(255,255,255,0.2);
    }
`

export default function MobileAppSection() {
    return (
        <Section id="mobile-app">
            <Container>
                <FlexWrapper>
                    {/* Mockup do App em CSS com o tema claro oficial */}
                    <PhoneWrapper>
                        <PhoneMockup>
                            <BezelNotch />
                            
                            <PhoneScreen>
                                <ScreenHeader>
                                    <HeaderTop>
                                        <h3>Leads</h3>
                                        <AddButton>
                                            <Plus size={20} strokeWidth={2.5} />
                                        </AddButton>
                                    </HeaderTop>
                                </ScreenHeader>
                                
                                <Toolbar>
                                    <SearchMock>
                                        <Search size={16} />
                                        <span>Buscar...</span>
                                    </SearchMock>
                                    <ActionIcon>
                                        <SlidersHorizontal size={18} />
                                    </ActionIcon>
                                    <ViewToggle>
                                        <div className="active"><List size={16} /></div>
                                        <div className="inactive"><LayoutGrid size={16} /></div>
                                    </ViewToggle>
                                </Toolbar>

                                <ScreenBody>
                                    {/* Lead 1 */}
                                    <LeadCardMock>
                                        <div className="top">
                                            <div className="lead-info">
                                                <div className="avatar">A</div>
                                                <div className="text">
                                                    <h4>Ana Clara Souza</h4>
                                                    <p>Interesse: Ensino Médio</p>
                                                </div>
                                            </div>
                                            <span className="score">🔥</span>
                                        </div>
                                        <div className="bottom">
                                            <span className="pill blue">Nova</span>
                                            <span className="pill">Instagram</span>
                                        </div>
                                    </LeadCardMock>

                                    {/* Lead 2 */}
                                    <LeadCardMock>
                                        <div className="top">
                                            <div className="lead-info">
                                                <div className="avatar" style={{background: '#d3f9d8', color: '#2b8a3e'}}>M</div>
                                                <div className="text">
                                                    <h4>Marcos Pontes</h4>
                                                    <p>Interesse: Infantil 2</p>
                                                </div>
                                            </div>
                                            <span className="score">❄️</span>
                                        </div>
                                        <div className="bottom">
                                            <span className="pill green">Visita Agendada</span>
                                            <span className="pill">Google</span>
                                        </div>
                                    </LeadCardMock>
                                    
                                    {/* Lead 3 */}
                                    <LeadCardMock>
                                        <div className="top">
                                            <div className="lead-info">
                                                <div className="avatar" style={{background: '#FFE8CC', color: '#E67700'}}>C</div>
                                                <div className="text">
                                                    <h4>Camila Andrade</h4>
                                                    <p>Pendente Retorno</p>
                                                </div>
                                            </div>
                                            <span className="score">☀️</span>
                                        </div>
                                        <div className="bottom">
                                            <span className="pill">Negociação</span>
                                            <span className="pill">Indicação</span>
                                        </div>
                                    </LeadCardMock>
                                </ScreenBody>
                                
                                <PhoneNav>
                                    <NavItemMock $active>
                                        <Users />
                                        <span>Leads</span>
                                    </NavItemMock>
                                    <NavItemMock>
                                        <CheckCircle />
                                        <span>Atividades</span>
                                    </NavItemMock>
                                    <NavItemMock>
                                        <Calendar />
                                        <span>Visitas</span>
                                    </NavItemMock>
                                    <NavItemMock>
                                        <MessageCircle />
                                        <span>WhatsApp</span>
                                        <div className="badge" />
                                    </NavItemMock>
                                    <NavItemMock>
                                        <BarChart2 />
                                        <span>Análises</span>
                                    </NavItemMock>
                                    <NavItemMock>
                                        <Menu />
                                        <span>Menu</span>
                                    </NavItemMock>
                                </PhoneNav>
                            </PhoneScreen>
                            
                        </PhoneMockup>
                    </PhoneWrapper>
                    
                    {/* Conteúdo à direita */}
                    <ContentContainer>
                        <Badge>
                            <Smartphone size={16} />
                            Novo App Mobile
                        </Badge>
                        
                        <Title>
                            O poder do Maskot, <span>na palma da sua mão.</span>
                        </Title>
                        
                        <Description>
                            Sabemos que a rotina na escola não para. Com o novo aplicativo mobile do Maskot, você gerencia comercial, visitas e relacionamento com os pais em tempo real, de qualquer lugar.
                        </Description>
                        
                        <FeaturesList>
                            <FeatureItem>
                                <IconBox>
                                    <LayoutDashboard />
                                </IconBox>
                                <FeatureText>
                                    <h4>Gestão de Leads</h4>
                                    <p>Pipeline na palma da mão.</p>
                                </FeatureText>
                            </FeatureItem>
                            
                            <FeatureItem>
                                <IconBox>
                                    <MapPin />
                                </IconBox>
                                <FeatureText>
                                    <h4>Visitas</h4>
                                    <p>Acompanhe e confirme agendamentos.</p>
                                </FeatureText>
                            </FeatureItem>
                            
                            <FeatureItem>
                                <IconBox>
                                    <CheckSquare />
                                </IconBox>
                                <FeatureText>
                                    <h4>Atividades</h4>
                                    <p>Gerencie as tarefas de cada lead facilmente.</p>
                                </FeatureText>
                            </FeatureItem>
                            
                            <FeatureItem>
                                <IconBox>
                                    <BarChart3 />
                                </IconBox>
                                <FeatureText>
                                    <h4>Análise de Dados</h4>
                                    <p>Métricas e relatórios de conversão.</p>
                                </FeatureText>
                            </FeatureItem>
                            
                            <FeatureItem style={{ gridColumn: '1 / -1' }}>
                                <IconBox>
                                    <MessageSquare />
                                </IconBox>
                                <FeatureText>
                                    <h4>Mensagens de WhatsApp</h4>
                                    <p>Responda as dúvidas rapidamente na interface nativa mobile.</p>
                                </FeatureText>
                            </FeatureItem>
                        </FeaturesList>
                        
                        <StoreButtonsWrapper>
                            <StoreButton>
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.19 2.31-.88 3.5-.84 1.14.03 2.15.42 2.89 1.12-2.52 1.48-2.12 4.96.44 6.01-.59 1.63-1.41 3.25-2.61 4.41l-.7.62a19.78 19.78 0 0 1-1.6 1.45zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                                </svg>
                                <div className="text-wrapper">
                                    <span className="small">Download on the</span>
                                    <span className="large">App Store</span>
                                </div>
                                <span className="coming-soon">Em breve</span>
                            </StoreButton>
                            
                            <StoreButton>
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M3.56 1.05C3.12 1.43 2.87 2.12 2.87 3.03v17.94c0 .91.24 1.6.69 1.98l.11.11 10.02-10.03v-.21L3.67.94l-.11.11zm11.23 11.23 3.32 3.32-3.32 3.32.22.22 3.96-2.25c1.13-.64 1.13-1.68 0-2.32l-3.96-2.25-.22.22zM4.09 21.67A1.55 1.55 0 0 0 5 22.01L14.71 12 5 2.01a1.55 1.55 0 0 0-.91.34L4.09 2.45v19.1lz0 .12z"/>
                                </svg>
                                <div className="text-wrapper">
                                    <span className="small">Get it on</span>
                                    <span className="large">Google Play</span>
                                </div>
                                <span className="coming-soon">Em breve</span>
                            </StoreButton>
                        </StoreButtonsWrapper>
                    </ContentContainer>
                </FlexWrapper>
            </Container>
        </Section>
    )
}
