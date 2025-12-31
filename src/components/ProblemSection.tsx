'use client'

import styled from 'styled-components'
import {
    Clock,
    UserX,
    Ban,
    FileWarning,
    SearchX,
    Zap,
    ShieldCheck,
    Filter,
    MessageSquare,
    ArrowRight
} from 'lucide-react'

const Section = styled.section`
    padding: 6rem 0;
    background: ${props => props.theme.colors.white};
    position: relative;
    overflow: hidden;
`

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
`

const SectionHeader = styled.div`
    text-align: center;
    margin-bottom: 4rem;
    max-width: 750px;
    margin-left: auto;
    margin-right: auto;
`

const SectionTitle = styled.h2`
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.textDark};
    line-height: 1.2;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`

const SectionSubtitle = styled.p`
    font-size: 1.1rem;
    color: ${props => props.theme.colors.textMedium};
    line-height: 1.6;
`

// --- Grid de Comparação ---

const ComparisonGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 80px 1fr;
    gap: 2rem;
    align-items: stretch;
    margin-bottom: 5rem;

    @media (max-width: 968px) {
        grid-template-columns: 1fr;
        gap: 3rem;
    }
`

const ProblemCard = styled.div`
    background: #FFF5F5;
    border: 1px solid #FEB2B2;
    border-radius: 20px;
    padding: 2.5rem 2rem;
    position: relative;
    height: 100%;
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-5px);
    }
`

const SolutionCard = styled.div`
    background: linear-gradient(135deg,
    ${props => props.theme.colors.pageBackground} 0%,
    ${props => props.theme.colors.white} 100%
    );
    border: 1px solid ${props => props.theme.colors.primary}40;
    border-radius: 20px;
    padding: 2.5rem 2rem;
    position: relative;
    height: 100%;
    box-shadow: 0 10px 30px -10px rgba(0, 123, 255, 0.15);
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 35px -10px rgba(0, 123, 255, 0.25);
    }

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 6px;
        background: linear-gradient(90deg,
        ${props => props.theme.colors.primary},
        ${props => props.theme.colors.secondary}
        );
    }
`

const IconHeader = styled.div<{ $type: 'problem' | 'solution' }>`
    position: absolute;
    top: -24px;
    left: 2rem;
    background: white;
    padding: 0.75rem;
    border-radius: 16px;
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 15px rgba(0,0,0,0.08);
    border: 1px solid ${props => props.$type === 'problem' ? '#FEB2B2' : props.theme.colors.borderLight};
    z-index: 2;

    svg {
        width: 28px;
        height: 28px;
        color: ${props => props.$type === 'problem' ? props.theme.colors.danger : props.theme.colors.primary};
    }
`

const CardTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 2rem;
    margin-top: 1rem;
    color: ${props => props.theme.colors.textDark};
`

const FeatureList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`

const FeatureItem = styled.li<{ $type: 'problem' | 'solution' }>`
    display: flex;
    align-items: flex-start;
    margin-bottom: 1.25rem;
    font-size: 0.95rem;
    color: ${props => props.$type === 'problem' ? props.theme.colors.textMedium : props.theme.colors.textDark};
    line-height: 1.5;

    svg {
        width: 20px;
        height: 20px;
        margin-right: 1rem;
        flex-shrink: 0;
        margin-top: 3px;
        color: ${props => props.$type === 'problem' ? props.theme.colors.danger : props.theme.colors.success};
        opacity: ${props => props.$type === 'problem' ? 0.8 : 1};
    }

    span {
        flex: 1;
        strong {
            color: ${props => props.$type === 'problem' ? props.theme.colors.danger : props.theme.colors.textDark};
            font-weight: 700;
        }
    }
`

const VsDivider = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    div {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: ${props => props.theme.colors.lightGray};
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${props => props.theme.colors.textMedium};
        border: 4px solid ${props => props.theme.colors.white};
        box-shadow: 0 4px 10px rgba(0,0,0,0.05);

        @media (max-width: 968px) {
            transform: rotate(90deg);
            margin: 1rem 0;
        }
    }
`

const ResultsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding-top: 2rem;
    border-top: 1px solid ${props => props.theme.colors.borderLight};

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
`

const ResultCard = styled.div`
    text-align: center;
    padding: 1rem;
`

const ResultNumber = styled.div`
    font-size: 2.5rem;
    font-weight: 800;
    background: linear-gradient(135deg,
    ${props => props.theme.colors.primary} 0%,
    ${props => props.theme.colors.secondary} 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5rem;
    line-height: 1.2;
`

const ResultLabel = styled.p`
    font-size: 1.1rem;
    color: ${props => props.theme.colors.textDark};
    font-weight: 700;
    margin-bottom: 0.5rem;
`

const ResultDescription = styled.p`
    font-size: 0.9rem;
    color: ${props => props.theme.colors.textMedium};
    line-height: 1.4;
`

