import PokemonDetails from '@/components/PokemonDetails';

interface PokemonInfoPageProps {
  params: {
    name: string;
  };
}

export default function PokemonInfoPage(props: PokemonInfoPageProps) {
  const name = props.params.name;

  return (
    <div>
      <PokemonDetails pokemonName={name} />
    </div>
  );
}
