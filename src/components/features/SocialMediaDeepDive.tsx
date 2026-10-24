'use client'

import styled, { keyframes, css } from 'styled-components'
import {
    Layers, Eye, MapPin, Image as ImageIcon, Video, Film,
    CheckCircle2, Bell, LayoutGrid,
    Workflow, GitBranch, History,
    BarChart3, TrendingUp,
    MessageSquare, Instagram, Link2,
    ShieldCheck, RefreshCw, CalendarClock, AtSign, Heart, MessageCircle, Send,
    Sparkles, Wand2, UserPlus, BellRing, UserCheck, AlertTriangle, Accessibility
} from 'lucide-react'
import Image from 'next/image'

// --- Animations ---
const float = keyframes`
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
`

const Section = styled.section`
    padding: 6rem 0;
    background: ${props => props.theme.colors.white};
    overflow: hidden;
`

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
`

const FeatureRow = styled.div<{ $reverse?: boolean }>`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    align-items: center;
    margin-bottom: 8rem;

    @media (max-width: ${props => props.theme.breakpoints.lg}) {
        grid-template-columns: 1fr;
        gap: 3rem;
        margin-bottom: 6rem;
        display: flex;
        flex-direction: column-reverse;
        ${props => !props.$reverse && css`flex-direction: column;`}
    }
`

const TextContent = styled.div`
    h3 {
        font-size: 2.25rem;
        font-weight: 800;
        margin-bottom: 1.5rem;
        line-height: 1.2;
        color: #0F172A;
    }
    p {
        font-size: 1.1rem;
        color: #475569;
        line-height: 1.6;
        margin-bottom: 2rem;
    }
    ul {
        list-style: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
    }
    li {
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        font-size: 1rem;
        font-weight: 600;
        color: #0F172A;
        svg {
            color: #EC4899;
            flex-shrink: 0;
            margin-top: 2px;
        }
    }
`

const MockupCard = styled.div`
    background: #FFFFFF;
    border-radius: 24px;
    box-shadow: 0 30px 60px rgba(0,0,0,0.05);
    border: 1px solid #E2E8F0;
    overflow: hidden;
    position: relative;
    animation: ${float} 8s ease-in-out infinite;
