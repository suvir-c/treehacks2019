/**
 * LoginPage
 *
 * This is the page we show when the user first visits the web app */

import React from 'react';
import TextInput from 'components/TextInput';
// import Button from 'components/Button';
import { Flex, Type, Box, Button } from 'blockstack-ui';
import * as blockstack from 'blockstack';
import {
  SignInBlockstackButton,
  SignInBlockstackLiteButton,
} from 'blockstack-signin-btn';

class Login extends React.Component {
  render() {
    return (
      <div>
        <h1>Login to treehacks</h1>
        <Button onClick={() => blockstack.redirectToSignIn()}>
          Sign In with Blockstack
        </Button>
        <Button onClick={() => blockstack.signUserOut(window.location.href)}>
          Sign out of Blockstack
        </Button>
      </div>
    );
  }
}

export default Login;
