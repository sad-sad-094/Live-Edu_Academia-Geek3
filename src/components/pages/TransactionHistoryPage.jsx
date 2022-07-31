/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsCashCoin } from 'react-icons/bs'
import { ColumContainer, ReturnBack, THistory } from '../../styles/GlobalStyles'
import BackButton from '../modules/BackButton'

function TransactionHistory(props) {

  const navigation = useNavigate();

  useEffect(() => {
    console.log(props);
    if (!props.isLogged) {

      navigation("/login");
    }
  })


  return (

    <ColumContainer>

      <ReturnBack>
        <BackButton back={() => { navigation("/userprofile") }} />
        <p>Transaction history</p>
      </ReturnBack>

      <THistory>
        <p><BsCashCoin color={'yellow'} />    200</p>
        <p>07/29/2022</p>
      </THistory>

      <THistory>
        <p><BsCashCoin color={'yellow'} />    100</p>
        <p>07/24/2022</p>
      </THistory>

      <THistory>
        <p><BsCashCoin color={'yellow'} />    100</p>
        <p>07/20/2022</p>
      </THistory>

    </ColumContainer>

  )

}

export default TransactionHistory
