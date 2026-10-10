'use client'

import styled from 'styled-components'
import Link from 'next/link'
import { PrismicNextImage } from '@prismicio/next'
import { ImageField } from '@prismicio/client'
import { ArrowRight, School } from 'lucide-react'

const Card = styled.article`
  background: #FFFFFF;
  border-radius: 20px;
  border: 1px solid #E2E8F0;
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.06);
    border-color: #CBD5E1;

    .arrow-icon {
      transform: translateX(4px);
    }
  }
`

const CardHeader = styled.div`
  padding: 1.75rem;
  background: #F8FAFC;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #E2E8F0;
  min-height: 130px;
  position: relative;

  img {
    max-width: 170px;
    max-height: 65px;
    width: auto;
    height: auto;
    object-fit: contain;
  }

  .fallback-logo {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    color: #64748B;
    font-weight: 700;
    font-size: 1rem;

    svg {
      color: #2563EB;
      width: 24px;
      height: 24px;
    }
  }
`

const CardContent = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  .client-tag {
    display: inline-flex;
    align-items: center;
    padding: 0.3rem 0.75rem;
    background: #EFF6FF;
    color: #2563EB;
    border: 1px solid #DBEAFE;
    border-radius: 100px;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 0.85rem;
    width: fit-content;
  }
`

const Title = styled.h3`
  font-size: 1.25rem;
  color: #0F172A;
  font-weight: 800;
  line-height: 1.35;
  letter-spacing: -0.01em;
  margin-bottom: 0.85rem;
`

const Summary = styled.p`
  color: #64748B;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  flex-grow: 1;
`

const ReadMore = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #2563EB;
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: none;
  margin-top: auto;
  transition: color 0.2s;

  .arrow-icon {
    width: 1.15rem;
    height: 1.15rem;
    transition: transform 0.2s ease;
  }

  &:hover {
    color: #1D4ED8;
  }
`

interface CaseCardProps {
  uid: string;
  title: string;
  clientName: string;
  clientLogo?: ImageField;
  summary: string;
}

export default function CaseCard({
  uid,
  title,
  clientName,
  clientLogo,
  summary,
}: CaseCardProps) {
  const hasLogo = clientLogo && clientLogo.url;

  return (
    <Card>
      <CardHeader>
        {hasLogo ? (
          <PrismicNextImage field={clientLogo} fallbackAlt="" />
        ) : (
          <div className="fallback-logo">
            <School />
            <span>{clientName}</span>
          </div>
        )}
      </CardHeader>
      <CardContent>
        <span className="client-tag">{clientName}</span>
        <Title>{title}</Title>
        <Summary>{summary}</Summary>
        <ReadMore href={`/cases/${uid}`}>
          Ler case completo <ArrowRight className="arrow-icon" />
        </ReadMore>
      </CardContent>
    </Card>
  )
}
