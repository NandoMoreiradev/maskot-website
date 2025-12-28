'use client'

import styled, {keyframes} from 'styled-components'
import {
    Check, UserPlus, Users, ShieldCheck,
    Send, LineChart, Filter,
    Clock, Thermometer, Lock, Mic, Zap, Tag, Paperclip, FileText, Image as ImageIcon
} from 'lucide-react'

// --- Animations ---
const float = keyframes`
    0% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-10px);
    }
    100% {
        transform: translateY(0px);
    }
`

const Section = styled.section`
    padding: 4rem 0;
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

    @media (max-width: 968px) {
        grid-template-columns: 1fr;
        gap: 3rem;
        margin-bottom: 6rem;
        display: flex;
        flex-direction: column-reverse;

        ${props => !props.$reverse && `
            flex-direction: column;
        `}
    }
`

const TextContent = styled.div`
    h3 {
        font-size: 2.25rem;
        font-weight: 800;
        margin-bottom: 1.5rem;
        line-height: 1.2;
        color: ${props => props.theme.colors.textDark};
    }

    p {
        font-size: 1.125rem;
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
        align-items: start;
        gap: 1rem;
        font-size: 1.05rem;
        font-weight: 500;
        color: ${props => props.theme.colors.textDark};

        svg {
            color: ${props => props.theme.colors.secondary};
            flex-shrink: 0;
            margin-top: 2px;
        }
    }
`

// --- UI MOCKUPS GENÉRICOS ---
const MockupCard = styled.div`
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 20px 60px -10px rgba(0, 0, 0, 0.15);
    border: 1px solid #e0e0e0;
    overflow: hidden;
    position: relative;
    animation: ${float} 8s ease-in-out infinite;
`

const MockupHeader = styled.div`
    height: 40px;
    background: #f8f9fa;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    gap: 0.5rem;

    .dots {
        display: flex;
        gap: 6px;

        div {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #ccc;
        }
    }
`

// --- MOCKUPS ESPECÍFICOS ---

// MOCKUP 1: INBOX & CHATBOT
const ChatLayout = styled.div`
    display: flex;
    height: 380px;
`
const SidebarMock = styled.div`
    width: 30%;
    border-right: 1px solid #eee;
    padding: 10px;

    .item {
        padding: 8px;
        margin-bottom: 5px;
        border-radius: 6px;
        display: flex;
        gap: 8px;
        align-items: center;
    }

    .item.active {
        background: #f0f2f5;
    }

    .avatar {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: #ddd;
    }

    .lines {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 4px;

        div {
            height: 6px;
            background: #eee;
            border-radius: 3px;
        }
    }
`
const ChatAreaMock = styled.div`
    flex: 1;
    background: #E5DDD5;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-image: radial-gradient(#00000008 1px, transparent 0);
    background-size: 10px 10px;
`
const Bubble = styled.div<{ $sent?: boolean; $bot?: boolean; $note?: boolean }>`
    padding: 10px 14px;
    border-radius: 8px;
    background: ${props => props.$sent ? '#D9FDD3' : '#FFF'};
    align-self: ${props => props.$sent ? 'flex-end' : 'flex-start'};
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    font-size: 13px;
    max-width: 80%;

    ${props => props.$bot && `border-left: 3px solid ${props.theme.colors.primary};`}

    ${props => props.$note && `
        background: #FFF9C4; 
        border: 1px dashed #FBC02D;
        align-self: center;
        width: 90%;
        max-width: 100%;
        color: #555;
        font-style: italic;
    `}
`

// MOCKUP 2: PROFILE PANE (NOVO DESIGN BASEADO NO SEU CÓDIGO)
const ProfileLayout = styled.div`
    display: flex;
    height: 420px;
`
const ChatSection = styled(ChatAreaMock)`
    width: 60%;
    border-right: 1px solid #eee;
`
const ProfileSidebar = styled.div`
    width: 40%;
    background: #fff;
    display: flex;
    flex-direction: column;

    .profile-header {
        padding: 20px;
        text-align: center;
        border-bottom: 1px solid #eee;
        background: #f8f9fa;

        .avatar-large {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: #6c5ce7;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            font-weight: bold;
            margin: 0 auto 10px;
            border: 2px solid white;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        h4 {
            margin: 0;
            font-size: 16px;
            color: #333;
        }

        p {
            margin: 0;
            font-size: 12px;
            color: #666;
        }
    }

    .tabs {
        display: flex;
        border-bottom: 1px solid #eee;

        div {
            flex: 1;
            text-align: center;
            padding: 10px;
            font-size: 12px;
            font-weight: bold;
            color: #666;
            cursor: pointer;
        }

        div.active {
            color: ${props => props.theme.colors.primary};
            border-bottom: 2px solid ${props => props.theme.colors.primary}
        }
    }

    .content {
        padding: 15px;
        flex: 1;
        overflow-y: auto;
    }

    .info-row {
        margin-bottom: 15px;

        label {
            display: block;
            font-size: 10px;
            color: #999;
            font-weight: bold;
            text-transform: uppercase;
            margin-bottom: 4px;
        }

        .val {
            font-size: 13px;
            color: #333;
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 6px;
        }
    }

    .tag {
        display: inline-block;
        padding: 2px 8px;
        border-radius: 10px;
        font-size: 10px;
        background: #e6fffa;
        color: #00a884;
        border: 1px solid #b2f5ea;
    }
`

