document.addEventListener ('DOMContentLoaded', evento => initialize(evento));

let ancla;

function initialize (evento) {
    document.getElementById('category').addEventListener("click",event => vaciar(event));
    document.getElementById('salary').addEventListener("click", event => vaciar(event));
    document.getElementById('calcular').addEventListener("click",calcular);
    ancla = document.getElementById('out');
}

function vaciar(event) {
  document.getElementById(event.target.id).value = "";
  ancla.textContent = '';
}

function calcular() {
  ancla.textContent = "";
  const num = parseInt(document.getElementById('salary').value);
  const cat = parseInt(document.getElementById('category').value);
  const nodo = document.createElement('p');
  nodo.textContent = `El aumento es ${total(cat,num)}`;
  ancla.appendChild(nodo);
}

function total(category, salary) {
  const incremento = [1.15,1.10,1.06,1.03];
  if (category >0 && category <=4){
    return salary*incremento[category-1];
  } else {
    return alert(`La categoría no existe`);
  }
}