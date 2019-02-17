import React from 'react';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <div className="topNavigation">
        <div className="logo">Logo</div>
        <div className="rightNavSection">
          <h3>About</h3>
        </div>
      </div>
    );
  }
}

export default Header;
