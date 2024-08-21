let valorAConverter = document.querySelector('#valorAConverter');
let resultado = document.querySelector('.resultado'); 

async function conversaoDeMoeda() {
    let moedaAConverter = document.querySelector('#moedaAConverter').value;
    let url = `https://economia.awesomeapi.com.br/json/last/BRL-${moedaAConverter}`;

    try {
        let resposta = await fetch(url);
        let dados = await resposta.json();
        let dadoConversao = `BRL${moedaAConverter}`;
        let taxaDeCambio = dados[dadoConversao].bid;
        let valorConvertido = valorAConverter.value * taxaDeCambio;
        resultado.innerHTML = `${moedaAConverter} ${valorConvertido.toFixed(2)}`;
    } catch (error) {
        resultado.innerHTML = 'Erro ao obter os dados.';
    }
}
