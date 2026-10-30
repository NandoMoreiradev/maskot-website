'use client'

import styled, { keyframes } from 'styled-components'
import {
    ArrowRight, ShieldCheck, FolderOpen, Folder, FileText, FileSpreadsheet, Link2, History, Lock, Users, Globe,
    Trash2, Search, FileEdit
} from 'lucide-react'
import { Container as BaseContainer } from '@/components/ui/Container'
import AuroraBackground from '@/components/AuroraBackground'

const float = keyframes`
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
`

const floatSlow = keyframes`
    0% { transform: translateY(0px) rotateZ(-2deg); }
    50% { transform: translateY(-15px) rotateZ(2deg); }
    100% { transform: translateY(0px) rotateZ(-2deg); }
`

const fadeUp = keyframes`
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
`

const HeroSection = styled.section`
    min-height: 90vh;
    display: flex;
    align-items: center;
    background-color: transparent;
    position: relative;
    padding-top: 10rem;
    padding-bottom: 6rem;
    z-index: 1;
    overflow: hidden;
`

const Container = styled(BaseContainer)`
    position: relative;
    z-index: 2;
`

const HeroContent = styled.div`
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 4rem;
    align-items: center;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
        gap: 4rem;
        text-align: center;
    }
`

const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    @media (max-width: 1024px) {
        align-items: center;
    }
`

const Tag = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    background: transparent;
    color: #475569;
    padding: 0.35rem 0.85rem;
    border-radius: 100px;
    font-weight: 600;
    font-size: 0.85rem;
    border: 1px solid #E2E8F0;
    animation: ${fadeUp} 0.8s ease-out forwards;
    width: fit-content;
    box-shadow: 0 1px 2px rgba(0,0,0,0.02);

    svg {
        color: #0369A1;
        width: 14px;
        height: 14px;
    }
`

const MainHeading = styled.h1`
    font-size: 3rem;
    font-weight: 800;
    line-height: 1.15;
    color: #0F172A;
    letter-spacing: -0.02em;
    animation: ${fadeUp} 0.8s ease-out 0.1s forwards;
    opacity: 0;

    strong {
        color: #0369A1;
    }

    @media (max-width: 768px) {
        font-size: 2.25rem;
    }
`

const Subtitle = styled.p`
    font-size: 1.1rem;
    line-height: 1.6;
    color: #475569;
    max-width: 540px;
    animation: ${fadeUp} 0.8s ease-out 0.2s forwards;
    opacity: 0;

    @media (max-width: 1024px) {
        margin: 0 auto;
    }
`

const ButtonGroup = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 0.5rem;
    animation: ${fadeUp} 0.8s ease-out 0.3s forwards;
    opacity: 0;

    @media (max-width: 640px) {
        flex-direction: column;
        width: 100%;
    }
`

const CTAButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.85rem 2rem;
    border-radius: 100px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    border: none;
    background: #0369A1;
    color: white;
    box-shadow: 0 4px 14px 0 rgba(3, 105, 161, 0.3);
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(3, 105, 161, 0.4);
    }
`

const SecondaryButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.85rem 2rem;
    border-radius: 100px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    background: #FFFFFF;
    color: #0F172A;
    border: 1px solid #E2E8F0;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.02);
    transition: all 0.3s ease;

    &:hover {
        background: #F8FAFC;
        border-color: #CBD5E1;
        transform: translateY(-2px);
    }
`

const ChannelChips = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    margin-bottom: 1rem;

    span {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        padding: 0.4rem 0.85rem 0.4rem 0.5rem;
        border-radius: 999px;
        background: #FFFFFF;
        border: 1px solid #E2E8F0;
        font-size: 0.85rem;
        font-weight: 700;
        color: #0F172A;
        box-shadow: 0 2px 6px rgba(15, 23, 42, 0.04);

        i {
            width: 22px;
            height: 22px;
            border-radius: 50%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: #FFFFFF;

            svg {
                width: 13px;
                height: 13px;
            }
        }
    }

    @media (max-width: 1024px) {
        justify-content: center;
    }
`

