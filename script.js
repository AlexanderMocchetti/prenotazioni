const form = document.querySelector("form");

let nome = document.getElementById("nome");
let data = document.getElementById("data");
let tempo = document.getElementById("tempo");
let numeroPersone = document.getElementById("numero-persone");

form.onsubmit = ev => {
    if (numeroPersone.value >= 8 || data.value === "" || tempo.value === "" || nome.value === "" || numeroPersone.value === "") {
        document.getElementById('result-par').innerText = "Form scorretto";
        ev.preventDefault();
        return;
    }
}