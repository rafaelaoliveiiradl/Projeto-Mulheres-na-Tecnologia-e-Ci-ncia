
const formulario = document.getElementById("meuFormulario");
const resultadoDiv = document.getElementById("resultado");
const letrasPermitidas = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ áàâãéèêíïóôõöúçÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇ";


formulario.addEventListener("submit", function(event) {
   
    event.preventDefault();

  
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const idade = document.getElementById("idade").value;

    let nomeValido = true;

    if (nome.trim() === "") {
        nomeValido = false;
    }

   
    for (let i = 0; i < nome.length; i++) {
        const caractere = nome[i];
   
        if (!letrasPermitidas.includes(caractere)) {
            nomeValido = false;
            break; 
        }
    }

   
    if (nomeValido === false) {
        resultadoDiv.style.display = "block";
        resultadoDiv.innerHTML = `<p style="color: #dc2626;"><strong>Atenção:</strong> Por favor, digite um nome válido apenas com letras!</p>`;
        return;
    } 

    const opcoesSelecionadas = document.querySelectorAll('input[name="interesse"]:checked');

   
    if (opcoesSelecionadas.length === 0) {
        resultadoDiv.style.display = "block";
        resultadoDiv.innerHTML = `<p style="color: #dc2626;"><strong>Atenção:</strong> Por favor, selecione pelo menos uma área de interesse!</p>`;
        return;
    }

    let mensagemHTML = `<p>Olá, <strong>${nome}</strong> (${idade} anos)! Enviamos o guia completo para o e-mail: <em>${email}</em>.</p>`;
    mensagemHTML += `<p>Com base nas áreas selecionadas, aqui estão suas recomendações:</p><ul>`;

    opcoesSelecionadas.forEach(function(opcao) {
        if (opcao.value === "web") {
            mensagemHTML += `<li><strong>Desenvolvimento Web:</strong> Aprenda a tríade básica (HTML5, CSS e JavaScript) na plataforma <em>freeCodeCamp</em>.</li>`;
        } else if (opcao.value === "jogos") {
            mensagemHTML += `<li><strong>Criação de Jogos:</strong> Comece com <em>Scratch</em> para lógica de jogos e evolua para C# com a engine <em>Unity</em>.</li>`;
        } else if (opcao.value === "ia") {
            mensagemHTML += `<li><strong>Inteligência Artificial:</strong> Inicie seus estudos pela linguagem <em>Python</em> e conceitos de análise de dados.</li>`;
        } else if (opcao.value === "apps") {
            mensagemHTML += `<li><strong>Aplicativos Móveis:</strong> Recomendamos aprender <em>JavaScript com React Native</em> ou <em>Dart com Flutter</em>.</li>`;
        }
    });

    mensagemHTML += `</ul>`;

    resultadoDiv.style.display = "block";
    resultadoDiv.innerHTML = mensagemHTML;
});


formulario.addEventListener("reset", function() {
    resultadoDiv.style.display = "none";
    resultadoDiv.innerHTML = "";
});