/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import React, { Component } from 'react';
import RoutingNextButton from "../modules/NetxButton";
import { LandingImg, WelcomeTextContainer, BasicContainer, WelcomeContainer } from "../../styles/GlobalStyles";


class Welcome3 extends Component {
  render() {
    return (

      <div>
        <BasicContainer>
          <LandingImg src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1658272062/LiveEdu/Welcome-Logo3_bxtr3j.png" />
        </BasicContainer>
        <WelcomeContainer>
          <WelcomeTextContainer>
            <h1>Move on to the next course</h1>
            <p>Don't stop at one, start learning the next and make progress.</p>
          </WelcomeTextContainer>
          <WelcomeContainer>
          <RoutingNextButton router="/login" />
          </WelcomeContainer>
        </WelcomeContainer>
      </div>


    )
  }
}


export default Welcome3;
