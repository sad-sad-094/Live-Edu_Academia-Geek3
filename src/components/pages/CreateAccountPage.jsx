/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */


import React, { useState } from 'react';
import app, { db } from '../../utils/FireBase';
import 'firebase/auth';
import { WelcomeTextContainer, BasicContainer, WelcomeContainer } from "../../styles/GlobalStyles";
import CreateButton from '../modules/CreateButton';
import CreateInput from '../modules/CreateInput';
import { toast } from 'react-toastify';


function CreateAccount(props) {

  const defaultNewUser = () => {
    return {
      name: "",
      email: "",
      phone: "",
      password: ""
    }
  }

  const [newUser, setNewUser] = useState(defaultNewUser());

  const create = () => {

    app.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(() => {
        app.auth().currentUser.updateProfile({ displayName: newUser.name })
          .then(() => { })
        app.auth().currentUser.sendEmailVerification()
          .then(() => {
            db.collection('userData').doc(app.auth().currentUser.uid).set({ phone: newUser.phone, coins: 400, creditcard:[] })
              .then((docRef) => {
                console.log("Document written with ID: ", docRef);
              })
              .catch((error) => {
                console.error("Error adding document: ", error);
              });
            toast.success('Email verification have been sent.')
          })
      })
  }

  return (

    <div>
      <WelcomeTextContainer>
        <h1>Create new account</h1>
        <p>Create a new account by filling in all the fields or log in to an existing account.</p>
      </WelcomeTextContainer>
      <BasicContainer>
        <CreateInput newUser={newUser} setNewUser={setNewUser} />
      </BasicContainer>
      <WelcomeContainer>
        <CreateButton create={create} />
      </WelcomeContainer>


    </div>


  )
}


export default CreateAccount;
