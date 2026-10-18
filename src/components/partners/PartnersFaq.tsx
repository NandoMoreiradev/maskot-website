'use client'

import { useState } from 'react'
import styled from 'styled-components'
import { Plus, Minus } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeader, Eyebrow, SectionTitle, SectionSubtitle } from '@/components/ui/SectionHeading'

const Section = styled.section`
    padding: 4.5rem 0;
    background: #F8FAFC;
`

const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`

const Item = styled.div<{ $open: boolean }>`
    border: 1px solid ${props => props.$open ? props.theme.colors.primary + '40' : props.theme.colors.borderLight};
    border-radius: 12px;
    background: ${props => props.theme.colors.white};
    box-shadow: ${props => props.$open ? props.theme.shadows.sm : 'none'};
    overflow: hidden;
    transition: all 0.25s ease;
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
    padding: 1.15rem 1.25rem;
    font-size: 1rem;
    font-weight: 700;
    color: ${props => props.theme.colors.textDark};
    font-family: inherit;

    .icon {
        flex-shrink: 0;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background: ${props => props.theme.colors.primary}10;
        color: ${props => props.theme.colors.primary};
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease;
    }

    &:hover .icon {
        background: ${props => props.theme.colors.primary}20;
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
        padding: 0 1.25rem 1.15rem;
        margin: 0;
        font-size: 0.95rem;
        color: ${props => props.theme.colors.textMedium};
        line-height: 1.6;
    }
`

const faqs = [
    {
        q: 'Quem pode ser parceiro do Maskot Edu?',
        a: 'Agências de marketing, consultorias e assessorias educacionais, sistemas de ensino, editoras e empresas de tecnologia ou serviços que atendem escolas particulares e querem recomendar o Maskot Edu. Não é preciso ser cliente nem usar o sistema para participar.',
    },
    {
        q: 'Quanto eu ganho por escola indicada?',
        a: 'A comissão incide sobre o primeiro pagamento da escola e sobre as mensalidades seguintes, durante um período definido em acordo. Os percentuais, o prazo e as faixas por volume são conversados caso a caso e ficam registrados no acordo de parceria. Fale com a nossa equipe para conhecer as condições.',
    },
    {
        q: 'Sobre o que a comissão é calculada?',
        a: 'Sobre as mensalidades do plano e dos módulos que a escola contrata, já com os descontos aplicados. Implantação e itens avulsos não entram na base de cálculo.',
    },
    {
        q: 'Quando a comissão é gerada?',
        a: 'Quando a Maskot recebe o pagamento da escola. Se a escola atrasar, a comissão espera o pagamento; se houver estorno, a comissão correspondente é ajustada. Tudo aparece no seu portal, com a origem de cada lançamento.',
    },
    {
        q: 'E se outra empresa indicar a mesma escola?',
        a: 'Vale a primeira indicação validada pela nossa equipe. Depois da validação, a escola fica reservada para você por um prazo. Se ela contratar nesse período, a comissão é sua; sem a contratação, a reserva termina e a escola volta a ficar livre.',
    },
    {
        q: 'Posso indicar uma escola que já está conversando com a Maskot?',
        a: 'Escola que já é cliente não pode ser indicada, e você é avisado. Se a escola já estiver em conversa com a nossa equipe comercial, a indicação passa por análise e a decisão é registrada. Por isso, indique o quanto antes, assim que tiver o contato.',
    },
    {
        q: 'Como e quando eu recebo?',
        a: 'Os lançamentos do mês são reunidos em um repasse, com extrato detalhado para baixar. Você registra a sua nota fiscal no portal e o pagamento é feito por Pix. O portal mostra a situação de cada repasse, do fechamento ao pagamento.',
    },
    {
        q: 'Eu preciso apresentar o sistema ou dar suporte para a escola?',
        a: 'Não. A apresentação, a contratação e a implantação ficam com a equipe da Maskot. O seu papel é indicar a escola e, se quiser, apoiar a conversa com quem você já tem relação.',
    },
    {
        q: 'Quantas pessoas da minha empresa podem acessar o portal?',
        a: 'Hoje cada parceiro tem um acesso ao portal, com login e senha próprios, enviado por e-mail depois do cadastro. Se a sua equipe precisar de mais acessos, fale com a gente.',
    },
]

export default function PartnersFaq() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <Section id="duvidas">
            <Container $maxWidth="820px">
                <SectionHeader $maxWidth="100%" $marginBottom="3.5rem">
                    <Eyebrow>Dúvidas frequentes</Eyebrow>
                    <SectionTitle>Dúvidas sobre o programa</SectionTitle>
                    <SectionSubtitle>
                        As perguntas que toda agência e consultoria faz antes de virar parceira.
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
