/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import React from 'react';
import { UEmail } from '../../styles/GlobalStyles';


function SetEmail(props) {

  return(

    <>
      <UEmail>{props.userEmail}</UEmail>
    </>

  )

}

export default SetEmail;
