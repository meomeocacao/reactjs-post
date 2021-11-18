import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Blable from './Blable';

describe('<Blable />', () => {
  test('it should mount', () => {
    render(<Blable />);
    
    const blable = screen.getByTestId('Blable');

    expect(blable).toBeInTheDocument();
  });
});