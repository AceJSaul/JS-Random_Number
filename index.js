//Número aleatório

/*Math.random() dá um número aleatório entre 0 e 1 -- Uso o 6 para definir um "limite" do que o número pode ser (Max: 1. 1*6 = 6)
let numaleatorio = Math.floor(Math.random() * 6 + 1);
console.log(numaleatorio);
*/

const num = document.getElementById("num");
const button = document.getElementById("submit");

button.onclick = function () {
  let aleatório = Math.round(Math.random() * 5000 + 1);
  num.textContent = aleatório;
};
