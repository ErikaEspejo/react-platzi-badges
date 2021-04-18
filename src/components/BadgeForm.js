import React from 'react';


class BadgeForm extends React.Component {
  handleChange = (e) => {
    console.log({
      name: e.target.name,
      value: e.target.value,
    });
  };

  handleClick = (e) => {
    console.log('Button was clicked')
  };

  handleSubmit = (e) => {
    e.preventDefault(); //se previene el default que equivale a enviar el form
    console.log('Form was submitted')
  }

  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form action="" onSubmit = {this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="">First Name</label>
            <input onChange={this.handleChange} className="form-control" type="text" name="firstName"/>
          </div>
          <button onClick={this.handleClick} className="btn btn-primary"> {/* eexisten dos maneras para manejar el submit por defecto de un boton, puede ser dentro de la etiqueta usando type="button", o dejarlo como por defecto y agregar evento onSubmit = {this.handleSubmit} en el form. */}
            Save
          </button>
        </form>
      </div>
    );
  };
};

export default BadgeForm;