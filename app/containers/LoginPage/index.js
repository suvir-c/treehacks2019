import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PropTypes from 'prop-types';
import Button from 'components/Button';
import UserActions from '../../stores/user/actions';

class Login extends React.Component {
  state = {};

  async componentDidMount() {
    window.superSecretLogin = this.props.login;
    await this.props.handleLogIn();
  }

  render() {
    return (
      <div className="page-wrapper-sidebar login-page">
        <Button title="Sign In with Blockstack" onClick={this.props.login} />
      </div>
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
