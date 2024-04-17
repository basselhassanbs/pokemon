'use client';
import Link from 'next/link';
import { Suspense } from 'react';
import { Nav, StyledLink } from './style';
import SearchInput from '../SearchInput';

export default function Navbar() {
  return (
    <Nav>
      <StyledLink>
        <Link href='/'>Home</Link>
      </StyledLink>
      <Suspense>
        <SearchInput placeholder='Search pokemon...' />
      </Suspense>
    </Nav>
  );
}
