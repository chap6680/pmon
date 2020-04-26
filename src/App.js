import React from 'react';
import './App.css';

import PokemonsList from './Pokemon/PokemonsList';
//import Pokedex from './Pokemon/Pokedex';
import { PokemonProvider } from './Pokemon/PokemonContext';

const App = () => (
  <PokemonProvider>
  <div className="main">
    <PokemonsList />
  
  </div>
  <div className='form-wrapper'>
    <h2>form</h2>
  </div>
  </PokemonProvider>  
);

export default App;