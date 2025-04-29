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

function atualizarLista() {
  const lista = document.getElementById("lista-amigos");
  lista.textContent = amigos.join(", ");
}

function sortear() {
  if (amigos.length < 2) {
    alert("Adicione pelo menos 2 amigos para sortear.");
    return;
  }

  let sorteio = [...amigos];
  let resultado = "";

  for (let i = 0; i < amigos.length; i++) {
    const amigo = amigos[i];

    // Evita que alguém tire a si mesmo
    let possibilidades = sorteio.filter(nome => nome !== amigo);

    if (possibilidades.length === 0) {
      // Se não tiver possibilidades válidas, reinicia o sorteio
      sortear();
      return;
    }

    const index = Math.floor(Math.random() * possibilidades.length);
    const sorteado = possibilidades[index];

    resultado += `${amigo} → ${sorteado}<br>`;
    // Remove o nome sorteado da lista para que ele não seja sorteado de novo
    sorteio = sorteio.filter(nome => nome !== sorteado);
  }

  document.getElementById("lista-sorteio").innerHTML = resultado;
}

function reiniciar() {
  amigos = [];
  document.getElementById("nome-amigo").value = "";
  document.getElementById("lista-amigos").textContent = "";
  document.getElementById("lista-sorteio").innerHTML = "";
}
