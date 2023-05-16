
const botaoTrocadeTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");


botaoTrocadeTema.addEventListener("click", () => {

    const modoEscuroAtivo = body.classList.
    contains("modo-escuro");

    body.classList.toggle("modo-escuro");

        if (modoEscuroAtivo) {

            //body.classList.remove("modo-escuro");
            imagemBotaoTrocaDeTema.setAttribute("src", "./img/sol.png");

        }else{
                
            // body.classList.add("modo-escuro");
            imagemBotaoTrocaDeTema.setAttribute("src", "./img/lua.png");
        }
  });


