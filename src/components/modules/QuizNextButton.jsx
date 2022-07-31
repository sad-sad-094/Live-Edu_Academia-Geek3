/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */


import React from 'react';
import { QuizButton } from '../../styles/GlobalStyles';


function SubmitQuizButton(props) {

  return(

    <QuizButton onClick={props.evaluate} type="button">Next</QuizButton>

  )

}

export default SubmitQuizButton;