const TrustBadges = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-top: 1.5rem;
    animation: ${fadeUp} 0.8s ease-out 0.4s forwards;
    opacity: 0;

    div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.85rem;
        color: #64748B;
        font-weight: 600;

        svg {
            color: #0369A1;
            width: 18px;
            height: 18px;
        }
    }

    @media (max-width: 1024px) {
        justify-content: center;
    }
`

const Visual = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 1000px;
    animation: ${fadeUp} 1s ease-out 0.2s forwards;
    opacity: 0;
`

const DriveCard = styled.div`
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 24px;
    width: 100%;
    max-width: 400px;
    box-shadow: 0 30px 60px rgba(0,0,0,0.08);
    transform: rotateY(-5deg) rotateX(2deg);
    animation: ${floatSlow} 7s ease-in-out infinite;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    &:hover {
        transform: rotateY(0deg) rotateX(0deg);
        transition: transform 0.5s ease;
    }
`

const DriveHeader = styled.div`
    background: #F0F9FF;
    padding: 0.85rem 1.25rem;
    border-bottom: 1px solid #BAE6FD;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.8rem;
    font-weight: 700;
    color: #0369A1;

    svg {
        width: 16px;
        height: 16px;
        flex-shrink: 0;
    }

    .crumb-sep { color: #7DD3FC; font-weight: 600; }
    .crumb-now { color: #0F172A; }
`

const DriveBody = styled.div`
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .search {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.55rem 0.85rem;
        border-radius: 10px;
        border: 1px solid #E2E8F0;
        background: #F8FAFC;
        font-size: 0.8rem;
        color: #94A3B8;

        svg { width: 14px; height: 14px; }
    }

    .label {
        font-size: 0.65rem;
        font-weight: 800;
        color: #64748B;
        text-transform: uppercase;
        letter-spacing: 0.06em;
    }

    .folders {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0.6rem;
    }

    .folder {
        display: flex;
        align-items: center;
        gap: 0.6rem;
        padding: 0.65rem 0.75rem;
        border-radius: 12px;
        border: 1px solid #E2E8F0;
        background: #FFFFFF;
        font-size: 0.8rem;
        font-weight: 700;
        color: #0F172A;
        min-width: 0;

        .ficon { flex-shrink: 0; display: flex; }
        .fname { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .fbadge { color: #94A3B8; flex-shrink: 0; display: flex; svg { width: 13px; height: 13px; } }
    }

    .files {
        display: flex;
        flex-direction: column;
        border: 1px solid #E2E8F0;
        border-radius: 12px;
        overflow: hidden;
    }

    .file {
        display: flex;
        align-items: center;
        gap: 0.7rem;
        padding: 0.65rem 0.85rem;
        border-bottom: 1px solid #F1F5F9;
        font-size: 0.8rem;
        font-weight: 600;
        color: #0F172A;

        &:last-child { border-bottom: none; }

        .fmeta { margin-left: auto; font-size: 0.7rem; color: #94A3B8; font-weight: 500; white-space: nowrap; }
    }

    .storage {
        padding: 0.75rem 0.9rem;
        border-radius: 12px;
        background: #F8FAFC;
        border: 1px solid #E2E8F0;
        font-size: 0.72rem;
        color: #64748B;
        font-weight: 600;

        .row { display: flex; justify-content: space-between; margin-bottom: 0.4rem; b { color: #0F172A; } }
        .bar { height: 6px; border-radius: 3px; background: #E2E8F0; overflow: hidden; }
        .fill { width: 34%; height: 100%; background: #0369A1; border-radius: 3px; }
    }
`

const FloatingTag = styled.div`
    position: absolute;
    background: #FFFFFF;
    padding: 0.6rem 1rem;
    border-radius: 100px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.08);
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-weight: 600;
    font-size: 0.8rem;
    color: #0F172A;
    z-index: 10;
    border: 1px solid #E2E8F0;
    animation: ${float} 4s ease-in-out infinite;

    svg {
        color: #0369A1;
        width: 16px;
        height: 16px;
    }

    &.top-right {
        top: 8%;
        right: -10%;
        animation-delay: 1s;
    }

    &.bottom-left {
        bottom: 12%;
        left: -6%;
        animation-delay: 2s;
    }

    @media (max-width: 640px) {
        display: none;
    }
`

function scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function DriveHero() {
    return (
        <HeroSection>
            <AuroraBackground />
            <Container>
                <HeroContent>
                    <TextContent>
                        <Tag>
                            <FolderOpen /> Drive de documentos do CRM
                        </Tag>

                        <MainHeading>
                            Os documentos da escola em um só lugar, <strong>com quem pode ver cada pasta sob o seu controle</strong>
                        </MainHeading>

                        <Subtitle>
                            Guarde contratos, materiais e arquivos em pastas organizadas, edite Word, Excel e PowerPoint pelo navegador e compartilhe por link com senha e validade. Chega de pasta perdida em pen drive e de arquivo mandado pelo WhatsApp pessoal.
                        </Subtitle>

                        <ChannelChips>
                            <span><i style={{ background: '#0369A1' }}><Folder /></i>Pastas e subpastas</span>
                            <span><i style={{ background: '#2563EB' }}><FileEdit /></i>Editor Office online</span>
                            <span><i style={{ background: '#7C3AED' }}><Link2 /></i>Links protegidos</span>
                            <span><i style={{ background: '#475569' }}><History /></i>Versões e lixeira</span>
                        </ChannelChips>

                        <ButtonGroup>
                            <CTAButton onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}>
                                Fale com um Consultor
                            </CTAButton>
                            <SecondaryButton onClick={() => scrollToSection('recursos')}>
                                Ver recursos <ArrowRight size={18} />
                            </SecondaryButton>
                        </ButtonGroup>

                        <TrustBadges>
                            <div><Lock /> Acesso por pasta</div>
                            <div><ShieldCheck /> Arquivos privados</div>
                            <div><History /> Histórico de versões</div>
                            <div><Trash2 /> Lixeira de 30 dias</div>
                        </TrustBadges>
                    </TextContent>

                    <Visual>
                        <DriveCard>
                            <DriveHeader>
                                <FolderOpen />
                                <span>Meu Drive</span>
                                <span className="crumb-sep">›</span>
                                <span className="crumb-now">Secretaria</span>
                            </DriveHeader>
                            <DriveBody>
                                <div className="search"><Search /> Buscar arquivos e pastas</div>

                                <div className="label">Pastas</div>
                                <div className="folders">
                                    <div className="folder">
                                        <span className="ficon"><Folder size={20} fill="#5B8DEF" color="#5B8DEF" /></span>
                                        <span className="fname">Contratos 2026</span>
                                        <span className="fbadge" title="Privada"><Lock /></span>
                                    </div>
                                    <div className="folder">
                                        <span className="ficon"><Folder size={20} fill="#20C997" color="#20C997" /></span>
                                        <span className="fname">Matrículas</span>
                                        <span className="fbadge" title="Restrita"><Users /></span>
                                    </div>
                                    <div className="folder">
                                        <span className="ficon"><Folder size={20} fill="#F59F00" color="#F59F00" /></span>
                                        <span className="fname">Material do aluno</span>
                                        <span className="fbadge" title="Toda a escola"><Globe /></span>
                                    </div>
                                    <div className="folder">
                                        <span className="ficon"><Folder size={20} fill="#E64980" color="#E64980" /></span>
                                        <span className="fname">Eventos</span>
                                        <span className="fbadge" title="Toda a escola"><Globe /></span>
                                    </div>
                                </div>

                                <div className="label">Arquivos</div>
                                <div className="files">
                                    <div className="file">
                                        <FileText size={18} color="#185ABD" /> Regimento interno.docx
                                        <span className="fmeta">v3 · hoje</span>
                                    </div>
                                    <div className="file">
                                        <FileSpreadsheet size={18} color="#217346" /> Tabela de mensalidades.xlsx
                                        <span className="fmeta">v2 · ontem</span>
                                    </div>
                                </div>

                                <div className="storage">
                                    <div className="row"><span>Armazenamento</span><b>17 GB / 50 GB</b></div>
                                    <div className="bar"><div className="fill"></div></div>
                                </div>
                            </DriveBody>
                        </DriveCard>

                        <FloatingTag className="top-right">
                            <Link2 />
                            Link com senha e validade
                        </FloatingTag>

                        <FloatingTag className="bottom-left">
                            <History />
                            Versão restaurada
                        </FloatingTag>
                    </Visual>
                </HeroContent>
            </Container>
        </HeroSection>
    )
}
