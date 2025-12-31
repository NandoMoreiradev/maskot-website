'use client'

import styled from 'styled-components'
import {
    LayoutDashboard,
    MessageSquare,
    Megaphone,
    Zap,
    Users,
    BarChart3
} from 'lucide-react'

// --- ESTILOS GERAIS DA SEÇÃO ---

const Section = styled.section`
    padding: 6rem 0;
    background: ${props => props.theme.colors.pageBackground};
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
    margin-bottom: 5rem;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
`

const SectionTitle = styled.h2`
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.textDark};
    line-height: 1.2;

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
    color: ${props => props.theme.colors.primary};
    font-weight: 700;
`

// --- GRID DE FEATURES ---

const FeaturesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-bottom: 6rem;

    @media (max-width: 968px) {
        grid-template-columns: 1fr;
    }
`

interface FeatureCardProps {
    $gradient: string;
}

const FeatureCard = styled.div<FeatureCardProps>`
    background: ${props => props.theme.colors.white};
    padding: 2.5rem;
    border-radius: 20px;
    border: 1px solid rgba(0,0,0,0.05);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;

    /* Barra colorida no topo */
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 6px;
        background: ${props => props.$gradient};
    }

    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    }
`

const IconWrapper = styled.div<{ $color: string }>`
    width: 64px;
    height: 64px;
    border-radius: 16px;
    background: ${props => props.$color}15; /* 15% opacidade */
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    color: ${props => props.$color};

    svg {
        width: 32px;
        height: 32px;
    }
`

const FeatureTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.textDark};
`

const FeatureDescription = styled.p`
    color: ${props => props.theme.colors.textMedium};
    line-height: 1.6;
    margin-bottom: 1.5rem;
    font-size: 0.95rem;
`

const FeatureList = styled.ul`
    list-style: none;
    padding: 0;

    li {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 0.75rem;
        font-size: 0.9rem;
        color: ${props => props.theme.colors.textDark};
        font-weight: 500;

        /* Bullet point customizado */
        &::before {
            content: '';
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: ${props => props.theme.colors.secondary};
            flex-shrink: 0;
        }
    }
`

// --- BANNER DE INTEGRAÇÃO PREMIUM (GLASSMORPHISM) ---

const IntegrationBanner = styled.div`
    background: linear-gradient(145deg, #1a1a2e 0%, #16213e 100%);
    border-radius: 24px;
    padding: 4rem;
    position: relative;
    overflow: hidden;
    color: white;
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    align-items: center;
    gap: 4rem;
    box-shadow: 0 20px 50px -12px rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.05);

    /* Efeito de Luz de Fundo (Glow Principal) */
    &::before {
        content: '';
        position: absolute;
        top: -50%;
        right: -10%;
        width: 600px;
        height: 600px;
        background: radial-gradient(circle, ${props => props.theme.colors.primary}40 0%, transparent 70%);
        filter: blur(80px);
        opacity: 0.6;
        pointer-events: none;
    }

    /* Ponto de luz secundário */
    &::after {
        content: '';
        position: absolute;
        bottom: -20%;
        left: -10%;
        width: 400px;
        height: 400px;
        background: radial-gradient(circle, ${props => props.theme.colors.secondary}30 0%, transparent 70%);
        filter: blur(60px);
        opacity: 0.4;
        pointer-events: none;
    }

    @media (max-width: 968px) {
        grid-template-columns: 1fr;
        text-align: center;
        padding: 3rem 2rem;
        gap: 3rem;
    }
`

const BannerContent = styled.div`
    position: relative;
    z-index: 2;

    h3 {
        font-size: 2.25rem;
        font-weight: 800;
        margin-bottom: 1.5rem;
        line-height: 1.1;
        background: linear-gradient(90deg, #fff, #cbd5e1);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    p {
        color: rgba(255, 255, 255, 0.7);
        font-size: 1.1rem;
        line-height: 1.6;
        margin-bottom: 0;
    }
`

