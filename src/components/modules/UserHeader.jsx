/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */


import React from 'react';
import { UserHi, UserHeader, UserScore } from '../../styles/GlobalStyles'
import { BsCoin } from 'react-icons/bs';
import { MdNotifications } from 'react-icons/md';

function UserInfoHeader(props) {

  return (

    <UserHeader>
      <UserHi>
        <h1>Hi, {props.userName}.</h1>
        <p>Let´s start learning.</p>
      </UserHi>

      <UserScore>
        <p><BsCoin color={'yellow'} /> {props.userCoins}</p>
        <p><MdNotifications /></p>
      </UserScore>
    </UserHeader>
  )
}


export default UserInfoHeader;
