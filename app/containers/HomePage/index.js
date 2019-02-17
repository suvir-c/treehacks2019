import React from 'react';

import SideNavigation from 'components/SideNavigation';

class HomePage extends React.Component {
  state = {};

  render() {
    return (
      <div className="page-wrapper-sidebar">
        <SideNavigation />
        <div className="page-body">
          <h1>Welcome</h1>
        </div>
      </div>
    );
  }
}

export default HomePage;
