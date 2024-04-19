'use client';
import styled from 'styled-components';

const Loader = styled.div`
  border: 8px solid #f3f3f3; /* Light grey */
  border-top: 8px solid #333; /* Blue */
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: spin 2s linear infinite;
`;

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
`;

export default function LoadingPage() {
  return (
    <Wrapper>
      <Loader />
    </Wrapper>
  );
}