// MOCKUP 3: CAMPAIGNS
const CampaignTable = styled.div`
    padding: 0;

    .row {
        display: flex;
        padding: 1rem;
        border-bottom: 1px solid #eee;
        align-items: center;

        &:last-child {
            border: none;
        }
    }

    .header-row {
        background: #f8f9fa;
        font-size: 0.75rem;
        font-weight: bold;
        color: #666;
        text-transform: uppercase;
    }

    .col-name {
        flex: 2;
        font-weight: 600;
        color: #333;
    }

    .col-status {
        flex: 1;
    }

    .col-stats {
        flex: 1;
        text-align: right;
        color: #666;
        font-size: 0.85rem;
    }

    .badge {
        display: inline-block;
        padding: 4px 10px;
        border-radius: 12px;
        font-size: 0.7rem;
        font-weight: bold;
    }

    .badge-sent {
        background: rgba(40, 167, 69, 0.12);
        color: #1e7e34;
    }

    .badge-sending {
        background: rgba(253, 126, 20, 0.12);
        color: #dc6509;
    }
`

// MOCKUP 4: ANALYTICS
const DashboardMock = styled.div`
    padding: 1.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    .card {
        background: #fff;
        border: 1px solid #eee;
        border-radius: 10px;
        padding: 1rem;
    }

    h4 {
        font-size: 0.8rem;
        color: #666;
        margin-bottom: 0.5rem;
        display: flex;
        align-items: center;
        gap: 6px;
    }

    .val {
        font-size: 1.5rem;
        font-weight: bold;
        color: #333;
    }

    .full-width {
        grid-column: 1 / -1;
    }

    .heatmap {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        gap: 2px;

        div {
            height: 20px;
            border-radius: 2px;
        }
    }
`

// --- POWER GRID SECTION ---
const PowerGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 4rem;

    @media (max-width: 968px) {
        grid-template-columns: 1fr;
    }
`

const PowerCard = styled.div`
    background: #f8f9fa;
    padding: 2rem;
    border-radius: 16px;
    border: 1px solid #eee;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        background: white;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        border-color: ${props => props.theme.colors.primary}40;
    }

    .icon {
        width: 48px;
        height: 48px;
        border-radius: 12px;
        background: white;
        display: flex;
        align-items: center;
        justifyContent: center;
        color: ${props => props.theme.colors.primary};
        margin-bottom: 1.5rem;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
    }

    h4 {
        font-size: 1.25rem;
        font-weight: 700;
        margin-bottom: 0.75rem;
        color: #333;
    }

    p {
        font-size: 1rem;
        color: #666;
        line-height: 1.5;
        margin: 0;
    }
