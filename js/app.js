let amigos = [];

function adicionar() {
  const input = document.getElementById("nome-amigo");
  const nome = input.value.trim();

  if (nome === "") {
    alert("Digite um nome antes de adicionar.");
    return;
  }

  if (amigos.includes(nome)) {
    alert("Esse nome já foi adicionado.");
    return;
  }

  amigos.push(nome);
  input.value = "";
  atualizarLista();
}
