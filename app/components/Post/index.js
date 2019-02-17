import React from 'react';

import Reply from 'components/Reply';

/* eslint-disable react/prefer-stateless-function */
class Post extends React.Component {
  state = {
    discussionOpen: false,
  };

  toggleDiscussion = () => {
    this.setState(prevState => ({ discussionOpen: !prevState.discussionOpen }));
  };

  render() {
    return (
      <div className="post-wrapper">
        <h4 className="author">Author</h4>
        <div className="post">
          <p className="body-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
            dolor dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna.
          </p>
          <button
            type="button"
            className="discussions-button"
            onClick={this.toggleDiscussion}
          >
            <p>Discussions</p>
          </button>
        </div>
        {this.state.discussionOpen && <Reply />}
      </div>
    );
  }
}

export default Post;
