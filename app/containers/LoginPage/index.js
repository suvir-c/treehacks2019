import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PropTypes from 'prop-types';
import UserActions from '../../stores/user/actions';

class Login extends React.Component {
  state = {};

  async componentDidMount() {
    window.superSecretLogin = this.props.login;
    await this.props.handleLogIn();
  }

  render() {
    return (
      <button type="button" onClick={this.props.login} my={6}>
        Sign In with Blockstack
      </button>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func,
  handleLogIn: PropTypes.func,
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(Object.assign({}, UserActions), dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Login);
