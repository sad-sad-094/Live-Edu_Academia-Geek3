/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */


import React, { useEffect } from 'react';
import { ColumContainer, LandingImg, MainContainer, UserScore, ReturnBack } from '../../styles/GlobalStyles';
import BackButton from '../modules/BackButton';
import { BsCoin } from 'react-icons/bs';
import { useNavigate, useLocation } from 'react-router-dom';
import SaveButton from '../modules/SaveButton';
import { db } from '../../utils/FireBase';
import {toast } from 'react-toastify';


function EvaluationTest(props) {

  const navigation = useNavigate();
  const location = useLocation()

  useEffect(() => {
    if (!props.isLogged) {
      navigation("/login");
    }
  })

  const updateCoinsDB = () => {
    db.collection('userData').doc(props.userId).update({ coins: props.userCoins })
      .then(() => { //Then no tiene response porque pasa sin dar respueste => status 204
        toast.success("Balance successfully updated!");
        navigation("/test");
      })
      .catch((error) => {
        // The document probably doesn't exist.
        toast.warn("Error updating balance: ", error);
        navigation("/test")
      });
  }

  return (

    <MainContainer>

      <ReturnBack>
        <BackButton back={() => { navigation("/test") }} />
        <p>{location.state.title}</p>
      </ReturnBack>

      <ColumContainer>

        <LandingImg src={"https://res.cloudinary.com/dtxqusdhr/image/upload/v1658691009/LiveEdu/Stars_atbd7d.png"} />
        <div style={{ justifyContent: 'center', alignItems: 'center', margin: 'auto auto' }}>
          <h3>Congratulations</h3>
          <p>You have answered correctly.</p>
          <UserScore>
            <p><BsCoin color={'yellow'} size={25} /> {props.userCoins}</p>
          </UserScore>
        </div>

        <SaveButton fn={updateCoinsDB} />

      </ColumContainer>

    </MainContainer>

  )

}

export default EvaluationTest;
