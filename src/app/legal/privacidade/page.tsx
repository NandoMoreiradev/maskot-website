import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LegalDocument from '@/components/legal/LegalDocument'

export const metadata: Metadata = {
    title: 'Política de Privacidade | Maskot',
    description: 'Entenda como coletamos, usamos e protegemos os seus dados e os dados da sua escola.',
    robots: {
        index: true,
        follow: true,
    }
}

export default function PrivacyPage() {
    return (
        <>
            <Header />
            <LegalDocument title="Política de Privacidade" lastUpdated="30 de Dezembro de 2025">
                <p>
                    A sua privacidade é importante para nós. É política do <strong>Maskot</strong> respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Maskot, e outros sites que possuímos e operamos.
                </p>

                <h2>1. Informações que coletamos</h2>
                <p>
                    Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
                </p>
                <ul>
                    <li><strong>Dados de Cadastro:</strong> Nome, e-mail, telefone e nome da escola ao criar uma conta ou solicitar uma demonstração.</li>
                    <li><strong>Dados de Uso:</strong> Informações sobre como você navega em nossa plataforma, incluindo endereço IP, tipo de navegador e páginas visitadas.</li>
                    <li><strong>Dados da Escola:</strong> Informações sobre alunos, responsáveis e matrículas inseridas no sistema CRM para fins de prestação do serviço.</li>
                </ul>

                <h2>2. Uso das Informações</h2>
                <p>
                    Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
                </p>
                <p>
                    Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei ou para a prestação direta do serviço (ex: integração com WhatsApp via BSP).
                </p>

                <h2>3. Compromisso do Usuário</h2>
                <p>
                    O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o Maskot oferece no site e com caráter enunciativo, mas não limitativo:
                </p>
                <ul>
                    <li>A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;</li>
                    <li>B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, ou casas de apostas, jogos de sorte e azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</li>
                    <li>C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do Maskot, de seus fornecedores ou terceiros.</li>
                </ul>

                <h2>4. Direitos do Titular (LGPD)</h2>
                <p>
                    Você tem o direito de solicitar o acesso, correção ou exclusão de seus dados pessoais a qualquer momento. Para exercer esses direitos, entre em contato conosco através do e-mail <a href="mailto:privacidade@maskot.com.br">privacidade@maskot.com.br</a>.
                </p>

                <h2>5. Mais informações</h2>
                <p>
                    Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.
                </p>
            </LegalDocument>
            <Footer />
        </>
    )
}