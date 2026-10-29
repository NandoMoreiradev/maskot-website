'use client'

import styled, { keyframes, css } from 'styled-components'
import {
    Send, Users, Mail, MessageCircle,
    Filter, BarChart, MousePointerClick, CalendarCheck,
    Megaphone, Target, Shuffle, MessageSquareText
} from 'lucide-react'

// --- Animations ---
const float = keyframes`
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
`

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
        font-weight: 800;
        margin-bottom: 1.5rem;
        line-height: 1.2;
        color: #0F172A;
        letter-spacing: -0.02em;
    }
    p {
        font-family: ${props => props.theme.typography.fontFamily.main};
        font-size: ${props => props.theme.typography.fontSize.lg};
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
        font-size: ${props => props.theme.typography.fontSize.base};
        font-weight: 500;
        color: #334155;
        svg {
            color: #EA580C;
            flex-shrink: 0;
            margin-top: 2px;
        }
    }
`

const MockupCard = styled.div`
    background: #FFFFFF;
    border-radius: 16px;
    box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.05);
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

// --- MOCKUP 1: AUDIENCE BUILDER ---
const FilterMock = styled.div`
    padding: 25px;
    background: #FFFFFF;

    .header-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
        font-size: 13px;
        font-weight: 700;
        color: #0F172A;
    }

    .logic-group {
        border: 1px dashed #CBD5E1;
        padding: 16px;
        border-radius: 10px;
        position: relative;
        margin-bottom: 15px;
        background: #F8FAFC;

        &:before {
            content: 'CONDIÇÕES (AND)';
            position: absolute;
            top: -10px;
            left: 12px;
            background: #FFFFFF;
            padding: 0 8px;
            font-size: 10px;
            font-weight: 700;
            color: #64748B;
            border: 1px solid #E2E8F0;
            border-radius: 4px;
        }
    }

    .condition-row {
        display: flex;
        gap: 8px;
        margin-bottom: 10px;
        &:last-child { margin-bottom: 0; }

        select, input {
            padding: 8px 10px;
            border: 1px solid #E2E8F0;
            border-radius: 6px;
            font-size: 12px;
            background: #FFFFFF;
            color: #334155;
            font-weight: 500;
            outline: none;
        }
        .field { width: 40%; }
        .op { width: 25%; }
        .val { width: 35%; }
    }

    .add-btn {
        width: 100%;
        border: 1px dashed #CBD5E1;
        color: #64748B;
        padding: 10px;
        border-radius: 8px;
        font-size: 12px;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        cursor: pointer;
        background: #FFFFFF;
        transition: all 0.2s ease;

        &:hover {
            border-color: #EA580C;
            color: #EA580C;
        }
    }

    .result-banner {
        margin-top: 18px;
        background: #FFF7ED;
        border: 1px solid #FFEDD5;
        border-radius: 8px;
        padding: 10px 14px;
        font-size: 12px;
        color: #C2410C;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 600;
    }
`

// --- MOCKUP 2: CAMPAIGN CREATION ---
const CampaignMock = styled.div`
    padding: 25px;
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
    gap: 16px;

    .channel-select {
        display: flex;
        gap: 12px;
        .option {
            flex: 1;
            background: #F8FAFC;
            padding: 14px;
            border: 1px solid #E2E8F0;
            border-radius: 12px;
            text-align: center;
            cursor: pointer;
            transition: all 0.2s;
            color: #64748B;
            &.active {
                border-color: #FDBA74;
                background: #FFF7ED;
                color: #EA580C;
            }
            svg { display: block; margin: 0 auto 6px; }
            span { font-size: 12px; font-weight: 700; }
        }
    }

    .input-group {
        label { display: block; font-size: 11px; font-weight: 700; color: #475569; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.04em; }
        .fake-input {
            background: #F8FAFC;
            border: 1px solid #E2E8F0;
            padding: 10px 12px;
            border-radius: 8px;
            font-size: 13px;
            color: #0F172A;
            font-weight: 500;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }

    .preview-box {
        background: #F8FAFC;
        border-radius: 10px;
        padding: 14px;
        position: relative;
        font-size: 13px;
        color: #0F172A;
        border: 1px solid #E2E8F0;
        line-height: 1.5;

        .tag-channel {
            font-size: 10px;
            font-weight: 700;
            color: #166534;
            background: #DCFCE7;
            padding: 2px 6px;
            border-radius: 4px;
            margin-bottom: 8px;
            display: inline-block;
        }
    }
`

