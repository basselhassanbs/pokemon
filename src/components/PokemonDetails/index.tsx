'use client';
import { getPokemonData } from '@/services/api';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Barchart from '../Barchart';
import { Category, ChartContainer, Container, Title } from './style';

interface PokemonDetailsProps {
  pokemonName: string;
}

export default function PokemonDetails({ pokemonName }: PokemonDetailsProps) {
  const { data, isLoading } = useQuery({
    queryKey: ['pokemonDetails'],
    queryFn: () => getPokemonData(pokemonName),
  });

  const { name, stats, sprites, types } = data?.data || {};

  const chartSeries = [
    {
      name: 'base_stat',
      data: stats && stats.map((stat: any) => stat.base_stat),
    },
    {
      name: 'Effort',
      data: stats && stats.map((stat: any) => stat.effort),
    },
  ];

  const chartCategories = stats && stats.map((stat: any) => stat.stat.name);

  return (
    <div>
      <Title data-testid='pokemon-title'>{name}</Title>
      {sprites?.front_default ? (
        <Image
          src={sprites?.front_default}
          height={140}
          width={140}
          alt={name}
        />
      ) : null}
      {stats && (
        <ChartContainer>
          <Barchart chartSeries={chartSeries} categories={chartCategories} />
        </ChartContainer>
      )}
      <Container>
        {types &&
          types.map((type: any) => (
            <Category key={type.type.name}>{type.type.name}</Category>
          ))}
      </Container>
    </div>
  );
}
