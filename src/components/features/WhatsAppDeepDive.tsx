'use client'

import styled, {keyframes, css} from 'styled-components'
import {
    Users, ShieldCheck, Send, LineChart, Filter,
    Clock, Thermometer, Lock, Zap, Tag,
    Bot, MessageSquare,
    Sparkles, CalendarSync, FileHeart, UserPlus, Route,
    Instagram, Facebook, Inbox, Star, CalendarClock,
    Globe, MapPin, Mail, BellRing, Shuffle, MoonStar, EyeOff,
    Database, CheckCircle2, Layers, Copy, Server
} from 'lucide-react'
import Image from 'next/image'

// --- Animations ---
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
            color: #16A34A;
            flex-shrink: 0;
            margin-top: 2px;
        }
    }
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

// --- MOCKUP 1: INBOX ---
const ChatLayout = styled.div`
    display: flex;
    height: 400px;

    @media (max-width: 640px) {
        height: auto;
    }
`
const SidebarMock = styled.div`
    width: 30%;
    border-right: 1px solid #E2E8F0;
    padding: 10px;

    @media (max-width: 640px) {
        display: none;
    }

    .item {
        padding: 10px;
        margin-bottom: 5px;
        border-radius: 100px;
        display: flex;
        gap: 10px;
        align-items: center;
        transition: background 0.2s;
    }

    .item.active {
        background: #F0F2F5;
    }

    .avatar {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background: ${props => props.theme.colors.backgroundMedium};
    }

    .lines {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 6px;

        div {
            height: 8px;
            background: #E2E8F0;
            border-radius: 4px;
        }
    }
`
const ChatAreaMock = styled.div`
    flex: 1;
    background: ${props => props.theme.colors.whatsapp.background};
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    background-image: radial-gradient(#00000008 1px, transparent 0);
    background-size: 12px 12px;

    @media (max-width: 640px) {
        min-height: 260px;
        padding: 14px;
    }
`
const Bubble = styled.div<{ $sent?: boolean; $bot?: boolean; $note?: boolean }>`
    padding: 10px 14px;
    border-radius: 8px;
    background: ${props => props.$sent ? '#DCFCE7' : '#FFFFFF'};
    align-self: ${props => props.$sent ? 'flex-end' : 'flex-start'};
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    font-size: 13px;
    max-width: 80%;
    position: relative;
    line-height: 1.4;

    ${props => props.$bot && css`
        border-left: 3px solid #16A34A;
        &::before {
            content: '✨ Mia';
            font-size: 9px;
            color: #16A34A;
            font-weight: bold;
            display: block;
            margin-bottom: 4px;
        }
    `}

    ${props => props.$note && css`
        background: #FFF9C4;
        border: 1px dashed #FBC02D;
        align-self: center;
        width: 90%;
        max-width: 100%;
        color: #475569;
        font-style: italic;
        font-size: 12px;
        text-align: center;
    `}
`

// --- MOCKUP: ERP INTEGRATION ---
const ErpHeaderBadge = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 16px;
    background: #F8FAFC;
    border-bottom: 1px solid #E2E8F0;
    font-size: 11px;
    color: #475569;
    font-weight: 600;

    .status {
        display: flex;
        align-items: center;
        gap: 6px;
        color: #15803D;
        font-weight: 700;

        &::before {
            content: '';
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: #16A34A;
            box-shadow: 0 0 0 2px rgba(22, 163, 74, 0.2);
        }
    }

    .erp-pill {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        font-size: 10px;
        background: #FFFFFF;
        padding: 2px 8px;
        border-radius: 999px;
        border: 1px solid #CBD5E1;
        color: #334155;
    }
`

const ErpQueryPill = styled.div`
    align-self: center;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 5px 14px;
    border-radius: 999px;
    background: #F0FDF4;
    border: 1px solid #BBF7D0;
    color: #15803D;
    font-size: 11px;
    font-weight: 600;

    svg {
        flex-shrink: 0;
        color: #16A34A;
    }

    @media (max-width: 640px) {
        font-size: 10px;
        padding: 4px 10px;
    }
`

const BarcodeCard = styled.div`
    margin-top: 8px;
    padding: 8px 10px;
    background: #FFFFFF;
    border-radius: 6px;
    border: 1px solid #CBD5E1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;

    .code {
        font-family: monospace;
        font-size: 10px;
        color: #0F172A;
        font-weight: 600;
        word-break: break-all;
    }

    .copy-btn {
        display: inline-flex;
        align-items: center;
        gap: 3px;
        padding: 4px 8px;
        background: #16A34A;
        color: #FFFFFF;
        border-radius: 4px;
        font-size: 9.5px;
        font-weight: 700;
        white-space: nowrap;
        flex-shrink: 0;
    }
`

const SecurityNote = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 8px 12px;
    background: #F8FAFC;
    border-top: 1px solid #E2E8F0;
    font-size: 10.5px;
    color: #64748B;
    font-weight: 500;
    text-align: center;

    svg {
        color: #16A34A;
        flex-shrink: 0;
    }

    @media (max-width: 640px) {
        font-size: 9.5px;
        padding: 6px 10px;
    }
`

