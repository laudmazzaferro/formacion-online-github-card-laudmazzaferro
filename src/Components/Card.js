import React from 'react';
import PropTypes from 'prop-types';
import './../scss/Card.scss'




const Card = props => {
  const { member , selectMember , months} = props;
    if(selectMember !== ''){
      return (
        <div className="card__container">
          <div className="card__user">
            <img src={`${member.avatar_url}`} alt={`Imagen de ${member.login}`} className="card__img"/>
            <p className="card__login">@{member.login}</p>
            <h2 className="card__name">{member.name}</h2>
            <p className="card__location"><i class="fas fa-map-marker-alt"></i> {member.location}</p>
          </div>
          <div className="card__info">
            <div className="card__repos">
              <p className="card__repos--num">{member.public_repos}</p>
              <p className="card__repos--text">Repos</p>
            </div>
            <div className="card__followers">
              <p className="card__followers--num">{member.followers}</p>
              <p className="card__followers--text">Followers</p>
            </div>
            <div className="card__following">
              <p className="card__following--num">{member.following}</p>
              <p className="card__following--text">Following</p>
            </div>
          </div>
          <p className="card__months">Miembro desde hace {months} meses</p>
        </div>
      )
    }else{
      return (
      <div className="card__enty">
       <i class="fab fa-github"></i>
      </div>)
    }
    }

Card.propTypes = {
  member:PropTypes.object.isRequired
};
      
export default Card;