'use client'

import styled from 'styled-components'
import Image from 'next/image'
import { Quote, Sparkles } from 'lucide-react'

const Section = styled.section`
    padding: 5rem 0 7rem;
    background: #FFFFFF;
    border-top: 1px solid #F1F5F9;
`

const Container = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 2rem;
`

const SplitLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 1.15fr;
    gap: 4.5rem;
    align-items: center;

    @media (max-width: 968px) {
        grid-template-columns: 1fr;
        gap: 3rem;
    }
`

const ImageWrapper = styled.div`
    position: relative;
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 20px 40px -10px rgba(0,0,0,0.08);
    border: 1px solid #E2E8F0;
    min-height: 520px;
    background: #F8FAFC;

    img {
        object-fit: cover;
    }

    .badge-founder {
        position: absolute;
        bottom: 20px;
        left: 20px;
        right: 20px;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(8px);
        border: 1px solid #E2E8F0;
        border-radius: 14px;
        padding: 0.85rem 1.25rem;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 8px;
            background: #EFF6FF;
            color: #2563EB;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        }

        .name {
            font-size: 0.95rem;
            font-weight: 800;
            color: #0F172A;
            line-height: 1.2;
        }

        .role {
            font-size: 0.75rem;
            color: #64748B;
            font-weight: 500;
        }
    }
`

const TextContent = styled.div`
    h2 {
        font-size: 2.25rem;
        font-weight: 800;
        color: #0F172A;
        margin-bottom: 2rem;
        line-height: 1.25;
        letter-spacing: -0.02em;
    }

    p {
        font-size: 1.05rem;
        color: #475569;
        line-height: 1.8;
        margin-bottom: 1.5rem;
    }

    strong {
        color: #0F172A;
        font-weight: 700;
    }
`

const QuoteBox = styled.div`
    background: #F8FAFC;
    padding: 2rem;
    border-radius: 16px;
    border: 1px solid #E2E8F0;
    border-left: 4px solid #2563EB;
    margin: 2rem 0;
    
    p {
        font-style: italic;
        font-size: 1.1rem;
        color: #1E293B;
        line-height: 1.7;
        margin: 0;
    }
    
    span {
        display: block;
        margin-top: 1rem;
        font-size: 0.85rem;
        font-weight: 700;
        color: #2563EB;
    }
`

export default function FounderStory() {
    return (
        <Section>
            <Container>
                <SplitLayout>
                    <ImageWrapper>
                        <Image
                            src="/fernando_moreira.png"
                            alt="Fernando Moreira - Fundador do Maskot"
                            fill
                            priority
                            style={{ objectFit: 'cover' }}
                        />
                        <div className="badge-founder">
                            <div className="icon">
                                <Sparkles size={18} />
                            </div>
                            <div>
                                <div className="name">Fernando Moreira</div>
                                <div className="role">Fundador & CEO do Maskot Edu</div>
                            </div>
                        </div>
                    </ImageWrapper>

                    <TextContent>
                        <h2>Eu sei o que é perder uma matrícula porque a mensagem ficou esquecida no WhatsApp.</h2>

                        <p>
                            Durante anos, atuei no setor comercial e de marketing de uma escola particular. Minha rotina? Um verdadeiro caos.
                            Eu tinha 15 abas abertas no navegador: planilha de interessados, agenda física desatualizada, WhatsApp Web travando, sistema de cobrança e e-mails acumulados.
                        </p>

                        <p>
                            Eu via o esforço diário da equipe pedagógica e o carinho com os alunos, mas na hora de acolher novas famílias e fechar contratos,
                            <strong> nós falhávamos por falta de ferramentas adequadas</strong>.
                        </p>

                        <p>
                            Eu sabia que o pai interessado tinha ligado na semana anterior, mas ninguém lembrava de retornar.
                            Eu sabia que uma mãe queria visitar o colégio, mas o bilhete em cima da mesa da secretaria sumiu.
                        </p>

                        <QuoteBox>
                            <Quote size={28} color="#2563EB" style={{ marginBottom: '12px' }} />
                            <p>Procurei CRMs no mercado. Ou eram genéricos demais (feitos para vender software corporativo, não matrícula escolar) ou custavam fortunas impraticáveis. A escola precisava de algo que falasse a nossa língua.</p>
                            <span>— Fernando Moreira • Fundador do Maskot Edu</span>
                        </QuoteBox>

                        <p>
                            Foi aí que decidi criar o Maskot Edu. Não como um desenvolvedor distante que acha que sabe o que uma escola precisa,
                            mas como <strong>alguém que viveu na pele a frustração de perder alunos para a desorganização</strong>.
                        </p>

                        <p>
                            O Maskot é exatamente a plataforma que eu gostaria de ter tido naquela época: simples, integrada ao WhatsApp e 100% pensada para o calendário das escolas.
                        </p>
                    </TextContent>
                </SplitLayout>
            </Container>
        </Section>
    )
}