import React from 'react';
import './styles/BadgeList.css';
import twitterLogo from '../images/twitter-logo.png';

class BadgeList extends React.Component {
  render () {
    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.badges.map((badge) => {
            return (
              <li className="BadgesListItem" key={badge.id}>
                <img className="BadgesListItem__avatar" src={badge.avatarUrl} alt="foto avatar"/>
                <div className="Badge__info">
                  <p className="font-weight-bold">{badge.firstName} {badge.lastName}</p>
                  <div className="twitter">
                    <img src={twitterLogo} alt="logo twitter"/>
                    <p className="Badge__info-twitter">@{badge.twitter}</p>
                  </div>
                  <p className="Badge__jobTitle">{badge.jobTitle}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };
};

export default BadgeList;