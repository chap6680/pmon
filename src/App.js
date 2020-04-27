import React from 'react';
import './App.css';

import PokemonsList from './Pokemon/PokemonsList';
/* import Pokedex from './Pokemon/Pokedex'; */
import { PokemonProvider } from './Pokemon/PokemonContext';
import CapturedPokemons from './Pokemon/CapturedPokemons';

const App = () => (
  <PokemonProvider>
  <div className="main">
    <PokemonsList />
   <CapturedPokemons />
  </div>
  <div className='form-wrapper'>
    <h2>form</h2>
  </div>
  </PokemonProvider>  
);

export default App;