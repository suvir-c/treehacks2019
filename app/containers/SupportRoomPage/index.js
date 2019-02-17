import React from 'react';

import SideNavigation from 'components/SideNavigation';
import SupportRoom from 'components/SupportRoom';
import Button from 'components/Button';

class SupportRoomPage extends React.Component {
  state = {
    displaySubmitPost: false,
  };

  createPost = () => {
    this.setState(prevState => ({
      displaySubmitPost: !prevState.displaySubmitPost,
    }));
  };

  submitPost = () => {};

  render() {
    return (
      <div className="page-wrapper-sidebar support-room-page">
        <SideNavigation />
        <div className="page-body">
          {this.state.displaySubmitPost && (
            <div className="post-form">
              <h3>Make a Post</h3>
              <textarea
                type="text"
                placeholder="Write about your experience here in this safe environment."
              />
              <Button onClick={this.submitPost} title="Add Post" />
            </div>
          )}
          <SupportRoom />
          <Button onClick={this.createPost} title="Tell Your Story" />
        </div>
      </div>
    );
  }
}

export default SupportRoomPage;
