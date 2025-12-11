/*
-----------------------------------------------------------
DECLARACIÓN DE VARIABLES
-----------------------------------------------------------
*/
var categoriaSeleccionada;


/*
-----------------------------------------------------------
Mostrar personajes de forma aleatoria cuando se carga la pagina web
-----------------------------------------------------------
*/

/*
crear una letra aleatoria. esta letra la metemos en el campo de busqueda. Así, cuando
se cargue la web, se genera la letra y se hace busqueda de los personajes que contengan esa letra
Así, se mostrará siempre aleatoriamente unos personajes distintos, al iniciar la web.
*/
function crearLetraAleatoria() {//crear una letra aleatoria
    const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const posicionLetra = Math.floor(Math.random() * alfabeto.length);//nos da numero aleatorio como máximo de la longitud del aalfabeto
    return alfabeto[posicionLetra];//devuelve la letra que esté en esa posicion del alfabeto
}

//esta función se llama al final del script, cuando se hayan cargado todos los elementos html, css, etc...
function crearPersonajesAleatorios() {
    const letraAleatoria = crearLetraAleatoria();
    categoriaSeleccionada = "people";//establecemos manualmente que la categoría sea people
    fetch(`https://swapi.py4e.com/api/${categoriaSeleccionada}/?search=${letraAleatoria}`)
        .then(response => response.json())
        .then(data => {
            //La API devuelve un objeto con una propiedad llamada RESULTS
            //console.log(data.results[0]);//muestra el primer resultado encontrado
            //console.log("Nombre :" + data.results[0].name)//muestra el nombre del personaje

            //Selección de propiedades dependiendo si es personaje o planeta o nave
            if (categoriaSeleccionada == "people") {
                //crear contenedor para todas las cards
                const contenedor = document.getElementById("personajes");
                contenedor.innerHTML = "";  // Limpiar antes de insertar nuevos datos
                for (let i = 0; i < data.results.length; i++) {
                    //mostrar resultados por consola
                    console.log("----------------------------------");
                    console.log("Nombre:", data.results[i].name);
                    console.log("Altura:", data.results[i].height);
                    console.log("Género:", data.results[i].gender);
                    console.log("Año Nacimiento:", data.results[i].birth_year);
                    console.log("----------------------------------");

                    //mostrar resultados en la web

                    let userDiv = document.createElement("div");//crear un div para los datos
                    userDiv.classList.add("card");//el div tendrá class=card
                    userDiv.innerHTML = `
                        <h2>${data.results[i].name}</h2>
                        <p><strong>Altura:</strong> ${data.results[i].height} cm</p>
                        <p><strong>Género:</strong> ${data.results[i].gender}</p>
                        <p><strong>Año Nacimiento:</strong> ${data.results[i].birth_year}</p>
                        <button class="favorite">⭐</button>
                        `;
                    //en cada iteración del for se añade una nueva carta (userdiv=card)
                    contenedor.appendChild(userDiv);//se añade el nuevo div que hemos creado


                }
            }
        })
}


/*
-----------------------------------------------------------
Buscar los personajes con el método SEARCH habilitado en la propia API
Buscar el texto introducido en la categoría seleccionada.
-----------------------------------------------------------
*/



