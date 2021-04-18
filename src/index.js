import React from 'react';
import ReactDOM from 'react-dom';

import Badge from './components/Badge';

const element = (
  <div>
    <h1>Hola soy Erika</h1>
    <p>Soy ingeniera</p>
  </div>
);

const container = document.getElementById('app'); //app se convierte en el contenedor

ReactDOM.render(<Badge />,container); //obtiene el que renderiza y en donde