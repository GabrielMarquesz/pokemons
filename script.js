

// passo 1 - pegar o elemento html q vai trocar o tema (botao)
//passo 2- pegar o body do html
//pegar a imagem para fazer a troca
//passo 3 - identificar o clique ao apertar no botao
        //passo 4 - alterar o tema (alterar o body)
        //passo 5 - trocar a imagem

//passo6 - remover a classe do modo-escuro do body
//passo6 - remover a classe do modo-escuro do body

//passo 7- remover



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