// Acción al hacer clic en el botón "Buscar" buscar un nombre
document.getElementById('botonBuscar').addEventListener('click', () => {
    //Comprobar la categoría seleccionada
    const categoriaActiva = document.getElementById('categoria-select');
    if (categoriaActiva.value === "personajes") {
        console.log("Personaje activo");
        categoriaSeleccionada = "people";
    } else if (categoriaActiva.value === "planetas") {
        console.log("Planetas activo");
        categoriaSeleccionada = "planets";
    } else {
        console.log("Naves activo");
        categoriaSeleccionada = "starships";
    }



    //Se capta el texto introducido en el campo de búsqueda
    const campoBusqueda = document.getElementById('input-buscar').value.trim();
    console.log("El texto introducido es: " + campoBusqueda);
    //El método de búsqueda de la API no es case sensitive
    //Se llama a la API con la categoría seleccionada y el texto del campo de búsqueda

/*
-----------------------------------------------------------
ALGUNAS API DE STAR WARS DEJARON DE FUNCIONAR

fetch(`https://swapi.dev/api/${categoriaSeleccionada}/?search=${campoBusqueda}`)
fetch(`https://swapi.tech/api/${categoriaSeleccionada}/?name=${campoBusqueda}`)
fetch(`https://www.swapi.tech/api/people/?name=r2  `)
-----------------------------------------------------------
*/


    
    fetch(`https://swapi.py4e.com/api/${categoriaSeleccionada}/?search=${campoBusqueda}`)
        .then(response => response.json())
        .then(data => {
            //La API devuelve un objeto con una propiedad llamada RESULTS
            //console.log(data.results[0]);//muestra el primer resultado encontrado
            //console.log("Nombre :" + data.results[0].name)//muestra el nombre del personaje

            //ocultar todas las cards que ya habían creadas anteriormente cada vez que 
            //se hace busqueda nueva. Sino, las nuevs se mostraían debajo de las cards que ya hay
            document.getElementById("personajes").style.display = "none";
            document.getElementById("planetas").style.display = "none";
            document.getElementById("naves").style.display = "none";


            //Selección de propiedades dependiendo si es personaje o planeta o nave
            if (categoriaSeleccionada == "people") {
                //motrar las cards de esta categoria, orqe las habiamos ocultado pimero
                document.getElementById("personajes").style.display = "flex";

                //crear contenedor para todas las cards
                const contenedor = document.getElementById("personajes");
                contenedor.innerHTML = "";  // Limpiar antes de insertar nuevos datos
                for (let i = 0; i < data.results.length; i++) {
                    //mostrar resultados por consola
                    console.log("----------------------------------");
                    console.log("Nombre:", data.results[i].name);
                    console.log("Altura:", data.results[i].height);
                    console.log("Género:", data.results[i].gender);
                    console.log("Año Nacimiento:", data.results[i].birth_year);
                    console.log("----------------------------------");

                    //mostrar resultados en la web

                    let userDiv = document.createElement("div");//crear un div para los datos
                    userDiv.classList.add("card");//el div tendrá class=card
                    userDiv.innerHTML = `
                            <h2>${data.results[i].name}</h2>
                            <p><strong>Altura:</strong> ${data.results[i].height} cm</p>
                            <p><strong>Género:</strong> ${data.results[i].gender}</p>
                            <p><strong>Año Nacimiento:</strong> ${data.results[i].birth_year}</p>
                            <button class="favorite">⭐</button>
                            `;
                    //en cada iteración del for se añade una nueva carta (userdiv=card)
                    contenedor.appendChild(userDiv);//se añade el nuevo div que hemos creado


                }
            }
            if (categoriaSeleccionada == "planets") {
                //motrar las cards de esta categoria, orqe las habiamos ocultado pimero
                document.getElementById("planetas").style.display = "flex";
                //crear contenedor para todas las cards
                const contenedor = document.getElementById("planetas");
                contenedor.innerHTML = "";  // Limpiar antes de insertar nuevos datos
                for (let i = 0; i < data.results.length; i++) {
                    //mostrar resultados por consola
                    console.log("----------------------------------");
                    console.log("Nombre:", data.results[i].name);
                    console.log("Clima:", data.results[i].climate);
                    console.log("Terreno:", data.results[i].terrain);
                    console.log("Nº Habitantes:", data.results[i].population);
                    console.log("----------------------------------");

                    //mostrar resultados en la web

                    let userDiv = document.createElement("div");//crear un div para los datos
                    userDiv.classList.add("card");//el div tendrá class=card
                    userDiv.innerHTML = `
                            <h2>${data.results[i].name}</h2>
                            <p><strong>Clima:</strong> ${data.results[i].climate} cm</p>
                            <p><strong>Terreno:</strong> ${data.results[i].terrain}</p>
                            <p><strong>Nº Habitantes:</strong> ${data.results[i].population}</p>
                            <button class="favorite">⭐</button>
                            `;
                    //en cada iteración del for se añade una nueva carta (userdiv=card)
                    contenedor.appendChild(userDiv);//se añade el nuevo div que hemos creado

                }
            }
            if (categoriaSeleccionada == "starships") {
                //motrar las cards de esta categoria, orqe las habiamos ocultado pimero
                document.getElementById("naves").style.display = "flex";
                //crear contenedor para todas las cards
                const contenedor = document.getElementById("naves");
                contenedor.innerHTML = "";  // Limpiar antes de insertar nuevos datos
                for (let i = 0; i < data.results.length; i++) {
                    //mostrar resultados por consola
                    console.log("----------------------------------");
                    console.log("Nombre:", data.results[i].name);
                    console.log("Modelo:", data.results[i].model);
                    console.log("Pasajeros:", data.results[i].passengers);
                    console.log("Nivel Hypervelocidad:", data.results[i].hyperdrive_rating);
                    console.log("----------------------------------");

                    //mostrar resultados en la web

                    let userDiv = document.createElement("div");//crear un div para los datos
                    userDiv.classList.add("card");//el div tendrá class=card
                    userDiv.innerHTML = `
                            <h2>${data.results[i].name}</h2>
                            <p><strong>Modelo:</strong> ${data.results[i].model} cm</p>
                            <p><strong>Pasajeros:</strong> ${data.results[i].passengers}</p>
                            <p><strong>Nivel Hypervelocidad:</strong> ${data.results[i].hyperdrive_rating}</p>
                            <button class="favorite">⭐</button>
                            `;
                    //en cada iteración del for se añade una nueva carta (userdiv=card)
                    contenedor.appendChild(userDiv);//se añade el nuevo div que hemos creado

                }
            }




        })
});


/*
-----------------------------------------------------------
CREAR PERSONAJES ALEATORIOS CADA VEZ QUE SE RECARGUE LA PÁGINA
-----------------------------------------------------------
*/

//El evento window.addEventListener('load', () => { ... }) se ejecuta una vez cuando 
//la página ha cargado todo el HTML, CSS, imágenes, etc.

window.addEventListener('load', () => {
    crearPersonajesAleatorios();
});

