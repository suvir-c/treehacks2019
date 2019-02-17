import React from 'react';
import PropTypes from 'prop-types';

import Post from 'components/Post';
// import { fetchChannelPosts } from '../../lib/api';
// const queryString = require('query-string');

/* eslint-disable react/prefer-stateless-function */
class SupportRoom extends React.Component {
  state = {};

  render() {
    const posts = [];
    let empty = false;
    const placeholder = <h1>Be the first one to post!</h1>;
    if (this.props && this.props.posts.length > 0) {
      empty = false;
      for (let i = 0; i < this.props.posts.length; i += 1) {
        posts.push(<Post value={this.props.posts[i]} />);
      }
    } else {
      empty = true;
    }
    return (
      <div className="support-room">
        {empty && placeholder}
        {posts}
      </div>
    );
  }
}

SupportRoom.propTypes = {
  posts: PropTypes.array,
};

export default SupportRoom;
