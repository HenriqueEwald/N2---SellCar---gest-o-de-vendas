let posts = [];
let usuarios = [];

async function buscarPosts() {
  const resposta = await fetch("https://jsonplaceholder.typicode.com/posts");
  posts = await resposta.json();
}

async function buscarUsuarios() {
  const resposta = await fetch("https://jsonplaceholder.typicode.com/users");
  usuarios = await resposta.json();
  exibirUsuarios();
}

function exibirUsuarios() {
  const lista = document.getElementById("list-user");
  const selectCadastro = document.getElementById("f-vendedor");
  const selectEdicao = document.getElementById("edit-vendedor");

  lista.innerHTML = "";
  selectCadastro.innerHTML = "";
  selectEdicao.innerHTML = "";

  usuarios.forEach(function (usuario) {
    const item = document.createElement("li");
    item.textContent = usuario.name;
    lista.appendChild(item);

    const opcao1 = document.createElement("option");
    opcao1.value = usuario.id;
    opcao1.textContent = usuario.name;
    selectCadastro.appendChild(opcao1);

    const opcao2 = document.createElement("option");
    opcao2.value = usuario.id;
    opcao2.textContent = usuario.name;
    selectEdicao.appendChild(opcao2);
  });
}

buscarPosts();
buscarUsuarios();
