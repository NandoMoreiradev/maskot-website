'use client'

import styled, { useTheme } from 'styled-components'
import {
    LayoutDashboard,
    MessageSquare,
    Megaphone,
    Zap,
    BarChart3,
    BrainCircuit,
    CalendarCheck,
    LayoutTemplate,
    Instagram,
    GraduationCap,
    ClipboardList,
    CheckSquare,
    BellRing,
    Phone,
    FolderOpen,
    Mail,
    ArrowRight
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeader, SectionTitle, SectionSubtitle } from '@/components/ui/SectionHeading'
import Link from 'next/link'

const Section = styled.section`
    padding: 6rem 0;
    background: ${props => props.theme.colors.pageBackground};
    position: relative;
`

const Highlight = styled.span`
    color: ${props => props.theme.colors.primary};
    font-weight: 700;
`

const FeaturesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

const FeatureCard = styled(Link)`
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 20px;
    padding: 2rem;
    box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.05);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    height: 100%;
    group: hover;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 40px -10px rgba(37, 99, 235, 0.12);
        border-color: #BFDBFE;

        .action-icon {
            transform: translateX(4px);
            color: #2563EB;
        }
    }
`

const Stage = styled.span<{ $color: string, $bg: string }>`
    align-self: flex-start;
    margin-bottom: 1rem;
    padding: 0.2rem 0.65rem;
    border-radius: 999px;
    background: ${props => props.$bg};
    color: ${props => props.$color};
    border: 1px solid ${props => props.$color}22;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
`

const CardHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.25rem;
`

const IconBox = styled.div<{ $color: string, $bg: string }>`
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: ${props => props.$bg};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    border: 1px solid rgba(0, 0, 0, 0.03);

    svg {
        width: 24px;
        height: 24px;
        color: ${props => props.$color};
    }
`

const FeatureTitle = styled.h3`
    font-size: 1.15rem;
    font-weight: 700;
    color: #0F172A;
    margin: 0;
`

const FeatureDescription = styled.p`
    color: #64748B;
    line-height: 1.6;
    margin-bottom: 2rem;
    font-size: 0.95rem;
    flex-grow: 1;
`

const CardFooter = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #475569;
    font-size: 0.9rem;
    font-weight: 600;
    margin-top: auto;
    transition: color 0.3s ease;
    
    .action-icon {
        transition: transform 0.3s ease, color 0.3s ease;
    }
`

