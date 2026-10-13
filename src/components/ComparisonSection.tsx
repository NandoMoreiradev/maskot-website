'use client'

import { useId, useState } from 'react'
import styled from 'styled-components'
import { Check, X, Minus, Users, ShieldAlert } from 'lucide-react'
import { SectionHeader, Eyebrow, SectionTitle, SectionSubtitle } from '@/components/ui/SectionHeading'
import {
  CONSULTED_AT,
  LUMNI_ROWS,
  MODULES,
  PER_USER_TOOLS,
  type LumniCell,
} from '@/components/comparison/comparisonData'

// ========== SHELL ==========
const Section = styled.section`
  padding: 1rem 0 2rem;
  background: transparent;
`

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    padding: 0 1rem;
  }
`

const Block = styled.div`
  margin-top: 4rem;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    margin-top: 3rem;
  }
`

// ========== CALCULADORA POR USUÁRIO ==========
const CalcCard = styled.div`
  background: ${props => props.theme.colors.pageBackground};
  border: 1px solid ${props => props.theme.colors.borderLight};
  border-radius: ${props => props.theme.borderRadius['2xl']};
  padding: 2rem;

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    padding: 1.25rem;
  }
`

const SliderRow = styled.div`
  max-width: 520px;
  margin: 0 auto 2rem;

  label {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
    font-weight: 700;
    color: ${props => props.theme.colors.textDark};
    margin-bottom: 0.75rem;
  }

  output {
    font-size: 1.5rem;
    font-weight: 800;
    color: ${props => props.theme.colors.primary};
  }

  input[type='range'] {
    width: 100%;
    accent-color: ${props => props.theme.colors.primary};
    cursor: pointer;
  }
`

const CalcGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`

const CalcResult = styled.div<{ $maskot?: boolean }>`
  background: ${props => props.$maskot ? props.theme.colors.primary : props.theme.colors.white};
  color: ${props => props.$maskot ? props.theme.colors.white : props.theme.colors.textDark};
  border: 1px solid ${props => props.$maskot ? props.theme.colors.primary : props.theme.colors.borderLight};
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;

  .name {
    font-size: 0.875rem;
    font-weight: 700;
    opacity: ${props => props.$maskot ? 0.9 : 1};
  }

  .value {
    font-size: 1.75rem;
    font-weight: 800;
    line-height: 1.1;
  }

  .detail {
    font-size: 0.8125rem;
    opacity: ${props => props.$maskot ? 0.9 : 0.75};
    line-height: 1.4;
  }
`

const CalcFootnote = styled.p`
  margin-top: 1.25rem;
  font-size: 0.8125rem;
  color: ${props => props.theme.colors.textMedium};
  line-height: 1.5;
`

// ========== MÓDULOS ==========
const ModulesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`

const ModuleCard = styled.article`
  background: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.borderLight};
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: ${props => props.theme.shadows.sm};

  header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  h3 {
    font-size: 1.125rem;
    font-weight: 800;
    color: ${props => props.theme.colors.textDark};
  }
`

const IconBox = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: ${props => props.theme.colors.primary}12;
  color: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 20px;
    height: 20px;
  }
`

const Label = styled.span`
  display: block;
  font-size: 0.6875rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${props => props.theme.colors.textMedium};
  margin-bottom: 0.4rem;
`

const ToolList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;

  li {
    font-size: 0.8125rem;
    font-weight: 600;
    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.backgroundMedium};
    border-radius: 999px;
    padding: 0.2rem 0.65rem;
  }
`

const Muted = styled.p`
  font-size: 0.875rem;
  color: ${props => props.theme.colors.textMedium};
  line-height: 1.5;
`

const MaskotBox = styled.div`
  background: ${props => props.theme.colors.primary}0D;
  border: 1px solid ${props => props.theme.colors.primary}30;
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: 0.85rem 1rem;

  ${Label} {
    color: ${props => props.theme.colors.primary};
  }

  p {
    font-size: 0.9375rem;
    color: ${props => props.theme.colors.textDark};
    line-height: 1.5;
  }
`

const WhenOther = styled.p`
  font-size: 0.8125rem;
  color: ${props => props.theme.colors.textMedium};
  line-height: 1.5;
  border-top: 1px dashed ${props => props.theme.colors.borderLight};
  padding-top: 0.75rem;

  strong {
    color: ${props => props.theme.colors.text};
  }
`

// ========== MASKOT × LUMNI ==========
const TableWrapper = styled.div`
  overflow-x: auto;
  border: 1px solid ${props => props.theme.colors.borderLight};
  border-radius: ${props => props.theme.borderRadius.xl};
  background: ${props => props.theme.colors.white};
