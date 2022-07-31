/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AnswerText1, Button, EachCourse, MainContainer, ReturnBack } from '../../styles/GlobalStyles';
import { FiClock, FiPlayCircle } from 'react-icons/fi';
import { CgNotes } from 'react-icons/cg';
import TestsList from '../modules/QuizzesAvailable';
import BackButton from '../modules/BackButton';

function CourseHome(props) {

  const navigation = useNavigate();
  const location = useLocation();

  return (

    <MainContainer style={{marginBottom:"6%"}}>

      <ReturnBack>
        <BackButton back={() => { navigation("/home") }} />
      </ReturnBack>

      <EachCourse>
        <img alt="" src={location.state.image} />
        <h2>{location.state.course}</h2>
        <p>{location.state.description}</p>
      </EachCourse>

      <AnswerText1>
        <p><FiClock /> 2:00 h</p>
        <p><FiPlayCircle /> 10 videos</p>
        <p><CgNotes /> 10 themes</p>
      </AnswerText1>

      <TestsList />

      <Button onClick={() => {navigation("/takecourse", {state: location.state})}}>Start</Button>



    </MainContainer>

  )

}

export default CourseHome
