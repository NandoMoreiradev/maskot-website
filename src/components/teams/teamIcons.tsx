import type { LucideIcon } from 'lucide-react'
import { Megaphone, Headset, Handshake, GraduationCap, Compass } from 'lucide-react'
import type { TeamSlug } from '@/lib/teams'

interface TeamVisual {
    icon: LucideIcon
    /** Cor de destaque da equipe (ícones, selos e bordas). */
    accent: string
}

export const TEAM_VISUALS: Record<TeamSlug, TeamVisual> = {
    marketing: { icon: Megaphone, accent: '#F97316' },
    atendimento: { icon: Headset, accent: '#16A34A' },
    comercial: { icon: Handshake, accent: '#2563EB' },
    coordenacao: { icon: GraduationCap, accent: '#0D9488' },
    direcao: { icon: Compass, accent: '#1E3A8A' },
}

/** Quebra o título em trechos, destacando o que estiver entre `*asteriscos*`. */
export function splitHighlight(text: string): { text: string; highlight: boolean }[] {
    return text
        .split('*')
        .map((part, index) => ({ text: part, highlight: index % 2 === 1 }))
        .filter(part => part.text.length > 0)
}
