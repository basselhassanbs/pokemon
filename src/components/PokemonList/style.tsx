import styled from 'styled-components';

export const CategoriesContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  border-radius: 4px;
  padding: 20px 40px;
  background-color: #f0f8ff;
  text-transform: capitalize;
  display: flex;
  flex-direction: column;
  align-items: baseline;
`;

export const Title = styled.h1`
  margin-bottom: 10px;
  font-size: 24px;
`;

export const PokemonName = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

export const CategoriesText = styled.div`
  font-size: 14px;
  color: grey;
`;
