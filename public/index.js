window.addEventListener("load",()=>{    
    let titulo = document.getElementById("titulo").textContent;
    console.log(titulo);
    if(titulo=="Peliculas"){
        mostrarPelis();
    }
    if(titulo=="Series"){
        mostrarSeries();
    }
});

//control de paginacino
let pag=1;
const api_key='73b96ddc25658ad17c90440e7f61bd67';

// captura de botones
let btnAnt = document.querySelector(".btnAnt");
let btnSig = document.querySelector(".btnSig");


//funcion btn anterior
btnAnt.addEventListener("click", () =>{
    if (pag>1) {
        pag--;    
        if(pag==1){
            btnAnt.disabled=true;
        }
        mostrarPelis();
    }
});



//funcino btn siguiente
btnSig.addEventListener("click", () =>{
    if (pag<500) {
        pag++;    
        btnAnt.disabled=false;
        if(pag==500){
            btnSig.disabled=true;
        }
        mostrarPelis();
    }
});

//funcion de carga y e impesion de peliculas


const mostrarPelis = async () => {
    
    try {
        let pagina= await fetch (`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=es-MX&page=${pag}`);
        if(pagina.status==200){
            let jsonPelis= await pagina.json();
            console.log(jsonPelis.results);
            let peliculas="";
            //let puntaje= new Intl.NumberFormat("es-Es",{maximumFractionDigits: 1,}).format(pelicula.vote_average);
            
            jsonPelis.results.forEach(pelicula => {
                let puntaje= new Intl.NumberFormat("es-Es",{maximumFractionDigits: 1,}).format(pelicula.vote_average);
                peliculas+=`<div class="pelicula">
                <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                <div class="sinopsis"><p>${pelicula.overview}</p></div>
                <div class="puntaje">${puntaje}</div>
                <h2 class="titulo">${pelicula.original_title}</h2>
                </div>`

                document.querySelector(".contenedor").innerHTML=peliculas       
            });
        }
        addEventListener("mouseover", (event) => {
            console.log("mouse sobre imange")
        });
        
    } catch (error) {
        console.log(error);
    }

};


const mostrarSeries = async () => {
    
    try {
        let pagina= await fetch (`https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=es-MX&page=${pag}`);
        if(pagina.status==200){
            let jsonSeries= await pagina.json();
            console.log(jsonSeries.results);
            let series="";
            //let puntaje= new Intl.NumberFormat("es-Es",{maximumFractionDigits: 1,}).format(pelicula.vote_average);
            
            jsonSeries.results.forEach(serie => {
                let puntaje= new Intl.NumberFormat("es-Es",{maximumFractionDigits: 1,}).format(serie.vote_average);
                series+=`<div class="pelicula">
                <img class="poster" src="https://image.tmdb.org/t/p/w500/${serie.poster_path}">
                <div class="sinopsis">
                <p>${serie.overview}</p></div>
                <div class="puntaje">${puntaje}</div>
                <h2 class="titulo">${serie.name}</h2>
                </div>`

                document.querySelector(".contenedor").innerHTML=series       
            });
        }
        addEventListener("mouseover", (event) => {
            console.log("mouse sobre imange")
        });
        
    } catch (error) {
        console.log(error);
    }

};
