'use client'

import styled, { css, keyframes } from 'styled-components'
import {
    LayoutTemplate, MousePointer2, Blocks, Palette,
    Users, Link2, CalendarCheck, Megaphone,
    Clock, Star, MessageCircleQuestion, Share2,
    Smartphone, Zap, Search, ShieldCheck
} from 'lucide-react'

const float = keyframes`
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
`

const pulse = keyframes`
    0% { box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.4); }
    70% { box-shadow: 0 0 0 10px rgba(139, 92, 246, 0); }
    100% { box-shadow: 0 0 0 0 rgba(139, 92, 246, 0); }
`

const Section = styled.section`
    padding: 4rem 0 6rem;
    background: ${props => props.theme.colors.pageBackground};
    overflow: hidden;
`

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
`

const SplitLayout = styled.div<{ $reverse?: boolean }>`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    align-items: center;
    margin-bottom: 8rem;

    @media (max-width: ${props => props.theme.breakpoints.lg}) {
        grid-template-columns: 1fr;
        gap: 3rem;
        display: flex;
        flex-direction: column-reverse;
        ${props => !props.$reverse && 'flex-direction: column;'}
    }
`

const TextContent = styled.div`
    h3 {
        font-size: 2rem;
        font-weight: 800;
        color: ${props => props.theme.colors.textDark};
        margin-bottom: 1rem;
        line-height: 1.2;
    }

    p {
        font-size: 1.1rem;
        color: ${props => props.theme.colors.textMedium};
        line-height: 1.6;
        margin-bottom: 2rem;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    li {
        display: flex;
        align-items: center;
        gap: 1rem;
        font-weight: 500;
        color: ${props => props.theme.colors.textDark};

        svg {
            color: #8B5CF6; /* Roxo para destaque */
            flex-shrink: 0;
        }
    }
`

const BuilderMockup = styled.div`
    background: #1E293B;
    border-radius: 16px;
    border: 8px solid #0F172A;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    overflow: hidden;
    display: flex;
    height: 400px;
`

const Sidebar = styled.div`
    width: 80px;
    background: #0F172A;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem 0;
    gap: 1.5rem;
    border-right: 1px solid #334155;

    .icon-btn {
        width: 40px;
        height: 40px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #94A3B8;
        cursor: pointer;
        transition: 0.2s;

        &:hover, &.active {
            background: #8B5CF6;
            color: white;
        }
    }
`

const Canvas = styled.div`
    flex: 1;
    background: #F1F5F9;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow-y: hidden;
`

const BlockMock = styled.div<{ $type?: 'hero' | 'form' | 'countdown' }>`
    background: white;
    border-radius: 8px;
    border: 2px dashed #CBD5E1;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #64748B;
    font-size: 0.875rem;
    font-weight: 600;
    min-height: 80px;
    transition: 0.2s;
    cursor: grab;

    &:hover {
        border-color: #8B5CF6;
        color: #8B5CF6;
        background: #F5F3FF;
    }

    ${props => props.$type === 'hero' && css`
        min-height: 120px;
        background: #E0E7FF;
        border-style: solid;
        border-color: #C7D2FE;
        color: #4F46E5;
    `}

    ${props => props.$type === 'form' && css`
        min-height: 100px;
        background: #DCFCE7;
        border-style: solid;
        border-color: #BBF7D0;
        color: #16A34A;
    `}
`

const FloatingWidget = styled.div`
    position: absolute;
    background: white;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    bottom: -20px;
    right: -20px;
    border: 1px solid #E2E8F0;
    animation: ${float} 5s ease-in-out infinite;

    .header {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 12px;
        color: #0F172A;
        font-weight: 700;

        svg { color: #8B5CF6; }
    }

    .time {
        display: flex;
        gap: 8px;
        
        span {
            background: #F1F5F9;
            padding: 8px 12px;
            border-radius: 6px;
            font-weight: 800;
            color: #1E293B;
            font-size: 1.2rem;
            min-width: 45px;
            text-align: center;
        }
    }
`

const BenefitList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`

const BenefitItem = styled.div`
    display: flex;
    gap: 1rem;
    align-items: flex-start;

    .icon {
        width: 24px;
        height: 24px;
        color: #EC4899;
        flex-shrink: 0;
        margin-top: 2px;
    }

    div {
        h4 {
            font-size: 1.1rem;
            font-weight: 700;
            color: ${props => props.theme.colors.textDark};
            margin-bottom: 0.25rem;
        }

        p {
            font-size: 0.95rem;
            color: ${props => props.theme.colors.textMedium};
            margin: 0;
        }
    }
`

const FeatureGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;

    @media (max-width: ${props => props.theme.breakpoints.lg}) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${props => props.theme.breakpoints.sm}) {
        grid-template-columns: 1fr;
    }
`

const FeatureCard = styled.div`
    background: #F8F9FA;
    padding: 2rem;
    border-radius: 16px;
    border: 1px solid ${(props) => (props.theme.colors as unknown as { borderLight?: string }).borderLight || '#DEE2E6'};
    transition: all 0.3s ease;

    &:hover {
        background: #fff;
        box-shadow: 0 10px 30px rgba(139, 92, 246, 0.1);
        transform: translateY(-5px);
        border-color: #8B5CF6;
    }

    .icon {
        width: 48px;
        height: 48px;
        background: #fff;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #8B5CF6;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        margin-bottom: 1.5rem;
    }

    h4 {
        font-size: 1.1rem;
        font-weight: 700;
        color: ${props => props.theme.colors.textDark};
        margin-bottom: 0.75rem;
    }

    p {
        font-size: 0.9rem;
        color: ${props => props.theme.colors.textMedium};
        line-height: 1.5;
        margin: 0;
    }
`

const FormMockup = styled.div`
    background: white;
    padding: 2rem;
    border-radius: 16px;
    box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.1);
    max-width: 360px;
    margin: 0 auto;
    border: 1px solid #E2E8F0;

    .title {
        font-weight: 800;
        color: #1E293B;
        margin-bottom: 1rem;
        font-size: 1.2rem;
        text-align: center;
    }

    .input-group {
        margin-bottom: 1rem;
        
        .label {
            height: 8px;
            width: 40%;
            background: #E2E8F0;
            border-radius: 4px;
            margin-bottom: 8px;
        }

        .input {
            height: 40px;
            background: #F8FAFC;
            border: 1px solid #CBD5E1;
            border-radius: 8px;
        }
    }

    .btn {
        background: #22C55E;
        height: 44px;
        border-radius: 8px;
        width: 100%;
        margin-top: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
        animation: ${pulse} 2s infinite;
    }
