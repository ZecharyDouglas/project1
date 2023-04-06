import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import React from 'react';
import App from '../App';
import Navbar from './Navbar';

describe('test for the value of pieces of states', async () => {
  it('testing the value of loadStatus', () => {
    expect(Navbar.loadStatus).toBeFalsy();
  });
  it.fails('testing if the rates in Navbar are not defined', () => {
    expect(Navbar.rates).toBeDefined();
  });
  it('A button calle Conversions should be visible to the user ', async () => {
    render(<Navbar />);
    expect(screen.getByRole('button', { name: /Conversions/i })).toBeVisible();
  });
});
