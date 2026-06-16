// Banco de dados contendo 25 tags HTML e 25 propriedades CSS básicas
const gameData = [
    // --- 25 TAGS HTML ---
    { name: '<a>', type: 'html', desc: 'HTML: Cria links para navegar para outras páginas ou sites.' },
    { name: '<p>', type: 'html', desc: 'HTML: Define um parágrafo de texto comum.' },
    { name: '<h1>', type: 'html', desc: 'HTML: Define o título principal e mais importante da página.' },
    { name: '<h2>', type: 'html', desc: 'HTML: Define um subtítulo de segundo nível na hierarquia.' },
    { name: '<h3>', type: 'html', desc: 'HTML: Define um subtítulo de terceiro nível na hierarquia.' },
    { name: '<img>', type: 'html', desc: 'HTML: Exibe uma imagem na página utilizando o atributo src.' },
    { name: '<button>', type: 'html', desc: 'HTML: Cria um botão clicável para realizar ações.' },
    { name: '<ul>', type: 'html', desc: 'HTML: Cria uma lista de itens com bolinhas (não ordenada).' },
    { name: '<ol>', type: 'html', desc: 'HTML: Cria uma lista de itens numerados (ordenada).' },
    { name: '<li>', type: 'html', desc: 'HTML: Define cada item de uma lista (usado dentro de ul ou ol).' },
    { name: '<div>', type: 'html', desc: 'HTML: Um bloco vazio usado para agrupar e organizar elementos.' },
    { name: '<span>', type: 'html', desc: 'HTML: Um contêiner de linha usado para marcar ou estilizar partes de um texto.' },
    { name: '<br>', type: 'html', desc: 'HTML: Força uma quebra de linha no texto.' },
    { name: '<hr>', type: 'html', desc: 'HTML: Cria uma linha horizontal para separar conteúdos.' },
    { name: '<b>', type: 'html', desc: 'HTML: Deixa o texto em negrito (apenas visualmente).' },
    { name: '<i>', type: 'html', desc: 'HTML: Deixa o texto em itálico (apenas visualmente).' },
    { name: '<strong>', type: 'html', desc: 'HTML: Deixa o texto em negrito e indica forte importância.' },
    { name: '<em>', type: 'html', desc: 'HTML: Deixa o texto em itálico e indica ênfase no conteúdo.' },
    { name: '<form>', type: 'html', desc: 'HTML: Cria uma área de formulário para coletar dados.' },
    { name: '<input>', type: 'html', desc: 'HTML: Cria campos onde o usuário pode digitar textos, senhas ou e-mails.' },
    { name: '<label>', type: 'html', desc: 'HTML: Define uma etiqueta ou texto descritivo para um input.' },
    { name: '<header>', type: 'html', desc: 'HTML: Define o cabeçalho superior da página ou de uma seção.' },
    { name: '<nav>', type: 'html', desc: 'HTML: Define um bloco que contém links de navegação (menus).' },
    { name: '<main>', type: 'html', desc: 'HTML: Indica onde fica o conteúdo principal e exclusivo da página.' },
    { name: '<footer>', type: 'html', desc: 'HTML: Define o rodapé inferior da página, com contatos ou direitos autorais.' },

    // --- 25 PROPRIEDADES CSS ---
    { name: 'color', type: 'css', desc: 'CSS: Altera a cor do texto do elemento.' },
    { name: 'background-color', type: 'css', desc: 'CSS: Define a cor de fundo do elemento.' },
    { name: 'font-size', type: 'css', desc: 'CSS: Altera o tamanho da fonte (texto).' },
    { name: 'font-family', type: 'css', desc: 'CSS: Define a família da fonte (tipo de letra) a ser usada.' },
    { name: 'font-weight', type: 'css', desc: 'CSS: Altera a espessura da fonte (como deixar em negrito com "bold").' },
    { name: 'text-align', type: 'css', desc: 'CSS: Alinha o texto (esquerda, direita, centro ou justificado).' },
    { name: 'width', type: 'css', desc: 'CSS: Define a largura de um elemento.' },
    { name: 'height', type: 'css', desc: 'CSS: Define a altura de um elemento.' },
    { name: 'padding', type: 'css', desc: 'CSS: Cria um espaçamento interno entre o conteúdo e a borda do elemento.' },
    { name: 'margin', type: 'css', desc: 'CSS: Cria um espaçamento externo ao redor do elemento.' },
    { name: 'border', type: 'css', desc: 'CSS: Define a borda ao redor do elemento (espessura, estilo e cor).' },
    { name: 'border-radius', type: 'css', desc: 'CSS: Arredonda os cantos das bordas de um elemento.' },
    { name: 'display', type: 'css', desc: 'CSS: Define o tipo de exibição do elemento (ex: block, inline, flex).' },
    { name: 'flex-direction', type: 'css', desc: 'CSS: Define a direção dos itens dentro de um contêiner Flex (linha ou coluna).' },
    { name: 'justify-content', type: 'css', desc: 'CSS: Alinha os itens no eixo principal de um contêiner Flex.' },
    { name: 'align-items', type: 'css', desc: 'CSS: Alinha os itens no eixo cruzado de um contêiner Flex.' },
    { name: 'gap', type: 'css', desc: 'CSS: Define o tamanho do espaço entre linhas e colunas (em Flex ou Grid).' },
    { name: 'position', type: 'css', desc: 'CSS: Define o tipo de posicionamento do elemento (ex: static, relative, absolute, fixed).' },
    { name: 'top', type: 'css', desc: 'CSS: Move um elemento posicionado para cima ou para baixo a partir do topo.' },
    { name: 'opacity', type: 'css', desc: 'CSS: Controla o nível de transparência de um elemento (de 0 a 1).' },
    { name: 'cursor', type: 'css', desc: 'CSS: Altera o tipo de ponteiro do mouse quando passa sobre o elemento.' },
    { name: 'text-transform', type: 'css', desc: 'CSS: Modifica o texto para maiúsculas (uppercase) ou minúsculas (lowercase).' },
    { name: 'text-decoration', type: 'css', desc: 'CSS: Adiciona decorações ao texto, como sublinhado ou remover traço de links.' },
    { name: 'box-shadow', type: 'css', desc: 'CSS: Adiciona efeitos de sombra ao redor da caixa do elemento.' },
    { name: 'background-image', type: 'css', desc: 'CSS: Define uma imagem de fundo para o elemento.' }
];

const grid = document.getElementById('grid');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const closeBtn = document.getElementById('close-btn');

// EMBARALHAMENTO: Mistura os dados de forma aleatória antes de criar o tabuleiro
gameData.sort(() => Math.random() - 0.5);

// Gera dinamicamente o tabuleiro de 50 posições
gameData.forEach((item, index) => {
    const cell = document.createElement('button');
    cell.classList.add('cell');
    cell.innerText = index + 1; // Exibe o número sequencial de 1 a 50
    
    cell.dataset.state = "0"; 

    cell.addEventListener('click', () => {
        if (cell.dataset.state === "0") {
            cell.innerText = item.name;
            if (item.type === 'html') {
                cell.classList.add('revealed-html');
            } else {
                cell.classList.add('revealed-css');
            }
            cell.dataset.state = "1";
        } else {
            openModal(item.name, item.desc);
        }
    });

    grid.appendChild(cell);
});

function openModal(title, desc) {
    modalTitle.innerText = title;
    modalDesc.innerText = desc;
    modal.style.display = 'flex';
}

function closeModal() {
    modal.style.display = 'none';
}

closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});
