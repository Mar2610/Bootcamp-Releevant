document.addEventListener ('DOMContentLoaded', evento => initialize(evento));

function initialize (evento) {
    // document.getElementById('category').addEventListener("click",event => vaciar(event));
    // document.getElementById('salary').addEventListener("click", event => vaciar(event));
    document.getElementById('calcular').addEventListener("click",calcular);
}

// function vaciar(event) {
//   document.getElementById(event.target.id).value = "";
// }

function calcular() {
  const num = parseInt(document.getElementById('salary').value);
  const cat = parseInt(document.getElementById('category').value);
  document.getElementById("out").innerHTML = `Categoría: ${cat}. Salario actual: ${num}.
  Incremento: ${total(cat, num)}`;
}

function total(category, salary) {
  const incremento = [1.15,1.10,1.06,1.03];
  if (category >0 && category <=4){
    return salary*incremento[category-1];
  }
}