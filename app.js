// app.js
const container = document.getElementById("container");

perguntas.forEach(({ pergunta, resposta }) => {
  const cartao = document.createElement("div");
  cartao.className = "cartao";
  cartao.innerHTML = `
    <div class="cartao-inner">
      <div class="cartao-front">${pergunta}</div>
      <div class="cartao-back">${resposta}</div>
    </div>
  `;
  cartao.addEventListener("click", () => cartao.classList.toggle("flipped"));
  container.appendChild(cartao);
});
