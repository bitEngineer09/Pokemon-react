import React from 'react'

function PokemonCards({pokemonData}) {
  return (
    <li className='pokemon-card w-[36rem] text-2xl'>
        <figure className='flex justify-center'>
            <img 
                src={pokemonData.sprites.other.dream_world.front_default} 
                alt={pokemonData.name} 
                className='w-[60%] h-[15rem]'
            />
        </figure>

        <h1 className='text-[3.2rem] mt-[2.4rem] text-center font-bold capitalize'>{pokemonData.name}</h1>

        <div className='flex justify-center items-center m-[2rem_0]'>
            <p className='p-[0.6rem_2.4rem] rounded-[20rem] tracking-wide text-white font-bold capitalize bg-red-600'>{pokemonData.types.map((curr) => curr.type.name).join(", ")}</p>
        </div>

        <div className='grid grid-cols-3 gap-[1.6rem] text-center m-[3.2rem_0]'>
            <p className='text-center'>
                <span className='font-bold'>Height:</span> {pokemonData.height}
            </p>
            <p className='text-center'>
                <span className='font-bold'>Weight:</span> {pokemonData.weight}
            </p>
            <p className='text-center'>
                <span className='font-bold'>Speed:</span> {pokemonData.stats[5].base_stat}
            </p>
        </div>

        <div className='grid grid-cols-3 gap-[1.6rem] text-center m-[3.2rem_0]'>
            <div>
                <p className='pokemon-info'>{pokemonData.base_experience}</p>
                <span className='font-bold'>Experience:</span>
            </div>
            <div>
                <p className='pokemon-info'>{pokemonData.stats[1].base_stat}</p>
                <span className='font-bold'>Attack:</span>
            </div>
            <div>
                <p className='pokemon-info'>{pokemonData.abilities.map((curr) => curr.ability.name).slice(0, 1).join(',')}</p>
                <span className='font-bold'>Ability:</span>
            </div>
        </div>
    </li>
  )
}

export default PokemonCards