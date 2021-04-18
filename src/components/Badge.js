/*
  - Para crear un componente, se importa react de 'react' para usar Jsx
  - Un componente es una clase, por lo cual debe heredar del objeto React.Component
  - Debe manejar al menos un metodo, render() que muestra lo que el navegador debe renderizar
  - Se debe exportar el componente (similar a como ocurre con los modulos)
  - Props: atributos de un componente
*/

import React from 'react';
import "./styles/Badge.css";
import confLogo from '../images/badge-header.svg' //al importar la imagen en confLogo se convierte en una especie de variable

class Badge extends React.Component {
  render() {



    return (
      <div className = "Badge">
        <div className = "Badge__header">
          <img src={confLogo} alt="Logo de la conferencia"/> {/* React genera una direccion para la imagen con una especie de hash */}
        </div>
        <div className = "Badge__section-name">
          <img className = "Badge__avatar" src={this.props.avatarUrl} alt="Avatar"/> {/* gravar sirve para poner imagenes de avatar, es muy usado */}
          <h1> {this.props.firstName} <br/> {this.props.lastName} </h1>
        </div>
        <div className = "Badge__section-info">
          <h4> {this.props.jobTitle} </h4>
          <p>@{this.props.twitter}</p>
        </div>
        <div className = "Badge__footer">
         <p> #platziconf </p>
        </div>
      </div>
    )
  }
}

export default Badge;