import React from 'react';
import PropTypes from 'prop-types';
import Reply from 'components/Reply';

/* eslint-disable react/prefer-stateless-function */
class Post extends React.Component {
  state = {
    discussionOpen: false,
    displayAddReply: false,
    replies: [],
    replyText: '',
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
    const reply = this.state.replyText;
    this.setState(prevState => ({ replies: prevState.replies.concat(reply) }));
    this.setState({ discussionOpen: true });
  };

  render() {
    const replies = [];
    for (let i = 0; i < this.state.replies.length; i += 1) {
      replies.push(<Reply value={this.state.replies[i]} />);
    }
    return (
      <div className="post-wrapper">
        <h4 className="author">Anonymous Author</h4>
        <div className="post">
          <p className="body-text">{this.props.value}</p>
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
        {this.state.discussionOpen && replies}
        {this.state.displayAddReply && (
          <div className="reply-form">
            <textarea
              type="text"
              value={this.state.replyText}
              onChange={e => this.setState({ replyText: e.target.value })}
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

Post.propTypes = {
  value: PropTypes.string,
};

export default Post;
