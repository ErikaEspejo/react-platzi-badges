import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css'
import Badge from './components/Badge';

const container = document.getElementById('app'); //app se convierte en el contenedor

ReactDOM.render(
  <Badge
    firstName = 'Lilly'
    lastName = 'Hola'
    jobTitle = "Web Developer"
    twitter = "Erika__Espejo"
    avatarUrl = "https://www.gravatar.com/userimage/205043051/a0fdffa22d693bbd759fd543ac0b5752?size=120"
  />,
  container
); //obtiene el que renderiza y en donde