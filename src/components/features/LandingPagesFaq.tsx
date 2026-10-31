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
    border: 1px solid ${props => (props.$open ? '#7C3AED66' : props.theme.colors.borderLight)};
    border-radius: 12px;
    background: ${props => props.theme.colors.white};
    box-shadow: ${props => (props.$open ? props.theme.shadows.sm : 'none')};
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
        background: #F5F3FF;
        color: #7C3AED;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease;
    }

    &:hover .icon {
        background: #EDE9FE;
    }
`

const Answer = styled.div<{ $open: boolean }>`
    display: grid;
    grid-template-rows: ${props => (props.$open ? '1fr' : '0fr')};
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
        q: 'Preciso saber programar para criar uma landing page com a Mia?',
        a: 'Não. Você descreve em português o que a escola quer divulgar e a Mia escreve a página. Se a sua equipe tiver conhecimento técnico, pode abrir a aba Código para ajustar à mão, mas isso é opcional.',
    },
    {
        q: 'A Mia pode inventar preços, números ou depoimentos?',
        a: 'Ela é orientada a usar apenas o que a escola informou: o Brand Kit, a base de conhecimento e o que você escrever no pedido. Valores e percentuais que não estão nesses dados aparecem como aviso para você conferir, e as imagens só vêm de endereços informados, como a logo da escola. Mesmo assim, você revisa tudo antes de publicar.',
    },
    {
        q: 'Os contatos e as visitas vão para o CRM?',
        a: 'Sim. Cada formulário enviado vira um lead no funil, com a origem da campanha (UTM, Google e Meta). Quando a página tem agendamento, a visita é reservada de verdade na agenda da escola, com anfitrião e tipo de visita, e o lead entra no funil junto.',
    },
    {
        q: 'Posso usar os formulários, as pesquisas e a agenda que já configurei?',
        a: 'Sim. A Mia usa os formulários públicos e as pesquisas ativas da escola, as origens de lead cadastradas e a agenda de visitas já configurada. Se você mudar algo no cadastro, a página acompanha, porque lê esses dados em vez de guardar uma cópia.',
    },
    {
        q: 'Qual é a diferença entre o editor visual e a criação com a Mia?',
        a: 'No editor visual você arrasta blocos prontos e decide cada detalhe. Com a Mia, você descreve o que quer e ajusta conversando, e o layout é livre, sem o limite de blocos. Os dois podem ser usados na mesma escola, e a Mia também ajusta as páginas feitas no editor visual.',
    },
    {
        q: 'A página é segura? O código pode afetar o sistema?',
        a: 'A página criada em código roda isolada do Maskot e sem acesso livre à internet. O envio de contatos, a agenda e as pesquisas passam por canais controlados do sistema, e o código gerado passa por uma limpeza antes de ser salvo. Nada vai ao ar sem a sua revisão.',
    },
    {
        q: 'Existe limite de uso da Mia nas landing pages?',
        a: 'Cada plano inclui uma franquia mensal de pedidos à Mia. Cada pedido que cria ou ajusta a página conta uma vez; perguntas e a edição manual do código não contam. O administrador é avisado ao chegar em 80% e 100% da franquia e, esgotada, a equipe continua editando o código à mão até o próximo ciclo.',
    },
    {
        q: 'Em quais planos está disponível?',
        a: 'A criação de landing pages com a Mia está disponível a partir do plano Crescimento, que inclui as landing pages e a Mia. Veja os detalhes de cada plano na seção de preços.',
    },
    {
        q: 'Posso publicar no domínio da escola e acompanhar os resultados?',
        a: 'Sim. As páginas em código têm domínio próprio, título e descrição para o Google, publicação agendada, histórico de versões, e conversões acompanhadas com Google Analytics e Meta Pixel, respeitando o consentimento de cookies do visitante.',
    },
]

export default function LandingPagesFaq() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <Section id="duvidas">
            <Container $maxWidth="820px">
                <SectionHeader $maxWidth="100%" $marginBottom="3.5rem">
                    <Eyebrow>Dúvidas frequentes</Eyebrow>
                    <SectionTitle>Dúvidas sobre criar landing pages com a Mia</SectionTitle>
                    <SectionSubtitle>
                        As perguntas que a equipe das escolas mais faz antes de começar.
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
