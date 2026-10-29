'use client'

import styled, { keyframes, css } from 'styled-components'
import {
    Phone, PhoneIncoming, PhoneOff, PhoneMissed, PhoneForwarded, Mic, MicOff, Voicemail,
    UserCheck, Users, Bot, Hash, Network, Building2, ShieldCheck, Lock, Trash2,
    ClipboardCheck, FileText, Search, Timer, Gauge, Package, Settings2,
    Headphones, Shuffle, CalendarCheck, ArrowRightLeft, MessageCircle, Globe, History,
    Bell, Sparkles, KeyRound, Volume2
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
            color: #0E7490;
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
        background: #CFFAFE;
        color: #0E7490;
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

// --- MOCKUP 1: LIGAÇÃO EM ANDAMENTO ---
const ActiveCallMock = styled.div`
    padding: 2rem 1.5rem 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.35rem;
    background: linear-gradient(180deg, #ECFEFF 0%, #FFFFFF 60%);

    .avatar {
        width: 68px;
        height: 68px;
        border-radius: 50%;
        background: #CFFAFE;
        color: #0E7490;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.4rem;
        font-weight: 800;
        margin-bottom: 0.5rem;
    }

    .name { font-size: 1.1rem; font-weight: 800; color: #0F172A; }
    .meta { font-size: 0.8rem; color: #64748B; font-weight: 500; }
    .timer { font-size: 1.75rem; font-weight: 800; color: #0F172A; font-variant-numeric: tabular-nums; margin-top: 0.5rem; }

    .rec {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 3px 10px;
        border-radius: 999px;
        background: #FEF2F2;
        color: #B91C1C;
        font-size: 0.7rem;
        font-weight: 800;

        &::before {
            content: '';
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: #DC2626;
        }
    }

    .controls {
        display: flex;
        gap: 0.75rem;
        margin-top: 1.25rem;
    }

    .ctrl {
        width: 46px;
        height: 46px;
        border-radius: 50%;
        background: #F1F5F9;
        border: 1px solid #E2E8F0;
        color: #334155;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .ctrl.end {
        background: #DC2626;
        border-color: #DC2626;
        color: #FFFFFF;
    }

    .audio {
        margin-top: 1.25rem;
        width: 100%;
        padding: 10px 12px;
        border-radius: 12px;
        border: 1px solid #E2E8F0;
        background: #FFFFFF;
        font-size: 11px;
        color: #475569;
        display: flex;
        align-items: center;
        gap: 10px;

        .bar { flex: 1; height: 6px; background: #F1F5F9; border-radius: 3px; overflow: hidden; }
        .fill { width: 62%; height: 100%; background: #0891B2; border-radius: 3px; }
        svg { color: #0E7490; flex-shrink: 0; }
    }
`

// --- MOCKUP 2: CHAMADA RECEBIDA ---
const IncomingMock = styled.div`
    padding: 1.5rem;
    background: #F8FAFC;
    display: flex;
    flex-direction: column;
    gap: 12px;

    .banner {
        background: #FFFFFF;
        border: 1px solid #A5F3FC;
        border-left: 4px solid #0E7490;
        border-radius: 14px;
        padding: 14px 16px;
        display: flex;
        align-items: center;
        gap: 14px;
        box-shadow: 0 10px 25px rgba(14, 116, 144, 0.1);
    }

    .icon {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background: #CFFAFE;
        color: #0E7490;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }

    .info { flex: 1; min-width: 0; }
    .label { font-size: 10px; font-weight: 800; color: #0E7490; text-transform: uppercase; letter-spacing: 0.05em; }
    .name { font-size: 14px; font-weight: 800; color: #0F172A; }
    .detail { font-size: 12px; color: #64748B; }

    .answer {
        padding: 8px 14px;
        border-radius: 999px;
        background: #0E7490;
        color: #FFFFFF;
        font-size: 12px;
        font-weight: 800;
        white-space: nowrap;
    }

    .ringing {
        font-size: 11px;
        font-weight: 700;
        color: #475569;
        margin: 4px 2px 0;
        text-transform: uppercase;
        letter-spacing: 0.04em;
    }

    .agent {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 14px;
        background: #FFFFFF;
        border: 1px solid #E2E8F0;
        border-radius: 10px;
        font-size: 12px;
        color: #0F172A;
        font-weight: 600;

        .dot { width: 8px; height: 8px; border-radius: 50%; background: #16A34A; }
        .state { margin-left: auto; font-size: 11px; color: #0E7490; font-weight: 800; }
        .state.idle { color: #94A3B8; }
    }

    .missed {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 14px;
        border-radius: 10px;
        background: #FEF2F2;
        color: #B91C1C;
        font-size: 12px;
        font-weight: 700;
    }
`

// --- MOCKUP 3: CONVERSA COM CARD DE LIGAÇÃO ---
const ConvLayout = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    background: #F0F2F5;
    background-image: radial-gradient(#00000008 1px, transparent 0);
    background-size: 12px 12px;
    min-height: 360px;

    .head {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 14px;
        margin: -20px -20px 4px;
        background: #FFFFFF;
        border-bottom: 1px solid #E2E8F0;
        font-size: 13px;
        font-weight: 800;
        color: #0F172A;

        .grow { flex: 1; }

        .callbtn {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 6px 12px;
            border-radius: 999px;
            background: #0E7490;
            color: #FFFFFF;
            font-size: 12px;
            font-weight: 800;
        }
    }
`

const Bubble = styled.div<{ $sent?: boolean }>`
    padding: 10px 14px;
    border-radius: 8px;
    background: ${props => props.$sent ? '#DCFCE7' : '#FFFFFF'};
    align-self: ${props => props.$sent ? 'flex-end' : 'flex-start'};
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    font-size: 13px;
    max-width: 80%;
    line-height: 1.4;
`

const CallEvent = styled.div`
    align-self: center;
    width: 88%;
    background: #FFFFFF;
    border: 1px solid #A5F3FC;
    border-radius: 12px;
    padding: 12px 14px;
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 12px;
    color: #475569;

    .ico {
        width: 34px;
        height: 34px;
        border-radius: 50%;
        background: #CFFAFE;
        color: #0E7490;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }

    strong { display: block; color: #0F172A; font-size: 13px; }
    .grow { flex: 1; }

    .play {
        padding: 5px 10px;
        border-radius: 999px;
        background: #ECFEFF;
        border: 1px solid #A5F3FC;
        color: #0E7490;
        font-weight: 800;
        font-size: 11px;
        display: inline-flex;
        align-items: center;
        gap: 5px;
    }
`

// --- MOCKUP 4: ROTEAMENTO ---
const RoutingMock = styled.div`
    padding: 1.5rem;
    background: #F8FAFC;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .number {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 14px 16px;
        border-radius: 12px;
        background: #FFFFFF;
        border: 1px solid #E2E8F0;

        .lbl { font-size: 10px; font-weight: 800; color: #64748B; text-transform: uppercase; letter-spacing: 0.05em; }
        .num { font-size: 18px; font-weight: 800; color: #0F172A; font-variant-numeric: tabular-nums; }
        .ok {
            display: inline-flex; align-items: center; gap: 6px;
            font-size: 11px; font-weight: 800; color: #15803D;
            &::before { content: ''; width: 7px; height: 7px; border-radius: 50%; background: #16A34A; box-shadow: 0 0 0 2px rgba(22,163,74,0.2); }
        }
    }

    .title {
        margin-top: 6px;
        font-size: 11px;
        font-weight: 800;
        color: #475569;
        text-transform: uppercase;
        letter-spacing: 0.04em;
    }

    .mode {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 11px 14px;
        border-radius: 10px;
        background: #FFFFFF;
        border: 1px solid #E2E8F0;
        font-size: 13px;
        color: #334155;
        font-weight: 600;

        svg { color: #64748B; flex-shrink: 0; }
    }

    .mode.active {
        border-color: #0E7490;
        background: #ECFEFF;
        color: #0F172A;
        font-weight: 800;

        svg { color: #0E7490; }
    }

    .fallback {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        margin-top: 4px;

        span {
            padding: 5px 11px;
            border-radius: 999px;
            background: #FFFFFF;
            border: 1px dashed #CBD5E1;
            font-size: 11px;
            font-weight: 700;
            color: #475569;
        }
    }
`

// --- MOCKUP 5: RAMAIS E DEPARTAMENTOS ---
const ExtMock = styled.div`
    padding: 1.5rem;
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
    gap: 12px;

    .menu {
        padding: 12px 14px;
        border-radius: 12px;
        background: #ECFEFF;
        border: 1px solid #A5F3FC;
        font-size: 12px;
        color: #155E75;
        line-height: 1.5;
        display: flex;
        gap: 10px;
        align-items: flex-start;

        svg { flex-shrink: 0; margin-top: 2px; }
    }

    .group {
        border: 1px solid #E2E8F0;
        border-radius: 12px;
        overflow: hidden;
    }

    .group-head {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 12px 14px;
        background: #F8FAFC;
        border-bottom: 1px solid #E2E8F0;
        font-size: 13px;
        font-weight: 800;
        color: #0F172A;

        .ext {
            margin-left: auto;
            padding: 3px 10px;
            border-radius: 6px;
            background: #0E7490;
            color: #FFFFFF;
            font-size: 12px;
            font-weight: 800;
            font-variant-numeric: tabular-nums;
        }
    }

    .members {
        padding: 10px 14px;
        display: flex;
        flex-wrap: wrap;
        gap: 6px;

        span {
            padding: 4px 10px;
            border-radius: 999px;
            background: #F1F5F9;
            border: 1px solid #E2E8F0;
            font-size: 11px;
            font-weight: 600;
            color: #334155;
        }
    }
`

// --- MOCKUP 6: MIA ATENDENDO O TELEFONE ---
const MiaCallMock = styled.div`
    padding: 1.25rem;
    background: #F8FAFC;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .top {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 14px;
        border-radius: 12px;
        background: #FFFFFF;
        border: 1px solid #E2E8F0;
        font-size: 12px;
        font-weight: 800;
        color: #0F172A;

        .badge {
            margin-left: auto;
            padding: 3px 10px;
            border-radius: 999px;
            background: #F5F3FF;
            border: 1px solid #DDD6FE;
            color: #6D28D9;
            font-size: 10px;
            font-weight: 800;
        }
    }

    .line {
        max-width: 84%;
        padding: 9px 13px;
        border-radius: 12px;
        font-size: 12.5px;
        line-height: 1.45;
        background: #FFFFFF;
        border: 1px solid #E2E8F0;
        color: #0F172A;
        align-self: flex-start;
        border-bottom-left-radius: 4px;

        .who { display: block; font-size: 9.5px; font-weight: 800; color: #7C3AED; margin-bottom: 2px; text-transform: uppercase; letter-spacing: 0.04em; }
    }

    .line.caller {
        align-self: flex-end;
        background: #0E7490;
        border-color: #0E7490;
        color: #FFFFFF;
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 4px;

        .who { color: #CFFAFE; }
    }

    .action {
        align-self: center;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 5px 12px;
        border-radius: 999px;
        background: #F0FDF4;
        border: 1px solid #BBF7D0;
        color: #15803D;
        font-size: 11px;
        font-weight: 700;
    }

    .handoff {
        padding: 10px 14px;
        border-radius: 10px;
        background: #EFF6FF;
        color: #1D4ED8;
        font-size: 12px;
        font-weight: 600;
        line-height: 1.45;
    }
`

// --- MOCKUP 7: DESFECHO PÓS-LIGAÇÃO ---
const WrapUpMock = styled.div`
    padding: 1.5rem;
    background: #FFFFFF;

    h5 { margin: 0 0 4px; font-size: 16px; font-weight: 800; color: #0F172A; }
    .sub { font-size: 12px; color: #64748B; margin-bottom: 16px; }
    .lbl { font-size: 11px; font-weight: 800; color: #475569; text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 8px; }

    .chips { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px; }

    .chip {
        padding: 6px 13px;
        border-radius: 999px;
        border: 1px solid #E2E8F0;
        background: #F8FAFC;
        font-size: 12px;
        font-weight: 700;
        color: #334155;
    }

    .chip.on {
        background: #0E7490;
        border-color: #0E7490;
        color: #FFFFFF;
    }

    .note {
        padding: 12px 14px;
        border-radius: 10px;
        border: 1.5px solid #E2E8F0;
        background: #F8FAFC;
        font-size: 12.5px;
        color: #334155;
        line-height: 1.5;
        margin-bottom: 14px;
    }

    .result {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 14px;
        border-radius: 10px;
        background: #F0FDF4;
        border: 1px solid #BBF7D0;
        color: #15803D;
        font-size: 12px;
        font-weight: 700;
    }
`

// --- MOCKUP 8: CENTRAL DE CHAMADAS ---
const CentralMock = styled.div`
    padding: 1.25rem;
    background: #F8FAFC;
    display: flex;
    flex-direction: column;
    gap: 12px;

    .stats {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 8px;
    }

    .stat {
        padding: 10px 12px;
        background: #FFFFFF;
        border: 1px solid #E2E8F0;
        border-radius: 10px;

        span { display: block; font-size: 10px; color: #64748B; font-weight: 700; }
        strong { font-size: 18px; font-weight: 800; color: #0F172A; font-variant-numeric: tabular-nums; }
        &.miss strong { color: #B91C1C; }
    }

    .table {
        background: #FFFFFF;
        border: 1px solid #E2E8F0;
        border-radius: 12px;
        overflow: hidden;
    }

    .tr {
        display: grid;
        grid-template-columns: 1.4fr 1fr 0.7fr 0.8fr;
        gap: 8px;
        align-items: center;
        padding: 10px 14px;
        border-bottom: 1px solid #F1F5F9;
        font-size: 12px;
        color: #334155;

        &:last-child { border-bottom: none; }
        &.th { background: #F8FAFC; font-size: 10px; font-weight: 800; color: #64748B; text-transform: uppercase; letter-spacing: 0.04em; }
        strong { color: #0F172A; }
    }

    .st { font-weight: 800; font-size: 11px; }
    .st.ok { color: #15803D; }
    .st.bad { color: #B91C1C; }
    .st.vm { color: #B45309; }

    @media (max-width: 640px) {
        .stats { grid-template-columns: repeat(2, 1fr); }
        .tr { grid-template-columns: 1.4fr 1fr 0.8fr; }
        .tr > :nth-child(3) { display: none; }
    }
`

// --- MOCKUP 9: FICHA DO LEAD (LIGAÇÕES + GRAVAÇÃO) ---
const LeadCallMock = styled.div`
    padding: 1.25rem;
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
    gap: 12px;

    .tabs {
        display: flex;
        gap: 4px;
        border-bottom: 1px solid #E2E8F0;
        font-size: 12px;
        font-weight: 700;
        color: #64748B;

        span { padding: 8px 12px; }
        .on { color: #0E7490; border-bottom: 2px solid #0E7490; margin-bottom: -1px; }
    }

    .call {
        border: 1px solid #E2E8F0;
        border-radius: 12px;
        padding: 14px;
        background: #F8FAFC;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .row { display: flex; align-items: center; gap: 10px; font-size: 12px; color: #475569; }
    .row strong { color: #0F172A; font-size: 13px; }
    .row .when { margin-left: auto; font-size: 11px; }

    .player {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 9px 12px;
        border-radius: 999px;
        background: #FFFFFF;
        border: 1px solid #E2E8F0;
        font-size: 11px;
        font-weight: 700;
        color: #0E7490;

        .bar { flex: 1; height: 5px; border-radius: 3px; background: #E2E8F0; overflow: hidden; }
        .fill { width: 38%; height: 100%; background: #0891B2; }
    }

    .summary {
        font-size: 12px;
        color: #334155;
        line-height: 1.5;
        padding: 10px 12px;
        border-left: 3px solid #7C3AED;
        background: #FAF5FF;
        border-radius: 0 8px 8px 0;

        b { color: #6D28D9; }
    }

    .locked {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 9px 12px;
        border-radius: 10px;
        background: #F1F5F9;
        font-size: 11px;
        color: #64748B;
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
        border-color: #A5F3FC;
    }

    .icon {
        width: 48px;
        height: 48px;
        border-radius: 12px;
        background: white;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #0E7490;
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
    background: #ECFEFF;
    border: 1px solid #A5F3FC;
    display: flex;
    gap: 1rem;
    align-items: flex-start;

    svg { color: #0E7490; flex-shrink: 0; margin-top: 2px; }

    strong { display: block; color: #155E75; margin-bottom: 0.25rem; font-size: 1rem; }
    p { margin: 0; color: #155E75; font-size: 0.95rem; line-height: 1.6; }
`

export default function VoiceDeepDive() {
    return (
        <Section id="recursos">
            <Container>

                <ActHeader>
                    <span className="eyebrow">1 · Ligar e receber</span>
                    <h2>O telefone da escola, dentro do CRM</h2>
                    <p>Sem aparelho, sem ramal físico e sem anotar recado em papel. A ligação acontece onde a família já está cadastrada.</p>
                </ActHeader>

                {/* 1. LIGAR PELO NAVEGADOR */}
                <FeatureRow>
                    <TextContent>
                        <h3>Ligue direto do navegador, com a ficha do lead na tela.</h3>
                        <p>
                            O consultor clica em &quot;Ligar&quot; e fala com o responsável pelo computador, usando fone de ouvido. Nada para instalar e nenhum celular pessoal exposto.
                        </p>
                        <ul>
                            <li><Phone size={20}/> <strong>Ligar de onde estiver:</strong> pela ficha do lead, pela conversa do WhatsApp, pelo Chat Web ou pela Central de Chamadas, buscando o contato ou digitando o número.</li>
                            <li><Mic size={20}/> <strong>Controles na chamada:</strong> silenciar, abrir o teclado e escolher microfone e saída de áudio, com teste de microfone antes de falar.</li>
                            <li><Headphones size={20}/> <strong>Chamada gravada:</strong> um selo &quot;Gravando&quot; fica visível durante toda a ligação.</li>
                        </ul>
                    </TextContent>

                    <MockupCard>
                        <Dots />
                        <ActiveCallMock>
                            <div className="avatar">CS</div>
                            <span className="name">Carlos Souza</span>
                            <span className="meta">Pai da Beatriz · Saída</span>
                            <span className="rec">Gravando</span>
                            <span className="timer">03:42</span>
                            <div className="controls">
                                <div className="ctrl"><MicOff size={20}/></div>
                                <div className="ctrl"><Hash size={20}/></div>
                                <div className="ctrl"><Settings2 size={20}/></div>
                                <div className="ctrl end"><PhoneOff size={20}/></div>
                            </div>
                            <div className="audio">
                                <Mic size={14}/> Microfone: Headset USB
                                <div className="bar"><div className="fill"></div></div>
                            </div>
                        </ActiveCallMock>
                    </MockupCard>
                </FeatureRow>

                {/* 2. CHAMADA RECEBIDA */}
                <FeatureRow $reverse>
                    <MockupCard>
                        <Dots />
                        <IncomingMock>
                            <div className="banner">
                                <div className="icon"><PhoneIncoming size={22}/></div>
                                <div className="info">
                                    <div className="label">Chamada recebida</div>
                                    <div className="name">Ana Silva</div>
                                    <div className="detail">último contato há 2 dias</div>
                                </div>
                                <div className="answer">Atender</div>
                            </div>
                            <div className="ringing">Tocando agora para</div>
                            <div className="agent"><span className="dot"></span> Marina · Comercial <span className="state">Tocando</span></div>
                            <div className="agent"><span className="dot"></span> Paulo · Comercial <span className="state">Tocando</span></div>
                            <div className="agent"><span className="dot" style={{ background: '#CBD5E1' }}></span> Lúcia · Secretaria <span className="state idle">Ausente</span></div>
                            <div className="missed"><PhoneMissed size={16}/> 2 ligações perdidas hoje, com selo no ícone de chamadas</div>
                        </IncomingMock>
                    </MockupCard>

                    <TextContent>
                        <h3>Quem ligou? O CRM já responde antes de você atender.</h3>
                        <p>
                            Quando o telefone toca, a equipe vê o nome do responsável e quando foi o último contato. Quem atende já sabe se está falando com uma visita recente ou com uma família nova.
                        </p>
                        <ul>
                            <li><UserCheck size={20}/> <strong>Lead reconhecido pelo número:</strong> nome, histórico e aviso quando o mesmo telefone aparece em mais de um cadastro.</li>
                            <li><Users size={20}/> <strong>Toca para vários ao mesmo tempo:</strong> só para quem está online e com permissão de ligar. Quem atender primeiro leva a chamada.</li>
                            <li><PhoneMissed size={20}/> <strong>Perdida não passa batido:</strong> um contador de ligações perdidas aparece no ícone de chamadas até alguém retornar.</li>
                        </ul>
                    </TextContent>
                </FeatureRow>

                {/* 3. LIGAÇÃO NA CONVERSA */}
                <FeatureRow>
                    <TextContent>
                        <h3>A ligação entra na conversa, como parte do atendimento.</h3>
                        <p>
                            Quando o pai prefere falar a digitar, o atendente liga sem sair do chat. A ligação vira um card na linha do tempo, ao lado das mensagens que vieram antes.
                        </p>
                        <ul>
                            <li><MessageCircle size={20}/> <strong>Botão Ligar na conversa:</strong> disponível no WhatsApp e no Chat Web, com o contato já selecionado.</li>
                            <li><History size={20}/> <strong>Card que se atualiza sozinho:</strong> &quot;ligando&quot;, depois &quot;atendida · 3 min&quot;, com a gravação guardada no próprio card.</li>
                            <li><Globe size={20}/> <strong>Um histórico só:</strong> mensagens, ligações e anotações na mesma linha do tempo do lead.</li>
                        </ul>
                    </TextContent>

                    <MockupCard>
                        <Dots />
                        <ConvLayout>
                            <div className="head">
                                <span>Mariana Lima</span>
                                <span className="grow"></span>
                                <span className="callbtn"><Phone size={13}/> Ligar</span>
                            </div>
                            <Bubble>Consigo falar com alguém sobre a transferência do meu filho?</Bubble>
                            <Bubble $sent>Claro, Mariana! Posso te ligar agora?</Bubble>
                            <Bubble>Pode sim.</Bubble>
                            <CallEvent>
                                <div className="ico"><Phone size={16}/></div>
                                <div className="grow">
                                    <strong>Ligação realizada · atendida</strong>
                                    Duração 3 min · Atendente Marina
                                </div>
                                <span className="play"><Headphones size={12}/> Ouvir</span>
                            </CallEvent>
                        </ConvLayout>
                    </MockupCard>
                </FeatureRow>

                <ActDivider />

                <ActHeader>
                    <span className="eyebrow">2 · Direcionar</span>
                    <h2>Cada ligação chega à pessoa certa</h2>
                    <p>Número próprio, regras claras de quem atende e uma rede de segurança para quando ninguém puder.</p>
                </ActHeader>

                {/* 4. NÚMERO E ROTEAMENTO */}
                <FeatureRow>
                    <TextContent>
                        <h3>Um número da escola e cinco jeitos de atender.</h3>
                        <p>
                            Escolha o DDD, ative o número e defina o que acontece quando a família liga. Você muda a regra quando quiser, sem chamar técnico.
                        </p>
                        <ul>
                            <li><PhoneIncoming size={20}/> <strong>Número dedicado:</strong> busque os números disponíveis pelo DDD e ative direto no Maskot. Prefere a sua própria conta de telefonia? Também dá para conectar.</li>
                            <li><Shuffle size={20}/> <strong>Modos de atendimento:</strong> atendente específico, grupo ou departamento, fila de atendentes, menu por ramal ou a Mia atendendo primeiro.</li>
                            <li><PhoneForwarded size={20}/> <strong>Rede de segurança:</strong> desvio para um celular externo e caixa postal com recado de até 2 minutos.</li>
                        </ul>
                    </TextContent>

                    <MockupCard>
                        <Dots />
                        <RoutingMock>
                            <div className="number">
                                <div>
                                    <div className="lbl">Número da escola</div>
                                    <div className="num">(79) 3000-0000</div>
                                </div>
                                <span className="ok">Ativo</span>
                            </div>
                            <div className="title">Quem atende quando a família liga</div>
                            <div className="mode"><UserCheck size={16}/> Atendente específico</div>
                            <div className="mode"><Building2 size={16}/> Grupo ou departamento</div>
                            <div className="mode active"><Users size={16}/> Fila de atendentes (distribuição automática)</div>
                            <div className="mode"><Hash size={16}/> Menu por ramal</div>
                            <div className="mode"><Bot size={16}/> Mia atende primeiro</div>
                            <div className="fallback">
                                <span>Desvio: celular externo</span>
                                <span>Caixa postal: ligada</span>
                            </div>
                        </RoutingMock>
                    </MockupCard>
                </FeatureRow>

                {/* 5. RAMAIS E DEPARTAMENTOS */}
                <FeatureRow $reverse>
                    <MockupCard>
                        <Dots />
                        <ExtMock>
                            <div className="menu">
                                <Volume2 size={16}/>
                                <span>&quot;Olá! Você ligou para o Colégio. Digite o ramal do setor ou do atendente com quem deseja falar.&quot;</span>
                            </div>
                            <div className="group">
                                <div className="group-head"><Building2 size={16}/> Secretaria <span className="ext">1001</span></div>
                                <div className="members"><span>Lúcia</span><span>Rafael</span></div>
                            </div>
                            <div className="group">
                                <div className="group-head"><Building2 size={16}/> Comercial <span className="ext">1002</span></div>
                                <div className="members"><span>Marina</span><span>Paulo</span><span>Beatriz</span></div>
                            </div>
                            <div className="group">
                                <div className="group-head"><Building2 size={16}/> Financeiro <span className="ext">1003</span></div>
                                <div className="members"><span>Renata</span></div>
                            </div>
                        </ExtMock>
                    </MockupCard>

                    <TextContent>
                        <h3>Ramais e departamentos, sem central telefônica.</h3>
                        <p>
                            Quem liga digita o ramal do setor e a chamada toca para um dos membros disponíveis. A Secretaria não atrapalha o Comercial, e o Financeiro não perde ligação.
                        </p>
                        <ul>
                            <li><Network size={20}/> <strong>Grupos por setor:</strong> Secretaria, Comercial, Financeiro ou o que fizer sentido na sua escola, cada um com o seu ramal.</li>
                            <li><Hash size={20}/> <strong>Ramal individual:</strong> cada atendente pode ter o seu, de 4 dígitos, para quem já sabe com quem quer falar.</li>
                            <li><Volume2 size={20}/> <strong>Mensagem falada do menu:</strong> escreva o texto e o sistema narra em português do Brasil quando a ligação é atendida.</li>
                        </ul>
                    </TextContent>
                </FeatureRow>

                {/* 6. MIA AO TELEFONE */}
                <FeatureRow>
                    <TextContent>
                        <h3>A Mia atende o telefone quando ninguém da equipe pode.</h3>
                        <p>
                            Fora do horário, no almoço ou com todos em ligação, a Mia atende no lugar da caixa postal. Ela conversa por voz, tira as dúvidas, cadastra o contato e agenda a visita.
                        </p>
                        <ul>
                            <li><Bot size={20}/> <strong>Fala como recepcionista:</strong> frases curtas, valores e horários por extenso, e confirmação de nome e telefone em voz alta antes de registrar.</li>
                            <li><CalendarCheck size={20}/> <strong>Agenda a visita na hora:</strong> consulta os horários livres, cadastra o responsável como lead e confirma o dia combinado.</li>
                            <li><ArrowRightLeft size={20}/> <strong>Passa para a equipe com contexto:</strong> quando a família pede um humano ou o assunto foge do escopo, a ligação volta a tocar e o motivo da transferência fica registrado.</li>
                            <li><ShieldCheck size={20}/> <strong>Transparente por padrão:</strong> a Mia sempre se apresenta como assistente virtual e avisa que a ligação é gravada. Esses dois avisos não podem ser desligados.</li>
                        </ul>
                    </TextContent>

                    <MockupCard>
                        <Dots />
                        <MiaCallMock>
                            <div className="top"><Bot size={16}/> Ligação atendida pela Mia <span className="badge">Mia · voz</span></div>
                            <div className="line"><span className="who">Mia</span>Olá! Sou a Mia, assistente virtual do Colégio. Esta ligação é gravada. Como posso ajudar?</div>
                            <div className="line caller"><span className="who">Quem ligou</span>Queria conhecer a escola. Tem horário na quinta?</div>
                            <div className="line"><span className="who">Mia</span>Tenho às nove e às quatorze horas. Qual prefere?</div>
                            <div className="line caller"><span className="who">Quem ligou</span>Às quatorze.</div>
                            <div className="action"><CalendarCheck size={13}/> Visita agendada · quinta, 14h · lead cadastrado</div>
                            <div className="handoff">Se a família pedir para falar com alguém, a Mia transfere para a equipe e registra o motivo no cadastro.</div>
                        </MiaCallMock>
                    </MockupCard>
                </FeatureRow>

                <ActDivider />

                <ActHeader>
                    <span className="eyebrow">3 · Registrar e gerir</span>
                    <h2>Nada fica só na memória do atendente</h2>
                    <p>Cada ligação vira dado: quem falou, o que foi combinado e o que precisa de retorno.</p>
                </ActHeader>

                {/* 7. PÓS-LIGAÇÃO */}
                <FeatureRow>
                    <TextContent>
                        <h3>Desligou? Registre o resultado em dez segundos.</h3>
                        <p>
                            Ao fim de cada ligação atendida, o Maskot pergunta como foi. O desfecho e a anotação entram na linha do tempo do lead, e o próximo consultor não precisa perguntar de novo.
                        </p>
                        <ul>
                            <li><ClipboardCheck size={20}/> <strong>Desfecho padronizado:</strong> interessado, pediu retorno, agendou visita, sem interesse, número errado ou outro.</li>
                            <li><FileText size={20}/> <strong>Anotação do combinado:</strong> o que ficou acertado e qual é o próximo passo.</li>
                            <li><History size={20}/> <strong>Vira atividade do lead:</strong> a ligação aparece no histórico do cadastro, em vez de sumir como um tempo sem registro.</li>
                        </ul>
                    </TextContent>

                    <MockupCard>
                        <Dots />
                        <WrapUpMock>
                            <h5>Como foi a ligação?</h5>
                            <div className="sub">Registre o desfecho para não perder o histórico do contato</div>
                            <div className="lbl">Desfecho</div>
                            <div className="chips">
                                <span className="chip">Interessado</span>
                                <span className="chip">Pediu retorno</span>
                                <span className="chip on">Agendou visita</span>
                                <span className="chip">Sem interesse</span>
                                <span className="chip">Número errado</span>
                            </div>
                            <div className="note">Visita combinada para quinta às 14h. Quer conhecer o fundamental II e saber da bolsa para irmãos.</div>
                            <div className="result"><ClipboardCheck size={15}/> Ligação registrada na ficha do lead.</div>
                        </WrapUpMock>
                    </MockupCard>
                </FeatureRow>

                {/* 8. CENTRAL DE CHAMADAS */}
                <FeatureRow $reverse>
                    <MockupCard>
                        <Dots />
                        <CentralMock>
                            <div className="stats">
                                <div className="stat"><span>Hoje</span><strong>38</strong></div>
                                <div className="stat"><span>Atendidas</span><strong>29</strong></div>
                                <div className="stat miss"><span>Perdidas</span><strong>4</strong></div>
                                <div className="stat"><span>Recados</span><strong>3</strong></div>
                            </div>
                            <div className="table">
                                <div className="tr th"><span>Quem ligou</span><span>Quem atendeu</span><span>Duração</span><span>Status</span></div>
                                <div className="tr"><strong>Ana Silva</strong><span>Marina</span><span>04:12</span><span className="st ok">Concluída</span></div>
                                <div className="tr"><strong>(79) 99999-0000</strong><span>Mia</span><span>02:48</span><span className="st ok">Concluída</span></div>
                                <div className="tr"><strong>Carlos Souza</strong><span>—</span><span>—</span><span className="st bad">Perdida</span></div>
                                <div className="tr"><strong>Mariana Lima</strong><span>—</span><span>00:34</span><span className="st vm">Deixou recado</span></div>
                            </div>
                        </CentralMock>
                    </MockupCard>

                    <TextContent>
                        <h3>Central de Chamadas: o que entrou, o que saiu e o que ficou sem resposta.</h3>
                        <p>
                            O gestor acompanha o telefone como acompanha o funil. Quantas ligações chegaram, quem atendeu, quanto tempo durou e onde a escola está deixando família esperando.
                        </p>
                        <ul>
                            <li><Gauge size={20}/> <strong>Resumo do dia:</strong> total, atendidas, perdidas, recados, falhas, em andamento e duração média.</li>
                            <li><Search size={20}/> <strong>Filtros que respondem:</strong> por período, atendente, direção (entrada ou saída) e status, com busca por nome ou telefone.</li>
                            <li><Voicemail size={20}/> <strong>Recados com áudio:</strong> quem ligou e ninguém atendeu pode deixar uma mensagem, que aparece no histórico para ouvir.</li>
                        </ul>
                    </TextContent>
                </FeatureRow>

                {/* 9. GRAVAÇÃO E PRIVACIDADE */}
                <FeatureRow>
                    <TextContent>
                        <h3>Gravação com regra: quem ouve, por quanto tempo e com aviso.</h3>
                        <p>
                            Gravar ligação é uma decisão com responsabilidade. O Maskot deixa o aviso, o prazo e o acesso sob controle da escola, para você treinar a equipe sem expor a família.
                        </p>
                        <ul>
                            <li><Headphones size={20}/> <strong>Gravação e transcrição na ficha:</strong> cada ligação do lead traz o áudio e, nas atendidas pela Mia, o resumo e a conversa transcrita.</li>
                            <li><KeyRound size={20}/> <strong>Permissão própria para ouvir:</strong> ouvir gravações e ler transcrições é uma permissão separada, dada só a quem precisa.</li>
                            <li><Trash2 size={20}/> <strong>Prazo de guarda definido por você:</strong> de 30 dias a 1 ano. Passado o prazo, o áudio é apagado e o registro da ligação continua.</li>
                            <li><Bell size={20}/> <strong>Aviso de gravação:</strong> a informação &quot;esta ligação está sendo gravada&quot; é falada no início, como transparência devida à pessoa.</li>
                        </ul>
                    </TextContent>

                    <MockupCard>
                        <Dots />
                        <LeadCallMock>
                            <div className="tabs"><span>Atividades</span><span>Visitas</span><span className="on">Ligações</span></div>
                            <div className="call">
                                <div className="row"><PhoneIncoming size={16} color="#0E7490"/><strong>Ligação recebida</strong><span className="when">hoje, 10:42</span></div>
                                <div className="player"><Headphones size={14}/> 02:48 <div className="bar"><div className="fill"></div></div> 1x</div>
                                <div className="summary"><b>Resumo da Mia:</b> família quer conhecer o fundamental II. Visita agendada para quinta, 14h.</div>
                            </div>
                            <div className="call">
                                <div className="row"><Phone size={16} color="#0E7490"/><strong>Ligação realizada</strong><span className="when">ontem, 16:05</span></div>
                                <div className="locked"><Lock size={14}/> Sem permissão para ouvir gravações. O registro da ligação segue visível.</div>
                            </div>
                        </LeadCallMock>
                    </MockupCard>
                </FeatureRow>

                {/* 10. POWER FEATURES GRID */}
                <div style={{textAlign: 'center', marginBottom: '3rem'}}>
                    <h3 style={{
                        fontSize: '2rem',
                        fontWeight: 800,
                        color: '#0F172A',
                        fontFamily: 'var(--font-inter)'
                    }}>Detalhes que evitam dor de cabeça</h3>
                    <p style={{color: '#475569', marginTop: '0.5rem'}}>Do primeiro toque à fatura, a telefonia foi pensada para a rotina da secretaria.</p>
                </div>

                <PowerGrid>
                    <PowerCard>
                        <div className="icon"><Voicemail size={24}/></div>
                        <h4>Caixa postal</h4>
                        <p>Quem liga e não é atendido deixa um recado de até 2 minutos. O áudio fica no histórico, pronto para ouvir.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><PhoneForwarded size={24}/></div>
                        <h4>Desvio para celular externo</h4>
                        <p>Se ninguém estiver disponível no Maskot, a chamada pode seguir para um número do Brasil, antes de cair na caixa postal.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><Timer size={24}/></div>
                        <h4>Tempo máximo da Mia</h4>
                        <p>Defina quanto a Mia pode conversar. Perto do limite ela avisa e passa a ligação para a equipe.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><Gauge size={24}/></div>
                        <h4>Medidor de minutos</h4>
                        <p>Acompanhe quanto da franquia mensal já foi usado, com aviso antes de acabar. Os minutos da Mia são contados à parte.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><Package size={24}/></div>
                        <h4>Pacotes de minutos</h4>
                        <p>Contrate o pacote de ligação da equipe e, se quiser, o da Mia. Contratar já libera a telefonia da escola.</p>
                    </PowerCard>
                    <PowerCard>
                        <div className="icon"><Settings2 size={24}/></div>
                        <h4>Roteiro de ativação</h4>
                        <p>Uma lista mostra o que falta: número, quem atende e a ligação de teste para confirmar o áudio.</p>
                    </PowerCard>
                </PowerGrid>

                <MoreTools>
                    <p>E também:</p>
                    <div className="chips"><span>Discador com teclado</span><span>Busca de lead na hora de ligar</span><span>Teste de microfone</span><span>Escolha da saída de áudio</span><span>Selo de ligações perdidas</span><span>Ligações no histórico do lead</span><span>Voz da Mia à escolha</span><span>Saudação personalizada</span><span>Ramal por atendente</span><span>Aviso de gravação configurável</span><span>SMS para complementar o contato</span></div>
                </MoreTools>

                <Availability>
                    <Sparkles size={22}/>
                    <div>
                        <strong>Como contratar</strong>
                        <p>A telefonia é um módulo contratado por pacote de minutos. A Mia ao telefone exige também o módulo de IA e um pacote de minutos próprio, e é liberada com acompanhamento do nosso time. Fale com um consultor para ver a melhor combinação para a sua escola.</p>
                    </div>
                </Availability>

            </Container>
        </Section>
    )
}
