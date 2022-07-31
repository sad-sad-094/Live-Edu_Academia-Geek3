/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */


import React, { useEffect } from 'react';
import { MainContainer } from '../../styles/GlobalStyles';
import CoursesA from '../modules/CoursesAvailable';
import NavBar from '../modules/NavBar';
import Topics from '../modules/TopicsAtHome';
import UserInfoHeader from '../modules/UserHeader';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { db } from '../../utils/FireBase';


function Home(props) {

  const navigation = useNavigate();

  let actualBalance = props.userCoins;

  useEffect(() => {
    if (!props.isLogged) {
      navigation("/login");
    }
  })


  const buyBasicCourse = (coursePrice, img, title, description) => {
    if (actualBalance >= coursePrice) {

      let newBalance = actualBalance - coursePrice;
      

      db.collection('userData').doc(props.userId).update({ coins: newBalance })
        .then(() => { //Then no tiene response porque pasa sin dar respueste => status 204
          
          toast.success('You have buy a Course. Enjoy it!');
          props.setUserCoins(newBalance);
          navigation("/coursehome", {
            state: {
              image: img,
              course: title,
              description: description
            }
          });
        })
        .catch((error) => {
          // The document probably doesn't exist.
          toast.warn("Error updating balance: ", error);
        });



    } else {
      toast.warn('You have no enough coins to buy this course');
      navigation("/buy");
    }

  }


  return (
    <>

      <MainContainer>

        <UserInfoHeader userName={props.userName} userCoins={props.userCoins} />

        <CoursesA buyCourse={buyBasicCourse} />

        <Topics />

        <NavBar userName={props.userName} isLogged={props.isLogged} />

      </MainContainer>

    </>
  );

}



export default Home;
