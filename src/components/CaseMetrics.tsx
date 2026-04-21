'use client'

import styled from 'styled-components'

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
  padding: 3rem;
  background: linear-gradient(135deg, 
    ${props => props.theme.colors.pageBackground} 0%, 
    ${props => props.theme.colors.lightGray} 100%
  );
  border-radius: ${props => props.theme.borderRadius.xl};
  border: 1px solid ${props => props.theme.colors.borderLight};

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 2rem;
    grid-template-columns: 1fr;
    gap: 1.5rem;
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
  font-size: ${props => props.theme.typography.fontSize['4xl']};
  font-weight: ${props => props.theme.typography.fontWeight.extrabold};
  background: linear-gradient(135deg,
    ${props => props.theme.colors.primary} 0%,
    ${props => props.theme.colors.secondary} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
  line-height: 1;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.typography.fontSize['3xl']};
  }
`

const MetricLabel = styled.div`
  font-size: ${props => props.theme.typography.fontSize.base};
  color: ${props => props.theme.colors.textMedium};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  max-width: 180px;
  line-height: ${props => props.theme.typography.lineHeight.tight};
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
