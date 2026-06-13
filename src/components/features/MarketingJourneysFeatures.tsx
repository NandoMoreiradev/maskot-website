'use client'

import styled from 'styled-components'
import {
    Zap, Mail, MessageCircle, GitBranch, Play, RefreshCw, CheckSquare, Calendar, Filter, Users, Tag, Smartphone,
    FileText, CalendarCheck, Activity, MessageSquare, FlaskConical, Clock
} from 'lucide-react'

const Section = styled.section`
    padding: 6rem 0;
    background: #ffffff;
`

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
`

const Header = styled.div`
    text-align: center;
    max-width: 800px;
    margin: 0 auto 4rem;

    h2 {
        font-size: 2.5rem;
        font-weight: 800;
        color: ${props => props.theme.colors.textDark};
        margin-bottom: 1rem;
        
        span { color: ${props => props.theme.colors.primary}; }
    }
    
    p {
        font-size: 1.125rem;
        color: ${props => props.theme.colors.textMedium};
        line-height: 1.6;
    }
`

const FeaturesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    @media (max-width: ${props => props.theme.breakpoints.lg}) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${props => props.theme.breakpoints.sm}) {
        grid-template-columns: 1fr;
    }
`

const FeatureCategory = styled.div`
    background: #F8F9FA;
    border: 1px solid #E2E8F0;
    border-radius: 16px;
    padding: 2rem;
    height: 100%;
    transition: transform 0.2s, box-shadow 0.2s;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.05);
    }
`

const CategoryHeader = styled.div<{ $color: string }>`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;

    .icon-wrapper {
        width: 48px;
        height: 48px;
        border-radius: 12px;
        background: ${props => props.$color}15;
        color: ${props => props.$color};
        display: flex;
        align-items: center;
        justify-content: center;
    }

    h3 {
        font-size: 1.25rem;
        font-weight: 700;
        color: ${props => props.theme.colors.textDark};
    }
`

const FeatureList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const FeatureItem = styled.li`
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;

    svg {
        color: ${props => props.theme.colors.primary};
        margin-top: 2px;
        flex-shrink: 0;
    }

    div {
        h4 {
            font-size: 0.95rem;
            font-weight: 600;
            color: ${props => props.theme.colors.textDark};
            margin-bottom: 0.25rem;
        }
        p {
            font-size: 0.85rem;
            color: ${props => props.theme.colors.textMedium};
            line-height: 1.4;
        }
    }
`

