import type {Metadata} from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LegalDocument from '@/components/legal/LegalDocument'

export const metadata: Metadata = {
    title: 'Política de Cookies | Maskot CRM',
    description: 'Entenda como utilizamos cookies para garantir a segurança, performance e personalização da plataforma Maskot.',
    robots: {
        index: true,
        follow: true,
    }
}

export default function CookiesPage() {
    return (
        <>
            <Header/>
            <LegalDocument title="Política de Cookies" lastUpdated="31 de Dezembro de 2025">
                <p>
                    A <strong>Maskot</strong> preza pela transparência. Esta política explica, de forma clara e
                    acessível, como e por que utilizamos cookies e tecnologias de rastreamento semelhantes (pixels,
                    tags, armazenamento local) em nosso site institucional e na plataforma SaaS Maskot Edu.
                </p>

                <h2>1. O que são Cookies?</h2>
                <p>
                    Cookies são pequenos arquivos de texto que são baixados no seu dispositivo (computador ou celular)
                    quando você visita um site. Eles servem para lembrar de você e de suas preferências, seja para uma
                    visita única (cookie de sessão) ou para visitas repetidas (cookie persistente).
                </p>
                <p>
                    No contexto de um software complexo como o Maskot CRM, os cookies são vitais para manter sua sessão
                    segura, evitar que você precise fazer login a cada clique e processar pagamentos com segurança.
                </p>

                <h2>2. Categorias de Cookies que utilizamos</h2>
                <p>Abaixo, listamos os tipos de cookies que operam em nossa infraestrutura:</p>

                <h3>2.1. Estritamente Necessários (Essenciais)</h3>
                <p>
                    Estes cookies são fundamentais para que o site funcione e não podem ser desligados em nossos
                    sistemas. Eles geralmente são configurados apenas em resposta a ações feitas por você, como:
                </p>
                <ul>
                    <li><strong>Autenticação:</strong> Identificar que você está logado no CRM (`Auth Token`).</li>
                    <li><strong>Segurança:</strong> Proteger contra ataques de falsificação de solicitação (CSRF) e
                        detecção de fraude em pagamentos.
                    </li>
                    <li><strong>Balanceamento de Carga:</strong> Distribuir o tráfego para garantir que o site não caia.
                    </li>
                </ul>
                <p><em>Você pode configurar seu navegador para bloquear esses cookies, mas partes essenciais da
                    plataforma (como o login e o checkout) não funcionarão.</em></p>

                <h3>2.2. Cookies de Desempenho e Analytics</h3>
                <p>
                    Eles nos permitem contar visitas e fontes de tráfego para que possamos medir e melhorar o desempenho
                    do nosso site. Eles nos ajudam a saber quais páginas são as mais e menos populares e ver como os
                    visitantes se movem pelo site.
                </p>
                <ul>
                    <li><strong>Google Analytics:</strong> Coleta dados anônimos sobre tempo de permanência e páginas
                        visitadas.
                    </li>
                    <li><strong>Vercel Analytics:</strong> Monitora a velocidade de carregamento (Core Web Vitals) e
                        erros técnicos em tempo real.
                    </li>
                </ul>

                <h3>2.3. Cookies Funcionais</h3>
                <p>
                    Permitem que o site forneça funcionalidade e personalização aprimoradas. Podem ser definidos por nós
                    ou por fornecedores terceiros cujos serviços adicionamos às nossas páginas (como o player de vídeo
                    ou chat de suporte).
                </p>
                <ul>
                    <li>Lembrar seu idioma preferido;</li>
                    <li>Manter o menu lateral expandido ou colapsado;</li>
                    <li>Manter o estado de filtros em relatórios.</li>
                </ul>

                <h3>2.4. Cookies de Publicidade (Marketing)</h3>
                <p>
                    Podem ser definidos através do nosso site pelos nossos parceiros de publicidade. Eles podem ser
                    usados por essas empresas para construir um perfil sobre seus interesses e mostrar anúncios
                    relevantes em outros sites.
                </p>
                <ul>
                    <li><strong>Meta Pixel (Facebook/Instagram):</strong> Usado para medir a eficácia de nossas
                        campanhas e criar públicos semelhantes.
                    </li>
                    <li><strong>Google Ads:</strong> Usado para remarketing e conversão.</li>
                </ul>

                <h2>3. Cookies de Terceiros Específicos</h2>
                <p>
                    Para transparência total, identificamos os principais parceiros que podem configurar cookies em seu
                    navegador ao usar o Maskot:
                </p>
                <table>
                    <thead>
                    <tr>
                        <th>Fornecedor</th>
                        <th>Finalidade</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><strong>Stripe / Asaas</strong></td>
                        <td>Segurança e prevenção de fraudes durante o pagamento.</td>
                    </tr>
                    <tr>
                        <td><strong>Google (Identity)</strong></td>
                        <td>Permitir login social (Entrar com Google).</td>
                    </tr>
                    <tr>
                        <td><strong>Intercom / Chat</strong></td>
                        <td>Manter o histórico de conversa com nosso suporte.</td>
                    </tr>
                    </tbody>
                </table>

                <h2>4. Como gerenciar suas preferências</h2>
                <p>
                    A maioria dos navegadores web aceita cookies automaticamente, mas fornece controles que permitem
                    bloqueá-los ou excluí-los. Você pode gerenciar suas preferências nas configurações do seu navegador:
                </p>
                <ul>
                    <li><a href="https://support.google.com/chrome/answer/95647" target="_blank"
                           rel="noopener noreferrer">Google Chrome</a></li>
                    <li><a href="https://support.mozilla.org/pt-BR/kb/impeça-que-sites-rastreiem-voce" target="_blank"
                           rel="noopener noreferrer">Mozilla Firefox</a></li>
                    <li><a href="https://support.apple.com/pt-br/guide/safari/sfri11471/mac" target="_blank"
                           rel="noopener noreferrer">Apple Safari</a></li>
                    <li><a
                        href="https://support.microsoft.com/pt-br/microsoft-edge/excluir-cookies-no-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                        target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
                </ul>
                <p>
                    Lembramos que desativar cookies essenciais poderá impedir que você acesse sua conta no Maskot Edu.
                </p>
            </LegalDocument>
            <Footer/>
        </>
    )
}