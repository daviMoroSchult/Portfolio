// objetivo 1 - quando o usuario clicar no botao de mostrar mais deve abrir os projetos que estao escondidos no hmtml
    // passo 1 - pegar o botao mostrar mais no js pra poder verificar quando o usuario clicar nele
    //passo 2 - identificar o clique do botao 
    // passo 3 - adicionar a classe ativo nos projeto escondidos 

// objetivo 2 - esconder o botao de mostrar mais 
    //passo 1 - pegar o botao e esconder ele
// ....................................................................................................................
    // objetivo 1 - quando o usuario clicar no botao de mostrar mais deve abrir os projetos que estao escondidos no hmtml
    // passo 1 - pegar o botao mostrar mais no js pra poder verificar quando o usuario clicar nele

    var botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
    

    botaoMostrarProjetos.addEventListener("click", () => {
        var projetosInativos = document.querySelectorAll('.projeto:not(.ativo)')
        projetosInativos.forEach(projetoInativo => {
            projetoInativo.classList.add('ativo')
        } );

        //botaoMostrarProjetos.classList.add('remover')
        botaoMostrarProjetos.style.display = 'none'; // Hide the button after clicking
        
    })

    