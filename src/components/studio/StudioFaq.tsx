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
    border: 1px solid ${props => props.$open ? '#CA8A0466' : props.theme.colors.borderLight};
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
        background: #FFFBEB;
        color: #A16207;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease;
    }

    &:hover .icon {
        background: #FEF3C7;
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
        q: 'Qual é a diferença entre o Maskot Edu e o Maskot Studio?',
        a: 'O Maskot Edu é o software: CRM, WhatsApp oficial, campanhas e a Mia, a IA do Maskot. O Maskot Studio é o serviço de marketing da mesma equipe, para um grupo seleto de escolas. Usamos o Maskot Edu no nosso dia a dia, e é isso que nos permite medir o resultado até a matrícula.',
    },
    {
        q: 'Para que tipo de escola o Maskot Studio é indicado?',
        a: 'Para escolas particulares de grande porte, com posicionamento de alto padrão e uma direção envolvida no processo de matrículas. Se a sua escola é menor, o Maskot Edu continua sendo uma ótima forma de organizar a captação, e você pode conhecer o software direto no site.',
    },
    {
        q: 'A escola precisa ser cliente do Maskot Edu?',
        a: 'Sim. O atendimento, o funil de matrículas e os relatórios rodam no Maskot Edu, e é isso que nos permite acompanhar cada família do anúncio até a matrícula e informar o custo por matrícula. Se a sua escola ainda não usa o sistema, a implantação do Maskot Edu faz parte do início da parceria.',
    },
    {
        q: 'Por que atendem no máximo 15 escolas?',
        a: 'Porque o trabalho exige atenção. Cada escola recebe estratégia, execução e acompanhamento próprios, e a nossa equipe precisa conhecer a fundo cada operação. Limitar o número de escolas é o que mantém a qualidade da entrega.',
    },
    {
        q: 'O que significa uma escola por região e segmento?',
        a: 'Se aceitarmos a sua escola, não atendemos outra escola concorrente direta, na mesma região e no mesmo segmento de ensino. A estratégia, os dados e os aprendizados da sua campanha ficam com você. Quando já houver uma escola atendida na sua região e segmento, avisamos com transparência.',
    },
    {
        q: 'Como o resultado é medido?',
        a: 'Pelo funil inteiro: lead, atendimento, visita agendada, visita realizada e matrícula. O número que importa é o custo por matrícula, e não o custo por lead. A direção acompanha o painel e revisamos os números juntos em uma reunião mensal.',
    },
    {
        q: 'Vocês prometem um número de matrículas?',
        a: 'Não. Matrícula depende de fatores que não controlamos sozinhos, como a proposta pedagógica, o preço e a concorrência da região. O que garantimos é um processo claro, uma execução cuidadosa e total transparência sobre o que está funcionando e o que não está.',
    },
    {
        q: 'Quanto custa?',
        a: 'O investimento depende do programa, do porte da escola e da região, e é apresentado depois da conversa e do diagnóstico. O valor investido em mídia paga, quando houver, é separado do honorário do Maskot Studio.',
    },
    {
        q: 'Marketing de escola não é só na época de matrículas?',
        a: 'Não, e esse é um dos erros mais comuns. A família pesquisa, compara e visita a escola durante o ano inteiro, e a reputação, o Google e o relacionamento com quem ainda não decidiu se constroem fora da campanha. A campanha de matrículas tem o seu pico, mas o trabalho do Maskot Studio acompanha o ano letivo inteiro, com o funil e o atendimento ativos o tempo todo.',
    },
    {
        q: 'Ainda dá tempo de começar para as matrículas de 2027?',
        a: 'A janela de captação de 2027 já está aberta, então o mais realista para este ciclo é começar pela rematrícula e pela captação tardia. Aproveitamos esse período para entender a escola e preparar, com calma, o ciclo completo de 2028.',
    },
    {
        q: 'Atendem escolas de outros estados? Vocês gravam vídeos na escola?',
        a: 'Atendemos escolas de qualquer estado, porque o trabalho é feito à distância, com reuniões por vídeo e o funil acompanhado no Maskot Edu. Não fazemos produção presencial. Para conteúdo em vídeo e fotos, entregamos roteiro e guia de captação, a escola (ou um profissional de confiança dela) grava, e nós cuidamos da edição, do design e da publicação.',
    },
    {
        q: 'Quem executa o trabalho?',
        a: 'A equipe do Maskot Edu. Estratégia, tráfego, criação e atendimento são feitos por profissionais do nosso time, sem terceirizar a execução para outra agência.',
    },
]

export default function StudioFaq() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <Section id="duvidas">
            <Container $maxWidth="820px">
                <SectionHeader $maxWidth="100%" $marginBottom="3.5rem">
                    <Eyebrow>Dúvidas frequentes</Eyebrow>
                    <SectionTitle>Dúvidas sobre o Maskot Studio</SectionTitle>
                    <SectionSubtitle>
                        As perguntas que a direção costuma fazer antes de começar a conversa.
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
