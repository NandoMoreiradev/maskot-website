'use client'

import styled from 'styled-components'
import Link from 'next/link'
import {
    ShieldCheck,
    Building2,
    LockKeyhole,
    KeyRound,
    FileLock2,
    ScrollText,
    Radar,
    FileCheck2,
    BrainCircuit,
    Cloud,
    Check,
    Mail,
} from 'lucide-react'
import { Container as BaseContainer } from '@/components/ui/Container'

const PRIVACY_EMAIL = 'fernandomoreira@maskotedu.com.br'

const Section = styled.section`
    padding: 5rem 0 6rem;
    background: transparent;
    position: relative;
    overflow: hidden;

    @media (max-width: 768px) {
        padding: 3.5rem 0 4rem;
    }
`

const Container = styled(BaseContainer)`
    position: relative;
    z-index: 1;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.75rem;

    @media (max-width: 968px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (max-width: 640px) {
        grid-template-columns: 1fr;
    }
`

const Card = styled.article<{ $span?: number }>`
    grid-column: span ${props => props.$span ?? 1};
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 4px 6px -1px rgba(15, 23, 42, 0.03);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

    &:hover {
        transform: translateY(-3px);
        border-color: #BFDBFE;
        box-shadow: 0 12px 24px -8px rgba(37, 99, 235, 0.15);
    }

    @media (max-width: 968px) {
        grid-column: span ${props => ((props.$span ?? 1) > 1 ? 2 : 1)};
    }

    @media (max-width: 640px) {
        grid-column: auto;
        padding: 1.5rem;
    }
`

const IconBox = styled.div`
    width: 44px;
    height: 44px;
    flex-shrink: 0;
    border-radius: 12px;
    background: #EFF6FF;
    border: 1px solid #DBEAFE;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 22px;
        height: 22px;
        color: #2563EB;
    }
`

const CardTitle = styled.h3`
    font-size: 1.1rem;
    font-weight: 800;
    color: #0F172A;
    letter-spacing: -0.01em;
    margin: 0;
`

const CardText = styled.p`
    font-size: 0.9rem;
    color: #64748B;
    line-height: 1.6;
    margin: 0;
`

const BulletList = styled.ul<{ $columns?: boolean }>`
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: ${props => (props.$columns ? 'repeat(2, minmax(0, 1fr))' : '1fr')};
    gap: 1rem 2rem;

    @media (max-width: 640px) {
        grid-template-columns: 1fr;
    }

    li {
        display: flex;
        align-items: flex-start;
        gap: 0.7rem;
        font-size: 0.875rem;
        color: #334155;
        line-height: 1.5;
    }

    svg {
        width: 16px;
        height: 16px;
        flex-shrink: 0;
        margin-top: 3px;
        color: #10B981;
    }

    strong {
        color: #0F172A;
        font-weight: 700;
    }
`

const InfraCard = styled.article`
    margin-top: 1.75rem;
    display: flex;
    align-items: flex-start;
    gap: 1.5rem;
    background: linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%);
    border-radius: 16px;
    padding: 2.25rem;
    color: #FFFFFF;
    box-shadow: 0 12px 24px -8px rgba(37, 99, 235, 0.35);

    @media (max-width: 640px) {
        flex-direction: column;
        padding: 1.75rem;
    }

    h3 {
        color: #FFFFFF;
        font-size: 1.15rem;
        font-weight: 800;
        letter-spacing: -0.01em;
        margin: 0 0 0.75rem;
    }

    p {
        font-size: 0.9rem;
        line-height: 1.6;
        color: rgba(255, 255, 255, 0.88);
        margin: 0;
    }
`

const InfraIcon = styled.div`
    width: 48px;
    height: 48px;
    flex-shrink: 0;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.14);
    border: 1px solid rgba(255, 255, 255, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 24px;
        height: 24px;
        color: #FFFFFF;
    }
`

const Footnote = styled.p`
    margin: 3rem auto 0;
    max-width: 640px;
    text-align: center;
    font-size: 0.9rem;
    color: #64748B;
    line-height: 1.6;

    a {
        color: #2563EB;
        font-weight: 600;
        text-decoration: underline;
        text-underline-offset: 2px;
    }

    a:hover {
        color: #1E3A8A;
    }
`

