'use client'

import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { X, Send } from 'lucide-react'

const Overlay = styled.div<{ $isOpen: boolean }>`
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0, 0, 0, 0.5);
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
    max-width: 500px;
    border-radius: 16px;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    overflow: hidden;
    position: relative;
    animation: slideUp 0.3s ease-out;

    @keyframes slideUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
`

const ModalHeader = styled.div`
    padding: 1.5rem 2rem;
    border-bottom: 1px solid #e2e8f0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
        font-size: 1.25rem;
        font-weight: 700;
        color: #1e293b;
        margin: 0;
    }
    
    button {
        background: transparent;
        border: none;
        color: #64748b;
        cursor: pointer;
        padding: 4px;
        border-radius: 4px;
        &:hover { background: #f1f5f9; color: #0f172a; }
    }
`

const ModalBody = styled.div`
    padding: 2rem;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
`

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    label {
        font-size: 0.875rem;
        font-weight: 600;
        color: #334155;
    }

    input, select {
        padding: 0.75rem 1rem;
        border: 1px solid #cbd5e1;
        border-radius: 8px;
        font-size: 0.95rem;
        outline: none;
        transition: border-color 0.2s;

        &:focus {
            border-color: ${props => props.theme.colors.primary};
            box-shadow: 0 0 0 3px ${props => props.theme.colors.primary}20;
        }
    }
`

const Row = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;
    
    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`

const SubmitButton = styled.button`
    margin-top: 1rem;
    background: ${props => props.theme.colors.primary};
    color: white;
    border: none;
    padding: 1rem;
    border-radius: 8px;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: background 0.2s;

    &:hover {
        background: ${props => props.theme.colors.secondary};
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
                            Solicitar Demonstração <Send size={18} />
                        </SubmitButton>
                    </Form>
                </ModalBody>
            </ModalContainer>
        </Overlay>
    )
}
