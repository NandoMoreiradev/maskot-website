'use client'

import styled from 'styled-components'
import Image from 'next/image'
import { Quote } from 'lucide-react'

const Section = styled.section`
    padding: 4rem 0 8rem;
    background: #fff;
`

const Container = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 2rem;
`

const SplitLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;

    @media (max-width: 968px) {
        grid-template-columns: 1fr;
    }
`

const ImageWrapper = styled.div`
    position: relative;
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 20px 40px -10px rgba(0,0,0,0.15);
    min-height: 500px;
    background: #f0f0f0; // Placeholder color

    img {
        object-fit: cover;
    }
`

const TextContent = styled.div`
    h2 {
        font-size: 2rem;
        font-weight: 800;
        color: ${props => props.theme.colors.textDark};
        margin-bottom: 2rem;
        line-height: 1.2;
    }

    p {
        font-size: 1.05rem;
        color: ${props => props.theme.colors.text};
        line-height: 1.8;
        margin-bottom: 1.5rem;
    }

    strong {
        color: ${props => props.theme.colors.primary};
    }
`

const QuoteBox = styled.div`
    background: ${props => props.theme.colors.pageBackground};
    padding: 2rem;
    border-radius: 16px;
    border-left: 4px solid ${props => props.theme.colors.primary};
    margin: 2rem 0;
    
    p {
        font-style: italic;
        font-size: 1.1rem;
        color: ${props => props.theme.colors.textDark};
        margin: 0;
    }
    
    span {
        display: block;
        margin-top: 1rem;
        font-size: 0.9rem;
        font-weight: 700;
        color: ${props => props.theme.colors.textMedium};
    }
`

export default function FounderStory() {
    return (
        <Section>
            <Container>
                <SplitLayout>
                    <ImageWrapper>
                        {/* Substitua por uma foto sua ou de ambiente escolar */}
                        <Image
                            src="/founder-working.jpg"
                            alt="Fundador trabalhando em escola"
                            fill
                            style={{objectFit: 'cover'}}
                        />
                        {/* Fallback visual se não tiver imagem ainda */}
                        <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #007BFF 0%, #0056b3 100%)', opacity: 0.1}}></div>
                    </ImageWrapper>

                    <TextContent>
                        <h2>Eu sei o que é perder uma matrícula porque a mensagem ficou perdida no WhatsApp.</h2>

                        <p>
                            Durante anos, atuei no setor de marketing de uma escola particular. Minha rotina? Um caos controlado.
                            Eu tinha 15 abas abertas no navegador: planilha de interessados, agenda do Google, WhatsApp Web travando, sistema financeiro e e-mail.
                        </p>

                        <p>
                            Eu via o esforço da equipe pedagógica, o carinho com os alunos, mas na hora da captação,
                            <strong>nós falhávamos por falta de organização</strong>.
                        </p>

                        <p>
                            Eu sabia que o pai "X" tinha ligado semana passada, mas ninguém lembrava de retornar.
                            Eu sabia que a mãe "Y" queria visitar, mas a agenda de papel sumiu.
                        </p>

                        <QuoteBox>
                            <Quote size={32} color="#007BFF" style={{marginBottom: '10px'}} />
                            <p>"Procurei CRMs no mercado. Ou eram complexos demais (feitos para vender software, não matrícula) ou eram caros demais. A escola precisava de algo que falasse a nossa língua."</p>
                            <span>— Fundador do Maskot</span>
                        </QuoteBox>

                        <p>
                            Foi aí que decidi criar o Maskot. Não como um programador que acha que sabe o que você precisa,
                            mas como <strong>alguém que já sentiu a sua dor de perder aluno</strong>.
                        </p>

                        <p>
                            O Maskot é a ferramenta que eu gostaria de ter tido naquela época. Simples, integrada e focada 100% em escolas.
                        </p>
                    </TextContent>
                </SplitLayout>
            </Container>
        </Section>
    )
}