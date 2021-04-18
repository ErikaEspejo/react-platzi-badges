import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css'
import Badge from './components/Badge';

const container = document.getElementById('app'); //app se convierte en el contenedor

ReactDOM.render(<Badge />,container); //obtiene el que renderiza y en donde