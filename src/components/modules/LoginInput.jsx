/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import React from 'react';
import { Input } from '../../styles/GlobalStyles';

function LoginInput(props) {

  const setUser = (event) => {
    props.loginSetUser({
      ...props.loginUser,
      [event.target.name]: event.target.value,
    })
  }

    return (

      <form onChange={setUser}>
        <Input type="email" placeholder="Enter your email" name="email" required></Input>
        <Input type="password" placeholder="Enter your password" name="password" required></Input>
      </form>

    ) 

}

export default LoginInput;

