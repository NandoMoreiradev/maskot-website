'use client'

import styled, { keyframes, css } from 'styled-components'
import {
    Folder, FolderPlus, FolderTree, FileText, FileSpreadsheet, Presentation, FileImage, FileArchive,
    Lock, Users, Globe, Link2, Copy, KeyRound, CalendarClock, Eye, Share2, History, RotateCcw, Trash2, Download,
    Upload, UploadCloud, Search, MousePointerClick, Keyboard, ArrowRightLeft, Pencil, Check, HardDrive,
    ShieldCheck, Smartphone, Gauge, PackagePlus, Archive, ListChecks, UserCheck, Layers, Sparkles, Image as ImageIcon,
    ClipboardList, CheckSquare, GraduationCap, AlertTriangle, Building2
} from 'lucide-react'

// --- Animations ---
const float = keyframes`
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
`

const Section = styled.section`
    padding: 6rem 0;
    background: ${props => props.theme.colors.white};
    overflow: hidden;
`

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
`

const FeatureRow = styled.div<{ $reverse?: boolean }>`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    align-items: center;
    margin-bottom: 8rem;

    @media (max-width: ${props => props.theme.breakpoints.lg}) {
        grid-template-columns: 1fr;
        gap: 3rem;
        margin-bottom: 6rem;
        display: flex;
        flex-direction: column-reverse;

        ${props => !props.$reverse && css`
            flex-direction: column;
        `}
    }
`

const TextContent = styled.div`
    h3 {
        font-size: 2.25rem;
        font-weight: 800;
        margin-bottom: 1.5rem;
        line-height: 1.2;
        color: #0F172A;
    }

    p {
        font-size: 1.1rem;
        color: #475569;
        line-height: 1.6;
        margin-bottom: 2rem;
    }

    ul {
        list-style: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
    }

    li {
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        font-size: 1rem;
        font-weight: 600;
        color: #0F172A;

        svg {
            color: #0369A1;
            flex-shrink: 0;
            margin-top: 2px;
        }
    }
`

const ActHeader = styled.div`
    text-align: center;
    max-width: 720px;
    margin: 0 auto 5rem;

    .eyebrow {
        display: inline-block;
        padding: 0.35rem 0.9rem;
        border-radius: 999px;
        background: #E0F2FE;
        color: #0369A1;
        font-size: 0.8rem;
        font-weight: 800;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        margin-bottom: 1rem;
    }

    h2 {
        font-size: 2.5rem;
        font-weight: 800;
        line-height: 1.15;
        color: #0F172A;
        margin-bottom: 1rem;
    }

    p {
        font-size: 1.1rem;
        color: #475569;
        line-height: 1.6;
        margin: 0;
    }

    @media (max-width: 640px) {
        margin-bottom: 3rem;

        h2 { font-size: 1.85rem; }
    }
