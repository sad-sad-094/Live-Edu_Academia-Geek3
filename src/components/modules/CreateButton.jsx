/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */


import React, { Component } from 'react';
import { Button } from '../../styles/GlobalStyles';

class CreateButton extends Component {
  render() {
    return (

      <Button onClick={this.props.create} type="button">Create</Button>

    )
  }
}

export default CreateButton;

