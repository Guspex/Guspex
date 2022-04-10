let jogos = [];
let resultado = document.getElementById("resultado");
let id = 1;

function pegaJogos() {
  let contentHTML = "";
  jogos.forEach((elem) => {
    contentHTML += `<div class="jogo"><span class="titulo">${elem.titulo}</span><img src="${elem.image}" width=150px height=150px><span class="link"><a href=${elem.video}>Video do Jogo</a></span><span class="remove" onclick ="removeJogo(${elem.id})">Remover</span></div>`;
  });
  resultado.innerHTML = contentHTML;
}

function removeJogo(id) {
  let index = jogos.findIndex((elem) => elem.id === id);
  jogos.forEach((elem) => {
    if (elem.id == id) {
      jogos.splice(index, 1);
    }
  });
  pegaJogos();
}

btnAdd.addEventListener("click", () => {
  let titulo = document.getElementById("titulojogo");
  let image = document.getElementById("imagemjogo");
  let video = document.getElementById("videojogo");
  if (titulo.value != "" && image.value != "") {
    const achaJogo = jogos.find((jogo) => {
      return jogo.titulo.toLowerCase() === titulo.value.toLowerCase();
    });
    const typeOfImage = ["jpg", "jpeg", "png"];

    let isImage = false;
    typeOfImage.forEach((elem) => {
      if (image.value.toLowerCase().endsWith(elem)) {
        isImage = true;
      }
    });

    if (!achaJogo && isImage) {
      jogos.push({
        id: id,
        titulo: titulo.value,
        image: image.value,
        video: video.value
      });
      id++;
    } else {
      alert("Jogo já adicionado ou endereço não corresponde a uma imagem!");
    }
  } else {
    alert("Preencha os campos completamente!");
  }
  titulo.value = "";
  image.value = "";
  video.value = "";
  pegaJogos();
});
