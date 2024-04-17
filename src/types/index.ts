export interface ICategory {
  name: string;
}

export interface Series {
  name: string;
  data: number[];
}

export interface IPokemon {
  pokemon: {
    name: string;
    types?: any;
  };
}
