// Array para armazenar os amigos
let amigos = [];

// Função para adicionar amigo
function adicionarAmigo() {
  const input = document.getElementById('amigo'); // Captura o valor do campo de entrada
  const nome = input.value.trim(); // Remove espaços desnecessários

  // Verifica se o nome é válido
  if (nome === '') {
    alert('Por favor, insira um nome.');
    return;
  }

  // Adiciona o nome ao array
  amigos.push(nome);

  // Atualiza a lista de amigos na tela
  const listaAmigos = document.getElementById('listaAmigos');
  const listItem = document.createElement('li');
  listItem.textContent = nome;
  listaAmigos.appendChild(listItem);

  // Limpa o campo de entrada
  input.value = '';
}

// Função para sortear um amigo
function sortearAmigo() {
  // Verifica se a lista está vazia
  if (amigos.length === 0) {
    alert('A lista está vazia. Adicione amigos antes de sortear.');
    return;
  }

  // Sorteia um nome
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  // Exibe o resultado
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `<li>Amigo sorteado: ${amigoSorteado}</li>`;
}