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
    MessageSquare,
    ArrowRight,
    BarChart3,
    Inbox,
    TrendingUp
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeader, SectionTitle, SectionSubtitle } from '@/components/ui/SectionHeading'

const Section = styled.section`
    padding: 6rem 0;
    background: ${props => props.theme.colors.white};
    position: relative;
    overflow: hidden;
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
    background: ${props => props.theme.colors.dangerSoft};
    border: 1px solid ${props => props.theme.colors.dangerBorder};
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
`

/* Máscara com o mesmo border-radius do card: recorta a barra de destaque
   exatamente no contorno arredondado, em vez de deixar a própria barra
   tentar (e falhar em) reproduzir a curva com um raio menor. */
const AccentBarMask = styled.div`
    position: absolute;
    inset: 0;
    border-radius: 20px;
    overflow: hidden;
    pointer-events: none;

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
    border: 1px solid ${props => props.$type === 'problem' ? props.theme.colors.dangerBorder : props.theme.colors.borderLight};
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

const ResultIcon = styled.div`
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: ${props => props.theme.colors.primary}12;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1rem;

    svg {
        width: 26px;
        height: 26px;
        color: ${props => props.theme.colors.primary};
    }
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
                                    <strong>O lead esfria:</strong> você demora horas (ou dias) para responder um pai interessado — e ele já fechou com a escola vizinha.
                                </span>
                            </FeatureItem>
                            <FeatureItem $type="problem">
                                <FileWarning />
                                <span>
                                    <strong>Ninguém faz follow-up:</strong> o pai para de responder e a equipe esquece de retomar o contato.
                                </span>
                            </FeatureItem>
                            <FeatureItem $type="problem">
                                <SearchX />
                                <span>
                                    <strong>Cegueira comercial:</strong> você não sabe quantos leads chegaram, de onde vieram nem por que foram perdidos.
                                </span>
                            </FeatureItem>
                            <FeatureItem $type="problem">
                                <Ban />
                                <span>
                                    <strong>WhatsApp bloqueado:</strong> o número trava bem no meio de uma campanha.
                                </span>
                            </FeatureItem>
                            <FeatureItem $type="problem">
                                <UserX />
                                <span>
                                    <strong>Dados perdidos:</strong> telefones anotados em post-its e planilhas que ninguém atualiza.
                                </span>
                            </FeatureItem>
                        </FeatureList>
                    </ProblemCard>

                    <VsDivider>
                        <div><ArrowRight size={24} /></div>
                    </VsDivider>

                    {/* LADO DA SOLUÇÃO (CRM Maskot) */}
                    <SolutionCard>
                        <AccentBarMask />
                        <IconHeader $type="solution">
                            <Zap />
                        </IconHeader>
                        <CardTitle>Máquina de Matrículas</CardTitle>
                        <FeatureList>
                            <FeatureItem $type="solution">
                                <MessageSquare />
                                <span>
                                    <strong>Resposta imediata 24/7:</strong> o atendimento acolhe, tira dúvidas e agenda a visita na hora — a qualquer hora.
                                </span>
                            </FeatureItem>
                            <FeatureItem $type="solution">
                                <Zap />
                                <span>
                                    <strong>Régua de follow-up automática:</strong> o sistema cobra o retorno sozinho e lembra o consultor de ligar.
                                </span>
                            </FeatureItem>
                            <FeatureItem $type="solution">
                                <BarChart3 />
                                <span>
                                    <strong>Visão total do comercial:</strong> saiba quantos leads chegaram, de qual canal e o motivo de cada perda.
                                </span>
                            </FeatureItem>
                            <FeatureItem $type="solution">
                                <ShieldCheck />
                                <span>
                                    <strong>API Oficial blindada:</strong> monitoramento automático de qualidade protege seu número contra bloqueio nas campanhas.
                                </span>
                            </FeatureItem>
                            <FeatureItem $type="solution">
                                <Inbox />
                                <span>
                                    <strong>Tudo centralizado:</strong> WhatsApp, Instagram e site caindo no mesmo funil, com todo o histórico salvo.
                                </span>
                            </FeatureItem>
                        </FeatureList>
                    </SolutionCard>
                </ComparisonGrid>

                <ResultsGrid>
                    <ResultCard>
                        <ResultIcon><Zap /></ResultIcon>
                        <ResultLabel>Zero Lead Esperando</ResultLabel>
                        <ResultDescription>
                            O primeiro a responder é quem ganha a matrícula. O Maskot garante atendimento em segundos.
                        </ResultDescription>
                    </ResultCard>

                    <ResultCard>
                        <ResultIcon><BarChart3 /></ResultIcon>
                        <ResultLabel>Gestão do Comercial</ResultLabel>
                        <ResultDescription>
                            Saiba exatamente como sua equipe está atendendo e onde estão os gargalos do funil.
                        </ResultDescription>
                    </ResultCard>

                    <ResultCard>
                        <ResultIcon><TrendingUp /></ResultIcon>
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