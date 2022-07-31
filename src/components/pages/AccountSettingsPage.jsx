/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import React, { useEffect } from 'react';
import { AnswerText1, ColumContainer, LogoutContainer, ReturnBack, UserInfoContainer } from '../../styles/GlobalStyles';
import BackButton from '../modules/BackButton';
import { FaUser, FaPhone } from 'react-icons/fa';
import { GoPencil } from 'react-icons/go';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { BiLogOut } from 'react-icons/bi';
import SetName from '../modules/SetUserName';
import SetEmail from '../modules/SetUserEmail';
import SetPhone from '../modules/SetUserPhone';
import { useNavigate } from 'react-router-dom';
import app from '../../utils/FireBase';
import '../../styles/Styles.css';


function AccountSettings(props) {

  const navigation = useNavigate();

  useEffect(() => {
    if (!props.isLogged) {
      console.log(props);
      navigation("/login");
    }
  })

  const logout = () => {
    app.auth().signOut();
    props.setUserName("userName");
    props.setIsLogged(false);
    props.setUserEmail("userEmail");
    navigation("/login");
  }

  return (

    <ColumContainer>

      <ReturnBack>
        <BackButton back={() => { navigation("/userprofile") }} />
        <p>Account Settings</p>
      </ReturnBack>

      <UserInfoContainer>

        <AnswerText1>
          <FaUser size={25} />
          <SetName userName={props.userName} />
          <GoPencil size={25} />
        </AnswerText1>

        <AnswerText1>
          <MdEmail size={25} />
          <SetEmail userEmail={props.userEmail} />
          <GoPencil size={25} />
        </AnswerText1>

        <AnswerText1>
          <FaPhone size={25} />
          <SetPhone userPhone={props.userPhone} />
          <GoPencil size={25} />
        </AnswerText1>

        <AnswerText1>
          <MdLocationOn size={25} />
          <p>Colombia</p>
          <GoPencil size={25} />
        </AnswerText1>

      </UserInfoContainer>

      <LogoutContainer>
        <AnswerText1>
          <BiLogOut size={25} />
          <p onClick={logout} className="pointer">Logout</p>
        </AnswerText1>
      </LogoutContainer>

    </ColumContainer>

  )

}

export default AccountSettings
