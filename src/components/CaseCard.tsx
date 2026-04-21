'use client'

import styled from 'styled-components'
import Link from 'next/link'
import { PrismicNextImage } from '@prismicio/next'
import { ImageField } from '@prismicio/client'
import { ArrowRight } from 'lucide-react'

const Card = styled.article`
  background: ${props => props.theme.colors.cardBackground};
  border-radius: ${props => props.theme.borderRadius.lg};
  border: 1px solid ${props => props.theme.colors.borderLight};
  overflow: hidden;
  transition: all ${props => props.theme.transitions.base};
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${props => props.theme.shadows.lg};
    border-color: ${props => props.theme.colors.primary}40;
  }
`

const CardHeader = styled.div`
  padding: 2rem;
  background: ${props => props.theme.colors.lightGray};
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${props => props.theme.colors.borderLight};
  min-height: 140px;

  img {
    max-width: 150px;
    max-height: 80px;
    object-fit: contain;
  }
`

const CardContent = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const ClientName = styled.span`
  font-size: ${props => props.theme.typography.fontSize.sm};
  color: ${props => props.theme.colors.primary};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
  display: block;
`

const Title = styled.h3`
  font-size: ${props => props.theme.typography.fontSize.xl};
  color: ${props => props.theme.colors.textDark};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  line-height: ${props => props.theme.typography.lineHeight.tight};
  margin-bottom: 1rem;
`

const Summary = styled.p`
  color: ${props => props.theme.colors.textMedium};
  line-height: ${props => props.theme.typography.lineHeight.relaxed};
  margin-bottom: 2rem;
  flex-grow: 1;
`

const ReadMore = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.colors.primary};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  transition: color ${props => props.theme.transitions.fast};
  margin-top: auto;

  svg {
    width: 1.25rem;
    height: 1.25rem;
    transition: transform ${props => props.theme.transitions.fast};
  }

  &:hover {
    color: ${props => props.theme.colors.secondary};
    svg {
      transform: translateX(4px);
    }
  }
`

interface CaseCardProps {
  uid: string;
  title: string;
  clientName: string;
  clientLogo: ImageField;
  summary: string;
}

export default function CaseCard({ uid, title, clientName, clientLogo, summary }: CaseCardProps) {
  return (
    <Card>
      <CardHeader>
        {clientLogo && clientLogo.url ? (
          <PrismicNextImage field={clientLogo} fallbackAlt={clientName} />
        ) : (
          <ClientName>{clientName}</ClientName>
        )}
      </CardHeader>
      <CardContent>
        <ClientName>{clientName}</ClientName>
        <Title>{title}</Title>
        <Summary>{summary}</Summary>
        <ReadMore href={`/cases/${uid}`}>
          Ler case completo <ArrowRight />
        </ReadMore>
      </CardContent>
    </Card>
  )
}
