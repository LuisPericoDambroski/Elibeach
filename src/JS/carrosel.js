let slideIndex = 0; // Índice da imagem inicial
const slides = document.querySelectorAll(".mySlides"); // Seleciona todas as imagens
const totalSlides = slides.length; // Total de slides

// Função para mostrar o slide atual
function showSlide() {
  // Garante que o índice de slide esteja dentro do intervalo
  if (slideIndex >= totalSlides) slideIndex = 0;
  if (slideIndex < 0) slideIndex = totalSlides - 1;

  // Esconde todos os slides
  slides.forEach((slide, index) => {
    slide.style.display = index === slideIndex ? "block" : "none";
  });

  // Atualiza o ponto de navegação
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    dot.classList.remove("active");
    if (index === slideIndex) dot.classList.add("active");
  });
}

// Função para avançar o slide
function nextSlide() {
  slideIndex++;
  showSlide();
}

// Função para voltar ao slide
function prevSlide() {
  slideIndex--;
  showSlide();
}

// Função de navegação ao clicar na metade direita ou esquerda
document.querySelector(".slideshow-container").addEventListener("click", function(event) {
  const containerWidth = this.offsetWidth;
  const clickPosition = event.pageX - this.offsetLeft;

  // Se o clique for na metade direita, avança; na metade esquerda, volta
  if (clickPosition > containerWidth / 2) {
    nextSlide();
  } else {
    prevSlide();
  }
});

// Função de troca automática de slides a cada 15 segundos
setInterval(nextSlide, 15000);

// Inicializa o banner
showSlide();
