import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LegalDocument from '@/components/legal/LegalDocument'

export const metadata: Metadata = {
    title: 'Política de Cookies | Maskot',
    description: 'Saiba como utilizamos cookies para melhorar sua experiência.',
}

export default function CookiesPage() {
    return (
        <>
            <Header />
            <LegalDocument title="Política de Cookies" lastUpdated="10 de Janeiro de 2025">
                <h2>O que são cookies?</h2>
                <p>
                    Como é prática comum em quase todos os sites profissionais, este site usa cookies, que são pequenos arquivos baixados no seu computador, para melhorar sua experiência. Esta página descreve quais informações eles coletam, como as usamos e por que às vezes precisamos armazenar esses cookies.
                </p>

                <h2>Como usamos os cookies</h2>
                <p>
                    Utilizamos cookies por vários motivos, detalhados abaixo. Infelizmente, na maioria dos casos, não existem opções padrão do setor para desativar os cookies sem desativar completamente a funcionalidade e os recursos que eles adicionam a este site. É recomendável que você deixe todos os cookies se não tiver certeza se precisa ou não deles, caso sejam usados para fornecer um serviço que você usa.
                </p>

                <h2>Tipos de Cookies que utilizamos</h2>

                <h3>Cookies Relacionados à Conta</h3>
                <p>
                    Se você criar uma conta conosco, usaremos cookies para o gerenciamento do processo de inscrição e administração geral. Esses cookies geralmente serão excluídos quando você sair do sistema, porém, em alguns casos, eles poderão permanecer posteriormente para lembrar as preferências do seu site ao sair.
                </p>

                <h3>Cookies Relacionados ao Login</h3>
                <p>
                    Utilizamos cookies quando você está logado, para que possamos lembrar dessa ação. Isso evita que você precise fazer login sempre que visitar uma nova página. Esses cookies são normalmente removidos ou limpos quando você efetua logout para garantir que você possa acessar apenas a recursos e áreas restritas ao efetuar login.
                </p>

                <h3>Cookies de Terceiros</h3>
                <p>
                    Em alguns casos especiais, também usamos cookies fornecidos por terceiros confiáveis. A seção a seguir detalha quais cookies de terceiros você pode encontrar através deste site.
                </p>
                <ul>
                    <li><strong>Google Analytics:</strong> Usado para entender como você usa o site e como podemos melhorar sua experiência. Esses cookies podem rastrear itens como quanto tempo você gasta no site e as páginas visitadas.</li>
                    <li><strong>Pixel do Meta (Facebook):</strong> Usado para rastrear a eficácia de nossas campanhas de publicidade e mostrar anúncios relevantes para você.</li>
                </ul>

                <h2>Desativando Cookies</h2>
                <p>
                    Você pode impedir a configuração de cookies ajustando as configurações do seu navegador (consulte a Ajuda do navegador para saber como fazer isso). Esteja ciente de que a desativação de cookies afetará a funcionalidade deste e de muitos outros sites que você visita.
                </p>
            </LegalDocument>
            <Footer />
        </>
    )
}