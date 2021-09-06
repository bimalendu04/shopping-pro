import { render } from '@testing-library/react';
import Items from './Items';

it('renders <Items /> page', () => {
    const { queryByText } = render(<Items />);
    const li1 = queryByText('Dove - 20');
    const li2 = queryByText('Axe - 30');
    const li3 = queryByText('Talcum - 50');
    expect(li1).toBeTruthy();
    expect(li2).toBeTruthy();
    expect(li3).toBeTruthy();
  });
