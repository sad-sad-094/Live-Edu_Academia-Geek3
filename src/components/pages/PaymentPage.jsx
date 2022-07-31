/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ColumContainer, CredCardsAv, ReturnBack } from '../../styles/GlobalStyles'
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';
import SaveButton from '../modules/SaveButton';
import BackButton from '../modules/BackButton';
import { BiCreditCard } from 'react-icons/bi';
import { db } from '../../utils/FireBase';
import { toast } from 'react-toastify';
import firebase from 'firebase/app';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsCoin } from 'react-icons/bs';

function Payment(props) {

  const navigation = useNavigate();
  const [newCard, setNewCard] = useState({
    cardNumber: "",
    expiryDate: "",
    cvc: ""
  });
  const [cards, setCards] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (!props.isLogged) {
      navigation("/login");
    }
    db.collection("userData").doc(props.userId).get()
      .then(doc => {
        setCards(doc.data().creditcard);
      })
  })

  const { wrapperProps,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps
  } = usePaymentInputs();

  const addCreditCard = () => {
    db.collection("userData").doc(props.userId).update({ creditcard: firebase.firestore.FieldValue.arrayUnion(newCard) })
      .then(() => toast.success("Card added succesfully"))
      .catch(err => toast.error("Something gone wrong!"))
  }


  const handleChange = (event) => {
    setNewCard(
      { ...newCard, [event.target.name]: event.target.value, }
    )
  }

  const updateCoins = () => {
    db.collection('userData').doc(props.userId).update({ coins: firebase.firestore.FieldValue.increment(1000) })
      .then(() => { //Then no tiene response porque pasa sin dar respueste => status 204

        toast.success('Successful purchase. Enjoy it!');
        props.setUserCoins(props.userCoins + 1000);
        
      })
      .catch((error) => {
        // The document probably doesn't exist.
        toast.warn("Your purchase have failed", error);
      });
  }

  return (

    <ColumContainer>

      <ReturnBack>
        <BackButton back={() => { navigation("/userprofile") }} />
        <p>Payment</p>
      </ReturnBack>

      <div style={{ justifyContent: 'center', margin: '0 auto' }}>
        <PaymentInputsWrapper {...wrapperProps}>
          <svg {...getCardImageProps({ images })} />
          <input {...getCardNumberProps({ onChange: handleChange })} />
          <input {...getExpiryDateProps({ onChange: handleChange })} />
          <input {...getCVCProps({ onChange: handleChange })} />
        </PaymentInputsWrapper>
      </div>

      <SaveButton fn={addCreditCard} name={"Add card"} />

      <div style={{ justifyContent: 'center', margin: '2rem auto' }}>
        <h4 style={{marginLeft: '4rem'}}>Available cards</h4>
        <p>To make a buy, please click on one card.</p>
      </div>

      {cards.map(card => {
        return (
          <CredCardsAv onClick={handleShow} className="pointer">
            <BiCreditCard />
            <h2>Card Number: {card.cardNumber}</h2>
            <h2>Expiry Date: {card.expiryDate}</h2>
          </CredCardsAv>)
      })}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Buy more coins</Modal.Title>
        </Modal.Header>
        <Modal.Body>You are going to buy 1000 <BsCoin color={'yellow'} /></Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => {
            updateCoins()
            handleClose()
          }}>
            Buy
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </ColumContainer>

  )

}

export default Payment;