// Função para abrir o modal e carregar os dados do botão
function openModal(button) {
  const modal = document.createElement('div');
  modal.classList.add('modal');

  // Montar o conteúdo do modal
  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');

  const modalImage = document.createElement('img');
  modalImage.classList.add('modal-image');
  modalImage.src = button.previousElementSibling.src; // Pega a imagem da categoria ou destaque
  modalImage.alt = 'Imagem da Praia';

  const modalText = document.createElement('div');
  modalText.classList.add('modal-text');

  // Informações sobre cada praia (substitua conforme necessário)
  const descriptions = [
    "Localizada em Fernando de Noronha, Pernambuco, a Baía do Sancho é considerada uma das mais belas praias do Brasil, com águas cristalinas e rica vida marinha.",
    "Localizada em Trancoso, Bahia, a Praia do Espelho é famosa por sua beleza natural, com águas tranquilas e falésias impressionantes.",
    "Localizada em Tamandaré, Pernambuco, a Praia dos Carneiros é famosa por suas águas calmas, transparentes e sua paisagem paradisíaca com coqueirais.",
    "Localizada no Ceará, Jericoacoara é famosa por suas dunas e lagoas de águas cristalinas, um destino ideal para quem busca aventura e tranquilidade.",
    "Localizada em Cairu, Bahia, a Praia de Garapuá é uma das mais tranquilas da região, com águas calmas e rodeada de vegetação nativa.",
    "Localizada em Florianópolis, Santa Catarina, a Ilha do Campeche é conhecida por suas águas cristalinas e trilhas que levam a sítios arqueológicos.",
    "Localizada em Florianópolis, Santa Catarina, a Praia da Lagoinha do Leste é isolada e de difícil acesso, oferecendo uma paisagem intocada e tranquila.",
    "Localizada em Corumbau, Bahia, a Praia da Ponta do Corumbau é um destino mais tranquilo, com águas claras e recifes de corais.",
    "Localizada no Rio de Janeiro, a Praia de Copacabana é uma das praias mais famosas do Brasil, com sua extensa faixa de areia e o famoso calçadão.",
    "Localizada em Florianópolis, Jurerê é famosa por sua infraestrutura de alto padrão, águas calmas e excelente para esportes náuticos.",
    "Localizada em Maceió, Alagoas, a Praia de Ponta Verde é uma das mais visitadas, com águas claras, coqueiros e uma excelente infraestrutura de lazer.",
    "Localizada em Arraial do Cabo, Rio de Janeiro, a Praia do Farol é famosa por suas águas transparentes, ideais para mergulho e um cenário deslumbrante."
  ];

  // URLs das páginas de cada praia (substitua pelos links reais das páginas de cada praia)
  const pages = [
    "Praias.html",
    "Praias.html",
    "Praias.html",
    "Praias.html",
    "Praias.html",
    "Praias.html",
    "Praias.html",
    "Praias.html",
    "Praias.html",
    "Praias.html",
    "Praias.html",
  ];

  // Substitua o conteúdo do modal com o nome da praia e a descrição
  modalText.innerHTML = `
    <h2>Informações sobre a Praia</h2>
    <p>${descriptions[button.getAttribute('data-id') - 1]}</p>
    <button class="go-to-page" onclick="window.location.href='${pages[button.getAttribute('data-id') - 1]}'">Ir para a página da Praia</button>
  `;

  const closeBtn = document.createElement('span');
  closeBtn.classList.add('close');
  closeBtn.innerHTML = '&times;';
  closeBtn.onclick = function () {
    modal.style.display = 'none';
  };

  // Adicionando tudo ao modal
  modalContent.appendChild(modalImage);
  modalContent.appendChild(modalText);
  modal.appendChild(modalContent);
  modal.appendChild(closeBtn);

  // Exibir o modal
  document.body.appendChild(modal);
  modal.style.display = 'flex';
}

// Fechar o modal quando clicar fora do conteúdo
window.onclick = function (event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = 'none';
  }
};
