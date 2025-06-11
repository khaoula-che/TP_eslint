function additionner(a, b) {
  const result = a + b;
  console.log('Le résultat est', result);
  return result;
}

function division(x, y) {
  if (y === 0) {
    console.log('Division par zéro !');
    return;
  }
  return x / y;
}

console.log(additionner(5, 3));

const message = 'Bonjour le monde';

const tableau = ['pomme', 'banane', 'orange'];

const nombre = '10';
if (nombre === '10') {
  console.log('Nombre égal à 10');
}

function toutFaire() {
  console.log('Début');
  const a = 1;
  const b = 2;
  const c = 3;
  const d1 = 4;
  const e = 5;
  const f = 6;
  const g = 7;
  const h = 8;
  const i = 9;
  const j = 10;
  console.log(a, b, c, d1, e, f, g, h, i, j);
  console.log('Fin');
}

setTimeout(() => {
  console.log('Timeout');
}, 1000);

const d2 = new Date();

function fetchData() {
  fetch('https://api.example.com')
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

const nombres = [1, 2, 3].map((n) => n * 2);

module.exports = {
  additionner,
  division,
};
