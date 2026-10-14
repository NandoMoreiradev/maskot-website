'use client'

import styled from 'styled-components'
import Link from 'next/link'
import { ShieldCheck, Building2, LockKeyhole, KeyRound, FileCheck2, ArrowRight } from 'lucide-react'
import { Container as BaseContainer } from '@/components/ui/Container'

const HIGHLIGHTS = [
    { icon: Building2, label: 'Dados isolados por escola' },
    { icon: LockKeyhole, label: 'Criptografia em todas as camadas' },
    { icon: KeyRound, label: 'Acesso com dupla verificação' },
    { icon: FileCheck2, label: 'Ferramentas para a LGPD' },
]

const Section = styled.section`
    padding: 4.5rem 0;
    background: #F8FAFC;
    scroll-margin-top: 5rem;

    @media (max-width: 768px) {
        padding: 3rem 0;
    }
`

const Container = styled(BaseContainer)`
    max-width: 1200px;
`

const Banner = styled.div`
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1.75rem;
    padding: 4rem 2rem;
    border-radius: 28px;
    background: linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%);
    box-shadow: 0 24px 48px -16px rgba(37, 99, 235, 0.45);

    &::before,
    &::after {
        content: '';
        position: absolute;
        border-radius: 50%;
        border: 1px solid rgba(255, 255, 255, 0.14);
        pointer-events: none;
    }

    &::before {
        width: 420px;
        height: 420px;
        top: -180px;
        left: -120px;
    }

    &::after {
        width: 520px;
        height: 520px;
        bottom: -280px;
        right: -140px;
    }

    @media (max-width: 768px) {
        padding: 2.75rem 1.25rem;
        border-radius: 22px;
    }
`

const BigIcon = styled.div`
    position: relative;
    z-index: 1;
    width: 64px;
    height: 64px;
    border-radius: 18px;
    background: rgba(255, 255, 255, 0.14);
    border: 1px solid rgba(255, 255, 255, 0.28);
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 32px;
        height: 32px;
        color: #FFFFFF;
    }
`

const Text = styled.div`
    position: relative;
    z-index: 1;
    max-width: 680px;
`

const Eyebrow = styled.div`
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: #FFFFFF;
    background: rgba(255, 255, 255, 0.16);
    padding: 0.35rem 0.85rem;
    border-radius: 100px;
    margin-bottom: 1rem;
`

const Title = styled.h2`
    font-size: clamp(1.75rem, 3.5vw, 2.5rem);
    font-weight: 800;
    letter-spacing: -0.02em;
    line-height: 1.15;
    color: #FFFFFF;
    margin: 0 0 0.85rem;
`

const Subtitle = styled.p`
    font-size: 1.1rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.88);
    margin: 0;
`

const Chips = styled.ul`
    position: relative;
    z-index: 1;
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem;

    li {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.9rem;
        font-weight: 600;
        color: #FFFFFF;
        background: rgba(255, 255, 255, 0.12);
        border: 1px solid rgba(255, 255, 255, 0.25);
        border-radius: 999px;
        padding: 0.5rem 1rem;
    }

    svg {
        width: 16px;
        height: 16px;
        color: #BFDBFE;
    }
`

const MoreButton = styled(Link)`
    position: relative;
    z-index: 1;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.95rem 2rem;
    border-radius: 100px;
    font-size: 1rem;
    font-weight: 700;
    text-decoration: none;
    background: #FFFFFF;
    color: #1E3A8A;
    box-shadow: 0 8px 20px rgba(15, 23, 42, 0.25);
    transition: all ${props => props.theme.transitions.base};

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 12px 28px rgba(15, 23, 42, 0.3);
    }
`

export default function SecuritySection() {
    return (
        <Section id="seguranca">
            <Container>
                <Banner>
                    <BigIcon><ShieldCheck aria-hidden="true" /></BigIcon>

                    <Text>
                        <Eyebrow>Segurança e LGPD</Eyebrow>
                        <Title>Os dados da sua escola, protegidos de verdade</Title>
                        <Subtitle>
                            Segurança e LGPD fazem parte do Maskot desde a base, não são um acessório.
                        </Subtitle>
                    </Text>

                    <Chips>
                        {HIGHLIGHTS.map(({ icon: Icon, label }) => (
                            <li key={label}><Icon aria-hidden="true" />{label}</li>
                        ))}
                    </Chips>

                    <MoreButton href="/seguranca">
                        Saiba mais <ArrowRight size={18} aria-hidden="true" />
                    </MoreButton>
                </Banner>
            </Container>
        </Section>
    )
}
