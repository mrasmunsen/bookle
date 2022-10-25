let filtroFiccionNoFiccion = document.getElementById("filtroCompras");
let gralProductos = document.getElementById("linkproductos");

// anotación: el getElementsByClassName funciona solo con un for...of
//---------------------------------------------------------
//pruebas para ver porq este pequeño hijo de dios no me andaba
// let todosFiltros = document.getElementById("todosFiltros");

// const mostrarPublicacion = () => {
//     result = 2 + 3;
//     alert(result);
// }

// todosFiltros.addEventListener("click", mostrarPublicacion)
//mostrarPublicacion();
//-----------------------------------------------------------

let policiales = document.getElementById("policiales");
let romance = document.getElementById("romance");
let historico = document.getElementById("historico");
let terror = document.getElementById("terror");
let thriller = document.getElementById("thriller");
let fantasia = document.getElementById("fantasia");
let cienciaFiccion = document.getElementById("cienciaFiccion");
let narrativa = document.getElementById("narrativa");
let autoayuda = document.getElementById("autoayuda");
let adminEmpresa = document.getElementById("adminEmpresa");
let divulgacion = document.getElementById("divulgacion");
let historia = document.getElementById("historia");
let espiritualidadReligion = document.getElementById("espiritualidadReligion");
let filosofia = document.getElementById("filosofia");
let biografia = document.getElementById("biografia");
let cienciasMedicas = document.getElementById("cienciasMedicas");
let cienciasSociales = document.getElementById("cienciasSociales");
let cienciasEconomicas = document.getElementById("cienciasEconomicas");
let cienciasJuridicas = document.getElementById("cienciasJuridicas");
let idiomas = document.getElementById("idiomas");
let limpiarFiltros = document.getElementById("limpiarFiltros");


function mostrarPoliciales() {
    const publiPoliciales = document.getElementsByClassName("policiales");
    if(policiales.checked == true){
        for (const publiPolicialesInd of publiPoliciales){
            publiPolicialesInd.style.display = "flex";
        }
    }else{
        for (const publiPolicialesInd of publiPoliciales){
            publiPolicialesInd.style.display = "none";
        }
    }
    
}
policiales.addEventListener("input", mostrarPoliciales);
policiales.checked = true;
mostrarPoliciales();



function mostrarRomance() {
    const publiRomance = document.getElementsByClassName("romance");
    if(romance.checked == true){
        for (const publiRomanceInd of publiRomance){
            publiRomanceInd.style.display = "flex";
        }
    }else{
        for (const publiRomanceInd of publiRomance){
            publiRomanceInd.style.display = "none";
        }
    }
    
}
romance.addEventListener("input", mostrarRomance);
romance.checked = true;
mostrarRomance();

function mostrarHistorico() {
    const publiHistorico = document.getElementsByClassName("historico");
    if(historico.checked == true){
        for (const publiHistoricoInd of publiHistorico){
            publiHistoricoInd.style.display = "flex";
        }
    }else{
        for (const publiHistoricoInd of publiHistorico){
            publiHistoricoInd.style.display = "none";
        }
    }
    
}
historico.addEventListener("input", mostrarHistorico);
historico.checked = true;
mostrarHistorico();

function mostrarTerror() {
    const publiTerror = document.getElementsByClassName("terror");
    if(terror.checked == true){
        for (const publiTerrorInd of publiTerror){
            publiTerrorInd.style.display = "flex";
        }
    }else{
        for (const publiTerrorInd of publiTerror){
            publiTerrorInd.style.display = "none";
        }
    }
}
terror.addEventListener("input", mostrarTerror);
terror.checked = true;
mostrarTerror();

function mostrarThriller() {
    const publiThriller = document.getElementsByClassName("thriller");
    if(thriller.checked == true){
        for (const publiThrillerInd of publiThriller){
            publiThrillerInd.style.display = "flex";
        }
    }else{
        for (const publiThrillerInd of publiThriller){
            publiThrillerInd.style.display = "none";
        }
    }
}
thriller.addEventListener("input", mostrarTerror);
thriller.checked = true;
mostrarTerror();

function mostrarFantasia() {
    const publiFantasia = document.getElementsByClassName("fantasia");
    if(fantasia.checked == true){
        for (const publiFantasiaInd of publiFantasia){
            publiFantasiaInd.style.display = "flex";
        }
    }else{
        for (const publiFantasiaInd of publiFantasia){
            publiFantasiaInd.style.display = "none";
        }
    }
}
fantasia.addEventListener("input", mostrarFantasia);
fantasia.checked = true;
mostrarFantasia();

