'use client';
import { useQuery } from '@tanstack/react-query';
import { getpokemonByCategory } from '@/services/api';
import { useEffect, useState } from 'react';
import { ICategory } from '@/types';
import {
  CategoriesListContainer,
  Container,
  PokemonListContainer,
} from './style';
import PokemonList from '../PokemonList';
import CategoriesList from '../CategoriesList';

interface HomeComponentProps {
  categories: ICategory[];
}

export default function Home({ categories }: HomeComponentProps) {
  const [category, setCategory] = useState<string>('');

  const { data: pokemonData, refetch } = useQuery({
    queryKey: ['pokemon'],
    queryFn: () => getpokemonByCategory(category),
    enabled: false,
  });

  useEffect(() => {
    refetch();
  }, [category]);

  return (
    <Container>
      <PokemonListContainer>
        <PokemonList data={pokemonData?.data?.pokemon} />
      </PokemonListContainer>
      <CategoriesListContainer>
        <CategoriesList
          categories={categories}
          onCategoryChange={setCategory}
          selectedCategory={category}
        />
      </CategoriesListContainer>
    </Container>
  );
}
