/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { AnswerText1, ColumContainer, ReturnBack } from '../../styles/GlobalStyles';
import UserInfoHeader from '../modules/UserHeader';
import { SiCashapp } from 'react-icons/si';
import { GiCash } from 'react-icons/gi';
import { TiSocialAtCircular } from 'react-icons/ti';
import { MdShop } from 'react-icons/md';
import BackButton from '../modules/BackButton';

function CurrentBalance(props) {

  const navigation = useNavigate();

  useEffect(() => {
    console.log(props);
    if (!props.isLogged) {
      
      navigation("/login");
    }
  })

  return (

    <ColumContainer>

      <UserInfoHeader userName={props.userName} userCoins={props.userCoins} />

      <ReturnBack>
        <BackButton back={() => { navigation("/userprofile") }} />
        <p>Current balance</p>
      </ReturnBack>

      <AnswerText1 onClick={()=>{navigation("/buy")}} className="pointer">
        <SiCashapp size={25} />
        <p>Buy</p>
      </AnswerText1>

      <AnswerText1>
        <MdShop size={25} />
        <p>Promo Code</p>
      </AnswerText1>

      <AnswerText1>
        <GiCash size={25} />
        <p>Aditional Income</p>
      </AnswerText1>

      <AnswerText1>
        <TiSocialAtCircular size={25} />
        <p>Social Media</p>
      </AnswerText1>

    </ColumContainer>

  )

}

export default CurrentBalance;
