function encriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensagem = document.getElementById("titulo-mensagem");
    let paragrafo = document.getElementById("paragrafo");
    let menino = document.getElementById("menino");

    let textoCifrado = texto
                            .replace(/e/g,"enter")
                            .replace(/i/g,"imes")
                            .replace(/o/g,"ober")
                            .replace(/a/g,"ai")
                            .replace(/u/g,"ufat");

     if( texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensagem.textContent = "Texto encriptado com sucesso!";
        paragrafo.textContent = "";
        menino.src = "./assets/images/correct.png";
     } else{
        menino.src = "./assets/images/menino.png";
        tituloMensagem.textContent = "Nenhuma mensagem encontrada!"
        paragrafo.textContent = "Digite o texto que deseja encriptar ou desencriptar!"
        alert("Deve digitar algum texto!");
     }                   
}
function desencriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensagem = document.getElementById("titulo-mensagem");
    let paragrafo = document.getElementById("paragrafo");
    let menino = document.getElementById("menino");

    let textoCifrado = texto
                            .replace(/enter/g,"e")
                            .replace(/imes/g,"i")
                            .replace(/ai/g,"a")
                            .replace(/ober/g,"o")
                            .replace(/ufat/g,"u");

    if( texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      tituloMensagem.textContent = "Texto desencriptado com sucesso!";
      paragrafo.textContent = "";
      menino.src = "./assets/images/correct.png";
    }else{
        menino.src = "./assets/images/menino.png";
        tituloMensagem.textContent = "Nenhuma mensagem encontrada!"
        paragrafo.textContent = "Digite o texto que deseja encriptar ou desencriptar!"
        alert("Deve digitar algum texto!");
      }
     }