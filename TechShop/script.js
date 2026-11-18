console.log("all work");

document.querySelector("#buy").addEventListener("click", function() {
    document.querySelector("#message").textContent =
    "товар в корзинке";
});

document.querySelector("#details").addEventListener("click", function() {
    document.querySelector("#info").textContent =
    "шикарные наушники, бро, не ломайся";
});

document.querySelector("#dostavka").addEventListener("click", function() {
    document.querySelector("#delivery").textContent =
    "по городу - 500 рублей";
});

document.querySelector('#del').addEventListener('click', function() { 
    document.querySelector("#message").textContent =
    " ";
});