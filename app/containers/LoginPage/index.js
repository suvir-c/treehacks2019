import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import UserActions from '../../stores/user/actions';

class Login extends React.Component {
  state = {};

  render() {
    return <h1>hi</h1>;
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(Object.assign({}, UserActions), dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Login);