export default function ProblemSection() {
    return (
        <Section>
            <Container>
                <SectionHeader>
                    <SectionTitle>
                        Onde sua escola está perdendo matrículas?
                    </SectionTitle>
                    <SectionSubtitle>
                        A captação de alunos mudou. Pais esperam respostas imediatas no WhatsApp.
                        Processos manuais e caderninhos estão matando sua taxa de conversão.
                    </SectionSubtitle>
                </SectionHeader>

                <ComparisonGrid>
                    {/* LADO DO PROBLEMA (Processo Manual/Antigo) */}
                    <ProblemCard>
                        <IconHeader $type="problem">
                            <UserX />
                        </IconHeader>
                        <CardTitle>Captação Analógica</CardTitle>
                        <FeatureList>
                            <FeatureItem $type="problem">
                                <Clock />
                                <span>
                                    <strong>Lead esfria:</strong> Demora de horas (ou dias) para responder um pai interessado.
                                </span>
                            </FeatureItem>
                            <FeatureItem $type="problem">
                                <FileWarning />
                                <span>
                                    <strong>Sem Follow-up:</strong> O pai para de responder e a equipe esquece de cobrar o retorno.
                                </span>
                            </FeatureItem>
                            <FeatureItem $type="problem">
                                <SearchX />
                                <span>
                                    <strong>Cegueira Comercial:</strong> Você não sabe quantos leads chegaram nem o motivo da perda.
                                </span>
                            </FeatureItem>
                            <FeatureItem $type="problem">
                                <Ban />
                                <span>
                                    <strong>Bloqueio de WhatsApp:</strong> Perda do chip em meio a uma campanha de matrículas.
                                </span>
                            </FeatureItem>
                            <FeatureItem $type="problem">
                                <UserX />
                                <span>
                                    <strong>Dados Perdidos:</strong> Telefones anotados em post-its ou Excel que ninguém atualiza.
                                </span>
                            </FeatureItem>
                        </FeatureList>
                    </ProblemCard>

                    <VsDivider>
                        <div><ArrowRight size={24} /></div>
                    </VsDivider>

                    {/* LADO DA SOLUÇÃO (CRM Maskot) */}
                    <SolutionCard>
                        <IconHeader $type="solution">
                            <Zap />
                        </IconHeader>
                        <CardTitle>Máquina de Matrículas</CardTitle>
                        <FeatureList>
                            <FeatureItem $type="solution">
                                <MessageSquare />
                                <span>
                                    <strong>Resposta Imediata 24/7:</strong> O Chatbot acolhe, tira dúvidas e agenda a visita na hora.
                                </span>
                            </FeatureItem>
                            <FeatureItem $type="solution">
                                <Filter />
                                <span>
                                    <strong>CRM / Funil de Vendas:</strong> Visualize cada interessado e arraste cards até a matrícula.
                                </span>
                            </FeatureItem>
                            <FeatureItem $type="solution">
                                <Zap />
                                <span>
                                    <strong>Régua de Follow-up:</strong> O sistema lembra o vendedor de ligar ou manda msg automática.
                                </span>
                            </FeatureItem>
                            <FeatureItem $type="solution">
                                <ShieldCheck />
                                <span>
                                    <strong>API Oficial Blindada:</strong> Dispare campanhas de rematrícula sem risco de bloqueio.
                                </span>
                            </FeatureItem>
                            <FeatureItem $type="solution">
                                <Zap />
                                <span>
                                    <strong>Centralização:</strong> WhatsApp, Instagram e Site caindo no mesmo funil organizado.
                                </span>
                            </FeatureItem>
                        </FeatureList>
                    </SolutionCard>
                </ComparisonGrid>

                <ResultsGrid>
                    <ResultCard>
                        <ResultNumber>+Velocidade</ResultNumber>
                        <ResultLabel>Zero Lead Esperando</ResultLabel>
                        <ResultDescription>
                            O primeiro a responder é quem ganha a matrícula. O Maskot garante atendimento em segundos.
                        </ResultDescription>
                    </ResultCard>

                    <ResultCard>
                        <ResultNumber>+Controle</ResultNumber>
                        <ResultLabel>Gestão do Comercial</ResultLabel>
                        <ResultDescription>
                            Saiba exatamente como sua equipe está atendendo e onde estão os gargalos do funil.
                        </ResultDescription>
                    </ResultCard>

                    <ResultCard>
                        <ResultNumber>+Conversão</ResultNumber>
                        <ResultLabel>Nutrição Automática</ResultLabel>
                        <ResultDescription>
                            Não deixe o lead esquecer de você. Automações mantêm a escola na mente dos pais.
                        </ResultDescription>
                    </ResultCard>
                </ResultsGrid>
            </Container>
        </Section>
    )
}