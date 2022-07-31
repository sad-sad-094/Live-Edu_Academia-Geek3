/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import React from 'react';
import { ColumContainer, CoursesCard, IntoCard, CardImg, TextCard, TimeCard } from '../../styles/GlobalStyles';

function Topics() {

  return (
    <ColumContainer>
      <h3>Topics to study</h3>
      <CoursesCard>
        <IntoCard>
          <CardImg alt="" src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1658343548/LiveEdu/Topic1_tli4gy.png" />
        </IntoCard>
        <TextCard>
          <h2>In the kitchen</h2>
          <p>Talking about food in the kitchen.</p>
        </TextCard>
        <TimeCard>
          <p>30min</p>
        </TimeCard>
      </CoursesCard>

      <CoursesCard>
        <IntoCard>
          <CardImg alt="" src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1658343548/LiveEdu/Topic2_syqbi2.png" />
        </IntoCard>
        <TextCard>
          <h2>Bulletin board</h2>
          <p>Shopping conversation topic near bulletin board.</p>
        </TextCard>
        <TimeCard>
          <p>40min</p>
        </TimeCard>
      </CoursesCard>

      <CoursesCard>
        <IntoCard>
          <CardImg alt="" src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1658343548/LiveEdu/Topic3_wgeos0.png" />
        </IntoCard>
        <TextCard>
          <h2>Night city</h2>
          <p>Night walk through the night city and a trip to a cafe.</p>
        </TextCard>
        <TimeCard>
          <p>25min</p>
        </TimeCard>
      </CoursesCard>

      <CoursesCard>
        <IntoCard>
          <CardImg alt="" src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1658343548/LiveEdu/Topic4_d3nnqj.png" />
        </IntoCard>
        <TextCard>
          <h2>Plan for the day</h2>
          <p>Mikey plans his day.</p>
        </TextCard>
        <TimeCard>
          <p>19min</p>
        </TimeCard>
      </CoursesCard>

      <CoursesCard>
        <IntoCard>
          <CardImg alt="" src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1658343548/LiveEdu/Topic5_oxutxj.png" />
        </IntoCard>
        <TextCard>
          <h2>Two friends</h2>
          <p>Friends talk and tell their stories.</p>
        </TextCard>
        <TimeCard>
          <p>28min</p>
        </TimeCard>
      </CoursesCard>


    </ColumContainer>
  )

}

export default Topics;
