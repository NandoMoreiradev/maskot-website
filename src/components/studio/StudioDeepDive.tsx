'use client'

import { useState } from 'react'
import styled from 'styled-components'
import {
    ChevronDown, Gem, Compass, Megaphone, MessageCircle, Globe, Instagram, Repeat, Check, X,
    Target, ClipboardCheck, CalendarClock, LayoutDashboard, Layers, Users, MapPin, BadgeCheck, TrendingUp, Eye,
} from 'lucide-react'
import { openStudioModal } from './StudioHero'

const Section = styled.section`
    padding: 6rem 0;
    background: #FFFFFF;
    overflow: hidden;
`

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
`

const SectionLabel = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: transparent;
    color: #475569;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: 0.4rem 0.8rem;
    border-radius: 999px;
    margin-bottom: 1rem;
    border: 1px solid #E2E8F0;
`

const SectionHead = styled.div`
    text-align: center;
    max-width: 760px;
    margin: 0 auto 3.5rem;

    h3 {
        font-family: ${props => props.theme.typography.fontFamily.main};
        font-size: ${props => props.theme.typography.fontSize['3xl']};
        font-weight: 700;
        letter-spacing: -0.02em;
        line-height: 1.2;
        color: #0F172A;
        margin-bottom: 1rem;
    }

    p {
        font-family: ${props => props.theme.typography.fontFamily.main};
        color: #475569;
        font-size: 1.125rem;
        line-height: 1.6;
    }
`

const Block = styled.div`
    margin-bottom: 8rem;
`

const SplitLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    align-items: center;
    margin-bottom: 8rem;

    @media (max-width: ${props => props.theme.breakpoints.lg}) {
        grid-template-columns: 1fr;
        gap: 3rem;
    }
`

const TextContent = styled.div`
    h3 {
        font-family: ${props => props.theme.typography.fontFamily.main};
        font-size: ${props => props.theme.typography.fontSize['3xl']};
        font-weight: 700;
        margin-bottom: 1.5rem;
        letter-spacing: -0.02em;
        line-height: 1.2;
        color: #0F172A;
    }

    p {
        font-family: ${props => props.theme.typography.fontFamily.main};
        font-size: ${props => props.theme.typography.fontSize.lg};
        color: #475569;
        line-height: 1.6;
        margin-bottom: 2.5rem;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
        list-style: none;
        padding: 0;
    }

    li {
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        font-size: ${props => props.theme.typography.fontSize.base};
        font-weight: 500;
        color: #334155;

        svg {
            color: #A16207;
            flex-shrink: 0;
            margin-top: 2px;
        }
    }
`

const Grid = styled.div<{ $cols?: number }>`
    display: grid;
    grid-template-columns: repeat(${props => props.$cols ?? 3}, 1fr);
    gap: 1.5rem;

    @media (max-width: ${props => props.theme.breakpoints.lg}) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${props => props.theme.breakpoints.md}) {
        grid-template-columns: 1fr;
    }
`

const Card = styled.div`
    background: #FFFFFF;
    padding: 2rem;
    border-radius: 1rem;
    border: 1px solid #E2E8F0;
    transition: all 0.2s;

    &:hover {
        border-color: #CBD5E1;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
    }

    .icon {
        width: 40px;
        height: 40px;
        background: #FFFBEB;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #A16207;
        border: 1px solid #FDE68A;
        margin-bottom: 1.25rem;
    }

    h4 {
        font-size: 1.125rem;
        font-weight: 600;
        color: #0F172A;
        margin-bottom: 0.5rem;
    }

    p {
        font-size: 0.875rem;
        color: #64748B;
        line-height: 1.5;
        margin: 0;
    }
