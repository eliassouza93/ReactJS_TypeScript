import React from 'react';
import Lista from '../components/Lista';
import Formulario from '../components/Formulario';
import style from './App.module.scss'

function App() {
  return (
    <div className={style.AppStyle}>
     <Formulario />
     <Lista />

    </div>
  );
}

export default App;