export default function SecurityDetails() {
    return (
        <Section>
            <Container>
                <Grid>
                    <Card>
                        <IconBox><Building2 aria-hidden="true" /></IconBox>
                        <CardTitle>Isolamento total entre escolas</CardTitle>
                        <CardText>
                            Cada escola tem seu próprio espaço, separado pelo próprio banco de dados. Mesmo que uma tela tivesse um erro,
                            o banco não entregaria dados de uma escola para outra. Testamos isso de forma automática em todas as rotas do sistema.
                        </CardText>
                    </Card>

                    <Card>
                        <IconBox><LockKeyhole aria-hidden="true" /></IconBox>
                        <CardTitle>Criptografia em todas as camadas</CardTitle>
                        <CardText>
                            Toda comunicação com o Maskot é criptografada. Os dados ficam criptografados também no armazenamento, e os mais
                            sensíveis, como CPF de responsáveis, informações de saúde e ocorrências de alunos, recebem uma segunda camada de
                            criptografia, campo a campo. Mesmo uma cópia do banco de dados não revela essas informações.
                        </CardText>
                    </Card>

                    <Card>
                        <IconBox><FileLock2 aria-hidden="true" /></IconBox>
                        <CardTitle>Arquivos que não vazam por link</CardTitle>
                        <CardText>
                            Documentos de alunos, anexos e mídias das conversas não ficam em endereços públicos. Eles só abrem por links
                            temporários, que expiram sozinhos. Um link encaminhado por engano deixa de funcionar em pouco tempo.
                        </CardText>
                    </Card>

                    <Card>
                        <IconBox><KeyRound aria-hidden="true" /></IconBox>
                        <CardTitle>Acesso protegido</CardTitle>
                        <BulletList>
                            <li><Check aria-hidden="true" /><span>Autenticação em dois fatores obrigatória para administradores.</span></li>
                            <li><Check aria-hidden="true" /><span>Bloqueio automático diante de tentativas repetidas de acesso.</span></li>
                            <li><Check aria-hidden="true" /><span>Permissões por perfil: cada pessoa vê só o que o seu cargo permite.</span></li>
                            <li><Check aria-hidden="true" /><span>Botão para encerrar a sessão em todos os dispositivos.</span></li>
                        </BulletList>
                    </Card>

                    <Card>
                        <IconBox><ScrollText aria-hidden="true" /></IconBox>
                        <CardTitle>Transparência sobre quem acessa</CardTitle>
                        <CardText>
                            Toda alteração fica registrada na trilha de auditoria da escola. Se a equipe do Maskot precisar entrar na sua
                            conta para dar suporte, o acesso exige um motivo, os administradores da escola são avisados na hora e tudo o que
                            for feito aparece na auditoria com o nome de quem fez.
                        </CardText>
                    </Card>

                    <Card>
                        <IconBox><Radar aria-hidden="true" /></IconBox>
                        <CardTitle>Vigilância contínua</CardTitle>
                        <CardText>
                            O Maskot monitora automaticamente sinais de ataque, como tentativas de invasão em massa, sessões roubadas e acessos
                            fora do padrão, e alerta nossa equipe na hora. Se um incidente afetar dados da sua escola, avisamos em até 48 horas,
                            com as informações de que você precisa para agir.
                        </CardText>
                    </Card>

                    <Card $span={2}>
                        <IconBox><FileCheck2 aria-hidden="true" /></IconBox>
                        <CardTitle>LGPD sem dor de cabeça</CardTitle>
                        <BulletList $columns>
                            <li><Check aria-hidden="true" /><span><strong>Acesso e portabilidade:</strong> exporte todos os dados de um aluno ou responsável em PDF e planilha, com os anexos, em poucos cliques.</span></li>
                            <li><Check aria-hidden="true" /><span><strong>Exclusão:</strong> atenda pedidos de eliminação com prazo de cancelamento e comprovante.</span></li>
                            <li><Check aria-hidden="true" /><span><strong>Consentimento:</strong> formulários e agendamentos com consentimento registrado, e descadastro respeitado em todos os canais.</span></li>
                            <li><Check aria-hidden="true" /><span><strong>Retenção:</strong> dados que não precisam mais existir são eliminados automaticamente.</span></li>
                            <li><Check aria-hidden="true" /><span>Encarregado de dados nomeado e contato publicado.</span></li>
                        </BulletList>
                    </Card>

                    <Card>
                        <IconBox><BrainCircuit aria-hidden="true" /></IconBox>
                        <CardTitle>Inteligência artificial com responsabilidade</CardTitle>
                        <CardText>
                            Os dados da sua escola não são usados para treinar modelos de inteligência artificial, nem pelo Maskot, nem pelos
                            nossos fornecedores.
                        </CardText>
                    </Card>
                </Grid>

                <InfraCard>
                    <InfraIcon><Cloud aria-hidden="true" /></InfraIcon>
                    <div>
                        <h3>Infraestrutura de padrão internacional</h3>
                        <p>
                            O Maskot roda em provedores de nuvem de padrão internacional, com proteção contra ataques na borda da rede, cópias
                            de segurança automáticas e criptografadas e recuperação do banco em qualquer ponto dos últimos 7 dias. Pagamentos
                            são processados pela Stripe: os dados do cartão nunca passam pelos nossos servidores.
                        </p>
                    </div>
                </InfraCard>

                <Footnote>
                    <ShieldCheck size={16} aria-hidden="true" style={{ verticalAlign: '-3px', marginRight: 6, color: '#2563EB' }} />
                    Quer saber mais? Nossa <Link href="/legal/privacidade">Política de Privacidade</Link> explica em detalhes como
                    tratamos os dados. Dúvidas sobre privacidade:{' '}
                    <a href={`mailto:${PRIVACY_EMAIL}`}>
                        <Mail size={14} aria-hidden="true" style={{ verticalAlign: '-2px', marginRight: 4 }} />
                        {PRIVACY_EMAIL}
                    </a>.
                </Footnote>
            </Container>
        </Section>
    )
}
