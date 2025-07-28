import React, { useEffect, useState } from 'react'
import PokemonCards from './PokemonCards';
import Header from './Header';


function Pokemon() {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState('');
    
    const API = "https://pokeapi.co/api/v2/pokemon?limit=600";

    const fetchPokemon = async () => {
        try {
            const response = await fetch(API);
            const data = await response.json(); // response object

            const detailedPokemonData = data.results.map(async (curr) => {
                const response = await fetch(curr.url);
                const data = await response.json();
                return data;
            })

            const detailedResponses = await Promise.all(detailedPokemonData);
            // console.log(detailedPokemonData); // it prints data in Promise form
            setPokemon(detailedResponses);
            setLoading(false);

        } catch (error) {
            setLoading(false);
            setError(error);
        }
    }

    const handleInput = (value) => {
        setSearch(value);
    }

    // console.log(pokemon) 

    useEffect(() => {
        fetchPokemon();
    }, [])

    const searchData = pokemon.filter((curr) => curr.name.toLowerCase().includes(search.toLowerCase()));

    if (loading) {
        return (
            <h1 className='text-[5.4rem] font-bold text-center'>Getting Your Pokemons...</h1>
        )
    }

    if (error) {
        return (
            <h1 className='text-[5.4rem] font-bold text-center'>{error.message}</h1>
        )
    }


  return (
    <>
        <section>
           <Header />
           <div className='w-[100%] flex justify-center m-[2.5rem_0]'>
                <input
                    type="text" 
                    value={search} 
                    onChange={(e) => handleInput(e.target.value)} 
                    placeholder='search pokemon' 
                    className='w-[32rem] border-b-[0.2em] text-[1.6rem] tracking-wider font-semibold text-emerald-500 border-[#020d35] outline-none p-[1rem] bg-white' />
           </div>
           <div>
                <ul className='grid grid-cols-4 justify-center items-center gap-[4rem]'>
                    {searchData.map((curr) => {return <PokemonCards key={curr.id} pokemonData = {curr} />} )}
                </ul>
           </div>
        </section>
    </>
  )
}

export default Pokemon