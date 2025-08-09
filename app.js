// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const inputAmigo = document.getElementById("amigo");
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById('resultado');

let amigos = [];
let cantidadAmigosAgregados = 0;

function mostrarAmigoSecreto(amigoSecreto)
{
    let li = document.createElement('li');
    li.textContent = `El amigo secreto es ${amigoSecreto}`;
    ulResultado.appendChild(li);
}

function agregarAmigo() {


    if (inputAmigo.value != null && inputAmigo.value != "") {
        amigos.push(inputAmigo.value);
        let li = document.createElement('li');
        li.classList.add('li-amigos');
        // li.setAttribute('visibility', 'inherit');
        li.textContent = amigos[cantidadAmigosAgregados];
        ulListaAmigos.appendChild(li);
        cantidadAmigosAgregados++;
        inputAmigo.value = "";
    }
    else
        alert("El campo no puede estar vacio");
}

function sortearAmigo()
{
    let amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
    ulListaAmigos.style.display = 'none';
    mostrarAmigoSecreto(amigoSecreto);
}