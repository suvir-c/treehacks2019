import React from 'react';

import Reply from 'components/Reply';

/* eslint-disable react/prefer-stateless-function */
class Post extends React.Component {
  state = {
    discussionOpen: false,
    displayAddReply: false,
  };

  toggleDiscussion = () => {
    this.setState(prevState => ({ discussionOpen: !prevState.discussionOpen }));
  };

  addReply = () => {
    this.setState(prevState => ({
      displayAddReply: !prevState.displayAddReply,
    }));
  };

  submitReply = () => {
    // var reply = <Reply/>
    // var concatReplies = this.state.replies.concat('');
    // this.setState({ replies: concatReplies });
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
          <button
            type="button"
            className="discussions-button"
            onClick={this.addReply}
          >
            <p>Add Support</p>
          </button>
        </div>
        {this.state.discussionOpen && <Reply />}
        {this.state.displayAddReply && (
          <div className="reply-form">
            <textarea
              type="text"
              placeholder="Type to reply in a support and productive way."
            />
            <button
              type="button"
              className="discussions-button"
              onClick={this.submitReply}
            >
              <p>Submit</p>
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Post;
