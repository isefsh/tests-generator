export const db = {
  themes: [
    { id: 1, name: "Interação Humano Computador", abbrTheme: "IHC" },
    { id: 2, name: "Desenvolvimento Web", abbrTheme: "Web" },
    { id: 3, name: "Gestão Ágil de Projetos de Software", abbrTheme: "GAPS" },
  ],
  questions: [
    {
      abbrTheme: "IHC",
      question:
        "Qual das matérias a seguir não é relacionada a Interação Humano Computador?",
      options: ["Artes", "Design", "Psicologia", "História"],
      rightAnswer: 3,
    },
    {
      abbrTheme: "IHC",
      question: "Qual conceito foi trabalhado por Donald Norman?",
      options: [
        "Usabilidade",
        "Comunicabilidade",
        "Navegabilidade",
        "Findability"
      ],
      rightAnswer: 0,
    },
    {
      abbrTheme: "IHC",
      question: "Qual onda da IHC teve foco aspectos culturais e estéticos?",
      options: [
        "Primeira Onda",
        "Segunda Onda",
        "Terceira Onda",
        "Quarta Onda"
      ],
      rightAnswer: 2,
    },
    {
      abbrTheme: "IHC",
      question: "Quais são os elementos básicos do design?",
      options: [
        "Linhas e formas",
        "Formas e equilíbrio",
        "Linhas, textura e tamanho",
        "Todas as anteriores"
      ],
      rightAnswer: 3,
    },
    {
      abbrTheme: "IHC",
      question: "Na teoria das cores as cores vermelho e laranja são:",
      options: ["Frias", "Complementares", "Análogas", "Tríades"],
      rightAnswer: 2,
    },
    {
      abbrTheme: "IHC",
      question: "Na teoria das cores as cores vermelho e verde são:",
      options: ["Quentes", "Complementares", "Análogas", "Tríades"],
      rightAnswer: 3,
    },
    {
      abbrTheme: "IHC",
      question: "Quais são as cores primárias?",
      options: [
        "Vermelho, amarelo e verde",
        "Vermelho, roxo e azul",
        "Azul, amarelo e vermelho",
        "Verde, vermelho e amarelo"
      ],
      rightAnswer: 2,
    },
    {
      abbrTheme: "IHC",
      question: "Qual das cores abaixo não é terciária?",
      options: [
        "Vermelho-arroxeado",
        "Vermelho-alaranjado",
        "Amarelo-esverdeado",
        "Verde-amarelado"
      ],
      rightAnswer: 3,
    },
    {
      abbrTheme: "IHC",
      question: "O círculo cromático é formado por quantas cores?",
      options: ["12", "10", "11", "08"],
      rightAnswer: 0,
    },
    {
      abbrTheme: "IHC",
      question: "Qual das cores abaixo é uma combinação tetrádica?",
      options: [
        "Azul, Roxo, Amarelo e Laranja",
        "Amarelo, Laranja, Vermelho e Verde",
        "Azul, Amarelo, Vermelho e Laranja",
        "Roxo, Azul, Verde e Amarelo"
      ],
      rightAnswer: 0,
    },
    {
      abbrTheme: "IHC",
      question:
        "Qual das perspectivas de interação abaixo correspondem a Alexa?",
      options: [
        "Usuário como computador",
        "Parceiro de discurso",
        "Mídia",
        "Ferramenta"
      ],
      rightAnswer: 1,
    },
    {
      abbrTheme: "IHC",
      question: "A interface tem elementos de:",
      options: [
        "Hardware",
        "Software e Hardware",
        "Software",
        "Nenhuma das anteriores"
      ],
      rightAnswer: 1,
    },
    {
      abbrTheme: "IHC",
      question: "Sobre usabilidade e UX, pode se afirmar:",
      options: [
        "Usabilidade e UX são relacionados a produto",
        "Usabilidade e UX são relacionados ao usuário",
        "Usabilidade é relacionado a produto e UX é relacionado a usuário",
        "Usabilidade é relacionado a usuário e UX é relacionado a produto"
      ],
      rightAnswer: 2,
    },
    {
      abbrTheme: "IHC",
      question: "Qual é o conceito de qualidade durante a década de 2010?",
      options: [
        "Comunicabilidade e navegabilidade",
        "Multidimensional",
        "Usabilidade e eficácia",
        "Nenhuma das anteriores"
      ],
      rightAnswer: 1,
    },
    {
      abbrTheme: "Web",
      question:
        "Com relação à linguagem JavaScript, assinale a alternativa correta.",
      options: [
        "A linguagem JavaScript exige muito trabalho para definir o tipo de dado que uma variável deve guardar.",
        "Os números inteiros somente podem ser expressos na forma decimal (base 10).",
        "Para que um código funcione corretamente na linguagem JavaScript, uma instrução if sempre deve ser associada a uma instrução else.",
        "Em JavaScript, as expressões literais representam valores fixos."
      ],
      rightAnswer: 3,
    },
    {
      abbrTheme: "Web",
      question:
        "Assinale a alternativa que apresenta o nome do tipo de estrutura em que cada elemento armazena um ou vários dados e um ponteiro para o próximo elemento, que permite o encadeamento e mantém a estrutura linear, sendo que, nesse tipo de estrutura, são abordadas as seguintes operações: inserir no início da lista; inserir no fim; consultar toda a lista; remover um elemento qualquer dela; e esvaziá-la.",
      options: [
        "Lista simplesmente encadeada e não ordenada",
        "Lista simplesmente encadeada e ordenada",
        "Lista duplamente encadeada e não ordenada",
        "Lista duplamente encadeada e não ordenada."
      ],
      rightAnswer: 0,
    },
    {
      abbrTheme: "Web",
      question:
        "A fase do ciclo de vida de um Servlet que ocorre no instante em que é feita a carga da aplicação pelo Servlet Container denomina-se:",
      options: [
        "Commit",
        "Processamento",
        "Atendimento de requisições",
        "Inicialização"
      ],
      rightAnswer: 3,
    },
    {
      abbrTheme: "Web",
      question:
        "O padrão de descrição do formato de documentos XML que se constitui de instrumentos de descrição da estrutura destes documentos herdados da linguagem SGML e que tem como função fornecer meios de validar os dados XML e funcionar como uma gramática ou esquema para eles é denominado:",
      options: [
        "Metadata",
        "XSLT",
        "DTD",
        "XML Schema"
      ],
      rightAnswer: 2,
    },
    {
      abbrTheme: "Web",
      question:
        "Assinale a alternativa que apresenta o nome da variável usada na linguagem de programação PHP que tem a função de armazenar dados do formulário e é considerada uma variável especial, conhecida também como superglobal, por ser interna ao PHP e ficar disponível para o script inteiro.",
      options: [
        "$_MSG",
        "$_POST",
        "$_SERVER",
        "$_ENV"
      ],
      rightAnswer: 1,
    },
    {
      abbrTheme: "Web",
      question:
        "Nas estruturas conhecidas como árvores, o nó do topo da árvore, do qual descendem os demais nós, denomina-se nó:",
      options: [
        "Interior",
        "Terminal",
        "Raiz",
        "Exterior"
      ],
      rightAnswer: 2,
    },
    {
      abbrTheme: "Web",
      question:
        "Quanto aos conceitos de árvore binária, assinale a alternativa correta.",
      options: [
        "Operações que utilizam recursão não podem ser realizadas sobre árvores binárias.",
        "A árvore pode ser vazia, isto é, não ter nenhum elemento.",
        "Uma árvore estritamente binária com n folhas tem 2n2 - 1 nós.",
        "A altura de um nó é o comprimento do menor caminho do nó até o seu primeiro descendente."
      ],
      rightAnswer: 1,
    },
    {
      abbrTheme: "Web",
      question:
        "As linguagens de programação Web são utilizadas por programadores para o desenvolvimento Front-End (parte visual) e Back-End (estrutura que possibilita a operação) de sites, sistemas e aplicações Web em geral. Em relação às principais linguagens de programação Web, assinale a afirmativa correta.",
      options: [
        "HTML: linguagem de marcação declarativa utilizada no desenvolvimento Back-End de sites dinâmicos.",
        "PHP: linguagem interpretada de código aberto utilizada no desenvolvimento Back-End. Além disso, permite o desenvolvimento de sites estáticos.",
        "JavaScript: linguagem de script que não precisa ser traduzida em código de máquina antes de ser executada, ou seja, executa de forma direta no código-fonte.",
        "CSS: linguagem de estilo declarativa que determina como o código HTML deve ser exibido na tela. No entanto, não suporta que o estilo de uma página seja replicado a outras páginas."
      ],
      rightAnswer: 2,
    },
    {
      abbrTheme: "Web",
      question:
        "Sobre a inclusão do conteúdo de um arquivo PHP em outro arquivo PHP (antes que o servidor o execute), é correto afirmar que:",
      options: [
        "As instruções include e require são idênticas, isto é, produzem os mesmos resultados.",
        "A instrução append é utilizada para incluir um arquivo de cabeçalho em todas as suas páginas web.",
        "A instrução stop inclui um arquivo de chave para o fluxo de execução, evitando a integridade da aplicação.",
        "O include produz um aviso e executa o script quando um arquivo é incluído com a instrução include e o PHP não consegue localizá-lo."
      ],
      rightAnswer: 3,
    },
    {
      abbrTheme: "Web",
      question:
        "Assinale a alternativa com uma afirmação correta sobre as cláusulas da expressão de uma consulta XQuery.",
      options: [
        "FOR <variáveis ligadas às condições qualificadoras>",
        "LET <variáveis ligadas a coleções de nodos (elementos)>",
        "WHERE <especificação do resultado da consulta>",
        "HAVING <agrupamento de elementos>"
      ],
      rightAnswer: 1,
    },
    {
      abbrTheme: "Web",
      question:
        "Em Javascript se o programador deseja comparar se duas variáveis são iguais e do mesmo tipo ele deverá utilizar:",
      options: [
        "Deverá utilizar o operador 'eq'",
        "Deverá utilizar o operador '=='",
        "Deverá utilizar o operador '==='",
        "Deverá utilizar o operador '||'"
      ],
      rightAnswer: 2,
    },
    {
      abbrTheme: "Web",
      question:
        "Assinale a opção que apresenta, se for o caso, a diferença entre os seletores CSS 'div > p' e 'div p'.",
      options: [
        '"div > p" seleciona todos os elementos <p> que são filhos diretos de um elemento <div>, enquanto "div p" seleciona todos os elementos <p> que são descendentes de um elemento <div> independentemente do nível de "nesting".',
        '"div > p" seleciona todos os elementos <p> que são irmãos de um elemento <div>, enquanto "div p" seleciona todos os elementos <p> que são descendentes de um elemento <div> independentemente do nível de "nesting".',
        '"div > p" seleciona todos os elementos <p> que são filhos diretos de um elemento <div>, enquanto "div p" seleciona todos os elementos <p> que são filhos diretos de um elemento <div> independentemente do nível de "nesting".',
        '"div > p" seleciona todos os elementos <p> que são descendentes de um elemento <div>, enquanto "div p" seleciona todos os elementos <p> que são filhos diretos de um elemento <div> independentemente do nível de "nesting".'
      ],
      rightAnswer: 0,
    },
    {
      abbrTheme: "Web",
      question:
        "Sobre XML, assinale a alternativa INCORRETA:",
      options: [
        "A Extensible Markup Language (XML) é um formato simples baseado em texto para representar informações estruturadas.",
        "Em XML, todos os elementos precisam ser fechados ou marcados como vazio.",
        "Em XML, os valores dos atributos precisam estar entre aspas (“ ”).",
        "Em XML, não é permitido utilizar caracteres de entidade, como &lt; ou &gt;."
      ],
      rightAnswer: 3,
    },
    {
      abbrTheme: "Web",
      question:
        "Assinale a opção que indica o tipo de vulnerabilidade que é geralmente associada à função javascript eval()",
      options: [
        "Cross-origin resource sharing (CORS)",
        "Cross-site request forgery (CSRF)",
        "Cross-site scripting (XSS)",
        "Server-side request forgery (SSRF)"
      ],
      rightAnswer: 2,
    },
    {
      abbrTheme: "Web",
      question:
        "Assinale a alternativa que indica a tag HTML5 criada com o intuito de lidar com arquivos de legendas ou de títulos enquanto uma mídia de vídeo é reproduzida.",
      options: [
        "Track",
        "Embed",
        "Source",
        "Video"
      ],
      rightAnswer: 0,
    },
    {
      abbrTheme: "GAPS",
      question:
        "Os modelos tradicionais do ciclo de vida de um software consistem em formas de gerir as etapas de um projeto desde o momento de sua criação até sua eventual obsolescência. Por sua vez, esses ciclos podem ter suas fases identificadas pela presença de quatro elementos, são eles:",
      options: [
        "a) Requisitos necessários, prototipagem, feedback.",
        "b) Requisitos necessários, produtos resultantes, prototipagem do sistema, resposta do usuário.",
        "c) Recursos necessários, produtos resultantes, métodos de desenvolvimento utilizados, produtos aceitos das fases anteriores.",
        "d)	Recursos necessários, métodos de desenvolvimento, produtos aceitos das fases anteriores, integração do sistema em sua completude."
      ],
      rightAnswer: 2,
    },
    {
      abbrTheme: "GAPS",
      question:
        "O mercado está lotado de modelos de ciclo de vida para suprir as necessidades atuais das empresas de software, os quais sempre se renovam juntamente às tecnologias. Assinale abaixo a alternativa que possui apenas modelos de ciclo de vida:",
      options: [
        "a)	Codifica-remenda, cascata, prototipação, iterativo, incremental, espiral.",
        "b)	Codifica-remenda, cascata, prototipação, interativo, incremental, espiral.",
        "c)	Cascata, iterativo, espiral, prototipagem, remenda.",
        "d)	Codifica-remenda, cascata, prototipo, interativo, incremental, espiral."
      ],
      rightAnswer: 0,
    },
    {
      abbrTheme: "GAPS",
      question:
        "Os modelos de ciclo de vida se diferenciam principalmente por suas diversas características e a maneira com que lhes manejam, o modelo espiral se destaca especialmente por:",
      options: [
        "a)	Englobar um elemento das etapas de todos os outros modelos, juntamente a adição do feedback do desenvolvedor.",
        "b)	Englobar características do modelo clássico e da prototipação, juntamente com a inserção da análise de risco.",
        "c)	Inserir um novo elemento às suas etapas, a análise de requisitos.",
        "d)	Englobar apenas características únicas, distantes de qualquer modelo criado previamente."
      ],
      rightAnswer: 1,
    },
    {
      abbrTheme: "GAPS",
      question:
        "I) ______ é considerado o modelo de vida mais antigo, caracterizado por seu jeito suas etapas seguidas ordenadamente uma após a outra, as quais precisam ser reiniciadas desde o princípio caso haja uma mudança de requisitos. <br /> II) O modelo ______ é o mais caótico entre os demais, uma vez que pode não apresentar especificação de requisitos, o que lhe faz ser considerado de alto risco. <br /> III) O ______ é um modelo que visa o planejamento de retrabalho, no qual o tempo de revisão e melhorias do sistema é pré definido.",
      options: [
        "a)	Iterativo, prototipação, cascata.",
        "b)	Cascata, prototipação, espiral.",
        "c)	Cascata, codifica-rementa, incremental.",
        "d)	Cascata, codifica-rementa, iterativo."
      ],
      rightAnswer: 3,
    },
    {
      abbrTheme: "GAPS",
      question:
        "Sobre suas etapas, identifique as afirmações como verdadeiras ou falsas e assinale a alternativa que corresponde a tal. Engenharia de sistemas corresponde a fase de levantamento de requisitos referentes ao sistema. O projeto se refere a representação das funções do sistema e sua estrutura de dados, arquitetura de software, detalhes procedimentais e caracterização de interface. Manutenção se refere ao período de tempo no qual o sistema se torna obsoleto e é desativado permanentemente. A análise consiste na investigação da disponibilidade dos recursos e tecnologias para o sistema requisitado.",
      options: [
        "a)	V, F, F, V.",
        "b)	V, V, F, F.",
        "c)	V, F, V, V.",
        "d)	V, V, F, V."
      ],
      rightAnswer: 3,
    },
    {
      abbrTheme: "GAPS",
      question:
        "A prototipação é um modelo de desenvolvimento de software capaz de auxiliar na visualização de uma proposta dentro do projeto antes de implementá-la. Em relação a esse modelo, assinale a alternativa correta:",
      options: [
        "a)	Possui sete etapas bem separadas, as quais fluem entre si.",
        "b)	Concentra-se em documentar os requisitos e os analisar cuidadosamente antes de iniciar projetos. ",
        "c)	Ajuda o usuário a compreender os requisitos através da demonstração em experimentos.",
        "d)	Precisa sempre satisfazer todos os requisitos do produto final em todas as etapas."
      ],
      rightAnswer: 2,
    },
    {
      abbrTheme: "GAPS",
      question:
        "De acordo com a 5ª edição do PMBOK, o ciclo de vida do ________ é a série de _______ pelas quais um projeto passa, desde o seu início até ___________. Assinale a alternativa que preenche, correta e respectivamente, as lacunas do trecho acima:",
      options: [
        "a)	produto – fases – a sua retirada.",
        "b)	produto – processos – o seu término.",
        "c)	projeto – processos – o seu fim.",
        "d)	projeto – fases – o seu término."
      ],
      rightAnswer: 3,
    },
    {
      abbrTheme: "GAPS",
      question:
        "Qual das alternativas abaixo não corresponde a um dos conceitos das principais etapas do ciclo de vida?",
      options: [
        "a)	Recursos necessários.",
        "b)	Manutenção e encerramento de projetos.",
        "c)	Métodos de desenvolvimento utilizados.",
        "d)	Produtos resultantes."
      ],
      rightAnswer: 1,
    },
    {
      abbrTheme: "GAPS",
      question:
        "Inovações surgem a partir da necessidade. Por qual razão a gestão ágil de projetos de software surgiu?",
      options: [
        "a)	Para atender as exigências do mercado e aumentar a qualidade e agilidade durante a produção dos projetos.",
        "b)	Para gerenciar projetos, diminuir a agilidade e aumentar a qualidade dos projetos.",
        "c)	A fim de diminuir a concorrência no mercado, tornando os projetos únicos, inclusive em seus modelos de produção.            ",
        "d)	A fim de atrapalhar as grandes empresas e desorganizar a produção dos projetos."
      ],
      rightAnswer: 0,
    },
    {
      abbrTheme: "GAPS",
      question:
        "Qual o objetivo das etapas de levantamento de requisitos nos modelos de desenvolvimento de software?",
      options: [
        "a)	Garantir que um software não apresenta erros.",
        "b)	Definir requisitos de software funcionais e não funcionais.",
        "c)	Testar o software depois de seu desenvolvimento.",
        "d)	Apenas criar a documentação do software."
      ],
      rightAnswer: 1,
    },
    {
      abbrTheme: "GAPS",
      question:
        "Qual das alternativas abaixo não corresponde a uma das características chave da gestão ágil de projetos?",
      options: [
        "a)	Planejamento rigoroso e documentação.",
        "b)	Flexibilidade e adaptabilidade.",
        "c)	Colaboração e auxílio ao cliente.",
        "d)	Entrega do projeto no tempo devido."
      ],
      rightAnswer: 0,
    },
    {
      abbrTheme: "GAPS",
      question:
        "Qual das alternativas abaixo corresponde a um modelo de desenvolvimento de software linear e sequencial?",
      options: [
        "Espiral",
        "Incremental",
        "Codifica-remenda",
        "Cascata"
      ],
      rightAnswer: 3,
    },
    {
      abbrTheme: "GAPS",
      question:
        "Identifique e assinale a alternativa que corresponde a um dos benefícios do modelo cascata?",
      options: [
        "a)	Mudanças podem ser facilmente implementadas.",
        "b)	Testes são feitos através de cada fase do modelo.",
        "c)	Fácil de usar em projetos complexos e com requisitos mal definidos.",
        "d)	Ideal para projetos com requisitos bem definidos."
      ],
      rightAnswer: 3,
    },
    {
      abbrTheme: "GAPS",
      question:
        "Gibberish",
      options: [
        "Gibberish",
        "Gibberish",
        "Gibberish",
        "Gibberish"
      ],
      rightAnswer: 2,
    },
    {
      abbrTheme: "GAPS",
      question:
        "Gibberish",
      options: [
        "Gibberish",
        "Gibberish",
        "Gibberish",
        "Gibberish"
      ],
      rightAnswer: 2,
    },
  ],
};