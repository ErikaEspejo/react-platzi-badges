/*
const element = document.createElement('h1');
element.innerText = 'Hello, Platzi Badges';

const container = document.getElementById('app');

container.appendChild(element);
*/

import React from 'react'; //para poder usar html dentro de js se importa react
import ReactDOM from 'react-dom'; //permite hacer el renderizado


//const element = <h1>Hello, Platzi Badges!</h1> //se crea un elemento h1 en JSX
//const element = React.createElement('a', { href: 'https://platzi.com' }, 'Ir a platzi' )//recibe tres elementos: que elemento, atributos y children

const name = 'Erika'
//const element = React.createElement('h1', {}, `hola soy ${name}`); uso de variables con react
//const element = <h1>Hola soy {name}</h1> //uso de variables con JSX, muestra solo valores true, es decir undefined, null NaN no se muestran

// Con JSX
const element = (
  <div>
    <h1>Hola soy {name}</h1>
    <p>Soy ingeniera</p>
  </div>
);


/* Con react
const element = React.createElement(
  'div',
  {},
  React.createElement('h1', {} , 'Hola soy Erika'),
  React.createElement('p', {}, 'Soy ingeniera')
);
*/

//REACT es javascript. JSX facilita la escritura y lectura de codigo.


const container = document.getElementById('app'); //app se convierte en el contenedor

ReactDOM.render(element,container); //obtiene el que renderiza y en donde