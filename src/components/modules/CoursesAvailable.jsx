/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import React from 'react';
import { CoursesContainer, Courses, EachCourse, } from '../../styles/GlobalStyles';


function CoursesA(props) {

  const basicTitle = "Elementary";
  const basicDescription = "For beginners and intermediates.";
  const basicImg = "https://res.cloudinary.com/dtxqusdhr/image/upload/v1658272062/LiveEdu/Elementary-Course_n3awle.png";

  const advancedTitle = "Advanced";
  const advancedDescription = "For advanced.";
  const advancedImg = "https://res.cloudinary.com/dtxqusdhr/image/upload/v1658343808/LiveEdu/Advanced-Course_kvonya.png";


  return (
    <CoursesContainer>
      <h3>Courses</h3>

      <Courses>

        <EachCourse className="pointer" onClick={() => { props.buyCourse(450, basicImg, basicTitle, basicDescription) }}>
          <img alt="" src={basicImg} />
          <h2>{basicTitle}</h2>
          <p>{basicDescription}</p>
        </EachCourse>

        <EachCourse className="pointer" onClick={() => { props.buyCourse(550, advancedImg, advancedTitle, advancedDescription) }}>
          <img alt="" src={advancedImg} />
          <h2>{advancedTitle}</h2>
          <p>{advancedDescription}</p>
        </EachCourse>

      </Courses>

    </CoursesContainer>
  )
}

export default CoursesA;
