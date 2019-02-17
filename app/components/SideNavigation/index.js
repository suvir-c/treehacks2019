import React from 'react';

import Button from 'components/Button';

/* eslint-disable react/prefer-stateless-function */
class SideNavigation extends React.Component {
  render() {
    return (
      <div className="side-navigation">
        <div className="nav-category-wrapper">
          <a href="/support">
            <h4>Support Room</h4>
          </a>
        </div>
        <div className="nav-category-wrapper">
          <h4>Resources</h4>
          <a href="/legal">
            <h5>Legal Advice</h5>
          </a>
          <a href="/">
            <h5>Police Information</h5>
          </a>
          <a href="/">
            <h5>Mental Health Kit</h5>
          </a>
        </div>
        <Button title="Submit a Report" />
        <p className="disclaimer">
          `* Your reports as well as your identity will always be anonymous.`
        </p>
      </div>
    );
  }
}

export default SideNavigation;
