import type {Metadata} from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LegalDocument from '@/components/legal/LegalDocument'

export const metadata: Metadata = {
    title: 'Termos de Uso | Maskot CRM',
    description: 'Termos e condições contratuais para uso da plataforma Maskot SaaS.',
}

export default function TermsPage() {
    return (
        <>
            <Header/>
            <LegalDocument title="Termos de Uso e Condições Gerais" lastUpdated="31 de Dezembro de 2025">
                <p>
                    Bem-vindo ao <strong>Maskot CRM</strong>. Estes Termos de Uso regem o acesso e uso da plataforma
                    SaaS fornecida pela <strong>MASKOT SOLUÇÕES EM TECNOLOGIA LTDA</strong> à Instituição de Ensino ou
                    Empresa (Contratante). Ao utilizar nossos serviços, você concorda integralmente com estes termos.
                </p>

                <h2>1. Licença de Uso (SaaS)</h2>
                <p>
                    A Maskot concede à Contratante uma licença revogável, não exclusiva, intransferível e limitada para
                    uso do software de gestão educacional e CRM. A licença abrange o acesso aos módulos contratados
                    (Gestão, Comercial, Automação), conforme descrito no seu plano de assinatura.
                </p>

                <h2>2. Responsabilidades da Escola</h2>
                <ul>
                    <li><strong>Base Legal (LGPD):</strong> A Escola declara ser a única responsável pela coleta e
                        inserção de dados de alunos/pais na plataforma, garantindo possuir o devido consentimento ou
                        base legal para tal.
                    </li>
                    <li><strong>Credenciais:</strong> É responsabilidade da Escola manter o sigilo das senhas de seus
                        usuários administrativos.
                    </li>
                    <li><strong>Uso Ético:</strong> É proibido utilizar a plataforma para armazenar conteúdo ilegal,
                        ofensivo ou discriminatório.
                    </li>
                </ul>

                <h2>3. Política de Uso do WhatsApp (Importante)</h2>
                <p>
                    A integração utiliza a API Oficial do WhatsApp Business (Meta). O uso está condicionado à aceitação
                    das políticas da Meta Platforms, Inc. <strong>É estritamente proibido:</strong>
                </p>
                <ol>
                    <li>Enviar SPAM ou mensagens em massa não solicitadas;</li>
                    <li>Utilizar bases de contatos compradas de terceiros;</li>
                    <li>Violar direitos de propriedade intelectual ou privacidade.</li>
                </ol>
                <p>
                    <em>A Maskot não se responsabiliza por bloqueios do número (WABA) decorrentes de violações destas
                        políticas pela Escola.</em>
                </p>

                <h2>4. Inteligência Artificial (Isenção)</h2>
                <p>
                    O módulo de IA (Maskot AI) utiliza modelos probabilísticos. A Escola reconhece que:
                </p>
                <ul>
                    <li>A IA pode, ocasionalmente, gerar informações imprecisas (alucinações);</li>
                    <li>A Escola deve supervisionar os fluxos de automação periodicamente;</li>
                    <li>A Maskot não se responsabiliza por acordos comerciais ou informações pedagógicas errôneas
                        fornecidas autonomamente pelo bot sem supervisão humana.
                    </li>
                </ul>

                <h2>5. Planos e Pagamentos</h2>
                <p>
                    O serviço é pré-pago. O atraso no pagamento superior a 05 (cinco) dias poderá acarretar a suspensão
                    temporária do acesso. O cancelamento pode ser solicitado a qualquer momento pelo painel, sem multa,
                    encerrando-se o acesso ao fim do ciclo vigente.
                </p>

                <h2>6. Disponibilidade (SLA)</h2>
                <p>
                    Nos esforçamos para manter 99,5% de disponibilidade mensal. Excluem-se do SLA instabilidades
                    causadas por terceiros (ex: queda geral do WhatsApp, AWS ou falhas na conexão de internet da
                    Escola).
                </p>

                <h2>7. Propriedade Intelectual</h2>
                <p>
                    Todo o código-fonte, design, logotipos e fluxos lógicos do Maskot são de propriedade exclusiva da
                    MASKOT SOLUÇÕES. A assinatura não transfere direitos de propriedade, apenas de uso.
                </p>

                <h2>8. Foro</h2>
                <p>
                    Fica eleito o foro da comarca da sede da Maskot para dirimir quaisquer questões oriundas destes
                    termos.
                </p>
            </LegalDocument>
            <Footer/>
        </>
    )
}