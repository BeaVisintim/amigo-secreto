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
  input.focus();

}

function atualizarLista() {
    const lista = document.getElementById("lista-amigos");
    lista.innerHTML = "";
  
    amigos.forEach((amigo, index) => {
      const item = document.createElement("div");
      item.classList.add("amigo-item");
  
      const nome = document.createElement("span");
      nome.textContent = amigo;
      nome.classList.add("amigo-nome");
  
      const removerBtn = document.createElement("button");
      removerBtn.textContent = "Remover";
      removerBtn.classList.add("remover-btn");
      removerBtn.onclick = () => {
        amigos.splice(index, 1);
        atualizarLista();
      };
  
      item.appendChild(nome);
      item.appendChild(removerBtn);
      lista.appendChild(item);
    });
}
  
function sortear() {
    if (amigos.length < 2) {
      alert("Adicione pelo menos 2 amigos para sortear.");
      return;
    }
  
    let maxTentativas = 100;
    let sorteadoComSucesso = false;
    let resultado = "";
  
    for (let tentativas = 0; tentativas < maxTentativas; tentativas++) {
      const sorteadores = embaralhar([...amigos]);
      const sorteados = embaralhar([...amigos]);
      let valido = true;
  
      for (let i = 0; i < sorteadores.length; i++) {
        if (sorteadores[i] === sorteados[i]) {
          valido = false;
          break;
        }
      }
  
      if (valido) {
        resultado = "";
        for (let i = 0; i < sorteadores.length; i++) {
          resultado += `${sorteadores[i]} → ${sorteados[i]}<br>`;
        }
        sorteadoComSucesso = true;
        break;
      }
    }
  
    if (sorteadoComSucesso) {
      document.getElementById("lista-sorteio").innerHTML = resultado;
    } else {
      alert("Não foi possível sortear sem repetições. Tente novamente.");
    }
  }
  
  function embaralhar(lista) {
    for (let i = lista.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [lista[i], lista[j]] = [lista[j], lista[i]];
    }
    return lista;
  }
  
function reiniciar() {
  amigos = [];
  document.getElementById("nome-amigo").value = "";
  document.getElementById("lista-amigos").textContent = "";
  document.getElementById("lista-sorteio").innerHTML = "";
}
