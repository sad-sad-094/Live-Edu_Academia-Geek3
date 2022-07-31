/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */



import React, { Component } from 'react';
import { Button } from '../../styles/GlobalStyles';

class LoginButton extends Component {
  render() {
    return (

      <Button onClick={this.props.login} type="button">Login</Button>

    )
  }
}

export default LoginButton;
