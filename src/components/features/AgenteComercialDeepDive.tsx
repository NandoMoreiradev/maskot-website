'use client'

import styled from 'styled-components'
import Link from 'next/link'
import {
    Sparkles, ArrowRight, Eye, BellRing, MousePointerClick,
    MessageSquareWarning, UserPlus, Flame, CalendarX, CalendarCheck, CalendarClock,
    Hourglass, ListChecks, RotateCcw, CalendarPlus, Clock, UserRound, Copy,
    ShieldCheck, Hand, Gauge, Ban, GraduationCap, Lock, ClipboardList, Inbox,
    CheckCircle2, MessageCircle, Users, BarChart3,
} from 'lucide-react'

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

const SplitLayout = styled.div<{ $reverse?: boolean }>`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    align-items: center;
    margin-bottom: 8rem;

    @media (max-width: ${props => props.theme.breakpoints.lg}) {
        grid-template-columns: 1fr;
        gap: 3rem;
        display: flex;
        flex-direction: column-reverse;
        ${props => !props.$reverse && 'flex-direction: column;'}
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
            color: #64748B;
            flex-shrink: 0;
            margin-top: 2px;
        }
    }
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
        background: #F8FAFC;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #475569;
        border: 1px solid #E2E8F0;
        margin-bottom: 1.25rem;
    }

    .when {
        display: inline-block;
        font-size: 0.72rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        color: #C2410C;
        background: #FFF7ED;
        border: 1px solid #FED7AA;
        border-radius: 999px;
        padding: 2px 8px;
        margin-bottom: 0.75rem;
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
    position: relative;

    .number {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background: linear-gradient(135deg, #F97316 0%, #F59E0B 100%);
        color: #FFFFFF;
        font-weight: 800;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1.25rem;
    }
`

// ---------------------------------------------------------------- mockups

const Mockup = styled.div`
    background: #FFFFFF;
    border-radius: 1rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
    border: 1px solid #E2E8F0;
    overflow: hidden;
`

const MockupHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0.875rem 1.25rem;
    background: #FFF7ED;
    border-bottom: 1px solid #FED7AA;
    color: #9A3412;
    font-weight: 600;
    font-size: 0.9rem;

    .done {
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

const Row = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 10px;
    padding: 0.75rem 0.875rem;

    svg { color: #F97316; flex-shrink: 0; }

    .text { flex: 1; min-width: 0; }
    .title { font-size: 0.9rem; font-weight: 600; color: #0F172A; }
    .meta { font-size: 0.78rem; color: #64748B; margin-top: 2px; }
    .late { color: #DC2626; font-weight: 600; }

    .chip {
        font-size: 0.75rem;
        font-weight: 600;
        color: #475569;
        border: 1px solid #E2E8F0;
        border-radius: 8px;
        padding: 4px 10px;
        white-space: nowrap;
    }
`

const SuggestionCard = styled.div`
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 10px;
    padding: 0.875rem;
    display: grid;
    gap: 0.625rem;

    .top { display: flex; justify-content: space-between; gap: 0.75rem; align-items: flex-start; }
    .title { font-size: 0.9rem; font-weight: 600; color: #0F172A; }
    .why { font-size: 0.8rem; color: #64748B; margin-top: 2px; line-height: 1.45; }

    .hot {
        font-size: 0.68rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        color: #DC2626;
        background: #FEF2F2;
        border-radius: 999px;
        padding: 3px 8px;
    }

    .draft {
        background: #F8FAFC;
        border: 1px solid #E2E8F0;
        border-radius: 8px;
        padding: 0.625rem 0.75rem;

        .label { display: flex; align-items: center; gap: 6px; font-size: 0.75rem; font-weight: 700; color: #C2410C; margin-bottom: 4px; }
        p { font-size: 0.82rem; line-height: 1.5; color: #334155; margin: 0 0 6px; }
        .hint { font-size: 0.72rem; color: #94A3B8; }
    }

    .actions { display: flex; flex-wrap: wrap; gap: 6px; }

    .btn {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        font-size: 0.78rem;
        font-weight: 600;
        padding: 6px 10px;
        border-radius: 8px;
        border: 1px solid #E2E8F0;
        background: #FFFFFF;
        color: #475569;
    }

    .btn.primary { background: #0F172A; border-color: #0F172A; color: #FFFFFF; }

    .snooze {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        padding-top: 0.5rem;
        border-top: 1px dashed #E2E8F0;
    }
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
        strong { display: block; font-size: 1.4rem; color: #0F172A; line-height: 1.1; }
        span { font-size: 0.7rem; color: #64748B; }
    }

    .kpi.alert { border-color: #FCA5A5; strong { color: #DC2626; } }
`

const Panel = styled.div`
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 10px;
    padding: 0.875rem;

    h5 { font-size: 0.85rem; font-weight: 700; color: #0F172A; margin: 0 0 0.625rem; }

    .headline { display: flex; gap: 1.5rem; margin-bottom: 0.75rem; }
    .headline strong { display: block; font-size: 1.35rem; color: #0F172A; line-height: 1.1; }
    .headline span { font-size: 0.7rem; color: #64748B; }

    .bar {
        display: grid;
        grid-template-columns: 110px 1fr 40px;
        gap: 0.5rem;
        align-items: center;
        font-size: 0.75rem;
        color: #475569;
        margin-bottom: 6px;
    }

    .track { height: 8px; border-radius: 999px; background: #E2E8F0; overflow: hidden; }
    .fill { height: 100%; border-radius: 999px; }
    .good { background: #16A34A; }
    .ok { background: #F59E0B; }
    .bad { background: #DC2626; }

    table { width: 100%; border-collapse: collapse; font-size: 0.75rem; }
    th, td { padding: 5px 6px; text-align: right; border-bottom: 1px solid #F1F5F9; color: #0F172A; }
    th { font-size: 0.66rem; text-transform: uppercase; letter-spacing: 0.03em; color: #64748B; font-weight: 600; }
    th:first-child, td:first-child { text-align: left; }
    td.warn { color: #DC2626; font-weight: 700; }
`

const TwoFaces = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;

    @media (max-width: ${props => props.theme.breakpoints.md}) {
        grid-template-columns: 1fr;
    }

    .face {
        border: 1px solid #E2E8F0;
        border-radius: 1rem;
        padding: 2rem;
        background: #FFFFFF;
    }

    .face.agent { border-color: #FDBA74; background: #FFFBF5; }

    .face .tag {
        font-size: 0.75rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: #64748B;
    }

    .face.agent .tag { color: #C2410C; }

    .face h4 { font-size: 1.35rem; font-weight: 700; color: #0F172A; margin: 0.5rem 0 0.75rem; }
    .face p { color: #475569; line-height: 1.6; margin: 0 0 1rem; }
    .face ul { list-style: none; padding: 0; margin: 0 0 1.25rem; display: grid; gap: 0.5rem; }
    .face li { display: flex; gap: 0.5rem; font-size: 0.9rem; color: #334155; }
    .face li svg { color: #F97316; flex-shrink: 0; margin-top: 3px; }
    .face a { display: inline-flex; align-items: center; gap: 6px; font-weight: 600; color: #0F172A; }
`

const Note = styled.p`
    text-align: center;
    max-width: 700px;
    margin: 2.5rem auto 0;
    font-size: 0.9rem;
    color: #64748B;
    line-height: 1.6;
`

export default function AgenteComercialDeepDive() {
    return (
        <Section id="como-funciona">
            <Container>
                {/* BLOCO 1: ONDE AS MATRÍCULAS SE PERDEM */}
                <Block>
                    <SectionHead>
                        <SectionLabel style={{ margin: '0 auto 1rem' }}><Eye size={14} /> O problema</SectionLabel>
                        <h3>Onde as matrículas se perdem</h3>
                        <p>
                            Quase nunca é a falta de interesse da família. É o lead que esperou sem resposta, a visita que ninguém
                            retomou, a conversa que esfriou numa etapa. A equipe está ocupada atendendo, e o que não aparece na tela
                            acaba esquecido.
                        </p>
                    </SectionHead>

                    <Grid>
                        <Card>
                            <div className="icon"><MessageSquareWarning size={24} /></div>
                            <h4>A família escreveu e esperou</h4>
                            <p>Cada hora sem resposta é uma chance maior de a família procurar outra escola.</p>
                        </Card>
                        <Card>
                            <div className="icon"><CalendarX size={24} /></div>
                            <h4>Faltou à visita e ninguém ligou</h4>
                            <p>Quem faltou geralmente ainda quer conhecer a escola. Falta alguém para reagendar.</p>
                        </Card>
                        <Card>
                            <div className="icon"><Hourglass size={24} /></div>
                            <h4>A matrícula parou numa etapa</h4>
                            <p>Sem tarefa nem visita marcada, o lead fica no funil por semanas, sem ninguém notar.</p>
                        </Card>
                    </Grid>
                </Block>

                {/* BLOCO 2: COMO FUNCIONA */}
                <Block>
                    <SectionHead>
                        <SectionLabel style={{ margin: '0 auto 1rem' }}><Sparkles size={14} /> Como funciona</SectionLabel>
                        <h3>A Mia vigia. Você decide.</h3>
                        <p>Três passos, sem nenhuma configuração complicada.</p>
                    </SectionHead>

                    <Grid>
                        <Step>
                            <div className="number">1</div>
                            <h4>Ela observa o funil</h4>
                            <p>
                                A cada 30 minutos, dentro do horário de funcionamento da escola, a Mia confere leads, conversas,
                                visitas e tarefas, nos quatro canais: WhatsApp, Instagram, Messenger e chat do site.
                            </p>
                        </Step>
                        <Step>
                            <div className="number">2</div>
                            <h4>Ela avisa com o motivo</h4>
                            <p>
                              Cada sugestão diz por que importa agora e qual é o próximo passo, no painel da Mia, com um selo no
                              botão e um resumo pela manhã.
                            </p>
                        </Step>
                        <Step>
                            <div className="number">3</div>
                            <h4>Você aprova com um clique</h4>
                            <p>
                                Aceitar cria a tarefa para a pessoa certa. Nada é enviado, movido ou marcado sem uma pessoa da equipe
                                decidir.
                            </p>
                        </Step>
                    </Grid>
                </Block>

                {/* BLOCO 3: FILA DO DIA */}
                <SplitLayout>
                    <TextContent>
                        <SectionLabel><ListChecks size={14} /> Fila do dia</SectionLabel>
                        <h3>Cada pessoa abre o dia <br />sabendo por onde começar</h3>
                        <p>
                            No painel da Mia, cada consultor vê um roteiro só dele: as visitas de hoje, o que a Mia sugere, as
                            atividades agendadas e as tarefas atrasadas, na ordem do que mais importa.
                        </p>
                        <ul>
                            <li><CalendarClock size={20} /> <span><strong>Visitas primeiro,</strong> por horário, e depois o que é urgente.</span></li>
                            <li><Inbox size={20} /> <span><strong>Um lugar só,</strong> em vez de abrir agenda, tarefas e conversas separadas.</span></li>
                            <li><CheckCircle2 size={20} /> <span><strong>Sem montanha de pendências:</strong> a fila mostra o essencial e conta o que já foi resolvido hoje.</span></li>
                        </ul>
                    </TextContent>

                    <Mockup>
                        <MockupHeader>
                            <Sparkles size={16} /> Sua fila de hoje: 4 itens
                            <span className="done">2 já resolvidos</span>
                        </MockupHeader>
                        <MockupBody>
                            <Row>
                                <CalendarClock size={18} />
                                <div className="text">
                                    <div className="title">Visita com Marta</div>
                                    <div className="meta">Hoje às 14:30 · presencial</div>
                                </div>
                                <span className="chip">Abrir lead</span>
                            </Row>
                            <SuggestionCard>
                                <div className="top">
                                    <div>
                                        <div className="title">Ana está aguardando resposta</div>
                                        <div className="why">O lead escreveu e está há 6h sem resposta.</div>
                                    </div>
                                    <span className="hot">Quente</span>
                                </div>
                                <div className="actions">
                                    <span className="btn primary">Criar tarefa de follow-up</span>
                                    <span className="btn">Abrir lead</span>
                                </div>
                            </SuggestionCard>
                            <Row>
                                <ClipboardList size={18} />
                                <div className="text">
                                    <div className="title">Enviar proposta</div>
                                    <div className="meta">Bruno · <span className="late">atrasada desde 12/10</span></div>
                                </div>
                                <span className="chip">Ver tarefa</span>
                            </Row>
                            <Row>
                                <UserRound size={18} />
                                <div className="text">
                                    <div className="title">Ligação</div>
                                    <div className="meta">Carla · hoje às 16:00</div>
                                </div>
                                <span className="chip">Abrir lead</span>
                            </Row>
                        </MockupBody>
                    </Mockup>
                </SplitLayout>

                {/* BLOCO 4: O CARTÃO DA SUGESTÃO */}
                <SplitLayout $reverse>
                    <Mockup>
                        <MockupBody>
                            <SuggestionCard>
                                <div className="top">
                                    <div>
                                        <div className="title">Marcos não compareceu à visita</div>
                                        <div className="why">O lead faltou há 5h e ninguém da equipe falou com ele depois.</div>
                                    </div>
                                </div>
                                <div className="draft">
                                    <div className="label"><MessageCircle size={13} /> Mensagem sugerida</div>
                                    <p>
                                        Oi, Marcos! Tudo bem? Sou da equipe Escola Horizonte. Sentimos a sua falta na visita! Aconteceu
                                        algum imprevisto? Posso remarcar para um dia e horário que fique melhor para você.
                                    </p>
                                    <span className="hint">Revise antes de enviar.</span>
                                </div>
                                <div className="actions">
                                    <span className="btn primary"><CalendarPlus size={13} /> Agendar visita</span>
                                    <span className="btn"><Copy size={13} /> Copiar</span>
                                    <span className="btn"><Clock size={13} /> Adiar</span>
                                    <span className="btn"><Users size={13} /> Delegar</span>
                                </div>
                                <div className="snooze">
                                    <span className="btn">Daqui a 3 horas</span>
                                    <span className="btn">Amanhã de manhã</span>
                                    <span className="btn">Segunda de manhã</span>
                                </div>
                            </SuggestionCard>
                        </MockupBody>
                    </Mockup>

                    <TextContent>
                        <SectionLabel><MousePointerClick size={14} /> Um clique resolve</SectionLabel>
                        <h3>Do aviso à ação, <br />sem sair da tela</h3>
                        <p>
                            A sugestão já chega com o que a pessoa precisa para agir. A mensagem é um ponto de partida para o
                            consultor revisar e personalizar, e nunca promete preço, desconto, prazo ou vaga.
                        </p>
                        <ul>
                            <li><MessageCircle size={20} /> <span><strong>Mensagem sugerida:</strong> copie ou abra a conversa já com o texto no campo.</span></li>
                            <li><CalendarPlus size={20} /> <span><strong>Agendar visita</strong> direto do cartão, pelo agendamento que a escola já usa.</span></li>
                            <li><Clock size={20} /> <span><strong>Adiar</strong> para daqui a 3 horas, amanhã ou segunda: a sugestão some e volta sozinha.</span></li>
                            <li><Users size={20} /> <span><strong>Delegar</strong> para um colega, que recebe o aviso e a tarefa.</span></li>
                        </ul>
                    </TextContent>
                </SplitLayout>

                {/* BLOCO 5: AS SITUAÇÕES QUE ELA VIGIA */}
                <Block>
                    <SectionHead>
                        <SectionLabel style={{ margin: '0 auto 1rem' }}><BellRing size={14} /> O que a Mia observa</SectionLabel>
                        <h3>Nove situações que costumam custar matrículas</h3>
                        <p>
                            Os prazos de cada uma são ajustáveis pela escola. Os valores abaixo são os padrões.
                        </p>
                    </SectionHead>

                    <Grid>
                        <Card>
                            <div className="icon"><MessageSquareWarning size={24} /></div>
                            <span className="when">4 horas sem resposta</span>
                            <h4>Lead aguardando resposta</h4>
                            <p>O lead escreveu e a conversa ficou parada, no WhatsApp, Instagram, Messenger ou chat do site.</p>
                        </Card>
                        <Card>
                            <div className="icon"><UserPlus size={24} /></div>
                            <span className="when">60 minutos</span>
                            <h4>Lead novo sem contato</h4>
                            <p>Chegou pelo formulário, anúncio ou site e ninguém da equipe falou com ele ainda.</p>
                        </Card>
                        <Card>
                            <div className="icon"><Flame size={24} /></div>
                            <span className="when">48 horas</span>
                            <h4>Lead quente sem próximo passo</h4>
                            <p>Um lead com alta chance de matrícula, sem tarefa, visita nem contato recente.</p>
                        </Card>
                        <Card>
                            <div className="icon"><CalendarX size={24} /></div>
                            <span className="when">2 horas depois</span>
                            <h4>Faltou à visita</h4>
                            <p>A Mia sugere reagendar enquanto o interesse ainda está vivo.</p>
                        </Card>
                        <Card>
                            <div className="icon"><CalendarCheck size={24} /></div>
                            <span className="when">24 horas depois</span>
                            <h4>Visita sem acompanhamento</h4>
                            <p>A família visitou a escola e ninguém voltou a falar com ela. É a hora do pós-visita.</p>
                        </Card>
                        <Card>
                            <div className="icon"><CalendarClock size={24} /></div>
                            <span className="when">3 horas depois do fim</span>
                            <h4>Visita sem resultado registrado</h4>
                            <p>Sem saber se a visita aconteceu, o funil não sabe qual é o próximo passo.</p>
                        </Card>
                        <Card>
                            <div className="icon"><Hourglass size={24} /></div>
                            <span className="when">10 dias ou mais</span>
                            <h4>Lead parado na mesma etapa</h4>
                            <p>A Mia aprende quanto tempo é normal em cada etapa da sua escola e avisa só quando passa disso.</p>
                        </Card>
                        <Card>
                            <div className="icon"><ClipboardList size={24} /></div>
                            <span className="when">24 horas de atraso</span>
                            <h4>Tarefa de lead atrasada</h4>
                            <p>A tarefa venceu e o lead continua esperando. A Mia leva a pessoa até ela.</p>
                        </Card>
                        <Card>
                            <div className="icon"><RotateCcw size={24} /></div>
                            <span className="when">Você liga quando quiser</span>
                            <h4>Recuperação de perdidos</h4>
                            <p>
                                Você escolhe quais motivos de perda valem uma segunda tentativa, como preço ou horário, e a Mia
                                sugere reativar o lead depois de um tempo.
                            </p>
                        </Card>
                    </Grid>
                </Block>

                {/* BLOCO 6: PAINEL DO GESTOR */}
                <SplitLayout>
                    <TextContent>
                        <SectionLabel><BarChart3 size={14} /> Para o gestor</SectionLabel>
                        <h3>Veja como a equipe está <br />tratando cada lead</h3>
                        <p>
                            Um painel para a coordenação e a direção, com o que antes só aparecia no fim do mês, ou nunca aparecia.
                        </p>
                        <ul>
                            <li><Clock size={20} /> <span><strong>Tempo de primeira resposta:</strong> a mediana e quantos leads foram atendidos em até 1 hora, em até 24 horas ou nunca.</span></li>
                            <li><Users size={20} /> <span><strong>A equipe, pessoa a pessoa:</strong> leads na mão, tarefas atrasadas, visitas feitas e faltas.</span></li>
                            <li><Inbox size={20} /> <span><strong>Estoque abandonado:</strong> leads que ninguém da equipe chegou a tocar, por origem e etapa.</span></li>
                            <li><Gauge size={20} /> <span><strong>Funil:</strong> quanto tempo os leads ficam em cada etapa e quantos estão parados.</span></li>
                        </ul>
                    </TextContent>

                    <Mockup>
                        <MockupBody>
                            <KpiRow>
                                <div className="kpi"><strong>120</strong><span>leads ativos</span></div>
                                <div className="kpi alert"><strong>3</strong><span>sem responsável</span></div>
                                <div className="kpi alert"><strong>7</strong><span>tarefas atrasadas</span></div>
                            </KpiRow>
                            <Panel>
                                <h5>Tempo de primeira resposta</h5>
                                <div className="headline">
                                    <div><strong>18 min</strong><span>mediana</span></div>
                                    <div><strong>1h 40min</strong><span>9 em cada 10 em até</span></div>
                                </div>
                                <div className="bar"><span>Até 1 hora</span><div className="track"><div className="fill good" style={{ width: '62%' }} /></div><span>62%</span></div>
                                <div className="bar"><span>De 1h a 24h</span><div className="track"><div className="fill ok" style={{ width: '24%' }} /></div><span>24%</span></div>
                                <div className="bar"><span>Depois de 24h</span><div className="track"><div className="fill bad" style={{ width: '8%' }} /></div><span>8%</span></div>
                                <div className="bar"><span>Sem contato</span><div className="track"><div className="fill bad" style={{ width: '6%' }} /></div><span>6%</span></div>
                            </Panel>
                            <Panel>
                                <h5>Equipe</h5>
                                <table>
                                    <thead>
                                        <tr><th>Responsável</th><th>Leads</th><th>Atrasadas</th><th>1ª resposta</th></tr>
                                    </thead>
                                    <tbody>
                                        <tr><td>Ana Lima</td><td>60</td><td className="warn">5</td><td>12 min</td></tr>
                                        <tr><td>Bruno Reis</td><td>42</td><td>1</td><td>34 min</td></tr>
                                    </tbody>
                                </table>
                            </Panel>
                        </MockupBody>
                    </Mockup>
                </SplitLayout>

                {/* BLOCO 7: CONTROLE E SEGURANÇA */}
                <Block>
                    <SectionHead>
                        <SectionLabel style={{ margin: '0 auto 1rem' }}><ShieldCheck size={14} /> Controle</SectionLabel>
                        <h3>Feito para ajudar a equipe, não para pressioná-la</h3>
                        <p>Um agente que avisa demais vira ruído. Por isso ele nasce com limites, e a escola controla todos.</p>
                    </SectionHead>

                    <Grid>
                        <Card>
                            <div className="icon"><Hand size={24} /></div>
                            <h4>Você aprova cada ação</h4>
                            <p>A Mia não envia mensagem, não muda etapa e não marca lead como ganho ou perdido. Quem decide é a sua equipe.</p>
                        </Card>
                        <Card>
                            <div className="icon"><Gauge size={24} /></div>
                            <h4>Limites que protegem a equipe</h4>
                            <p>Até 15 sugestões novas por dia na escola e 10 pendentes por pessoa. O lead que escreveu e espera passa na frente.</p>
                        </Card>
                        <Card>
                            <div className="icon"><Ban size={24} /></div>
                            <h4>Não insiste</h4>
                            <p>Um assunto descartado não volta por 7 dias, e a recuperação de perdidos faz no máximo uma tentativa a cada 90 dias.</p>
                        </Card>
                        <Card>
                            <div className="icon"><ShieldCheck size={24} /></div>
                            <h4>Respeita quem pediu para sair</h4>
                            <p>Lead descadastrado, com opt-out ou bloqueado nunca entra nas sugestões de recuperação.</p>
                        </Card>
                        <Card>
                            <div className="icon"><GraduationCap size={24} /></div>
                            <h4>Aprende com o seu feedback</h4>
                            <p>Marque “já resolvi”, “não ajuda” ou descarte. Se um tipo de aviso é quase sempre descartado, a Mia reduz o volume dele.</p>
                        </Card>
                        <Card>
                            <div className="icon"><Lock size={24} /></div>
                            <h4>Dados isolados por escola</h4>
                            <p>O agente trabalha com os dados do funil, como horários, etapas e quantidades, e não lê o conteúdo das suas conversas.</p>
                        </Card>
                    </Grid>
                    <Note>
                        Você escolhe quais situações a Mia vigia, os prazos de cada uma, o horário de funcionamento, os limites diários
                        e quem pode ver o painel do gestor.
                    </Note>
                </Block>

                {/* BLOCO 8: AS DUAS FACES DA MIA */}
                <Block style={{ marginBottom: 0 }}>
                    <SectionHead>
                        <SectionLabel style={{ margin: '0 auto 1rem' }}><Sparkles size={14} /> A Mia completa</SectionLabel>
                        <h3>A copilota responde. O agente avisa.</h3>
                        <p>As duas trabalham juntas: o agente aponta quem precisa de atenção, e a copilota ajuda você a agir.</p>
                    </SectionHead>

                    <TwoFaces>
                        <div className="face">
                            <span className="tag">Copilot IA</span>
                            <h4>Você pergunta, ela responde</h4>
                            <p>A Mia que você chama quando precisa: resume conversas, analisa um lead, escreve mensagens e prepara o briefing.</p>
                            <ul>
                                <li><CheckCircle2 size={16} /> Funciona quando você pede</li>
                                <li><CheckCircle2 size={16} /> Lê a conversa que você abrir</li>
                            </ul>
                            <Link href="/funcionalidades/copilot-mia">Conhecer a Mia copilota <ArrowRight size={16} /></Link>
                        </div>
                        <div className="face agent">
                            <span className="tag">Agente Comercial</span>
                            <h4>Ela vigia, ela avisa</h4>
                            <p>A Mia que trabalha sem ser chamada: olha o funil o tempo todo e traz até você o que não pode esperar.</p>
                            <ul>
                                <li><CheckCircle2 size={16} /> Avisa sem ninguém pedir</li>
                                <li><CheckCircle2 size={16} /> Cada aviso vem com o motivo e o próximo passo</li>
                            </ul>
                            <span style={{ fontWeight: 600, color: '#C2410C' }}>Você está aqui</span>
                        </div>
                    </TwoFaces>
                </Block>
            </Container>
        </Section>
    )
}
