import { useState, useEffect } from 'react'; 
import Header from "./components/Header.js";
import Sidebar from './components/Sidebar.js';
import MainContent from './components/MainContent'; // questi "oggetti" devono iniziare sempre con la lettera maiuscola

//per avviare il progetto localhost:3000

//Utilizzo le API di Jikan https://jikan.docs.apiary.io/ per ottenere la lista degli anime
function App() {
  const [animeList, SetAnimeList] = useState([]); //array che contiene la lista degli anime
  const [topAnime, SetTopAnime] = useState([]); //array che contiene i top anime
  const [search,SetSearch] = useState("");  //stringa per cercare, ottenuta tramite la barra di ricerca
  


  const GetTopAnime = async () => {//chiamata asyncrona al server
    //metto nella constante temp i top anime per popolarita' tramite le API
    //successivamente sposto tutto in un json tramite ".then(x=>x.json)"
    
    //temp contiene i top anime, tramite il metodo SetTopAnime aggiungo nell'array solo i primi 5 -> .slice(min,max)
    
    const temp = await fetch (`https://api.jikan.moe/v3/top/anime/1/bypopularity`)//await e' chiamato solo in async function e serve per aspettare la risposta della chiamata asyncrona
    .then(res => res.json());
    
    SetTopAnime(temp.top.slice(0, 5));   
  }
  useEffect(() => {
    GetTopAnime();
  }, []);
  //se usi il fetch ci mette un po' di tempo di conseguenza se usi console.log(topAnime) dentro la funzione non esce nulla, devi per forza chimarlo fuori
  //console.log(topAnime);




  const HandleSearch = e => { //prende il submit del form
    e.preventDefault(); //evito che viene refreshata la pagina

    FetchAnime(search);
  }

  const FetchAnime = async (query) => {
      const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`)
      .then(res => res.json());

      SetAnimeList(temp.results);
  } 


  return (
    <div className="App">
      <Header />

      <div className="content-wrap">
        <Sidebar 
          topAnime={topAnime}/>
        <MainContent 
          HandleSearch={HandleSearch}
          search={search}
          SetSearch={SetSearch}
          animeList={animeList}/>
      </div>

    </div>
  );
}

export default App;

//1.Con react vai a creare componenti che poi aggiungi al componente principale "root component"
 //2.Hai degli oggetti virtuali ovvero "virual DOM" che e' letteralmente la virualizzazione dei DOM Element
  //3.Angual e' un Framework di Java mentre React e' una libreria
    //4. => arrow function expression,  e' un modo per scrivere piu' velocemente le funzioni
      /*
      // Traditional Anonymous Function
        function (a){
          return a + 100;
        }

      // Arrow Function Break Down

      // 1. Remove the word "function" and place arrow between the argument and opening body bracket
        (a) => {
          return a + 100;
        }

      // 2. Remove the body braces and word "return" -- the return is implied.
        (a) => a + 100;

      // 3. Remove the argument parentheses
        a => a + 100;
      */
//5. .json() serve per trasformare l'array in un file json
