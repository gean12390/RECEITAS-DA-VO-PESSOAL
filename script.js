function iniciarEvento(event) {


    if (event.key === 'Enter') {

        let valor = document.getElementById('pesquisa').value.toLowerCase();
        let resposta_1 = document.getElementById('resposta');

        // BOLO DE BANANA
        let bananas = ["banana", "bolo banana", "bolo de banana", "ba", "ba", "ban", "bana", "banan"];
        let bolo_de_banana = `<div class="bolo_banana" id="bolo"><a href="#"><img src="fotos/banana.jpg"><p>Bolo de Banana</p></a></div>`;

        // BOLO DE MACA
        let macas = ["maca", "maça", "maçã", "bolo de maca", "bolo de maça", "bolo de maçã", "bolo maça", "bolo maça", "bolo maçã", "m", "ma", "mac"];
        let bolo_de_maca = `<div class="bolo_maca" id="maca"><a href="#"><img src="fotos/maca.jpg"><p>Bolo de maçã</p></a></div>`;


        let bolo = ["bolo", "b", "bo", "bol", "bolos"];

        // ARRAYS
        let elementos = [bolo_de_banana, bolo_de_maca];

        if (valor === "") {
        } else if (bananas.includes(valor)) {
            resposta_1.innerHTML = elementos[0];
        } else if (macas.includes(valor)) {
            resposta_1.innerHTML = elementos[1].replace("bolo_maca", "bolo_1");
        } else if (bolo.includes(valor)) {
            resposta_1.innerHTML = elementos[0] + elementos[1].replace("bolo_maca", "bolo_2");
        } else {
            resposta_1.innerHTML = `nao foi possivel encontrar`;
        }
    }
}