// --- MOCKUP 3: STATS DASHBOARD ---
const StatsMock = styled.div`
    padding: 20px;
    background: #FFFFFF;

    .cards { display: flex; gap: 12px; margin-bottom: 16px; }
    .card {
        flex: 1;
        padding: 14px;
        border-radius: 10px;
        background: #F8FAFC;
        border: 1px solid #E2E8F0;
        h4 {
            margin: 0 0 4px 0;
            font-size: 11px;
            color: #64748B;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.04em;
        }
        .val { font-size: 22px; font-weight: 800; color: #0F172A; }
        .trend {
            font-size: 11px;
            margin-top: 4px;
            font-weight: 600;
            color: #16A34A;
        }
    }

    .list {
        border-top: 1px solid #F1F5F9;
        padding-top: 8px;
        .item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 0;
            border-bottom: 1px solid #F1F5F9;
            &:last-child { border: none; }
        }
        .info h5 { margin: 0; font-size: 13px; color: #0F172A; font-weight: 600; }
        .info span { font-size: 11px; color: #64748B; display: flex; align-items: center; gap: 4px; margin-top: 2px; }
        .status {
            font-size: 10px;
            padding: 3px 8px;
            border-radius: 100px;
            font-weight: 700;
            &.sent { background: #DCFCE7; color: #166534; border: 1px solid #BBF7D0; }
            &.draft { background: #F1F5F9; color: #475569; border: 1px solid #E2E8F0; }
        }
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
    background: #FFFFFF;
    padding: 2rem;
    border-radius: 16px;
    border: 1px solid #E2E8F0;
    transition: all 0.3s ease;
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
        border-color: #EA580C;
        .icon { background: #EA580C; color: #FFFFFF; border-color: #EA580C; }
    }
    .icon {
        width: 48px; height: 48px; border-radius: 12px;
        background: #F8FAFC; display: flex; align-items: center; justify-content: center;
        color: #EA580C; margin-bottom: 1.5rem;
        border: 1px solid #E2E8F0;
        transition: all 0.3s ease;
    }
    h4 { font-size: 1.25rem; font-weight: 700; margin-bottom: 0.75rem; color: #0F172A; letter-spacing: -0.02em; }
    p { font-size: 1rem; color: #475569; line-height: 1.5; margin: 0; }
`

