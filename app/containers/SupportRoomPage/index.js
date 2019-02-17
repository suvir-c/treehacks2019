import React from 'react';

import SideNavigation from 'components/SideNavigation';
import SupportRoom from 'components/SupportRoom';
import Button from 'components/Button';

class SupportRoomPage extends React.Component {
  state = {
    displaySubmitPost: false,
    postText: '',
    posts: [],
  };

  createPost = () => {
    this.setState(prevState => ({
      displaySubmitPost: !prevState.displaySubmitPost,
    }));
  };

  submitPost = () => {
    const post = this.state.postText;
    this.setState(prevState => ({ posts: prevState.posts.concat(post) }));
  };

  render() {
    return (
      <div className="page-wrapper-sidebar support-room-page">
        <SideNavigation />
        <div className="page-body">
          <SupportRoom posts={this.state.posts} />
          {this.state.displaySubmitPost && (
            <div className="post-form">
              <h3>Make a Post</h3>
              <textarea
                type="text"
                value={this.state.postText}
                onChange={e => this.setState({ postText: e.target.value })}
                placeholder="Write about your experience here in this safe environment."
              />
              <Button onClick={this.submitPost} title="Add Post" />
            </div>
          )}
          <Button onClick={this.createPost} title="Tell Your Story" />
        </div>
      </div>
    );
  }
}

export default SupportRoomPage;
