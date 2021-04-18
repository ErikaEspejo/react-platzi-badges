import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css'
//import BadgeNew from './pages/BadgeNew';
import Badges from './pages/Badges';

const container = document.getElementById('app'); //app se convierte en el contenedor

ReactDOM.render(
  <Badges/>,
  container
); //obtiene el que renderiza y en donde