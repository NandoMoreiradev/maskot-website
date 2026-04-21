'use client'

import styled from 'styled-components'
import {
    DollarSign, PieChart, Target, Link as LinkIcon, 
    Ticket, ClipboardList, Image as ImageIcon, 
    CheckCircle2, Sparkles, Activity, Layers, PenTool
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

export default function CampaignFeatures() {
    return (
        <Section>
            <Container>
                <Header>
                    <h2>Controle Absoluto de <span>Ponta a Ponta</span></h2>
                    <p>Gerencie o orçamento de mídia, centralize aprovações de design e feche mais matrículas integrando ferramentas essenciais.</p>
                </Header>

                <FeaturesGrid>
                    {/* Financeiro e Metricas */}
                    <FeatureCategory>
                        <CategoryHeader $color="#10B981">
                            <div className="icon-wrapper"><DollarSign size={24} /></div>
                            <h3>Controle Financeiro (ROI)</h3>
                        </CategoryHeader>
                        <FeatureList>
                            <FeatureItem>
                                <PieChart size={18} />
                                <div>
                                    <h4>Orçamento por Canal</h4>
                                    <p>Distribua a verba macro da campanha para canais online, offline e parceiros.</p>
                                </div>
                            </FeatureItem>
                            <FeatureItem>
                                <Activity size={18} />
                                <div>
                                    <h4>Sincronização de Gastos</h4>
                                    <p>Importe dados de consumo (AutoSync) e descubra o seu Custo por Aquisição (CAC).</p>
                                </div>
                            </FeatureItem>
                            <FeatureItem>
                                <Target size={18} />
                                <div>
                                    <h4>Acompanhamento de Metas</h4>
                                    <p>Configure metas de volume de leads e avalie em tempo real o que está funcionando.</p>
                                </div>
                            </FeatureItem>
                        </FeatureList>
                    </FeatureCategory>

                    {/* Ecossistema e Integracoes */}
                    <FeatureCategory>
                        <CategoryHeader $color="#3B82F6">
                            <div className="icon-wrapper"><Layers size={24} /></div>
                            <h3>Ecossistema Integrado</h3>
                        </CategoryHeader>
                        <FeatureList>
                            <FeatureItem>
                                <Ticket size={18} />
                                <div>
                                    <h4>Cupons Associados</h4>
                                    <p>Gere códigos de desconto para campanhas específicas e vincule ao lead no CRM.</p>
                                </div>
                            </FeatureItem>
                            <FeatureItem>
                                <ClipboardList size={18} />
                                <div>
                                    <h4>Formulários Públicos</h4>
                                    <p>Crie Landing Pages ou formulários e rastreie exatamente de qual campanha eles vieram.</p>
                                </div>
                            </FeatureItem>
                            <FeatureItem>
                                <LinkIcon size={18} />
                                <div>
                                    <h4>Mapeamento Flexível</h4>
                                    <p>Mapeie campos do Meta Ads via Webhook direto para os campos do cadastro do aluno.</p>
                                </div>
                            </FeatureItem>
                        </FeatureList>
                    </FeatureCategory>

                    {/* Criativos e IA */}
                    <FeatureCategory>
                        <CategoryHeader $color="#A855F7">
                            <div className="icon-wrapper"><Sparkles size={24} /></div>
                            <h3>Gestão de Criativos</h3>
                        </CategoryHeader>
                        <FeatureList>
                            <FeatureItem>
                                <PenTool size={18} />
                                <div>
                                    <h4>Estúdio IA Multicanal</h4>
                                    <p>Peça para a IA redigir um texto adaptado para o Instagram, e-mail ou roteiro de vídeo.</p>
                                </div>
                            </FeatureItem>
                            <FeatureItem>
                                <CheckCircle2 size={18} />
                                <div>
                                    <h4>Workflow de Aprovação</h4>
                                    <p>Classifique peças visuais como Pendente ou Aprovada antes da sua agência publicar.</p>
                                </div>
                            </FeatureItem>
                            <FeatureItem>
                                <ImageIcon size={18} />
                                <div>
                                    <h4>Central de Ativos</h4>
                                    <p>Armazene os vídeos e PDFs da campanha no Drive do CRM para o comercial compartilhar rapidamente.</p>
                                </div>
                            </FeatureItem>
                        </FeatureList>
                    </FeatureCategory>

                </FeaturesGrid>
            </Container>
        </Section>
    )
}