`

const MockupHeader = styled.div`
    height: 40px;
    background: #F8FAFC;
    border-bottom: 1px solid #E2E8F0;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    gap: 0.5rem;
    .dots { display: flex; gap: 6px; div { width: 8px; height: 8px; border-radius: 50%; background: #CBD5E1; } }
`

// --- MOCKUP 1: COMPOSITOR / PREVIEW ---
const ComposerMock = styled.div`
    padding: 20px;
    background: #FFFFFF;
    display: flex;
    gap: 20px;

    .formats { display: flex; flex-direction: column; gap: 8px; width: 84px; flex-shrink: 0; }
    .format-item {
        display: flex; flex-direction: column; align-items: center; gap: 4px;
        padding: 8px 4px; border-radius: 10px; background: white; border: 1px solid #E2E8F0;
        font-size: 9.5px; color: #64748B; font-weight: 600;
        &.active { border-color: #EC4899; color: #EC4899; }
        svg { color: inherit; }
    }
    .preview {
        flex: 1; background: white; border-radius: 12px; border: 1px solid #E2E8F0;
        overflow: hidden;
    }
    .preview-media {
        height: 110px;
        background: #F8FAFC;
        border-bottom: 1px solid #E2E8F0;
    }
    .preview-body { padding: 10px 12px; }
    .preview-caption { font-size: 10.5px; color: #475569; line-height: 1.4; margin-bottom: 8px; }
    .preview-caption strong { color: #0F172A; }
    .preview-actions { display: flex; gap: 12px; color: #64748B; }
`

// --- MOCKUP 2: APROVAÇÃO / KANBAN ---
const ApprovalMock = styled.div`
    padding: 16px;
    background: white;
    display: flex;
    gap: 10px;

    .col { flex: 1; min-width: 0; }
    .col-title {
        font-size: 9.5px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.02em;
        color: #64748B; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;
        span.dot { width: 6px; height: 6px; border-radius: 50%; }
    }
    .card {
        background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 8px;
        padding: 8px; margin-bottom: 8px;
        .bar { height: 6px; border-radius: 4px; background: #F1F5F9; margin-bottom: 6px; width: 70%; }
        .txt { font-size: 9px; color: #94A3B8; }
    }
    .card.highlight { border-color: #EC4899; box-shadow: 0 2px 4px rgba(236,72,153,0.1); }
`

// --- MOCKUP 3: AUTOMAÇÃO / FLUXO ---
const FlowMock = styled.div`
    padding: 20px 16px;
    background: #FFFFFF;
    background-image: radial-gradient(rgba(236, 72, 153, 0.08) 1px, transparent 0);
    background-size: 20px 20px;

    .node {
        display: flex; align-items: center; gap: 10px;
        background: white; border: 1px solid #E2E8F0; border-radius: 10px;
        padding: 10px 12px; margin-bottom: 0;
        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
    }
    .node-icon {
        width: 28px; height: 28px; border-radius: 8px; flex-shrink: 0;
        display: flex; align-items: center; justify-content: center;
        background: #F8FAFC; border: 1px solid #E2E8F0;
    }
    .node-text { min-width: 0; }
    .node-title { font-size: 11.5px; font-weight: 700; color: #0F172A; }
    .node-sub { font-size: 9.5px; color: #64748B; }
    .connector { width: 2px; height: 18px; background: #E2E8F0; margin-left: 24px; }
    .branch { display: flex; gap: 10px; margin-left: 24px; padding-left: 16px; border-left: 2px solid #E2E8F0; }
`

// --- MOCKUP 4: ANALYTICS ---
const AnalyticsMock = styled.div`
    padding: 16px;
    background: white;

    .kpis { display: flex; gap: 10px; margin-bottom: 14px; }
    .kpi {
        flex: 1; background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 10px;
        padding: 10px; text-align: center;
        .num { font-size: 16px; font-weight: 800; color: #EC4899; line-height: 1; }
        .label { font-size: 8.5px; color: #64748B; font-weight: 600; margin-top: 4px; text-transform: uppercase; }
    }
    .rank-row {
        display: flex; align-items: center; gap: 10px; padding: 8px 0;
        border-bottom: 1px solid #F1F5F9;
        &:last-child { border: none; }
    }
    .rank-thumb {
        width: 30px; height: 30px; border-radius: 6px; flex-shrink: 0;
        background: linear-gradient(135deg, #F59E0B, #EC4899, #8B5CF6);
    }
    .rank-text { flex: 1; min-width: 0; }
    .rank-title { font-size: 11px; font-weight: 600; color: #0F172A; }
    .rank-sub { font-size: 9.5px; color: #64748B; }
    .rank-value { font-size: 11.5px; font-weight: 700; color: #16A34A; }
`

// --- MOCKUP 5: COMENTÁRIOS ---
const CommentsMock = styled.div`
    padding: 16px;
    background: #FFFFFF;

    .c-item {
        display: flex; gap: 10px; padding: 10px; border-radius: 10px;
        background: white; border: 1px solid #E2E8F0; margin-bottom: 8px;
        box-shadow: 0 1px 2px rgba(0,0,0,0.02);
    }
    .avatar {
        width: 28px; height: 28px; border-radius: 50%; flex-shrink: 0;
        display: flex; align-items: center; justify-content: center;
        font-size: 10.5px; font-weight: 700; color: #0F172A;
        background: #F8FAFC; border: 1px solid #E2E8F0;
    }
    .c-body { flex: 1; min-width: 0; }
    .c-name { font-size: 11px; font-weight: 700; color: #0F172A; }
    .c-text { font-size: 10.5px; color: #475569; margin: 2px 0 4px; }
    .c-meta { display: flex; align-items: center; gap: 8px; font-size: 9px; color: #64748B; }
    .c-reply { color: #EC4899; font-weight: 700; }
`

// --- ACT HEADERS ---
const ActHeader = styled.div`
    text-align: center;
    max-width: 720px;
    margin: 0 auto 5rem;

    .eyebrow {
        display: inline-block;
        padding: 0.35rem 0.9rem;
        border-radius: 999px;
        background: #FCE7F3;
        color: #BE185D;
        font-size: 0.8rem;
        font-weight: 800;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        margin-bottom: 1rem;
    }

    h2 {
        font-size: 2.5rem;
        font-weight: 800;
        line-height: 1.15;
        color: #0F172A;
        margin-bottom: 1rem;
    }

    p {
        font-size: 1.1rem;
        color: #475569;
        line-height: 1.6;
        margin: 0;
    }

    @media (max-width: 640px) {
        margin-bottom: 3rem;

        h2 { font-size: 1.85rem; }
    }
`

const ActDivider = styled.div`
    height: 1px;
    background: linear-gradient(90deg, transparent, #E2E8F0, transparent);
    margin: 2rem 0 6rem;
`

// --- MOCKUP: LEGENDA COM IA ---
const CaptionAiMock = styled.div`
    padding: 18px;
    background: #FFFFFF;

    .head {
        display: flex; align-items: center; gap: 10px; margin-bottom: 12px;
        strong { font-size: 12px; color: #0F172A; display: block; }
        span { font-size: 10px; color: #64748B; }
        img { border-radius: 50%; object-fit: cover; }
    }
    .prompt {
        padding: 10px 12px; border-radius: 10px; background: #F8FAFC; border: 1px solid #E2E8F0;
        font-size: 11px; color: #475569; margin-bottom: 10px;
    }
    .tones { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 12px; }
    .tone {
        padding: 4px 10px; border-radius: 999px; border: 1px solid #E2E8F0;
        font-size: 10px; font-weight: 700; color: #64748B; background: #FFFFFF;
        &.active { border-color: #EC4899; color: #BE185D; background: #FDF2F8; }
    }
    .variation {
        padding: 10px 12px; border-radius: 10px; border: 1px solid #E2E8F0; margin-bottom: 8px;
        font-size: 10.5px; color: #334155; line-height: 1.45;
        &.selected { border-color: #EC4899; box-shadow: 0 2px 6px rgba(236, 72, 153, 0.12); }
        .use { display: block; margin-top: 6px; font-size: 9.5px; font-weight: 800; color: #EC4899; }
    }
`

// --- MOCKUP: COMENTÁRIO COM RESPOSTA DA MIA ---
const MiaReplyMock = styled.div`
    padding: 16px;
    background: #FFFFFF;

    .title {
        font-size: 9.5px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.04em;
        color: #64748B; margin-bottom: 10px; display: flex; align-items: center; gap: 6px;
    }
    .comment {
        display: flex; gap: 10px; padding: 10px; border-radius: 10px; border: 1px solid #E2E8F0; margin-bottom: 8px;
    }
    .avatar {
        width: 28px; height: 28px; border-radius: 50%; flex-shrink: 0;
        display: flex; align-items: center; justify-content: center;
        font-size: 10.5px; font-weight: 700; color: #0F172A; background: #F8FAFC; border: 1px solid #E2E8F0;
    }
    .name { font-size: 11px; font-weight: 700; color: #0F172A; }
    .text { font-size: 10.5px; color: #475569; margin-top: 2px; }
    .meta { font-size: 9px; color: #64748B; margin-top: 4px; }
    .draft {
        margin-left: 20px; padding: 12px; border-radius: 10px; background: #FDF2F8; border: 1px dashed #F9A8D4;
        margin-bottom: 14px;
        .who { display: flex; align-items: center; gap: 6px; font-size: 9.5px; font-weight: 800; color: #BE185D; margin-bottom: 6px; }
        .reply { font-size: 10.5px; color: #334155; line-height: 1.45; margin-bottom: 10px; }
        .actions { display: flex; gap: 6px; flex-wrap: wrap; }
        .btn {
            padding: 5px 10px; border-radius: 8px; font-size: 9.5px; font-weight: 800;
            border: 1px solid #E2E8F0; color: #64748B; background: #FFFFFF;
            &.primary { background: #EC4899; border-color: #EC4899; color: #FFFFFF; }
        }
    }
`

// --- MOCKUP: VISÃO GERAL COM PENDÊNCIAS ---
const OverviewMock = styled.div`
    padding: 16px;
    background: #F8FAFC;

    .cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-bottom: 12px; }
    .stat {
        background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 10px; padding: 10px;
        .num { font-size: 18px; font-weight: 800; color: #0F172A; line-height: 1; }
        .label { font-size: 9px; color: #64748B; font-weight: 700; margin-top: 5px; }
        &.warn { border-color: #FDE68A; background: #FFFBEB; .num { color: #B45309; } }
        &.crit { border-color: #FECACA; background: #FEF2F2; .num { color: #B91C1C; } }
        &.pink { border-color: #FBCFE8; background: #FDF2F8; .num { color: #BE185D; } }
    }
    .list-title { font-size: 9.5px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.04em; color: #64748B; margin-bottom: 8px; }
    .next {
        display: flex; align-items: center; gap: 10px; padding: 9px 10px; border-radius: 10px;
        background: #FFFFFF; border: 1px solid #E2E8F0; margin-bottom: 6px;
        .thumb { width: 28px; height: 28px; border-radius: 6px; background: linear-gradient(135deg, #F59E0B, #EC4899, #8B5CF6); flex-shrink: 0; }
        .t { flex: 1; min-width: 0; font-size: 10.5px; font-weight: 700; color: #0F172A; }
        .t span { display: block; font-size: 9px; font-weight: 500; color: #64748B; }
        .when { font-size: 9.5px; font-weight: 800; color: #BE185D; white-space: nowrap; }
    }
`

// --- POWER GRID ---
const PowerGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 4rem;
    @media (max-width: ${props => props.theme.breakpoints.md}) { grid-template-columns: 1fr; }
`
const PowerCard = styled.div`
    background: #F8FAFC;
    padding: 2rem;
    border-radius: 20px;
    border: 1px solid #E2E8F0;
    transition: all 0.3s ease;
    &:hover {
        transform: translateY(-5px);
        background: #FFFFFF;
        box-shadow: 0 20px 40px -10px rgba(0,0,0,0.08);
        border-color: #FBCFE8;
    }
    .icon {
        width: 48px; height: 48px; border-radius: 12px;
        background: #FFFFFF; display: flex; align-items: center; justify-content: center;
        color: #EC4899; margin-bottom: 1.5rem;
        box-shadow: 0 4px 10px rgba(0,0,0,0.05);
        border: 1px solid #E2E8F0;
    }
    h4 { font-size: 1.25rem; font-weight: 700; margin-bottom: 0.75rem; color: #0F172A; }
    p { font-size: 1rem; color: #475569; line-height: 1.5; margin: 0; }
`

const MoreTools = styled.div`
    margin-top: 2.5rem;
    text-align: center;

    p {
        font-size: 0.95rem;
        font-weight: 700;
        color: #475569;
        margin-bottom: 1rem;
    }

    .chips {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 0.6rem;
    }

    span {
        padding: 0.45rem 0.95rem;
        border-radius: 999px;
        background: #F1F5F9;
        border: 1px solid #E2E8F0;
        font-size: 0.85rem;
        font-weight: 600;
        color: #334155;
    }

    .plans {
        margin-top: 1.5rem;
        font-size: 0.9rem;
        font-weight: 500;
        color: #64748B;
    }
`

export default function SocialMediaDeepDive() {
    return (
        <Section id="recursos">
            <Container>

                <ActHeader>
                    <span className="eyebrow">1 · Criar e publicar</span>
                    <h2>Do rascunho ao ar, com a equipe junta</h2>
                    <p>Crie com ajuda da IA, veja como vai ficar, aprove e agende no Instagram e no Facebook.</p>
                </ActHeader>

                {/* 1. COMPOSITOR MULTI-FORMATO */}
                <FeatureRow>
                    <TextContent>
                        <h3>Publique com confiança: veja como vai ficar antes de sair do rascunho</h3>
                        <p>
                            Crie posts de <strong>Feed, Carrossel, Reels e Stories</strong> para o Instagram,
                            além de publicações de texto e link exclusivas do Facebook — tudo no mesmo
                            compositor, com preview lado a lado de como cada formato vai aparecer.
                        </p>
                        <ul>
                            <li><Layers size={20}/> <strong>4 formatos num só lugar:</strong> Feed, Carrossel, Reels e Stories, sem trocar de ferramenta.</li>
                            <li><Eye size={20}/> <strong>Preview fiel:</strong> veja o post exatamente como vai aparecer no Instagram e no Facebook.</li>
                            <li><MapPin size={20}/> <strong>Local, colaboradores e marcações:</strong> adicione local, até 5 colaboradores e pessoas na imagem, direto no Instagram.</li>
                        </ul>
                    </TextContent>
                    <MockupCard>
                        <MockupHeader><div className="dots"><div></div><div></div><div></div></div></MockupHeader>
                        <ComposerMock>
                            <div className="formats">
                                <div className="format-item active"><ImageIcon size={16}/> Feed</div>
                                <div className="format-item"><Layers size={16}/> Carrossel</div>
                                <div className="format-item"><Film size={16}/> Reels</div>
                                <div className="format-item"><Video size={16}/> Stories</div>
                            </div>
                            <div className="preview">
                                <div className="preview-media" />
                                <div className="preview-body">
                                    <div className="preview-caption"><strong>Escola Horizonte</strong> Matrículas abertas para 2027! Vem conhecer nosso espaço 🎒✨</div>
                                    <div className="preview-actions">
                                        <Heart size={14}/> <MessageCircle size={14}/> <Send size={14}/>
                                    </div>
                                </div>
                            </div>
                        </ComposerMock>
                    </MockupCard>
                </FeatureRow>

                {/* 2. LEGENDA COM IA */}
                <FeatureRow $reverse>
                    <MockupCard>
                        <MockupHeader><div className="dots"><div></div><div></div><div></div></div></MockupHeader>
                        <CaptionAiMock>
                            <div className="head">
                                <Image src="/mia.png" alt="Mia" width={32} height={32} />
                                <div><strong>Assistente de legenda</strong><span>Com o jeito da sua escola</span></div>
                            </div>
                            <div className="prompt">Dia da família na escola, sábado, 9h</div>
                            <div className="tones">
                                <span className="tone active">Amigável</span>
                                <span className="tone">Institucional</span>
                                <span className="tone">Empolgante</span>
                                <span className="tone">Empático</span>
                                <span className="tone">Narrativo</span>
                            </div>
                            <div className="variation selected">
                                Sábado tem festa! 🎉 Venha viver o Dia da Família com a gente, a partir das 9h. Tem atividades para todas as idades.
                                <span className="use">Usar esta legenda</span>
                            </div>
                            <div className="variation">
                                Nossa escola é feita de famílias. Neste sábado, às 9h, abrimos as portas para um dia especial juntos.
                                <span className="use">Usar esta legenda</span>
                            </div>
                        </CaptionAiMock>
                    </MockupCard>
                    <TextContent>
                        <h3>Legendas com IA, no tom da sua escola</h3>
                        <p>
                            Conte sobre o que é o post e escolha o tom de voz. A IA escreve variações para você
                            escolher ou melhora o rascunho que você já tinha — sempre com o kit de marca da escola.
                        </p>
                        <ul>
                            <li><Wand2 size={20}/> <strong>8 tons de voz:</strong> amigável, institucional, empolgante, empático, narrativo, urgente, prova social e conquista.</li>
                            <li><Sparkles size={20}/> <strong>Várias opções:</strong> a IA entrega variações com a explicação de cada uma, e você escolhe a melhor.</li>
                            <li><UserCheck size={20}/> <strong>Você decide o que vai ao ar:</strong> a legenda cai no compositor para editar e passa pela aprovação como qualquer post.</li>
                        </ul>
                    </TextContent>
                </FeatureRow>

                {/* 3. APROVAÇÃO EM EQUIPE */}
                <FeatureRow>
                    <TextContent>
                        <h3>Nada vai ao ar sem passar por aprovação</h3>
                        <p>
                            Cada post percorre um fluxo claro — de rascunho a publicado — e pode ser
                            direcionado a um aprovador específico ou a qualquer administrador. Quem
                            criou é avisado na hora se o post foi aprovado ou rejeitado.
                        </p>
                        <ul>
                            <li><CheckCircle2 size={20}/> <strong>Aprovar ou rejeitar com motivo:</strong> o post volta para rascunho já com o que precisa ser corrigido.</li>
                            <li><Bell size={20}/> <strong>Notificações automáticas:</strong> pendente, aprovado e rejeitado, sem precisar cobrar por mensagem.</li>
                            <li><LayoutGrid size={20}/> <strong>Quadro e calendário:</strong> rascunhos, pendentes, aprovados, agendados e publicados num só painel, com o calendário editorial do mês.</li>
                        </ul>
                    </TextContent>
                    <MockupCard>
                        <MockupHeader><div className="dots"><div></div><div></div><div></div></div></MockupHeader>
                        <ApprovalMock>
                            <div className="col">
                                <div className="col-title"><span className="dot" style={{background: '#9CA3AF'}}/> Pendente</div>
                                <div className="card highlight"><div className="bar" style={{background: '#F9A8D4'}}/><div className="txt">Aguardando aprovação</div></div>
                            </div>
                            <div className="col">
                                <div className="col-title"><span className="dot" style={{background: '#10B981'}}/> Aprovado</div>
                                <div className="card"><div className="bar" style={{background: '#A7F3D0'}}/><div className="txt">Pronto p/ agendar</div></div>
                                <div className="card"><div className="bar" style={{background: '#A7F3D0', width: '50%'}}/><div className="txt">Pronto p/ agendar</div></div>
                            </div>
                            <div className="col">
                                <div className="col-title"><span className="dot" style={{background: '#DB2777'}}/> Agendado</div>
                                <div className="card"><div className="bar" style={{background: '#FBCFE8'}}/><div className="txt">Qui, 09:00</div></div>
                            </div>
                        </ApprovalMock>
                    </MockupCard>
                </FeatureRow>

                <ActDivider />

                <ActHeader>
                    <span className="eyebrow">2 · Engajar</span>
                    <h2>Quem comenta ou chama no Direct vira lead</h2>
                    <p>A Mia responde, a equipe aprova o que importa e o contato já chega ao CRM.</p>
                </ActHeader>

                {/* 4. COMENTÁRIOS E DMs + MIA */}
                <FeatureRow $reverse>
                    <MockupCard>
                        <MockupHeader><div className="dots"><div></div><div></div><div></div></div></MockupHeader>
                        <MiaReplyMock>
                            <div className="title"><Sparkles size={12}/> Sugestão da Mia · aguardando você</div>
                            <div className="comment">
                                <div className="avatar">RM</div>
                                <div>
                                    <div className="name">Renata Martins</div>
                                    <div className="text">Vocês ainda têm vaga para o infantil?</div>
                                    <div className="meta">Instagram · há 12 min</div>
                                </div>
                            </div>
                            <div className="draft">
                                <div className="who"><Image src="/mia.png" alt="Mia" width={18} height={18} style={{borderRadius: '50%'}} /> Mia sugere responder</div>
                                <div className="reply">Oi, Renata! Temos vagas sim 😊 Te chamei no Direct para passar os detalhes e agendar uma visita.</div>
                                <div className="actions">
                                    <span className="btn primary">Aprovar e publicar</span>
                                    <span className="btn">Editar</span>
                                    <span className="btn">Descartar</span>
                                </div>
                            </div>
                            <div className="comment">
                                <div className="avatar">JL</div>
                                <div>
                                    <div className="name">João Lima</div>
                                    <div className="text">Qual o valor da matrícula esse ano?</div>
                                    <div className="meta">Facebook · há 1 hora · aguardando resposta</div>
                                </div>
                            </div>
                        </MiaReplyMock>
                    </MockupCard>
                    <TextContent>
                        <h3>Comentários e DMs num só lugar, com a Mia na frente</h3>
                        <p>
                            Veja e responda os comentários de cada publicação — Instagram e Facebook — sem abrir
                            o aplicativo da rede social. No Instagram, a Mia escreve a resposta pública e você aprova, edita ou
                            descarta antes de ir ao ar.
                        </p>
                        <ul>
                            <li><MessageSquare size={20}/> <strong>Responder sem sair do Maskot:</strong> a resposta sai direto na plataforma de origem.</li>
                            <li><Sparkles size={20}/> <strong>A Mia sugere, você aprova:</strong> nada é publicado sem o seu ok — ou deixe no automático, com registro de tudo o que ela respondeu.</li>
                            <li><AlertTriangle size={20}/> <strong>Fila de &quot;aguardando resposta&quot;:</strong> veja de relance quais comentários ainda estão sem retorno.</li>
                            <li><Link2 size={20}/> <strong>DMs na mesma inbox:</strong> as conversas de Direct chegam junto com o WhatsApp, o Messenger e o chat do site.</li>
                        </ul>
                    </TextContent>
                </FeatureRow>

                {/* 5. AUTOMAÇÕES: DO COMENTÁRIO AO LEAD */}
                <FeatureRow>
                    <TextContent>
                        <h3>Do comentário ao lead, no automático</h3>
                        <p>
                            Um construtor visual de arrastar e soltar monta fluxos para o <strong>Direct do
                            Instagram e o Messenger</strong>. Um comentário com a palavra certa dispara a resposta
                            pública, a conversa no Direct e o cadastro do lead — sem depender de alguém online.
                        </p>
                        <ul>
                            <li><Workflow size={20}/> <strong>Gatilhos variados:</strong> novo contato, palavra-chave em DM ou em comentário (de um post específico, se quiser), resposta ou menção a story e clique em botão.</li>
                            <li><UserPlus size={20}/> <strong>Direto para o CRM:</strong> o fluxo cria ou atualiza o lead, muda a etapa do funil e avisa a equipe.</li>
                            <li><Sparkles size={20}/> <strong>Mia no fluxo:</strong> ela responde DMs e comentários, mede o interesse e qualifica o contato com IA.</li>
                            <li><GitBranch size={20}/> <strong>Condições e teste A/B:</strong> ramifique por tag, por lead existente ou distribua entre variações.</li>
                            <li><History size={20}/> <strong>Seguro e auditável:</strong> o fluxo para quando um humano assume a conversa, e cada disparo fica no histórico.</li>
                        </ul>
                    </TextContent>
                    <MockupCard>
                        <MockupHeader><div className="dots"><div></div><div></div><div></div></div></MockupHeader>
                        <FlowMock>
                            <div className="node">
                                <div className="node-icon"><Instagram size={15} color="#EC4899"/></div>
                                <div className="node-text">
                                    <div className="node-title">Palavra-chave em comentário</div>
                                    <div className="node-sub">Gatilho · &quot;matrícula&quot;</div>
                                </div>
                            </div>
                            <div className="connector" />
                            <div className="node">
                                <div className="node-icon"><Sparkles size={15} color="#8B5CF6"/></div>
                                <div className="node-text">
                                    <div className="node-title">Responder comentário com a Mia</div>
                                    <div className="node-sub">Ação · IA</div>
                                </div>
                            </div>
                            <div className="connector" />
                            <div className="node">
                                <div className="node-icon"><MessageSquare size={15} color="#10B981"/></div>
                                <div className="node-text">
                                    <div className="node-title">Enviar mensagem no Direct</div>
                                    <div className="node-sub">Ação</div>
                                </div>
                            </div>
                            <div className="connector" />
                            <div className="node">
                                <div className="node-icon"><UserPlus size={15} color="#EC4899"/></div>
                                <div className="node-text">
                                    <div className="node-title">Criar lead e avisar a equipe</div>
                                    <div className="node-sub">Ação · CRM</div>
                                </div>
                            </div>
                        </FlowMock>
                    </MockupCard>
                </FeatureRow>

                <ActDivider />

                <ActHeader>
                    <span className="eyebrow">3 · Medir</span>
                    <h2>Saiba o que precisa de você e o que funciona</h2>
                    <p>Pendências do dia numa tela e métricas de cada post, sem montar planilha.</p>
                </ActHeader>

                {/* 6. VISÃO GERAL */}
                <FeatureRow>
                    <TextContent>
                        <h3>Abriu o módulo, já sabe o que fazer</h3>
                        <p>
                            A visão geral mostra o que está esperando por você — aprovações, falhas de publicação
                            e comentários sem resposta — e as próximas publicações agendadas. Se estiver tudo em
                            dia, ela diz isso.
                        </p>
                        <ul>
                            <li><BellRing size={20}/> <strong>Pendências em destaque:</strong> posts aguardando aprovação, comentários sem resposta e falhas, sem caçar em cada aba.</li>
                            <li><CalendarClock size={20}/> <strong>Próximas publicações:</strong> o que vai ao ar nos próximos dias, num relance.</li>
                            <li><RefreshCw size={20}/> <strong>Falha de publicação visível:</strong> se a rede recusar um post, você vê o motivo e pode reenviar.</li>
                        </ul>
                    </TextContent>
                    <MockupCard>
                        <MockupHeader><div className="dots"><div></div><div></div><div></div></div></MockupHeader>
                        <OverviewMock>
                            <div className="cards">
                                <div className="stat pink"><div className="num">2</div><div className="label">Aguardando aprovação</div></div>
                                <div className="stat warn"><div className="num">5</div><div className="label">Comentários sem resposta</div></div>
                                <div className="stat crit"><div className="num">1</div><div className="label">Falha de publicação</div></div>
                            </div>
                            <div className="list-title">Próximas publicações</div>
                            <div className="next">
                                <div className="thumb" />
                                <div className="t">Dia da Família 2027<span>Reels · Instagram</span></div>
                                <div className="when">Qui, 09:00</div>
                            </div>
                            <div className="next">
                                <div className="thumb" />
                                <div className="t">Matrículas abertas<span>Feed · Instagram e Facebook</span></div>
                                <div className="when">Sex, 14:00</div>
                            </div>
                        </OverviewMock>
                    </MockupCard>
                </FeatureRow>

                {/* 7. ANALYTICS */}
                <FeatureRow $reverse>
                    <MockupCard>
                        <MockupHeader><div className="dots"><div></div><div></div><div></div></div></MockupHeader>
                        <AnalyticsMock>
                            <div className="kpis">
                                <div className="kpi"><div className="num">48,2K</div><div className="label">Alcance</div></div>
                                <div className="kpi"><div className="num">6,4%</div><div className="label">Engajamento</div></div>
                                <div className="kpi"><div className="num">+312</div><div className="label">Seguidores</div></div>
                            </div>
                            <div className="rank-row">
                                <div className="rank-thumb" />
                                <div className="rank-text"><div className="rank-title">Dia da Família 2027</div><div className="rank-sub">Reels · Instagram</div></div>
                                <div className="rank-value">9,8%</div>
                            </div>
                            <div className="rank-row">
                                <div className="rank-thumb" />
                                <div className="rank-text"><div className="rank-title">Matrículas abertas</div><div className="rank-sub">Feed · Importado</div></div>
                                <div className="rank-value">7,1%</div>
                            </div>
                        </AnalyticsMock>
                    </MockupCard>
                    <TextContent>
                        <h3>Métricas de cada publicação, sem sair do sistema</h3>
                        <p>
                            Acompanhe alcance, impressões, engajamento, salvamentos e compartilhamentos por
                            post e por rede, veja a evolução de seguidores e descubra o que performa melhor.
                            Os números atualizam sozinhos várias vezes ao dia — ou na hora, com um clique.
                        </p>
                        <ul>
                            <li><BarChart3 size={20}/> <strong>Ranking automático:</strong> os melhores e piores posts do período, sem montar planilha.</li>
                            <li><TrendingUp size={20}/> <strong>Seguidores e alcance por rede:</strong> a evolução de cada conta conectada.</li>
                            <li><History size={20}/> <strong>12 meses de histórico:</strong> ao conectar a conta, posts, comentários e métricas antigos entram no relatório, marcados como &quot;Importado&quot;.</li>
                        </ul>
                    </TextContent>
                </FeatureRow>

                {/* POWER GRID */}
                <div style={{textAlign: 'center', marginBottom: '3rem'}}>
                    <h3 style={{
                        fontSize: '2rem',
                        fontWeight: 800,
                        color: '#0F172A'
                    }}>Feito para a rotina de marketing da escola</h3>
                    <p style={{color: '#475569', marginTop: '0.5rem'}}>Recursos que dão controle de verdade sobre o que vai ao ar.</p>
                </div>

                <PowerGrid>
                    <PowerCard>
                        <div className="icon"><CalendarClock size={24}/></div>
                        <h4>Calendário editorial</h4>
                        <p>Veja e agende publicações num calendário mensal, dia a dia, clicando no dia que quiser.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><ShieldCheck size={24}/></div>
                        <h4>Permissão por papel</h4>
                        <p>Defina quem cria, quem aprova e quem publica, com controle fino de acesso.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><RefreshCw size={24}/></div>
                        <h4>Mídia sempre disponível</h4>
                        <p>Fotos e vídeos são re-hospedados automaticamente, então o histórico nunca perde imagens.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><Link2 size={24}/></div>
                        <h4>Contas conectadas</h4>
                        <p>Painel de status mostra token válido e permissão de publicação de cada conta, com a mesma conexão do Meta Ads.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><AtSign size={24}/></div>
                        <h4>Colaboradores e marcações</h4>
                        <p>Convide até 5 colaboradores e marque perfis na imagem em publicações do Instagram.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><Accessibility size={24}/></div>
                        <h4>Texto alternativo</h4>
                        <p>Descreva cada foto do post para tornar o conteúdo acessível a quem usa leitor de tela.</p>
                    </PowerCard>
                </PowerGrid>

                <MoreTools>
                    <p>E também:</p>
                    <div className="chips">
                        <span>Posts de texto e link no Facebook</span>
                        <span>Local nos posts do Instagram</span>
                        <span>Divisão A/B nas automações</span>
                        <span>Histórico de execuções</span>
                        <span>Aviso de post pendente, aprovado e rejeitado</span>
                        <span>Capa de vídeo automática</span>
                    </div>
                    <p className="plans">Mídias sociais estão disponíveis nos planos Crescimento e Escala.</p>
                </MoreTools>

            </Container>
        </Section>
    )
}