const StepsWrapper = styled.div`
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 1rem;

    /* Linha conectora (Timeline) */
    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 40px;
        right: 40px;
        height: 2px;
        background: linear-gradient(90deg,
        rgba(255,255,255,0.05) 0%,
        ${props => props.theme.colors.primary} 50%,
        rgba(255,255,255,0.05) 100%
        );
        z-index: 0;
        transform: translateY(-50%);
    }

    @media (max-width: 650px) {
        flex-direction: column;
        gap: 2rem;
        padding: 0;

        /* Linha Vertical no Mobile */
        &::before {
            width: 2px;
            height: 100%;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            background: linear-gradient(180deg,
            rgba(255,255,255,0.05) 0%,
            ${props => props.theme.colors.primary} 50%,
            rgba(255,255,255,0.05) 100%
            );
        }
    }
`

const StepCard = styled.div`
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 1.5rem;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    width: 110px;
    height: 110px;
    position: relative;
    z-index: 1;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);

    /* Ícone */
    .icon {
        color: ${props => props.theme.colors.primary};
        filter: drop-shadow(0 0 8px ${props => props.theme.colors.primary}60);
        transition: transform 0.3s ease;
    }

    span {
        font-size: 0.85rem;
        font-weight: 600;
        color: rgba(255, 255, 255, 0.9);
        text-align: center;
    }

    &:hover {
        transform: translateY(-5px) scale(1.05);
        background: rgba(255, 255, 255, 0.08);
        border-color: ${props => props.theme.colors.primary}60;
        box-shadow: 0 10px 30px rgba(0, 123, 255, 0.2);

        .icon {
            transform: scale(1.1);
            color: white;
        }
    }

    @media (max-width: 650px) {
        width: 140px;
        height: auto;
        padding: 1rem;
        flex-direction: row;
        gap: 1rem;

        span {
            text-align: left;
        }
    }
`

