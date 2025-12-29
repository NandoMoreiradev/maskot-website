'use client'

import styled, {css, keyframes} from 'styled-components'
import {
    Calendar, // <--- ADICIONADO AQUI
    Clock, User, ArrowRight, MapPin,
    CheckCircle2, XCircle, Ban, RefreshCw,
    Smartphone, CalendarCheck, ShieldCheck,
    Bell, MessageSquare, Users, Link as LinkIcon
} from 'lucide-react'

// --- ANIMATIONS ---
const float = keyframes`
    0% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-10px);
    }
    100% {
        transform: translateY(0px);
    }
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
            color: ${props => props.theme.colors.primary};
            flex-shrink: 0;
        }
    }
`

// --- MOCKUP 1: PÁGINA PÚBLICA (MOBILE STYLE) ---
const PhoneFrame = styled.div`
    width: 320px;
    background: #fff;
    border-radius: 32px;
    border: 8px solid #1E293B;
    box-shadow: 0 20px 50px -10px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    margin: 0 auto;
    position: relative;
`

const PublicHeader = styled.div`
    background: ${props => props.theme.colors.primary};
    padding: 2rem 1.5rem 1.5rem;
    color: white;
    text-align: center;

    .logo {
        width: 40px;
        height: 40px;
        background: white;
        border-radius: 50%;
        margin: 0 auto 10px;
    }

    h4 {
        font-size: 1.1rem;
        margin-bottom: 4px;
    }

    span {
        font-size: 0.8rem;
        opacity: 0.9;
    }
`

const BookingBody = styled.div`
    padding: 1.5rem;
`

const StepIndicator = styled.div`
    display: flex;
    gap: 4px;
    margin-bottom: 1.5rem;

    div {
        height: 4px;
        flex: 1;
        border-radius: 2px;
        background: #E2E8F0;
    }

    div.active {
        background: ${props => props.theme.colors.primary};
    }
`

const SlotGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-bottom: 1.5rem;
`

const TimeSlot = styled.div<{ $selected?: boolean }>`
    padding: 0.75rem;
    border-radius: 8px;
    text-align: center;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    border: 1px solid ${props => props.$selected ? props.theme.colors.primary : '#E2E8F0'};
    background: ${props => props.$selected ? props.theme.colors.primary : '#fff'};
    color: ${props => props.$selected ? '#fff' : props.theme.colors.text};
`

const InputMock = styled.div`
    height: 40px;
    background: #F8F9FA;
    border: 1px solid #E2E8F0;
    border-radius: 8px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    font-size: 0.8rem;
    color: #94A3B8;
`

const PrimaryButton = styled.div`
    background: ${props => props.theme.colors.primary};
    color: white;
    padding: 0.8rem;
    border-radius: 8px;
    text-align: center;
    font-weight: 600;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-size: 0.9rem;
`

// --- MOCKUP 2: CARD INTERNO ---
const InternalCard = styled.div`
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.1);

    border: 1px solid ${(props) => (props.theme.colors as unknown as {
        borderLight?: string
    }).borderLight || '#DEE2E6'};

    overflow: hidden;
    max-width: 400px;
    margin: 0 auto;
`

const DetailHeader = styled.div`
    padding: 1.5rem;
    display: flex;
    gap: 1rem;
    border-bottom: 1px solid #F1F3F5;
    background: #F8F9FA;
`

const DateBox = styled.div`
    background: #fff;
    border: 1px solid #DEE2E6;
    border-radius: 8px;
    padding: 0.5rem 1rem;
    text-align: center;

    .day {
        display: block;
        font-size: 1.5rem;
        font-weight: 800;
        color: #343A40;
        line-height: 1;
    }

    .month {
        font-size: 0.75rem;
        font-weight: 700;
        color: #868E96;
        text-transform: uppercase;
    }
`

const InfoCol = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;

    .time {
        display: flex;
        align-items: center;
        gap: 6px;
        font-weight: 700;
        color: #343A40;
        font-size: 1.1rem;
    }

    .host {
        font-size: 0.8rem;
        color: #6C757D;
    }
`

const ActionGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
    padding: 1.5rem;
`

const ActionBtn = styled.div<{ $variant: 'success' | 'neutral' | 'danger' }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 1rem 0.5rem;
    border-radius: 8px;
    border: 1px solid transparent;
    cursor: pointer;
    font-size: 0.75rem;
    font-weight: 700;
    transition: all 0.2s;

    ${props => props.$variant === 'success' && css`
        color: #28A745;
        border-color: #28A745;

        &:hover {
            background: #E6FCF5;
        }
    `}
    ${props => props.$variant === 'neutral' && css`
        color: #6C757D;
        border-color: #6C757D;

        &:hover {
            background: #F8F9FA;
        }
    `}
    ${props => props.$variant === 'danger' && css`
        color: #DC3545;
        border-color: #DC3545;

        &:hover {
            background: #FFF5F5;
        }
    `}
`

const LeadInfo = styled.div`
    padding: 0 1.5rem 1.5rem;

    .label {
        font-size: 0.75rem;
        font-weight: 700;
        color: #ADB5BD;
        text-transform: uppercase;
        margin-bottom: 8px;
    }

    .parent {
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 600;
        color: #495057;
        margin-bottom: 4px;
    }

    .student {
        background: #F1F3F5;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 0.8rem;
        color: #495057;
    }
`

// --- MOCKUP 3: WHATSAPP CHAT ---
const ChatMockup = styled.div`
    background: #F0F2F5;
    border-radius: 24px;
    padding: 1.5rem;
    box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.1);
    max-width: 380px;
    margin: 0 auto;
    border: 8px solid #fff;
    animation: ${float} 6s ease-in-out infinite;
`

const ChatHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #E4E6EB;

    .avatar {
        width: 40px;
        height: 40px;
        background: ${props => props.theme.colors.primary};
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
    }

    .info {
        h5 {
            font-size: 1rem;
            font-weight: 700;
            color: #050505;
            margin: 0;
        }

        span {
            font-size: 0.8rem;
            color: #65676B;
        }
    }
