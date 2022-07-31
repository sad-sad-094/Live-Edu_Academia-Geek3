/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainContainer } from '../../styles/GlobalStyles';
import NavBar from '../modules/NavBar';
import TestsList from '../modules/QuizzesAvailable';
import UserInfoHeader from '../modules/UserHeader';



function ToDoTests(props) {

  const navigation = useNavigate();


  useEffect(() => {
    if(!props.isLogged) {
      navigation("/login");
    }
  })


  return (

    <MainContainer>
      <UserInfoHeader userName={props.userName} userCoins={props.userCoins} />
      <TestsList />
      <NavBar userName={props.userName} isLogged={props.isLogged} />
    </MainContainer>

  )
}


export default ToDoTests;
