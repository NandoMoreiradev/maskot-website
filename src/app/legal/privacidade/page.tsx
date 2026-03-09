import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LegalDocument from '@/components/legal/LegalDocument'

export const metadata: Metadata = {
    title: 'Política de Privacidade | Maskot Edu',
    description: 'Política de Privacidade e Proteção de Dados Pessoais da Plataforma Maskot Edu.',
    robots: {
        index: true,
        follow: true,
    }
}

export default function PrivacyPage() {
    return (
        <>
            <Header />
            <LegalDocument title="Política de Privacidade e Proteção de Dados Pessoais" lastUpdated="07 de Março de 2026">
                <p>
                    A plataforma Maskot Edu, desenvolvida e operada por Maskot EDU CRM Educacional, inscrita no CNPJ/ME sob o nº 55.188.948/0001/04, com sede na Rua Propriá, 413, Centro, Aracaju-SE, valoriza profunda e incondicionalmente a privacidade e a segurança das informações corporativas e dos dados pessoais de seus clientes e usuários finais.
                </p>
                <p>
                    A presente Política de Privacidade (“Política”) foi elaborada em estrita conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 - "LGPD") e o Marco Civil da Internet (Lei nº 12.965/2014). O seu propósito é estabelecer diretrizes transparentes, objetivas e seguras sobre como ocorre a coleta, o armazenamento, a utilização, o compartilhamento e a eliminação de dados pessoais inseridos ou transitados em nosso ecossistema (sistema web, aplicativos, painéis, páginas públicas de agendamento, formulários de captação, APIs e webhooks atrelados).
                </p>

                <h2>1. Definição dos Papéis Jurídicos (Controladora vs. Operadora)</h2>
                <p>No escopo de atuação "B2B" (Business to Business) como provedora de Software SaaS voltado para gestão de relacionamento educacional (CRM), é fundamental distinguir a posição jurídica da Maskot frente aos dados processados:</p>
                <p><strong>1.1. Maskot como CONTROLADORA:</strong> A Maskot assume a posição técnica e legal de Controladora de Dados exclusivamente em relação aos dados dos representantes legais, proprietários, gestores e funcionários da instituição contratante necessários para o fornecimento do software. Isso engloba os dados de faturamento, credenciais de acesso (logins de administradores), métricas de uso da plataforma para fins de cobrança e histórico de suporte técnico gerado pela própria Escola junto à Maskot.</p>
                <p><strong>1.2. Maskot como OPERADORA (A Maior Parte do Processamento):</strong> A Maskot atua na posição de Operadora de Dados no tocante à imensa maioria das informações que tramitam na plataforma. Todos os dados referentes a Leads (potenciais clientes), alunos, pais, responsáveis legais e corpo docente secundário, os quais são ativamente prospectados, importados ou cadastrados na plataforma através da gestão autônoma da Escola, possuem a referida Escola como sua única e legítima Controladora.</p>
                <p><strong>Responsabilidade Originária:</strong> Cabe exclusivamente à Escola (Controladora) garantir a base legal idônea (ex: consentimento legítimo, execução de contrato educacional) no ato da coleta e assegurar os direitos destes titulares. A Maskot reitera que se isenta da auditoria fiscalizatória de como a Escola prospecta seus leads na ponta.</p>

                <h2>2. Tipologia de Dados Pessoais Tratados</h2>
                <p>A depender das funcionalidades (módulos, add-ons) ativados pela Escola e da natureza do uso, o ambiente Maskot Edu poderá processar tecnicamente as seguintes categorias de dados:</p>
                <ul>
                    <li><strong>A. Dados Cadastrais e de Acesso (Gestores da Escola):</strong> Nome completo, e-mail corporativo/pessoal, número de telefone institucional ou celular, cargo, foto (avatar) e dados de faturamento atrelados ao plano. Identificadores de segurança como tokens de sessão, verificações em duas etapas (2FA), registros criptografados de senha e logs de acesso/auditoria (IP, data/hora e User-Agent).</li>
                    <li><strong>B. Dados do CRM Educacional (Inseridos pela Escola):</strong> Informações de qualificação de Leads e alunos (nome, grau de escolaridade, turmas de interesse, escola anterior), dados completos de responsáveis financeiros/pedagógicos (documentos, telefones de contato, e-mails de notificação, endereço físico). Metadados de histórico de relacionamento: anotações internas da secretaria, estágios no funil de vendas (pipeline), origem da captação (UTMs de campanhas) e registros consolidados de consentimento comercial.</li>
                    <li><strong>C. Dados de Comunicações, Telemetria e Mensageria:</strong> Conteúdo transacional de e-mails disparados, fluxos e respostas de interações no WhatsApp (via integrações oficiais), além de metadados telemétricos de engajamento: horários de disparo, confirmação de entrega (delivered), relatórios de abertura (open-rate), cliques em links mapeados e contabilidade de acionamento do gatilho de descadastramento (unsubscribe).</li>
                    <li><strong>D. Arquivos Multimídia e Documentos (Trâmite Criptografado):</strong> Documentos anexados aos cadastros no CRM (como contratos assinados, PDFs, laudos ou comprovantes) ou inseridos via formulários dinâmicos.</li>
                </ul>

                <h2>3. Finalidades Primárias e Bases Legais do Processamento</h2>
                <p>Todo o tratamento realizado sob o domínio da Maskot pauta-se pelo princípio da minimização e da finalidade estrita. As bases legais (Art. 7º da LGPD) que fundamentam nossas operações incluem:</p>
                <ul>
                    <li><strong>Execução de Contrato:</strong> Processamento indispensável para entregar as funcionalidades de CRM contratadas pela Escola, viabilizar acesso contínuo aos painéis, gerar faturamentos da assinatura e prestar suporte rotineiro via Helpdesk.</li>
                    <li><strong>Cumprimento de Obrigação Legal/Regulatória:</strong> Retenção obrigatória dos registros de conexão (Art. 15 do Marco Civil da Internet) por 6 meses e guarda de notas fiscais ou faturas emitidas por obrigações tributárias governamentais.</li>
                    <li><strong>Legítimo Interesse:</strong> Melhoria contínua da usabilidade sistêmica do SaaS, monitoramento proativo de falhas de infraestrutura (bugs), geração de relatórios estatísticos (anonimizados preferencialmente) agregados de performance técnica, bem como para coibir uso fraudulento do sistema ou disparos predatórios de SPAM.</li>
                </ul>

                <h2>4. Tratamento Sensível e Dados de Crianças e Adolescentes (Atenção B2B)</h2>
                <p>Dada a natureza do nicho educacional, a Maskot Edu está ciente de que a Escola fatalmente utilizará o sistema para arquivar e transacionar dados relativas a crianças e adolescentes (alunos potenciais e matriculados).</p>
                <ul>
                    <li><strong>Dever da Controladora (Escola):</strong> Nos moldes do Art. 14 da LGPD, o tratamento de dados de menores deve sempre visar o seu melhor interesse. É obrigação unilateral e exclusiva da Escola garantir que a obtenção de tais dados (via landing pages, formulários de conversão, ou na secretaria física) e as eventuais necessidades de consentimento específico em destaque sejam colhidos diretamente e devidamente validados com pelo menos um dos pais ou com o representante legal.</li>
                    <li>A Plataforma Maskot atua apenas como repositório cego (blind storage/processor) operacional, pressupondo-se, por força do Termo de Uso acordado, que a Escola supriu toda a legitimação parental exigida em lei.</li>
                </ul>

                <h2>5. Suboperadores, Tecnologias Parceiras e Transferência Internacional</h2>
                <p>Para entregar uma ferramenta de classe mundial em nuvem (Cloud), alta disponibilidade e escalabilidade, a Maskot apoia-se em parceiros tecnológicos homologados, que atuarão tecnicamente como Suboperadores. Esta cadeia garante um padrão rigoroso de Segurança da Informação:</p>
                <ul>
                    <li><strong>Integrações Essenciais de Serviço:</strong> Processadores de pagamento globais (como Stripe); Gateways e serviços oficiais de disparo maciço e mensageria inteligente (como ecossistema Meta Platforms/WhatsApp, Resend e correlatos); Operadores de armazenamento em nuvem blindada (como instâncias Render, Cloudflare R2/S3 ou equivalentes).</li>
                    <li><strong>Monitoramento e Relatórios:</strong> Ferramentas passivas como Mixpanel (para analytics in-app) e Sentry (rastreamento contínuo de exceções e controle de falhas de estabilidade).</li>
                    <li><strong>Recursos Inovadores (Inteligência Artificial):</strong> Onde habilitadas ativamente no perfil, integrações em requisições de API de IA generativa (ex: Google Gemini) processarão trechos textuais para gerar respostas ou análises qualitativas, em via transiente e assistiva.</li>
                </ul>
                <p><strong>Transferência Internacional de Dados:</strong> Grande parte da infraestrutura subjacente de servidores em nuvem descrita acima pode requerer a alocação técnica em Datacenters localizados em jurisdições fora do Brasil (notadamente os Estados Unidos). A Maskot assevera que a escolha desses fornecedores exige premissas amparadas por selos de conformidade global (ex: SOC 2, ISO 27001) e cláusulas-padrão contratuais protetivas compatíveis com a exigência mandatória brasileira em transferência internacional.</p>

                <h2>6. Cookies e Mecanismos Semelhantes em Navegação</h2>
                <p>Nossa aplicação web interage com "Cookies" primários – identificadores temporários de texto armazenados no navegador do cliente – primariamente nas finalidades de caráter Estritamente Necessário:</p>
                <ul>
                    <li><strong>(a) Autenticação de Sessão e Continuidade de Login:</strong> Indispensáveis para que não haja quedas do usuário no decorrer do dia operacional logado e retenção das credenciais criptográficas de acesso aos painéis de moderação.</li>
                    <li><strong>(b) Defesa Transacional:</strong> Validação de certificados dinâmicos para frear requisições ilegítimas externas no preenchimento de formulários (Mecanismos Anti-CSRF).</li>
                </ul>
                <p>Ressalta-se que, para a utilização integral interna do CRM corporativo, as restrições bloqueadoras ativadas extremas de cookies via navegador impedirão fundamentalmente o correto funcionamento das engrenagens lógicas da ferramenta ou retenções autênticas da segurança validada.</p>

                <h2>7. Ciclo de Vida do Dado, Retenção e Expurgos</h2>
                <p>Os dados pessoais fornecidos permanecerão sob a gestão técnica provisória da tutela de nossas instâncias exclusivamente pelo tempo estritamente exigido para atingir a finalidade (Ex: Estar com subscrição premium vigente ao CRM).</p>
                <p><strong>Rotina de Limpeza (Hard Flush):</strong> Caso a Escola venha a cessar (extinguir) o seu contrato com a Maskot Edu, a mesma desfrutará de período de carência (limitado temporariamente em torno de 30 dias na camada aplicação) visando a exportação própria em formatos viáveis (Downloads em massa). Findo este razoável decurso sem reversão acionada, as rotinas autônomas promoverão sumariamente a inativação irreversível e depuração física permanente das tabelas da arquitetura relativas, suprimindo o rastro, resguardando somente bases restritas em backups encriptados, mantidos meramente os repasses e logotipos pelo marco legal temporal por defesas corporativas ou exigências de entes normativos da justiça superior.</p>

                <h2>8. Incidentes de Segurança Pró-Ativa</h2>
                <p>No infortúnio ou caso adverso que porventura culmine em incidentes na infraestrutura primária comprovada evidenciando vazamentos maciços em virtude invasiva externa (Ex. Acesso desautorizado), a Maskot adota protocolo célere de notificação emergencial. Acionaremos as Escolas administradoras vinculadas reportando a dimensão e origem do escopo no prazo normativo fixado para as respectivas atuações das mesmas frente à ANPD e aos titulares originais secundários em suas carteiras, somada a ação cooperativa plena nas respostas mitigadoras forenses em andamento no bloqueio do foco cibernético.</p>

                <h2>9. Dos Direitos Soberanos dos Titulares</h2>
                <p>A LGPD concede ao particular final plenos direitos na determinação transparente do seu "Eu virtual". O Titular poderá manifestar petições acerca da (i) confirmação da proveniência da existência processual; (ii) acesso ao extrato armazenado; (iii) correções objetivas em falhas nominais; (iv) bloqueios transientes e exclusões impositivas.</p>
                <ul>
                    <li><strong>Atenção ao Fluxo Adequado da Requisição B2B:</strong> Em virtude do caráter estrutural, na quase totalidade das ocorrências onde pais, responsáveis ou alunos pretendam exercer seu Direito ao Esquecimento (Opt-out) ou solicitem as cópias informativas, tais requisições devem primariamente ser direcionadas na secretaria e órgãos da Escola que administra aquela matrícula (Controladora). A Maskot Edu proverá as ferramentas tecnológicas nativas necessárias (ex: botões de bloqueio na interface do CRM, links em rodapé de E-mails ou fluxos anti-spam em automações) para que a própria Escola opere as deleções adequadas da carteira digital sob sua administração.</li>
                    <li>Quando uma solicitação formal incorreta sobre o cliente de uma escola for despachada organicamente para canais centralizados diretos da própria aplicação, operaremos em repassá-la administrativamente à Escola vinculante na identificação original notificando o usuário do processo.</li>
                </ul>

                <hr className="my-8 border-gray-200 dark:border-gray-800" />
                
                <h2>10. Canais de Contato e DPO (Data Protection Officer)</h2>
                <p>Versões atuais desta Política imperarão postadas em domínio público e poderão sofrer interações complementares visíveis devido a expansão contínua orgânica ou adequações regulatórias oriundas de provimentos emanados da ANPD. Alterações na espinha dorsal das finalidades serão notoriamente precedidas e sinalizadas em avisos aos gestores na ferramenta com anterioridade razoável à implicação.</p>
                <p>Em eventuais conflitos remanescentes, pleitos restritos ou denúncias na ótica da violação a informações confidenciais pessoais perante nossas rotinas, acionem formalmente o encarregado legal constituído que promoverá o balizamento jurídico via submissão através da caixa oficial: <a href="mailto:juridico@maskotedu.com.br">juridico@maskotedu.com.br</a>.</p>
            </LegalDocument>
            <Footer />
        </>
    )
}