`

const MessageBubble = styled.div<{ $isSystem?: boolean }>`
    background: ${props => props.$isSystem ? '#FFF9C4' : '#fff'};
    padding: 1rem;
    border-radius: 0 12px 12px 12px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    margin-bottom: 1rem;
    position: relative;

    ${props => props.$isSystem && `
        border-radius: 12px;
        text-align: center;
        border: 1px dashed #FBC02D;
        color: #555;
        font-size: 0.85rem;
        width: 100%;
    `}
    p {
        font-size: 0.9rem;
        color: #050505;
        line-height: 1.4;
        margin: 0;
    }

    .time {
        font-size: 0.7rem;
        color: #65676B;
        text-align: right;
        margin-top: 4px;
        display: block;
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
        color: ${props => props.theme.colors.success};
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

// --- SECTION 4: GRID DE FEATURES ---
const FeatureGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    @media (max-width: ${props => props.theme.breakpoints.md}) {
        grid-template-columns: 1fr;
    }
`

const FeatureCard = styled.div`
    background: #F8F9FA;
    padding: 2rem;
    border-radius: 16px;

    border: 1px solid ${(props) => (props.theme.colors as unknown as {
        borderLight?: string
    }).borderLight || '#DEE2E6'};

    transition: all 0.3s ease;

    &:hover {
        background: #fff;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        transform: translateY(-5px);
        border-color: ${props => props.theme.colors.primary}40;
    }

    .icon {
        width: 48px;
        height: 48px;
        background: #fff;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${props => props.theme.colors.primary};
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        margin-bottom: 1.5rem;
    }

    h4 {
        font-size: 1.25rem;
        font-weight: 700;
        color: ${props => props.theme.colors.textDark};
        margin-bottom: 0.75rem;
    }

    p {
        font-size: 1rem;
        color: ${props => props.theme.colors.textMedium};
        line-height: 1.5;
        margin: 0;
    }
`

export default function VisitsDeepDive() {
    return (
        <Section>
            <Container>

                {/* --- BLOCO 1: PÁGINA PÚBLICA --- */}
                <SplitLayout>
                    <TextContent>
                        <h3>Experiência 5 Estrelas <br/> para os Pais</h3>
                        <p>
                            Uma página de agendamento moderna, rápida e que funciona perfeitamente no celular.
                            O pai escolhe o horário, preenche os dados e recebe a confirmação no WhatsApp na hora.
                        </p>
                        <ul>
                            <li><Smartphone size={20}/> <strong>100% Mobile First:</strong> Pensado para quem usa
                                celular.
                            </li>
                            <li><CalendarCheck size={20}/> <strong>Slots Reais:</strong> Mostra apenas horários vagos da
                                sua equipe.
                            </li>
                            <li><MapPin size={20}/> <strong>Localização:</strong> Envia o endereço automaticamente.</li>
                        </ul>
                    </TextContent>

                    <PhoneFrame>
                        <PublicHeader>
                            <div className="logo"></div>
                            <h4>Escola Maskot</h4>
                            <span>Agende sua visita</span>
                        </PublicHeader>
                        <BookingBody>
                            <StepIndicator>
                                <div className="active"></div>
                                <div className="active"></div>
                                <div></div>
                            </StepIndicator>

                            <h5 style={{fontSize: '0.9rem', marginBottom: '10px', color: '#333'}}>Horário para
                                12/Out</h5>
                            <SlotGrid>
                                <TimeSlot>09:00</TimeSlot>
                                <TimeSlot $selected>10:30</TimeSlot>
                                <TimeSlot>14:00</TimeSlot>
                                <TimeSlot>15:30</TimeSlot>
                            </SlotGrid>

                            <h5 style={{fontSize: '0.9rem', marginBottom: '10px', color: '#333'}}>Seus Dados</h5>
                            <InputMock>Nome do Responsável</InputMock>
                            <InputMock>Nome do Aluno</InputMock>

                            <PrimaryButton>
                                Confirmar Visita <ArrowRight size={16}/>
                            </PrimaryButton>
                        </BookingBody>
                    </PhoneFrame>
                </SplitLayout>

                {/* --- BLOCO 2: GESTÃO INTERNA --- */}
                <SplitLayout $reverse>
                    <div style={{position: 'relative'}}>
                        <div style={{
                            position: 'absolute',
                            top: -20,
                            left: -20,
                            right: -20,
                            bottom: -20,
                            background: '#F1F5F9',
                            borderRadius: '24px',
                            zIndex: 0,
                            backgroundImage: 'radial-gradient(#CBD5E1 1.5px, transparent 0)',
                            backgroundSize: '20px 20px'
                        }}></div>

                        <InternalCard style={{position: 'relative', zIndex: 1}}>
                            <DetailHeader>
                                <DateBox>
                                    <span className="day">12</span>
                                    <span className="month">Out</span>
                                </DateBox>
                                <InfoCol>
                                    <div className="time"><Clock size={18} color="#007BFF"/> 10:30</div>
                                    <div className="host">Anfitrião: <strong>Ana (Secretaria)</strong></div>
                                </InfoCol>
                            </DetailHeader>

                            <ActionGrid>
                                <ActionBtn $variant="success">
                                    <CheckCircle2 size={24}/> Realizada
                                </ActionBtn>
                                <ActionBtn $variant="neutral">
                                    <Ban size={24}/> Faltou
                                </ActionBtn>
                                <ActionBtn $variant="danger">
                                    <XCircle size={24}/> Cancelar
                                </ActionBtn>
                            </ActionGrid>

                            <LeadInfo>
                                <div className="label">Visitante</div>
                                <div className="parent"><User size={16}/> Maria Silva</div>
                                <div className="student">Pedro (1º Ano)</div>
                            </LeadInfo>
                        </InternalCard>
                    </div>

                    <TextContent>
                        <h3>Controle Total da Recepção</h3>
                        <p>
                            Saiba quem vai chegar hoje. O sistema permite marcar presença, reagendar ou registrar faltas
                            (No-Show) com um clique.
                        </p>
                        <ul>
                            <li><ShieldCheck size={20}/> <strong>Check-in Rápido:</strong> Registre a visita assim que o
                                pai chega.
                            </li>
                            <li><RefreshCw size={20}/> <strong>Reagendamento Fácil:</strong> O pai ligou para mudar?
                                Altere o horário em segundos.
                            </li>
                            <li><Ban size={20}/> <strong>Gestão de No-Show:</strong> Se o pai faltar, uma automação
                                de &quot;Resgate&quot; pode ser disparada.
                            </li>
                        </ul>
                    </TextContent>
                </SplitLayout>

                {/* --- BLOCO 3: LEMBRETES --- */}
                <SplitLayout>
                    <TextContent>
                        <h3>Chega de &quot;Bolo&quot; na Recepção</h3>
                        <p>
                            Faltas em visitas (No-Show) são o maior gargalo de vendas das escolas.
                            O Maskot envia lembretes automáticos para garantir que os pais compareçam.
                        </p>

                        <BenefitList>
                            <BenefitItem>
                                <Bell className="icon"/>
                                <div>
                                    <h4>Lembrete 24h Antes</h4>
                                    <p>Confirmação automática enviada no dia anterior.</p>
                                </div>
                            </BenefitItem>
                            <BenefitItem>
                                <Clock className="icon"/>
                                <div>
                                    <h4>Lembrete 1h Antes</h4>
                                    <p>Envia a localização exata quando o pai está saindo de casa.</p>
                                </div>
                            </BenefitItem>
                            <BenefitItem>
                                <CheckCircle2 className="icon"/>
                                <div>
                                    <h4>Confirmação em 1 Clique</h4>
                                    <p>O pai pode confirmar ou reagendar direto pelo WhatsApp.</p>
                                </div>
                            </BenefitItem>
                        </BenefitList>
                    </TextContent>

                    <ChatMockup>
                        <ChatHeader>
                            <div className="avatar"><MessageSquare size={20}/></div>
                            <div className="info">
                                <h5>Secretaria Escolar</h5>
                                <span>Online agora</span>
                            </div>
                        </ChatHeader>

                        <MessageBubble>
                            <p>Olá Maria! 👋<br/>Lembrando que sua visita está agendada para <strong>amanhã às
                                14:00</strong>.</p>
                            <span className="time">13:58</span>
                        </MessageBubble>

                        <MessageBubble $isSystem>
                            🔔 Lembrete Automático enviado pelo sistema
                        </MessageBubble>

                        <MessageBubble>
                            <p>📍 <strong>Localização:</strong><br/>Rua das Flores, 123 - Centro.<br/><a href="#">Ver no
                                Maps</a></p>
                            <span className="time">14:00</span>
                        </MessageBubble>
                    </ChatMockup>
                </SplitLayout>

                {/* --- BLOCO 4: GRID DE FUNCIONALIDADES PROFISSIONAIS --- */}
                <div style={{textAlign: 'center', marginBottom: '3rem'}}>
                    <h3 style={{fontSize: '2rem', fontWeight: 800, color: '#333'}}>Gestão Profissional</h3>
                    <p style={{color: '#666'}}>Ferramentas feitas para times de alta performance.</p>
                </div>

                <FeatureGrid>
                    <FeatureCard>
                        <div className="icon"><Users size={24}/></div>
                        <h4>Múltiplos Anfitriões</h4>
                        <p>Gerencie agendas separadas para a Diretora, Coordenadora e Time Comercial. Cada um com seus
                            horários.</p>
                    </FeatureCard>

                    <FeatureCard>
                        <div className="icon"><LinkIcon size={24}/></div>
                        <h4>Links Personalizados</h4>
                        <p>Envie o link geral da escola ou o link direto de um consultor específico (ex:
                            maskot.com/agendar/ana).</p>
                    </FeatureCard>

                    <FeatureCard>
                        <div className="icon"><Calendar size={24}/></div>
                        <h4>Sincronização de Agenda</h4>
                        <p>Evite conflitos. O sistema bloqueia horários automaticamente quando o consultor tem outro
                            compromisso.</p>
                    </FeatureCard>
                </FeatureGrid>

            </Container>
        </Section>
    )
}