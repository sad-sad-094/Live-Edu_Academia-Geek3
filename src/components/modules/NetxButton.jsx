/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */


import  { React, Component } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../styles/GlobalStyles';

class NextButton extends Component {
  render() {
    return (

      <Button type="button" onClick={() => {this.props.navigations(this.props.router)}}>Next</Button>

    )
  }
}

function RoutingNextButton(props) {
  const navigation = useNavigate()
  return <NextButton {...props} navigations={navigation}/>
}

export default RoutingNextButton;
