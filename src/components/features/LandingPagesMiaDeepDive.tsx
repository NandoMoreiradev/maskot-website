'use client'

import styled from 'styled-components'
import {
    Sparkles, Code2, MessagesSquare, CalendarCheck, ClipboardList, Target, MessageCircle,
    BarChart3, ShieldCheck, Lock, Undo2, History, Eye, Blocks, MousePointer2, CheckCircle2,
    FormInput, Globe, ListChecks, Clock, Users, Smartphone,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeader, Eyebrow, SectionTitle, SectionSubtitle } from '@/components/ui/SectionHeading'

const Section = styled.section`
    padding: 6rem 0 2rem;
    background: #FFFFFF;
    overflow: hidden;
`

const SplitLayout = styled.div<{ $reverse?: boolean }>`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    align-items: center;
    margin-bottom: 7rem;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
        gap: 3rem;
        margin-bottom: 5rem;

        > :first-child {
            order: ${props => (props.$reverse ? 2 : 0)};
        }
    }
`

const TextContent = styled.div`
    h3 {
        font-family: ${props => props.theme.typography.fontFamily.main};
        font-size: 2.25rem;
        font-weight: 800;
        color: #0F172A;
        margin-bottom: 1.5rem;
        line-height: 1.2;
        letter-spacing: -0.02em;
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
        font-weight: 500;
        color: #334155;
        line-height: 1.5;

        svg {
            color: #7C3AED;
            flex-shrink: 0;
            margin-top: 2px;
        }

        strong {
            color: #0F172A;
        }
    }
`

const SectionLabel = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: #F5F3FF;
    color: #7C3AED;
    border: 1px solid #EDE9FE;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: 0.35rem 0.85rem;
    border-radius: 100px;
    margin-bottom: 1.25rem;
