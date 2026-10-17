'use client'

import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { X, Send, CheckCircle2, ShieldCheck, BadgeCheck, Lock, Sparkles } from 'lucide-react'

const Overlay = styled.div<{ $isOpen: boolean }>`
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(15, 23, 42, 0.6);
    backdrop-filter: blur(6px);
    z-index: 9999;
    display: ${props => props.$isOpen ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    animation: fadeIn 0.25s ease-out;

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`

const ModalContainer = styled.div`
    background: #FFFFFF;
    width: 100%;
    max-width: 880px;
    max-height: 92vh;
    border-radius: 24px;
    border: 1px solid #E2E8F0;
    box-shadow: 0 25px 60px -15px rgba(15, 23, 42, 0.25);
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;
    animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    display: grid;
    grid-template-columns: 0.88fr 1fr;

    &::-webkit-scrollbar { width: 6px; }
    &::-webkit-scrollbar-track { background: transparent; }
    &::-webkit-scrollbar-thumb { background: #CBD5E1; border-radius: 10px; }

    @keyframes slideUp {
        from { opacity: 0; transform: translateY(20px) scale(0.98); }
        to { opacity: 1; transform: translateY(0) scale(1); }
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        max-width: 480px;
    }
`

// --- PAINEL LATERAL (BRANDING) ---
const AsidePanel = styled.div`
    background: linear-gradient(165deg, #0F172A 0%, #1E293B 100%);
    color: #FFFFFF;
    padding: 2.75rem 2.25rem;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    border-right: 1px solid #1E293B;

    /* brilhos decorativos sutis */
    &::before {
        content: '';
        position: absolute;
        top: -20%;
        right: -20%;
        width: 320px;
        height: 320px;
        background: radial-gradient(circle, rgba(37, 99, 235, 0.25) 0%, transparent 70%);
        pointer-events: none;
    }

    &::after {
        content: '';
        position: absolute;
        bottom: -15%;
        left: -15%;
        width: 250px;
        height: 250px;
        background: radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%);
        pointer-events: none;
    }

    @media (max-width: 768px) {
        padding: 2.25rem 1.75rem;
    }
`

const Eyebrow = styled.span`
    display: inline-flex;
    align-self: flex-start;
    align-items: center;
    gap: 0.4rem;
    background: rgba(37, 99, 235, 0.18);
    border: 1px solid rgba(59, 130, 246, 0.35);
    color: #93C5FD;
    font-size: 0.725rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: 0.35rem 0.8rem;
    border-radius: 100px;
    margin-bottom: 1.5rem;
    position: relative;
    z-index: 1;

    svg {
        width: 13px;
        height: 13px;
    }
`

const AsideTitle = styled.h2`
    font-size: 1.65rem;
    font-weight: 800;
    line-height: 1.25;
    margin: 0 0 0.85rem;
    color: #FFFFFF;
    letter-spacing: -0.02em;
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
        font-size: 1.4rem;
    }
`

const AsideSubtitle = styled.p`
    font-size: 0.925rem;
    line-height: 1.6;
    color: #94A3B8;
    margin: 0 0 2rem;
    position: relative;
    z-index: 1;
`

const BenefitList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;
    z-index: 1;

    li {
        display: flex;
        align-items: flex-start;
        gap: 0.65rem;
        font-size: 0.875rem;
        line-height: 1.45;
        color: #E2E8F0;

        svg {
            flex-shrink: 0;
            margin-top: 1px;
            color: #38BDF8;
        }
    }

    @media (max-width: 768px) {
        li:nth-child(n+3) { display: none; }
    }
`

const TrustRow = styled.div`
    margin-top: auto;
    padding-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1.25rem;
    position: relative;
    z-index: 1;
    border-top: 1px solid rgba(255, 255, 255, 0.08);

    div {
        display: flex;
        align-items: center;
        gap: 0.45rem;
        font-size: 0.75rem;
        font-weight: 600;
        color: #94A3B8;

        svg { 
            width: 15px; 
            height: 15px; 
            color: #60A5FA;
        }
    }

    @media (max-width: 768px) {
        display: none;
    }
