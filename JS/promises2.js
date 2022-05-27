const numbersum = 10000;
const max = 1000;
const min = -1000;

function sumaPositivosAsync(numeros) {
  let p = new Promise(function (resolve, reject) {
    if (numeros.every((numero) => numero > 0)) {
      resolve(numeros.reduce((init, next) => init + next, 0));
    } else {
      reject("Los numeros indicados no son positivos");
    }
  });
  return p;
}

function randomNumerMix() {
  const arrayNumberMix = [];
  for (i = 0; i < numbersum; i++) {
    arrayNumberMix[i] = Math.random() * (max - min) + min;
  }
  return arrayNumberMix;
}

function randomNumerPositive() {
  const arrayNumberPositive = [];
  for (i = 0; i < numbersum; i++) {
    arrayNumberPositive[i] = Math.random() * max;
  }
  return arrayNumberPositive;
}

function reduceArray() {
  const reduceArray = filterArray();
  const result = reduceArray.reduce((init, next) => init + next);
}

const numpost = randomNumerPositive();
const numneg = randomNumerMix();
sumaPositivosAsync(numpost).then(okidoki).catch(error);
sumaPositivosAsync(numneg).then(okidoki).catch(error);
function error(err) {
  console.log("Error: ", err);
}
function okidoki(result) {
  console.log("OK: ", result);
}
console.log("end");
