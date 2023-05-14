'use client'

import { useEffect, useState } from 'react'
import { searchPokemons } from './searchPokemons' // a server action

export default function Pokemons() {
  const [pokemonNames, setPokemonNames] = useState<string[]>([])
  const [searchString, setSearchString] = useState('')

  useEffect(() => {
    searchPokemons('').then(names => setPokemonNames(names))
  }, [searchPokemons])

  const onClick = async () => {
    setPokemonNames(await searchPokemons(searchString))
    setSearchString('')
  }

  return (
    <div>
      <h1 className='text-4xl font-bold'>Pokemon Search</h1>
      <div className='flex gap-2 my-4'>
        <input
          type='search'
          value={searchString}
          onChange={e => setSearchString(e.target.value)}
          className='border border-gray-300 rounded-lg py-4 px-4 text-base font-normal text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent'
        />
        <button
          onClick={onClick}
          className='bg-blue-600 disabled:bg-gray-500 inline-flex items-center justify-center rounded-full py-4 px-10 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10'>
          Search
        </button>
      </div>
      <div className='text-4xl py-4'>{pokemonNames.join(', ')}</div>
    </div>
  )
}