`

const Table = styled.table`
  width: 100%;
  min-width: 640px;
  border-collapse: collapse;

  th, td {
    padding: 0.85rem 1rem;
    text-align: left;
    border-bottom: 1px solid ${props => props.theme.colors.borderLight};
    font-size: 0.9rem;
    vertical-align: middle;
  }

  thead th {
    background: ${props => props.theme.colors.pageBackground};
    font-size: 0.8125rem;
    font-weight: 800;
    color: ${props => props.theme.colors.textDark};
  }

  tbody th {
    font-weight: 600;
    color: ${props => props.theme.colors.text};
  }

  tbody tr:last-child th,
  tbody tr:last-child td {
    border-bottom: none;
  }
`

const CellContent = styled.span<{ $kind: LumniCell['kind'] }>`
  display: inline-flex;
  align-items: flex-start;
  gap: 0.4rem;
  line-height: 1.35;
  color: ${props => props.$kind === 'yes'
    ? props.theme.colors.textDark
    : props.theme.colors.textMedium};

  svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    margin-top: 2px;
    color: ${props => {
      if (props.$kind === 'yes') return props.theme.colors.success
      if (props.$kind === 'no') return props.theme.colors.danger
      return props.theme.colors.borderMedium
    }};
  }
`

const ProsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`

const ProCard = styled.div`
  background: ${props => props.theme.colors.pageBackground};
  border: 1px solid ${props => props.theme.colors.borderLight};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: 1.1rem 1.25rem;

  strong {
    display: block;
    color: ${props => props.theme.colors.textDark};
    margin-bottom: 0.25rem;
  }

  p {
    font-size: 0.9375rem;
    color: ${props => props.theme.colors.textMedium};
    line-height: 1.5;
  }
`

const Verdict = styled.p`
  margin-top: 1.25rem;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  color: ${props => props.theme.colors.textDark};
  line-height: 1.5;
`

// ========== TRANSPARÊNCIA ==========
const HonestyCard = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  background: ${props => props.theme.colors.pageBackground};
  border: 1px solid ${props => props.theme.colors.borderLight};
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: 1.5rem;

  svg {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    color: ${props => props.theme.colors.primary};
    margin-top: 2px;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 800;
    color: ${props => props.theme.colors.textDark};
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.9375rem;
    color: ${props => props.theme.colors.textMedium};
    line-height: 1.6;
  }
`

const Legal = styled.p`
  margin-top: 2.5rem;
  font-size: 0.75rem;
  color: ${props => props.theme.colors.textMedium};
  line-height: 1.5;
  text-align: center;
