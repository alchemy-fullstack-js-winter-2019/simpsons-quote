import React from 'react';
import AllQuotes from '../../containers/AllQuotes';
import { css } from 'emotion';


export default function App() {
  return (
    <>
    <main
      className={css`
    text-align: center;
    font-family: helvetica;
    color: #fff;
    margin: 0 auto;
    background-color: #0099ff;
    font-size: 24px;
    font-family: helvetica;
    border-radius: 4px;
    }
  `}>
      <h1 className={css`
    color: hotpink;
    }
  `} >SIMPSONS QUOTES</h1>
      <AllQuotes />
    </main>
  </>
  );
}
