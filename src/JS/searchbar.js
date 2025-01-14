function toggleUserMenu() {
  const userMenu = document.querySelector('.user-menu');
  userMenu.style.display = userMenu.style.display === 'block' ? 'none' : 'block';

  // Oculta a barra de pesquisa caso esteja visível
  const searchBar = document.querySelector('.search-container .search-bar');
  if (searchBar.style.display === 'block') {
      searchBar.style.display = 'none';
  }
}

function toggleSearchBar() {
  const searchContainer = document.querySelector('.search-container');
  const searchBar = searchContainer.querySelector('.search-bar');

  // Alterna a exibição da barra de pesquisa
  if (searchBar.style.display === 'block') {
      searchBar.style.display = 'none';
  } else {
      searchBar.style.display = 'block';
      searchBar.focus(); // Coloca o foco automaticamente na barra
  }

  // Oculta o menu de usuário caso esteja visível
  const userMenu = document.querySelector('.user-menu');
  if (userMenu.style.display === 'block') {
      userMenu.style.display = 'none';
  }
}
// Seleciona o ícone e a barra de pesquisa
const searchIcon = document.getElementById("search-icon");
const searchBar = document.querySelector(".search-container");

// Adiciona evento de clique para expandir a barra de pesquisa
searchIcon.addEventListener("click", () => {
  searchBar.classList.toggle("active"); // Alterna a classe para exibir/ocultar
});
