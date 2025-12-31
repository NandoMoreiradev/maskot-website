import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LegalDocument from '@/components/legal/LegalDocument'

export const metadata: Metadata = {
    title: 'Termos de Uso | Maskot',
    description: 'Termos e condições para uso da plataforma Maskot CRM.',
}

export default function TermsPage() {
    return (
        <>
            <Header />
            <LegalDocument title="Termos de Uso" lastUpdated="15 de Janeiro de 2025">
                <h2>1. Termos</h2>
                <p>
                    Ao acessar ao site <a href="https://maskot.com.br">Maskot</a>, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site.
                </p>

                <h2>2. Licença de Uso</h2>
                <p>
                    É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Maskot, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:
                </p>
                <ol>
                    <li>Modificar ou copiar os materiais;</li>
                    <li>Usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial) sem autorização expressa;</li>
                    <li>Tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Maskot;</li>
                    <li>Remover quaisquer direitos autorais ou outras notações de propriedade dos materiais.</li>
                </ol>

                <h2>3. Isenção de responsabilidade</h2>
                <p>
                    Os materiais no site da Maskot são fornecidos 'como estão'. Maskot não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
                </p>

                <h2>4. Limitações</h2>
                <p>
                    Em nenhum caso o Maskot ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Maskot, mesmo que Maskot ou um representante autorizado da Maskot tenha sido notificado oralmente ou por escrito da possibilidade de tais danos.
                </p>

                <h2>5. Precisão dos materiais</h2>
                <p>
                    Os materiais exibidos no site da Maskot podem incluir erros técnicos, tipográficos ou fotográficos. Maskot não garante que qualquer material em seu site seja preciso, completo ou atual. Maskot pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio.
                </p>

                <h2>6. Modificações</h2>
                <p>
                    O Maskot pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
                </p>

                <h2>Lei aplicável</h2>
                <p>
                    Estes termos e condições são regidos e interpretados de acordo com as leis do Brasil e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.
                </p>
            </LegalDocument>
            <Footer />
        </>
    )
}