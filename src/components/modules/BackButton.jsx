/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import React from 'react';
import { ComeBackButton } from '../../styles/GlobalStyles';
import { BsArrowLeft } from 'react-icons/bs'


function BackButton(props) {

  return (

    <ComeBackButton onClick={props.back} type="button"><BsArrowLeft size={24} /></ComeBackButton>

  )

}

export default BackButton;