function mostrarCienciaFiccion() {
    const publiCienciaFiccion = document.getElementsByClassName("cienciaFiccion");
    if(cienciaFiccion.checked == true){
        for (const publiCienciaFiccionInd of publiCienciaFiccion){
            publiCienciaFiccionInd.style.display = "flex";
        }
    }else{
        for (const publiCienciaFiccionInd of publiCienciaFiccion){
            publiCienciaFiccionInd.style.display = "none";
        }
    }
}
cienciaFiccion.addEventListener("input", mostrarFantasia);
cienciaFiccion.checked = true;
mostrarFantasia();

function mostrarNarrativa() {
    const publiNarrativa = document.getElementsByClassName("narrativa");
    if(narrativa.checked == true){
        for (const publiNarrativaInd of publiNarrativa){
            publiNarrativaInd.style.display = "flex";
        }
    }else{
        for (const publiNarrativaInd of publiNarrativa){
            publiNarrativaInd.style.display = "none";
        }
    }
}
narrativa.addEventListener("input", mostrarNarrativa);
narrativa.checked = true;
mostrarNarrativa();

function mostrarAutoayuda() {
    const publiAutoayuda = document.getElementsByClassName("autoayuda");
    if(autoayuda.checked == true){
        for (const publiAutoayudaInd of publiAutoayuda){
            publiAutoayudaInd.style.display = "flex";
        }
    }else{
        for (const publiAutoayudaInd of publiAutoayuda){
            publiAutoayudaInd.style.display = "none";
        }
    }
}
autoayuda.addEventListener("input", mostrarAutoayuda);
autoayuda.checked = true;
mostrarAutoayuda();

function mostrarAdminEmpresa() {
    const publiAdminEmpresa = document.getElementsByClassName("adminEmpresa");
    if(adminEmpresa.checked == true){
        for (const publiAdminEmpresaInd of publiAdminEmpresa){
            publiAdminEmpresaInd.style.display = "flex";
        }
    }else{
        for (const publiAdminEmpresaInd of publiAdminEmpresa){
            publiAdminEmpresaInd.style.display = "none";
        }
    }
}
adminEmpresa.addEventListener("input", mostrarAdminEmpresa);
adminEmpresa.checked = true;
mostrarAutoayuda();

function mostrarDivulgacion() {
    const publiDivulgacion = document.getElementsByClassName("divulgacion");
    if(divulgacion.checked == true){
        for (const publiDivulgacionInd of publiDivulgacion){
            publiDivulgacionInd.style.display = "flex";
        }
    }else{
        for (const publiDivulgacionInd of publiDivulgacion){
            publiDivulgacionInd.style.display = "none";
        }
    }
}
divulgacion.addEventListener("input", mostrarDivulgacion);
divulgacion.checked = true;
mostrarDivulgacion();

function mostrarHistoria() {
    const publiHistoria = document.getElementsByClassName("historia");
    if(historia.checked == true){
        for (const publiHistoriaInd of publiHistoria){
            publiHistoriaInd.style.display = "flex";
        }
    }else{
        for (const publiHistoriaInd of publiHistoria){
            publiHistoriaInd.style.display = "none";
        }
    }
}
historia.addEventListener("input", mostrarHistoria);
historia.checked = true;
mostrarHistoria();

function mostrarEspiritualidadReligion() {
    const publiEspiritualidadReligion = document.getElementsByClassName("espiritualidadReligion");
    if(espiritualidadReligion.checked == true){
        for (const publiEspiritualidadReligionInd of publiEspiritualidadReligion){
            publiEspiritualidadReligionInd.style.display = "flex";
        }
    }else{
        for (const publiEspiritualidadReligionInd of publiEspiritualidadReligion){
            publiEspiritualidadReligionInd.style.display = "none";
        }
    }
}
espiritualidadReligion.addEventListener("input", mostrarEspiritualidadReligion);
espiritualidadReligion.checked = true;
mostrarEspiritualidadReligion();

function mostrarFilosofia() {
    const publiFilosofia = document.getElementsByClassName("filosofia");
    if(filosofia.checked == true){
        for (const publiFilosofiaInd of publiFilosofia){
            publiFilosofiaInd.style.display = "flex";
        }
    }else{
        for (const publiFilosofiaInd of publiFilosofia){
            publiFilosofiaInd.style.display = "none";
        }
    }
}
filosofia.addEventListener("input", mostrarFilosofia);
filosofia.checked = true;
mostrarFilosofia();

function mostrarBiografia() {
    const publiBiografia = document.getElementsByClassName("biografia");
    if(biografia.checked == true){
        for (const publiBiografiaInd of publiBiografia){
            publiBiografiaInd.style.display = "flex";
        }
    }else{
        for (const publiBiografiaInd of publiBiografia){
            publiBiografiaInd.style.display = "none";
        }
    }
}
biografia.addEventListener("input", mostrarBiografia);
biografia.checked = true;
mostrarBiografia();

