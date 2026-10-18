/**
 * Mapeamento "equipe → módulos do Maskot".
 *
 * Fonte única das páginas /equipes e /equipes/[slug], do painel da home, do rodapé e do sitemap.
 * Arquivo puro (sem JSX/ícones) para poder ser usado também em metadata e sitemap, no servidor.
 * Os ícones de cada equipe ficam em components/teams/teamIcons.tsx.
 */

export type TeamSlug =
    | 'marketing'
    | 'atendimento'
    | 'comercial'
    | 'secretaria'
    | 'coordenacao'
    | 'direcao'

export interface TeamModule {
    name: string
    /** Página de funcionalidade correspondente no site, quando existir. */
    href?: string
    /** O que ESSA equipe faz com o módulo (não a descrição genérica do produto). */
    what: string
}

export interface TeamRoutineStep {
    when: string
    text: string
}

export interface TeamHandoff {
    with: TeamSlug
    text: string
}

export interface Team {
    slug: TeamSlug
    /** "Equipe de Marketing" */
    name: string
    /** "Marketing" */
    shortName: string
    /** Etapa da jornada da família em que a equipe atua. */
    stage: string
    /** Frase curta para cards e para o painel da home. */
    tagline: string
    /** Título do hero. O trecho entre `*asteriscos*` é destacado. */
    headline: string
    intro: string
    seoTitle: string
    seoDescription: string
    keywords: string[]
    challenges: string[]
    modules: TeamModule[]
    routine: TeamRoutineStep[]
    handoffs: TeamHandoff[]
    outcomes: string[]
}

