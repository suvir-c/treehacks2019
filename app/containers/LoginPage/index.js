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
        <h1>Log In to Echo</h1>
        <p>
          We are an anonymous platform with the mission of supporting sexual
          harassment victims by decentralizing user data and creating localized
          anonymous support communities. We use blockchain technology to ensure
          that your data is private to you and that your community will not know
          your identity.
        </p>
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
