/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */


import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardImg, ColumContainer, CoursesCard, IntoCard, TextCard, TimeCard } from '../../styles/GlobalStyles';
import GetTestData from '../../utils/GetDataCourses';
import '../../styles/Styles.css';


function TestsList() {

  const [data, setData] = useState([])
  const navigation = useNavigate();

  useEffect(() => {
    GetTestData().then((response) => { setData(response) })
  }, [setData]);




  return (
    <ColumContainer>
      <h3>Topic Quizzes</h3>

      {data.map(test => {
        return (


          <CoursesCard>
            <IntoCard>
              <CardImg alt="" src={test.img} />
            </IntoCard>
            <TextCard>
              <h2 onClick={()=>navigation("/taketest", {state:{data:test}})} className="pointer">{test.title}</h2>
              <p>{test.description}</p>
            </TextCard>
            <TimeCard>
              <p>{test.time}min</p>
            </TimeCard>
          </CoursesCard>

        )
      })}
    </ColumContainer>


  )

}


export default TestsList;
