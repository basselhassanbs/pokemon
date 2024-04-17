'use client';
import { IPokemon } from '@/types';
import Link from 'next/link';
import {
  Button,
  CategoriesContainer,
  CategoriesText,
  PokemonName,
  Title,
} from './style';

interface PokemonListProps {
  data: IPokemon[];
  showCategories?: boolean;
}

export default function PokemonList({
  data,
  showCategories = false,
}: PokemonListProps) {
  const renderedCategories = (types: any) => (
    <CategoriesText>
      Categories:{' '}
      {types.map((type: any, index: number) => (
        <>
          {type.type.name}
          {index !== types.length - 1 && ', '}
        </>
      ))}
    </CategoriesText>
  );

  return (
    <div data-testid='pokemon-list'>
      <Title>Pokemon</Title>
      <CategoriesContainer>
        {data ? (
          data.map(({ pokemon }: IPokemon) => (
            <Link key={pokemon.name} href={`pokemon/${pokemon.name}`}>
              <Button>
                <PokemonName>{pokemon.name}</PokemonName>

                {showCategories ? renderedCategories(pokemon.types) : null}
              </Button>
            </Link>
          ))
        ) : (
          <h1>Select a category please to display the pokemon</h1>
        )}
      </CategoriesContainer>
    </div>
  );
}
