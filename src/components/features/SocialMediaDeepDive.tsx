'use client'

import styled, { keyframes, css } from 'styled-components'
import {
    Layers, Eye, MapPin, Image as ImageIcon, Video, Film,
    CheckCircle2, Bell, LayoutGrid,
    Workflow, GitBranch, History,
    BarChart3, TrendingUp,
    MessageSquare, Instagram, Link2,
    ShieldCheck, RefreshCw, CalendarClock, AtSign, Heart, MessageCircle, Send
} from 'lucide-react'

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
        font-family: ${props => props.theme.typography.fontFamily.main};
        font-size: ${props => props.theme.typography.fontSize['3xl']};
        font-weight: ${props => props.theme.typography.fontWeight.extrabold};
        margin-bottom: 1.5rem;
        line-height: 1.2;
        color: ${props => props.theme.colors.textDark};
    }
    p {
        font-family: ${props => props.theme.typography.fontFamily.main};
        font-size: ${props => props.theme.typography.fontSize.lg};
        color: ${props => props.theme.colors.textMedium};
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
        font-size: ${props => props.theme.typography.fontSize.base};
        font-weight: ${props => props.theme.typography.fontWeight.medium};
        color: ${props => props.theme.colors.textDark};
        svg {
            color: #DB2777; /* Rosa/magenta */
            flex-shrink: 0;
            margin-top: 2px;
        }
    }
`

const MockupCard = styled.div`
    background: ${props => props.theme.colors.cardBackground};
    border-radius: ${props => props.theme.borderRadius.xl};
    box-shadow: ${props => props.theme.shadows['2xl']};
    border: 1px solid ${props => props.theme.colors.backgroundMedium};
    overflow: hidden;
    position: relative;
    animation: ${float} 8s ease-in-out infinite;
