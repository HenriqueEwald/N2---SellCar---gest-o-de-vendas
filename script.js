let posts = [];
let usuarios = [];

async function buscarPosts() {
  const resposta = await fetch("https://jsonplaceholder.typicode.com/posts");
  posts = await resposta.json();
  console.log("Posts carregados:", posts);
}

async function buscarUsuarios() {
  const resposta = await fetch("https://jsonplaceholder.typicode.com/users");
  usuarios = await resposta.json();
  console.log("Usuários carregados:", usuarios);
}

buscarPosts();
buscarUsuarios();
