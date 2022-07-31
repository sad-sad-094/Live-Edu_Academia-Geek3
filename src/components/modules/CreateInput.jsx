/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import { React } from 'react';
import { Input } from '../../styles/GlobalStyles';

function CreateInput(props) {

  const setUser = (event) => {
    props.setNewUser({
      ...props.newUser,
      [event.target.name]: event.target.value,
    })
  }


  return (

      <form onChange={setUser} >
        <Input type="text" placeholder="Enter your name" name="name" required></Input>
        <Input type="email" placeholder="Enter your email" name="email" required></Input>
        <Input type="text" placeholder="Enter your phone number" name="phone" required></Input>
        <Input type="password" placeholder="Enter your password" name="password" required></Input>
      </form>

  )
}

export default CreateInput;
