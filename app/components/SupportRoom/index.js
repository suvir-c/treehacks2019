import React from 'react';

import Post from 'components/Post';

/* eslint-disable react/prefer-stateless-function */
class SupportRoom extends React.Component {
  render() {
    return (
      <div className="support-room">
        <Post />
      </div>
    );
  }
}

export default SupportRoom;
