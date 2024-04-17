'use client';
import { ICategory } from '@/types';
import { Button, CategoriesContainer, Title, Wrapper } from './style';

interface CategoriesListProps {
  categories: ICategory[];
  onCategoryChange: React.Dispatch<React.SetStateAction<string>>;
  selectedCategory: string;
}

export default function CategoriesList({
  categories,
  onCategoryChange,
  selectedCategory,
}: CategoriesListProps) {
  return (
    <Wrapper>
      <Title>Categories</Title>
      <CategoriesContainer>
        {categories &&
          categories.map((cate: ICategory) => (
            <Button
              style={{
                fontWeight: selectedCategory == cate.name ? 'bold' : 'normal',
              }}
              key={cate.name}
              onClick={() => onCategoryChange(cate.name)}
            >
              {cate.name}
            </Button>
          ))}
      </CategoriesContainer>
    </Wrapper>
  );
}
