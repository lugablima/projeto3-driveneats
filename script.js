function selecionarPrato (elemento) {
    const selecionado = document.querySelector(".categoria").querySelector(".selecionado");

    if (selecionado !== null) {
        selecionado.classList.remove("selecionado");
        selecionado.querySelector("ion-icon").classList.add("apagar");
    }

    elemento.classList.add("selecionado");
    elemento.querySelector("ion-icon").classList.remove("apagar");
    fecharPedido();
}

function selecionarBebida (elemento) {
    const selecionado = document.querySelector(".categoria:nth-child(2)").querySelector(".selecionado");
    
    if (selecionado !== null) {
        selecionado.classList.remove("selecionado");
        selecionado.querySelector("ion-icon").classList.add("apagar");
    }

    elemento.classList.add("selecionado");
    elemento.querySelector("ion-icon").classList.remove("apagar");
    fecharPedido();
}

function selecionarSobremesa(elemento) {
    const selecionado = document.querySelector(".categoria:last-child").querySelector(".selecionado");

    if (selecionado !== null) {
        selecionado.classList.remove("selecionado");
        selecionado.querySelector("ion-icon").classList.add("apagar");
    }

    elemento.classList.add("selecionado");
    elemento.querySelector("ion-icon").classList.remove("apagar");
    fecharPedido();
}

function fecharPedido () {
    const prato = document.querySelector(".categoria").querySelector(".selecionado");
    const bebida = document.querySelector(".categoria:nth-child(2)").querySelector(".selecionado");
    const sobremesa = document.querySelector(".categoria:last-child").querySelector(".selecionado");   
    
    if ((prato !== null) && (bebida !== null) && (sobremesa !== null)) {
        document.querySelector("button:first-child").classList.add("apagar");
        document.querySelector(".fechar-pedido").classList.remove("apagar");
    }
}

function confirmarPedido() {
    const nome = prompt("Qual é o seu nome?");
    const endereco = prompt("Qual é o seu endereço?");
    
    const prato = document.querySelector(".categoria").querySelector(".selecionado").querySelector("h5").innerText;
    const valorPrato = document.querySelector(".categoria").querySelector(".selecionado").querySelector("span").innerText;
    const bebida = document.querySelector(".categoria:nth-child(2)").querySelector(".selecionado").querySelector("h5").innerText;
    const valorBebida = document.querySelector(".categoria:nth-child(2)").querySelector(".selecionado").querySelector("span").innerText;
    const sobremesa = document.querySelector(".categoria:last-child").querySelector(".selecionado").querySelector("h5").innerText;  
    const valorSobremesa = document.querySelector(".categoria:last-child").querySelector(".selecionado").querySelector("span").innerText;

    document.querySelector(".esquerda").querySelector("h6:first-child").innerText = prato;
    document.querySelector(".direita").querySelector("h6:first-child").innerText = valorPrato;
    document.querySelector(".esquerda").querySelector("h6:nth-child(2)").innerText = bebida;
    document.querySelector(".direita").querySelector("h6:nth-child(2)").innerText = valorBebida;
    document.querySelector(".esquerda").querySelector("h6:nth-child(3)").innerText = sobremesa;
    document.querySelector(".direita").querySelector("h6:nth-child(3)").innerText = valorSobremesa;    

    let valorTotal = Number(valorPrato) + Number(valorBebida) + Number(valorSobremesa);
    valorFinal = valorTotal.toFixed(2);

    document.querySelector(".direita").querySelector("h6:last-child").innerText = `R$ ${valorFinal}`;  

    const mensagem = `Olá, gostaria de fazer o pedido: \n- Prato: ${prato}\n- Bebida: ${bebida}\n- Sobremesa: ${sobremesa}\nTotal: R$ ${valorFinal}\n\nNome: ${nome}\nEndereço: ${endereco}`;
    
    const mensagemURI = encodeURIComponent(mensagem); 

    const linkWhats = `<a href="https://wa.me/5516981641102?text=${mensagemURI}" target="_blank"><button class="negrito">Tudo certo, pode pedir!</button></a>`; 

    document.querySelector(".inserir-link").innerHTML = linkWhats;

    document.querySelector(".tela-branca").classList.remove("apagar");
    // document.querySelector(".barra-topo").classList.add("apagar");
    // document.querySelector(".barra-enviar").classList.add("apagar");    
}

function cancelar() {
    document.querySelector(".tela-branca").classList.add("apagar");
}