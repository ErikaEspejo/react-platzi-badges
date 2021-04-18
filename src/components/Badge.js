/*
  - Para crear un componente, se importa react de 'react' para usar Jsx
  - Un componente es una clase, por lo cual debe heredar del objeto React.Component
  - Debe manejar al menos un metodo, render() que muestra lo que el navegador debe renderizar
  - Se debe exportar el componente (similar a como ocurre con los modulos)

*/

import React from 'react';
import confLogo from '../images/badge-header.svg' //al importar la imagen en confLogo se convierte en una especie de variable

class Badge extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src={confLogo} alt="Logo de la conferencia"/> {/* React genera una direccion para la imagen con una especie de hash */}
        </div>
        <div>
          <img src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar"/> {/* gravar sirve para poner imagenes de avatar, es muy usado */}
          <h1>Erika <br/> Espejo </h1>
        </div>
        <div>
          <p>Desarrolladora web </p>
          <p>@Erika__Espejo</p>
        </div>
        <div>
          #platziconf
        </div>
      </div>
    )
  }
}

export default Badge;