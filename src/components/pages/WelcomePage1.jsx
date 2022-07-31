/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import { React, Component } from 'react';
import RoutingNextButton from "../modules/NetxButton";
import { LandingImg, WelcomeTextContainer, BasicContainer, WelcomeContainer } from "../../styles/GlobalStyles";

class Welcome1 extends Component {
  render() {
    return (

      <div>
        <BasicContainer>
          <LandingImg src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1658272062/LiveEdu/Welcome-Logo1_m2nyv4.png" />
        </BasicContainer>
        <WelcomeContainer>
          <WelcomeTextContainer>
            <h1>Explore New Courses</h1>
            <p>Study and watch all our new courses and there are many of them.</p>
          </WelcomeTextContainer>
          <WelcomeContainer>
            <RoutingNextButton router="/welcome2" />
          </WelcomeContainer>
        </WelcomeContainer>
      </div>


    )
  }
}


// () => {this.props.navigations('/welcome2')}
// function RoutingWelcome1(props) {
//   const navigation = useNavigate()
//   return <Welcome1 {...props} navigations={navigation}/>
// }


export default Welcome1;