export default function FeaturesSection() {
    const features = [
        {
            title: 'Campanhas em Massa',
            stage: 'Atrair',
            description: 'Dispare mensagens segmentadas para atrair novos alunos ou convidar para eventos. Alcance milhares com um clique.',
            icon: <Megaphone />,
            color: '#EA580C',
            bg: '#FFF7ED',
            href: '/funcionalidades/campanhas'
        },
        {
            title: 'Landing Pages que Convertem',
            stage: 'Atrair',
            description: 'Descreva a página e a Mia escreve o código, com prévia ao vivo, ou monte no editor visual. Agenda, formulários e leads ligados ao funil.',
            icon: <LayoutTemplate />,
            color: '#E11D48',
            bg: '#FFF1F2',
            href: '/funcionalidades/criador-de-landing-pages'
        },
        {
            title: 'Redes Sociais',
            stage: 'Atrair',
            description: 'Crie, aprove e agende posts, responda comentários e automatize Directs, tudo no mesmo lugar.',
            icon: <Instagram />,
            color: '#DB2777',
            bg: '#FDF2F8',
            href: '/funcionalidades/social-media'
        },
        {
            title: 'WhatsApp Centralizado',
            stage: 'Atender',
            description: 'Conecte toda sua equipe no mesmo número oficial. Organize o atendimento e não perca o controle das conversas.',
            icon: <MessageSquare />,
            color: '#16A34A',
            bg: '#F0FDF4',
            href: '/funcionalidades/whatsapp'
        },
        {
            title: 'Ligação de Voz',
            stage: 'Atender',
            description: 'Ligue e receba chamadas pelo navegador, com gravação, registro no cadastro do lead e a Mia atendendo quando a equipe não puder.',
            icon: <Phone />,
            color: '#0E7490',
            bg: '#ECFEFF',
            href: '/funcionalidades/ligacao-de-voz'
        },
        {
            title: 'Caixa de E-mail Integrada',
            stage: 'Atender',
            description: 'Centralize as caixas da escola (matrículas, secretaria e financeiro) com histórico de leads, respostas automáticas e threads organizadas.',
            icon: <Mail />,
            color: '#2563EB',
            bg: '#EFF6FF',
            href: '/funcionalidades/caixa-de-email'
        },
        {
            title: 'Mia, a Copilota de IA',
            stage: 'Atender',
            description: 'Sua copilota prepara o briefing do dia, analisa cada lead e sugere a próxima ação para focar em fechar matrículas.',
            icon: <BrainCircuit />,
            color: '#9333EA',
            bg: '#FAF5FF',
            href: '/funcionalidades/copilot-mia'
        },
        {
            title: 'Agente Comercial da Mia',
            stage: 'Negociar',
            description: 'A Mia vigia o funil e avisa quando um lead esfria, uma família falta à visita ou a matrícula para, com o próximo passo pronto.',
            icon: <BellRing />,
            color: '#EA580C',
            bg: '#FFF7ED',
            href: '/funcionalidades/agente-comercial'
        },
        {
            title: 'Funil de Matrículas Visual',
            stage: 'Negociar',
            description: 'Visualize todos os interessados em colunas (Kanban), saiba quem visitou, quem está negociando e quem sumiu.',
            icon: <LayoutDashboard />,
            color: '#2563EB',
            bg: '#EFF6FF',
            href: '/funcionalidades/gestao-comercial'
        },
        {
            title: 'Agendamento de Visitas',
            stage: 'Negociar',
            description: 'Confirme e gerencie visitas direto pelo funil — sem ida e volta manual de mensagens pra fechar horário com as famílias.',
            icon: <CalendarCheck />,
            color: '#4F46E5',
            bg: '#EEF2FF',
            href: '/funcionalidades/agendamento'
        },
        {
            title: 'Automações e Jornadas',
            stage: 'Negociar',
            description: 'Crie réguas e jornadas que cobram o retorno da família. Se o lead não respondeu, o Maskot manda mensagem para reaquecer.',
            icon: <Zap />,
            color: '#D97706',
            bg: '#FEF3C7',
            href: '/funcionalidades/automacoes'
        },
        {
            title: 'Onboarding de Novos Alunos',
            stage: 'Matricular',
            description: 'Padronize a entrada de novos alunos, com checklist de documentos e acolhida desde o primeiro dia.',
            icon: <GraduationCap />,
            color: '#7C3AED',
            bg: '#F5F3FF',
            href: '/funcionalidades/onboarding'
        },
        {
            title: 'Pesquisas de Satisfação e NPS',
            stage: 'Matricular',
            description: 'Meça a satisfação de pais e alunos com NPS e CSAT e antecipe cancelamentos antes que virem perdas.',
            icon: <ClipboardList />,
            color: '#0D9488',
            bg: '#F0FDFA',
            href: '/funcionalidades/pesquisas'
        },
        {
            title: 'Analytics e Relatórios',
            stage: 'Matricular',
            description: 'Descubra de onde vêm seus alunos e onde você perde matrículas. Invista seu orçamento apenas no que traz resultado.',
            icon: <BarChart3 />,
            color: '#0891B2',
            bg: '#ECFEFF',
            href: '/funcionalidades/analytics'
        },
        {
            title: 'Gestão de Tarefas',
            stage: 'Gerir',
            description: 'Demandas de qualquer setor da escola em um só lugar, com Kanban, checklists e tarefas recorrentes.',
            icon: <CheckSquare />,
            color: '#475569',
            bg: '#F8FAFC',
            href: '/funcionalidades/gestao-tarefas'
        },
        {
            title: 'Drive de Documentos',
            stage: 'Gerir',
            description: 'Contratos e documentos em pastas com acesso por cargo, edição de Word e Excel no navegador, links com senha, versões e lixeira.',
            icon: <FolderOpen />,
            color: '#0369A1',
            bg: '#F0F9FF',
            href: '/funcionalidades/drive-de-documentos'
        }
    ];

    return (
        <Section id="recursos">
            <Container>
                <SectionHeader $maxWidth="800px" $marginBottom="4rem">
                    <SectionTitle>
                        Um ecossistema completo para <Highlight>Escolas</Highlight>
                    </SectionTitle>
                    <SectionSubtitle>
                        Muito mais que um CRM. O Maskot une atração, conversão e relacionamento em uma única plataforma, desenhada para acelerar suas matrículas.
                    </SectionSubtitle>
                </SectionHeader>

                <FeaturesGrid>
                    {features.map((feature, index) => (
                        <FeatureCard key={index} href={feature.href}>
                            <Stage $color={feature.color} $bg={feature.bg}>{feature.stage}</Stage>
                            <CardHeader>
                                <IconBox $color={feature.color} $bg={feature.bg}>
                                    {feature.icon}
                                </IconBox>
                                <FeatureTitle>{feature.title}</FeatureTitle>
                            </CardHeader>
                            <FeatureDescription>
                                {feature.description}
                            </FeatureDescription>
                            <CardFooter>
                                Saiba mais
                                <ArrowRight className="action-icon" size={18} />
                            </CardFooter>
                        </FeatureCard>
                    ))}
                </FeaturesGrid>
            </Container>
        </Section>
    )
}