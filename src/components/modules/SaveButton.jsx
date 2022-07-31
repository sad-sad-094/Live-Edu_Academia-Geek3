/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import React from 'react';
import { Button } from '../../styles/GlobalStyles';


function SaveButton(props) {

  return (

    <Button onClick={props.fn} type="submit">{props.name?props.name:"Save"}</Button>

  )

}

export default SaveButton;
