const header = document.querySelector("header");
const main = document.querySelector("main");

const h1Header = document.createElement("h1");
h1Header.textContent = "Criando elementos com JavaScript";
h1Header.id = "titulo-principal"; 
header.appendChild(h1Header);

const div1 = document.createElement("div");
const div2 = document.createElement("div");

const h2Div1 = document.createElement("h2");
h2Div1.textContent = "Elemento h2 criado no JavaScript";
h2Div1.classList.add("titulo-h2"); 
const pDiv1 = document.createElement("p");
pDiv1.textContent = "Todos os elementos acima foram criados usando apenas JavaScript, utilizando o 'document.QuerySelector' para selecionar as tags 'header' e 'main' e adicionar os titulos, div's e paragrafos dentro delas.";
pDiv1.classList.add("paragrafo"); 
div1.appendChild(h2Div1);
div1.appendChild(pDiv1);

const h2Div2 = document.createElement("h2");
h2Div2.textContent = "Elemento h2 criado no JavaScript";
h2Div2.classList.add("titulo-h2"); 
const pDiv2 = document.createElement("p");
pDiv2.textContent = "Todos os elementos acima foram criados usando apenas JavaScript, utilizando o 'document.QuerySelector' para selecionar as tags 'header' e 'main' e adicionar os titulos, div's e paragrafos dentro delas.";
pDiv2.classList.add("paragrafo");
div2.appendChild(h2Div2);
div2.appendChild(pDiv2);

main.appendChild(div1);
main.appendChild(div2);
