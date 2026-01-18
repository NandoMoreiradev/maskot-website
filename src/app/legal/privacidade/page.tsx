import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LegalDocument from '@/components/legal/LegalDocument'

export const metadata: Metadata = {
    title: 'Política de Privacidade | Maskot CRM',
    description: 'Entenda como processamos dados de escolas, alunos e responsáveis em conformidade com a LGPD.',
    robots: {
        index: true,
        follow: true,
    }
}

export default function PrivacyPage() {
    return (
        <>
            <Header />
            <LegalDocument title="Política de Privacidade e Proteção de Dados" lastUpdated="31 de Dezembro de 2025">
                <p>
                    A <strong>MASKOT SOLUÇÕES EM TECNOLOGIA (55.188.948 FERNANDO DOS SANTOS MOREIRA)</strong> (Maskot) reafirma seu compromisso com a
                    segurança, privacidade e transparência no tratamento das informações. Esta política descreve como
                    tratamos dados pessoais em nossa plataforma SaaS de Gestão Educacional, em conformidade com a Lei
                    Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD).
                </p>

                <h2>1. Definições e Papéis (Quem é quem?)</h2>
                <p>Para a correta interpretação desta política no contexto do nosso SaaS:</p>
                <ul>
                    <li><strong>A Escola (Cliente):</strong> Atua como <strong>CONTROLADORA</strong> dos dados. É a
                        Escola quem decide quais dados de alunos e responsáveis serão inseridos na Plataforma Maskot e
                        qual a finalidade do tratamento.
                    </li>
                    <li><strong>A Maskot:</strong> Atua como <strong>OPERADORA</strong>. Nós fornecemos a infraestrutura
                        tecnológica e processamos as informações estritamente seguindo as instruções da Escola.
                    </li>
                    <li><strong>O Titular:</strong> É a pessoa física a quem os dados se referem (o Aluno, o Pai/Mãe, o
                        Lead).
                    </li>
                </ul>

                <h2>2. Quais dados coletamos e processamos?</h2>

                <h3>2.1. Da Escola (Contratante)</h3>
                <p>Necessários para o faturamento e gestão da conta:</p>
                <ul>
                    <li><strong>Dados Cadastrais:</strong> Razão Social, CNPJ, Endereço, Nome dos Gestores.</li>
                    <li><strong>Dados de Acesso:</strong> E-mail corporativo, senha (criptografada) e logs de acesso
                        (Audit Logs).
                    </li>
                    <li><strong>Dados Financeiros:</strong> Histórico de pagamentos e dados transacionais (geridos por
                        gateways seguros como Stripe ou Asaas).
                    </li>
                </ul>

                <h3>2.2. Dados de Terceiros (Inseridos pela Escola)</h3>
                <p>No papel de Operadora, a Maskot armazena os dados que a Escola insere no CRM. Conforme a arquitetura
                    do sistema, isso pode incluir:</p>
                <ul>
                    <li><strong>Identificação:</strong> Nome completo, CPF, Data de Nascimento.</li>
                    <li><strong>Contato:</strong> Telefone (WhatsApp), E-mail, Endereço.</li>
                    <li><strong>Dados Acadêmicos:</strong> Notas, frequência, histórico escolar e turma desejada.</li>
                    <li><strong>⚠️ Dados Sensíveis (Art. 11 LGPD):</strong> A plataforma permite o registro de
                        Informações de Saúde (ex: alergias, restrições alimentares) estritamente para fins de tutela da
                        saúde e segurança do aluno no ambiente escolar.
                    </li>
                </ul>

                <h2>3. Compartilhamento (Sub-operadores)</h2>
                <p>
                    A Maskot não vende dados. Compartilhamos informações apenas com provedores de infraestrutura de
                    classe mundial essenciais para a operação do software:
                </p>

                <table>
                    <thead>
                        <tr>
                            <th>Parceiro</th>
                            <th>Categoria</th>
                            <th>Finalidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Render</strong></td>
                            <td>Infraestrutura</td>
                            <td>Hospedagem segura da aplicação e banco de dados.</td>
                        </tr>
                        <tr>
                            <td><strong>Cloudflare</strong></td>
                            <td>Armazenamento</td>
                            <td>Armazenamento seguro de arquivos e mídia (R2).</td>
                        </tr>
                        <tr>
                            <td><strong>Meta / WhatsApp</strong></td>
                            <td>Comunicação</td>
                            <td>Tráfego de mensagens da API Oficial do WhatsApp Business.</td>
                        </tr>
                        <tr>
                            <td><strong>Google (Gemini AI)</strong></td>
                            <td>Inteligência Artificial</td>
                            <td>Processamento de linguagem natural para o Chatbot Inteligente.</td>
                        </tr>
                        <tr>
                            <td><strong>Stripe / Asaas</strong></td>
                            <td>Pagamentos</td>
                            <td>Processamento seguro de transações financeiras.</td>
                        </tr>
                        <tr>
                            <td><strong>Resend</strong></td>
                            <td>E-mail</td>
                            <td>Disparo de e-mails transacionais e notificações.</td>
                        </tr>
                    </tbody>
                </table>

                <h2>4. Inteligência Artificial (IA)</h2>
                <p>
                    O módulo Maskot AI utiliza modelos de linguagem para auxiliar no atendimento.
                    <strong>Nota Importante:</strong> Os dados pessoais inseridos na plataforma não são utilizados para
                    treinar os modelos públicos de IA de terceiros, sendo processados apenas no contexto da própria
                    Escola.
                </p>

                <h2>5. Direitos dos Titulares</h2>
                <p>
                    Caso você seja um Pai, Aluno ou Lead e deseje exercer seus direitos (acesso, correção,
                    exclusão), <strong>você deve entrar em contato diretamente com a ESCOLA</strong> com a qual possui
                    vínculo. A Maskot fornecerá à Escola as ferramentas necessárias para atender a essas solicitações.
                </p>

                <h2>6. Segurança</h2>
                <p>
                    Adotamos práticas de segurança State of the Art, incluindo criptografia de dados em trânsito (TLS)
                    e em repouso, controle de acesso baseado em funções (RBAC) e autenticação de dois fatores (2FA).
                </p>

                <h2>7. Contato do Encarregado (DPO)</h2>
                <p>
                    Para questões legais ou sobre proteção de dados, entre em contato através do e-mail <a
                        href="mailto:privacidade@maskot.com.br">privacidade@maskot.com.br</a>.
                </p>
            </LegalDocument>
            <Footer />
        </>
    )
}