`

export default function WhatsAppDeepDive() {
    return (
        <Section>
            <Container>

                {/* 1. INBOX & CHATBOT */}
                <FeatureRow>
                    <TextContent>
                        <h3>Chatbot que faz Triagem,<br/>Equipe que Converte</h3>
                        <p>
                            Não deixe pais esperando. Configure fluxos automáticos para responder
                            dúvidas frequentes (preços, endereço, horários) instantaneamente.
                        </p>
                        <ul>
                            <li><Users size={20}/> <strong>Múltiplos Atendentes:</strong> Um número, toda a secretaria
                                conectada.
                            </li>
                            <li><ShieldCheck size={20}/> <strong>Botão &quot;Assumir&quot;:</strong> Evite que dois
                                consultores respondam o mesmo pai.
                            </li>
                            <li><Clock size={20}/> <strong>Fila de Espera:</strong> Organize quem chegou primeiro.</li>
                        </ul>
                    </TextContent>

                    <MockupCard>
                        <MockupHeader>
                            <div className="dots">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </MockupHeader>
                        <ChatLayout>
                            <SidebarMock>
                                <div className="item active">
                                    <div className="avatar" style={{background: '#ffc107'}}></div>
                                    <div className="lines">
                                        <div style={{width: '60%'}}></div>
                                        <div style={{width: '40%'}}></div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="avatar"></div>
                                    <div className="lines">
                                        <div></div>
                                    </div>
                                </div>
                            </SidebarMock>
                            <ChatAreaMock>
                                <Bubble>Gostaria de saber valores para o Maternal.</Bubble>
                                <Bubble $sent $bot>🤖 Olá! Sou o assistente virtual. Para qual unidade seria?</Bubble>
                                <Bubble>Unidade Centro.</Bubble>
                                <Bubble $note>🔒 <strong>Nota Interna:</strong> @Financeiro verificar se há débitos
                                    anteriores deste telefone.</Bubble>
                                <Bubble $sent>Olá! Me chamo Maria. Vou te passar a tabela...</Bubble>
                            </ChatAreaMock>
                        </ChatLayout>
                    </MockupCard>
                </FeatureRow>

                {/* 2. CRM CONTEXT (SIDEBAR) */}
                <FeatureRow $reverse>
                    <MockupCard>
                        <MockupHeader>
                            <div className="dots">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </MockupHeader>
                        <ProfileLayout>
                            <ChatSection>
                                <Bubble>Já enviei a documentação.</Bubble>
                                <Bubble $sent>Perfeito! Já recebi e salvei no sistema.</Bubble>
                            </ChatSection>
                            <ProfileSidebar>
                                <div className="profile-header">
                                    <div className="avatar-large">MP</div>
                                    <h4>Mãe do Pedro</h4>
                                    <p>+55 11 99999-9999</p>
                                </div>
                                <div className="tabs">
                                    <div className="active">Info</div>
                                    <div>Notas</div>
                                    <div>Anexos</div>
                                </div>
                                <div className="content">
                                    <div className="info-row">
                                        <label>Funil de Vendas</label>
                                        <div className="val"><span style={{
                                            width: '8px',
                                            height: '8px',
                                            borderRadius: '50%',
                                            background: '#f1c40f'
                                        }}></span> Em Negociação
                                        </div>
                                    </div>
                                    <div className="info-row">
                                        <label>Aluno de Interesse</label>
                                        <div className="val">Pedro Henrique (1º Ano)</div>
                                    </div>
                                    <div className="info-row">
                                        <label>Tags</label>
                                        <div style={{display: 'flex', gap: '4px'}}>
                                            <span className="tag">Matrícula 2026</span>
                                            <span className="tag">Quente</span>
                                        </div>
                                    </div>
                                    <div style={{
                                        marginTop: '20px',
                                        padding: '10px',
                                        background: '#007BFF',
                                        color: 'white',
                                        textAlign: 'center',
                                        borderRadius: '6px',
                                        fontSize: '12px',
                                        fontWeight: 'bold'
                                    }}>
                                        Agendar Visita
                                    </div>
                                </div>
                            </ProfileSidebar>
                        </ProfileLayout>
                    </MockupCard>

                    <TextContent>
                        <h3>Visão 360º do Aluno<br/>Sem Sair do Chat</h3>
                        <p>
                            Chega de alternar abas. Enquanto conversa, você tem o perfil completo do pai ao lado:
                            status no funil, histórico de notas, boletos pendentes e documentos enviados.
                        </p>
                        <ul>
                            <li><Filter size={20}/> <strong>Contexto Imediato:</strong> Saiba na hora quem é e o que ele
                                quer.
                            </li>
                            <li><Paperclip size={20}/> <strong>Gestão de Anexos:</strong> Encontre documentos e
                                comprovantes na aba dedicada.
                            </li>
                            <li><Send size={20}/> <strong>Agilidade:</strong> Converta leads ou agende visitas com 1
                                clique.
                            </li>
                        </ul>
                    </TextContent>
                </FeatureRow>

                {/* 3. CAMPAIGNS */}
                <FeatureRow>
                    <TextContent>
                        <h3>Campanhas em Massa<br/>Sem Bloqueios</h3>
                        <p>
                            Crie campanhas segmentadas por Tags (ex: &quot;Interessados 2025&quot;) e dispare
                            avisos de matrícula ou convites para eventos com segurança.
                        </p>
                        <ul>
                            <li><Filter size={20}/> <strong>Segmentação Precisa:</strong> Envie apenas para quem
                                importa.
                            </li>
                            <li><Clock size={20}/> <strong>Agendamento:</strong> Programe os disparos.</li>
                            <li><Check size={20}/> <strong>Status em Tempo Real:</strong> Veja taxa de entrega e
                                leitura.
                            </li>
                        </ul>
                    </TextContent>

                    <MockupCard>
                        <MockupHeader>
                            <div className="dots">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </MockupHeader>
                        <CampaignTable>
                            <div className="row header-row">
                                <div className="col-name">Campanha</div>
                                <div className="col-status">Status</div>
                                <div className="col-stats">Envios</div>
                            </div>
                            <div className="row">
                                <div className="col-name">Rematrícula 2026</div>
                                <div className="col-status"><span className="badge badge-sent">ENVIADA</span></div>
                                <div className="col-stats">450/450</div>
                            </div>
                            <div className="row">
                                <div className="col-name">Festa Junina</div>
                                <div className="col-status"><span className="badge badge-sending">ENVIANDO</span></div>
                                <div className="col-stats">120/800</div>
                            </div>
                        </CampaignTable>
                    </MockupCard>
                </FeatureRow>

                {/* 4. ANALYTICS */}
                <FeatureRow $reverse>
                    <MockupCard>
                        <MockupHeader>
                            <div className="dots">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </MockupHeader>
                        <DashboardMock>
                            <div className="card"><h4><LineChart size={16}/> Total</h4>
                                <div className="val">1,284</div>
                            </div>
                            <div className="card"><h4><Clock size={16}/> T. Médio</h4>
                                <div className="val">4min</div>
                            </div>
                            <div className="card full-width">
                                <h4><Thermometer size={16}/> Mapa de Calor</h4>
                                <div className="heatmap">{Array.from({length: 48}).map((_, i) => <div key={i}
                                                                                                      style={{background: `rgba(37, 99, 235, ${Math.random()})`}}></div>)}</div>
                            </div>
                        </DashboardMock>
                    </MockupCard>
                    <TextContent>
                        <h3>Gestão Baseada em Dados</h3>
                        <p>
                            O Analytics do Maskot te dá a visão de raio-X sobre o atendimento da sua equipe.
                        </p>
                        <ul>
                            <li><Thermometer size={20}/> <strong>Mapa de Calor:</strong> Descubra horários de pico.</li>
                            <li><Clock size={20}/> <strong>SLA de Resposta:</strong> Monitore a agilidade.</li>
                            <li><LineChart size={20}/> <strong>Conversão:</strong> &quot;Ois&quot; que viraram
                                matrículas.
                            </li>
                        </ul>
                    </TextContent>
                </FeatureRow>

                {/* 5. POWER FEATURES GRID */}
                <div style={{textAlign: 'center', marginBottom: '3rem'}}>
                    <h3 style={{fontSize: '2rem', fontWeight: 800, color: '#333'}}>Ferramentas de Produtividade</h3>
                    <p style={{color: '#666'}}>Funcionalidades pensadas para a rotina escolar.</p>
                </div>

                <PowerGrid>
                    <PowerCard>
                        <div className="icon"><Lock size={24}/></div>
                        <h4>Notas Internas</h4>
                        <p>Converse com sua equipe dentro do chat do pai (&quot;@Financeiro, verificar boleto&quot;) sem
                            que o cliente veja. Colaboração total.</p>
                    </PowerCard>

                    <PowerCard>
                        <div className="icon"><Mic size={24}/></div>
                        <h4>Áudio Acelerado</h4>
                        <p>Otimize o tempo dos seus consultores ouvindo áudios longos de pais em velocidade 1.5x ou
                            2x.</p>
                    </PowerCard>

                    <PowerCard>
                        <div className="icon"><Zap size={24}/></div>
                        <h4>Respostas Rápidas</h4>
                        <p>Crie atalhos (ex: /materiais) para enviar listas, documentos e textos padrões com apenas um
                            clique.</p>
                    </PowerCard>

                    <PowerCard>
                        <div className="icon"><Tag size={24}/></div>
                        <h4>Etiquetas Visuais</h4>
                        <p>Classifique conversas com tags coloridas (&quot;Financeiro&quot;, &quot;Pedagógico&quot;)
                            para filtrar sua inbox em segundos.</p>
                    </PowerCard>

                    <PowerCard>
                        <div className="icon"><Paperclip size={24}/></div>
                        <h4>Central de Anexos</h4>
                        <p>Acesse uma galeria organizada com todos os documentos, fotos e comprovantes trocados na
                            conversa.</p>
                    </PowerCard>

                    <PowerCard>
                        <div className="icon"><Users size={24}/></div>
                        <h4>Transferência Inteligente</h4>
                        <p>Transfira atendimentos entre departamentos (ex: Secretaria para Financeiro) levando todo o
                            histórico junto.</p>
                    </PowerCard>
                </PowerGrid>

            </Container>
        </Section>
    )
}