export const TEAMS: Team[] = [
    {
        slug: 'marketing',
        name: 'Equipe de Marketing',
        shortName: 'Marketing',
        stage: 'Atrair',
        tagline: 'Atraia as famílias certas e saiba exatamente o que está funcionando.',
        headline: 'Marketing que atrai famílias e *prova o resultado*',
        intro:
            'Páginas, formulários e campanhas no ar sem depender de agência ou de TI, e cada lead acompanhado desde a origem até a matrícula. Assim o marketing deixa de "achar" e passa a saber.',
        seoTitle: 'Maskot para a Equipe de Marketing Escolar',
        seoDescription:
            'Como o marketing da escola usa o Maskot: landing pages, formulários, campanhas de matrícula, jornadas de nutrição e conversão por origem, tudo conectado ao funil.',
        keywords: [
            'marketing escolar',
            'captação de alunos',
            'landing page para escolas',
            'campanha de matrículas',
            'CRM para escolas marketing',
        ],
        challenges: [
            'Os leads chegam sem origem e ninguém sabe qual campanha realmente funcionou.',
            'Publicar uma página nova depende de agência, de TI ou de uma fila de pedidos.',
            'Marketing culpa o follow-up do comercial, e o comercial culpa a qualidade dos leads.',
            'Quem pediu informação e ainda não decidiu é esquecido depois do primeiro contato.',
        ],
        modules: [
            {
                name: 'Criador de Landing Pages',
                href: '/funcionalidades/criador-de-landing-pages',
                what: 'Monte as páginas de captação de cada campanha sem depender de TI e leve o lead direto para o funil.',
            },
            {
                name: 'Formulários Públicos',
                what: 'Coloque formulários no site, nas redes e em materiais, e cada resposta entra no funil como lead com a origem registrada.',
            },
            {
                name: 'Campanhas de Matrícula',
                href: '/funcionalidades/campanhas',
                what: 'Organize a captação por campanha, com meta de matrículas e leitura do retorno sobre o investimento.',
            },
            {
                name: 'Disparos e Públicos',
                href: '/funcionalidades/marketing',
                what: 'Segmente públicos e envie e-mails e mensagens ativas para quem faz sentido, com modelos prontos da escola.',
            },
            {
                name: 'Jornadas de Marketing',
                href: '/funcionalidades/marketing-journeys',
                what: 'Crie fluxos de nutrição que continuam conversando com a família que ainda não decidiu.',
            },
            {
                name: 'Redes Sociais',
                href: '/funcionalidades/social-media',
                what: 'Planeje posts e automatize a resposta às mensagens diretas do Instagram.',
            },
            {
                name: 'Analytics e BI',
                href: '/funcionalidades/analytics',
                what: 'Veja a conversão por origem e decida onde vale concentrar o orçamento.',
            },
        ],
        routine: [
            {
                when: 'Início da semana',
                text: 'Abra a Análise de Dados, veja a conversão por origem e decida onde concentrar o investimento.',
            },
            {
                when: 'Planejamento',
                text: 'Crie ou ajuste a campanha, a landing page e o formulário que vão captar os próximos leads.',
            },
            {
                when: 'Execução',
                text: 'Dispare para o público segmentado, programe os posts e deixe as jornadas de nutrição trabalhando.',
            },
            {
                when: 'Fechamento',
                text: 'Compare o resultado por campanha e alinhe com o comercial quais leads avançaram no funil.',
            },
        ],
        handoffs: [
            {
                with: 'atendimento',
                text: 'Quem atende enxerga de qual campanha a família veio e responde no contexto certo.',
            },
            {
                with: 'comercial',
                text: 'Os leads chegam ao funil de matrículas já com a origem registrada e podem ser distribuídos entre os consultores.',
            },
            {
                with: 'direcao',
                text: 'O relatório de conversão por origem mostra à direção quais canais merecem mais investimento.',
            },
        ],
        outcomes: [
            'Orçamento direcionado para as origens que de fato matriculam.',
            'Campanhas e páginas no ar sem fila de TI.',
            'Marketing e comercial olhando o mesmo funil.',
        ],
    },
    {
        slug: 'atendimento',
        name: 'Equipe de Atendimento',
        shortName: 'Atendimento',
        stage: 'Atender',
        tagline: 'Todas as conversas num só lugar, com a Mia cuidando do que é repetitivo.',
        headline: 'Atendimento rápido e organizado, *sem perder nenhuma família*',
        intro:
            'WhatsApp, Instagram, Messenger e chat do site numa caixa de entrada compartilhada, com chatbot e IA nas perguntas de sempre. A equipe fica livre para o que exige gente de verdade.',
        seoTitle: 'Maskot para a Equipe de Atendimento Escolar',
        seoDescription:
            'Como o atendimento da escola usa o Maskot: caixa de entrada compartilhada de WhatsApp, Instagram e chat do site, chatbot, distribuição de conversas e a Mia sugerindo respostas.',
        keywords: [
            'atendimento escolar',
            'WhatsApp para escolas',
            'chatbot para escola',
            'caixa de entrada compartilhada',
            'atendimento ao responsável',
        ],
        challenges: [
            'As conversas estão espalhadas em celulares pessoais e ninguém enxerga o todo.',
            'Valores, horários e documentos consomem o dia em perguntas repetidas.',
            'Fora do horário comercial, a família escreve e fica sem resposta.',
            'Não está claro quem está atendendo quem, e a mesma conversa é respondida por duas pessoas.',
        ],
        modules: [
            {
                name: 'WhatsApp e Chatbot',
                href: '/funcionalidades/whatsapp',
                what: 'Atenda em equipe pela mesma caixa de entrada, com chatbot respondendo as dúvidas frequentes e passando para uma pessoa quando precisa.',
            },
            {
                name: 'Instagram, Messenger e chat do site',
                what: 'As mensagens dos outros canais chegam à mesma caixa de entrada, com o histórico da conversa preservado.',
            },
            {
                name: 'Copilot Mia',
                href: '/funcionalidades/copilot-mia',
                what: 'Resume conversas longas e sugere respostas no tom da escola. Você edita e aprova antes de enviar.',
            },
            {
                name: 'Distribuição de conversas',
                what: 'Novas conversas são distribuídas entre os atendentes disponíveis, para ninguém ficar sobrecarregado.',
            },
            {
                name: 'Respostas rápidas e etiquetas',
                what: 'Modelos para as perguntas de sempre e etiquetas para organizar assuntos e prioridades.',
            },
            {
                name: 'Horário de atendimento',
                what: 'Defina o expediente da escola para o atendimento fora do horário seguir um roteiro claro.',
            },
            {
                name: 'Chat interno',
                what: 'Tire dúvidas com comercial, secretaria e coordenação sem sair do sistema e sem misturar com o WhatsApp.',
            },
        ],
        routine: [
            {
                when: 'Ao abrir a escola',
                text: 'Veja o que chegou fora do horário e assuma as conversas que o chatbot encaminhou.',
            },
            {
                when: 'Durante o dia',
                text: 'Responda pela caixa de entrada compartilhada, usando respostas rápidas e as sugestões da Mia.',
            },
            {
                when: 'Quando surge oportunidade',
                text: 'Cadastre ou atualize o lead e passe para o consultor, com todo o histórico junto.',
            },
            {
                when: 'Fim do dia',
                text: 'Confira conversas sem resposta e deixe tarefas de retorno para o dia seguinte.',
            },
        ],
        handoffs: [
            {
                with: 'comercial',
                text: 'Quando a conversa vira oportunidade, o lead segue no funil com o histórico completo e a família não repete nada.',
            },
            {
                with: 'coordenacao',
                text: 'Dúvidas pedagógicas vão por chat interno ou tarefa e não se perdem em uma conversa de WhatsApp.',
            },
            {
                with: 'marketing',
                text: 'As perguntas mais frequentes mostram ao marketing o que as famílias precisam ver nas campanhas.',
            },
        ],
        outcomes: [
            'Menos tempo para a primeira resposta, em qualquer canal.',
            'Equipe liberada das perguntas repetidas.',
            'Nenhuma conversa sem dono.',
        ],
    },
    {
        slug: 'comercial',
        name: 'Equipe Comercial',
        shortName: 'Comercial',
        stage: 'Converter',
        tagline: 'Funil organizado, follow-up em dia e a Mia vigiando as oportunidades.',
        headline: 'Comercial que acompanha cada lead e *fecha mais matrículas*',
        intro:
            'Funil de matrículas, visitas e tarefas num só lugar, com a Mia apontando quem precisa de contato hoje. O consultor sabe por onde começar, e o gestor vê o que está parado.',
        seoTitle: 'Maskot para a Equipe Comercial Escolar',
        seoDescription:
            'Como o comercial da escola usa o Maskot: funil de matrículas, agenda de visitas, tarefas, Agente Comercial da Mia, painel de gestão e comissões.',
        keywords: [
            'funil de matrículas',
            'CRM para escolas',
            'comercial escolar',
            'agendamento de visitas',
            'follow-up de leads',
        ],
        challenges: [
            'Leads sem responsável ou sem retorno ficam parados no funil por semanas.',
            'A família faltou à visita e ninguém ligou para reagendar.',
            'O consultor abre agenda, tarefas e conversas separadas para saber o que fazer.',
            'O gestor só descobre o gargalo quando a matrícula já foi perdida.',
        ],
        modules: [
            {
                name: 'Funil de Matrículas (CRM)',
                href: '/funcionalidades/gestao-comercial',
                what: 'Acompanhe cada família por etapa, com histórico, anexos, comentários e motivo de perda.',
            },
            {
                name: 'Agendamento de Visitas',
                href: '/funcionalidades/agendamento',
                what: 'A família marca a visita por um link ou pelo calendário do site, e a agenda do consultor se atualiza sozinha.',
            },
            {
                name: 'Atividades e Tarefas',
                href: '/funcionalidades/gestao-tarefas',
                what: 'Registre ligações, retornos e propostas, para nenhum lead ficar sem próximo passo.',
            },
            {
                name: 'Agente Comercial da Mia',
                href: '/funcionalidades/agente-comercial',
                what: 'A Mia vigia o funil, aponta quem esperou resposta ou faltou à visita e sugere a ação. Você decide com um clique.',
            },
            {
                name: 'Painel de Gestão Comercial',
                what: 'Veja leads sem responsável, tarefas atrasadas, tempo de primeira resposta e carga por pessoa.',
            },
            {
                name: 'Distribuição de leads',
                what: 'Novos leads são distribuídos entre os consultores por rodízio ou pelo menos ocupado.',
            },
            {
                name: 'Comissões',
                href: '/funcionalidades/gestao-comissoes',
                what: 'Acompanhe o que cada vendedor tem a receber, sem planilha paralela.',
            },
        ],
        routine: [
            {
                when: 'Ao abrir o sistema',
                text: 'Leia o briefing da Mia: leads em risco, visitas do dia e tarefas atrasadas.',
            },
            {
                when: 'Manhã',
                text: 'Atenda primeiro quem esperou resposta e reagende quem faltou à visita.',
            },
            {
                when: 'Tarde',
                text: 'Conduza as visitas, registre o que a família disse e mova o lead de etapa.',
            },
            {
                when: 'Fim do dia',
                text: 'Deixe a próxima ação de cada lead registrada. Ninguém sai da etapa sem um próximo passo.',
            },
        ],
        handoffs: [
            {
                with: 'marketing',
                text: 'Os leads chegam com a origem registrada, e o comercial devolve ao marketing o que converteu e o que não.',
            },
            {
                with: 'atendimento',
                text: 'Recebe a oportunidade já qualificada, com a conversa completa à mão.',
            },
            {
                with: 'secretaria',
                text: 'Quando a família decide, a matrícula segue para a secretaria sem recomeçar o cadastro.',
            },
        ],
        outcomes: [
            'Nenhum lead sem responsável e sem próximo passo.',
            'Visitas e retornos que antes se perdiam viram reagendamentos.',
            'Gestor enxergando o gargalo antes da perda.',
        ],
    },
    {
        slug: 'secretaria',
        name: 'Secretaria e Financeiro',
        shortName: 'Secretaria',
        stage: 'Matricular',
        tagline: 'Da matrícula ao contrato e à cobrança, sem retrabalho e sem planilha solta.',
        headline: 'Secretaria que matricula sem retrabalho e *mantém tudo em ordem*',
        intro:
            'A família que decidiu virar aluno segue do funil para a matrícula, com contrato, plano de pagamento e documentos no mesmo sistema. A secretaria não digita o mesmo dado duas vezes.',
        seoTitle: 'Maskot para Secretaria e Financeiro Escolar',
        seoDescription:
            'Como a secretaria e o financeiro da escola usam o Maskot: nova matrícula, contratos, planos de pagamento, faturas, Drive de documentos, importação e exportação de dados.',
        keywords: [
            'secretaria escolar',
            'matrícula online',
            'contrato escolar',
            'gestão financeira escolar',
            'planos de pagamento escola',
        ],
        challenges: [
            'Os dados da família são digitados de novo quando o lead vira aluno.',
            'Contratos, documentos e comprovantes ficam em pastas e e-mails diferentes.',
            'O plano de pagamento combinado na visita não chega igual ao financeiro.',
            'Trocar de sistema parece impossível por causa do histórico de alunos.',
        ],
        modules: [
            {
                name: 'Nova Matrícula',
                what: 'Matricule a partir do lead ganho, já com o plano de pagamento escolhido, ou abra uma matrícula direta pela secretaria.',
            },
            {
                name: 'Secretaria Digital',
                what: 'Consulte alunos, registre ocorrências e acompanhe o painel da secretaria em um só lugar.',
            },
            {
                name: 'Contratos Escolares',
                what: 'Trabalhe com modelos de contrato da escola, para cada matrícula sair no padrão.',
            },
            {
                name: 'Planos de Pagamento',
                what: 'Cadastre as condições comerciais para o que foi combinado com a família ser o que será cobrado.',
            },
            {
                name: 'Gestão Financeira',
                what: 'Acompanhe faturas, status de pagamento e relatórios financeiros.',
            },
            {
                name: 'Drive de documentos',
                what: 'Guarde e compartilhe documentos por pasta e por link, com controle de versões e lixeira.',
            },
            {
                name: 'Importação e exportação de dados',
                what: 'Traga a base que a escola já tem e exporte seus dados quando precisar.',
            },
        ],
        routine: [
            {
                when: 'Ao abrir a secretaria',
                text: 'Veja as matrículas que o comercial liberou e os pendentes de documentação.',
            },
            {
                when: 'Matrícula',
                text: 'Matricule a partir do lead ganho, gere o contrato e confira o plano de pagamento vinculado.',
            },
            {
                when: 'Rotina',
                text: 'Atualize cadastros, registre ocorrências e guarde cada documento na pasta do aluno.',
            },
            {
                when: 'Fechamento do mês',
                text: 'Confira faturas e relatórios financeiros e repasse à direção o que precisa de decisão.',
            },
        ],
        handoffs: [
            {
                with: 'comercial',
                text: 'Recebe o aluno que o comercial fechou, com os dados e as condições já registrados.',
            },
            {
                with: 'coordenacao',
                text: 'A matrícula alimenta turmas e disciplinas, e a coordenação já enxerga os alunos de cada turma.',
            },
            {
                with: 'direcao',
                text: 'Os números financeiros chegam à direção sem precisar de planilha intermediária.',
            },
        ],
        outcomes: [
            'Um cadastro só, do primeiro contato ao aluno matriculado.',
            'Contrato, plano e documentos no mesmo lugar.',
            'Migração de dados sem perder o histórico.',
        ],
    },
    {
        slug: 'coordenacao',
        name: 'Equipe da Coordenação',
        shortName: 'Coordenação',
        stage: 'Acompanhar e reter',
        tagline: 'Turmas, professores e permanência dos alunos na mesma visão.',
        headline: 'Coordenação que acompanha cada turma e *antecipa o risco de evasão*',
        intro:
            'Turmas, disciplinas, grade e diário de classe organizados, e uma leitura de risco de evasão que cruza financeiro, desempenho e frequência. A coordenação age antes de a família decidir sair.',
        seoTitle: 'Maskot para a Coordenação Pedagógica',
        seoDescription:
            'Como a coordenação da escola usa o Maskot: turmas, disciplinas, grade horária, diário de classe, análise de retenção, onboarding de novos alunos e pesquisas de satisfação.',
        keywords: [
            'coordenação pedagógica',
            'diário de classe',
            'retenção de alunos',
            'evasão escolar',
            'onboarding de alunos',
        ],
        challenges: [
            'Os sinais de que um aluno vai sair aparecem tarde demais.',
            'Os lançamentos dos professores chegam atrasados ou por vários canais.',
            'O aluno novo não tem acolhimento padronizado, e cada turma recebe de um jeito.',
            'Não se sabe o que as famílias realmente pensam da escola.',
        ],
        modules: [
            {
                name: 'Turmas e Disciplinas',
                what: 'Organize turmas, disciplinas e a atribuição de professores.',
            },
            {
                name: 'Grade horária',
                what: 'Monte e consulte a grade horária de cada turma.',
            },
            {
                name: 'Diário de Classe',
                what: 'O professor lança a aula por turma e disciplina, e a coordenação acompanha sem recolher papel.',
            },
            {
                name: 'Análise de Retenção',
                what: 'Uma pontuação de risco de evasão que cruza financeiro, desempenho acadêmico e frequência, atualizada toda semana.',
            },
            {
                name: 'Onboarding de alunos',
                href: '/funcionalidades/onboarding',
                what: 'Checklists padronizados de acolhimento para que todo aluno novo comece bem.',
            },
            {
                name: 'Pesquisas e NPS',
                href: '/funcionalidades/pesquisas',
                what: 'Meça a satisfação das famílias e transforme a resposta em ação.',
            },
            {
                name: 'Gestão de Tarefas',
                href: '/funcionalidades/gestao-tarefas',
                what: 'Distribua demandas, prazos e projetos pedagógicos em quadros de tarefas.',
            },
        ],
        routine: [
            {
                when: 'Segunda-feira',
                text: 'Abra a Análise de Retenção e veja os alunos com maior risco de evasão na semana.',
            },
            {
                when: 'Durante a semana',
                text: 'Acompanhe os lançamentos do diário de classe e cobre pendências direto por tarefa.',
            },
            {
                when: 'Novos alunos',
                text: 'Acompanhe o checklist de onboarding de quem acabou de chegar.',
            },
            {
                when: 'Fim do ciclo',
                text: 'Envie a pesquisa de satisfação e leve os resultados para a reunião pedagógica.',
            },
        ],
        handoffs: [
            {
                with: 'secretaria',
                text: 'Recebe os alunos já alocados nas turmas e sinaliza à secretaria o que precisa de ajuste de cadastro.',
            },
            {
                with: 'atendimento',
                text: 'Responde pelo chat interno às dúvidas pedagógicas que chegam ao atendimento.',
            },
            {
                with: 'direcao',
                text: 'Leva à direção os alunos em risco e os resultados das pesquisas, com dados e não com percepção.',
            },
        ],
        outcomes: [
            'Intervenção antes do cancelamento, não depois.',
            'Acolhimento padronizado para todo aluno novo.',
            'Reunião pedagógica baseada em dados.',
        ],
    },
    {
        slug: 'direcao',
        name: 'Direção',
        shortName: 'Direção',
        stage: 'Decidir',
        tagline: 'Uma visão única da escola para decidir com dados, não com palpite.',
        headline: 'Direção que enxerga a escola inteira e *decide com dados*',
        intro:
            'Mensalidades, funil, retenção e desempenho da equipe em painéis que se atualizam sozinhos. A direção pergunta à Mia em linguagem natural, define quem pode ver o quê e acompanha várias unidades se precisar.',
        seoTitle: 'Maskot para a Direção da Escola',
        seoDescription:
            'Como a direção da escola usa o Maskot: Copiloto de Gestão, análise de dados, relatórios, retenção, permissões por cargo e gestão de várias unidades.',
        keywords: [
            'gestão escolar',
            'diretor de escola',
            'indicadores escolares',
            'relatórios para escolas',
            'gestão de redes de escolas',
        ],
        challenges: [
            'Os números estão em sistemas e planilhas diferentes e nunca batem.',
            'Reunião de resultados vira discussão de percepção.',
            'Não se sabe quanto cada canal rende em matrículas.',
            'Em redes, cada unidade reporta de um jeito.',
        ],
        modules: [
            {
                name: 'Início do Diretor',
                what: 'Copiloto de gestão com mensalidades, custos e decisões do dia num só lugar.',
            },
            {
                name: 'Copilot Mia',
                href: '/funcionalidades/copilot-mia',
                what: 'Pergunte sobre funil, agenda e métricas em linguagem natural e receba tabelas fáceis de ler.',
            },
            {
                name: 'Analytics e BI',
                href: '/funcionalidades/analytics',
                what: 'Painéis de conversão, origem e desempenho do funil.',
            },
            {
                name: 'Relatórios personalizados',
                what: 'Monte os relatórios que a escola precisa e salve para consultar sempre que quiser.',
            },
            {
                name: 'Análise de Retenção',
                what: 'Enxergue os alunos em risco de evasão e o motivo.',
            },
            {
                name: 'Usuários e permissões',
                what: 'Defina cargos e o que cada pessoa pode ver e fazer, com trilha de auditoria.',
            },
            {
                name: 'Multi-Escolas',
                href: '/funcionalidades/multi-escolas',
                what: 'Acompanhe várias unidades com a mesma régua, sem perder o controle de cada uma.',
            },
        ],
        routine: [
            {
                when: 'Toda manhã',
                text: 'Abra o Início do Diretor e veja o que pede decisão hoje.',
            },
            {
                when: 'Reunião semanal',
                text: 'Use os painéis do funil, a retenção e o painel de gestão comercial como pauta.',
            },
            {
                when: 'Sob demanda',
                text: 'Pergunte à Mia pelo número que precisa, sem pedir relatório a ninguém.',
            },
            {
                when: 'Mensalmente',
                text: 'Revise permissões, metas e o retorno de cada canal de captação.',
            },
        ],
        handoffs: [
            {
                with: 'marketing',
                text: 'Define onde investir com base na conversão por origem, não no volume de leads.',
            },
            {
                with: 'comercial',
                text: 'Acompanha o painel de gestão e atua nos gargalos antes de virarem perda.',
            },
            {
                with: 'coordenacao',
                text: 'Recebe da coordenação os alunos em risco e os resultados das pesquisas.',
            },
        ],
        outcomes: [
            'Uma versão única dos números da escola.',
            'Reuniões baseadas em painéis, não em percepção.',
            'Cada pessoa vendo só o que precisa.',
        ],
    },
]

export function getTeam(slug: string): Team | undefined {
    return TEAMS.find(team => team.slug === slug)
}

export function getOtherTeams(slug: TeamSlug): Team[] {
    return TEAMS.filter(team => team.slug !== slug)
}
