const atracciones = [{
    dia:"Day 1", atraccionUno:"Big Bus Classic", precioUno: "$59.00",
    atraccionDos:"Empire State Building Obersvatory", precioDos:"$46.00",
    atraccionTres:"Madame Tussauds", precioTres:"$37.00"},
    {dia:"Day 2", atraccionUno:"Best of BYC Cruise by Circle Line", precioUno: "$44.00",
    atraccionDos:"Intrepid Sea, Air, and Space Museum", precioDos:"$33.00",
    atraccionTres:"Edge", precioTres:"$41.00"},
    {dia:"Day 3", atraccionUno:"Statue of Liberty & Ellis Island", precioUno: "$23.50",
    atraccionDos:"One World Observatory", precioDos:"$45.00",
    atraccionTres:"9/11 Memorial & Museum", precioTres:"$28.00"},
    {dia:"Day 4", atraccionUno:"Top of the Rock Observation Deck", precioUno: "$41.00",
    atraccionDos:"Rockefeller Center Tour", precioDos:"$27.00",
    atraccionTres:"St. Patrick's Cathedral Tour", precioTres:"$25.00"},
    {dia:"Day 5", atraccionUno:"The Metropolitan Museum of Art", precioUno: "$25.00",
    atraccionDos:"Central Park Bike Tour", precioDos:"$63.00",
    atraccionTres:"American Museum of Natural History", precioTres:"$23.00"},
    {dia:"Day 6", atraccionUno:"The RIDE", precioUno: "$69.00",
    atraccionDos:"Central Park TV & Movie Sights", precioDos:"$31.00",
    atraccionTres:"Museum of Modern Art", precioTres:"$25.00"},
    {dia:"Day 7", atraccionUno:"Museum of Ice Cream", precioUno: "$48.00",
    atraccionDos:"Greenwich Village Walking Tour", precioDos:"$35.00",
    atraccionTres:"", precioTres:""},
    
];

    for (const atraccion of atracciones) {
        let contenedor = document.createElement("div");

        contenedor.innerHTML = `<div class="col_Atracciones">

                                <div class="averga">
                                <h5>${atraccion.dia}</h5>
                                <ul class="Uno">
                                <li>${atraccion.atraccionUno}</li>
                                <li>${atraccion.atraccionDos}</li>
                                <li>${atraccion.atraccionTres}</li>
                                </ul>
                                <div class="linea"></div>
                                </div>

                                

                                <div class="diaNormal">
                                <h6>Normally:</h6>
                                <ul class="Dos">
                                <li>${atraccion.precioUno}</li>
                                <li>${atraccion.precioDos}</li>
                                <li>${atraccion.precioTres}</li>
                                </ul>
                                </div>
                                </div>
        
        `
        document.getElementById("prueba").appendChild(contenedor);
    }


const lugares = [{
    nombre:"Empire State Building", img:"empireState.jpg", info:"Contempla Manhattan en todo su esplendor desde lo alto del Empire State Building...", precio:"45.73"},
    {nombre:"Mirador Top of the Rock™",  img:"TopOfTheRock.jpg", info:"Disfruta de las vistas panorámica de 360º sobre Nueva York", precio:"43.55"},
    {nombre:"Edge",  img:"Edge.jpg", info:"Admira las impresionantes vistas de Nueva York desde una plataforma de cristal al ai…", precio:"41.37"},
    {nombre:"Museo y Monumento del 11S",  img:"11.jpg", info:"El monumento del 11S, situado en la misma ubicación que el antiguo…", precio:"28.00"},
    {nombre:"Observatorio One World",  img:"oneWorld.jpeg", info:"Tómate una copa en el Observatorio One World, un mirador único en Nueva York...", precio:"48.00"},
    {nombre:"Big Bus Hop on Hop off",  img:"bus.jpg", info:"No te pierdas nada y conoce toda la ciudad en el Tour panorámico clásico de Big Bus…", precio:"59.00"},
    {nombre:"Ferry de la Estatua de la Libertad",  img:"liberty.jpg", info:"Observa de cerca todo un icono de Nueva York...", precio:"23.50"},
    {nombre:"Madison Square Garden",  img:"madison.jpg", info:"Visita el templo del basquetbol, hogar de los New York Knicks…",  precio:"65.00"}

    ];

for (const lugar of lugares) {
    let contenedor2 = document.createElement("div");
    
    contenedor2.innerHTML = `
                    <div class="cardsPlaces">
                    <img src="imagenes/${lugar.img}" class="sizeImg" alt="Fotografía de atracción">
                    <div class="info">
                    <h5>${lugar.nombre}</h5>
                    <p>${lugar.info}</p>
                    <p class="ticket">Normal ticket value: $${lugar.precio}</p>
                    </div>
                    </div>
    `
    document.getElementById("lugares").appendChild(contenedor2);
}



const lugares2 = [{
    nombre:"Museo Metropolitano de Arte - MET",  img:"met.jpg", info:"Este museo alberga la mayor y mejor colección de arte…", precio:"25.00"},
    {nombre:"Crucero Circle Line",  img:"crucero.jpg", info:"Admira lo mejor de la ciudad en este crucero de tres horas por Manhattan.  Disfruta…",  precio:"44.00"},
    {nombre:"Museo Americano de Historia Natural",  img:"dino.jpg", info:"Uno de los museos más grandes e innovadores del país…",  precio:"23.00"}
];


for (const lugar2 of lugares2) {
    let contenedor3 = document.createElement("div");

    contenedor3.innerHTML =  `
    <div class="cardsPlaces catalogoCompleto" style="display:none">
    <img src="imagenes/${lugar2.img}" class="sizeImg" alt="Empire State Building">
    <div class="info">
    <h5>${lugar2.nombre}</h5>
    <p>${lugar2.info}</p>
    <p class="ticket">Normal ticket value: $${lugar2.precio}</p>
    </div>
    </div>
    `

    document.getElementById("lugares").appendChild(contenedor3);
}