import React from 'react';
import './App.css';
import Row from './Components/Row';
import requests from './request';
import Banner from './Components/Banner';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div className="App">
     
     <Navbar />
     <Banner fetchUrl={requests.fetchNetflixOriginals}/>
     <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/>
     <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending}/>
     <Row title="TOP RATED" fetchUrl={requests.fetchTopRated}/>
     <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies}/>
     <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies}/>
     <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies}/>
     <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies}/>
     <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries}/>
     
    </div>
  );
}

export default App;
