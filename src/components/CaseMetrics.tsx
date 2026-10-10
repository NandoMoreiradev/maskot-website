'use client'

import styled from 'styled-components'

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2.5rem;
  margin: 3.5rem 0;
  padding: 2.5rem 3rem;
  background: #F8FAFC;
  border-radius: 20px;
  border: 1px solid #E2E8F0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);

  @media (max-width: 768px) {
    padding: 2rem;
    grid-template-columns: 1fr;
    gap: 1.75rem;
  }
`

const MetricItem = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const MetricValue = styled.div`
  font-size: 3.25rem;
  font-weight: 800;
  color: #2563EB;
  letter-spacing: -0.02em;
  margin-bottom: 0.6rem;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const MetricLabel = styled.div`
  font-size: 0.95rem;
  color: #475569;
  font-weight: 600;
  max-width: 220px;
  line-height: 1.4;
`

interface Metric {
  value: string;
  label: string;
}

interface CaseMetricsProps {
  metrics: Metric[];
}

export default function CaseMetrics({ metrics }: CaseMetricsProps) {
  if (!metrics || metrics.length === 0) return null;

  return (
    <MetricsGrid>
      {metrics.map((metric, index) => (
        <MetricItem key={index}>
          <MetricValue>{metric.value}</MetricValue>
          <MetricLabel>{metric.label}</MetricLabel>
        </MetricItem>
      ))}
    </MetricsGrid>
  )
}
