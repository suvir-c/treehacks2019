import React from 'react';

import Button from 'components/Button';

/* eslint-disable react/prefer-stateless-function */
class SideNavigation extends React.Component {
  render() {
    return (
      <div className="side-navigation">
        <div className="nav-category-wrapper">
          <a href="/" className="link">
            <h4>Home</h4>
          </a>
        </div>
        <div className="nav-category-wrapper">
          <a href="/support" className="link">
            <h4>Support Room</h4>
          </a>
        </div>
        <div className="nav-category-wrapper">
          <a href="/contact" className="link">
            <h4>Contacts</h4>
          </a>
        </div>
        <div className="nav-category-wrapper">
          <h4>Resources ↓</h4>
          <a href="/legal" className="link">
            <h5>Legal Advice</h5>
          </a>
          <a href="/police" className="link">
            <h5>Police Information</h5>
          </a>
          <a href="/mental" className="link">
            <h5>Mental Health Kit</h5>
          </a>
        </div>
        <a href="/submit-report">
          <Button title="Submit a Report" />
        </a>
        <p className="disclaimer">
          * Your reports as well as your identity will always be anonymous.
        </p>
      </div>
    );
  }
}

export default SideNavigation;
