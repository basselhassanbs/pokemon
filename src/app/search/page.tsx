'use client';
import PokemonList from '@/components/PokemonList';
import { getPokemonData } from '@/services/api';
import { useQuery } from '@tanstack/react-query';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

interface SearchPageProps {
  searchParams: {
    term: string;
  };
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  const { term } = searchParams;

  const { data } = useQuery({
    queryKey: ['search', term],
    queryFn: () => getPokemonData(term.toLowerCase()),
  });

  const { data: pokemon } = data || {};

  if (!term) {
    redirect('/');
  }

  return pokemon ? (
    <PokemonList data={[{ pokemon }]} showCategories={true} />
  ) : (
    <div>No match found!</div>
  );
}
