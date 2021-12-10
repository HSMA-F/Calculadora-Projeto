import { env } from 'process';
import React, { useState } from 'react';
import Calculadora from './components/Calculadora'
function App() {
  
  return (
    <div className="Calculadora">
     <h1>{process.env.REACT_APP_NOME_CALCULADORA}</h1>
     <Calculadora></Calculadora>
    </div>
  );
}

export default App;
