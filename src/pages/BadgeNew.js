import React from 'react';

import './styles.css/BadgeNew.css';
import header from '../images/badge-header.svg';
import Navbar from '../components/Navbar';
import BadgeForm from '../components/BadgeForm';
import Badge from '../components/Badge';

class BadgeNew extends React.Component {
  state = { form:{
      firstName: '',
      lastName: '',
      jobTitle: '',
      email: '',
      twitter: '',
    }
  };


  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form, //vienen todos los valores del form y se añade otro
        [e.target.name] : e.target.value,
      }
    })
  }

  render() {
    return(
      <div>
        <Navbar />

        <div className="BadgeNew__hero">
          <img className='img-fluid' src={header} alt=""/>
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName = {this.state.form.firstName}
                lastName = {this.state.form.lastName}
                jobTitle = {this.state.form.jobTitle}
                twitter = {this.state.form.twitter}
                email = {this.state.form.email}
                avatarUrl = "https://www.gravatar.com/userimage/205043051/a0fdffa22d693bbd759fd543ac0b5752?size=120"
              />
            </div>
            <div className="col">
              <BadgeForm onChange = {this.handleChange} formValues = {this.state.form}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BadgeNew;

/*

firstName = 'Lilly'
lastName = 'Hola'
jobTitle = "Web Developer"
twitter = "Erika__Espejo"
avatarUrl = "https://www.gravatar.com/userimage/205043051/a0fdffa22d693bbd759fd543ac0b5752?size=120"

*/