`

// ========== HELPERS ==========
const formatMoney = (value: number, currency: 'BRL' | 'USD') =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency }).format(value)

function LumniCellView({ cell }: { cell: LumniCell }) {
  const Icon = cell.kind === 'yes' ? Check : cell.kind === 'no' ? X : Minus
  return (
    <CellContent $kind={cell.kind}>
      <Icon aria-hidden="true" />
      {cell.text}
    </CellContent>
  )
}

const MIN_TEAM = 1
const MAX_TEAM = 50

// ========== COMPONENT ==========
export default function ComparisonSection() {
  const [team, setTeam] = useState(10)
  const sliderId = useId()

  return (
    <Section>
      <Container>
        {/* BLOCO 1: modelo de cobrança */}
        <Block style={{ marginTop: 0 }}>
          <SectionHeader>
            <Eyebrow>Modelo de cobrança</Eyebrow>
            <SectionTitle>Cada pessoa a mais na equipe custa mais. No Maskot, não.</SectionTitle>
            <SectionSubtitle>
              A maioria das ferramentas cobra por usuário: conforme a equipe cresce (comercial,
              secretaria, coordenação), a conta cresce junto. No Maskot, todos os planos têm{' '}
              <strong>usuários e atendentes ilimitados</strong>.
            </SectionSubtitle>
          </SectionHeader>

          <CalcCard>
            <SliderRow>
              <label htmlFor={sliderId}>
                <span><Users size={16} style={{ verticalAlign: '-2px', marginRight: 6 }} aria-hidden="true" />Pessoas na sua equipe</span>
                <output htmlFor={sliderId}>{team}</output>
              </label>
              <input
                id={sliderId}
                type="range"
                min={MIN_TEAM}
                max={MAX_TEAM}
                value={team}
                onChange={e => setTeam(Number(e.target.value))}
                aria-valuetext={`${team} ${team === 1 ? 'pessoa' : 'pessoas'}`}
              />
            </SliderRow>

            <CalcGrid>
              {PER_USER_TOOLS.map(tool => (
                <CalcResult key={tool.name}>
                  <span className="name">{tool.name}</span>
                  <span className="value">{formatMoney(tool.price * team, tool.currency)}/mês</span>
                  <span className="detail">
                    {team} × {formatMoney(tool.price, tool.currency)} · {tool.note}
                  </span>
                </CalcResult>
              ))}
              <CalcResult $maskot>
                <span className="name">Maskot</span>
                <span className="value">Mesmo preço do plano</span>
                <span className="detail">Com {team} ou com {MAX_TEAM} pessoas. Usuários ilimitados em todos os planos.</span>
              </CalcResult>
            </CalcGrid>

            <CalcFootnote>
              Valores de referência por usuário, conforme as páginas oficiais em {CONSULTED_AT}. Cada ferramenta
              resolve uma parte do processo, então a soma não representa o custo total da sua pilha. Digisac e Octadesk
              também cobram por atendente, mas não divulgam tabela de preços.
            </CalcFootnote>
          </CalcCard>
        </Block>

        {/* BLOCO 2: módulo a módulo */}
        <Block id="comparar">
          <SectionHeader>
            <Eyebrow>Comparação por módulo</Eyebrow>
            <SectionTitle>Módulo a módulo</SectionTitle>
            <SectionSubtitle>O que você usaria hoje em cada etapa, como essas ferramentas cobram e o que o Maskot entrega.</SectionSubtitle>
          </SectionHeader>

          <ModulesGrid>
            {MODULES.map(module => {
              const Icon = module.icon
              return (
                <ModuleCard key={module.id}>
                  <header>
                    <IconBox><Icon aria-hidden="true" /></IconBox>
                    <h3>{module.name}</h3>
                  </header>

                  <div>
                    <Label>Você usaria hoje</Label>
                    <ToolList>
                      {module.tools.map(tool => <li key={tool}>{tool}</li>)}
                    </ToolList>
                    {module.pricing && <Muted style={{ marginTop: '0.6rem' }}>{module.pricing}</Muted>}
                  </div>

                  <MaskotBox>
                    <Label>No Maskot</Label>
                    <p>{module.maskot}</p>
                  </MaskotBox>

                  {module.whenOther && (
                    <WhenOther>
                      <strong>Quando outra ferramenta faz mais sentido:</strong> {module.whenOther}
                    </WhenOther>
                  )}
                </ModuleCard>
              )
            })}
          </ModulesGrid>
        </Block>

        {/* BLOCO 3: Maskot × Lumni */}
        <Block>
          <SectionHeader>
            <Eyebrow>Concorrente direto</Eyebrow>
            <SectionTitle>Maskot × Lumni: o que cada uma mostra</SectionTitle>
            <SectionSubtitle>
              A Lumni também é uma plataforma para escolas particulares, e é uma boa referência.
              Veja lado a lado o que cada uma divulga publicamente.
            </SectionSubtitle>
          </SectionHeader>

          <TableWrapper>
            <Table>
              <caption style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>
                Comparação entre os recursos divulgados pelo Maskot e pela Lumni
              </caption>
              <thead>
                <tr>
                  <th scope="col">Recurso</th>
                  <th scope="col">Maskot</th>
                  <th scope="col">Lumni</th>
                </tr>
              </thead>
              <tbody>
                {LUMNI_ROWS.map(row => (
                  <tr key={row.feature}>
                    <th scope="row">{row.feature}</th>
                    <td><LumniCellView cell={row.maskot} /></td>
                    <td><LumniCellView cell={row.lumni} /></td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </TableWrapper>

          <ProsGrid>
            <ProCard>
              <strong>Onde a Lumni é forte</strong>
              <p>O Radar das Escolas, uma ferramenta gratuita de inteligência de mercado, e a base de mais de 400 escolas parceiras.</p>
            </ProCard>
            <ProCard>
              <strong>Onde o Maskot é mais amplo</strong>
              <p>Além da captação, cobre redes sociais, pesquisas, onboarding, comissões, rotina da escola e gestão de grupos.</p>
            </ProCard>
          </ProsGrid>

          <Verdict>
            Se o objetivo é captar e atender leads, as duas resolvem. Se você quer gerir também o relacionamento
            depois da matrícula e a rotina da escola, o Maskot cobre mais.
          </Verdict>

          <Muted style={{ textAlign: 'center', marginTop: '0.75rem', fontSize: '0.8125rem' }}>
            Informações extraídas do site público da Lumni em {CONSULTED_AT}. &quot;Não consta no site&quot; significa
            que não encontramos o recurso nas páginas públicas, não que ele não exista.
          </Muted>
        </Block>

        {/* BLOCO 4: transparência */}
        <Block>
          <HonestyCard>
            <ShieldAlert aria-hidden="true" />
            <div>
              <h2>O que o Maskot não substitui</h2>
              <p>
                O Maskot não é um ERP escolar (diário, notas, boletos). Não substitui um BI sob medida nem um
                help desk de grande porte. Ele resolve o caminho entre o primeiro contato e a matrícula e
                funciona junto com o que você já usa.
              </p>
            </div>
          </HonestyCard>
        </Block>

        <Legal>
          Marcas citadas pertencem aos seus titulares e são usadas apenas para identificação. Comparação baseada em
          informações públicas consultadas em {CONSULTED_AT}; preços e planos podem mudar.
        </Legal>
      </Container>
    </Section>
  )
}
