'use client'

import { useState } from 'react'
import styled from 'styled-components'
import { Plus, Minus } from 'lucide-react'

const Section = styled.section`
    padding: 6rem 0;
    background: ${props => props.theme.colors.white};
`

const Container = styled.div`
    max-width: 820px;
    margin: 0 auto;
    padding: 0 2rem;
`

const SectionHeader = styled.div`
    text-align: center;
    margin-bottom: 3.5rem;
`

const Eyebrow = styled.div`
    display: inline-block;
    background: ${props => props.theme.colors.primary}12;
    color: ${props => props.theme.colors.primary};
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: 0.4rem 0.9rem;
    border-radius: 100px;
    margin-bottom: 1rem;
`

const SectionTitle = styled.h2`
    font-size: 2.5rem;
    font-weight: 800;
    color: ${props => props.theme.colors.textDark};
    margin-bottom: 1rem;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`

const SectionSubtitle = styled.p`
    font-size: 1.1rem;
    color: ${props => props.theme.colors.textMedium};
    line-height: 1.6;
`

const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const Item = styled.div<{ $open: boolean }>`
    border: 1px solid ${props => props.$open ? props.theme.colors.primary + '40' : props.theme.colors.borderLight};
    border-radius: 14px;
    background: ${props => props.$open ? props.theme.colors.lightGray : props.theme.colors.white};
    overflow: hidden;
    transition: border-color 0.25s ease, background 0.25s ease;
`

const Question = styled.button`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    text-align: left;
    background: none;
    border: none;
    cursor: pointer;
    padding: 1.35rem 1.5rem;
    font-size: 1.05rem;
    font-weight: 700;
    color: ${props => props.theme.colors.textDark};
    font-family: inherit;

    .icon {
        flex-shrink: 0;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: ${props => props.theme.colors.primary}12;
        color: ${props => props.theme.colors.primary};
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

const Answer = styled.div<{ $open: boolean }>`
    display: grid;
    grid-template-rows: ${props => props.$open ? '1fr' : '0fr'};
    transition: grid-template-rows 0.3s ease;

    .inner {
        overflow: hidden;
    }

    p {
        padding: 0 1.5rem 1.4rem;
        margin: 0;
        font-size: 0.98rem;
        color: ${props => props.theme.colors.textMedium};
        line-height: 1.65;
    }
`

const faqs = [
    {
        q: 'Preciso trocar o número de WhatsApp da minha escola?',
        a: 'Não precisa começar do zero. O Maskot opera com a API Oficial do WhatsApp (Meta) e a equipe ajuda na migração do seu número atual sempre que possível, mantendo a identidade que as famílias já conhecem.',
    },
    {
        q: 'Vocês migram meus contatos e leads que estão em planilhas?',
        a: 'Sim. Durante o onboarding guiado, importamos seus contatos e leads atuais (de planilhas ou outras ferramentas) para dentro do funil, para você não perder nenhum histórico.',
    },
    {
        q: 'Quanto tempo leva para implantar e começar a usar?',
        a: 'A configuração inicial é rápida e acompanhada por um especialista. A maioria das escolas começa a atender pelo Maskot já nos primeiros dias, com o funil e as automações ativados passo a passo.',
    },
    {
        q: 'Os dados da minha escola e das famílias estão seguros? (LGPD)',
        a: 'Sim. Os dados ficam isolados por escola e o tratamento segue as diretrizes da LGPD. Você controla quem da equipe acessa o quê, com permissões granulares e registro de auditoria.',
    },
    {
        q: 'Funciona com a minha equipe atual? Quantos usuários posso ter?',
        a: 'Funciona com toda a equipe comercial e a secretaria. Vários atendentes operam o mesmo número oficial, com distribuição de conversas e controle de acesso. O número de usuários varia conforme o plano escolhido.',
    },
    {
        q: 'É a API Oficial mesmo? Tenho risco de ter o número bloqueado?',
        a: 'É a API Oficial da Meta. Isso significa envio de campanhas e mensagens dentro das regras da plataforma, com muito menos risco de bloqueio do que chips comuns ou ferramentas não oficiais.',
    },
    {
        q: 'Como funciona a cobrança? Tem fidelidade?',
        a: 'Os planos são flexíveis e pensados para se pagarem com poucas matrículas. Fale com um consultor para montar a combinação ideal de CRM e add-ons de WhatsApp e IA para o tamanho da sua escola.',
    },
]

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <Section id="faq">
            <Container>
                <SectionHeader>
                    <Eyebrow>Dúvidas frequentes</Eyebrow>
                    <SectionTitle>Ainda com dúvidas?</SectionTitle>
                    <SectionSubtitle>
                        As perguntas que todo diretor faz antes de organizar a captação da escola.
                    </SectionSubtitle>
                </SectionHeader>

                <List>
                    {faqs.map((faq, i) => {
                        const open = openIndex === i
                        return (
                            <Item key={faq.q} $open={open}>
                                <Question
                                    onClick={() => setOpenIndex(open ? null : i)}
                                    aria-expanded={open}
                                >
                                    {faq.q}
                                    <span className="icon">
                                        {open ? <Minus size={18} /> : <Plus size={18} />}
                                    </span>
                                </Question>
                                <Answer $open={open}>
                                    <div className="inner">
                                        <p>{faq.a}</p>
                                    </div>
                                </Answer>
                            </Item>
                        )
                    })}
                </List>
            </Container>
        </Section>
    )
}
