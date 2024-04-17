import Home from '@/components/Home';
import { getPokeCategories } from '@/services/api';

export default async function HomePage() {
  const data = await getPokeCategories();

  return <Home categories={data.data.results} />;
}