export default function MarketingJourneysFeatures() {
    return (
        <Section>
            <Container>
                <Header>
                    <h2>Recursos <span>Completos</span> da Jornada</h2>
                    <p>São 18 gatilhos, ações em 3 canais e uma lógica condicional de nível profissional — tudo no modo arrastar e soltar, sem precisar de código.</p>
                </Header>

                <FeaturesGrid>
                    {/* Gatilhos */}
                    <FeatureCategory>
                        <CategoryHeader $color="#0ea5e9">
                            <div className="icon-wrapper"><Play size={24} /></div>
                            <h3>Gatilhos Inteligentes</h3>
                        </CategoryHeader>
                        <FeatureList>
                            <FeatureItem>
                                <Zap size={18} />
                                <div>
                                    <h4>Novo Lead Criado</h4>
                                    <p>Inicie a jornada assim que um lead entra — via site, Meta Ads, importação ou indicação.</p>
                                </div>
                            </FeatureItem>
                            <FeatureItem>
                                <FileText size={18} />
                                <div>
                                    <h4>Formulário ou Landing Page</h4>
                                    <p>Dispare quando um responsável envia um formulário público ou uma landing page do Maskot.</p>
                                </div>
                            </FeatureItem>
                            <FeatureItem>
                                <RefreshCw size={18} />
                                <div>
                                    <h4>Estágio, Lead Ganho ou Perdido</h4>
                                    <p>Acione ações quando o lead muda de etapa, é matriculado ou marcado como perdido.</p>
                                </div>
                            </FeatureItem>
                            <FeatureItem>
                                <CalendarCheck size={18} />
                                <div>
                                    <h4>Eventos de Visita</h4>
                                    <p>Visita agendada, realizada, cancelada ou <strong>faltou (no-show)</strong> — reaja a cada cenário.</p>
                                </div>
                            </FeatureItem>
                            <FeatureItem>
                                <Activity size={18} />
                                <div>
                                    <h4>Comportamento do Lead</h4>
                                    <p>Abriu o e-mail, clicou no link, concluiu uma tarefa ou entrou numa audiência.</p>
                                </div>
                            </FeatureItem>
                            <FeatureItem>
                                <Calendar size={18} />
                                <div>
                                    <h4>Datas e API Externa</h4>
                                    <p>Aniversários e datas comemorativas, ou gatilhos disparados por sistemas externos via webhook.</p>
                                </div>
                            </FeatureItem>
                        </FeatureList>
                    </FeatureCategory>

                    {/* Ações */}
                    <FeatureCategory>
                        <CategoryHeader $color="#22c55e">
                            <div className="icon-wrapper"><MessageCircle size={24} /></div>
                            <h3>Ações Multicanal</h3>
                        </CategoryHeader>
                        <FeatureList>
                            <FeatureItem>
                                <Smartphone size={18} />
                                <div>
                                    <h4>WhatsApp Oficial</h4>
                                    <p>Envie mensagens ativas pela API Oficial do WhatsApp, sem intervenção humana.</p>
                                </div>
                            </FeatureItem>
                            <FeatureItem>
                                <Mail size={18} />
                                <div>
                                    <h4>E-mail Marketing</h4>
                                    <p>Dispare templates ricos e personalizados com merge tags para nutrição e engajamento.</p>
                                </div>
                            </FeatureItem>
                            <FeatureItem>
                                <MessageSquare size={18} />
                                <div>
                                    <h4>SMS</h4>
                                    <p>Alcance o responsável direto no celular para lembretes e avisos urgentes.</p>
                                </div>
                            </FeatureItem>
                            <FeatureItem>
                                <CheckSquare size={18} />
                                <div>
                                    <h4>Tarefas, Atribuição e Avisos</h4>
                                    <p>Crie tarefas, atribua o lead a um consultor e notifique a equipe automaticamente.</p>
                                </div>
                            </FeatureItem>
                            <FeatureItem>
                                <Tag size={18} />
                                <div>
                                    <h4>Gestão do Funil</h4>
                                    <p>Adicione/remova tags, mude o estágio, atualize o score ou um campo personalizado do lead.</p>
                                </div>
                            </FeatureItem>
                        </FeatureList>
                    </FeatureCategory>

                    {/* Condições */}
                    <FeatureCategory>
                        <CategoryHeader $color="#f59e0b">
                            <div className="icon-wrapper"><GitBranch size={24} /></div>
                            <h3>Lógica e Condicionais</h3>
                        </CategoryHeader>
                        <FeatureList>
                            <FeatureItem>
                                <Filter size={18} />
                                <div>
                                    <h4>Condições E / OU / NÃO</h4>
                                    <p>Regras aninhadas com mais de 20 operadores sobre score, origem, tags, datas e campos do lead.</p>
                                </div>
                            </FeatureItem>
                            <FeatureItem>
                                <FlaskConical size={18} />
                                <div>
                                    <h4>Teste A/B</h4>
                                    <p>Divida a audiência em caminhos diferentes e descubra qual mensagem converte mais.</p>
                                </div>
                            </FeatureItem>
                            <FeatureItem>
                                <Clock size={18} />
                                <div>
                                    <h4>Esperar Tempo ou Condição</h4>
                                    <p>Aguarde 2 dias, até o horário comercial, ou até o lead realizar uma ação esperada.</p>
                                </div>
                            </FeatureItem>
                            <FeatureItem>
                                <Users size={18} />
                                <div>
                                    <h4>Filtro de Engajamento</h4>
                                    <p>Crie rotas específicas para quem abriu o e-mail, clicou no link ou respondeu no WhatsApp.</p>
                                </div>
                            </FeatureItem>
                        </FeatureList>
                    </FeatureCategory>

                </FeaturesGrid>
            </Container>
        </Section>
    )
}
