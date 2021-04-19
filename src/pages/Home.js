import React from 'react';
import { Link } from 'react-router-dom';
import astronauts from '../images/astronauts.svg';
import platziConfLogo from '../images/platziconf-logo.svg';
import './styles.css/Home.css';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="row-hero home-hero">
          <div className="col-hero text-hero">
            <img src={platziConfLogo} alt=""/>
            <h3>PRINT YOUR BADGES</h3>
            <p>The easiest way to manage your <br/>conference</p>
            <div>
              <Link className="btn btn-primary" to="/badges">Start now</Link>
            </div>
          </div>
          <div className="col-hero image">
            <img src={astronauts} alt=""/>
          </div>
        </div>
      </React.Fragment>
    )
  }

}

export default Home;