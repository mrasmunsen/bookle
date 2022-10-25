const buttonAgregarPubli = document.getElementById("agregarPubli");
const formsAgregarPubli = document.getElementById("formsAgregarPubli");
const buttonCancelNew = document.getElementById("cancelNewTitulo");
const buttonSubmit = document.getElementById("submitNewTitulo");
const buttonEnviarComent = document.getElementById("enviarComent");

function agregarPubli(){
    formsAgregarPubli.style.display = "block";
}
buttonAgregarPubli.addEventListener("click", agregarPubli);

function cancelarPubli(){
    if(confirm("¿Estás segurx de que querés cancelar?") == true){
        formsAgregarPubli.style.display = "none";
    }
}
buttonCancelNew.addEventListener("click", cancelarPubli);

const tituloDefinitivo = document.getElementById("tituloDefinitivo");
const formTituloLibro = document.getElementById("tituloLibro");
const precioDefinitivo = document.getElementById("precioDefinitivo");
const formPrecioLibro = document.getElementById("precioLibro");
const imgDefinitiva = document.getElementById("imgDefinitiva");
// const formImgLibro = document.getElementById("imgLibro");



// debugger

// const input = document.querySelector('input[type="file"]');

// function e(){
// console.log(input.files);
// const reader = new FileReader();
// reader.onload = function(){
//     const img = new Image();
//     img.src = reader.result;
//     document.body.appendChild(img);
// }
// reader.readAsDataURL(input.files[0]);
// }
// input.addEventListener("change", e(), false);


function submitPubli(){
    tituloDefinitivo.innerText = formTituloLibro.value;
    // imgDefinitiva.innerText = formImgLibro.value;
    precioDefinitivo.innerText = formPrecioLibro.value;
    formsAgregarPubli.style.display = "none";
    const publicacionSubida = document.getElementById("publicacionSubida");
    publicacionSubida.style.display = "flex";
}
buttonSubmit.addEventListener("click", submitPubli);

function enviarComent(){
    alert("¡Muchas gracias por tu feedback! Lo tendremos en cuenta.")
}
buttonEnviarComent.addEventListener("click", enviarComent);