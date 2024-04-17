'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { Input } from './style';

interface SearchInputProps {
  placeholder: string;
}

export default function SearchInput({ placeholder }: SearchInputProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [inputValue, setValue] = useState(searchParams.get('term'));

  const handleSearch = () => {
    if (inputValue) return router.push(`/search?term=${inputValue}`);

    if (!inputValue) return router.push('/');
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') return handleSearch();
  };

  return (
    <Input
      placeholder={placeholder}
      defaultValue={inputValue || ''}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      onKeyDown={handleKeyPress}
    />
  );
}
