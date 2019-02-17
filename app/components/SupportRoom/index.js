import React from 'react';

import Post from 'components/Post';
// import { fetchChannelPosts } from '../../lib/api';
// const queryString = require('query-string');

/* eslint-disable react/prefer-stateless-function */
class SupportRoom extends React.Component {
  state = {};

  async componentDidMount() {
    // console.log(this.props.location);
    // const params = new URLSearchParams(this.props.location.search);
    // console.log('test');
    // const id = params.get('id'); // bar
    // // fetch posts & replies
    // const posts = await fetchChannelPosts(id);
    // console.log(posts);
    // this.setState({ posts });
  }

  render() {
    return (
      <div className="support-room">
        <Post />
      </div>
    );
  }
}

export default SupportRoom;