`

const Step = styled(Card)`
    .number {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background: linear-gradient(135deg, #0F172A 0%, #334155 100%);
        color: #FBBF24;
        font-weight: 800;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1.25rem;
    }
`

// ---------------------------------------------------------------- o ano todo

const Phase = styled(Card)`
    .period {
        display: inline-block;
        margin-bottom: 1rem;
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: #A16207;
        background: #FFFBEB;
        border: 1px solid #FDE68A;
        border-radius: 999px;
        padding: 0.3rem 0.75rem;
    }
`

const AlwaysOn = styled.div`
    margin-top: 1.5rem;
    padding: 2rem;
    border-radius: 1rem;
    background: #FFFBEB;
    border: 1px solid #FDE68A;

    h4 {
        font-size: 1.125rem;
        font-weight: 700;
        color: #0F172A;
        margin-bottom: 1.25rem;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem 2rem;

        @media (max-width: ${props => props.theme.breakpoints.md}) {
            grid-template-columns: 1fr;
        }
    }

    li {
        display: flex;
        align-items: flex-start;
        gap: 0.6rem;
        font-size: 0.92rem;
        line-height: 1.5;
        color: #334155;

        svg {
            flex-shrink: 0;
            margin-top: 3px;
            color: #A16207;
        }

        strong { color: #0F172A; }
    }
`

// ---------------------------------------------------------------- comparação

const Compare = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;

    @media (max-width: ${props => props.theme.breakpoints.md}) {
        grid-template-columns: 1fr;
    }
`

const CompareCol = styled.div<{ $highlight?: boolean }>`
    border-radius: 1rem;
    padding: 2rem;
    border: 1px solid ${props => props.$highlight ? '#FDE68A' : '#E2E8F0'};
    background: ${props => props.$highlight ? '#FFFBEB' : '#F8FAFC'};

    h4 {
        font-size: 1.125rem;
        font-weight: 700;
        color: #0F172A;
        margin-bottom: 1.25rem;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    li {
        display: flex;
        align-items: flex-start;
        gap: 0.75rem;
        font-size: 0.95rem;
        line-height: 1.5;
        color: #334155;

        svg {
            flex-shrink: 0;
            margin-top: 3px;
            color: ${props => props.$highlight ? '#A16207' : '#94A3B8'};
        }
    }
`

// ---------------------------------------------------------------- mockup

const Mockup = styled.div`
    background: #FFFFFF;
    border-radius: 1rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
    border: 1px solid #E2E8F0;
    overflow: hidden;
    min-width: 0;
`

const MockupHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0.875rem 1.25rem;
    background: #FFFBEB;
    border-bottom: 1px solid #FDE68A;
    color: #854D0E;
    font-weight: 600;
    font-size: 0.9rem;

    .right {
        margin-left: auto;
        font-size: 0.78rem;
        font-weight: 500;
        color: #64748B;
    }
`

const MockupBody = styled.div`
    display: grid;
    gap: 0.75rem;
    padding: 1rem;
    background: #F8FAFC;
`

const KpiRow = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.625rem;

    .kpi {
        background: #FFFFFF;
        border: 1px solid #E2E8F0;
        border-radius: 10px;
        padding: 0.625rem 0.75rem;
        strong { display: block; font-size: 1.1rem; color: #0F172A; line-height: 1.15; }
        span { font-size: 0.7rem; color: #64748B; }
    }
`

const Funnel = styled.div`
    display: grid;
    gap: 0.5rem;
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 10px;
    padding: 0.875rem;
`

const FunnelRow = styled.div<{ $width: number; $strong?: boolean }>`
    display: grid;
    grid-template-columns: 7.5rem 1fr 2.5rem;
    align-items: center;
    gap: 0.75rem;
    font-size: 0.78rem;
    color: #475569;

    .track {
        height: 10px;
        border-radius: 999px;
        background: #F1F5F9;
        overflow: hidden;
    }

    .bar {
        display: block;
        height: 100%;
        width: ${props => props.$width}%;
        border-radius: 999px;
        background: ${props => props.$strong
            ? 'linear-gradient(90deg, #CA8A04 0%, #A16207 100%)'
            : 'linear-gradient(90deg, #475569 0%, #1E293B 100%)'};
    }

    .count {
        text-align: right;
        font-weight: 700;
        color: #0F172A;
    }
`

const Fine = styled.p`
    margin: 0.75rem 0 0;
    font-size: 0.78rem;
    color: #94A3B8;
    text-align: center;
`

// ---------------------------------------------------------------- programas

const Program = styled.div<{ $featured?: boolean }>`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    border-radius: 1rem;
    background: #FFFFFF;
    border: 1px solid ${props => props.$featured ? '#CA8A04' : '#E2E8F0'};
    box-shadow: ${props => props.$featured
        ? '0 20px 25px -5px rgba(161, 98, 7, 0.12), 0 10px 10px -5px rgba(161, 98, 7, 0.06)'
        : '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)'};

    .flag {
        position: absolute;
        top: -0.75rem;
        left: 2rem;
        background: linear-gradient(135deg, #CA8A04 0%, #A16207 100%);
        color: #FFFFFF;
        font-size: 0.7rem;
        font-weight: 700;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        padding: 0.25rem 0.75rem;
        border-radius: 999px;
    }

    h4 {
        font-size: 1.35rem;
        font-weight: 700;
        color: #0F172A;
        letter-spacing: -0.01em;
        margin-bottom: 0.5rem;
    }

    .lead {
        font-size: 0.95rem;
        color: #64748B;
        line-height: 1.5;
        margin-bottom: 1.5rem;
    }

    .includes {
        font-size: 0.75rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: #64748B;
        margin-bottom: 0.75rem;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0 0 1.75rem;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        flex: 1;
    }

    li {
        display: flex;
        align-items: flex-start;
        gap: 0.6rem;
        font-size: 0.9rem;
        line-height: 1.45;
        color: #334155;

        svg {
            flex-shrink: 0;
            margin-top: 3px;
            color: #A16207;
        }
    }

    .price {
        padding-top: 1.25rem;
        border-top: 1px solid #F1F5F9;
        font-size: 0.85rem;
        color: #64748B;

        strong { color: #0F172A; }
    }
`

const Note = styled.p`
    text-align: center;
    max-width: 700px;
    margin: 2.5rem auto 0;
    font-size: 0.9rem;
    color: #64748B;
    line-height: 1.6;
`

// ---------------------------------------------------------------- seleção (faixa escura)

const Selective = styled.div`
    background: linear-gradient(165deg, #0F172A 0%, #1E293B 100%);
    border-radius: 1.5rem;
    padding: 4rem 3rem;
    color: #FFFFFF;

    @media (max-width: ${props => props.theme.breakpoints.md}) {
        padding: 3rem 1.5rem;
    }

    .head {
        text-align: center;
        max-width: 720px;
        margin: 0 auto 3rem;
    }

    .label {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        color: #FBBF24;
        font-size: 0.8rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        padding: 0.4rem 0.8rem;
        border-radius: 999px;
        margin-bottom: 1rem;
        border: 1px solid rgba(251, 191, 36, 0.35);
    }

    h3 {
        font-size: ${props => props.theme.typography.fontSize['3xl']};
        font-weight: 700;
        letter-spacing: -0.02em;
        line-height: 1.2;
        margin-bottom: 1rem;
        color: #FFFFFF;
    }

    .head p {
        font-size: 1.125rem;
        line-height: 1.6;
        color: #94A3B8;
    }
`

const SelectiveGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin-bottom: 2.5rem;

    @media (max-width: ${props => props.theme.breakpoints.md}) {
        grid-template-columns: 1fr;
    }

    .item {
        padding: 1.5rem;
        border-radius: 1rem;
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .icon {
        color: #FBBF24;
        margin-bottom: 1rem;
    }

    h4 {
        font-size: 1.05rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: #FFFFFF;
    }

    p {
        font-size: 0.9rem;
        line-height: 1.55;
        color: #94A3B8;
        margin: 0;
    }
`

const FitRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;

    @media (max-width: ${props => props.theme.breakpoints.md}) {
        grid-template-columns: 1fr;
    }

    h5 {
        font-size: 0.8rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: #94A3B8;
        margin-bottom: 0.9rem;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    li {
        display: flex;
        align-items: flex-start;
        gap: 0.6rem;
        font-size: 0.92rem;
        line-height: 1.5;
        color: #E2E8F0;
    }

    .yes svg { color: #FBBF24; }
    .no svg { color: #64748B; }
    li svg { flex-shrink: 0; margin-top: 3px; }
`

const ApplyRow = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2.5rem;
`

const ApplyButton = styled.button`
    border: none;
    background: linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%);
    color: #0F172A;
    font-weight: 700;
    font-size: 1rem;
    padding: 0.85rem 2rem;
    border-radius: 100px;
    cursor: pointer;
    transition: all 0.25s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(251, 191, 36, 0.3);
    }
`

// ---------------------------------------------------------------- entregáveis

const DeliverablesHead = styled.div`
    text-align: center;
    max-width: 640px;
    margin: 4.5rem auto 2rem;

    h4 {
        font-size: 1.5rem;
        font-weight: 700;
        letter-spacing: -0.02em;
        color: #0F172A;
        margin-bottom: 0.5rem;
    }

    p {
        font-size: 1rem;
        color: #64748B;
        line-height: 1.6;
        margin: 0;
    }
`

const DeliverablesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    align-items: start;

    @media (max-width: ${props => props.theme.breakpoints.md}) {
        grid-template-columns: 1fr;
    }
`

const ExpandAll = styled.button`
    display: block;
    margin: 0 auto 1.5rem;
    background: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
    font-size: 0.875rem;
    font-weight: 600;
    color: #A16207;
    text-decoration: underline;
    text-underline-offset: 3px;

    &:hover { color: #854D0E; }
`

const DeliverableGroup = styled.div<{ $wide?: boolean; $open: boolean }>`
    grid-column: ${props => props.$wide ? '1 / -1' : 'auto'};
    background: #FFFFFF;
    border: 1px solid ${props => props.$open ? '#FDE68A' : '#E2E8F0'};
    border-radius: 1rem;
    transition: border-color 0.25s ease;

    .toggle {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 1.25rem 1.5rem;
        background: none;
        border: none;
        cursor: pointer;
        text-align: left;
        font-family: inherit;
    }

    .chev {
        flex-shrink: 0;
        color: #64748B;
        transition: transform 0.25s ease;
        transform: rotate(${props => props.$open ? '180deg' : '0deg'});
    }

    .body {
        display: grid;
        grid-template-rows: ${props => props.$open ? '1fr' : '0fr'};
        transition: grid-template-rows 0.3s ease;
    }

    .inner {
        overflow: hidden;
    }

    .icon {
        width: 36px;
        height: 36px;
        border-radius: 8px;
        background: #FFFBEB;
        border: 1px solid #FDE68A;
        color: #A16207;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }

    h5 {
        font-size: 1.05rem;
        font-weight: 700;
        color: #0F172A;
        margin: 0;
    }

    .from {
        margin-left: auto;
        font-size: 0.7rem;
        font-weight: 700;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: #64748B;
        background: #F1F5F9;
        border-radius: 999px;
        padding: 0.25rem 0.65rem;
        white-space: nowrap;
    }

    ul {
        list-style: none;
        padding: 0.25rem 1.5rem 1.5rem;
        margin: 0;
        display: grid;
        grid-template-columns: ${props => props.$wide ? 'repeat(2, 1fr)' : '1fr'};
        gap: 0.7rem 2rem;

        @media (max-width: ${props => props.theme.breakpoints.md}) {
            grid-template-columns: 1fr;
        }
    }

    li {
        display: flex;
        align-items: flex-start;
        gap: 0.6rem;
        font-size: 0.9rem;
        line-height: 1.45;
        color: #334155;

        svg {
            flex-shrink: 0;
            margin-top: 3px;
            color: #A16207;
        }
    }
`

const DELIVERABLES: Array<{
    title: string
    from: string
    icon: typeof Compass
    wide?: boolean
    items: string[]
}> = [
    {
        title: 'Diagnóstico e estratégia',
        from: 'Todos os programas',
        icon: Compass,
        items: [
            'Auditoria da captação, do atendimento e da presença digital',
            'Análise das escolas concorrentes da região',
            'Posicionamento e proposta de valor da escola',
            'Plano anual alinhado ao calendário escolar, com metas de matrícula',
            'Definição dos indicadores e configuração do funil no Maskot Edu',
        ],
    },
    {
        title: 'Campanhas de matrícula',
        from: 'Todos os programas',
        icon: Megaphone,
        items: [
            'Gestão de tráfego pago no Meta (Facebook e Instagram) e no Google (pesquisa e display)',
            'Campanhas por segmento de ensino e por unidade',
            'Páginas de captação (landing pages) por campanha',
            'Criativos: peças estáticas, carrosséis e vídeos editados a partir do material da escola',
            'Remarketing e públicos semelhantes',
            'Rastreamento de conversões e dos eventos do funil',
            'Otimização semanal das campanhas',
            'Planejamento de open house e campanhas de visita',
        ],
    },
    {
        title: 'Atendimento e conversão',
        from: 'A partir de Captação + Atendimento',
        icon: MessageCircle,
        items: [
            'Diagnóstico do atendimento comercial de hoje',
            'Roteiros para WhatsApp e telefone, com respostas para as objeções mais comuns',
            'Etapas do funil, automações e cadências de follow-up no Maskot Edu',
            'Agendamento, confirmação e lembrete de visitas',
            'Acompanhamento do tempo de resposta e dos leads parados',
            'Treinamento remoto da equipe comercial',
        ],
    },
    {
        title: 'Site e presença no Google',
        from: 'Parceria completa',
        icon: Globe,
        items: [
            'Criação ou redesenho do site institucional, com foco em conversão',
            'Páginas por segmento e por unidade',
            'SEO técnico e de conteúdo para buscas locais, como "escola em [cidade]"',
            'Google Meu Negócio: otimização, fotos e publicações',
            'Gestão e resposta das avaliações, e ação para gerar novas',
            'Medição com Google Analytics e Google Tag Manager',
        ],
    },
    {
        title: 'Conteúdo e mídias sociais',
        from: 'Parceria completa',
        icon: Instagram,
        items: [
            'Linha editorial e calendário mensal de conteúdo',
            'Design de posts, carrosséis e stories',
            'Roteiros e guia de captação para a escola gravar',
            'Edição de reels e vídeos a partir do material gravado',
            'Legendas, agendamento e publicação',
            'Moderação de comentários e mensagens diretas',
        ],
    },
    {
        title: 'Rematrícula e retenção',
        from: 'Parceria completa',
        icon: Repeat,
        items: [
            'Campanha de rematrícula, com calendário e mensagens por série',
            'Jornadas de comunicação com as famílias, por WhatsApp, e-mail e SMS',
            'Programa de indicação entre famílias',
            'Pesquisa de satisfação e NPS',
            'Reativação de famílias que ainda não rematricularam e de antigos contatos',
        ],
    },
    {
        title: 'Acompanhamento e prestação de contas',
        from: 'Todos os programas',
        icon: LayoutDashboard,
        wide: true,
        items: [
            'Painel do funil no Maskot Edu, do lead à matrícula',
            'Relatório mensal com investimento, matrículas e custo por matrícula',
            'Reunião mensal com a direção para decidir os ajustes',
            'Canal direto com a equipe que executa o trabalho',
        ],
    },
]

export default function StudioDeepDive() {
    const [openGroups, setOpenGroups] = useState<string[]>([])
    const allOpen = openGroups.length === DELIVERABLES.length

    const toggleGroup = (title: string) => {
        setOpenGroups(prev => prev.includes(title) ? prev.filter(t => t !== title) : [...prev, title])
    }

    const toggleAll = () => {
        setOpenGroups(allOpen ? [] : DELIVERABLES.map(group => group.title))
    }

    return (
        <Section>
            <Container>
                {/* BLOCO 1: O DIFERENCIAL */}
                <Block id="diferencial">
                    <SectionHead>
                        <SectionLabel style={{ margin: '0 auto 1rem' }}><Gem size={14} /> O diferencial</SectionLabel>
                        <h3>Quem faz o marketing usa o sistema onde a matrícula acontece</h3>
                        <p>
                            Todo dia, na prática, usamos o Maskot Edu. Por isso o nosso trabalho não termina no lead: ele segue o
                            contato até a visita e a matrícula.
                        </p>
                    </SectionHead>

                    <Compare>
                        <CompareCol>
                            <h4>O que costuma acontecer</h4>
                            <ul>
                                <li><X size={18} /> <span>O relatório mostra cliques, impressões e quantidade de leads.</span></li>
                                <li><X size={18} /> <span>O atendimento da escola fica fora do alcance de quem faz a campanha.</span></li>
                                <li><X size={18} /> <span>Quando a matrícula não vem, marketing e comercial apontam um para o outro.</span></li>
                                <li><X size={18} /> <span>O sucesso é medido em volume de leads.</span></li>
                            </ul>
                        </CompareCol>
                        <CompareCol $highlight>
                            <h4>O que fazemos no Maskot Studio</h4>
                            <ul>
                                <li><Check size={18} /> <span>O relatório mostra visitas, matrículas e custo por matrícula.</span></li>
                                <li><Check size={18} /> <span>Atendimento e funil no mesmo lugar, com tempo de resposta e follow-up acompanhados.</span></li>
                                <li><Check size={18} /> <span>Marketing e comercial olham os mesmos números, do anúncio à matrícula.</span></li>
                                <li><Check size={18} /> <span>O sucesso é medido em matrículas.</span></li>
                            </ul>
                        </CompareCol>
                    </Compare>
                </Block>

                {/* BLOCO 2: O FUNIL */}
                <SplitLayout>
                    <TextContent>
                        <SectionLabel><TrendingUp size={14} /> Prestação de contas</SectionLabel>
                        <h3>Você enxerga cada etapa, <br />do anúncio à matrícula</h3>
                        <p>
                            A direção acompanha o mesmo painel que a nossa equipe usa. Sem relatório montado à mão, sem número que
                            muda de uma reunião para a outra.
                        </p>
                        <ul>
                            <li><Eye size={20} /> <span><strong>Funil completo:</strong> lead, atendimento, visita agendada, visita realizada e matrícula.</span></li>
                            <li><Target size={20} /> <span><strong>Custo por matrícula:</strong> o investimento dividido pelo que realmente virou aluno.</span></li>
                            <li><MessageCircle size={20} /> <span><strong>Atendimento medido:</strong> quanto o primeiro contato demora e onde os leads esfriam.</span></li>
                            <li><CalendarClock size={20} /> <span><strong>Reunião mensal:</strong> leitura dos números com a direção e decisão do que ajustar.</span></li>
                        </ul>
                    </TextContent>

                    <div>
                        <Mockup>
                            <MockupHeader>
                                <LayoutDashboard size={16} /> Funil de matrículas
                                <span className="right">Colégio Exemplo</span>
                            </MockupHeader>
                            <MockupBody>
                                <KpiRow>
                                    <div className="kpi"><strong>R$ 38.000</strong><span>investido</span></div>
                                    <div className="kpi"><strong>46</strong><span>matrículas</span></div>
                                    <div className="kpi"><strong>R$ 826</strong><span>custo por matrícula</span></div>
                                </KpiRow>
                                <Funnel>
                                    <FunnelRow $width={100}><span>Leads</span><span className="track"><span className="bar" /></span><span className="count">480</span></FunnelRow>
                                    <FunnelRow $width={92}><span>Atendidos</span><span className="track"><span className="bar" /></span><span className="count">441</span></FunnelRow>
                                    <FunnelRow $width={28}><span>Visitas agendadas</span><span className="track"><span className="bar" /></span><span className="count">132</span></FunnelRow>
                                    <FunnelRow $width={22}><span>Visitas feitas</span><span className="track"><span className="bar" /></span><span className="count">104</span></FunnelRow>
                                    <FunnelRow $width={10} $strong><span>Matrículas</span><span className="track"><span className="bar" /></span><span className="count">46</span></FunnelRow>
                                </Funnel>
                            </MockupBody>
                        </Mockup>
                        <Fine>Tela ilustrativa, com nome e valores fictícios.</Fine>
                    </div>
                </SplitLayout>

                {/* BLOCO 2B: O ANO TODO */}
                <Block id="o-ano-todo">
                    <SectionHead>
                        <SectionLabel style={{ margin: '0 auto 1rem' }}><CalendarClock size={14} /> O ano todo</SectionLabel>
                        <h3>Matrícula não tem época. A decisão da família, também não.</h3>
                        <p>
                            Muita escola só liga o marketing perto da campanha de matrículas e desliga depois. Mas a família
                            pesquisa, compara e visita durante o ano inteiro, e quem só aparece na época da campanha chega
                            depois de a escolha já ter começado a ser formada.
                        </p>
                    </SectionHead>

                    <Grid $cols={4}>
                        <Phase>
                            <span className="period">Janeiro a março</span>
                            <h4>Início do ano letivo</h4>
                            <p>
                                Captação das vagas remanescentes, conteúdo de acolhimento e leitura dos números do ciclo que
                                terminou, para ajustar o próximo.
                            </p>
                        </Phase>
                        <Phase>
                            <span className="period">Abril a junho</span>
                            <h4>Marca e relacionamento</h4>
                            <p>
                                Conteúdo institucional, Google e avaliações, visitas contínuas e relacionamento com os contatos que
                                ainda não decidiram.
                            </p>
                        </Phase>
                        <Phase>
                            <span className="period">Julho a setembro</span>
                            <h4>Preparação e lançamento</h4>
                            <p>
                                Aquecimento da audiência, abertura da campanha de matrículas, open house e remarketing de quem já
                                conhece a escola.
                            </p>
                        </Phase>
                        <Phase>
                            <span className="period">Outubro a dezembro</span>
                            <h4>Matrícula e rematrícula</h4>
                            <p>
                                Captação intensiva, conversão dos leads em visita e matrícula, rematrícula e indicação entre
                                famílias.
                            </p>
                        </Phase>
                    </Grid>

                    <AlwaysOn>
                        <h4>O que nunca desliga</h4>
                        <ul>
                            <li><Check size={16} /> <span><strong>Atendimento rápido:</strong> o lead de qualquer mês merece resposta no mesmo dia.</span></li>
                            <li><Check size={16} /> <span><strong>Funil vivo:</strong> quem visitou em abril e ainda não decidiu continua sendo acompanhado até a campanha.</span></li>
                            <li><Check size={16} /> <span><strong>Google e avaliações:</strong> a reputação da escola é construída fora da época de campanha.</span></li>
                            <li><Check size={16} /> <span><strong>Medição contínua:</strong> o painel mostra o funil o ano inteiro, não só na campanha.</span></li>
                        </ul>
                    </AlwaysOn>
                    <Note>
                        O calendário acima é a base. Ele é ajustado a cada escola, ao seu ano letivo e ao ritmo de matrículas da
                        sua região.
                    </Note>
                </Block>

                {/* BLOCO 3: O QUE FAZEMOS */}
                <Block id="servicos">
                    <SectionHead>
                        <SectionLabel style={{ margin: '0 auto 1rem' }}><Layers size={14} /> O que fazemos</SectionLabel>
                        <h3>Seis frentes, um único plano</h3>
                        <p>Cada frente existe para levar a família até a matrícula, e todas conversam entre si.</p>
                    </SectionHead>

                    <Grid>
                        <Card>
                            <div className="icon"><Compass size={24} /></div>
                            <h4>Diagnóstico e estratégia</h4>
                            <p>
                                Auditoria da captação, do atendimento e da presença digital, posicionamento frente às escolas da
                                região e um plano anual alinhado ao calendário escolar.
                            </p>
                        </Card>
                        <Card>
                            <div className="icon"><Megaphone size={24} /></div>
                            <h4>Campanhas de matrícula</h4>
                            <p>
                                Tráfego pago em Meta e Google, páginas de captação por segmento, criativos de alto padrão e o
                                planejamento de visitas e open house.
                            </p>
                        </Card>
                        <Card>
                            <div className="icon"><MessageCircle size={24} /></div>
                            <h4>Atendimento e conversão</h4>
                            <p>
                                Gestão do atendimento comercial no WhatsApp e no telefone: roteiros, tempo de resposta, follow-up e
                                agendamento de visitas.
                            </p>
                        </Card>
                        <Card>
                            <div className="icon"><Globe size={24} /></div>
                            <h4>Site e presença no Google</h4>
                            <p>
                                Site pensado para conversão, Google Meu Negócio, posicionamento local e gestão das avaliações, que
                                pesam na escolha dos pais.
                            </p>
                        </Card>
                        <Card>
                            <div className="icon"><Instagram size={24} /></div>
                            <h4>Conteúdo e mídias sociais</h4>
                            <p>
                                Linha editorial institucional, roteiros e direção de conteúdo, edição e design. Você grava com o
                                nosso guia, nós cuidamos do resto, em qualquer estado.
                            </p>
                        </Card>
                        <Card>
                            <div className="icon"><Repeat size={24} /></div>
                            <h4>Rematrícula e retenção</h4>
                            <p>
                                Campanhas de rematrícula, indicação entre famílias e comunicação com os pais, para proteger a base
                                que a escola já conquistou.
                            </p>
                        </Card>
                    </Grid>

                    <DeliverablesHead>
                        <h4>O que entregamos, em detalhe</h4>
                        <p>A lista do que sai da nossa equipe, frente por frente, e a partir de qual programa cada uma entra.</p>
                    </DeliverablesHead>

                    <ExpandAll type="button" onClick={toggleAll}>
                        {allOpen ? 'Recolher tudo' : 'Expandir tudo'}
                    </ExpandAll>

                    <DeliverablesGrid>
                        {DELIVERABLES.map(group => {
                            const Icon = group.icon
                            const open = openGroups.includes(group.title)
                            return (
                                <DeliverableGroup key={group.title} $wide={group.wide} $open={open}>
                                    <button
                                        type="button"
                                        className="toggle"
                                        onClick={() => toggleGroup(group.title)}
                                        aria-expanded={open}
                                    >
                                        <span className="icon"><Icon size={20} /></span>
                                        <h5>{group.title}</h5>
                                        <span className="from">{group.from}</span>
                                        <ChevronDown size={18} className="chev" aria-hidden="true" />
                                    </button>
                                    <div className="body">
                                        <div className="inner">
                                            <ul>
                                                {group.items.map(item => (
                                                    <li key={item}><Check size={16} /> <span>{item}</span></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </DeliverableGroup>
                            )
                        })}
                    </DeliverablesGrid>
                </Block>

                {/* BLOCO 4: PROGRAMAS */}
                <Block id="programas">
                    <SectionHead>
                        <SectionLabel style={{ margin: '0 auto 1rem' }}><ClipboardCheck size={14} /> Programas</SectionLabel>
                        <h3>Três formas de trabalhar juntos</h3>
                        <p>Escolha a profundidade da parceria. Em todos os programas, o funil é medido até a matrícula.</p>
                    </SectionHead>

                    <Grid>
                        <Program>
                            <h4>Captação</h4>
                            <p className="lead">Para escolas que já têm o atendimento redondo e precisam de mais famílias qualificadas.</p>
                            <div className="includes">Inclui</div>
                            <ul>
                                <li><Check size={16} /> <span>Diagnóstico e estratégia</span></li>
                                <li><Check size={16} /> <span>Campanhas de matrícula (Meta e Google)</span></li>
                                <li><Check size={16} /> <span>Páginas de captação e criativos</span></li>
                                <li><Check size={16} /> <span>Painel de funil e reunião mensal</span></li>
                            </ul>
                            <div className="price"><strong>Investimento</strong> apresentado na conversa</div>
                        </Program>

                        <Program $featured>
                            <span className="flag">Funil completo</span>
                            <h4>Captação + Atendimento</h4>
                            <p className="lead">Para escolas que querem que o lead vire visita e a visita vire matrícula.</p>
                            <div className="includes">Tudo do programa Captação, mais</div>
                            <ul>
                                <li><Check size={16} /> <span>Gestão do atendimento comercial no WhatsApp e no telefone</span></li>
                                <li><Check size={16} /> <span>Roteiros, tempo de resposta e follow-up</span></li>
                                <li><Check size={16} /> <span>Agendamento e confirmação de visitas</span></li>
                                <li><Check size={16} /> <span>Custo por matrícula acompanhado de ponta a ponta</span></li>
                            </ul>
                            <div className="price"><strong>Investimento</strong> apresentado na conversa</div>
                        </Program>

                        <Program>
                            <h4>Parceria completa</h4>
                            <p className="lead">Para escolas que querem um time de marketing inteiro, dedicado ao ciclo de matrículas.</p>
                            <div className="includes">Tudo do programa anterior, mais</div>
                            <ul>
                                <li><Check size={16} /> <span>Site e posicionamento no Google</span></li>
                                <li><Check size={16} /> <span>Gestão de avaliações e reputação</span></li>
                                <li><Check size={16} /> <span>Conteúdo e mídias sociais</span></li>
                                <li><Check size={16} /> <span>Rematrícula, indicação e retenção</span></li>
                            </ul>
                            <div className="price"><strong>Investimento</strong> apresentado na conversa</div>
                        </Program>
                    </Grid>
                    <Note>
                        O investimento depende do porte da escola, da região e do programa. Por isso ele é apresentado depois do
                        diagnóstico, e não numa tabela.
                    </Note>
                </Block>

                {/* BLOCO 5: COMO TRABALHAMOS */}
                <Block id="como-funciona">
                    <SectionHead>
                        <SectionLabel style={{ margin: '0 auto 1rem' }}><CalendarClock size={14} /> Como trabalhamos</SectionLabel>
                        <h3>Da candidatura ao primeiro relatório</h3>
                        <p>Um processo direto, que respeita o tempo da direção.</p>
                    </SectionHead>

                    <Grid $cols={4}>
                        <Step>
                            <div className="number">1</div>
                            <h4>Você se candidata</h4>
                            <p>
                                Conte sobre a escola. Conferimos se há vaga para a sua região e o seu segmento e respondemos a todas
                                as candidaturas.
                            </p>
                        </Step>
                        <Step>
                            <div className="number">2</div>
                            <h4>Conversa e diagnóstico</h4>
                            <p>
                                Entendemos a escola, olhamos a captação e o atendimento de hoje e dizemos com franqueza se faz
                                sentido trabalharmos juntos.
                            </p>
                        </Step>
                        <Step>
                            <div className="number">3</div>
                            <h4>Plano do ciclo</h4>
                            <p>
                                Posicionamento, campanhas e metas de matrícula, com um calendário que acompanha o ano letivo da escola.
                            </p>
                        </Step>
                        <Step>
                            <div className="number">4</div>
                            <h4>Execução e prestação de contas</h4>
                            <p>
                                A nossa equipe executa, e você acompanha o funil o tempo todo, com uma reunião mensal para decidir
                                os ajustes.
                            </p>
                        </Step>
                    </Grid>
                </Block>

                {/* BLOCO 6: SELETO POR PRINCÍPIO */}
                <Block id="selecao" style={{ marginBottom: 0 }}>
                    <Selective>
                        <div className="head">
                            <span className="label"><Gem size={14} /> Seleto por princípio</span>
                            <h3>Poucas escolas, para fazer bem feito</h3>
                            <p>
                                O Maskot Studio atende um número limitado de escolas ao mesmo tempo, e isso é uma decisão, não uma
                                limitação.
                            </p>
                        </div>

                        <SelectiveGrid>
                            <div className="item">
                                <div className="icon"><Users size={26} /></div>
                                <h4>Até 15 escolas</h4>
                                <p>É o máximo que atendemos ao mesmo tempo, para que cada escola tenha a atenção da equipe inteira.</p>
                            </div>
                            <div className="item">
                                <div className="icon"><MapPin size={26} /></div>
                                <h4>Uma escola por região e segmento</h4>
                                <p>Não trabalhamos para escolas concorrentes diretas. A estratégia da sua escola fica só com ela.</p>
                            </div>
                            <div className="item">
                                <div className="icon"><BadgeCheck size={26} /></div>
                                <h4>Equipe própria</h4>
                                <p>Quem planeja, cria e acompanha a sua campanha faz parte do time do Maskot Edu.</p>
                            </div>
                        </SelectiveGrid>

                        <FitRow>
                            <div className="yes">
                                <h5>É para escolas que</h5>
                                <ul>
                                    <li><Check size={16} /> <span>São particulares, de grande porte, com posicionamento de alto padrão.</span></li>
                                    <li><Check size={16} /> <span>Usam, ou passam a usar, o Maskot Edu para atender e acompanhar o funil de matrículas.</span></li>
                                    <li><Check size={16} /> <span>Têm uma direção envolvida e abertura para olhar os números.</span></li>
                                    <li><Check size={16} /> <span>Querem um parceiro de longo prazo, e não um fornecedor de peças avulsas.</span></li>
                                </ul>
                            </div>
                            <div className="no">
                                <h5>Não é para quem</h5>
                                <ul>
                                    <li><X size={16} /> <span>Busca só o menor preço em tráfego ou em posts.</span></li>
                                    <li><X size={16} /> <span>Espera resultado sem rever o atendimento e o processo comercial.</span></li>
                                    <li><X size={16} /> <span>Quer ver o trabalho apenas por cliques, curtidas e alcance.</span></li>
                                </ul>
                            </div>
                        </FitRow>

                        <ApplyRow>
                            <ApplyButton onClick={openStudioModal}>Candidatar minha escola</ApplyButton>
                        </ApplyRow>
                    </Selective>
                </Block>
            </Container>
        </Section>
    )
}