`

export default function LandingPagesDeepDive() {
    return (
        <Section>
            <Container>
                {/* BLOCO 1: CONSTRUTOR ARRASTE E SOLTE */}
                <SplitLayout>
                    <TextContent>
                        <h3>Arraste, Solte e <br />Publique</h3>
                        <p>
                            Não dependa mais de programadores ou agências para criar páginas de campanha. 
                            Nosso construtor visual permite montar landing pages completas em minutos.
                        </p>
                        <ul>
                            <li><LayoutTemplate size={20}/> <strong>Blocos Prontos:</strong> Heros, Colunas, Galerias e Faixas.</li>
                            <li><Palette size={20}/> <strong>Customizável:</strong> Altere cores, fontes e backgrounds facilmente.</li>
                            <li><MousePointer2 size={20}/> <strong>Nenhuma linha de código:</strong> Arraste o que precisa e veja o resultado ao vivo.</li>
                        </ul>
                    </TextContent>

                    <div style={{ position: 'relative' }}>
                        <BuilderMockup>
                            <Sidebar>
                                <div className="icon-btn active"><Blocks size={20}/></div>
                                <div className="icon-btn"><LayoutTemplate size={20}/></div>
                                <div className="icon-btn"><Palette size={20}/></div>
                            </Sidebar>
                            <Canvas>
                                <BlockMock $type="hero">Hero Block (Capa)</BlockMock>
                                <BlockMock $type="form">Formulário de Captação</BlockMock>
                                <BlockMock>Arraste novos blocos aqui...</BlockMock>
                            </Canvas>
                        </BuilderMockup>

                        <FloatingWidget>
                            <div className="header">
                                <Clock size={16} /> Oferta Expira Em:
                            </div>
                            <div className="time">
                                <span>02</span>:<span>45</span>:<span>10</span>
                            </div>
                        </FloatingWidget>
                    </div>
                </SplitLayout>

                {/* BLOCO 2: FOCO EM CONVERSÃO */}
                <SplitLayout $reverse>
                    <FormMockup>
                        <div className="title">Matrículas Abertas</div>
                        <div className="input-group">
                            <div className="label"></div>
                            <div className="input"></div>
                        </div>
                        <div className="input-group">
                            <div className="label"></div>
                            <div className="input"></div>
                        </div>
                        <div className="btn">Garantir Vaga</div>
                    </FormMockup>

                    <TextContent>
                        <h3>Formulários Conectados <br />ao seu CRM</h3>
                        <p>
                            O verdadeiro poder está na integração. Qualquer lead que preencher um formulário na sua 
                            Landing Page cai instantaneamente no funil de vendas do Maskot, pronto para ser atendido.
                        </p>
                        <BenefitList>
                            <BenefitItem>
                                <Users className="icon"/>
                                <div>
                                    <h4>Captura de Leads Automática</h4>
                                    <p>Oportunidades criadas na etapa correta do pipeline sem digitação manual.</p>
                                </div>
                            </BenefitItem>
                            <BenefitItem>
                                <CalendarCheck className="icon"/>
                                <div>
                                    <h4>Agendamento de Visitas</h4>
                                    <p>Incorpore sua agenda diretamente na página para os pais marcarem horários.</p>
                                </div>
                            </BenefitItem>
                            <BenefitItem>
                                <MessageCircleQuestion className="icon"/>
                                <div>
                                    <h4>Botão de WhatsApp</h4>
                                    <p>Um clique e o pai já está falando com a sua secretaria via WhatsApp Web.</p>
                                </div>
                            </BenefitItem>
                        </BenefitList>
                    </TextContent>
                </SplitLayout>

                {/* BLOCO 3: GATILHOS MENTAIS */}
                <SplitLayout>
                    <TextContent>
                        <h3>Urgência e Prova Social</h3>
                        <p>
                            Para matricular mais, você precisa de elementos que convençam os pais. Nossas páginas 
                            possuem blocos focados em gatilhos mentais.
                        </p>
                        <ul>
                            <li><Clock size={20}/> <strong>Contadores Regressivos:</strong> Crie escassez real para campanhas de matrícula.</li>
                            <li><Star size={20}/> <strong>Depoimentos:</strong> Mostre o que outros pais falam da sua escola.</li>
                            <li><Megaphone size={20}/> <strong>Estatísticas e FAQs:</strong> Quebre objeções e mostre números de aprovação.</li>
                        </ul>
                    </TextContent>
                    
                    <div style={{ background: '#F8FAFC', padding: '3rem', borderRadius: '24px', border: '1px solid #E2E8F0', textAlign: 'center' }}>
                        <div style={{ display: 'inline-flex', gap: '8px', color: '#F59E0B', marginBottom: '1rem' }}>
                            <Star fill="currentColor" />
                            <Star fill="currentColor" />
                            <Star fill="currentColor" />
                            <Star fill="currentColor" />
                            <Star fill="currentColor" />
                        </div>
                        <p style={{ fontSize: '1.2rem', fontStyle: 'italic', color: '#334155', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                            "A melhor escolha que fizemos para nosso filho. A estrutura da escola é impecável e o 
                            atendimento da equipe nos passou muita segurança desde o primeiro dia."
                        </p>
                        <strong style={{ color: '#0F172A' }}>Maria Silva</strong>
                        <div style={{ color: '#64748B', fontSize: '0.9rem' }}>Mãe do Pedro (2º Ano)</div>
                    </div>
                </SplitLayout>

                {/* BLOCO 4: GRID DE BENEFÍCIOS */}
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#333' }}>Tecnologia de Ponta</h3>
                    <p style={{ color: '#666' }}>Páginas rápidas, seguras e prontas para rodar anúncios.</p>
                </div>

                <FeatureGrid>
                    <FeatureCard>
                        <div className="icon"><Smartphone size={24}/></div>
                        <h4>Mobile First</h4>
                        <p>Mais de 80% dos acessos vêm do celular. Nossas páginas se adaptam perfeitamente a qualquer tela.</p>
                    </FeatureCard>

                    <FeatureCard>
                        <div className="icon"><Zap size={24}/></div>
                        <h4>Carregamento Rápido</h4>
                        <p>Otimizadas para carregar em milissegundos, evitando que o pai desista antes de ver sua oferta.</p>
                    </FeatureCard>

                    <FeatureCard>
                        <div className="icon"><Search size={24}/></div>
                        <h4>Otimizadas para SEO</h4>
                        <p>Tags corretas, meta-descriptions e estrutura limpa para o Google encontrar sua escola.</p>
                    </FeatureCard>

                    <FeatureCard>
                        <div className="icon"><ShieldCheck size={24}/></div>
                        <h4>Domínio Próprio</h4>
                        <p>Publique as páginas com o seu próprio endereço web, garantindo autoridade para sua marca.</p>
                    </FeatureCard>
                </FeatureGrid>

            </Container>
        </Section>
    )
}
