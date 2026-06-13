'use client'

import styled from 'styled-components'
import { Zap, Archive, BellRing } from 'lucide-react'

const Section = styled.section`
    padding: 6rem 0;
    /* Background sutil para destacar os cards brancos */
    background: linear-gradient(180deg,
    ${props => props.theme.colors.pageBackground} 0%,
    ${props => props.theme.colors.lightGray} 100%
    );
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
    max-width: 720px;
    margin-left: auto;
    margin-right: auto;
`

const SectionTitle = styled.h2`
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.textDark};

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`

const SectionSubtitle = styled.p`
    font-size: 1.1rem;
    color: ${props => props.theme.colors.textMedium};
    line-height: 1.6;
`

const Highlight = styled.span`
    background: linear-gradient(135deg,
    ${props => props.theme.colors.primary} 0%,
    ${props => props.theme.colors.secondary} 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 700;
`

const BenefitsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 2rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
`

const BenefitCard = styled.div`
    background: ${props => props.theme.colors.white};
    border: 1px solid rgba(0,0,0,0.05);
    border-radius: 20px;
    padding: 2.5rem 2rem;
    text-align: center;
    box-shadow: 0 4px 20px rgba(0,0,0,0.04);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-6px);
        box-shadow: 0 18px 35px -10px rgba(0,0,0,0.12);
    }
`

const BenefitIcon = styled.div`
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: ${props => props.theme.colors.primary}10;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.25rem;

    svg {
        width: 28px;
        height: 28px;
        color: ${props => props.theme.colors.primary};
    }
`

const BenefitTitle = styled.h3`
    font-size: 1.35rem;
    font-weight: 800;
    color: ${props => props.theme.colors.textDark};
    margin: 0 0 0.6rem 0;
`

const BenefitDescription = styled.p`
    font-size: 0.95rem;
    color: ${props => props.theme.colors.textMedium};
    margin: 0;
    line-height: 1.5;
`

export default function TestimonialsSection() {
    return (
        <Section id="impacto"> {/* ID ESSENCIAL PARA O MENU */}
            <Container>
                <SectionHeader>
                    <SectionTitle>
                        O que muda na rotina da <Highlight>sua escola</Highlight>
                    </SectionTitle>
                    <SectionSubtitle>
                        Sem promessas de número mágico. O que o Maskot entrega é o fim do lead esquecido,
                        do atendimento lento e da captação dependente de planilhas.
                    </SectionSubtitle>
                </SectionHeader>

                <BenefitsGrid>
                    <BenefitCard>
                        <BenefitIcon>
                            <Zap />
                        </BenefitIcon>
                        <BenefitTitle>Resposta em segundos</BenefitTitle>
                        <BenefitDescription>
                            Atendimento imediato 24/7, mesmo fora do horário comercial. O primeiro a responder
                            é quem ganha a matrícula.
                        </BenefitDescription>
                    </BenefitCard>

                    <BenefitCard>
                        <BenefitIcon>
                            <Archive />
                        </BenefitIcon>
                        <BenefitTitle>100% do histórico salvo</BenefitTitle>
                        <BenefitDescription>
                            Cada conversa, visita e proposta fica registrada no funil — nada se perde quando
                            um consultor sai da equipe.
                        </BenefitDescription>
                    </BenefitCard>

                    <BenefitCard>
                        <BenefitIcon>
                            <BellRing />
                        </BenefitIcon>
                        <BenefitTitle>Zero lead sem follow-up</BenefitTitle>
                        <BenefitDescription>
                            A régua de automação cobra o retorno sozinha e lembra o consultor de agir — nenhuma
                            família esfria por esquecimento.
                        </BenefitDescription>
                    </BenefitCard>
                </BenefitsGrid>

                {/*
                  PROVA SOCIAL — DEPOIMENTOS REAIS (preencher quando disponível)
                  Estrutura pronta: ao receber citações reais (nome, cargo, escola, foto/logo),
                  trocar este bloco comentado por um grid de cards de depoimento.
                  Não publicar depoimentos fictícios.

                  Exemplo de card:
                  <TestimonialCard>
                    <Quote>"Desde que adotamos o Maskot, paramos de perder lead no WhatsApp."</Quote>
                    <Author>
                      <img src="/depoimentos/foto.jpg" alt="" />
                      <div>
                        <strong>Nome do Diretor(a)</strong>
                        <span>Cargo • Nome da Escola</span>
                      </div>
                    </Author>
                  </TestimonialCard>
                */}
            </Container>
        </Section>
    )
}
