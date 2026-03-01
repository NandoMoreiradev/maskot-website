'use client'

import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { X, Send } from 'lucide-react'

const Overlay = styled.div<{ $isOpen: boolean }>`
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(15, 23, 42, 0.4);
    backdrop-filter: blur(4px);
    z-index: 9999;
    display: ${props => props.$isOpen ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    padding: 1rem;
`

const ModalContainer = styled.div`
    background: white;
    width: 100%;
    max-width: 480px;
    max-height: 95vh; /* Allow a slightly taller modal if needed */
    border-radius: 12px;
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04);
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;
    animation: slideUp 0.3s ease-out;

    &::-webkit-scrollbar {
        width: 6px;
    }
    &::-webkit-scrollbar-track {
        background: transparent;
    }
    &::-webkit-scrollbar-thumb {
        background: #cbd5e1;
        border-radius: 10px;
    }

    @keyframes slideUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
`

const ModalHeader = styled.div`
    padding: 1.25rem 1.5rem;
    border-bottom: 1px solid #f1f5f9;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
        font-size: 1.125rem;
        font-weight: 600;
        color: #0f172a;
        margin: 0;
    }
    
    button {
        background: transparent;
        border: none;
        color: #64748b;
        cursor: pointer;
        padding: 4px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s;
        &:hover { background: #f1f5f9; color: #0f172a; }
    }
`

const ModalBody = styled.div`
    padding: 1.5rem;
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
        font-weight: 500;
        color: #475569;
    }

    input, select {
        padding: 0.625rem 0.875rem;
        border: 1px solid #e2e8f0;
        border-radius: 6px;
        font-size: 0.875rem;
        color: #1e293b;
        outline: none;
        transition: all 0.2s;
        box-sizing: border-box;
        width: 100%;
        background-color: #fff;

        &::placeholder {
            color: #94a3b8;
        }

        &:focus {
            border-color: ${props => props.theme.colors.primary};
            box-shadow: 0 0 0 3px ${props => props.theme.colors.primary}15;
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
    background: ${props => props.theme.colors.primary};
    color: white;
    border: none;
    padding: 0.875rem;
    border-radius: 6px;
    font-weight: 600;
    font-size: 0.9375rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.2s;

    &:hover {
        background: ${props => props.theme.colors.secondary};
        transform: translateY(-1px);
    }
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
            <ModalContainer onClick={e => e.stopPropagation()}>
                <ModalHeader>
                    <h2>Falar com Especialista</h2>
                    <button onClick={() => setIsOpen(false)}><X size={20} /></button>
                </ModalHeader>
                <ModalBody>
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
                    </Form>
                </ModalBody>
            </ModalContainer>
        </Overlay>
    )
}
