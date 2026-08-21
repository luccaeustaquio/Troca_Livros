const nomeEntrada = document.getElementById("entrada_Nome")
const nomeSaida = document.getElementById("nome_Saida")
const btnTroca = document.getElementById("btn_Troca")


btnTroca.addEventListener('click', () => {
    nomeSaida.innerText = nomeEntrada.value;
})


btnTroca.addEventListener('mouseenter', () => {
    nomeSaida.innerText = nomeEntrada.value;
    
})


btnTroca.addEventListener('mouseup', () => {
    nomeSaida.innerText = nomeEntrada.value;
})


btnTroca.addEventListener('mouseup', () => {
    nomeSaida.innerText = nomeEntrada.value;
})

const btn_Azul2 = document.getElementById("btn_Azul")
const btn_Verde2 = document.getElementById("btn_Verde")
const btn_Amarelo2 = document.getElementById("btn_amarelo")
const caixa = document.getElementById("caixa")

btn_Azul2.addEventListener('click', function(){
  caixa.style.backgroundColor = "blue";
})

btn_Verde2.addEventListener('click', function(){
  caixa.style.backgroundColor = "green";
})

 btn_Amarelo2.addEventListener('click', function(){
  caixa.style.backgroundColor = "yellow";
})

