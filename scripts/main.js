const cards = [
    { number: 1, name: "El Gallo", image: "el-gallo.webp" },
    { number: 2, name: "El Diablo", image: "el-diablito.webp" },
    { number: 3, name: "La Dama", image: "la-dama.webp" },
    { number: 4, name: "El Catrín", image: "el-catrin.webp" },
    { number: 5, name: "El Paraguas", image: "el-paraguas.webp" },
    { number: 6, name: "La Sirena", image: "la-sirena.webp" },
    { number: 7, name: "La Escalera", image: "la-escalera.webp" },
    { number: 8, name: "El Botella", image: "la-botella.webp" },
    { number: 9, name: "El Barril", image: "el-barril.webp" },
    { number: 10, name: "El Arbol", image: "el-arbol.webp" },
    { number: 11, name: "El Melon", image: "el-melon.webp" },
    { number: 12, name: "El Valiente", image: "el-valiente.webp" },
    { number: 13, name: "El Gorrito", image: "el-gorrito.webp" },
    { number: 14, name: "La Muerte", image: "la-muerte.webp" },
    { number: 15, name: "La Pera", image: "la-pera.webp" },
    { number: 16, name: "La Bandera", image: "la-bandera.webp" },
    { number: 17, name: "El Bandolon", image: "el-bandolon.webp" },
    { number: 18, name: "El Violoncello", image: "el-violoncello.webp" },
    { number: 19, name: "La Garza", image: "la-garza.webp" },
    { number: 20, name: "El Pajaro", image: "el-pajaro.webp" },
    { number: 21, name: "La Mano", image: "la-mano.webp" },
    { number: 22, name: "La Bota", image: "la-bota.webp" },
    { number: 23, name: "La Luna", image: "la-luna.webp" },
    { number: 24, name: "El Cotorro", image: "el-cotorro.webp" },
    { number: 25, name: "El Borracho", image: "el-borracho.webp" },
    { number: 26, name: "El Negrito", image: "el-negrito.webp" },
    { number: 27, name: "El Corazon", image: "el-corazon.webp" },
    { number: 28, name: "La Sandia", image: "la-sandia.webp" },
    { number: 29, name: "El Tambor", image: "el-tambor.webp" },
    { number: 30, name: "El Camaron", image: "el-camaron.webp" },
    { number: 31, name: "Las Jaras", image: "las-jaras.webp" },
    { number: 32, name: "El Musico", image: "el-musico.webp" },
    { number: 33, name: "La Arana", image: "la-arana.webp" },
    { number: 34, name: "El Soldado", image: "el-soldado.webp" },
    { number: 35, name: "La Estrella", image: "la-estrella.webp" },
    { number: 36, name: "El Cazo", image: "el-cazo.webp" },
    { number: 37, name: "El Mundo", image: "el-mundo.webp" },
    { number: 38, name: "El Apache", image: "el-apache.webp" },
    { number: 39, name: "El Nopal", image: "el-nopal.webp" },
    { number: 40, name: "El Alacran", image: "el-alacran.webp" },
    { number: 41, name: "La Rosa", image: "la-rosa.webp" },
    { number: 42, name: "La Calavera", image: "la-calavera.webp" },
    { number: 43, name: "La Campana", image: "la-campana.webp" },
    { number: 44, name: "El Cantarito", image: "el-cantarito.webp" },
    { number: 45, name: "El Venado", image: "el-venado.webp" },
    { number: 46, name: "El Sol", image: "el-sol.webp" },
    { number: 47, name: "La Corona", image: "la-corona.webp" },
    { number: 48, name: "La Chalupa", image: "la-chalupa.webp" },
    { number: 49, name: "El Pino", image: "el-pino.webp" },
    { number: 50, name: "El Pescado", image: "el-pescado.webp" },
    { number: 51, name: "La Palma", image: "la-palma.webp" },
    { number: 52, name: "La Maceta", image: "la-maceta.webp" },
    { number: 53, name: "El Arpa", image: "el-arpa.webp" },
    { number: 54, name: "La Rana", image: "la-rana.webp" },
  ];
  

let myButton = document.getElementById("playButton");
let infoButton = document.getElementById("infoButton");
let startingDeck = cards;
let discardPile = [];
let intervalId;
let showModal = true;
let modal = document.getElementById("body");

myButton.onclick = function() {
    myButton.disabled = true;
    myButton.innerHTML = "Pause";
    intervalId = setInterval(pullCard, 2000);
}


function pullCard () {
    if (startingDeck.length === 0) {
        clearInterval(intervalId);
        document.getElementById("currentCard").src = "assets/staticCards/game-over.webp";
        intervalId = null;
        startingDeck = cards;
        myButton.disabled = false;
        myButton.innerHTML = "Play Again";
        discardPile = [];
        return;
    }
    
    const randomNum = Math.floor(Math.random() * startingDeck.length);
    const currentCard = startingDeck[randomNum];
    const newDeck = startingDeck.filter((card) => card !== currentCard);
    
    startingDeck = newDeck;
    
    discardPile.push(currentCard);
    renderDiscardPile();
    document.getElementById("currentCard").src = "/assets/" + currentCard.image;
    readCard(currentCard.name);
}

function renderDiscardPile () {
    const historyContainer = document.getElementById("discardPile");
    historyContainer.innerHTML = "";

    discardPile
        .filter((pastCard) => pastCard !== currentCard)
        .reverse()
        .forEach((pastCard) => {
            const pastImg = document.createElement("img");
            pastImg.src = "/assets/" + pastCard.image;
            pastImg.alt = pastCard.name;
            pastImg.width = 78; 
            pastImg.height = 112;
            pastImg.style.borderRadius = "7px";
            pastImg.style.margin = "3px";
            pastImg.style.opacity = "0.9";

            historyContainer.appendChild(pastImg);
        });
}


function readCard(cardName) {
    let utterance = new SpeechSynthesisUtterance(cardName);
    console.log(utterance);
    speechSynthesis.speak(utterance);
}