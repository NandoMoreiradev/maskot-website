'use client'

import styled, {css, keyframes} from 'styled-components'
import {
    Calendar,
    Clock, User, ArrowRight, MapPin,
    CheckCircle2, XCircle, Ban, RefreshCw,
    Smartphone, CalendarCheck, ShieldCheck,
    Bell, MessageSquare, Users, Link as LinkIcon,
    Palette, Shuffle, SlidersHorizontal, CalendarClock
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
    background: #F8FAFC;
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

    @media (max-width: 1024px) {
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
        color: #0F172A;
        margin-bottom: 1rem;
        line-height: 1.2;
        letter-spacing: -0.02em;
    }

    p {
        font-size: 1.1rem;
        color: #475569;
        line-height: 1.6;
        margin-bottom: 2rem;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
    }

    li {
        display: flex;
        align-items: center;
        gap: 1rem;
        font-weight: 600;
        color: #0F172A;

        svg {
            color: #2563EB;
            flex-shrink: 0;
        }
    }
`

// --- MOCKUP 1: PÁGINA PÚBLICA (MOBILE STYLE) ---
const PhoneFrame = styled.div`
    width: 320px;
    background: #FFFFFF;
    border-radius: 32px;
    border: 8px solid #0F172A;
    box-shadow: 0 30px 60px -10px rgba(0, 0, 0, 0.15);
    overflow: hidden;
    margin: 0 auto;
    position: relative;
`

const PublicHeader = styled.div`
    background: #2563EB;
    padding: 2rem 1.5rem 1.5rem;
    color: white;
    text-align: center;

    .logo {
        width: 48px;
        height: 48px;
        background: white;
        border-radius: 50%;
        margin: 0 auto 12px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }

    h4 {
        font-size: 1.15rem;
        font-weight: 700;
        margin-bottom: 4px;
    }

    span {
        font-size: 0.85rem;
        opacity: 0.9;
    }
`

const BookingBody = styled.div`
    padding: 1.5rem;
`

const StepIndicator = styled.div`
    display: flex;
    gap: 6px;
    margin-bottom: 1.5rem;

    div {
        height: 4px;
        flex: 1;
        border-radius: 2px;
        background: #E2E8F0;
    }

    div.active {
        background: #2563EB;
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
    border: 1px solid ${props => props.$selected ? '#2563EB' : '#E2E8F0'};
    background: ${props => props.$selected ? '#2563EB' : '#FFFFFF'};
    color: ${props => props.$selected ? '#FFFFFF' : '#475569'};
`

const InputMock = styled.div`
    height: 44px;
    background: #F8FAFC;
    border: 1px solid #E2E8F0;
    border-radius: 8px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    padding: 0 12px;
    font-size: 0.85rem;
    color: #94A3B8;
`

const PrimaryButton = styled.div`
    background: #2563EB;
    color: white;
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
    font-weight: 600;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-size: 0.95rem;
`

// --- MOCKUP 2: CARD INTERNO ---
const InternalCard = styled.div`
    background: #FFFFFF;
    border-radius: 20px;
    box-shadow: 0 20px 50px -10px rgba(0, 0, 0, 0.08);
    border: 1px solid #E2E8F0;
    overflow: hidden;
    max-width: 400px;
    margin: 0 auto;
`

const DetailHeader = styled.div`
    padding: 1.5rem;
    display: flex;
    gap: 1.25rem;
    border-bottom: 1px solid #E2E8F0;
    background: #F8FAFC;
`

const DateBox = styled.div`
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 12px;
    padding: 0.75rem 1rem;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0,0,0,0.02);

    .day {
        display: block;
        font-size: 1.75rem;
        font-weight: 800;
        color: #0F172A;
        line-height: 1;
    }

    .month {
        font-size: 0.75rem;
        font-weight: 700;
        color: #64748B;
        text-transform: uppercase;
        margin-top: 4px;
        display: block;
    }
`

const InfoCol = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6px;

    .time {
        display: flex;
        align-items: center;
        gap: 6px;
        font-weight: 700;
        color: #0F172A;
        font-size: 1.15rem;
    }

    .host {
        font-size: 0.85rem;
        color: #64748B;
        
        strong {
            color: #334155;
        }
    }
`

const ActionGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 12px;
    padding: 1.5rem;
`

const ActionBtn = styled.div<{ $variant: 'success' | 'neutral' | 'danger' }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 1rem 0.5rem;
    border-radius: 12px;
    border: 1px solid transparent;
    cursor: pointer;
    font-size: 0.8rem;
    font-weight: 700;
    transition: all 0.2s;

    ${props => props.$variant === 'success' && css`
        color: #10B981;
        background: #F0FDF4;
        border-color: #A7F3D0;

        &:hover {
            background: #D1FAE5;
        }
    `}
    ${props => props.$variant === 'neutral' && css`
        color: #64748B;
        background: #F8FAFC;
        border-color: #E2E8F0;

        &:hover {
            background: #F1F5F9;
        }
    `}
    ${props => props.$variant === 'danger' && css`
        color: #EF4444;
        background: #FEF2F2;
        border-color: #FECACA;

        &:hover {
            background: #FEE2E2;
        }
    `}
`

const LeadInfo = styled.div`
    padding: 0 1.5rem 1.5rem;

    .label {
        font-size: 0.75rem;
        font-weight: 700;
        color: #94A3B8;
        text-transform: uppercase;
        margin-bottom: 12px;
    }

    .parent {
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 700;
        color: #0F172A;
        margin-bottom: 8px;
    }

    .student {
        background: #F8FAFC;
        border: 1px solid #E2E8F0;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 6px 10px;
        border-radius: 6px;
        font-size: 0.85rem;
        color: #475569;
        font-weight: 600;
    }
`

// --- MOCKUP 3: WHATSAPP CHAT ---
const ChatMockup = styled.div`
    background: #FFFFFF;
    border-radius: 24px;
    padding: 1.5rem;
    box-shadow: 0 20px 50px -10px rgba(0, 0, 0, 0.08);
    max-width: 380px;
    margin: 0 auto;
    border: 1px solid #E2E8F0;
    animation: ${float} 6s ease-in-out infinite;
`

const ChatHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #E2E8F0;

    .avatar {
        width: 44px;
        height: 44px;
        background: #2563EB;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
    }

    .info {
        h5 {
            font-size: 1.05rem;
            font-weight: 700;
            color: #0F172A;
            margin: 0;
        }

        span {
            font-size: 0.85rem;
            color: #64748B;
        }
    }
`

const MessageBubble = styled.div<{ $isSystem?: boolean }>`
    background: ${props => props.$isSystem ? '#F8FAFC' : '#EFF6FF'};
    padding: 1rem;
    border-radius: 0 16px 16px 16px;
    margin-bottom: 1rem;
    position: relative;
    border: 1px solid ${props => props.$isSystem ? '#E2E8F0' : '#BFDBFE'};

    ${props => props.$isSystem && `
        border-radius: 12px;
        text-align: center;
        color: #475569;
        font-size: 0.85rem;
        width: 100%;
        padding: 0.75rem;
    `}
    p {
        font-size: 0.95rem;
        color: #0F172A;
        line-height: 1.5;
        margin: 0;
    }

    .time {
        font-size: 0.75rem;
        color: #64748B;
        text-align: right;
        margin-top: 6px;
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
    gap: 1.25rem;
    align-items: flex-start;

    .icon {
        width: 28px;
        height: 28px;
        color: #10B981;
        flex-shrink: 0;
        margin-top: 2px;
    }

    div {
        h4 {
            font-size: 1.15rem;
            font-weight: 700;
            color: #0F172A;
            margin-bottom: 0.25rem;
        }

        p {
            font-size: 0.95rem;
            color: #475569;
            margin: 0;
            line-height: 1.5;
        }
    }
`

// --- SECTION 4: GRID DE FEATURES ---
const FeatureGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 640px) {
        grid-template-columns: 1fr;
    }
`

const FeatureCard = styled.div`
    background: #FFFFFF;
    padding: 2.5rem;
    border-radius: 24px;
    border: 1px solid #E2E8F0;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.01);

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.05);
        border-color: #CBD5E1;
    }

    .icon {
        width: 56px;
        height: 56px;
        background: #F8FAFC;
        border-radius: 14px;
        border: 1px solid #E2E8F0;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #2563EB;
        margin-bottom: 1.5rem;
    }

    h4 {
        font-size: 1.25rem;
        font-weight: 700;
        color: #0F172A;
        margin-bottom: 0.75rem;
        letter-spacing: -0.01em;
    }

    p {
        font-size: 1rem;
        color: #475569;
        line-height: 1.6;
        margin: 0;
    }
`

export default function VisitsDeepDive() {
    return (
        <Section id="recursos">
            <Container>

                {/* --- BLOCO 1: PÁGINA PÚBLICA --- */}
                <SplitLayout>
                    <TextContent>
                        <h3>Experiência 5 Estrelas <br/> para os Pais</h3>
                        <p>
                            Uma página de agendamento moderna, rápida e que funciona perfeitamente no celular.
                            O pai escolhe o horário, preenche os dados e recebe a confirmação na hora.
                        </p>
                        <ul>
                            <li><Smartphone size={20}/> <strong>100% Mobile First:</strong> Pensado para quem usa
                                celular.
                            </li>
                            <li><CalendarCheck size={20}/> <strong>Slots Reais:</strong> Mostra apenas horários vagos da
                                sua equipe.
                            </li>
                            <li><Palette size={20}/> <strong>Com a Sua Marca:</strong> Logo, cores e página de sucesso
                                personalizadas com a identidade da escola.
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
                            <li><RefreshCw size={20}/> <strong>Reagendamento pelo Pai:</strong> o próprio responsável
                                remarca pelo link, sem ligar para a secretaria — e a equipe altera em segundos quando precisa.
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
                                    <h4>Lembrete na Antecedência que Você Definir</h4>
                                    <p>Configure quando enviar (ex.: 24h antes) por WhatsApp, e-mail e/ou SMS, com a localização da escola.</p>
                                </div>
                            </BenefitItem>
                            <BenefitItem>
                                <Users className="icon"/>
                                <div>
                                    <h4>Aviso Interno para a Equipe</h4>
                                    <p>O anfitrião e a recepção também recebem um alerta antes de cada visita.</p>
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
                            horários de trabalho e folgas.</p>
                    </FeatureCard>

                    <FeatureCard>
                        <div className="icon"><LinkIcon size={24}/></div>
                        <h4>Links Personalizados</h4>
                        <p>Envie o link geral da escola ou o link direto de um consultor específico (ex:
                            maskot.com/agendar/ana).</p>
                    </FeatureCard>

                    <FeatureCard>
                        <div className="icon"><Shuffle size={24}/></div>
                        <h4>Distribuição Automática</h4>
                        <p>Quem agenda pelo link já entra no funil e é atribuído ao consultor certo por rodízio
                            (round-robin) ou para quem está menos ocupado.</p>
                    </FeatureCard>

                    <FeatureCard>
                        <div className="icon"><CalendarClock size={24}/></div>
                        <h4>Tipos de Visita</h4>
                        <p>Crie eventos diferentes — tour, entrevista, reunião — cada um com sua própria duração, cor
                            e disponibilidade.</p>
                    </FeatureCard>

                    <FeatureCard>
                        <div className="icon"><SlidersHorizontal size={24}/></div>
                        <h4>Regras de Disponibilidade</h4>
                        <p>Defina intervalo entre visitas, antecedência mínima, limite de dias no futuro e bloqueie
                            feriados e datas específicas.</p>
                    </FeatureCard>

                    <FeatureCard>
                        <div className="icon"><Calendar size={24}/></div>
                        <h4>Integração com Google Calendar</h4>
                        <p>Cada visita agendada vira automaticamente um evento na agenda Google do consultor — e
                            remarcações ou cancelamentos atualizam o evento sozinhos.</p>
                    </FeatureCard>
                </FeatureGrid>

            </Container>
        </Section>
    )
}