'use client'

import styled from 'styled-components'
import {
    Megaphone, Briefcase, Building2, Repeat, Handshake, ShieldCheck, GraduationCap,
    Send, ClipboardCheck, Wallet, LayoutDashboard, FileText, Clock,
    Eye, ScrollText, Scale, Layers, Receipt, CalendarClock, Sparkles, KeyRound, TrendingUp,
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

const Note = styled.p`
    text-align: center;
    max-width: 700px;
    margin: 2.5rem auto 0;
    font-size: 0.9rem;
    color: #64748B;
    line-height: 1.6;
`

// ---------------------------------------------------------------- mockups

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
    background: #FFF7ED;
    border-bottom: 1px solid #FED7AA;
    color: #9A3412;
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

const Pill = styled.span<{ $tone: 'blue' | 'green' | 'gray' | 'orange' }>`
    display: inline-block;
    white-space: nowrap;
    font-size: 0.7rem;
    font-weight: 700;
    border-radius: 999px;
    padding: 3px 9px;
    background: ${props => ({ blue: '#E6F2FF', green: '#E6F6ED', gray: '#F1F5F9', orange: '#FBF0DE' })[props.$tone]};
    color: ${props => ({ blue: '#1D4ED8', green: '#16A34A', gray: '#475569', orange: '#EA580C' })[props.$tone]};
`

const Row = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 10px;
    padding: 0.75rem 0.875rem;

    .text { flex: 1; min-width: 0; }
    .title { font-size: 0.9rem; font-weight: 600; color: #0F172A; }
    .meta { font-size: 0.78rem; color: #64748B; margin-top: 2px; }
`

const TableWrap = styled.div`
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 10px;
    overflow-x: auto;

    table { width: 100%; min-width: 440px; border-collapse: collapse; font-size: 0.75rem; }
    th, td { padding: 8px 10px; text-align: left; border-bottom: 1px solid #F1F5F9; color: #0F172A; white-space: nowrap; }
    th { font-size: 0.66rem; text-transform: uppercase; letter-spacing: 0.03em; color: #64748B; font-weight: 600; background: #F8FAFC; }
    td.num, th.num { text-align: right; }
    tr:last-child td { border-bottom: none; }
`

const PayoutLine = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex-wrap: wrap;
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 10px;
    padding: 0.75rem 0.875rem;
    font-size: 0.8rem;
    color: #334155;

    strong { color: #0F172A; }
    .grow { flex: 1; min-width: 120px; }

    .btn {
        font-size: 0.74rem;
        font-weight: 600;
        padding: 5px 10px;
        border-radius: 8px;
        border: 1px solid #E2E8F0;
        background: #FFFFFF;
        color: #475569;
    }
`

const Fine = styled.p`
    margin: 0.75rem 0 0;
    font-size: 0.78rem;
    color: #94A3B8;
    text-align: center;
`

export default function PartnersDeepDive() {
    return (
        <Section>
            <Container>
                {/* BLOCO 1: PARA QUEM É */}
                <Block id="para-quem">
                    <SectionHead>
                        <SectionLabel style={{ margin: '0 auto 1rem' }}><Handshake size={14} /> Para quem é</SectionLabel>
                        <h3>Feito para quem já tem a confiança da escola</h3>
                        <p>
                            O programa é para empresas que atendem escolas particulares e querem recomendar uma solução de captação e
                            matrícula, sendo reconhecidas por isso.
                        </p>
                    </SectionHead>

                    <Grid>
                        <Card>
                            <div className="icon"><Megaphone size={24} /></div>
                            <h4>Agências de marketing educacional</h4>
                            <p>
                                Você cuida da captação e sabe onde as matrículas esfriam. O Maskot é onde o lead vira matrícula, e
                                recomendá-lo vira mais uma fonte de receita para a sua agência.
                            </p>
                        </Card>
                        <Card>
                            <div className="icon"><Briefcase size={24} /></div>
                            <h4>Consultorias e assessorias de gestão</h4>
                            <p>
                                Você ajuda a escola a organizar o comercial e a secretaria. Indicar o Maskot dá a ela o sistema para
                                sustentar o processo que você desenhou.
                            </p>
                        </Card>
                        <Card>
                            <div className="icon"><Building2 size={24} /></div>
                            <h4>Empresas do setor educacional</h4>
                            <p>
                                Sistemas de ensino, editoras, tecnologia e fornecedores que falam com a direção da escola e querem
                                indicar uma solução de captação e matrícula.
                            </p>
                        </Card>
                    </Grid>
                </Block>

                {/* BLOCO 2: POR QUE SER PARCEIRO */}
                <Block>
                    <SectionHead>
                        <SectionLabel style={{ margin: '0 auto 1rem' }}><Sparkles size={14} /> Por que ser parceiro</SectionLabel>
                        <h3>Uma indicação, uma relação que continua rendendo</h3>
                        <p>Você traz a escola. A gente cuida do resto e deixa tudo à vista.</p>
                    </SectionHead>

                    <Grid $cols={4}>
                        <Card>
                            <div className="icon"><Repeat size={24} /></div>
                            <h4>Receita recorrente</h4>
                            <p>
                                Você é comissionado no primeiro pagamento da escola e nas mensalidades seguintes, pelo período
                                combinado no acordo.
                            </p>
                        </Card>
                        <Card>
                            <div className="icon"><Handshake size={24} /></div>
                            <h4>Você indica, a Maskot conduz</h4>
                            <p>
                                A apresentação, a contratação e a implantação ficam com a nossa equipe. Você não precisa dar suporte
                                nem operar o sistema.
                            </p>
                        </Card>
                        <Card>
                            <div className="icon"><ShieldCheck size={24} /></div>
                            <h4>Escola reservada para você</h4>
                            <p>
                                Depois que a indicação é validada, a escola fica reservada por um prazo. Se virar cliente nesse
                                período, a comissão é sua.
                            </p>
                        </Card>
                        <Card>
                            <div className="icon"><GraduationCap size={24} /></div>
                            <h4>Um produto que a escola usa todo dia</h4>
                            <p>
                                CRM, WhatsApp oficial, campanhas e a Mia, a IA do Maskot, no mesmo lugar. É uma recomendação que a
                                escola sente na rotina, e isso protege a sua relação com ela.
                            </p>
                        </Card>
                    </Grid>
                </Block>

                {/* BLOCO 3: COMO FUNCIONA */}
                <Block id="como-funciona">
                    <SectionHead>
                        <SectionLabel style={{ margin: '0 auto 1rem' }}><ClipboardCheck size={14} /> Como funciona</SectionLabel>
                        <h3>Da primeira conversa ao primeiro repasse</h3>
                        <p>Quatro passos, todos acompanhados por você no portal.</p>
                    </SectionHead>

                    <Grid $cols={4}>
                        <Step>
                            <div className="number">1</div>
                            <h4>Você se cadastra</h4>
                            <p>
                                Fale com a nossa equipe, conheça as condições e formalize o acordo de parceria. Depois do cadastro,
                                você recebe por e-mail o convite para o portal.
                            </p>
                        </Step>
                        <Step>
                            <div className="number">2</div>
                            <h4>Você indica</h4>
                            <p>
                                No portal, informe a escola e um contato. Escola que já é cliente da Maskot não pode ser
                                indicada, e você é avisado.
                            </p>
                        </Step>
                        <Step>
                            <div className="number">3</div>
                            <h4>A Maskot valida e reserva</h4>
                            <p>
                                Nossa equipe analisa a indicação e, ao validar, reserva a escola para você. Você recebe o aviso por
                                e-mail e acompanha pelo portal.
                            </p>
                        </Step>
                        <Step>
                            <div className="number">4</div>
                            <h4>A escola contrata, você recebe</h4>
                            <p>
                                Quando a escola vira cliente e paga, a comissão aparece no portal. Todo mês o repasse é fechado, com
                                extrato.
                            </p>
                        </Step>
                    </Grid>
                </Block>

                {/* BLOCO 4: O PORTAL */}
                <SplitLayout>
                    <TextContent>
                        <SectionLabel><LayoutDashboard size={14} /> Portal do parceiro</SectionLabel>
                        <h3>Tudo o que você precisa, <br />sem pedir por mensagem</h3>
                        <p>
                            Um espaço só seu para acompanhar o que importa: quanto você tem a receber, em que etapa está cada
                            indicação e como cada comissão foi calculada.
                        </p>
                        <ul>
                            <li><TrendingUp size={20} /> <span><strong>Painel:</strong> o que tem a receber, o que já recebeu, quantas escolas são clientes e quantas indicações estão em andamento.</span></li>
                            <li><Send size={20} /> <span><strong>Indicações:</strong> a situação de cada uma e um e-mail a cada mudança.</span></li>
                            <li><Wallet size={20} /> <span><strong>Comissões:</strong> cada lançamento com escola, tipo, mês de cliente, base e valor.</span></li>
                            <li><FileText size={20} /> <span><strong>Repasses:</strong> extrato para baixar e o registro da sua nota fiscal.</span></li>
                        </ul>
                    </TextContent>

                    <div>
                        <Mockup>
                            <MockupHeader>
                                <Handshake size={16} /> Portal do parceiro
                                <span className="right">Agência Exemplo</span>
                            </MockupHeader>
                            <MockupBody>
                                <KpiRow>
                                    <div className="kpi"><strong>R$ 792,50</strong><span>a receber</span></div>
                                    <div className="kpi"><strong>R$ 2.150,75</strong><span>já recebido</span></div>
                                    <div className="kpi"><strong>5</strong><span>escolas clientes</span></div>
                                </KpiRow>
                                <Row>
                                    <div className="text">
                                        <div className="title">Colégio Estrela do Sul</div>
                                        <div className="meta">Enviada em 16/10</div>
                                    </div>
                                    <Pill $tone="blue">Em análise</Pill>
                                </Row>
                                <Row>
                                    <div className="text">
                                        <div className="title">Escola Recanto Verde</div>
                                        <div className="meta">Reservada para você até 05/01</div>
                                    </div>
                                    <Pill $tone="green">Validada</Pill>
                                </Row>
                                <Row>
                                    <div className="text">
                                        <div className="title">Colégio Aurora</div>
                                        <div className="meta">Cliente desde junho</div>
                                    </div>
                                    <Pill $tone="green">Virou cliente</Pill>
                                </Row>
                            </MockupBody>
                        </Mockup>
                        <Fine>Telas ilustrativas, com nomes e valores fictícios.</Fine>
                    </div>
                </SplitLayout>

                {/* BLOCO 5: A RESERVA */}
                <SplitLayout $reverse>
                    <div>
                        <Mockup>
                            <MockupHeader>
                                <ShieldCheck size={16} /> Escola Recanto Verde
                                <span className="right">Validada</span>
                            </MockupHeader>
                            <MockupBody>
                                <Row>
                                    <div className="text">
                                        <div className="title">Indicação enviada</div>
                                        <div className="meta">05/10 · por Agência Exemplo</div>
                                    </div>
                                    <Pill $tone="gray">Concluído</Pill>
                                </Row>
                                <Row>
                                    <div className="text">
                                        <div className="title">Validada pela equipe Maskot</div>
                                        <div className="meta">07/10 · você recebeu o aviso por e-mail</div>
                                    </div>
                                    <Pill $tone="gray">Concluído</Pill>
                                </Row>
                                <Row>
                                    <div className="text">
                                        <div className="title">Escola reservada para você</div>
                                        <div className="meta">Até 05/01 · se contratar, a comissão é sua</div>
                                    </div>
                                    <Pill $tone="green">Em vigor</Pill>
                                </Row>
                            </MockupBody>
                        </Mockup>
                        <Fine>Tela ilustrativa, com nomes e datas fictícios.</Fine>
                    </div>

                    <TextContent>
                        <SectionLabel><Clock size={14} /> Reserva da escola</SectionLabel>
                        <h3>Indicou, validou, <br />a escola é sua</h3>
                        <p>
                            A reserva evita disputa e dá previsibilidade: enquanto ela estiver em vigor, a escola não pertence a
                            outro parceiro.
                        </p>
                        <ul>
                            <li><ClipboardCheck size={20} /> <span><strong>Validação pela equipe:</strong> cada indicação é analisada antes de a escola ser reservada.</span></li>
                            <li><Scale size={20} /> <span><strong>O primeiro a ser validado vale:</strong> se duas empresas indicam a mesma escola, vale a primeira indicação validada.</span></li>
                            <li><Eye size={20} /> <span><strong>Clientes e negociações em andamento:</strong> escola que já é cliente não pode ser indicada, e a que já conversa com a Maskot passa por análise da equipe.</span></li>
                            <li><CalendarClock size={20} /> <span><strong>Prazo claro:</strong> a reserva tem validade. Sem a contratação, a escola volta a ficar livre.</span></li>
                        </ul>
                    </TextContent>
                </SplitLayout>

                {/* BLOCO 6: COMISSÕES E REPASSES */}
                <SplitLayout>
                    <TextContent>
                        <SectionLabel><Receipt size={14} /> Comissões e repasses</SectionLabel>
                        <h3>Você sabe quanto, <br />de onde e quando</h3>
                        <p>
                            A comissão nasce do pagamento da escola e segue um caminho que você enxerga do começo ao fim, até
                            chegar à sua conta.
                        </p>
                        <ul>
                            <li><Repeat size={20} /> <span><strong>Primeiro pagamento e mensalidades:</strong> comissão sobre o primeiro pagamento e sobre as mensalidades seguintes, pelo período do acordo.</span></li>
                            <li><Layers size={20} /> <span><strong>Faixas por volume:</strong> o acordo pode prever condições melhores conforme o número de escolas que você traz.</span></li>
                            <li><ScrollText size={20} /> <span><strong>Fechamento mensal:</strong> os lançamentos do mês são reunidos em um repasse, com extrato detalhado.</span></li>
                            <li><Wallet size={20} /> <span><strong>Pagamento por Pix:</strong> você registra a sua nota fiscal no portal e acompanha o repasse até o pagamento.</span></li>
                        </ul>
                    </TextContent>

                    <div>
                        <Mockup>
                            <MockupHeader>
                                <Wallet size={16} /> Comissões
                                <span className="right">Agência Exemplo</span>
                            </MockupHeader>
                            <MockupBody>
                                <TableWrap>
                                    <table>
                                        <thead>
                                            <tr><th>Mês</th><th>Escola</th><th>Tipo</th><th className="num">Comissão</th><th>Situação</th></tr>
                                        </thead>
                                        <tbody>
                                            <tr><td>10/2026</td><td>Colégio Horizonte</td><td>Recorrente</td><td className="num">R$ 120,00</td><td><Pill $tone="orange">Em apuração</Pill></td></tr>
                                            <tr><td>09/2026</td><td>Escola Recanto Verde</td><td>1º pagamento</td><td className="num">R$ 380,00</td><td><Pill $tone="blue">Aprovado</Pill></td></tr>
                                            <tr><td>09/2026</td><td>Colégio Horizonte</td><td>Recorrente</td><td className="num">R$ 120,00</td><td><Pill $tone="green">Pago</Pill></td></tr>
                                        </tbody>
                                    </table>
                                </TableWrap>
                                <PayoutLine>
                                    <span className="grow"><strong>Repasse 09/2026</strong> · R$ 380,00</span>
                                    <Pill $tone="orange">Aguardando pagamento</Pill>
                                    <span className="btn">Informar NF</span>
                                    <span className="btn">Extrato CSV</span>
                                </PayoutLine>
                            </MockupBody>
                        </Mockup>
                        <Fine>Telas ilustrativas, com nomes e valores fictícios.</Fine>
                    </div>
                </SplitLayout>

                {/* BLOCO 7: COMBINADOS CLAROS */}
                <Block style={{ marginBottom: 0 }}>
                    <SectionHead>
                        <SectionLabel style={{ margin: '0 auto 1rem' }}><ScrollText size={14} /> Combinados claros</SectionLabel>
                        <h3>O que você precisa saber antes de começar</h3>
                        <p>Transparência desde o início: é assim que a parceria funciona na prática.</p>
                    </SectionHead>

                    <Grid>
                        <Card>
                            <div className="icon"><Wallet size={24} /></div>
                            <h4>A comissão acompanha o pagamento da escola</h4>
                            <p>Ela só é gerada quando a Maskot recebe o pagamento. Se a escola atrasa, a comissão espera; se houver estorno, ela é ajustada.</p>
                        </Card>
                        <Card>
                            <div className="icon"><Receipt size={24} /></div>
                            <h4>Sobre o que incide</h4>
                            <p>Sobre as mensalidades do plano e dos módulos, já com os descontos aplicados. Implantação e itens avulsos ficam de fora.</p>
                        </Card>
                        <Card>
                            <div className="icon"><CalendarClock size={24} /></div>
                            <h4>Por quanto tempo</h4>
                            <p>Durante o período definido no seu acordo. Depois dele, a escola segue cliente da Maskot, sem novas comissões.</p>
                        </Card>
                        <Card>
                            <div className="icon"><ScrollText size={24} /></div>
                            <h4>Condições por escrito</h4>
                            <p>Percentuais, prazo e faixas ficam registrados no acordo de parceria. Uma mudança futura vale só para as próximas escolas indicadas.</p>
                        </Card>
                        <Card>
                            <div className="icon"><Eye size={24} /></div>
                            <h4>Você vê só o que é seu</h4>
                            <p>O portal mostra apenas as suas indicações e comissões. Dados internos das escolas, como leads, alunos e conversas, não aparecem.</p>
                        </Card>
                        <Card>
                            <div className="icon"><KeyRound size={24} /></div>
                            <h4>Acesso protegido</h4>
                            <p>Login próprio, sessão protegida e convite por e-mail. Cada parceiro tem o seu acesso ao portal.</p>
                        </Card>
                    </Grid>
                    <Note>
                        Percentuais, prazo da comissão e faixas por volume são conversados caso a caso e registrados no acordo de
                        parceria. Fale com a nossa equipe para conhecer as condições.
                    </Note>
                </Block>
            </Container>
        </Section>
    )
}
