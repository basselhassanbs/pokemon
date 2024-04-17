import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import ReactDOM from 'react-dom/client';
import Barchart from '@/components/Barchart';

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

let container: any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe('Barchart', () => {
  it('renders a chart', async () => {
    const stats = [
      { name: 'base_stat', data: [10, 20, 30, 40, 50, 60] },
      { name: 'Effort', data: [11, 22, 30, 14, 15, 46] },
    ];
    const categories = [
      'hp',
      'attack',
      'defense',
      'special-attack',
      'special-defense',
      'speed',
    ];
    act(() => {
      ReactDOM.createRoot(container).render(
        <Barchart chartSeries={stats} categories={categories} />
      );
    });
    await waitFor(() => {
      expect(screen.getByText('Effort')).toBeInTheDocument();
      expect(screen.getByText('base_stat')).toBeInTheDocument();
    });
  });
});
