import React from 'react';

import SideNavigation from 'components/SideNavigation';

class HomePage extends React.Component {
  state = {};

  render() {
    return (
      <div className="page-wrapper-sidebar home-page">
        <SideNavigation />
        <div className="page-body">
          <h1>Welcome</h1>
          <p className="body-text">
            You are not alone. We are here for you. Welcome to a space where you
            can stay completely <span className="highlight">anonymous</span> and
            feel at ease discussing your experiences freely amongst a supportive
            community.
          </p>
          <h3>Reports</h3>
          <div className="card card-long">
            <div>
              <h3>Report Status</h3>
              <p>Sumittted Jan 14, 2019</p>
              <p>Waiting for police review and support</p>
              <div className="status">
                <h4>Filed</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
