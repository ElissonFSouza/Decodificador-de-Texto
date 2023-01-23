const botaoCripto = document.querySelector("#botao1");
			const botaoDescripto = document.querySelector("#botao2");

			const caixaDeEntrada = document.querySelector(".entrada .texto");
			const caixaDeSaida = document.querySelector(".saida .texto");

			const botaoExecutar = document.querySelector(".entrada button");
			const botaoCopiar = document.querySelector(".saida button");
			const textoAux = document.querySelector(".texto-copiado");

			const caixaDeEntradaImg = document.querySelector(".entrada img");
			const caixaDeSaidaImg = document.querySelector(".saida img"); 

			var modo = true; // (true: criptografar / false: descriptografar)
			var texto = "";

			function criptografar() {
				texto = texto.replace(/e|i|a|o|u/gi, match => {
				  	switch (match) {
					    case "e": return "enter";
					    case "i": return "imes";
					    case "a": return "ai";
					    case "o": return "ober";
					    case "u": return "ufat";
				  	}
				});
			}

			function descriptografar() {
				texto = texto.replace(/ufat|ober|ai|imes|enter/gi, match => {
				  	switch (match.toLowerCase()) {
					    case "ufat": return "u";
					    case "ober": return "o";
					    case "ai": return "a";
					    case "imes": return "i";
					    case "enter": return "e";			        
				  	}
				});
			}

			botaoCripto.onclick = function() {
				botaoCripto.parentNode.classList.add("checked");
	            botaoDescripto.parentNode.classList.remove("checked");

	            caixaDeEntradaImg.src = "Arquivos/aberto.svg";
				caixaDeSaidaImg.src = "Arquivos/fechado.svg";

				modo = true;			
			}

			botaoDescripto.onclick = function() {
				botaoCripto.parentNode.classList.remove("checked");
	            botaoDescripto.parentNode.classList.add("checked");

	            caixaDeEntradaImg.src = "Arquivos/fechado.svg";
				caixaDeSaidaImg.src = "Arquivos/aberto.svg";

				modo = false;
			}

			function esconder() {
				textoAux.innerHTML = "";
			}

			botaoCopiar.onclick = function() {
				if (texto != "") {
					navigator.clipboard.writeText(texto);
				
					textoAux.innerHTML = "Texto copiado!";
					setTimeout(esconder, 3000);
				}
			}

			botaoExecutar.onclick = function() {
				texto = caixaDeEntrada.value.toLowerCase();

				if (modo) criptografar();
				else descriptografar();

				caixaDeSaida.value = texto;
			}	

			botaoCripto.parentNode.classList.add("checked");