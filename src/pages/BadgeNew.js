import React from 'react';

import './styles.css/BadgeNew.css'
import header from '../images/badge-header.svg'
import Navbar from '../components/Navbar'
import Badge from '../components/Badge'

class BadgeNew extends React.Component {
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
                firstName = 'Erika'
                lastName = 'Espejo'
                jobTitle = "Web Developer"
                twitter = "Erika__Espejo"
                avatarUrl = "https://www.gravatar.com/userimage/205043051/a0fdffa22d693bbd759fd543ac0b5752?size=120"
              />
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