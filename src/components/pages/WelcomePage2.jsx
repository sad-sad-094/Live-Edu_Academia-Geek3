/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import React, { Component } from 'react';
import RoutingNextButton from "../modules/NetxButton";
import { LandingImg, WelcomeTextContainer, BasicContainer, WelcomeContainer } from "../../styles/GlobalStyles";


class Welcome2 extends Component {
  render() {
    return (

      <div>
        <BasicContainer>
          <LandingImg src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1658272062/LiveEdu/Welcome-Logo2_z5eg4k.png" />
        </BasicContainer>
        <WelcomeContainer>
          <WelcomeTextContainer>
            <h1>See your goals</h1>
            <p>Learn and learn new things every day and get rewards be on top.</p>
          </WelcomeTextContainer>
          <WelcomeContainer>
            <RoutingNextButton router="/welcome3" />
          </WelcomeContainer>
        </WelcomeContainer>
      </div>


    )
  }
}


export default Welcome2;
