'use client'

import styled, { keyframes, css } from 'styled-components'
import {
    Send, Users, Mail, MessageCircle,
    Filter, BarChart, MousePointerClick, CalendarCheck,
    Megaphone, Target, Shuffle
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
            color: #F97316; /* Laranja */
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

// --- MOCKUP 1: AUDIENCE BUILDER ---
const FilterMock = styled.div`
    padding: 25px;
    background: white;

    .logic-group {
        border: 1px dashed #CBD5E1; padding: 15px; border-radius: 8px; position: relative;
        margin-bottom: 15px;

        &:before {
            content: 'E (AND)'; position: absolute; top: -10px; left: 10px; background: white;
            padding: 0 5px; font-size: 10px; font-weight: bold; color: #64748B;
        }
    }

    .condition-row {
        display: flex; gap: 8px; margin-bottom: 8px;
        select, input {
            padding: 8px; border: 1px solid #E2E8F0; border-radius: 6px; font-size: 12px;
            background: #F8FAFC; color: #334155;
        }
        .field { width: 40%; }
        .op { width: 25%; }
        .val { width: 35%; }
    }

    .add-btn {
        width: 100%; border: 1px dashed #94A3B8; color: #64748B; padding: 8px;
        border-radius: 6px; font-size: 12px; display: flex; align-items: center;
        justify-content: center; gap: 5px; cursor: pointer;
    }
`

// --- MOCKUP 2: CAMPAIGN CREATION ---
const CampaignMock = styled.div`
    padding: 30px;
    background: #F8FAFC;
    height: 380px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .channel-select {
        display: flex; gap: 15px;
        .option {
            flex: 1; background: white; padding: 15px; border: 2px solid #E2E8F0; border-radius: 12px;
            text-align: center; cursor: pointer; transition: all 0.2s;
            &.active { border-color: #F97316; background: #FFF7ED; color: #C2410C; }
            svg { display: block; margin: 0 auto 8px; }
            span { font-size: 12px; font-weight: bold; }
        }
    }

    .input-group {
        label { display: block; font-size: 12px; font-weight: bold; color: #475569; margin-bottom: 6px; }
        .fake-input {
            background: white; border: 1px solid #CBD5E1; padding: 10px; border-radius: 8px;
            font-size: 13px; color: #334155; display: flex; justify-content: space-between; align-items: center;
        }
    }

    .preview-box {
        flex: 1; background: #DCF8C6; border-radius: 8px; padding: 15px; position: relative;
        font-size: 13px; color: #111B21; border: 1px solid #86D96F;

        &:after {
            content: 'Prévia WhatsApp'; position: absolute; bottom: -20px; right: 0; font-size: 10px; color: #94A3B8;
        }
    }
`

// --- MOCKUP 3: STATS DASHBOARD ---
const StatsMock = styled.div`
    padding: 20px; background: white;

    .cards { display: flex; gap: 15px; margin-bottom: 20px; }
    .card {
        flex: 1; padding: 15px; border-radius: 12px; color: white;
        h4 { margin: 0 0 5px 0; font-size: 11px; opacity: 0.9; font-weight: normal; }
        .val { font-size: 24px; font-weight: bold; }
    }

    .list {
        .item {
            display: flex; justify-content: space-between; align-items: center; padding: 12px 0; border-bottom: 1px solid #F1F5F9;
            &:last-child { border: none; }
        }
        .info h5 { margin: 0; font-size: 14px; color: #1E293B; }
        .info span { font-size: 11px; color: #64748B; display: flex; align-items: center; gap: 4px; }
        .status {
            font-size: 10px; padding: 4px 8px; border-radius: 12px; font-weight: bold;
            &.sent { background: #DCFCE7; color: #166534; }
            &.draft { background: #F1F5F9; color: #475569; }
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
    background: ${props => props.theme.colors.lightGray};
    padding: 2rem;
    border-radius: 16px;
    border: 1px solid #eee;
    transition: all ${props => props.theme.transitions.base};
    &:hover {
        transform: translateY(-5px);
        background: white;
        box-shadow: ${props => props.theme.shadows.lg};
        border-color: #F97316;
        .icon { background: #F97316; color: white; }
    }
    .icon {
        width: 48px; height: 48px; border-radius: 12px;
        background: white; display: flex; align-items: center; justify-content: center;
        color: #F97316; margin-bottom: 1.5rem;
        box-shadow: ${props => props.theme.shadows.sm};
    }
    h4 { font-size: 1.25rem; font-weight: 700; margin-bottom: 0.75rem; color: ${props => props.theme.colors.textDark}; }
    p { font-size: 1rem; color: ${props => props.theme.colors.textMedium}; line-height: 1.5; margin: 0; }
`

export default function MarketingDeepDive() {
    return (
        <Section>
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
                            <li><Target size={20}/> <strong>Tags & Status:</strong> Use as etiquetas do funil de vendas para criar seus grupos.</li>
                        </ul>
                    </TextContent>
                    <MockupCard>
                        <MockupHeader><div className="dots"><div></div><div></div><div></div></div></MockupHeader>
                        <FilterMock>
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
                                + Adicionar Condição &quot;OU&quot; (OR)
                            </div>

                            <div style={{marginTop: '20px', borderTop: '1px solid #E2E8F0', paddingTop: '10px', fontSize: '12px', color: '#64748B'}}>
                                <strong>Resultado Estimado:</strong> 142 contatos encontrados
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
                                    <MessageCircle size={24}/>
                                    <span>WhatsApp</span>
                                </div>
                                <div className="option">
                                    <Mail size={24}/>
                                    <span>E-mail</span>
                                </div>
                            </div>

                            <div className="input-group">
                                <label>Nome da Campanha</label>
                                <div className="fake-input">Retorno Visitas - Março</div>
                            </div>

                            <div className="input-group">
                                <label>Público Alvo</label>
                                <div className="fake-input">
                                    Visitantes Não Matriculados (142)
                                    <Users size={16} color="#64748B"/>
                                </div>
                            </div>

                            <div className="preview-box">
                                <strong>Olá, {'{{nome_responsavel}}'}! 👋</strong><br/><br/>
                                Tudo bem? Vi que você visitou nossa escola recentemente.
                                As vagas para o <strong>{'{{curso_interesse}}'}</strong> estão acabando...
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
                                <div className="card" style={{background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)'}}>
                                    <h4>Total Enviado</h4>
                                    <div className="val">1,204</div>
                                </div>
                                <div className="card" style={{background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)'}}>
                                    <h4>Taxa Abertura</h4>
                                    <div className="val">42%</div>
                                </div>
                            </div>

                            <div className="list">
                                <div className="item">
                                    <div className="info">
                                        <h5>Boas Festas - Pais</h5>
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
                                        <h5>Lembrete Rematrícula</h5>
                                        <span><MessageCircle size={12}/> WhatsApp • Rascunho</span>
                                    </div>
                                    <span className="status draft">Rascunho</span>
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
                        color: '#333',
                        fontFamily: 'var(--font-inter)'
                    }}>Ferramentas de Crescimento</h3>
                    <p style={{color: '#666', marginTop: '0.5rem'}}>Tudo para captar e fidelizar alunos.</p>
                </div>

                <PowerGrid>
                    <PowerCard>
                        <div className="icon"><Users size={24}/></div>
                        <h4>Públicos Salvos</h4>
                        <p>Salve segmentações complexas (ex: &quot;Ex-alunos de 2023&quot;) para reutilizar em segundos.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><CalendarCheck size={24}/></div>
                        <h4>Agendamento</h4>
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
                        <p>Fale especificamente com leads que travaram em uma etapa do funil de vendas.</p>
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