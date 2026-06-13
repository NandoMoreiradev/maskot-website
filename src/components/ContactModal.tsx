'use client'

import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { X, Send, CheckCircle2, ShieldCheck, BadgeCheck, Lock } from 'lucide-react'

const Overlay = styled.div<{ $isOpen: boolean }>`
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(15, 23, 42, 0.55);
    backdrop-filter: blur(5px);
    z-index: 9999;
    display: ${props => props.$isOpen ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    padding: 1rem;
    animation: fadeIn 0.2s ease-out;

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`

const ModalContainer = styled.div`
    background: white;
    width: 100%;
    max-width: 860px;
    max-height: 95vh;
    border-radius: 20px;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.35);
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;
    animation: slideUp 0.3s ease-out;
    display: grid;
    grid-template-columns: 0.8fr 1fr;

    &::-webkit-scrollbar { width: 6px; }
    &::-webkit-scrollbar-track { background: transparent; }
    &::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }

    @keyframes slideUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }

    @media (max-width: 720px) {
        grid-template-columns: 1fr;
        max-width: 480px;
    }
`

// --- PAINEL LATERAL (BRANDING) ---
const AsidePanel = styled.div`
    background: linear-gradient(150deg,
        ${props => props.theme.colors.primary} 0%,
        ${props => props.theme.colors.secondary} 100%
    );
    color: white;
    padding: 2.5rem 2rem;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;

    /* brilho decorativo */
    &::before {
        content: '';
        position: absolute;
        top: -30%;
        right: -20%;
        width: 320px;
        height: 320px;
        background: radial-gradient(circle, rgba(255,255,255,0.18) 0%, transparent 70%);
        pointer-events: none;
    }

    @media (max-width: 720px) {
        padding: 2rem 1.75rem;
    }
`

const Eyebrow = styled.span`
    display: inline-flex;
    align-self: flex-start;
    align-items: center;
    background: rgba(255, 255, 255, 0.18);
    border: 1px solid rgba(255, 255, 255, 0.25);
    color: #fff;
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    padding: 0.35rem 0.8rem;
    border-radius: 100px;
    margin-bottom: 1.25rem;
    position: relative;
    z-index: 1;
`

const AsideTitle = styled.h2`
    font-size: 1.6rem;
    font-weight: 800;
    line-height: 1.2;
    margin: 0 0 0.75rem;
    color: #fff;
    position: relative;
    z-index: 1;

    @media (max-width: 720px) {
        font-size: 1.35rem;
    }
`

const AsideSubtitle = styled.p`
    font-size: 0.95rem;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.85);
    margin: 0 0 1.75rem;
    position: relative;
    z-index: 1;
`

const BenefitList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
    position: relative;
    z-index: 1;

    li {
        display: flex;
        align-items: flex-start;
        gap: 0.6rem;
        font-size: 0.9rem;
        line-height: 1.4;
        color: rgba(255, 255, 255, 0.95);

        svg {
            flex-shrink: 0;
            margin-top: 1px;
            color: #fff;
        }
    }

    @media (max-width: 720px) {
        /* mantém só os 2 primeiros no mobile para não alongar demais */
        li:nth-child(n+3) { display: none; }
    }
`

const TrustRow = styled.div`
    margin-top: auto;
    padding-top: 1.75rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    position: relative;
    z-index: 1;

    div {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        font-size: 0.75rem;
        font-weight: 600;
        color: rgba(255, 255, 255, 0.9);

        svg { width: 15px; height: 15px; }
    }

    @media (max-width: 720px) {
        display: none;
    }
`

// --- PAINEL DO FORMULÁRIO ---
const FormPanel = styled.div`
    padding: 2.25rem 2rem 2rem;
    position: relative;

    @media (max-width: 720px) {
        padding: 1.75rem 1.5rem;
    }
