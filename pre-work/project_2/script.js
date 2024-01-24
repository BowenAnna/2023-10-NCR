const button = document.querySelector("button");
const output = document.querySelector(".output");
console.log(button);

button.addEventListener("click", function() {
  const cost = document.querySelector("input");
  console.log(cost.value * 0.15);
  let tip = (cost.value * 0.15).toFixed(2);
  let temp = `<h5>Based on the 15% gratuity, You should tip ${tip} on ${cost.value} bill</h5>`;
  output.innerHTML = temp;
})