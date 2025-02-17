const words = [
    "mesa", "silla", "cama", "puerta", "ventana", "pared", "suelo", "techo", "lámpara", "espejo",
    "cuadro", "reloj", "teléfono", "televisor", "radio", "ordenador", "móvil", "cámara", "libro", "cuaderno",
    "lápiz", "bolígrafo", "papel", "tijeras", "pegamento", "caja", "botella", "vaso", "plato", "cuchara",
    "tenedor", "cuchillo", "olla", "sartén", "nevera", "horno", "microondas", "lavadora", "secadora", "plancha",
    "cepillo", "peine", "esponja", "toalla", "jabón", "champú", "perfume", "maquillaje", "ropa", "zapato",
    "sombrero", "guantes", "bufanda", "paraguas", "llave", "candado", "cerradura", "martillo", "destornillador",
    "alicate", "clavo", "tornillo", "tuerca", "arandela", "cuerda", "soga", "cadena", "manta", "almohada",
    "sábana", "colcha", "edredón", "cortina", "alfombra", "mueble", "estantería", "armario", "cómoda", "cajón",
    "estufa", "chimenea", "radiador", "ventilador", "balón", "pelota", "raqueta", "bate", "palo", "guante",
    "casco", "gorra", "gafas", "anillo", "collar", "pulsera", "pendientes", "moneda", "billete", "tarjeta",
    "ticket", "entrada", "pasaporte", "maleta", "bolsa", "mochila", "maletín", "bastón", "muleta", "bicicleta",
    "moto", "coche", "autobús", "tren", "avión", "barco", "submarino", "helicóptero", "cohete", "satélite",
    "telescopio", "microscopio", "prismáticos", "brújula", "mapa", "globo", "bandera", "escudo", "arma", "espada",
    "pistola", "rifle", "escopeta", "bomba", "granada", "misil", "flecha", "arco", "lanza", "armadura",
    "yelmo", "linterna", "mechero", "cerillas", "vela", "faro", "semáforo", "señal", "letrero", "pizarra",
    "pincel", "lienzo", "caballete", "escultura", "estatua", "monumento", "fuente", "banco", "farola", "papelera",
    "buzón", "valla", "verja", "puente", "túnel", "carretera", "camino", "sendero", "escalera", "ascensor",
    "grúa", "excavadora", "tractor", "camión", "furgoneta", "ambulancia", "globo", "cometa", "molino", "presa",
    "dique", "tubería", "cable", "enchufe", "interruptor", "bombilla", "foco", "altavoz", "micrófono", "auriculares",
    "disco", "cinta", "memoria", "impresora", "escáner", "fax", "fotocopiadora", "calculadora", "báscula", "termómetro",
    "barómetro", "cronómetro", "cruz", "estrella", "luna", "sol", "nube", "arcoíris", "copo", "gota",
    "hoja", "flor", "rama", "tronco", "raíz", "piedra", "roca", "montaña", "colina", "valle", "río",
    "lago", "mar", "océano", "isla", "península", "cabo", "playa", "desierto", "selva", "bosque",
    "pradera", "cueva", "volcán", "cráter", "planeta", "asteroide", "galaxia", "universo", "átomo", "molécula",
    "célula", "tejido", "órgano", "esqueleto", "músculo", "nervio", "cerebro", "corazón", "pulmón", "riñón",
    "hígado", "estómago", "intestino", "piel", "pelo", "uña", "diente", "lengua", "ojo", "nariz",
    "oreja", "mano", "pie", "dedo", "rodilla", "codo", "hombro", "cuello", "cabeza", "cara", "cuerpo",
    "sombra", "eco", "reflejo", "holograma", "espectro", "fantasma", "sirena", "dragón", "unicornio", "fénix",
    "grifo", "centauro", "minotauro", "cíclope", "medusa", "kraken", "leviatán", "basilisco", "quimera", "gárgola",
    "esfinge", "hada", "duende", "gnomo", "trol", "ogro", "gigante", "titán", "robot", "androide",
    "cyborg", "mutante", "alienígena", "nave", "rayo", "campo", "teletransportador", "máquina", "varita", "poción",
    "hechizo", "conjuro", "amuleto", "talismán", "reliquia", "tesoro", "botín", "joya", "diamante", "rubí",
    "zafiro", "esmeralda", "perla", "oro", "plata", "bronce", "hierro", "acero", "madera", "vidrio",
    "plástico", "tela", "cuero", "cartón", "metal", "cemento", "ladrillo", "teja", "paja", "adobe",
    "barro", "arena", "sal", "azúcar", "harina", "arroz", "pasta", "pan", "leche", "huevo",
    "queso", "mantequilla", "aceite", "vinagre", "salsa", "especia", "hierba", "fruta", "verdura", "carne",
    "pescado", "marisco", "dulce", "caramelo", "chocolate", "galleta", "helado", "pastel", "tarta", "bebida",
    "zumo", "refresco", "vino", "cerveza", "licor", "cóctel", "café", "té", "infusión", "cigarrillo",
    "pipa", "puro", "tabaco", "fósforo", "encendedor", "cenicero", "silla", "estribo", "rienda", "látigo",
    "herradura", "yunque", "tenazas", "fuelle", "rueda", "engranaje", "polea", "palanca", "tornillo",
    "resorte", "válvula", "pistón", "biela", "cigüeñal", "volante", "rodamiento", "correa", "manguera", "grifo",
    "alcantarilla", "pozo", "cascada", "estanque", "charca", "pantano", "marisma", "acantilado", "duna", "oasis",
    "glaciar", "iceberg", "fábrica", "estadio", "teatro", "museo", "iglesia", "mezquita", "sinagoga",
    "templo", "palacio", "castillo", "fortaleza", "torre", "puerto", "aeropuerto", "mercado", "tienda",
    "supermercado", "farmacia", "hospital", "escuela", "universidad", "biblioteca", "oficina", "banco", "restaurante",
    "cafetería", "hotel", "chalet", "cabaña", "refugio", "cráter"
  ]
  //TODO: Hacer un random number y acceder al indice de forma random para obtener las 25 palabras, tambien verificar que ese indice no se repita (para que sean siempre palabras distintas)

  function createGame(){
    return new Promise(function (resolve, reject) {
        var cardIndex = []
        var cards = []
        var colorCards = [];
        for (var i = 0; i < 25; i++) {
            var singleIndex = getRandomNumber(words.length)

            while (cardIndex.includes(singleIndex)) {
                singleIndex = getRandomNumber(words.length);
            }

            cardIndex.push(singleIndex)
            cards.push(
                {
                    word: words[singleIndex],
                    color: "neutral",
                    selected: false
                })
        }

        for (var red = 0; red < 9; red++) {
            var singleIndex = getRandomNumber(cards.length)

            cards[singleIndex].color = "red"; //red
            colorCards.push(cards[singleIndex]);
            cards.splice(singleIndex, 1);
        }

        for (var blue = 0; blue < 8; blue++) {
            var singleIndex = getRandomNumber(cards.length)

            cards[singleIndex].color = "blue"; //blue
            colorCards.push(cards[singleIndex]);
            cards.splice(singleIndex, 1);
        }

        var bombIndex = getRandomNumber(cards.length)
        cards[bombIndex].color = "black";

        var cardsFinal = cards.concat(colorCards);
        cardsFinal = shuffle(cardsFinal);

        resolve(cardsFinal);
    });
  }

  function shuffle(array){ //algoritmo de fisher-yates
    var currentIndex = array.length;
    var temporaryValue;
    var randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
  }

  function getRandomNumber(max){
    return Math.floor(Math.random() * Math.floor(max));
  }

  module.exports = {
    createGame
  };