`

const CloseButton = styled.button`
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: transparent;
    border: none;
    color: #94a3b8;
    cursor: pointer;
    padding: 6px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
    z-index: 2;

    &:hover { background: #f1f5f9; color: #0f172a; }
`

const FormHeading = styled.div`
    margin-bottom: 1.5rem;

    h3 {
        font-size: 1.35rem;
        font-weight: 800;
        color: #0f172a;
        margin: 0 0 0.35rem;
    }

    p {
        font-size: 0.875rem;
        color: #64748b;
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
    gap: 0.375rem;

    label {
        font-size: 0.8125rem;
        font-weight: 600;
        color: #475569;
    }

    input, select {
        padding: 0.7rem 0.875rem;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        font-size: 0.875rem;
        color: #1e293b;
        outline: none;
        transition: all 0.2s;
        box-sizing: border-box;
        width: 100%;
        background-color: #fff;

        &::placeholder { color: #94a3b8; }

        &:focus {
            border-color: ${props => props.theme.colors.primary};
            box-shadow: 0 0 0 3px ${props => props.theme.colors.primary}1a;
        }
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
    margin-top: 0.5rem;
    background: linear-gradient(135deg,
        ${props => props.theme.colors.primary} 0%,
        ${props => props.theme.colors.secondary} 100%
    );
    color: white;
    border: none;
    padding: 0.95rem;
    border-radius: 8px;
    font-weight: 700;
    font-size: 0.95rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.2s;
    box-shadow: 0 6px 16px ${props => props.theme.colors.primary}40;

    &:hover {
        transform: translateY(-1px);
        box-shadow: 0 10px 22px ${props => props.theme.colors.primary}55;
    }
`

const Footnote = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    margin: 1rem 0 0;
    font-size: 0.75rem;
    color: #94a3b8;
    text-align: center;
    line-height: 1.4;

    svg { flex-shrink: 0; }
`

export default function ContactModal(): React.ReactElement | null {
    const [isOpen, setIsOpen] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        schoolName: '',
        role: '',
        studentsCount: ''
    })

    useEffect(() => {
        const handleOpen = () => setIsOpen(true)
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

        const message = `Olá! Gostaria de falar com um especialista sobre o Maskot CRM.

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
        setFormData({ name: '', email: '', phone: '', schoolName: '', role: '', studentsCount: '' })
    }

    if (!isOpen) return null

    return (
        <Overlay $isOpen={isOpen} onClick={() => setIsOpen(false)}>
            <ModalContainer onClick={e => e.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">
                <AsidePanel>
                    <Eyebrow>Demonstração gratuita</Eyebrow>
                    <AsideTitle>Vamos escalar as matrículas da sua escola?</AsideTitle>
                    <AsideSubtitle>
                        Em uma conversa rápida, um especialista mostra o Maskot funcionando com a realidade da sua instituição.
                    </AsideSubtitle>
                    <BenefitList>
                        <li><CheckCircle2 size={18} /> Demonstração personalizada para a sua escola</li>
                        <li><CheckCircle2 size={18} /> Veja o CRM, o WhatsApp e a Mia na prática</li>
                        <li><CheckCircle2 size={18} /> Diagnóstico do seu funil de matrículas</li>
                        <li><CheckCircle2 size={18} /> Sem compromisso e sem custo</li>
                    </BenefitList>
                    <TrustRow>
                        <div><ShieldCheck /> API Oficial do WhatsApp</div>
                        <div><BadgeCheck /> Provedor Oficial Meta</div>
                    </TrustRow>
                </AsidePanel>

                <FormPanel>
                    <CloseButton onClick={() => setIsOpen(false)} aria-label="Fechar"><X size={20} /></CloseButton>
                    <FormHeading>
                        <h3 id="contact-modal-title">Fale com um Consultor</h3>
                        <p>Preencha seus dados e nosso time entra em contato.</p>
                    </FormHeading>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <label>Nome Completo</label>
                            <input required name="name" value={formData.name} onChange={handleChange} placeholder="João da Silva" />
                        </FormGroup>
                        <Row>
                            <FormGroup>
                                <label>E-mail Profissional</label>
                                <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="joao@escola.com.br" />
                            </FormGroup>
                            <FormGroup>
                                <label>WhatsApp</label>
                                <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="(11) 99999-9999" />
                            </FormGroup>
                        </Row>
                        <FormGroup>
                            <label>Nome da Escola</label>
                            <input required name="schoolName" value={formData.schoolName} onChange={handleChange} placeholder="Colégio Exemplo" />
                        </FormGroup>
                        <Row>
                            <FormGroup>
                                <label>Cargo</label>
                                <select required name="role" value={formData.role} onChange={handleChange}>
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
                                <label>Nº de Alunos</label>
                                <select required name="studentsCount" value={formData.studentsCount} onChange={handleChange}>
                                    <option value="">Selecione...</option>
                                    <option value="0-100">0 a 100</option>
                                    <option value="101-300">101 a 300</option>
                                    <option value="301-600">301 a 600</option>
                                    <option value="601-1000">601 a 1000</option>
                                    <option value="1000+">Mais de 1000</option>
                                </select>
                            </FormGroup>
                        </Row>
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
