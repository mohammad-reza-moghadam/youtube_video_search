import React from 'react';
import PropTypes from 'prop-types';


const Useritem = props => {
    const {login, avatar_url, html_url} = props.user;

    return (
      <div className="card text-center">
        <img src={avatar_url} alt="" className="round-img" style={{ width: '60px' }} />
        <h3>{login}</h3>
        <div>
          <a href={html_url} className="btn btn-dark btn-sm my-1">More</a>
        </div>
      </div>
    );
}; 

Useritem.prototype = {
  user: PropTypes.object.isRequired,
}

export default Useritem;


// in destructuring part we can say :
// const Useritem = ({user: {login, avatar_url, html_url}});
// instead of the codes above