document.querySelector(".envelope").onclick = () => {
  document.getElementById("envelope-screen").style.display = "none";
  document.getElementById("book").style.display = "block";

  new Swiper('.swiper', {
    direction: 'horizontal',
  });
};
function abrirConvite() {
  const envelope = document.querySelector('.envelope');
  const tela = document.getElementById('envelope-screen');
  const book = document.getElementById('book');

  // 1. abrir tampa
  envelope.classList.add('open');

  // 2. subir carta
  setTimeout(() => {
    envelope.classList.add('zoom');
  }, 900);

  // 3. transição para o conteúdo
  setTimeout(() => {
    tela.classList.add('fade-out');
  }, 1600);

  // 4. mostrar livro
  setTimeout(() => {
    tela.style.display = 'none';
    book.style.display = 'block';
  }, 2300);
}
