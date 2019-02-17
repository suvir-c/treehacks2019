import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable react/prefer-stateless-function */
class Reply extends React.Component {
  render() {
    return (
      <div className="reply">
        <h4 className="author">Author</h4>
        <p className="body-text">{this.props.value}</p>
      </div>
    );
  }
}

Reply.propTypes = {
  value: PropTypes.string,
};

export default Reply;