const ErpLogosRow = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 1.5rem;
    flex-wrap: wrap;

    span.label {
        font-size: 0.8rem;
        font-weight: 600;
        color: #64748B;
        margin-right: 2px;
    }

    span.tag {
        display: inline-flex;
        align-items: center;
        padding: 3px 9px;
        border-radius: 6px;
        background: #F8FAFC;
        border: 1px solid #E2E8F0;
        font-size: 0.75rem;
        font-weight: 600;
        color: #334155;
    }
`

// --- MOCKUP 2: FLUXO DE AUTOMAÇÃO ---
const FlowBuilderMock = styled.div`
    height: 380px;
    background: #f0f2f5;
    background-image: radial-gradient(#ccc 1px, transparent 0);
    background-size: 20px 20px;
    position: relative;
    padding: 20px;
    overflow: hidden;

    .node {
        background: white;
        border-radius: 8px;
        width: 200px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        border: 1px solid #E2E8F0;
        position: absolute;
        z-index: 2;

        &.start {
            top: 40px;
            left: 40%;
            border-top: 4px solid #16A34A;
        }

        &.question {
            top: 160px;
            left: 20%;
            border-top: 4px solid #F59E0B;
        }

        &.action {
            top: 160px;
            left: 60%;
            border-top: 4px solid #3B82F6;
        }
    }

    .node-header {
        padding: 8px 12px;
        font-size: 11px;
        font-weight: bold;
        border-bottom: 1px solid #E2E8F0;
        display: flex;
        align-items: center;
        gap: 6px;
    }

    .node-body {
        padding: 10px;
        font-size: 12px;
        color: #475569;
    }

    .connection-line {
        position: absolute;
        height: 2px;
        background: #CBD5E1;
        z-index: 1;
    }

    .node-marketing-start {
        top: 40px;
        left: 30%;
        width: 220px;
    }

    .node-marketing-action {
        top: 160px;
        left: 20%;
        width: 260px;
    }

    @media (max-width: 640px) {
        height: auto;
        min-height: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        padding: 16px;

        .connection-line {
            display: none;
        }

        .node,
        .node-marketing-start,
        .node-marketing-action {
            position: relative;
            top: auto;
            left: auto;
            width: 92%;
            max-width: 320px;
        }

        .node-header { font-size: 10px; padding: 7px 10px; }
        .node-body   { font-size: 11px; padding: 8px 10px; }
    }
`

// --- MOCKUP 3: PROFILE PANE ---
const ProfileLayout = styled.div`
    display: flex;
    height: 420px;

    @media (max-width: 640px) {
        flex-direction: column;
        height: auto;
    }
`
const ChatSection = styled(ChatAreaMock)`
    width: 60%;
    border-right: 1px solid #E2E8F0;

    @media (max-width: 640px) {
        width: 100%;
        min-height: 160px;
        border-right: none;
        border-bottom: 1px solid #E2E8F0;
    }
`
const ProfileSidebar = styled.div`
    width: 40%;

    @media (max-width: 640px) {
        width: 100%;

        .content { max-height: 220px; overflow-y: auto; }
    }
    background: white;
    display: flex;
    flex-direction: column;

    .profile-header {
        padding: 20px;
        text-align: center;
        border-bottom: 1px solid #E2E8F0;
        background: #F8FAFC;

        .avatar-large {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: #16A34A;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            font-weight: bold;
            margin: 0 auto 10px;
            border: 3px solid white;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }
        h4 { margin: 0; font-size: 16px; color: #0F172A; }
        p { margin: 0; font-size: 12px; color: #475569; }
    }

    .tabs {
        display: flex;
        border-bottom: 1px solid #E2E8F0;
        div {
            flex: 1;
            text-align: center;
            padding: 10px;
            font-size: 12px;
            font-weight: bold;
            color: #94A3B8;
            cursor: pointer;
        }
        div.active {
            color: #16A34A;
            border-bottom: 2px solid #16A34A;
        }
    }

    .content { padding: 15px; flex: 1; overflow-y: auto; }

    .info-row {
        margin-bottom: 15px;
        label {
            display: block;
            font-size: 10px;
            color: #94A3B8;
            font-weight: bold;
            text-transform: uppercase;
            margin-bottom: 4px;
        }
        .val {
            font-size: 13px;
            color: ${props => props.theme.colors.text};
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 6px;
        }
    }

    .tag {
        display: inline-block;
        padding: 2px 8px;
        border-radius: 10px;
        font-size: 10px;
        background: #e6fffa;
        color: ${props => props.theme.colors.whatsapp.accentGreen};
        border: 1px solid #b2f5ea;
    }
`

// === CORREÇÃO: Componente criado para substituir o estilo inline que causava erro ===
const ActionButton = styled.div`
    margin-top: 20px;
    padding: 10px;
    background: #16A34A;
    color: white;
    text-align: center;
    border-radius: 100px;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
    transition: opacity 0.2s;

    &:hover {
        opacity: 0.9;
    }
`

// --- MOCKUP 4: ANALYTICS ---
const DashboardMock = styled.div`
    padding: 1.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    .card {
        background: #fff;
        border: 1px solid #E2E8F0;
        border-radius: 10px;
        padding: 1rem;
    }

    h4 {
        font-size: 0.8rem;
        color: #475569;
        margin-bottom: 0.5rem;
        display: flex;
        align-items: center;
        gap: 6px;
    }

    .val {
        font-size: 1.5rem;
        font-weight: bold;
        color: #0F172A;
    }

    .full-width {
        grid-column: 1 / -1;
    }

    .heatmap {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        gap: 2px;

        div {
            height: 20px;
            border-radius: 2px;
        }
    }

    @media (max-width: 640px) {
        padding: 1rem;
        grid-template-columns: 1fr;

        .heatmap {
            grid-template-columns: repeat(6, 1fr);

            div { height: 16px; }
        }
    }
`

// --- ACT HEADERS ---
const ActHeader = styled.div`
    text-align: center;
    max-width: 720px;
    margin: 0 auto 5rem;

    .eyebrow {
        display: inline-block;
        padding: 0.35rem 0.9rem;
        border-radius: 999px;
        background: #DCFCE7;
        color: #15803D;
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

// --- MOCKUP: CHAT WEB (widget no site da escola) ---
const WebchatMock = styled.div`
    position: relative;
    height: 440px;
    background: linear-gradient(180deg, #F8FAFC 0%, #EEF2F7 100%);
    overflow: hidden;

    .page {
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 10px;

        div {
            height: 10px;
            border-radius: 5px;
            background: #E2E8F0;
        }

        .hero-line {
            height: 18px;
            width: 55%;
            background: #CBD5E1;
        }
    }

    .widget {
        position: absolute;
        right: 16px;
        bottom: 16px;
        width: 250px;
        background: #FFFFFF;
        border-radius: 16px;
        box-shadow: 0 20px 40px rgba(15, 23, 42, 0.18);
        overflow: hidden;
        font-size: 12px;
    }

    .widget-header {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 12px 14px;
        background: #2563EB;
        color: #FFFFFF;

        img {
            border-radius: 50%;
            object-fit: cover;
            border: 2px solid rgba(255, 255, 255, 0.5);
        }

        strong { display: block; font-size: 13px; }
        span { font-size: 11px; opacity: 0.85; }
    }

    .widget-body {
        padding: 12px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        background: #F8FAFC;
    }

    .msg {
        padding: 8px 10px;
        border-radius: 10px;
        background: #FFFFFF;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
        max-width: 88%;
        line-height: 1.4;
        color: #0F172A;
    }

    .msg.user {
        align-self: flex-end;
        background: #2563EB;
        color: #FFFFFF;
    }

    .chips {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;

        span {
            padding: 5px 10px;
            border-radius: 999px;
            border: 1px solid #2563EB;
            color: #2563EB;
            font-weight: 700;
            font-size: 11px;
            background: #FFFFFF;
        }
    }

    .origin {
        position: absolute;
        left: 16px;
        bottom: 16px;
        display: flex;
        align-items: flex-start;
        gap: 8px;
        width: 190px;
        padding: 10px 12px;
        background: #FFFFFF;
        border: 1px solid #E2E8F0;
        border-radius: 12px;
        box-shadow: 0 8px 20px rgba(15, 23, 42, 0.08);
        font-size: 11px;
        color: #475569;
        line-height: 1.4;

        svg { color: #16A34A; flex-shrink: 0; margin-top: 1px; }
        strong { display: block; color: #0F172A; font-size: 12px; }
    }

    @media (max-width: 640px) {
        height: 400px;

        .origin { display: none; }
        .widget { width: calc(100% - 32px); }
    }
`

// --- MOCKUP: GESTÃO DA FILA (alertas de inatividade) ---
const QueueMock = styled.div`
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: #F8FAFC;

    .title {
        font-size: 0.8rem;
        font-weight: 800;
        color: #475569;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        margin-bottom: 4px;
    }

    .row {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px 14px;
        background: #FFFFFF;
        border: 1px solid #E2E8F0;
        border-left: 4px solid #16A34A;
        border-radius: 10px;
        font-size: 13px;
        color: #0F172A;
    }

    .row.warn { border-left-color: #F59E0B; background: #FFFBEB; }
    .row.crit { border-left-color: #EF4444; background: #FEF2F2; }

    .avatar {
        width: 34px;
        height: 34px;
        border-radius: 50%;
        background: #E2E8F0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 11px;
        font-weight: 800;
        color: #475569;
        flex-shrink: 0;
    }

    .who { flex: 1; min-width: 0; }
    .who strong { display: block; }
    .who span { font-size: 11px; color: #64748B; }

    .time { font-size: 11px; font-weight: 800; color: #16A34A; white-space: nowrap; }
    .warn .time { color: #B45309; }
    .crit .time { color: #B91C1C; }

    .note {
        margin-top: 4px;
        padding: 10px 12px;
        border-radius: 10px;
        background: #EFF6FF;
        color: #1D4ED8;
        font-size: 12px;
        font-weight: 600;
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
        border-color: #BBF7D0;
    }

    .icon {
        width: 48px;
        height: 48px;
        border-radius: 12px;
        background: white;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #16A34A;
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

const HEATMAP_LEVELS = [
    0.15, 0.2, 0.3, 0.55, 0.8, 0.9, 0.85, 0.7, 0.45, 0.3, 0.2, 0.15,
    0.1, 0.25, 0.4, 0.7, 0.95, 0.85, 0.75, 0.6, 0.5, 0.35, 0.2, 0.1,
    0.2, 0.3, 0.5, 0.75, 0.85, 0.7, 0.6, 0.65, 0.55, 0.4, 0.25, 0.15,
    0.1, 0.15, 0.3, 0.5, 0.6, 0.55, 0.4, 0.45, 0.35, 0.25, 0.15, 0.1,
]

export default function WhatsAppDeepDive() {
    return (
        <Section id="recursos">
            <Container>

                <ActHeader>
                    <span className="eyebrow">1 · Atender</span>
                    <h2>Todos os canais, uma só fila</h2>
                    <p>Da primeira mensagem à matrícula, a equipe atende tudo no mesmo lugar.</p>
                </ActHeader>

                {/* 1. INBOX */}
                <FeatureRow>
                    <TextContent>
                        <h3>Nenhuma família fica sem resposta.</h3>
                        <p>
                            Toda a equipe atende pelo mesmo número oficial. Cada conversa cai no setor certo — Secretaria, Financeiro, Pedagógico — e a fila deixa claro quem chegou primeiro.
                        </p>
                        <ul>
                            <li><Users size={20}/> <strong>Usuários ilimitados:</strong> Toda a escola conectada ao mesmo tempo, sem limite de atendentes.
                            </li>
                            <li><Shuffle size={20}/> <strong>Distribuição automática:</strong> Cada conversa nova vai para o atendente certo — por equilíbrio de carga ou rodízio — e volta para a fila se ninguém responder a tempo.
                            </li>
                            <li><ShieldCheck size={20}/> <strong>Transferência com histórico:</strong> Passe a conversa para outro setor com um clique, levando tudo o que já foi dito.</li>
                        </ul>
                    </TextContent>

                    <MockupCard>
                        <MockupHeader>
                            <div className="dots">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </MockupHeader>
                        <ChatLayout>
                            <SidebarMock>
                                <div className="item active">
                                    <div className="avatar">Pai</div>
                                    <div className="lines">
                                        <div style={{width: '60%'}}></div>
                                        <div style={{width: '40%'}}></div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="avatar">Mãe</div>
                                    <div className="lines">
                                        <div></div>
                                    </div>
                                </div>
                            </SidebarMock>
                            <ChatAreaMock>
                                <Bubble>Queria saber os valores do Berçário.</Bubble>
                                <Bubble $sent $bot>Temos planos a partir de R$ 900. Quer ver a tabela completa?</Bubble>
                                <Bubble>Não, quero falar com alguém.</Bubble>
                                <Bubble $note>🚨 <strong>Sistema:</strong> A família pediu atendimento humano.
                                    Transferindo para @Secretaria.</Bubble>
                                <Bubble $sent>Olá! Sou a Ana da Secretaria. Como posso ajudar?</Bubble>
                            </ChatAreaMock>
                        </ChatLayout>
                    </MockupCard>
                </FeatureRow>

                {/* 1.5 INBOX OMNICHANNEL */}
                <FeatureRow $reverse>
                    <MockupCard>
                        <MockupHeader>
                            <div className="dots">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </MockupHeader>
                        <ChatLayout>
                            <SidebarMock>
                                <div className="item active" style={{ borderLeft: '3px solid #E1306C' }}>
                                    <div className="avatar" style={{ background: '#E1306C', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Instagram size={18}/></div>
                                    <div className="lines">
                                        <div style={{width: '70%', background: '#333'}}></div>
                                        <div style={{width: '40%'}}></div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="avatar" style={{ background: '#0084FF', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Facebook size={18}/></div>
                                    <div className="lines">
                                        <div style={{width: '50%'}}></div>
                                        <div style={{width: '30%'}}></div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="avatar" style={{ background: '#2563EB', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Globe size={18}/></div>
                                    <div className="lines">
                                        <div style={{width: '45%'}}></div>
                                        <div style={{width: '35%'}}></div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="avatar" style={{ background: '#25D366', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><MessageSquare size={18}/></div>
                                    <div className="lines">
                                        <div style={{width: '60%'}}></div>
                                        <div style={{width: '40%'}}></div>
                                    </div>
                                </div>
                            </SidebarMock>
                            <ChatAreaMock style={{ background: '#F8FAFC' }}>
                                <Bubble>Vi o post de vocês no Instagram e amei! Como faço para visitar?</Bubble>
                                <Bubble $sent style={{ background: '#E1306C', color: 'white' }}>Olá! Ficamos muito felizes. Você pode agendar direto por aqui!</Bubble>
                            </ChatAreaMock>
                        </ChatLayout>
                    </MockupCard>

                    <TextContent>
                        <h3>Inbox omnichannel: <br/>4 canais, uma só fila</h3>
                        <p>
                            Sua equipe não pula mais entre abas e celulares. WhatsApp, Instagram, Messenger e o chat do seu site chegam na mesma tela, com o mesmo histórico e as mesmas regras de atendimento.
                        </p>
                        <ul>
                            <li><Inbox size={20}/> <strong>Tudo em um só lugar:</strong> Uma fila só. Nenhum lead se perde, não importa por onde ele chegou.
                            </li>
                            <li><Instagram size={20}/> <strong>Instagram Direct e comentários:</strong> Responda as mensagens diretas e os comentários dos posts sem sair do CRM.
                            </li>
                            <li><Facebook size={20}/> <strong>Facebook Messenger:</strong> Integre sua página e centralize o atendimento comercial.
                            </li>
                            <li><Globe size={20}/> <strong>Chat web:</strong> O chat do site da escola cai na mesma inbox, já com a origem do visitante.
                            </li>
                        </ul>
                    </TextContent>
                </FeatureRow>

                {/* 1.6 CHAT WEB */}
                <FeatureRow>
                    <TextContent>
                        <h3>Chat no site da escola: o visitante vira lead e você sabe de onde ele veio</h3>
                        <p>
                            Cole um código no site ou ative o chat nas landing pages do Maskot. A Mia recebe o visitante na hora, tira as dúvidas e, quando precisa, passa a conversa para a sua equipe — na mesma inbox do WhatsApp.
                        </p>
                        <ul>
                            <li><Sparkles size={20}/> <strong>A Mia atende primeiro:</strong> Responde com a base de conhecimento da escola, capta nome e contato e chama um humano quando precisa.
                            </li>
                            <li><UserPlus size={20}/> <strong>Lead criado sozinho:</strong> Já na primeira mensagem, o visitante entra no funil de matrículas.
                            </li>
                            <li><MapPin size={20}/> <strong>Origem de cada conversa:</strong> Veja a página, o anúncio (Google ou Meta) e a campanha que trouxeram o visitante.
                            </li>
                            <li><Mail size={20}/> <strong>Convite e retorno:</strong> Um balão chama o visitante depois de alguns segundos, e quem deixou o e-mail recebe um aviso quando a equipe responde.
                            </li>
                        </ul>
                    </TextContent>

                    <MockupCard>
                        <MockupHeader>
                            <div className="dots">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </MockupHeader>
                        <WebchatMock>
                            <div className="page">
                                <div className="hero-line"></div>
                                <div style={{width: '80%'}}></div>
                                <div style={{width: '70%'}}></div>
                                <div style={{width: '60%'}}></div>
                            </div>
                            <div className="origin">
                                <MapPin size={16}/>
                                <div>
                                    <strong>Lead criado no CRM</strong>
                                    Origem: Google Ads · Matrículas 2027
                                </div>
                            </div>
                            <div className="widget">
                                <div className="widget-header">
                                    <Image src="/mia.png" alt="Mia" width={32} height={32}/>
                                    <div>
                                        <strong>Fale com a gente</strong>
                                        <span>Mia · Assistente virtual</span>
                                    </div>
                                </div>
                                <div className="widget-body">
                                    <div className="msg">Oi! 👋 Sou a Mia, assistente do Colégio. Quer conhecer a escola?</div>
                                    <div className="chips">
                                        <span>Agendar visita</span>
                                        <span>Valores</span>
                                        <span>Falar com a secretaria</span>
                                    </div>
                                    <div className="msg user">Quero saber sobre o 1º ano</div>
                                    <div className="msg">Claro! Qual é o seu nome e WhatsApp para eu te ajudar melhor?</div>
                                </div>
                            </div>
                        </WebchatMock>
                    </MockupCard>
                </FeatureRow>

                {/* 3. CRM CONTEXT */}
                <FeatureRow $reverse>
                    <MockupCard>
                        <MockupHeader>
                            <div className="dots">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </MockupHeader>
                        <ProfileLayout>
                            <ChatSection>
                                <Bubble>Poderia agendar uma visita?</Bubble>
                                <Bubble $sent>Claro! Qual o melhor horário para você?</Bubble>
                            </ChatSection>
                            <ProfileSidebar>
                                <div className="profile-header">
                                    <div className="avatar-large">MP</div>
                                    <h4>Mãe do Pedro</h4>
                                    <p>+55 11 99999-9999</p>
                                </div>
                                <div className="tabs">
                                    <div className="active">Info</div>
                                    <div>Notas</div>
                                    <div>Anexos</div>
                                </div>
                                <div className="content">
                                    <div className="info-row">
                                        <label>Funil de Matrículas</label>
                                        <div className="val">
                                            <span style={{
                                                width: '8px',
                                                height: '8px',
                                                borderRadius: '50%',
                                                background: '#f1c40f',
                                                marginRight: '6px'
                                            }}></span>
                                            Em Negociação
                                        </div>
                                    </div>
                                    <div className="info-row">
                                        <label>Aluno de Interesse</label>
                                        <div className="val">Pedro Henrique (1º Ano)</div>
                                    </div>
                                    <div className="info-row">
                                        <label>Tags</label>
                                        <div style={{display: 'flex', gap: '4px'}}>
                                            <span className="tag">Matrícula 2026</span>
                                            <span className="tag">Quente</span>
                                        </div>
                                    </div>

                                    {/* CORREÇÃO: Uso do componente estilizado ActionButton */}
                                    <ActionButton>
                                        Agendar Visita
                                    </ActionButton>

                                </div>
                            </ProfileSidebar>
                        </ProfileLayout>
                    </MockupCard>

                    <TextContent>
                        <h3>O CRM na palma da mão<br/>dentro da conversa</h3>
                        <p>
                            Sem trocar de tela. Adicione leads, acesse dados, carteirize contatos e crie tarefas direto na conversa, em qualquer canal.
                        </p>
                        <ul>
                            <li><UserPlus size={20}/> <strong>Adicionar Leads & Dados:</strong> Crie um novo lead e edite informações no funil sem sair da conversa.
                            </li>
                            <li><CalendarSync size={20}/> <strong>Agendar & Tarefas:</strong> Marque eventos e tarefas pontuais vinculadas ao CRM com 1 clique.
                            </li>
                            <li><FileHeart size={20}/> <strong>Carteirização:</strong> Favorite ou designe um lead especificamente para um consultor.
                            </li>
                        </ul>
                    </TextContent>
                </FeatureRow>

                
                <ActDivider />

                <ActHeader>
                    <span className="eyebrow">2 · Automatizar</span>
                    <h2>A Mia cuida do repetitivo</h2>
                    <p>A IA responde na hora, 24 horas por dia, e a equipe entra quando importa.</p>
                </ActHeader>

                {/* 3.1 MIA (IA) */}
                <FeatureRow>
                    <TextContent>
                        <h3>Conheça a Mia:<br/>sua melhor secretária 24/7</h3>
                        <p>
                            Treine a Mia com a base de conhecimento da sua escola. Ela tira dúvidas, atende de madrugada, capta os dados da família e agenda visitas sozinha — no WhatsApp e no chat do site.
                        </p>
                        <ul>
                            <li><Sparkles size={20}/> <strong>Respostas humanizadas:</strong> Você define o nome, o tom e o que ela pode ou não falar. Ela responde como parte da equipe.
                            </li>
                            <li><Clock size={20}/> <strong>Atendimento 24 horas:</strong> Pais nunca ficam sem resposta, mesmo fora do expediente.
                            </li>
                            <li><CalendarSync size={20}/> <strong>Agendamento automático:</strong> A Mia consulta a agenda da escola e marca a visita no CRM.
                            </li>
                            <li><Bot size={20}/> <strong>Copiloto da equipe:</strong> Dentro da conversa, ela ajuda o atendente e resume o atendimento ao encerrar.
                            </li>
                        </ul>
                    </TextContent>
                    <MockupCard>
                        <MockupHeader>
                            <div className="dots">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </MockupHeader>
                        <ChatLayout>
                            <SidebarMock>
                                <div className="item active">
                                    <div className="avatar">Mãe</div>
                                    <div className="lines">
                                        <div style={{width: '60%'}}></div>
                                        <div style={{width: '40%'}}></div>
                                    </div>
                                </div>
                            </SidebarMock>
                            <ChatAreaMock>
                                <Bubble>Boa noite! O Berçário funciona até que horas?</Bubble>
                                <Bubble $sent $bot>
                                    Olá, boa noite! 🌙 O nosso Berçário funciona das 07h às 19h no período estendido.
                                </Bubble>
                                <Bubble>Posso visitar amanhã às 14h?</Bubble>
                                <Bubble $sent $bot>
                                    Deixe-me conferir a agenda... Sim, temos disponibilidade! Agendei sua visita para amanhã às 14h. 🎉
                                </Bubble>
                                <Bubble $note>✅ <strong>Mia:</strong> Visita agendada. Lead atualizada no CRM.</Bubble>
                            </ChatAreaMock>
                        </ChatLayout>
                    </MockupCard>
                </FeatureRow>

                {/* 3.2 MIA + ERP INTEGRATION */}
                <FeatureRow $reverse>
                    <MockupCard>
                        <MockupHeader>
                            <div className="dots">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </MockupHeader>
                        <ErpHeaderBadge>
                            <div className="status">Conectado ao ERP</div>
                            <div className="erp-pill">
                                <Server size={11} /> REST HTTPS
                            </div>
                        </ErpHeaderBadge>
                        <ChatAreaMock style={{ minHeight: 'auto', gap: '10px' }}>
                            <Bubble>Boa tarde! Qual o vencimento da parcela deste mês do Pedro Henrique?</Bubble>
                            <ErpQueryPill>
                                <Database size={12} />
                                <span>Mia consultando ERP da escola (SophiA / TOTVS)...</span>
                            </ErpQueryPill>
                            <Bubble $sent $bot>
                                Olá, Camila! A parcela de outubro do Pedro Henrique vence em <strong>10/10</strong> no valor de <strong>R$ 1.250,00</strong>. Situação atual: <strong>Em aberto</strong>. Deseja que eu envie a linha digitável do boleto por aqui?
                            </Bubble>
                            <Bubble>Sim, por favor! Pode mandar.</Bubble>
                            <Bubble $sent $bot>
                                Aqui está a linha digitável do boleto:
                                <BarcodeCard>
                                    <span className="code">34191.79001 01043.510047 91020.150008 1 98760000125000</span>
                                    <span className="copy-btn"><Copy size={11} /> Copiar</span>
                                </BarcodeCard>
                                O arquivo em PDF também foi enviado para o seu e-mail cadastrado.
                            </Bubble>
                        </ChatAreaMock>
                        <SecurityNote>
                            <ShieldCheck size={14} />
                            <span>Autenticação HMAC-SHA256 · Vinculada estritamente ao WhatsApp da responsável · LGPD</span>
                        </SecurityNote>
                    </MockupCard>

                    <TextContent>
                        <h3>Mia integrada ao ERP:<br/>dados do aluno direto no WhatsApp</h3>
                        <p>
                            A Mia não responde apenas dúvidas gerais: ela se conecta ao sistema de gestão da sua escola para responder perguntas sobre dados reais do aluno — sem que a secretaria ou o financeiro precisem abrir o ERP.
                        </p>
                        <ul>
                            <li>
                                <Database size={20}/> <strong>Consultas em tempo real:</strong> Vencimentos, 2ª via de boleto, situação financeira e status de matrícula respondidos na hora pelo WhatsApp.
                            </li>
                            <li>
                                <ShieldCheck size={20}/> <strong>Segurança e LGPD garantidas:</strong> Autenticação criptográfica HMAC-SHA256. A Mia só consulta o cadastro do telefone de quem está conversando, impedindo qualquer acesso a dados de terceiros.
                            </li>
                            <li>
                                <CheckCircle2 size={20}/> <strong>Zero alucinação:</strong> Se o sistema estiver fora do ar ou o dado não for encontrado, a Mia não inventa dados: ela informa com transparência e oferece transbordo para a equipe humana.
                            </li>
                            <li>
                                <Layers size={20}/> <strong>Compatível com qualquer sistema:</strong> Conexão via API HTTPS com SophiA, TOTVS, Activesoft ou qualquer ERP com API, além de integração rápida com n8n ou Make.
                            </li>
                        </ul>
                        <ErpLogosRow>
                            <span className="label">Compatível com:</span>
                            <span className="tag">TOTVS</span>
                            <span className="tag">SophiA</span>
                            <span className="tag">Activesoft</span>
                            <span className="tag">Galileu</span>
                            <span className="tag">n8n / Make</span>
                            <span className="tag">Qualquer API REST</span>
                        </ErpLogosRow>
                    </TextContent>
                </FeatureRow>

                {/* 3.3 MARKETING & AUTOMATIONS */}
                <FeatureRow>
                    <TextContent>
                        <h3>Jornadas de Marketing<br/>com WhatsApp Nativo</h3>
                        <p>
                            Insira o WhatsApp em todas as suas automações. Envie mensagens proativas, réguas de relacionamento e lembretes financeiros baseados em disparos de gatilhos do CRM.
                        </p>
                        <ul>
                            <li><Route size={20}/> <strong>Automações de Funil:</strong> Mande mensagens após X dias do envio da proposta caso o pai não responda.
                            </li>
                            <li><Bot size={20}/> <strong>Régua de Cobrança:</strong> Lembretes de vencimento enviados no WhatsApp automaticamente.
                            </li>
                            <li><Zap size={20}/> <strong>Disparos em Massa Personalizados:</strong> Comunique campanhas usando as tags do Maskot.
                            </li>
                        </ul>
                    </TextContent>
                    <MockupCard>
                        <MockupHeader>
                            <div className="dots">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </MockupHeader>
                        <FlowBuilderMock>
                            <div className="node start node-marketing-start">
                                <div className="node-header"><Filter size={12}/> Etapa do Funil: Proposta</div>
                                <div className="node-body">Sem resposta há 2 dias.</div>
                            </div>

                            <div className="connection-line"
                                 style={{top: '90px', left: '50%', height: '70px', width: '2px'}}></div>

                            <div className="node action node-marketing-action">
                                <div className="node-header"><Send size={12}/> Disparo WhatsApp Automático</div>
                                <div className="node-body">Template: &quot;Olá [Nome], restou alguma dúvida...&quot;</div>
                            </div>
                        </FlowBuilderMock>
                    </MockupCard>
                </FeatureRow>

                
                <ActDivider />

                <ActHeader>
                    <span className="eyebrow">3 · Gerenciar</span>
                    <h2>A equipe sob controle</h2>
                    <p>Regras, alertas e números para o atendimento nunca travar.</p>
                </ActHeader>

                {/* 3.4 GESTÃO DA FILA */}
                <FeatureRow $reverse>
                    <MockupCard>
                        <MockupHeader>
                            <div className="dots">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </MockupHeader>
                        <QueueMock>
                            <div className="title">Conversas abertas</div>
                            <div className="row crit">
                                <div className="avatar">PL</div>
                                <div className="who"><strong>Pai do Lucas</strong><span>Sem resposta da equipe</span></div>
                                <div className="time">1h10</div>
                            </div>
                            <div className="row warn">
                                <div className="avatar">MA</div>
                                <div className="who"><strong>Mãe da Ana</strong><span>Sem resposta da equipe</span></div>
                                <div className="time">35 min</div>
                            </div>
                            <div className="row">
                                <div className="avatar">RC</div>
                                <div className="who"><strong>Responsável da Carla</strong><span>Respondida pela Secretaria</span></div>
                                <div className="time">2 min</div>
                            </div>
                            <div className="note">↩ Conversa do Pai do Lucas devolvida à fila para o próximo atendente.</div>
                        </QueueMock>
                    </MockupCard>

                    <TextContent>
                        <h3>Equipe sob controle,<br/>sem microgerenciar</h3>
                        <p>
                            Regras que mantêm a fila andando e mostram, em tempo real, onde o atendimento está travando.
                        </p>
                        <ul>
                            <li><BellRing size={20}/> <strong>Alerta de inatividade:</strong> A conversa muda de cor na lista (amarelo, depois vermelho) quando passa do tempo que você definiu.
                            </li>
                            <li><Shuffle size={20}/> <strong>Fila que não trava:</strong> Sem resposta no prazo, a conversa volta para a fila e outro atendente assume.
                            </li>
                            <li><MoonStar size={20}/> <strong>Mensagem de ausência:</strong> Fora do expediente, a família recebe um aviso automático em vez de silêncio.
                            </li>
                            <li><EyeOff size={20}/> <strong>Privacidade (LGPD):</strong> Oculte o telefone dos contatos de quem não precisa vê-lo e consulte o registro de tudo o que aconteceu na conversa.
                            </li>
                        </ul>
                    </TextContent>
                </FeatureRow>

                {/* 4. ANALYTICS */}
                <FeatureRow>
                    <TextContent>
                        <h3>Gestão Baseada em Dados</h3>
                        <p>
                            O Analytics do Maskot te dá a visão de raio-X sobre o atendimento da sua equipe.
                        </p>
                        <ul>
                            <li><Thermometer size={20}/> <strong>Mapa de Calor:</strong> Descubra horários de pico.</li>
                            <li><Clock size={20}/> <strong>SLA de Resposta:</strong> Monitore a agilidade da equipe.
                            </li>
                            <li><LineChart size={20}/> <strong>Conversão:</strong> Saiba quantos atendimentos viraram
                                matrícula.
                            </li>
                        </ul>
                    </TextContent>
                    <MockupCard>
                        <MockupHeader>
                            <div className="dots">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </MockupHeader>
                        <DashboardMock>
                            <div className="card"><h4><LineChart size={16}/> Total de Atendimentos</h4>
                                <div className="val">1.284</div>
                            </div>
                            <div className="card"><h4><Clock size={16}/> Tempo Médio</h4>
                                <div className="val">4min</div>
                            </div>
                            <div className="card full-width">
                                <h4><Thermometer size={16}/> Mapa de Calor (Horários de Pico)</h4>
                                <div className="heatmap">
                                    {HEATMAP_LEVELS.map((level, i) => (
                                        <div key={i} style={{background: `rgba(22, 163, 74, ${level})`}}></div>
                                    ))}
                                </div>
                            </div>
                        </DashboardMock>
                    </MockupCard>
                </FeatureRow>

                
                {/* 5. POWER FEATURES GRID */}
                <div style={{textAlign: 'center', marginBottom: '3rem'}}>
                    <h3 style={{
                        fontSize: '2rem',
                        fontWeight: 800,
                        color: '#0F172A',
                        fontFamily: 'var(--font-inter)'
                    }}>Ferramentas de Produtividade</h3>
                    <p style={{color: '#475569', marginTop: '0.5rem'}}>Detalhes que economizam minutos em cada atendimento.</p>
                </div>

                <PowerGrid>
                    <PowerCard>
                        <div className="icon"><Lock size={24}/></div>
                        <h4>Notas internas</h4>
                        <p>Converse com a equipe dentro da conversa (&quot;@Financeiro, verificar boleto&quot;) sem que a família veja.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><Zap size={24}/></div>
                        <h4>Respostas rápidas</h4>
                        <p>Crie atalhos (ex: /materiais) para enviar textos, documentos e até botões de resposta com um clique.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><Tag size={24}/></div>
                        <h4>Etiquetas visuais</h4>
                        <p>Classifique conversas com tags coloridas (&quot;Financeiro&quot;, &quot;Pedagógico&quot;) e filtre sua inbox em segundos.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><MessageSquare size={24}/></div>
                        <h4>Templates aprovados</h4>
                        <p>Inicie conversas com templates oficiais do WhatsApp aprovados pela Meta para reengajar contatos frios.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><CalendarClock size={24}/></div>
                        <h4>Agendamento de mensagens</h4>
                        <p>Programe lembretes de visita, avisos e retornos para saírem sozinhos na hora certa.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><Star size={24}/></div>
                        <h4>Pesquisa de satisfação</h4>
                        <p>Envie uma pesquisa (CSAT) ao fim do atendimento e veja, em números, como as famílias avaliam sua equipe.</p>
                    </PowerCard>
                </PowerGrid>

                <MoreTools>
                    <p>E também:</p>
                    <div className="chips"><span>Conectores ERP em tempo real</span><span>Assinatura HMAC-SHA256 (LGPD)</span><span>Central de anexos</span><span>Exportação da conversa em PDF</span><span>Áudio em velocidade 1.5x ou 2x</span><span>Favoritos e carteirização</span><span>Fluxos interativos do WhatsApp</span><span>Disparos de campanha</span><span>Aviso da janela de 24h</span><span>Bloqueio de contato</span><span>Ligação de voz pela conversa</span></div>
                </MoreTools>

            </Container>
        </Section>
    )
}