`

/* ───────── Editor de código (visual do bloco 1) ───────── */

const CodeWindow = styled.div`
    background: #1E1E1E;
    border-radius: 16px;
    border: 1px solid #334155;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.18);
    overflow: hidden;
    font-family: 'JetBrains Mono', 'Fira Code', Consolas, 'Courier New', monospace;

    .tabs {
        display: flex;
        align-items: center;
        gap: 2px;
        background: #252526;
        padding: 0.5rem 0.75rem 0;
        border-bottom: 1px solid #333;

        .dots {
            display: flex;
            gap: 6px;
            margin-right: 0.85rem;
            padding-bottom: 0.5rem;

            i {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                display: block;
                background: #FF5F56;

                &:nth-child(2) { background: #FFBD2E; }
                &:nth-child(3) { background: #27C93F; }
            }
        }

        span {
            font-size: 0.72rem;
            color: #9CA3AF;
            padding: 0.4rem 0.8rem;
            border-radius: 6px 6px 0 0;

            &.active {
                background: #1E1E1E;
                color: #E5E7EB;
            }
        }
    }

    .code {
        padding: 1rem 0;
        font-size: 0.78rem;
        line-height: 1.75;
        color: #D4D4D4;
        overflow-x: auto;
    }

    .line {
        display: flex;
        white-space: pre;

        .n {
            width: 2.6rem;
            flex-shrink: 0;
            text-align: right;
            padding-right: 1rem;
            color: #6B7280;
            user-select: none;
        }

        .tag { color: #569CD6; }
        .attr { color: #9CDCFE; }
        .str { color: #CE9178; }
        .txt { color: #D4D4D4; }
        .cmt { color: #6A9955; }
        .kw { color: #C586C0; }
        .fn { color: #DCDCAA; }
    }

    .status {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #7C3AED;
        color: #FFFFFF;
        font-family: ${props => props.theme.typography.fontFamily.main};
        font-size: 0.7rem;
        font-weight: 600;
        padding: 0.35rem 0.85rem;
    }
`

/* ───────── Agenda (visual do bloco 2) ───────── */

const AgendaMock = styled.div`
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 20px;
    padding: 1.5rem;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
    gap: 1.1rem;

    .title {
        font-size: 1rem;
        font-weight: 800;
        color: #0F172A;
    }

    .label {
        font-size: 0.7rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: #64748B;
        margin-bottom: 0.5rem;
    }

    .chips {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }

    .chip {
        padding: 0.45rem 0.8rem;
        border-radius: 10px;
        border: 1px solid #E2E8F0;
        background: #F8FAFC;
        font-size: 0.8rem;
        font-weight: 600;
        color: #334155;

        &.picked {
            background: #F5F3FF;
            border-color: #7C3AED;
            color: #6D28D9;
        }

        &.off {
            opacity: 0.4;
            text-decoration: line-through;
        }
    }

    .confirm {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        background: #F0FDF4;
        border: 1px solid #BBF7D0;
        border-radius: 12px;
        padding: 0.85rem 1rem;

        svg { color: #16A34A; flex-shrink: 0; }

        strong {
            display: block;
            font-size: 0.85rem;
            color: #166534;
        }

        span {
            font-size: 0.75rem;
            color: #166534;
            opacity: 0.85;
        }
    }
`

/* ───────── Grades de cartões ───────── */

const GridBlock = styled.div`
    margin-bottom: 7rem;
`

const CardGrid = styled.div<{ $cols?: number }>`
    display: grid;
    grid-template-columns: repeat(${props => props.$cols ?? 3}, 1fr);
    gap: 1.5rem;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 640px) {
        grid-template-columns: 1fr;
    }
`

const Card = styled.div`
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 16px;
    padding: 1.75rem;
    transition: all 0.25s ease;

    &:hover {
        transform: translateY(-3px);
        border-color: #DDD6FE;
        box-shadow: 0 12px 28px -8px rgba(124, 58, 237, 0.15);
    }

    .icon {
        width: 46px;
        height: 46px;
        border-radius: 12px;
        background: #F5F3FF;
        color: #7C3AED;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1.1rem;
    }

    h4 {
        font-size: 1.1rem;
        font-weight: 700;
        color: #0F172A;
        margin-bottom: 0.5rem;
    }

    p {
        font-size: 0.95rem;
        color: #475569;
        line-height: 1.6;
        margin: 0;
    }
`

/* ───────── Dois jeitos de criar ───────── */

const WaysWrap = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;

    @media (max-width: 860px) {
        grid-template-columns: 1fr;
    }
`

const WayCard = styled.div<{ $featured?: boolean }>`
    position: relative;
    border-radius: 20px;
    padding: 2rem;
    border: 1px solid ${props => (props.$featured ? '#7C3AED' : '#E2E8F0')};
    background: ${props => (props.$featured ? 'linear-gradient(180deg, #FAF5FF 0%, #FFFFFF 60%)' : '#FFFFFF')};
    box-shadow: ${props => (props.$featured ? '0 20px 40px -16px rgba(124, 58, 237, 0.25)' : 'none')};

    .badge {
        position: absolute;
        top: -12px;
        right: 1.5rem;
        background: #7C3AED;
        color: #FFFFFF;
        font-size: 0.7rem;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        padding: 0.25rem 0.7rem;
        border-radius: 100px;
    }

    .head {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 0.75rem;

        .icon {
            width: 42px;
            height: 42px;
            border-radius: 12px;
            background: #F5F3FF;
            color: #7C3AED;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        h4 {
            font-size: 1.25rem;
            font-weight: 800;
            color: #0F172A;
        }
    }

    .lead {
        font-size: 0.95rem;
        color: #475569;
        line-height: 1.6;
        margin-bottom: 1.25rem;
    }

    ul {
        list-style: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 0.7rem;
    }

    li {
        display: flex;
        gap: 0.6rem;
        font-size: 0.92rem;
        color: #334155;
        line-height: 1.5;

        svg {
            color: #7C3AED;
            flex-shrink: 0;
            margin-top: 3px;
        }
    }
`

const Footnote = styled.p`
    text-align: center;
    max-width: 760px;
    margin: 2rem auto 0;
    font-size: 0.95rem;
    color: #64748B;
    line-height: 1.6;

    strong {
        color: #0F172A;
    }
`

export default function LandingPagesMiaDeepDive() {
    return (
        <Section id="mia">
            <Container>
                <SectionHeader $maxWidth="820px" $marginBottom="5rem">
                    <Eyebrow>Novo: criação com a Mia</Eyebrow>
                    <SectionTitle>Escreva o que você quer. A Mia escreve a página.</SectionTitle>
                    <SectionSubtitle>
                        Se você já viu ferramentas de programação com IA, como Codex, Claude Code ou Antigravity, é a mesma ideia: explicar em português o que quer e acompanhar o código nascer. A diferença é que a Mia foi feita para escolas e já conhece a sua.
                    </SectionSubtitle>
                </SectionHeader>

                {/* BLOCO 1: CONVERSA + CÓDIGO AO VIVO */}
                <SplitLayout>
                    <TextContent>
                        <SectionLabel><MessagesSquare size={14} /> Conversa e código ao vivo</SectionLabel>
                        <h3>Um chat, uma prévia e o código sempre à mão</h3>
                        <p>
                            Você descreve a campanha, a Mia escreve a página completa e a prévia atualiza a cada pedido. Quem prefere ajustar sozinho abre a aba Código, com as cores e os números de linha de um editor de programação.
                        </p>
                        <ul>
                            <li><Eye size={20} /> <strong>Prévia ao vivo:</strong> veja a página no computador e no celular enquanto a Mia escreve.</li>
                            <li><Sparkles size={20} /> <strong>Ajustes em português:</strong> &quot;deixe o topo mais impactante&quot;, &quot;adicione perguntas frequentes&quot;, &quot;mude para um visual mais escuro&quot;.</li>
                            <li><Code2 size={20} /> <strong>Código na mão:</strong> HTML, CSS e JavaScript editáveis, com salvamento automático.</li>
                            <li><Undo2 size={20} /> <strong>Desfazer o último pedido:</strong> experimente sem medo de estragar o que já estava bom.</li>
                        </ul>
                    </TextContent>

                    <CodeWindow aria-label="Exemplo do editor de código da landing page">
                        <div className="tabs">
                            <div className="dots"><i /><i /><i /></div>
                            <span className="active">index.html</span>
                            <span>styles.css</span>
                            <span>script.js</span>
                        </div>
                        <div className="code">
                            <div className="line"><span className="n">1</span><span><span className="tag">&lt;section</span> <span className="attr">class</span>=<span className="str">&quot;hero&quot;</span><span className="tag">&gt;</span></span></div>
                            <div className="line"><span className="n">2</span><span>  <span className="tag">&lt;h1&gt;</span><span className="txt">Matrículas 2027 abertas</span><span className="tag">&lt;/h1&gt;</span></span></div>
                            <div className="line"><span className="n">3</span><span>  <span className="tag">&lt;p&gt;</span><span className="txt">Conheça a escola e agende sua visita.</span><span className="tag">&lt;/p&gt;</span></span></div>
                            <div className="line"><span className="n">4</span><span>  <span className="tag">&lt;a</span> <span className="attr">href</span>=<span className="str">&quot;#agenda&quot;</span> <span className="attr">class</span>=<span className="str">&quot;btn&quot;</span><span className="tag">&gt;</span><span className="txt">Agendar visita</span><span className="tag">&lt;/a&gt;</span></span></div>
                            <div className="line"><span className="n">5</span><span><span className="tag">&lt;/section&gt;</span></span></div>
                            <div className="line"><span className="n">6</span><span /></div>
                            <div className="line"><span className="n">7</span><span><span className="cmt">&lt;!-- dias e horários vêm da agenda real da escola --&gt;</span></span></div>
                            <div className="line"><span className="n">8</span><span><span className="tag">&lt;div</span> <span className="attr">id</span>=<span className="str">&quot;agenda&quot;</span> <span className="attr">class</span>=<span className="str">&quot;horarios&quot;</span><span className="tag">&gt;&lt;/div&gt;</span></span></div>
                        </div>
                        <div className="status"><span>Mia atualizou: index.html, script.js</span><span>Salvo</span></div>
                    </CodeWindow>
                </SplitLayout>

                {/* BLOCO 2: AGENDA REAL */}
                <SplitLayout $reverse>
                    <AgendaMock>
                        <div className="title">Agende sua visita</div>
                        <div>
                            <div className="label">Tipo de visita</div>
                            <div className="chips">
                                <span className="chip picked">Visita guiada</span>
                                <span className="chip">Aula experimental</span>
                            </div>
                        </div>
                        <div>
                            <div className="label">Dia</div>
                            <div className="chips">
                                <span className="chip off">Ter 03/11</span>
                                <span className="chip picked">Qua 04/11</span>
                                <span className="chip">Qui 05/11</span>
                                <span className="chip">Sex 06/11</span>
                            </div>
                        </div>
                        <div>
                            <div className="label">Horário</div>
                            <div className="chips">
                                <span className="chip">09:00</span>
                                <span className="chip">10:30</span>
                                <span className="chip picked">14:00</span>
                                <span className="chip off">15:30</span>
                            </div>
                        </div>
                        <div className="confirm">
                            <CheckCircle2 size={22} />
                            <div>
                                <strong>Visita confirmada: quarta, 04/11, às 14:00</strong>
                                <span>Reservada na agenda da escola e registrada no CRM</span>
                            </div>
                        </div>
                    </AgendaMock>

                    <TextContent>
                        <SectionLabel><CalendarCheck size={14} /> Agenda real</SectionLabel>
                        <h3>A página agenda a visita de verdade</h3>
                        <p>
                            Não é um formulário que vira recado para a secretaria. A página mostra os dias e horários livres da agenda da escola, e a visita é reservada como na página pública de agendamento do Maskot.
                        </p>
                        <ul>
                            <li><ListChecks size={20} /> <strong>Tipos de visita da escola:</strong> a família escolhe entre os tipos que você oferece, cada um com a sua duração.</li>
                            <li><Clock size={20} /> <strong>Só horários livres:</strong> feriados, bloqueios, férias e horários lotados não aparecem.</li>
                            <li><Users size={20} /> <strong>Anfitrião e capacidade:</strong> a visita cai na agenda do anfitrião certo, respeitando a capacidade de cada horário.</li>
                            <li><Target size={20} /> <strong>Lead com origem:</strong> quem agenda já entra no funil, com a campanha ou o anúncio de onde veio.</li>
                        </ul>
                    </TextContent>
                </SplitLayout>

                {/* BLOCO 3: LIGADA AO QUE A ESCOLA JÁ TEM */}
                <GridBlock>
                    <SectionHeader $maxWidth="760px" $marginBottom="3rem">
                        <Eyebrow>Integrada ao Maskot</Eyebrow>
                        <SectionTitle>Usa o que a escola já cadastrou</SectionTitle>
                        <SectionSubtitle>
                            A Mia não parte do zero: ela monta a página com os formulários, as pesquisas e as origens que a sua escola já configurou no Maskot.
                        </SectionSubtitle>
                    </SectionHeader>

                    <CardGrid>
                        <Card>
                            <div className="icon"><FormInput size={24} /></div>
                            <h4>Formulários da escola</h4>
                            <p>Peça &quot;use o formulário de matrículas&quot; e a página lê os campos dele e envia pelo mesmo caminho, respeitando o estágio, o responsável e a campanha do formulário.</p>
                        </Card>
                        <Card>
                            <div className="icon"><ClipboardList size={24} /></div>
                            <h4>Pesquisas</h4>
                            <p>NPS, satisfação, múltipla escolha, matriz e os demais tipos: a Mia monta a pesquisa na página, e a resposta entra nos relatórios da pesquisa.</p>
                        </Card>
                        <Card>
                            <div className="icon"><Target size={24} /></div>
                            <h4>Origens de lead</h4>
                            <p>O campo &quot;Como conheceu a escola?&quot; usa as origens que você cadastrou. A resposta vira a origem do lead, sem apagar a que veio do anúncio.</p>
                        </Card>
                        <Card>
                            <div className="icon"><MessageCircle size={24} /></div>
                            <h4>WhatsApp com rastreio</h4>
                            <p>Os botões de WhatsApp levam o código do anúncio para a conversa, e o lead chega ao atendimento já com a campanha.</p>
                        </Card>
                        <Card>
                            <div className="icon"><BarChart3 size={24} /></div>
                            <h4>Analytics e UTM</h4>
                            <p>Google Analytics e Meta Pixel, respeitando o consentimento de cookies, e a origem de cada visita registrada para saber de qual anúncio veio cada matrícula.</p>
                        </Card>
                        <Card>
                            <div className="icon"><Globe size={24} /></div>
                            <h4>Publicação completa</h4>
                            <p>Domínio próprio, SEO, publicação agendada e histórico de versões: os mesmos recursos de publicação das páginas feitas no editor visual.</p>
                        </Card>
                    </CardGrid>
                </GridBlock>

                {/* BLOCO 4: SEGURANÇA E CONTROLE */}
                <GridBlock>
                    <SectionHeader $maxWidth="760px" $marginBottom="3rem">
                        <Eyebrow>Controle e segurança</Eyebrow>
                        <SectionTitle>Rápida, mas sempre sob o seu controle</SectionTitle>
                        <SectionSubtitle>
                            Quem escreve a página é uma IA, e quem decide o que vai ao ar é você.
                        </SectionSubtitle>
                    </SectionHeader>

                    <CardGrid $cols={4}>
                        <Card>
                            <div className="icon"><Lock size={24} /></div>
                            <h4>Ambiente isolado</h4>
                            <p>O código roda separado do Maskot e sem acesso livre à internet. Contato, agenda e pesquisas passam por canais controlados do sistema.</p>
                        </Card>
                        <Card>
                            <div className="icon"><ShieldCheck size={24} /></div>
                            <h4>Sem invenção</h4>
                            <p>A Mia só usa o que a escola informou. Preços e percentuais que não estão nos seus dados viram aviso para você conferir, e imagens só vêm de endereços informados.</p>
                        </Card>
                        <Card>
                            <div className="icon"><Eye size={24} /></div>
                            <h4>Revisão antes de publicar</h4>
                            <p>Antes de ir ao ar, o sistema lista o que merece atenção, como valores, política de privacidade e links. Nada é publicado sem a sua confirmação.</p>
                        </Card>
                        <Card>
                            <div className="icon"><History size={24} /></div>
                            <h4>Versões e desfazer</h4>
                            <p>Volte ao estado anterior ao último pedido e restaure qualquer versão já publicada, sem risco de perder o que estava funcionando.</p>
                        </Card>
                    </CardGrid>
                </GridBlock>

                {/* BLOCO 5: DOIS JEITOS DE CRIAR */}
                <GridBlock style={{ marginBottom: '5rem' }}>
                    <SectionHeader $maxWidth="760px" $marginBottom="3rem">
                        <Eyebrow>Escolha o seu jeito</Eyebrow>
                        <SectionTitle>Dois jeitos de criar a mesma página</SectionTitle>
                        <SectionSubtitle>
                            Comece pelo que for mais confortável para a sua equipe. Dá para usar os dois na mesma escola.
                        </SectionSubtitle>
                    </SectionHeader>

                    <WaysWrap>
                        <WayCard $featured>
                            <span className="badge">Novo</span>
                            <div className="head">
                                <div className="icon"><Sparkles size={22} /></div>
                                <h4>Criar com a Mia</h4>
                            </div>
                            <p className="lead">Descreva e ajuste conversando. Ideal para ir do zero à página no ar em minutos e para testar ideias de campanha.</p>
                            <ul>
                                <li><CheckCircle2 size={16} /> Layout livre, sem o limite de blocos prontos</li>
                                <li><CheckCircle2 size={16} /> Prévia ao vivo e ajustes em português</li>
                                <li><CheckCircle2 size={16} /> Agenda, formulários, pesquisas e origens ligados à página</li>
                                <li><CheckCircle2 size={16} /> Código visível e editável para quem quiser</li>
                            </ul>
                        </WayCard>

                        <WayCard>
                            <div className="head">
                                <div className="icon"><Blocks size={22} /></div>
                                <h4>Editor visual</h4>
                            </div>
                            <p className="lead">Arraste e solte blocos. Ideal para quem quer decidir cada detalhe com as próprias mãos, sem escrever nada.</p>
                            <ul>
                                <li><MousePointer2 size={16} /> 35 tipos de blocos, de capa a formulário, contador e FAQ</li>
                                <li><MousePointer2 size={16} /> Templates prontos para começar e a opção de salvar os seus</li>
                                <li><MousePointer2 size={16} /> A Mia também ajusta as páginas do editor visual por conversa</li>
                                <li><Smartphone size={16} /> Pré-visualização para celular, tablet e computador</li>
                            </ul>
                        </WayCard>
                    </WaysWrap>

                    <Footnote>
                        A criação com a Mia está disponível a partir do plano <strong>Crescimento</strong>. Cada plano inclui uma franquia mensal de pedidos à Mia: cada pedido que cria ou ajusta a página conta uma vez, e a edição manual do código não conta.
                    </Footnote>
                </GridBlock>
            </Container>
        </Section>
    )
}