`

const ActDivider = styled.div`
    height: 1px;
    background: linear-gradient(90deg, transparent, #E2E8F0, transparent);
    margin: 2rem 0 6rem;
`

// --- UI MOCKUPS BASE ---
const MockupCard = styled.div`
    background: #FFFFFF;
    border-radius: 24px;
    box-shadow: 0 30px 60px rgba(0,0,0,0.05);
    border: 1px solid #E2E8F0;
    overflow: hidden;
    position: relative;
    animation: ${float} 8s ease-in-out infinite;
`

const MockupHeader = styled.div`
    height: 40px;
    background: #F8FAFC;
    border-bottom: 1px solid #E2E8F0;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    gap: 0.5rem;

    .dots {
        display: flex;
        gap: 6px;

        div {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #CBD5E1;
        }
    }
`

const Dots = () => (
    <MockupHeader>
        <div className="dots">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </MockupHeader>
)

// --- MOCKUP 1: NAVEGAÇÃO (ÁRVORE + LISTA) ---
const BrowserMock = styled.div`
    display: grid;
    grid-template-columns: 170px 1fr;
    min-height: 380px;
    background: #FFFFFF;

    .side {
        padding: 12px 10px;
        background: #F8FAFC;
        border-right: 1px solid #E2E8F0;
        display: flex;
        flex-direction: column;
        gap: 2px;
    }

    .nav {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 7px 9px;
        border-radius: 8px;
        font-size: 11.5px;
        font-weight: 600;
        color: #475569;

        svg { flex-shrink: 0; }
    }

    .nav.on { background: #E0F2FE; color: #0369A1; font-weight: 800; }

    .tlabel {
        margin: 12px 9px 4px;
        font-size: 9.5px;
        font-weight: 800;
        color: #94A3B8;
        text-transform: uppercase;
        letter-spacing: 0.06em;
    }

    .tree {
        display: flex;
        align-items: center;
        gap: 7px;
        padding: 5px 9px;
        border-radius: 8px;
        font-size: 11.5px;
        font-weight: 600;
        color: #334155;

        svg { flex-shrink: 0; }
        &.l2 { padding-left: 24px; }
        &.on { background: #E0F2FE; color: #0369A1; font-weight: 800; }
        .lk { margin-left: auto; color: #94A3B8; }
    }

    .main { padding: 14px; display: flex; flex-direction: column; gap: 10px; min-width: 0; }

    .bar {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 12px;
        border-radius: 10px;
        background: #E0F2FE;
        border: 1px solid #BAE6FD;
        font-size: 11.5px;
        font-weight: 800;
        color: #075985;
        flex-wrap: wrap;

        .sp { flex: 1; }

        .act {
            padding: 4px 10px;
            border-radius: 999px;
            background: #FFFFFF;
            border: 1px solid #BAE6FD;
            font-weight: 700;
            display: inline-flex;
            align-items: center;
            gap: 5px;
            font-size: 11px;
        }

        .act.del { color: #B91C1C; border-color: #FECACA; }
    }

    .row {
        display: grid;
        grid-template-columns: 1.6fr 0.6fr 0.8fr;
        gap: 8px;
        align-items: center;
        padding: 9px 10px;
        border-radius: 8px;
        font-size: 11.5px;
        color: #64748B;

        strong {
            display: flex;
            align-items: center;
            gap: 8px;
            color: #0F172A;
            font-size: 12px;
            min-width: 0;
        }

        &.sel { background: #F0F9FF; outline: 1.5px solid #7DD3FC; }
        &.th { font-size: 9.5px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; color: #94A3B8; padding-bottom: 2px; }
    }

    .drag {
        align-self: flex-start;
        margin-left: 24px;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 6px 12px;
        border-radius: 8px;
        background: #0F172A;
        color: #FFFFFF;
        font-size: 11px;
        font-weight: 700;
        box-shadow: 0 8px 20px rgba(15, 23, 42, 0.2);
    }

    @media (max-width: 640px) {
        grid-template-columns: 1fr;
        .side { display: none; }
        .row { grid-template-columns: 1.6fr 0.8fr; }
        .row > :nth-child(2) { display: none; }
    }
`

// --- MOCKUP 2: UPLOAD ---
const UploadMock = styled.div`
    padding: 1.25rem;
    background: #F8FAFC;
    display: flex;
    flex-direction: column;
    gap: 12px;

    .drop {
        border: 2px dashed #7DD3FC;
        background: #F0F9FF;
        border-radius: 14px;
        padding: 18px;
        text-align: center;
        color: #0369A1;
        font-size: 12.5px;
        font-weight: 800;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 6px;

        span { font-size: 11px; font-weight: 600; color: #64748B; }
    }

    .item {
        background: #FFFFFF;
        border: 1px solid #E2E8F0;
        border-radius: 10px;
        padding: 10px 12px;
        font-size: 12px;
        font-weight: 600;
        color: #0F172A;

        .top { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; }
        .st { margin-left: auto; font-size: 11px; font-weight: 800; color: #0369A1; }
        .st.ok { color: #15803D; }
        .bar { height: 5px; border-radius: 3px; background: #E2E8F0; overflow: hidden; }
        .fill { height: 100%; background: #0369A1; border-radius: 3px; }
        .fill.ok { background: #16A34A; }
    }

    .dup {
        background: #FFFFFF;
        border: 1px solid #FDE68A;
        border-left: 4px solid #D97706;
        border-radius: 12px;
        padding: 12px 14px;
        font-size: 12px;
        color: #334155;
        line-height: 1.5;

        b { color: #0F172A; }

        .opts { display: flex; gap: 6px; flex-wrap: wrap; margin-top: 10px; }

        .opt {
            padding: 5px 11px;
            border-radius: 999px;
            border: 1px solid #E2E8F0;
            background: #F8FAFC;
            font-size: 11px;
            font-weight: 700;
            color: #334155;
        }

        .opt.on { background: #0369A1; border-color: #0369A1; color: #FFFFFF; }
    }
`

// --- MOCKUP 3: DOCUMENTOS OFFICE ---
const OfficeMock = styled.div`
    padding: 1.25rem;
    background: #F8FAFC;
    display: flex;
    flex-direction: column;
    gap: 12px;

    .menu {
        background: #FFFFFF;
        border: 1px solid #E2E8F0;
        border-radius: 12px;
        box-shadow: 0 12px 28px rgba(15, 23, 42, 0.08);
        padding: 6px;
        width: 100%;
        max-width: 280px;
    }

    .mi {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 8px 10px;
        border-radius: 8px;
        font-size: 12px;
        font-weight: 600;
        color: #334155;
    }

    .mi.head {
        font-size: 9.5px;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: #94A3B8;
        padding-bottom: 2px;
    }

    .mi.hl { background: #F0F9FF; color: #0369A1; font-weight: 800; }
    .sep { height: 1px; background: #F1F5F9; margin: 4px 0; }

    .editor {
        background: #FFFFFF;
        border: 1px solid #E2E8F0;
        border-radius: 12px;
        overflow: hidden;
    }

    .etop {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 9px 12px;
        background: #185ABD;
        color: #FFFFFF;
        font-size: 11.5px;
        font-weight: 700;

        .badge {
            margin-left: auto;
            padding: 2px 9px;
            border-radius: 999px;
            background: rgba(255,255,255,0.18);
            font-size: 10px;
            font-weight: 800;
        }
    }

    .page {
        padding: 14px 16px;
        display: flex;
        flex-direction: column;
        gap: 7px;

        .ln { height: 7px; border-radius: 4px; background: #E2E8F0; }
        .ln.h { width: 55%; height: 10px; background: #CBD5E1; margin-bottom: 4px; }
    }

    .saved {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 8px 12px;
        border-top: 1px solid #F1F5F9;
        font-size: 11px;
        font-weight: 700;
        color: #15803D;
    }
`

// --- MOCKUP 4: NOVA PASTA / PERMISSÕES ---
const AccessMock = styled.div`
    padding: 1.25rem;
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
    gap: 12px;

    h5 { margin: 0; font-size: 15px; font-weight: 800; color: #0F172A; }
    .sub { font-size: 12px; color: #64748B; margin-top: -6px; }
    .lbl { font-size: 11px; font-weight: 800; color: #475569; text-transform: uppercase; letter-spacing: 0.04em; }

    .name {
        padding: 10px 12px;
        border-radius: 10px;
        border: 1.5px solid #E2E8F0;
        background: #F8FAFC;
        font-size: 12.5px;
        color: #0F172A;
        font-weight: 600;
    }

    .swatches { display: flex; gap: 8px; }
    .sw { width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #FFFFFF; }

    .card {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 10px 12px;
        border-radius: 12px;
        border: 1.5px solid #E2E8F0;
        background: #FFFFFF;

        .ic { width: 34px; height: 34px; border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .tx { flex: 1; min-width: 0; font-size: 11px; color: #64748B; line-height: 1.4; }
        .tx strong { display: block; font-size: 12.5px; color: #0F172A; }
        .rd { width: 16px; height: 16px; border-radius: 50%; border: 2px solid #CBD5E1; flex-shrink: 0; }
    }

    .card.on { border-color: #0369A1; background: #F0F9FF; }
    .card.on .rd { border-color: #0369A1; background: radial-gradient(#0369A1 45%, #FFFFFF 50%); }

    .who { display: flex; flex-wrap: wrap; gap: 6px; }
    .who span {
        padding: 4px 10px;
        border-radius: 999px;
        background: #F1F5F9;
        border: 1px solid #E2E8F0;
        font-size: 11px;
        font-weight: 600;
        color: #334155;
    }
    .who span.role { background: #E0F2FE; border-color: #BAE6FD; color: #075985; font-weight: 800; }

    .inherit {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 11.5px;
        color: #475569;
        font-weight: 600;
    }
`

// --- MOCKUP 5: LINKS ---
const ShareMock = styled.div`
    padding: 1.25rem;
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
    gap: 12px;

    h5 { margin: 0; font-size: 15px; font-weight: 800; color: #0F172A; }
    .sub { font-size: 12px; color: #64748B; margin-top: -6px; }

    .field {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 12px;
        border-radius: 10px;
        border: 1.5px solid #E2E8F0;
        background: #F8FAFC;
        font-size: 12px;
        color: #64748B;
        font-weight: 600;

        svg { color: #94A3B8; flex-shrink: 0; }
    }

    .gen {
        align-self: flex-start;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 9px 16px;
        border-radius: 999px;
        background: #0369A1;
        color: #FFFFFF;
        font-size: 12px;
        font-weight: 800;
    }

    .lbl { font-size: 11px; font-weight: 800; color: #475569; text-transform: uppercase; letter-spacing: 0.04em; }

    .link {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 11px 12px;
        border-radius: 12px;
        border: 1px solid #E2E8F0;
        background: #F8FAFC;

        .main { flex: 1; min-width: 0; }
        .url { font-size: 12px; font-weight: 700; color: #0F172A; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .meta { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 3px; font-size: 10.5px; color: #64748B; font-weight: 600; }
        .meta .exp { color: #B45309; }

        .ib {
            width: 30px; height: 30px; border-radius: 8px; border: 1px solid #E2E8F0; background: #FFFFFF;
            display: flex; align-items: center; justify-content: center; color: #475569; flex-shrink: 0;
        }
        .ib.del { color: #B91C1C; }
    }

    .internal {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 12px;
        border-radius: 10px;
        background: #F0F9FF;
        border: 1px solid #BAE6FD;
        font-size: 11.5px;
        color: #075985;
        font-weight: 600;
    }
`

// --- MOCKUP 6: VERSÕES ---
const VersionsMock = styled.div`
    padding: 1.25rem;
    background: #F8FAFC;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .head { font-size: 13px; font-weight: 800; color: #0F172A; display: flex; align-items: center; gap: 8px; }
    .head span { font-size: 11px; color: #64748B; font-weight: 600; margin-left: auto; }

    .ver {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px 14px;
        border-radius: 12px;
        border: 1px solid #E2E8F0;
        background: #FFFFFF;

        .tx { flex: 1; min-width: 0; font-size: 11px; color: #64748B; line-height: 1.5; }
        .tx strong { font-size: 13px; color: #0F172A; margin-right: 6px; }
        .cur { padding: 1px 8px; border-radius: 999px; background: #16A34A; color: #FFFFFF; font-size: 10px; font-weight: 800; }

        .dl {
            width: 30px; height: 30px; border-radius: 8px; border: 1px solid #E2E8F0; background: #FFFFFF;
            display: flex; align-items: center; justify-content: center; color: #475569; flex-shrink: 0;
        }

        .rs {
            display: inline-flex; align-items: center; gap: 5px; padding: 6px 12px; border-radius: 999px;
            background: #0369A1; color: #FFFFFF; font-size: 11px; font-weight: 800; flex-shrink: 0;
        }
    }

    .ver.cur-row { border-color: #7DD3FC; background: #F0F9FF; }

    .note {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 12px;
        border-radius: 10px;
        background: #F0FDF4;
        border: 1px solid #BBF7D0;
        color: #15803D;
        font-size: 11.5px;
        font-weight: 700;
    }
`

// --- MOCKUP 7: LIXEIRA ---
const TrashMock = styled.div`
    padding: 1.25rem;
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .banner {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 14px;
        border-radius: 10px;
        background: #FFFBEB;
        border: 1px solid #FDE68A;
        color: #92400E;
        font-size: 11.5px;
        font-weight: 700;
    }

    .tr {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 10px 12px;
        border-radius: 12px;
        border: 1px solid #E2E8F0;
        background: #F8FAFC;

        .ic { width: 36px; height: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .tx { flex: 1; min-width: 0; font-size: 11px; color: #64748B; line-height: 1.45; }
        .tx strong { display: block; font-size: 12.5px; color: #0F172A; }

        .btns { display: flex; gap: 6px; flex-shrink: 0; }
        .btn {
            display: inline-flex; align-items: center; gap: 5px; padding: 6px 11px; border-radius: 8px;
            border: 1px solid #E2E8F0; background: #FFFFFF; font-size: 11px; font-weight: 700; color: #334155;
        }
        .btn.del { color: #B91C1C; }
    }

    @media (max-width: 640px) {
        .btn span { display: none; }
    }
`

// --- MOCKUP 8: MÍDIAS DO CRM ---
const CrmMock = styled.div`
    padding: 1.25rem;
    background: #F8FAFC;
    display: flex;
    flex-direction: column;
    gap: 12px;

    .crumbs {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 6px;
        font-size: 12px;
        font-weight: 700;
        color: #64748B;

        .now { color: #0F172A; }
        .sep { color: #CBD5E1; }
    }

    .cats {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 8px;
    }

    .cat {
        padding: 12px;
        border-radius: 12px;
        background: #FFFFFF;
        border: 1px solid #E2E8F0;
        display: flex;
        flex-direction: column;
        gap: 8px;
        font-size: 12px;
        font-weight: 800;
        color: #0F172A;

        .ic { width: 30px; height: 30px; border-radius: 9px; display: flex; align-items: center; justify-content: center; color: #FFFFFF; }
        span { font-size: 10.5px; color: #64748B; font-weight: 600; }
    }

    .lbl { font-size: 10px; font-weight: 800; color: #64748B; text-transform: uppercase; letter-spacing: 0.05em; }

    .ent {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 12px;
        border-radius: 10px;
        background: #FFFFFF;
        border: 1px solid #E2E8F0;
        font-size: 12px;
        font-weight: 700;
        color: #0F172A;

        .cnt { margin-left: auto; font-size: 11px; color: #64748B; font-weight: 600; }
    }

    .file {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 12px;
        border-radius: 10px;
        background: #FFFFFF;
        border: 1px solid #E2E8F0;
        font-size: 12px;
        font-weight: 600;
        color: #0F172A;

        .rel { margin-left: auto; font-size: 10.5px; color: #64748B; font-weight: 600; white-space: nowrap; }
    }

    @media (max-width: 640px) {
        .cats { grid-template-columns: 1fr; }
    }
`

// --- MOCKUP 9: ARMAZENAMENTO ---
const StorageMock = styled.div`
    padding: 1.25rem;
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
    gap: 12px;

    .card {
        border: 1px solid #E2E8F0;
        border-radius: 14px;
        padding: 14px 16px;
        background: #F8FAFC;
    }

    .top { display: flex; justify-content: space-between; font-size: 12px; color: #64748B; font-weight: 700; margin-bottom: 8px; }
    .top b { color: #0F172A; }
    .bar { height: 8px; border-radius: 4px; background: #E2E8F0; overflow: hidden; }
    .fill { width: 76%; height: 100%; background: linear-gradient(90deg, #0369A1, #0EA5E9); border-radius: 4px; }

    .split { margin-top: 12px; display: flex; flex-direction: column; gap: 6px; font-size: 11.5px; color: #475569; }
    .split div { display: flex; justify-content: space-between; }
    .split b { color: #0F172A; }

    .warn {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 11px 14px;
        border-radius: 12px;
        background: #FFFBEB;
        border: 1px solid #FDE68A;
        color: #92400E;
        font-size: 11.5px;
        font-weight: 700;
        line-height: 1.45;

        svg { flex-shrink: 0; }
        .go {
            margin-left: auto;
            padding: 6px 12px;
            border-radius: 999px;
            background: #0369A1;
            color: #FFFFFF;
            font-size: 11px;
            font-weight: 800;
            white-space: nowrap;
        }
    }

    .zip {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 11px 14px;
        border-radius: 12px;
        border: 1px solid #E2E8F0;
        font-size: 12px;
        font-weight: 700;
        color: #0F172A;

        span { margin-left: auto; font-size: 11px; color: #64748B; font-weight: 600; }
    }
`

// --- POWER GRID ---
const PowerGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 4rem;

    @media (max-width: ${props => props.theme.breakpoints.md}) {
        grid-template-columns: 1fr;
    }
`

const PowerCard = styled.div`
    background: #F8FAFC;
    padding: 2rem;
    border-radius: 20px;
    border: 1px solid #E2E8F0;
    transition: all ${props => props.theme.transitions.base};

    &:hover {
        transform: translateY(-5px);
        background: white;
        box-shadow: 0 20px 40px -10px rgba(0,0,0,0.08);
        border-color: #BAE6FD;
    }

    .icon {
        width: 48px;
        height: 48px;
        border-radius: 12px;
        background: white;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #0369A1;
        margin-bottom: 1.5rem;
        box-shadow: 0 4px 10px rgba(0,0,0,0.05);
    }

    h4 {
        font-size: 1.25rem;
        font-weight: 700;
        margin-bottom: 0.75rem;
        color: #0F172A;
    }

    p {
        font-size: 1rem;
        color: #475569;
        line-height: 1.5;
        margin: 0;
    }
`

const MoreTools = styled.div`
    margin-top: 2.5rem;
    text-align: center;

    p {
        font-size: 0.95rem;
        font-weight: 700;
        color: #475569;
        margin-bottom: 1rem;
    }

    .chips {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 0.6rem;
    }

    span {
        padding: 0.45rem 0.95rem;
        border-radius: 999px;
        background: #F1F5F9;
        border: 1px solid #E2E8F0;
        font-size: 0.85rem;
        font-weight: 600;
        color: #334155;
    }
`

const Availability = styled.div`
    margin-top: 5rem;
    padding: 1.5rem 1.75rem;
    border-radius: 20px;
    background: #F0F9FF;
    border: 1px solid #BAE6FD;
    display: flex;
    gap: 1rem;
    align-items: flex-start;

    svg { color: #0369A1; flex-shrink: 0; margin-top: 2px; }

    strong { display: block; color: #075985; margin-bottom: 0.25rem; font-size: 1rem; }
    p { margin: 0; color: #075985; font-size: 0.95rem; line-height: 1.6; }
`

export default function DriveDeepDive() {
    return (
        <Section id="recursos">
            <Container>

                <ActHeader>
                    <span className="eyebrow">1 · Organizar</span>
                    <h2>Cada documento no seu lugar, e fácil de achar</h2>
                    <p>Pastas, subpastas, busca e atalhos de teclado. A secretaria encontra o contrato em segundos, sem perguntar para quem salvou.</p>
                </ActHeader>

                {/* 1. PASTAS E NAVEGAÇÃO */}
                <FeatureRow>
                    <TextContent>
                        <h3>Pastas com cor, subpastas e arrastar para organizar.</h3>
                        <p>
                            O Drive funciona como o que a equipe já conhece: uma árvore de pastas na lateral e os arquivos ao lado, em grade ou em lista. Sem treinamento e sem manual.
                        </p>
                        <ul>
                            <li><FolderTree size={20}/> <strong>Árvore de pastas:</strong> crie subpastas, escolha uma cor para cada pasta e navegue pelas migalhas no topo.</li>
                            <li><MousePointerClick size={20}/> <strong>Arraste e solte:</strong> mova arquivos e pastas para dentro de outra pasta, para a árvore lateral ou para um nível do caminho.</li>
                            <li><Search size={20}/> <strong>Busca e ordenação:</strong> procure por nome e ordene por data, nome ou tamanho, em grade ou em lista.</li>
                            <li><Keyboard size={20}/> <strong>Atalhos de teclado:</strong> Enter abre, F2 renomeia, Delete manda para a lixeira e Ctrl+A seleciona tudo. Com vários itens marcados, mova, baixe em ZIP ou exclua de uma vez.</li>
                        </ul>
                    </TextContent>

                    <MockupCard>
                        <Dots />
                        <BrowserMock>
                            <div className="side">
                                <div className="nav on"><HardDrive size={15}/> Meu Drive</div>
                                <div className="nav"><Users size={15}/> Compartilhado comigo</div>
                                <div className="nav"><ImageIcon size={15}/> Mídias do CRM</div>
                                <div className="nav"><Trash2 size={15}/> Lixeira</div>
                                <div className="tlabel">Pastas</div>
                                <div className="tree"><Folder size={15} fill="#5B8DEF" color="#5B8DEF"/> Secretaria <Lock size={11} className="lk"/></div>
                                <div className="tree l2 on"><Folder size={15} fill="#20C997" color="#20C997"/> Matrículas</div>
                                <div className="tree l2"><Folder size={15} fill="#F59F00" color="#F59F00"/> Contratos</div>
                                <div className="tree"><Folder size={15} fill="#E64980" color="#E64980"/> Eventos</div>
                                <div className="tree"><Folder size={15} fill="#7950F2" color="#7950F2"/> Pedagógico <Users size={11} className="lk"/></div>
                            </div>
                            <div className="main">
                                <div className="bar">
                                    3 selecionados <span className="sp"></span>
                                    <span className="act"><ArrowRightLeft size={12}/> Mover</span>
                                    <span className="act"><Download size={12}/> Baixar ZIP</span>
                                    <span className="act del"><Trash2 size={12}/> Excluir</span>
                                </div>
                                <div className="row th"><span>Nome</span><span>Tamanho</span><span>Modificado</span></div>
                                <div className="row sel"><strong><FileText size={17} color="#185ABD"/> Ficha de matrícula.docx</strong><span>84 KB</span><span>hoje</span></div>
                                <div className="row sel"><strong><FileSpreadsheet size={17} color="#217346"/> Lista de turmas 2027.xlsx</strong><span>212 KB</span><span>ontem</span></div>
                                <div className="row sel"><strong><FileText size={17} color="#E03131"/> Termo de autorização.pdf</strong><span>1,2 MB</span><span>12 out</span></div>
                                <div className="row"><strong><FileImage size={17} color="#20C997"/> Foto da fachada.jpg</strong><span>3,4 MB</span><span>02 out</span></div>
                                <div className="drag"><Folder size={14} fill="#F59F00" color="#F59F00"/> Soltar em “Contratos”</div>
                            </div>
                        </BrowserMock>
                    </MockupCard>
                </FeatureRow>

                {/* 2. UPLOAD */}
                <FeatureRow $reverse>
                    <MockupCard>
                        <Dots />
                        <UploadMock>
                            <div className="drop">
                                <UploadCloud size={26}/>
                                Solte aqui os arquivos ou a pasta inteira
                                <span>A estrutura de subpastas do seu computador é mantida</span>
                            </div>
                            <div className="item">
                                <div className="top"><FileText size={16} color="#E03131"/> Edital 2027.pdf <span className="st ok">Enviado</span></div>
                                <div className="bar"><div className="fill ok" style={{ width: '100%' }}></div></div>
                            </div>
                            <div className="item">
                                <div className="top"><FileArchive size={16} color="#F08C00"/> Fotos da formatura.zip <span className="st">64%</span></div>
                                <div className="bar"><div className="fill" style={{ width: '64%' }}></div></div>
                            </div>
                            <div className="dup">
                                <b>“Regimento interno.docx” já existe nesta pasta.</b> O que você prefere fazer?
                                <div className="opts">
                                    <span className="opt on">Substituir (nova versão)</span>
                                    <span className="opt">Manter os dois</span>
                                    <span className="opt">Pular</span>
                                </div>
                            </div>
                        </UploadMock>
                    </MockupCard>

                    <TextContent>
                        <h3>Arraste a pasta do computador e o Drive refaz a estrutura.</h3>
                        <p>
                            Envie arquivos soltos ou pastas inteiras, com todas as subpastas. Se um arquivo falhar, os outros continuam subindo, e o painel de envio mostra o que aconteceu com cada um.
                        </p>
                        <ul>
                            <li><UploadCloud size={20}/> <strong>Arquivos e pastas inteiras:</strong> arraste do computador para a página ou use o botão Novo. Pastas vazias também são criadas.</li>
                            <li><Layers size={20}/> <strong>Progresso por arquivo:</strong> acompanhe cada envio e veja o erro de quem não subiu, sem perder o restante.</li>
                            <li><Copy size={20}/> <strong>Nome repetido, você decide:</strong> substituir (o antigo vira uma versão anterior), manter os dois ou pular, com a opção de aplicar a escolha a todos os repetidos.</li>
                        </ul>
                    </TextContent>
                </FeatureRow>

                {/* 3. OFFICE ONLINE */}
                <FeatureRow>
                    <TextContent>
                        <h3>Crie e edite Word, Excel e PowerPoint sem sair do CRM.</h3>
                        <p>
                            Precisa de um documento novo? Crie em branco direto na pasta e edite no navegador. Nada de baixar, editar, salvar e subir de novo, e nada de &quot;versão_final_2_agora_vai.docx&quot;.
                        </p>
                        <ul>
                            <li><Pencil size={20}/> <strong>Editor de documentos online:</strong> abre Word, Excel, PowerPoint, LibreOffice, texto e CSV direto no Drive.</li>
                            <li><FolderPlus size={20}/> <strong>Documento novo em um clique:</strong> documento Word, planilha Excel, apresentação PowerPoint ou nota de texto, já na pasta onde você está.</li>
                            <li><Eye size={20}/> <strong>Editar ou só ver:</strong> quem tem permissão de editar altera o arquivo; quem só pode ver abre em modo de visualização.</li>
                            <li><History size={20}/> <strong>Cada edição vira versão:</strong> o que foi salvo no editor entra no histórico do arquivo, pronto para voltar atrás se preciso.</li>
                        </ul>
                    </TextContent>

                    <MockupCard>
                        <Dots />
                        <OfficeMock>
                            <div className="menu">
                                <div className="mi hl"><FolderPlus size={16} color="#5B8DEF"/> Nova pasta</div>
                                <div className="mi"><Upload size={16}/> Upload de arquivos</div>
                                <div className="mi"><Upload size={16}/> Upload de pasta</div>
                                <div className="sep"></div>
                                <div className="mi head">Criar documento</div>
                                <div className="mi"><FileText size={16} color="#185ABD"/> Documento Word</div>
                                <div className="mi"><FileSpreadsheet size={16} color="#217346"/> Planilha Excel</div>
                                <div className="mi"><Presentation size={16} color="#C43E1C"/> Apresentação PowerPoint</div>
                                <div className="mi"><FileText size={16} color="#64748B"/> Nota de texto</div>
                            </div>
                            <div className="editor">
                                <div className="etop"><FileText size={14}/> Regimento interno.docx <span className="badge">Editando</span></div>
                                <div className="page">
                                    <div className="ln h"></div>
                                    <div className="ln"></div>
                                    <div className="ln" style={{ width: '92%' }}></div>
                                    <div className="ln" style={{ width: '78%' }}></div>
                                </div>
                                <div className="saved"><Check size={13}/> Salvo no Drive · nova versão criada</div>
                            </div>
                        </OfficeMock>
                    </MockupCard>
                </FeatureRow>

                <ActDivider />

                <ActHeader>
                    <span className="eyebrow">2 · Proteger e compartilhar</span>
                    <h2>Cada pasta com o seu público</h2>
                    <p>Contrato não é para todo mundo ver, e material de aula não precisa ficar escondido. Você define o público de cada pasta e o que sai da escola.</p>
                </ActHeader>

                {/* 4. VISIBILIDADE */}
                <FeatureRow>
                    <TextContent>
                        <h3>Toda a escola, só um grupo ou só você: a pasta decide.</h3>
                        <p>
                            Na criação da pasta você escolhe quem enxerga o conteúdo. O acesso vale para tudo que está dentro, e as subpastas já nascem com a regra da pasta de cima.
                        </p>
                        <ul>
                            <li><Globe size={20}/> <strong>Toda a escola:</strong> qualquer usuário da unidade vê a pasta, ideal para modelos, manuais e materiais de apoio.</li>
                            <li><Users size={20}/> <strong>Restrita:</strong> só os cargos ou os usuários que você marcar, como Financeiro e Direção, e mais ninguém.</li>
                            <li><Lock size={20}/> <strong>Privada:</strong> só quem criou e os administradores. Usuários comuns criam pastas privadas, e a abertura para a escola é feita por administradores.</li>
                            <li><ShieldCheck size={20}/> <strong>Mudou de ideia?</strong> O dono da pasta ou um administrador altera a visibilidade e, se quiser, aplica a mesma regra a todas as subpastas de uma vez.</li>
                        </ul>
                    </TextContent>

                    <MockupCard>
                        <Dots />
                        <AccessMock>
                            <h5>Nova pasta</h5>
                            <div className="sub">Será criada em: Meu Drive</div>
                            <div className="lbl">Nome da pasta</div>
                            <div className="name">Folha de pagamento</div>
                            <div className="swatches">
                                <div className="sw" style={{ background: '#5B8DEF' }}></div>
                                <div className="sw" style={{ background: '#20C997' }}></div>
                                <div className="sw" style={{ background: '#F59F00' }}><Check size={13}/></div>
                                <div className="sw" style={{ background: '#E64980' }}></div>
                                <div className="sw" style={{ background: '#7950F2' }}></div>
                            </div>
                            <div className="lbl">Quem pode ver esta pasta?</div>
                            <div className="card">
                                <div className="ic" style={{ background: '#F0FDF4', color: '#16A34A' }}><Globe size={18}/></div>
                                <div className="tx"><strong>Toda a Escola</strong>Todos os usuários da escola têm acesso.</div>
                                <div className="rd"></div>
                            </div>
                            <div className="card on">
                                <div className="ic" style={{ background: '#EFF6FF', color: '#2563EB' }}><Users size={18}/></div>
                                <div className="tx"><strong>Restrita</strong>Apenas cargos ou usuários selecionados.</div>
                                <div className="rd"></div>
                            </div>
                            <div className="who">
                                <span className="role">Administrador da Escola</span>
                                <span>Renata · Financeiro</span>
                                <span>Direção</span>
                            </div>
                            <div className="card">
                                <div className="ic" style={{ background: '#FEF2F2', color: '#DC2626' }}><Lock size={18}/></div>
                                <div className="tx"><strong>Privada</strong>Apenas você e os administradores.</div>
                                <div className="rd"></div>
                            </div>
                        </AccessMock>
                    </MockupCard>
                </FeatureRow>

                {/* 5. LINKS E COMPARTILHAMENTO */}
                <FeatureRow $reverse>
                    <MockupCard>
                        <Dots />
                        <ShareMock>
                            <h5>Compartilhar pasta</h5>
                            <div className="sub">“Material de matrícula”: quem tiver o link vê os arquivos e as subpastas.</div>
                            <div className="field"><KeyRound size={15}/> Senha (opcional)</div>
                            <div className="field"><CalendarClock size={15}/> Expira em (opcional)</div>
                            <div className="gen"><Link2 size={14}/> Gerar novo link</div>
                            <div className="lbl">Links ativos</div>
                            <div className="link">
                                <div className="main">
                                    <div className="url">maskotedu.com.br/d/folder/8f3a…c21</div>
                                    <div className="meta"><span>24 acessos</span><span><Lock size={10}/> com senha</span><span className="exp">Expira em 15/11</span></div>
                                </div>
                                <div className="ib"><Copy size={14}/></div>
                                <div className="ib del"><Trash2 size={14}/></div>
                            </div>
                            <div className="internal"><Users size={15}/> Também dá para compartilhar um arquivo com colegas: ele aparece em “Compartilhado comigo”.</div>
                        </ShareMock>
                    </MockupCard>

                    <TextContent>
                        <h3>Mande um link, não o arquivo. E desligue quando quiser.</h3>
                        <p>
                            Para famílias, fornecedores e parceiros, gere um link público de um arquivo ou de uma pasta inteira. O que você compartilha continua sob o seu controle, mesmo depois de enviado.
                        </p>
                        <ul>
                            <li><KeyRound size={20}/> <strong>Senha e validade:</strong> proteja o link com senha e defina uma data para ele deixar de funcionar sozinho.</li>
                            <li><Eye size={20}/> <strong>Contador de acessos:</strong> veja quantas vezes cada link foi aberto e quando foi criado.</li>
                            <li><Trash2 size={20}/> <strong>Revogue na hora:</strong> cada link pode ser cancelado individualmente, e ele para de abrir imediatamente.</li>
                            <li><Share2 size={20}/> <strong>Entre colegas:</strong> compartilhe um arquivo com usuários específicos da escola, que o encontram na aba &quot;Compartilhado comigo&quot;.</li>
                        </ul>
                    </TextContent>
                </FeatureRow>

                <ActDivider />

                <ActHeader>
                    <span className="eyebrow">3 · Não perder nada</span>
                    <h2>Errou? O Drive volta no tempo</h2>
                    <p>Apagou sem querer, salvou por cima ou editou o arquivo errado. Tudo tem volta.</p>
                </ActHeader>

                {/* 6. VERSÕES */}
                <FeatureRow>
                    <TextContent>
                        <h3>Cada versão do arquivo fica guardada, e restaurar é um clique.</h3>
                        <p>
                            Quando alguém substitui um arquivo ou edita no editor online, a versão anterior não desaparece. O histórico mostra quem mexeu, quando e quanto pesa cada versão.
                        </p>
                        <ul>
                            <li><History size={20}/> <strong>Histórico por arquivo:</strong> número da versão, data, tamanho e autor, com a versão atual destacada.</li>
                            <li><Download size={20}/> <strong>Baixe qualquer versão:</strong> compare com a atual antes de decidir voltar.</li>
                            <li><RotateCcw size={20}/> <strong>Restaure sem perder o resto:</strong> a versão escolhida vira a atual e o histórico continua intacto.</li>
                            <li><Archive size={20}/> <strong>Espaço sob controle:</strong> o Drive mantém até 10 versões de cada arquivo e limpa automaticamente as mais antigas.</li>
                        </ul>
                    </TextContent>

                    <MockupCard>
                        <Dots />
                        <VersionsMock>
                            <div className="head"><History size={16} color="#0369A1"/> Histórico de versões <span>Regimento interno.docx</span></div>
                            <div className="ver cur-row">
                                <div className="tx"><strong>Versão 3</strong><span className="cur">Atual</span><br/>29 de outubro às 18:12<br/>218 KB · por Marina Alves</div>
                                <div className="dl"><Download size={14}/></div>
                            </div>
                            <div className="ver">
                                <div className="tx"><strong>Versão 2</strong><br/>22 de outubro às 09:40<br/>214 KB · edição no editor online</div>
                                <div className="dl"><Download size={14}/></div>
                                <div className="rs"><RotateCcw size={12}/> Restaurar</div>
                            </div>
                            <div className="ver">
                                <div className="tx"><strong>Versão 1</strong><br/>03 de outubro às 15:21<br/>209 KB · por Paulo Lima</div>
                                <div className="dl"><Download size={14}/></div>
                                <div className="rs"><RotateCcw size={12}/> Restaurar</div>
                            </div>
                            <div className="note"><Check size={14}/> A versão 2 virou a atual. O histórico foi mantido.</div>
                        </VersionsMock>
                    </MockupCard>
                </FeatureRow>

                {/* 7. LIXEIRA */}
                <FeatureRow $reverse>
                    <MockupCard>
                        <Dots />
                        <TrashMock>
                            <div className="banner"><AlertTriangle size={15}/> Os itens ficam na lixeira por 30 dias e depois são excluídos definitivamente.</div>
                            <div className="tr">
                                <div className="ic" style={{ background: '#FEF3C71F', color: '#F59F00' }}><Folder size={22} fill="#F59F00" color="#F59F00"/></div>
                                <div className="tx"><strong>Contratos 2025</strong>Excluída em 20 out · 14 arquivos · 24 dias restantes</div>
                                <div className="btns"><span className="btn"><RotateCcw size={13}/> <span>Restaurar</span></span><span className="btn del"><Trash2 size={13}/></span></div>
                            </div>
                            <div className="tr">
                                <div className="ic" style={{ background: '#F1F5F9' }}><FileSpreadsheet size={20} color="#217346"/></div>
                                <div className="tx"><strong>Previsão de matrículas.xlsx</strong>1,4 MB · excluído em 27 out · 27 dias restantes</div>
                                <div className="btns"><span className="btn"><RotateCcw size={13}/> <span>Restaurar</span></span><span className="btn del"><Trash2 size={13}/></span></div>
                            </div>
                            <div className="tr">
                                <div className="ic" style={{ background: '#F1F5F9' }}><FileImage size={20} color="#20C997"/></div>
                                <div className="tx"><strong>Banner da feira.png</strong>5,8 MB · excluído em 28 out · 28 dias restantes</div>
                                <div className="btns"><span className="btn"><RotateCcw size={13}/> <span>Restaurar</span></span><span className="btn del"><Trash2 size={13}/></span></div>
                            </div>
                        </TrashMock>
                    </MockupCard>

                    <TextContent>
                        <h3>Lixeira de 30 dias: apagou sem querer, está tudo lá.</h3>
                        <p>
                            Excluir no Drive manda para a lixeira, e não para o esquecimento. Restaurar uma pasta traz de volta tudo que estava dentro dela, com as subpastas e os arquivos.
                        </p>
                        <ul>
                            <li><Trash2 size={20}/> <strong>30 dias para voltar atrás:</strong> a lixeira mostra quantos dias restam para cada item antes da exclusão definitiva.</li>
                            <li><RotateCcw size={20}/> <strong>Restaurar pasta inteira:</strong> se já existir outra pasta com o mesmo nome, a restaurada ganha um sufixo, sem sobrescrever nada.</li>
                            <li><ShieldCheck size={20}/> <strong>Exclusão definitiva com cuidado:</strong> quem tem permissão pode esvaziar a lixeira ou apagar um item para sempre, e para liberar espaço de verdade.</li>
                        </ul>
                    </TextContent>
                </FeatureRow>

                <ActDivider />

                <ActHeader>
                    <span className="eyebrow">4 · Conectar ao CRM</span>
                    <h2>O Drive conhece o resto do Maskot</h2>
                    <p>Os anexos de leads, tarefas e alunos aparecem organizados, e o espaço usado fica visível para quem administra.</p>
                </ActHeader>

                {/* 8. MÍDIAS DO CRM */}
                <FeatureRow>
                    <TextContent>
                        <h3>Todos os anexos do CRM em um lugar só.</h3>
                        <p>
                            O documento que o pai enviou, o anexo da tarefa e o arquivo do aluno nem sempre estão onde você lembra. A área &quot;Mídias do CRM&quot; reúne tudo e organiza pela origem.
                        </p>
                        <ul>
                            <li><UserCheck size={20}/> <strong>Por origem e por pessoa:</strong> navegue por Leads, Tarefas e Alunos e abra a pasta de cada lead, aluno ou tarefa com os arquivos dele.</li>
                            <li><ListChecks size={20}/> <strong>Busca no conjunto:</strong> procure um arquivo pelo nome sem lembrar em qual cadastro ele foi anexado.</li>
                            <li><Link2 size={20}/> <strong>Compartilhe como qualquer arquivo:</strong> gere um link para um anexo do CRM com senha e validade, sem precisar baixar e reenviar.</li>
                        </ul>
                    </TextContent>

                    <MockupCard>
                        <Dots />
                        <CrmMock>
                            <div className="crumbs"><HardDrive size={14} color="#0369A1"/> Mídias do CRM <span className="sep">›</span> Leads <span className="sep">›</span> <span className="now">Ana Silva</span></div>
                            <div className="cats">
                                <div className="cat"><div className="ic" style={{ background: '#0EA5E9' }}><ClipboardList size={16}/></div>Leads<span>128 arquivos</span></div>
                                <div className="cat"><div className="ic" style={{ background: '#8B5CF6' }}><CheckSquare size={16}/></div>Tarefas<span>46 arquivos</span></div>
                                <div className="cat"><div className="ic" style={{ background: '#F59E0B' }}><GraduationCap size={16}/></div>Alunos<span>312 arquivos</span></div>
                            </div>
                            <div className="lbl">Arquivos de Ana Silva</div>
                            <div className="file"><FileText size={17} color="#E03131"/> Certidão de nascimento.pdf <span className="rel">Lead · Ana Silva</span></div>
                            <div className="file"><FileImage size={17} color="#20C997"/> Comprovante de residência.jpg <span className="rel">Lead · Ana Silva</span></div>
                            <div className="file"><FileText size={17} color="#185ABD"/> Proposta enviada.docx <span className="rel">Lead · Ana Silva</span></div>
                        </CrmMock>
                    </MockupCard>
                </FeatureRow>

                {/* 9. ARMAZENAMENTO E ZIP */}
                <FeatureRow $reverse>
                    <MockupCard>
                        <Dots />
                        <StorageMock>
                            <div className="card">
                                <div className="top"><span>Armazenamento</span><b>38 GB / 50 GB</b></div>
                                <div className="bar"><div className="fill"></div></div>
                                <div className="split">
                                    <div><span>Arquivos (Drive e CRM)</span><b>21,4 GB</b></div>
                                    <div><span>Mídias de conversas</span><b>11,2 GB</b></div>
                                    <div><span>Documentos de alunos</span><b>4,1 GB</b></div>
                                    <div><span>Redes sociais</span><b>1,3 GB</b></div>
                                </div>
                            </div>
                            <div className="warn"><Gauge size={18}/> Você já usou mais de 70% do espaço. <span className="go">Aumentar espaço</span></div>
                            <div className="zip"><Archive size={17} color="#F08C00"/> Matrículas 2027.zip <span>pastas e subpastas mantidas</span></div>
                        </StorageMock>
                    </MockupCard>

                    <TextContent>
                        <h3>Veja o que ocupa espaço e baixe tudo em um ZIP.</h3>
                        <p>
                            O medidor fica sempre na lateral do Drive. A gestão enxerga o quanto já foi usado e de onde vem o peso, antes de o envio de arquivos ser bloqueado.
                        </p>
                        <ul>
                            <li><Gauge size={20}/> <strong>Medidor com aviso:</strong> passou de 70% do espaço, o Drive sugere aumentar o armazenamento. No limite, novos envios ficam bloqueados.</li>
                            <li><PackagePlus size={20}/> <strong>Mais espaço quando precisar:</strong> o armazenamento do plano pode ser ampliado com pacotes extras, sem trocar de plano.</li>
                            <li><Download size={20}/> <strong>Baixar em ZIP:</strong> selecione arquivos e pastas e leve tudo de uma vez, com a estrutura de subpastas preservada.</li>
                        </ul>
                    </TextContent>
                </FeatureRow>

                {/* 10. POWER FEATURES GRID */}
                <div style={{textAlign: 'center', marginBottom: '3rem'}}>
                    <h3 style={{
                        fontSize: '2rem',
                        fontWeight: 800,
                        color: '#0F172A',
                        fontFamily: 'var(--font-inter)'
                    }}>Detalhes que dão segurança à secretaria</h3>
                    <p style={{color: '#475569', marginTop: '0.5rem'}}>Documento de aluno e contrato pedem cuidado. O Drive foi pensado para isso desde a base.</p>
                </div>

                <PowerGrid>
                    <PowerCard>
                        <div className="icon"><KeyRound size={24}/></div>
                        <h4>Permissão por ação</h4>
                        <p>Ver, enviar e editar, e excluir são permissões separadas. Dê a cada cargo só o que ele precisa fazer.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><ShieldCheck size={24}/></div>
                        <h4>Arquivos privados por padrão</h4>
                        <p>Os arquivos do Drive não ficam abertos na internet. Eles só abrem por um link temporário gerado para quem tem acesso.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><Smartphone size={24}/></div>
                        <h4>Drive no aplicativo</h4>
                        <p>No celular, navegue pelas pastas, envie arquivos, crie pastas, renomeie, mova, compartilhe e consulte o histórico de versões.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><Layers size={24}/></div>
                        <h4>Seleção em lote</h4>
                        <p>Marque vários itens e mova, baixe ou exclua de uma vez. Ctrl+clique seleciona, e Esc limpa a seleção.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><Building2 size={24}/></div>
                        <h4>Uma unidade, um Drive</h4>
                        <p>Cada unidade da rede tem as suas pastas. Ao trocar a unidade no cabeçalho, o Drive mostra e grava os arquivos da escola escolhida.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><UploadCloud size={24}/></div>
                        <h4>Tamanho de upload por plano</h4>
                        <p>O limite por arquivo acompanha o plano: 100 MB no Essencial, 150 MB no Crescimento e 200 MB no Escala.</p>
                    </PowerCard>
                </PowerGrid>

                <MoreTools>
                    <p>E também:</p>
                    <div className="chips"><span>Grade ou lista</span><span>Menu do botão direito</span><span>Renomear arquivos</span><span>Mover para…</span><span>Seletor de pasta de destino</span><span>Cores de pasta</span><span>Visualização no navegador</span><span>Link de arquivo com senha</span><span>Links que expiram sozinhos</span><span>Cargo com acesso à pasta</span><span>Nota de texto</span><span>Pastas vazias no envio</span></div>
                </MoreTools>

                <Availability>
                    <Sparkles size={22}/>
                    <div>
                        <strong>Como contratar</strong>
                        <p>O Drive já vem em todos os planos do Maskot, com 10 GB no Essencial, 50 GB no Crescimento e 150 GB no Escala. Precisa de mais espaço? Contrate um pacote de armazenamento extra. Fale com um consultor para escolher o melhor plano para a sua escola.</p>
                    </div>
                </Availability>

            </Container>
        </Section>
    )
}
