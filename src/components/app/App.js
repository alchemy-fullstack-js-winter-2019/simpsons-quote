import React from 'react';
import SimpsonQuote from '../../containers/quotes/SimpsonQuote';
import Load from '../../components/quote/Load';

export default function App() {
  return (
    <>
      <h1>Simpsons Quote</h1>
      <SimpsonQuote />
      <Load />
    </>
  );
}
