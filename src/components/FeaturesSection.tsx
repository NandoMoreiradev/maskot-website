'use client'

import styled, { useTheme } from 'styled-components'
import {
    LayoutDashboard,
    MessageSquare,
    Megaphone,
    Zap,
    Users,
    BarChart3,
    BrainCircuit,
    Smartphone,
    CalendarCheck
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeader, SectionTitle, SectionSubtitle } from '@/components/ui/SectionHeading'

// --- ESTILOS GERAIS DA SEÇÃO ---

const Section = styled.section`
    padding: 6rem 0;
    background: ${props => props.theme.colors.pageBackground};
    position: relative;
    overflow: hidden;
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

export default function FeaturesSection() {
    const theme = useTheme()

    return (
        <Section id="recursos">
            <Container>
                <SectionHeader $maxWidth="800px" $marginBottom="5rem">
                    <SectionTitle>
                        Tudo para focar em <Highlight>Vendas e Captação</Highlight>
                    </SectionTitle>
                    <SectionSubtitle>
                        Cada recurso do Maskot existe para uma só coisa: transformar interessados em alunos matriculados.
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

                    {/* CARD 7: MIA (COPILOTO IA) */}
                    <FeatureCard $gradient={`linear-gradient(to right, ${theme.colors.mia.from}, ${theme.colors.mia.to})`}>
                        <IconWrapper $color={theme.colors.mia.from}>
                            <BrainCircuit />
                        </IconWrapper>
                        <FeatureTitle>Mia, a Copilota de IA</FeatureTitle>
                        <FeatureDescription>
                            Sua copilota de IA prepara o briefing do dia, analisa cada lead e sugere a próxima ação — para o consultor focar em fechar a matrícula.
                        </FeatureDescription>
                        <FeatureList>
                            <li>Briefing diário do funil</li>
                            <li>Diagnóstico de risco por lead</li>
                            <li>Mensagens no tom da escola</li>
                        </FeatureList>
                    </FeatureCard>

                    {/* CARD 8: APP MOBILE */}
                    <FeatureCard $gradient="linear-gradient(to right, #6366F1, #4338CA)">
                        <IconWrapper $color="#4338CA">
                            <Smartphone />
                        </IconWrapper>
                        <FeatureTitle>App Mobile</FeatureTitle>
                        <FeatureDescription>
                            Gerencie comercial, visitas e relacionamento com os pais em tempo real, de qualquer lugar — direto do celular.
                        </FeatureDescription>
                        <FeatureList>
                            <li>Funil de leads no bolso</li>
                            <li>Agenda de visitas</li>
                            <li>WhatsApp nativo mobile</li>
                        </FeatureList>
                    </FeatureCard>

                    {/* CARD 9: AGENDAMENTO DE VISITAS */}
                    <FeatureCard $gradient="linear-gradient(to right, #06B6D4, #0E7490)">
                        <IconWrapper $color="#06B6D4">
                            <CalendarCheck />
                        </IconWrapper>
                        <FeatureTitle>Agendamento de Visitas</FeatureTitle>
                        <FeatureDescription>
                            Confirme e gerencie visitas direto pelo funil — sem ida e volta manual de mensagens pra fechar horário.
                        </FeatureDescription>
                        <FeatureList>
                            <li>Confirmação automática por WhatsApp</li>
                            <li>Lembretes pra não faltar</li>
                            <li>Calendário integrado ao funil</li>
                        </FeatureList>
                    </FeatureCard>
                </FeaturesGrid>
            </Container>
        </Section>
    )
}