/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LandingContainer, LandingImg } from '../../styles/GlobalStyles';


function Landing() {

  const navigation = useNavigate()

  setTimeout(() => navigation('/welcome1'), 6000)

  return (

    <div>
      <LandingContainer>
        <LandingImg src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1658272062/LiveEdu/LandingPage-Logo_xfjjyq.png" />
      </LandingContainer>
    </div>

  )
}

export default Landing;
