import React, { useContext } from 'react';
//import { PokemonContext } from './PokemonContext';

const Pokedex = () => {
  const { capturedPokemons, setCapturedPokemons } = useContext(PokemonContext);

  return (
    <div className="pokedex">
      <h2>Pokedex</h2>     

  {capturedPokemons.map((pokemon) =>
        <div key={`${pokemon.id}-${pokemon.name}`}>
          <span>{pokemon.name}</span>
{/*         {  <button onClick={setCapturedPokemons(pokemon)}>-</button> }
 */}      
 <button onClick={setCapturedPokemons(pokemon)}>-</button>
   </div>)} 
        
    </div>
  )
};

export default Pokedex; 