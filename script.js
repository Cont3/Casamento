function abrirConvite() {
  const envelope = document.querySelector('.envelope');
  const tela = document.getElementById('envelope-screen');
  const book = document.getElementById('book');

  // abrir tampa
  envelope.classList.add('open');

  // subir + zoom
  setTimeout(() => {
    envelope.classList.add('zoom');
  }, 900);

  // fade
  setTimeout(() => {
    tela.classList.add('fade-out');
  }, 1600);

  // mostrar livro + iniciar swiper
  setTimeout(() => {
    tela.style.display = 'none';
    book.style.display = 'block';

    new Swiper('.swiper', {
      direction: 'horizontal',
    });

  }, 2300);
}