function mostrarCienciasMedicas() {
    const publiCienciasMedicas = document.getElementsByClassName("cienciasMedicas");
    if(cienciasMedicas.checked == true){
        for (const publiCienciasMedicasInd of publiCienciasMedicas){
            publiCienciasMedicasInd.style.display = "flex";
        }
    }else{
        for (const publiCienciasMedicasInd of publiCienciasMedicas){
            publiCienciasMedicasInd.style.display = "none";
        }
    }
}
cienciasMedicas.addEventListener("input", mostrarCienciasMedicas);
cienciasMedicas.checked = true;
mostrarCienciasMedicas();

function mostrarCienciasSociales() {
    const publiCienciasSociales = document.getElementsByClassName("cienciasSociales");
    if(cienciasSociales.checked == true){
        for (const publiCienciasSocialesInd of publiCienciasSociales){
            publiCienciasSocialesInd.style.display = "flex";
        }
    }else{
        for (const publiCienciasSocialesInd of publiCienciasSociales){
            publiCienciasSocialesInd.style.display = "none";
        }
    }
}
cienciasSociales.addEventListener("input", mostrarCienciasSociales);
cienciasSociales.checked = true;
mostrarCienciasSociales();

function mostrarCienciasEconomicas() {
    const publiCienciasEconomicas = document.getElementsByClassName("cienciasEconomicas");
    if(cienciasEconomicas.checked == true){
        for (const publiCienciasEconomicasInd of publiCienciasEconomicas){
            publiCienciasEconomicasInd.style.display = "flex";
        }
    }else{
        for (const publiCienciasEconomicasInd of publiCienciasEconomicas){
            publiCienciasEconomicasInd.style.display = "none";
        }
    }
}
cienciasEconomicas.addEventListener("input", mostrarCienciasEconomicas);
cienciasEconomicas.checked = true;
mostrarCienciasEconomicas();

function mostrarCsJuridicas() {
    const publiCsJuridicas = document.getElementsByClassName("cienciasJuridicas");
    if(cienciasJuridicas.checked == true){
        for (const publiCsJuridicasInd of publiCsJuridicas){
            publiCsJuridicasInd.style.display = "flex";
        }
    }else{
        for (const publiCsJuridicasInd of publiCsJuridicas){
            publiCsJuridicasInd.style.display = "none";
        }
    }
    
}
cienciasJuridicas.addEventListener("input", mostrarCsJuridicas);
cienciasJuridicas.checked = true;
mostrarCsJuridicas();

function mostrarIdiomas() {
    const publiIdiomas = document.getElementsByClassName("idiomas");
    if(idiomas.checked == true){
        for (const publiIdiomasInd of publiIdiomas){
            publiIdiomasInd.style.display = "flex";
        }
    }else{
        for (const publiIdiomasInd of publiIdiomas){
            publiIdiomasInd.style.display = "none";
        }
    }
}
idiomas.addEventListener("input", mostrarIdiomas);
idiomas.checked = true;
mostrarIdiomas();

const buttonEnviarComent = document.getElementById("enviarComent");
function enviarComent(){
    alert("¡Muchas gracias por tu feedback! Lo tendremos en cuenta.")
}
buttonEnviarComent.addEventListener("click", enviarComent);

// function limpiarFiltrosGen(){
//     const filtrosGen = document.getElementsByClassName("filtroCompras");
//     for (const filtroInd of filtrosGen){
//         if(filtroInd.type == "checkbox"){
//             filtroInd.checked = "false";
//         }
//     }
// }

// limpiarFiltros.addEventListener("click", limpiarFiltrosGen);


//----------------------------------------------------------
// let noTodosFiltros = document.getElementById("noTodosFiltros");
//let todosFiltros = document.getElementById("todosFiltros");
// const checkAllFiltros = () =>{
//         for(let i=0; i<filtroFiccionNoFiccion.length; i++){
//             if(filtroFiccionNoFiccion[i].type=='checkbox'){
//                 filtroFiccionNoFiccion[i].checked=true;
//             }
//         }
// }
// const uncheckAllFiltros = () => {
//     for(let i=0; i< filtroFiccionNoFiccion.length; i++){
//         if(filtroFiccionNoFiccion[i].type =='checkbox'){
//             filtroFiccionNoFiccion[i].checked = false;
//         }
//     }
// }

// todosFiltros.addEventListener("click", checkAllFiltros);
// noTodosFiltros.addEventListener("click", uncheckAllFiltros);
