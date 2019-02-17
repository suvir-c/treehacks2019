import React from 'react';

import SideNavigation from 'components/SideNavigation';
import SupportRoom from 'components/SupportRoom';
import Button from 'components/Button';

class SupportRoomPage extends React.Component {
  render() {
    return (
      <div className="page-wrapper-sidebar">
        <SideNavigation />
        <div className="page-body">
          <SupportRoom />
          <Button onClick={this.createPost} title="Raise Voice" />
        </div>
      </div>
    );
  }
}

export default SupportRoomPage;
