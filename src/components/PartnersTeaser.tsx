'use client'

import Link from 'next/link'
import styled from 'styled-components'
import { ArrowRight, Handshake } from 'lucide-react'

const Wrapper = styled.section`
    padding: 0 2rem 1rem;
    max-width: 1100px;
    margin: 0 auto;
`

const Card = styled.div`
    display: flex;
    align-items: center;
    gap: 1.75rem;
    padding: 1.75rem 2rem;
    background: ${props => props.theme.colors.white};
    border: 1px solid ${props => props.theme.colors.borderLight};
    border-radius: 20px;
    box-shadow: ${props => props.theme.shadows.sm};

    @media (max-width: ${props => props.theme.breakpoints.md}) {
        flex-direction: column;
        align-items: flex-start;
        gap: 1.25rem;
        padding: 1.5rem;
    }
`

const IconBadge = styled.div`
    flex-shrink: 0;
    width: 56px;
    height: 56px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    background: linear-gradient(135deg, #F97316 0%, #F59E0B 100%);
`

const Text = styled.div`
    flex: 1;

    strong {
        display: block;
        font-size: 1.15rem;
        font-weight: 800;
        color: ${props => props.theme.colors.textDark};
        margin-bottom: 0.25rem;
    }

    span {
        font-size: 0.95rem;
        line-height: 1.55;
        color: ${props => props.theme.colors.textMedium};
    }
`

const ArrowLink = styled(Link)`
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    white-space: nowrap;
    font-weight: 700;
    font-size: 0.95rem;
    color: #0F172A;
    padding: 0.75rem 1.4rem;
    border: 1px solid ${props => props.theme.colors.borderLight};
    border-radius: 100px;
    text-decoration: none;
    transition: all 0.2s ease;

    &:hover {
        background: #F8FAFC;
        transform: translateY(-1px);
    }
`

/** Convite discreto, na home, para quem atende escolas e pode virar parceiro. A página completa é /parceiros. */
export default function PartnersTeaser() {
    return (
        <Wrapper>
            <Card>
                <IconBadge aria-hidden="true"><Handshake size={28} /></IconBadge>
                <Text>
                    <strong>Atende escolas? Seja parceiro do Maskot Edu.</strong>
                    <span>
                        Agências, consultorias e empresas do setor educacional indicam o Maskot e recebem comissão pelas escolas que contratam.
                    </span>
                </Text>
                <ArrowLink href="/parceiros">
                    Conhecer o programa <ArrowRight size={16} />
                </ArrowLink>
            </Card>
        </Wrapper>
    )
}
