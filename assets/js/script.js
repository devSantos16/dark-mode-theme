let body = document.getElementsByTagName("body")[0];
let h1 = document.getElementsByTagName("h1")[0];
let button = document.getElementsByTagName("button")[0];
let footer = document.querySelector(".footer");

let darkTheme = () => {
    body.classList.toggle("dark-mode");
    h1.classList.toggle("dark-mode");
    button.classList.toggle("dark-mode");
    footer.classList.toggle("dark-mode");
}

button.addEventListener("click", () => {
    darkTheme();
    VerificarTextoTema("Theme", h1);
    VerificarTextoTema("Mode", button);
});

function VerificarTextoTema(texto, elemento){
    elemento.innerText == `Light ${texto}` ? elemento.innerText = `Dark ${texto}` : elemento.innerText = `Light ${texto}`;
}

function ChangeColor() {
    darkTheme();
}