export default function FeaturesSection() {
    return (
        <Section id="recursos">
            <Container>
                <SectionHeader>
                    <SectionTitle>
                        Foque em <Highlight>Vendas e Captação</Highlight>
                    </SectionTitle>
                    <SectionSubtitle>
                        O Maskot é o CRM especializado em transformar interessados em alunos.
                        Organize o comercial, agilize o atendimento e nunca mais perca um lead.
                    </SectionSubtitle>
                </SectionHeader>

                <FeaturesGrid>
                    {/* CARD 1: CRM / KANBAN */}
                    <FeatureCard $gradient="linear-gradient(to right, #007BFF, #00C6FF)">
                        <IconWrapper $color="#007BFF">
                            <LayoutDashboard />
                        </IconWrapper>
                        <FeatureTitle>Funil de Vendas Visual</FeatureTitle>
                        <FeatureDescription>
                            Pare de usar planilhas confusas. Visualize todos os interessados em colunas (Kanban), saiba quem visitou, quem está negociando e quem sumiu.
                        </FeatureDescription>
                        <FeatureList>
                            <li>Arraste e solte para mover leads</li>
                            <li>Histórico completo da negociação</li>
                            <li>Alertas de leads estagnados</li>
                        </FeatureList>
                    </FeatureCard>

                    {/* CARD 2: WHATSAPP CENTRAL */}
                    <FeatureCard $gradient="linear-gradient(to right, #25D366, #128C7E)">
                        <IconWrapper $color="#128C7E">
                            <MessageSquare />
                        </IconWrapper>
                        <FeatureTitle>WhatsApp Centralizado</FeatureTitle>
                        <FeatureDescription>
                            Conecte sua equipe no mesmo número oficial. O diretor acompanha tudo e garante que nenhum pai fique sem resposta.
                        </FeatureDescription>
                        <FeatureList>
                            <li>Múltiplos atendentes no mesmo número</li>
                            <li>Distribuição de conversas por setor</li>
                            <li>Auditoria e gravação de mensagens</li>
                        </FeatureList>
                    </FeatureCard>

                    {/* CARD 3: CAMPANHAS */}
                    <FeatureCard $gradient="linear-gradient(to right, #FD7E14, #F2C94C)">
                        <IconWrapper $color="#FD7E14">
                            <Megaphone />
                        </IconWrapper>
                        <FeatureTitle>Campanhas em Massa</FeatureTitle>
                        <FeatureDescription>
                            Precisa avisar sobre rematrículas ou um evento aberto? Dispare mensagens para milhares de contatos com segurança e segmentação.
                        </FeatureDescription>
                        <FeatureList>
                            <li>Envio seguro (API Oficial)</li>
                            <li>Segmentação por etapa do funil</li>
                            <li>Recuperação de ex-alunos</li>
                        </FeatureList>
                    </FeatureCard>

                    {/* CARD 4: AUTOMAÇÃO */}
                    <FeatureCard $gradient="linear-gradient(to right, #8E2DE2, #4A00E0)">
                        <IconWrapper $color="#8E2DE2">
                            <Zap />
                        </IconWrapper>
                        <FeatureTitle>Régua de Follow-up</FeatureTitle>
                        <FeatureDescription>
                            Crie automações que cobram o retorno do pai. Se o lead não respondeu em 2 dias, o Maskot manda uma mensagem automática para reaquecer.
                        </FeatureDescription>
                        <FeatureList>
                            <li>Mensagens automáticas de saudação</li>
                            <li>Lembretes de visita agendada</li>
                            <li>Follow-up de leads frios</li>
                        </FeatureList>
                    </FeatureCard>

                    {/* CARD 5: EQUIPE */}
                    <FeatureCard $gradient="linear-gradient(to right, #FF416C, #FF4B2B)">
                        <IconWrapper $color="#FF416C">
                            <Users />
                        </IconWrapper>
                        <FeatureTitle>Gestão da Equipe</FeatureTitle>
                        <FeatureDescription>
                            Saiba quem está atendendo bem e quem está demorando. Defina permissões e acompanhe a produtividade do seu time comercial.
                        </FeatureDescription>
                        <FeatureList>
                            <li>Controle de tempo de resposta</li>
                            <li>Permissões de acesso granulares</li>
                            <li>Transferência de leads entre vendedores</li>
                        </FeatureList>
                    </FeatureCard>

                    {/* CARD 6: RELATÓRIOS */}
                    <FeatureCard $gradient="linear-gradient(to right, #11998e, #38ef7d)">
                        <IconWrapper $color="#11998e">
                            <BarChart3 />
                        </IconWrapper>
                        <FeatureTitle>Relatórios de Marketing</FeatureTitle>
                        <FeatureDescription>
                            Descubra de onde vêm seus alunos (Instagram, Google, Indicação). Invista seu orçamento de marketing apenas no que traz resultado.
                        </FeatureDescription>
                        <FeatureList>
                            <li>Origem dos leads (Rastreamento)</li>
                            <li>Taxa de conversão por canal</li>
                            <li>Motivos de perda de venda</li>
                        </FeatureList>
                    </FeatureCard>
                </FeaturesGrid>

                <IntegrationBanner>
                    <BannerContent>
                        <h3>Fluxo sem fricção</h3>
                        <p>
                            Enquanto seus concorrentes usam planilhas, sua escola opera em um fluxo contínuo.
                            Os dados viajam da captação ao fechamento sem trabalho manual.
                        </p>
                    </BannerContent>

                    <StepsWrapper>
                        <StepCard>
                            <MessageSquare className="icon" size={28} />
                            <span>Captação</span>
                        </StepCard>

                        <StepCard>
                            <LayoutDashboard className="icon" size={28} />
                            <span>Qualificação</span>
                        </StepCard>

                        <StepCard>
                            <Users className="icon" size={28} />
                            <span>Visita</span>
                        </StepCard>

                        <StepCard>
                            <Zap className="icon" size={28} />
                            <span>Matrícula</span>
                        </StepCard>
                    </StepsWrapper>
                </IntegrationBanner>
            </Container>
        </Section>
    )
}