export default function MarketingDeepDive() {
    return (
        <Section id="recursos">
            <Container>

                {/* 1. AUDIÊNCIA & SEGMENTAÇÃO */}
                <FeatureRow>
                    <TextContent>
                        <h3>Segmentação Cirúrgica:<br/>Fale com Quem Importa</h3>
                        <p>
                            Não desperdice dinheiro enviando mensagens para a lista inteira. O Construtor de Audiência do Maskot permite filtrar leads com base em comportamento real no CRM.
                        </p>
                        <ul>
                            <li><Filter size={20}/> <strong>Filtros Lógicos:</strong> Combine condições (Ex: &quot;Visitou a Escola&quot; E &quot;Não Matriculou&quot;).</li>
                            <li><Users size={20}/> <strong>Listas Dinâmicas:</strong> O público se atualiza sozinho. Se um aluno visita hoje, ele entra na lista automaticamente.</li>
                            <li><Target size={20}/> <strong>Tags & Status:</strong> Use as etiquetas do funil de matrículas para criar seus grupos.</li>
                        </ul>
                    </TextContent>
                    <MockupCard>
                        <MockupHeader><div className="dots"><div></div><div></div><div></div></div></MockupHeader>
                        <FilterMock>
                            <div className="header-info">
                                <span>Filtro de Destinatários</span>
                                <span style={{ color: '#EA580C' }}>Regra Ativa</span>
                            </div>
                            <div className="logic-group">
                                <div className="condition-row">
                                    <select className="field"><option>Status do Lead</option></select>
                                    <select className="op"><option>Igual a</option></select>
                                    <select className="val"><option>Visitou</option></select>
                                </div>
                                <div className="condition-row">
                                    <select className="field"><option>Etapa do Funil</option></select>
                                    <select className="op"><option>Diferente de</option></select>
                                    <select className="val"><option>Matriculado</option></select>
                                </div>
                            </div>
                            <div className="add-btn">
                                + Adicionar Condição Alternativa (OU)
                            </div>

                            <div className="result-banner">
                                <span><Users size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }}/> 142 responsáveis qualificados</span>
                                <span>100% no Perfil</span>
                            </div>
                        </FilterMock>
                    </MockupCard>
                </FeatureRow>

                {/* 2. CAMPANHAS MULTICANAL */}
                <FeatureRow $reverse>
                    <MockupCard>
                        <MockupHeader><div className="dots"><div></div><div></div><div></div></div></MockupHeader>
                        <CampaignMock>
                            <div className="channel-select">
                                <div className="option active">
                                    <MessageCircle size={22}/>
                                    <span>WhatsApp Oficial</span>
                                </div>
                                <div className="option">
                                    <Mail size={22}/>
                                    <span>E-mail Marketing</span>
                                </div>
                            </div>

                            <div className="input-group">
                                <label>Nome da Campanha</label>
                                <div className="fake-input">Retorno Visitas - Campanha Março</div>
                            </div>

                            <div className="input-group">
                                <label>Público Alvo Selecionado</label>
                                <div className="fake-input">
                                    Visitantes Não Matriculados (142 pais)
                                    <Users size={16} color="#64748B"/>
                                </div>
                            </div>

                            <div className="preview-box">
                                <div className="tag-channel">WhatsApp HSM Aprovado</div>
                                <div>
                                    <strong>Olá, {'{{nome_responsavel}}'}! 👋</strong><br/>
                                    Tudo bem? Vimos que você visitou nosso colégio recentemente. As condições especiais para o <strong>{'{{curso_interesse}}'}</strong> encerram nesta sexta-feira.
                                </div>
                            </div>
                        </CampaignMock>
                    </MockupCard>
                    <TextContent>
                        <h3>WhatsApp, E-mail ou SMS?<br/>Por que não todos?</h3>
                        <p>
                            Atinja os pais onde eles estão. Crie campanhas integradas que começam com um e-mail formal e terminam com um lembrete amigável no WhatsApp.
                        </p>
                        <ul>
                            <li><MessageCircle size={20}/> <strong>WhatsApp em Massa:</strong> Dispare mensagens template (aprovadas pela Meta) com segurança.</li>
                            <li><Mail size={20}/> <strong>E-mail Marketing:</strong> Editor visual para newsletters e comunicados oficiais.</li>
                            <li><MessageSquareText size={20}/> <strong>SMS no horário certo:</strong> Mensagens curtas para lembretes e avisos, enviadas só dentro da janela de horário da escola (por padrão, das 8h às 20h).</li>
                            <li><Shuffle size={20}/> <strong>Variáveis:</strong> Personalize o texto com &quot;Nome do Aluno&quot;, &quot;Curso&quot;, etc.</li>
                        </ul>
                    </TextContent>
                </FeatureRow>

                {/* 3. DASHBOARD E RESULTADOS */}
                <FeatureRow>
                    <TextContent>
                        <h3>Métricas que Comprovam o ROI</h3>
                        <p>
                            Não basta enviar, tem que converter. O dashboard do Maskot mostra quem recebeu, quem abriu e quem respondeu sua campanha.
                        </p>
                        <ul>
                            <li><Send size={20}/> <strong>Taxa de Entrega:</strong> Saiba se seus e-mails estão chegando na caixa de entrada.</li>
                            <li><MousePointerClick size={20}/> <strong>Engajamento:</strong> Monitore cliques e respostas no WhatsApp.</li>
                            <li><BarChart size={20}/> <strong>Conversão Real:</strong> Descubra quantas matrículas vieram de cada disparo.</li>
                        </ul>
                    </TextContent>
                    <MockupCard>
                        <MockupHeader><div className="dots"><div></div><div></div><div></div></div></MockupHeader>
                        <StatsMock>
                            <div className="cards">
                                <div className="card">
                                    <h4>Total Enviado</h4>
                                    <div className="val">1.204</div>
                                    <div className="trend">98.4% entrega</div>
                                </div>
                                <div className="card">
                                    <h4>Taxa de Resposta</h4>
                                    <div className="val">42%</div>
                                    <div className="trend">+14% vs média</div>
                                </div>
                            </div>

                            <div className="list">
                                <div className="item">
                                    <div className="info">
                                        <h5>Retorno de Visitas - Fundamental</h5>
                                        <span><MessageCircle size={12}/> WhatsApp • Ontem</span>
                                    </div>
                                    <span className="status sent">Enviada</span>
                                </div>
                                <div className="item">
                                    <div className="info">
                                        <h5>Matrículas Abertas 2026</h5>
                                        <span><Mail size={12}/> E-mail • 2 dias atrás</span>
                                    </div>
                                    <span className="status sent">Enviada</span>
                                </div>
                                <div className="item">
                                    <div className="info">
                                        <h5>Lembrete de Fechamento de Turmas</h5>
                                        <span><MessageCircle size={12}/> WhatsApp • Agendada</span>
                                    </div>
                                    <span className="status draft">Agendada</span>
                                </div>
                            </div>
                        </StatsMock>
                    </MockupCard>
                </FeatureRow>

                {/* 4. POWER GRID */}
                <div style={{textAlign: 'center', marginBottom: '3rem'}}>
                    <h3 style={{
                        fontSize: '2rem',
                        fontWeight: 800,
                        color: '#0F172A',
                        fontFamily: 'var(--font-inter)',
                        letterSpacing: '-0.02em'
                    }}>Ferramentas de Crescimento</h3>
                    <p style={{color: '#475569', marginTop: '0.5rem', fontSize: '1.125rem'}}>Tudo para captar e fidelizar alunos.</p>
                </div>

                <PowerGrid>
                    <PowerCard>
                        <div className="icon"><Users size={24}/></div>
                        <h4>Públicos Salvos</h4>
                        <p>Salve segmentações complexas (ex: &quot;Ex-alunos de 2023&quot;) para reutilizar em segundos.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><CalendarCheck size={24}/></div>
                        <h4>Agendamento Inteligente</h4>
                        <p>Programe seus disparos para o horário nobre. Deixe a campanha pronta na sexta para sair na segunda.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><Megaphone size={24}/></div>
                        <h4>Templates Prontos</h4>
                        <p>Biblioteca de modelos de e-mail e mensagens de WhatsApp focados em conversão escolar.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><Target size={24}/></div>
                        <h4>Retargeting CRM</h4>
                        <p>Fale especificamente com leads que travaram em uma etapa do funil de matrículas.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><MessageCircle size={24}/></div>
                        <h4>WhatsApp Oficial</h4>
                        <p>Integração via API Oficial (BSP) para evitar bloqueios de número e garantir entrega.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><BarChart size={24}/></div>
                        <h4>Histórico do Lead</h4>
                        <p>Cada e-mail enviado fica registrado na timeline do aluno. Saiba exatamente o que ele já recebeu.</p>
                    </PowerCard>
                </PowerGrid>

            </Container>
        </Section>
    )
}