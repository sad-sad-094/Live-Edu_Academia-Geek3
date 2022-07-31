/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */


import React, {useEffect} from 'react';
import { AnswerText1, ColumContainer, UserInfoContainer } from '../../styles/GlobalStyles';
import UserInfoHeader from '../modules/UserHeader';
import { FaUser, FaWallet } from 'react-icons/fa';
import {BsArrowDownUp, BsChatSquareTextFill} from 'react-icons/bs';
import {MdOutlineViewList} from 'react-icons/md';
import NavBar from '../modules/NavBar';
import {useNavigate} from 'react-router-dom';
import '../../styles/Styles.css';


function UserProfile(props) {

  const navigation = useNavigate();

  useEffect(() => {
    if (!props.isLogged) {
      console.log(props);
      navigation("/login");
    }
  })

  return (

    <ColumContainer>

      <UserInfoHeader userName={props.userName} userCoins={props.userCoins} />

      <UserInfoContainer>

        <AnswerText1 onClick={()=>{navigation("/accountsettings")}}>
          <FaUser size={25} />
          <p className="pointer">Personal Information</p>
        </AnswerText1>

        <AnswerText1 onClick={()=>{navigation("/transactions")}}>
          <BsArrowDownUp size={25} />
          <p className="pointer">Transaction History</p>
        </AnswerText1>

        <AnswerText1 onClick={()=>{navigation("/currentbalance")}}>
          <FaWallet size={25} />
          <p className="pointer">Payment</p>
        </AnswerText1>

        <AnswerText1>
          <MdOutlineViewList size={25} />
          <p>Terms of Use</p>
        </AnswerText1>

        <AnswerText1>
          <BsChatSquareTextFill size={25} />
          <p>Suport</p>
        </AnswerText1>

      </UserInfoContainer>

      <NavBar userName={props.userName} isLogged={props.isLogged} />

    </ColumContainer>
  )

}

export default UserProfile;
