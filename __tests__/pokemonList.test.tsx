import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import PokemonList from '@/components/PokemonList';

describe('PokemonList', () => {
  it('renders a list of pokemons', () => {
    const data = [
      { pokemon: { name: 'pidgey' } },
      { pokemon: { name: 'pidgeot' } },
    ];
    render(<PokemonList data={data} />);
    expect(screen.getByText('pidgey')).toBeInTheDocument();
  });
});