`

const MockupHeader = styled.div`
    height: 40px;
    background: ${props => props.theme.colors.lightGray};
    border-bottom: 1px solid ${props => props.theme.colors.backgroundMedium};
    display: flex;
    align-items: center;
    padding: 0 1rem;
    gap: 0.5rem;
    .dots { display: flex; gap: 6px; div { width: 8px; height: 8px; border-radius: 50%; background: #ccc; } }
`

// --- MOCKUP 1: COMPOSITOR / PREVIEW ---
const ComposerMock = styled.div`
    padding: 20px;
    background: #FDF2F8;
    display: flex;
    gap: 20px;

    .formats { display: flex; flex-direction: column; gap: 8px; width: 84px; flex-shrink: 0; }
    .format-item {
        display: flex; flex-direction: column; align-items: center; gap: 4px;
        padding: 8px 4px; border-radius: 10px; background: white; border: 1px solid #F3D4E4;
        font-size: 9.5px; color: #6B7280; font-weight: 600;
        &.active { border-color: #DB2777; background: #FCE7F3; color: #9D174D; }
        svg { color: inherit; }
    }
    .preview {
        flex: 1; background: white; border-radius: 12px; border: 1px solid #F3D4E4;
        overflow: hidden;
    }
    .preview-media {
        height: 110px;
        background: linear-gradient(135deg, #F59E0B 0%, #EC4899 50%, #8B5CF6 100%);
    }
    .preview-body { padding: 10px 12px; }
    .preview-caption { font-size: 10.5px; color: #374151; line-height: 1.4; margin-bottom: 8px; }
    .preview-caption strong { color: #111827; }
    .preview-actions { display: flex; gap: 12px; color: #6B7280; }
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
        color: #6B7280; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;
        span.dot { width: 6px; height: 6px; border-radius: 50%; }
    }
    .card {
        background: #F9FAFB; border: 1px solid #E5E7EB; border-radius: 8px;
        padding: 8px; margin-bottom: 8px;
        .bar { height: 6px; border-radius: 4px; background: #E5E7EB; margin-bottom: 6px; width: 70%; }
        .txt { font-size: 9px; color: #9CA3AF; }
    }
    .card.highlight { border-color: #F9A8D4; background: #FDF2F8; }
`

// --- MOCKUP 3: AUTOMAÇÃO / FLUXO ---
const FlowMock = styled.div`
    padding: 20px 16px;
    background: #FAFAFA;

    .node {
        display: flex; align-items: center; gap: 10px;
        background: white; border: 1px solid #E5E7EB; border-radius: 10px;
        padding: 10px 12px; margin-bottom: 0;
        box-shadow: 0 1px 2px rgba(0,0,0,0.04);
    }
    .node-icon {
        width: 28px; height: 28px; border-radius: 8px; flex-shrink: 0;
        display: flex; align-items: center; justify-content: center; color: white;
    }
    .node-text { min-width: 0; }
    .node-title { font-size: 11.5px; font-weight: 700; color: #111827; }
    .node-sub { font-size: 9.5px; color: #9CA3AF; }
    .connector { width: 2px; height: 18px; background: #E5E7EB; margin-left: 24px; }
    .branch { display: flex; gap: 10px; margin-left: 24px; padding-left: 16px; border-left: 2px solid #E5E7EB; }
`

// --- MOCKUP 4: ANALYTICS ---
const AnalyticsMock = styled.div`
    padding: 16px;
    background: white;

    .kpis { display: flex; gap: 10px; margin-bottom: 14px; }
    .kpi {
        flex: 1; background: #FDF2F8; border: 1px solid #FBCFE8; border-radius: 10px;
        padding: 10px; text-align: center;
        .num { font-size: 16px; font-weight: 800; color: #9D174D; line-height: 1; }
        .label { font-size: 8.5px; color: #6B7280; font-weight: 600; margin-top: 4px; text-transform: uppercase; }
    }
    .rank-row {
        display: flex; align-items: center; gap: 10px; padding: 8px 0;
        border-bottom: 1px solid #F3F4F6;
        &:last-child { border: none; }
    }
    .rank-thumb {
        width: 30px; height: 30px; border-radius: 6px; flex-shrink: 0;
        background: linear-gradient(135deg, #F59E0B, #EC4899, #8B5CF6);
    }
    .rank-text { flex: 1; min-width: 0; }
    .rank-title { font-size: 11px; font-weight: 600; color: #111827; }
    .rank-sub { font-size: 9.5px; color: #9CA3AF; }
    .rank-value { font-size: 11.5px; font-weight: 700; color: #10B981; }
`

// --- MOCKUP 5: COMENTÁRIOS ---
const CommentsMock = styled.div`
    padding: 16px;
    background: #F8FAFC;

    .c-item {
        display: flex; gap: 10px; padding: 10px; border-radius: 10px;
        background: white; border: 1px solid #E5E7EB; margin-bottom: 8px;
    }
    .avatar {
        width: 28px; height: 28px; border-radius: 50%; flex-shrink: 0;
        display: flex; align-items: center; justify-content: center;
        font-size: 10.5px; font-weight: 700; color: white;
    }
    .c-body { flex: 1; min-width: 0; }
    .c-name { font-size: 11px; font-weight: 700; color: #111827; }
    .c-text { font-size: 10.5px; color: #4B5563; margin: 2px 0 4px; }
    .c-meta { display: flex; align-items: center; gap: 8px; font-size: 9px; color: #9CA3AF; }
    .c-reply { color: #DB2777; font-weight: 700; }
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
    background: ${props => props.theme.colors.lightGray};
    padding: 2rem;
    border-radius: 16px;
    border: 1px solid #eee;
    transition: all ${props => props.theme.transitions.base};
    &:hover {
        transform: translateY(-5px);
        background: white;
        box-shadow: ${props => props.theme.shadows.lg};
        border-color: #DB2777;
        .icon { background: #DB2777; color: white; }
    }
    .icon {
        width: 48px; height: 48px; border-radius: 12px;
        background: white; display: flex; align-items: center; justify-content: center;
        color: #DB2777; margin-bottom: 1.5rem;
        box-shadow: ${props => props.theme.shadows.sm};
    }
    h4 { font-size: 1.25rem; font-weight: 700; margin-bottom: 0.75rem; color: ${props => props.theme.colors.textDark}; }
    p { font-size: 1rem; color: ${props => props.theme.colors.textMedium}; line-height: 1.5; margin: 0; }
`

export default function SocialMediaDeepDive() {
    return (
        <Section id="recursos">
            <Container>

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
                            <li><MapPin size={20}/> <strong>Localização e marcações:</strong> adicione local, colaboradores e pessoas na imagem, direto no Instagram.</li>
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

                {/* 2. APROVAÇÃO EM EQUIPE */}
                <FeatureRow $reverse>
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
                            <li><LayoutGrid size={20}/> <strong>Quadro por status:</strong> rascunhos, pendentes, aprovados, agendados e publicados num só painel.</li>
                        </ul>
                    </TextContent>
                </FeatureRow>

                {/* 3. AUTOMAÇÃO DE DM E COMENTÁRIOS */}
                <FeatureRow>
                    <TextContent>
                        <h3>Fluxos que respondem sozinhos, 24 horas por dia</h3>
                        <p>
                            Um construtor visual de arrastar e soltar monta fluxos de resposta automática
                            para o <strong>Direct do Instagram e o Messenger</strong>. Uma palavra-chave na DM,
                            uma resposta a story ou um comentário disparam a mensagem certa — sem depender
                            de alguém online para responder.
                        </p>
                        <ul>
                            <li><Workflow size={20}/> <strong>Gatilhos variados:</strong> novo contato, palavra-chave em DM ou comentário, resposta a story, menção.</li>
                            <li><GitBranch size={20}/> <strong>Condições e teste A/B:</strong> ramifique o fluxo por tag do contato ou distribua aleatoriamente entre variações.</li>
                            <li><History size={20}/> <strong>Histórico de execuções:</strong> acompanhe cada disparo do fluxo para auditar o que foi enviado.</li>
                        </ul>
                    </TextContent>
                    <MockupCard>
                        <MockupHeader><div className="dots"><div></div><div></div><div></div></div></MockupHeader>
                        <FlowMock>
                            <div className="node">
                                <div className="node-icon" style={{background: '#DB2777'}}><Instagram size={15}/></div>
                                <div className="node-text">
                                    <div className="node-title">Palavra-chave na DM</div>
                                    <div className="node-sub">Gatilho · &quot;matrícula&quot;</div>
                                </div>
                            </div>
                            <div className="connector" />
                            <div className="node">
                                <div className="node-icon" style={{background: '#8B5CF6'}}><GitBranch size={15}/></div>
                                <div className="node-text">
                                    <div className="node-title">Tem a tag &quot;Lead quente&quot;?</div>
                                    <div className="node-sub">Condição</div>
                                </div>
                            </div>
                            <div className="connector" />
                            <div className="branch">
                                <div className="node" style={{marginBottom: '8px'}}>
                                    <div className="node-icon" style={{background: '#10B981'}}><MessageSquare size={15}/></div>
                                    <div className="node-text">
                                        <div className="node-title">Enviar mensagem</div>
                                        <div className="node-sub">Ação</div>
                                    </div>
                                </div>
                            </div>
                        </FlowMock>
                    </MockupCard>
                </FeatureRow>

                {/* 4. ANALYTICS */}
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
                            Acompanhe alcance, impressões e engajamento por post e por rede, veja a
                            evolução de seguidores e descubra o que performa melhor — inclusive posts
                            publicados antes de conectar o Maskot Edu.
                        </p>
                        <ul>
                            <li><BarChart3 size={20}/> <strong>Ranking automático:</strong> veja os melhores e piores posts do período, sem montar planilha.</li>
                            <li><TrendingUp size={20}/> <strong>Seguidores ao longo do tempo:</strong> gráfico de evolução por rede conectada.</li>
                            <li><History size={20}/> <strong>Histórico importado:</strong> posts antigos entram no relatório marcados como &quot;Importado&quot;.</li>
                        </ul>
                    </TextContent>
                </FeatureRow>

                {/* 5. CENTRAL DE COMENTÁRIOS */}
                <FeatureRow>
                    <TextContent>
                        <h3>Comentários e DMs, tudo num só lugar</h3>
                        <p>
                            Veja e responda comentários de cada publicação — Instagram e Facebook — sem
                            abrir o aplicativo da rede social. Com o módulo de atendimento ativo, as
                            conversas de Direct chegam no mesmo inbox do WhatsApp.
                        </p>
                        <ul>
                            <li><MessageSquare size={20}/> <strong>Responder sem sair do CRM:</strong> a resposta sai direto na plataforma de origem.</li>
                            <li><Instagram size={20}/> <strong>Organizado por post e por rede:</strong> filtre rapidamente onde a conversa está acontecendo.</li>
                            <li><Link2 size={20}/> <strong>Conectado ao atendimento:</strong> DMs chegam no mesmo inbox do WhatsApp, quando o módulo está ativo.</li>
                        </ul>
                    </TextContent>
                    <MockupCard>
                        <MockupHeader><div className="dots"><div></div><div></div><div></div></div></MockupHeader>
                        <CommentsMock>
                            <div className="c-item">
                                <div className="avatar" style={{background: '#EC4899'}}>RM</div>
                                <div className="c-body">
                                    <div className="c-name">Renata Martins</div>
                                    <div className="c-text">Vocês ainda têm vaga para o infantil?</div>
                                    <div className="c-meta">Instagram · há 12 min <span className="c-reply">Responder</span></div>
                                </div>
                            </div>
                            <div className="c-item">
                                <div className="avatar" style={{background: '#8B5CF6'}}>JL</div>
                                <div className="c-body">
                                    <div className="c-name">João Lima</div>
                                    <div className="c-text">Qual o valor da matrícula esse ano?</div>
                                    <div className="c-meta">Facebook · há 1 hora <span className="c-reply">Responder</span></div>
                                </div>
                            </div>
                        </CommentsMock>
                    </MockupCard>
                </FeatureRow>

                {/* 6. POWER GRID */}
                <div style={{textAlign: 'center', marginBottom: '3rem'}}>
                    <h3 style={{
                        fontSize: '2rem',
                        fontWeight: 800,
                        color: '#333',
                        fontFamily: 'var(--font-inter)'
                    }}>Feito para a rotina de marketing da escola</h3>
                    <p style={{color: '#666', marginTop: '0.5rem'}}>Recursos que dão controle de verdade sobre o que vai ao ar.</p>
                </div>

                <PowerGrid>
                    <PowerCard>
                        <div className="icon"><Layers size={24}/></div>
                        <h4>4 formatos de post</h4>
                        <p>Feed, Carrossel, Reels e Stories no Instagram; texto e link no Facebook.</p>
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
                        <div className="icon"><CalendarClock size={24}/></div>
                        <h4>Calendário editorial</h4>
                        <p>Veja e agende publicações num calendário mensal, dia a dia.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><Link2 size={24}/></div>
                        <h4>Contas conectadas</h4>
                        <p>Painel de status mostra token válido e permissão de publicação de cada conta.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><AtSign size={24}/></div>
                        <h4>Marcação de colaboradores</h4>
                        <p>Marque até 5 perfis e pessoas na imagem em publicações do Instagram.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><Bell size={24}/></div>
                        <h4>Notificações automáticas</h4>
                        <p>Equipe avisada a cada post pendente, aprovado ou rejeitado.</p>
                    </PowerCard>
                </PowerGrid>

            </Container>
        </Section>
    )
}
