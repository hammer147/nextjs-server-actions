'use server'

import { pokemonSchema } from './types'

export async function searchPokemons(search: string) {
  'use server'
  console.log('searching for', search, 'on server')
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)
  const data = await response.json()
  const validatedData = pokemonSchema.parse(data)
  const pokemons = validatedData.results
    .filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()))
    .map(pokemon => pokemon.name)
    .slice(0, 10)
  return pokemons
}