`

// --- PAINEL DO FORMULÁRIO ---
const FormPanel = styled.div`
    padding: 2.5rem 2.25rem 2.25rem;
    position: relative;
    background: #FFFFFF;

    @media (max-width: 768px) {
        padding: 2rem 1.5rem;
    }
`

const CloseButton = styled.button`
    position: absolute;
    top: 1.25rem;
    right: 1.25rem;
    background: #F8FAFC;
    border: 1px solid #E2E8F0;
    color: #64748B;
    cursor: pointer;
    padding: 6px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
    z-index: 2;

    &:hover { 
        background: #F1F5F9; 
        color: #0F172A;
        border-color: #CBD5E1;
    }
`

const FormHeading = styled.div`
    margin-bottom: 1.5rem;

    h3 {
        font-size: 1.4rem;
        font-weight: 800;
        color: #0F172A;
        letter-spacing: -0.02em;
        margin: 0 0 0.35rem;
    }

    p {
        font-size: 0.875rem;
        color: #64748B;
        margin: 0;
        line-height: 1.45;
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.35rem;

    label {
        font-size: 0.8125rem;
        font-weight: 600;
        color: #334155;
    }

    input, select {
        padding: 0.75rem 0.9rem;
        border: 1px solid #E2E8F0;
        border-radius: 10px;
        font-size: 0.875rem;
        color: #0F172A;
        outline: none;
        transition: all 0.2s ease;
        box-sizing: border-box;
        width: 100%;
        background-color: #F8FAFC;

        &::placeholder { color: #94A3B8; }

        &:hover {
            border-color: #CBD5E1;
        }

        &:focus {
            background-color: #FFFFFF;
            border-color: #2563EB;
            box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
        }
    }

    select {
        cursor: pointer;
    }
`

const Row = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`

const SubmitButton = styled.button`
    margin-top: 0.75rem;
    background: #2563EB;
    color: #FFFFFF;
    border: none;
    padding: 0.95rem;
    border-radius: 10px;
    font-weight: 700;
    font-size: 0.95rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.2s ease;
    box-shadow: 0 4px 14px rgba(37, 99, 235, 0.25);

    &:hover {
        background: #1D4ED8;
        transform: translateY(-1px);
        box-shadow: 0 6px 18px rgba(37, 99, 235, 0.35);
    }

    &:active {
        transform: translateY(0);
    }
`

const Footnote = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    margin: 1rem 0 0;
    font-size: 0.75rem;
    color: #64748B;
    text-align: center;
    line-height: 1.4;

    svg { 
        flex-shrink: 0;
        color: #94A3B8;
    }
`

/**
 * Variantes do modal. `school` é a demonstração para escolas (padrão: quem dispara o evento sem `detail` cai aqui).
 * `partner` é a candidatura ao Programa de Parceiros (agências e empresas do setor educacional):
 * `window.dispatchEvent(new CustomEvent('open-contact-modal', { detail: { variant: 'partner' } }))`.
 */
type Variant = 'school' | 'partner'

const COPY: Record<Variant, {
    eyebrow: string
    title: string
    subtitle: string
    benefits: string[]
    heading: string
    lead: string
}> = {
    school: {
        eyebrow: 'Demonstração gratuita',
        title: 'Vamos escalar as matrículas da sua escola?',
        subtitle: 'Em uma conversa rápida, um especialista mostra o Maskot funcionando com a realidade da sua instituição.',
        benefits: [
            'Demonstração personalizada para a sua escola',
            'Veja o marketing, o comercial, o WhatsApp e a Mia na prática',
            'Diagnóstico do seu funil de matrículas',
            'Sem compromisso e sem custo',
        ],
        heading: 'Fale com um Consultor',
        lead: 'Preencha seus dados e nosso time entra em contato.',
    },
    partner: {
        eyebrow: 'Programa de Parceiros',
        title: 'Vamos crescer junto com as escolas que você atende?',
        subtitle: 'Conte um pouco sobre a sua empresa. Nosso time apresenta o programa, as condições de comissão e o portal do parceiro.',
        benefits: [
            'Comissão sobre as escolas que você indicar',
            'A escola fica reservada para você depois da validação',
            'Portal para acompanhar indicações, comissões e repasses',
            'Sem compromisso: uma conversa para ver se faz sentido',
        ],
        heading: 'Quero ser parceiro',
        lead: 'Preencha os dados e nosso time entra em contato.',
    },
}

const EMPTY_FORM = {
    name: '',
    email: '',
    phone: '',
    schoolName: '',
    role: '',
    studentsCount: '',
    company: '',
    partnerType: '',
    schoolsServed: '',
    website: '',
}

export default function ContactModal(): React.ReactElement | null {
    const [isOpen, setIsOpen] = useState(false)
    const [variant, setVariant] = useState<Variant>('school')
    const [formData, setFormData] = useState(EMPTY_FORM)

    useEffect(() => {
        const handleOpen = (event: Event) => {
            const requested = (event as CustomEvent<{ variant?: Variant } | undefined>).detail?.variant
            setVariant(requested === 'partner' ? 'partner' : 'school')
            setIsOpen(true)
        }
        window.addEventListener('open-contact-modal', handleOpen)
        return () => window.removeEventListener('open-contact-modal', handleOpen)
    }, [])

    // Fecha com ESC e trava o scroll do body enquanto aberto
    useEffect(() => {
        if (!isOpen) return
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsOpen(false)
        }
        window.addEventListener('keydown', handleKey)
        const previousOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        return () => {
            window.removeEventListener('keydown', handleKey)
            document.body.style.overflow = previousOverflow
        }
    }, [isOpen])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const message = variant === 'partner'
            ? `Olá! Quero conhecer o Programa de Parceiros do Maskot Edu.

*Meus Dados:*
- *Nome:* ${formData.name}
- *E-mail:* ${formData.email}
- *WhatsApp:* ${formData.phone}
- *Empresa:* ${formData.company}
- *Tipo de empresa:* ${formData.partnerType}
- *Escolas que atende:* ${formData.schoolsServed}${formData.website.trim() ? `
- *Site ou Instagram:* ${formData.website.trim()}` : ''}
        `
            : `Olá! Gostaria de falar com um especialista sobre o Maskot.

*Meus Dados:*
- *Nome:* ${formData.name}
- *E-mail:* ${formData.email}
- *Telefone:* ${formData.phone}
- *Escola:* ${formData.schoolName}
- *Cargo:* ${formData.role}
- *Nº Alunos:* ${formData.studentsCount}
        `

        const whatsappNumber = "5579991064405"
        const encodedMessage = encodeURIComponent(message)
        const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

        window.open(url, '_blank')
        setIsOpen(false)
        setFormData(EMPTY_FORM)
    }

    if (!isOpen) return null

    const copy = COPY[variant]
    const isPartner = variant === 'partner'

    return (
        <Overlay $isOpen={isOpen} onClick={() => setIsOpen(false)}>
            <ModalContainer onClick={e => e.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">
                <AsidePanel>
                    <Eyebrow>
                        <Sparkles size={12} /> {copy.eyebrow}
                    </Eyebrow>
                    <AsideTitle>{copy.title}</AsideTitle>
                    <AsideSubtitle>{copy.subtitle}</AsideSubtitle>
                    <BenefitList>
                        {copy.benefits.map(benefit => (
                            <li key={benefit}><CheckCircle2 size={18} /> {benefit}</li>
                        ))}
                    </BenefitList>
                    <TrustRow>
                        <div><ShieldCheck /> API Oficial do WhatsApp</div>
                        <div><BadgeCheck /> Provedor Oficial Meta</div>
                    </TrustRow>
                </AsidePanel>

                <FormPanel>
                    <CloseButton onClick={() => setIsOpen(false)} aria-label="Fechar"><X size={20} /></CloseButton>
                    <FormHeading>
                        <h3 id="contact-modal-title">{copy.heading}</h3>
                        <p>{copy.lead}</p>
                    </FormHeading>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <label htmlFor="contact-name">Nome Completo</label>
                            <input id="contact-name" required name="name" value={formData.name} onChange={handleChange} placeholder="João da Silva" />
                        </FormGroup>
                        <Row>
                            <FormGroup>
                                <label htmlFor="contact-email">E-mail Profissional</label>
                                <input id="contact-email" required type="email" name="email" value={formData.email} onChange={handleChange} placeholder={isPartner ? 'joao@suaempresa.com.br' : 'joao@escola.com.br'} />
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="contact-phone">WhatsApp</label>
                                <input id="contact-phone" required type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="(11) 99999-9999" />
                            </FormGroup>
                        </Row>

                        {isPartner ? (
                            <>
                                <FormGroup>
                                    <label htmlFor="contact-company">Nome da Empresa</label>
                                    <input id="contact-company" required name="company" value={formData.company} onChange={handleChange} placeholder="Agência Exemplo" />
                                </FormGroup>
                                <Row>
                                    <FormGroup>
                                        <label htmlFor="contact-partnerType">Tipo de Empresa</label>
                                        <select id="contact-partnerType" required name="partnerType" value={formData.partnerType} onChange={handleChange}>
                                            <option value="">Selecione...</option>
                                            <option value="Agência de marketing">Agência de marketing</option>
                                            <option value="Consultoria ou assessoria educacional">Consultoria / assessoria educacional</option>
                                            <option value="Sistema de ensino ou editora">Sistema de ensino / editora</option>
                                            <option value="Tecnologia para escolas">Tecnologia para escolas</option>
                                            <option value="Outro">Outro</option>
                                        </select>
                                    </FormGroup>
                                    <FormGroup>
                                        <label htmlFor="contact-schoolsServed">Escolas que Atende</label>
                                        <select id="contact-schoolsServed" required name="schoolsServed" value={formData.schoolsServed} onChange={handleChange}>
                                            <option value="">Selecione...</option>
                                            <option value="1 a 5">1 a 5</option>
                                            <option value="6 a 15">6 a 15</option>
                                            <option value="16 a 50">16 a 50</option>
                                            <option value="Mais de 50">Mais de 50</option>
                                        </select>
                                    </FormGroup>
                                </Row>
                                <FormGroup>
                                    <label htmlFor="contact-website">Site ou Instagram (opcional)</label>
                                    <input id="contact-website" name="website" value={formData.website} onChange={handleChange} placeholder="www.suaempresa.com.br" />
                                </FormGroup>
                            </>
                        ) : (
                            <>
                                <FormGroup>
                                    <label htmlFor="contact-schoolName">Nome da Escola</label>
                                    <input id="contact-schoolName" required name="schoolName" value={formData.schoolName} onChange={handleChange} placeholder="Colégio Exemplo" />
                                </FormGroup>
                                <Row>
                                    <FormGroup>
                                        <label htmlFor="contact-role">Cargo</label>
                                        <select id="contact-role" required name="role" value={formData.role} onChange={handleChange}>
                                            <option value="">Selecione...</option>
                                            <option value="Diretor(a)">Diretor(a)</option>
                                            <option value="Mantenedor(a)">Mantenedor(a)</option>
                                            <option value="Coordenador(a)">Coordenador(a)</option>
                                            <option value="Marketing/Vendas">Marketing / Vendas</option>
                                            <option value="Secretaria">Secretaria</option>
                                            <option value="Outro">Outro</option>
                                        </select>
                                    </FormGroup>
                                    <FormGroup>
                                        <label htmlFor="contact-studentsCount">Nº de Alunos</label>
                                        <select id="contact-studentsCount" required name="studentsCount" value={formData.studentsCount} onChange={handleChange}>
                                            <option value="">Selecione...</option>
                                            <option value="0-100">0 a 100</option>
                                            <option value="101-300">101 a 300</option>
                                            <option value="301-600">301 a 600</option>
                                            <option value="601-1000">601 a 1000</option>
                                            <option value="1000+">Mais de 1000</option>
                                        </select>
                                    </FormGroup>
                                </Row>
                            </>
                        )}

                        <SubmitButton type="submit">
                            Enviar <Send size={18} />
                        </SubmitButton>
                        <Footnote>
                            <Lock size={13} /> Seus dados estão seguros. Ao enviar, você fala direto com nosso time no WhatsApp.
                        </Footnote>
                    </Form>
                </FormPanel>
            </ModalContainer>
        </Overlay>
    )
}
