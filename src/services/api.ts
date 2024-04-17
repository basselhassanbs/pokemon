import axios from './axios';

export const getPokeCategories = () => {
  return axios.get('/type');
};

export const getpokemonByCategory = (category: string) => {
  return axios.get(`/type/${category}`);
};

export const getPokemonData = (name: string) => {
  return axios.get(`/pokemon/${name}`);
};
