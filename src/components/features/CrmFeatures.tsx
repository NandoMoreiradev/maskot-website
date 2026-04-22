'use client'

import styled from 'styled-components'
import {
    LayoutDashboard, Flame, UserCog, Filter, RotateCcw,
    GraduationCap, Target, Focus, Database, History, RefreshCcw,
    Sparkles, Wand2
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
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

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

export default function CrmFeatures() {
    return (
        <Section>
            <Container>
                <Header>
                    <h2>Dashboard do Consultor: <span>Foco e Conversão</span></h2>
                    <p>O coração da sua operação comercial. Uma ferramenta desenhada não apenas para armazenar dados, mas para ditar o ritmo diário das matrículas.</p>
                </Header>

                <FeaturesGrid>
                    {/* Dashboard e Operacional */}
                    <FeatureCategory>
                        <CategoryHeader $color="#f59e0b">
                            <div className="icon-wrapper"><LayoutDashboard size={24} /></div>
                            <h3>O &quot;Piloto&quot; do Dia</h3>
                        </CategoryHeader>
                        <FeatureList>
                            <FeatureItem>
                                <Flame size={18} />
                                <div>
                                    <h4>Leads Quentes e Alertas</h4>
                                    <p>Identifique na hora quem está mais engajado (Score) e receba alertas de SLA para leads sem contato.</p>
                                </div>
                            </FeatureItem>
                            <FeatureItem>
                                <Focus size={18} />
                                <div>
                                    <h4>Prioridades do Dia</h4>
                                    <p>Visão clara das tarefas diárias integradas ao Kanban, para o vendedor não perder o timing da venda.</p>
                                </div>
                            </FeatureItem>
                            <FeatureItem>
                                <Target size={18} />
                                <div>
                                    <h4>Resumo no Header</h4>
                                    <p>Taxas de conversão, ticket médio e volume de leads em tempo real direto no topo da tela.</p>
                                </div>
                            </FeatureItem>
                            <FeatureItem>
                                <Filter size={18} />
                                <div>
                                    <h4>Filtros e Kanban Enriquecido</h4>
                                    <p>Visualize origem, curso de interesse, tempo estagnado e valor nos próprios cards de oportunidade.</p>
                                </div>
                            </FeatureItem>
                        </FeatureList>
                    </FeatureCategory>

                    {/* Lógica de Irmãos (Core Maskot) */}
                    <FeatureCategory>
                        <CategoryHeader $color="#3b82f6">
                            <div className="icon-wrapper"><GraduationCap size={24} /></div>
                            <h3>Resolução Inteligente</h3>
                        </CategoryHeader>
                        <FeatureList>
                            <FeatureItem>
                                <UserCog size={18} />
                                <div>
                                    <h4>Múltiplos Alunos (Irmãos)</h4>
                                    <p>Uma família (Lead) pode negociar 2 ou 3 matrículas ao mesmo tempo, sem criar cadastros duplicados confusos.</p>
                                </div>
                            </FeatureItem>
                            <FeatureItem>
                                <Target size={18} />
                                <div>
                                    <h4>Resoluções Independentes</h4>
                                    <p>Aprove a matrícula de um filho e perca a do outro na mesma tela. O lead só é finalizado quando todos os filhos forem resolvidos.</p>
                                </div>
                            </FeatureItem>
                            <FeatureItem>
                                <RefreshCcw size={18} />
                                <div>
                                    <h4>Automação Financeira</h4>
                                    <p>Assim que a resolução for dada no Kanban, o sistema já aciona o financeiro para faturar e calcular a comissão.</p>
                                </div>
                            </FeatureItem>
                        </FeatureList>
                    </FeatureCategory>

                    {/* Inteligência de Dados */}
                    <FeatureCategory>
                        <CategoryHeader $color="#10b981">
                            <div className="icon-wrapper"><Database size={24} /></div>
                            <h3>Inteligência de Dados</h3>
                        </CategoryHeader>
                        <FeatureList>
                            <FeatureItem>
                                <Database size={18} />
                                <div>
                                    <h4>Campos Personalizados Livres</h4>
                                    <p>Crie campos dinâmicos específicos da sua escola (restrição alimentar, tamanho de uniforme, etc) para usar nos formulários e processos.</p>
                                </div>
                            </FeatureItem>
                            <FeatureItem>
                                <History size={18} />
                                <div>
                                    <h4>Histórico de Estágio</h4>
                                    <p>Audite a performance do time sabendo exatamente quantos dias, horas e minutos o lead passou em cada etapa (SLA).</p>
                                </div>
                            </FeatureItem>
                            <FeatureItem>
                                <RotateCcw size={18} />
                                <div>
                                    <h4>Lixeira e Resgate de Leads</h4>
                                    <p>Encontre rapidamente matrículas perdidas ou excluídas para realizar campanhas focadas em recuperação.</p>
                                </div>
                            </FeatureItem>
                        </FeatureList>
                    </FeatureCategory>

                    {/* LeadDetailModal (Visão 360) */}
                    <FeatureCategory>
                        <CategoryHeader $color="#8b5cf6">
                            <div className="icon-wrapper"><Focus size={24} /></div>
                            <h3>Visão 360º (LeadDetail)</h3>
                        </CategoryHeader>
                        <FeatureList>
                            <FeatureItem>
                                <Sparkles size={18} />
                                <div>
                                    <h4>Resumo Inteligente (IA)</h4>
                                    <p>Não precisa ler históricos longos. Nossa Inteligência Artificial lê toda a timeline e gera um resumo em segundos do contexto familiar.</p>
                                </div>
                            </FeatureItem>
                            <FeatureItem>
                                <Wand2 size={18} />
                                <div>
                                    <h4>Resgate com IA (Rescue)</h4>
                                    <p>Se o lead esfriar e entrar em risco, um clique aciona a IA para redigir a mensagem perfeita de resgate adaptada para o WhatsApp.</p>
                                </div>
                            </FeatureItem>
                            <FeatureItem>
                                <History size={18} />
                                <div>
                                    <h4>Timeline e Anexos</h4>
                                    <p>Toda interação (ligações, tarefas, visitas) é registrada cronologicamente. E você ainda conta com uma aba dedicada para os anexos do aluno.</p>
                                </div>
                            </FeatureItem>
                        </FeatureList>
                    </FeatureCategory>

                </FeaturesGrid>
            </Container>
        </Section>
    )
}
