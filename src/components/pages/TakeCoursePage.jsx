/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import React, { useEffect, useState } from 'react';
import { MainContainer, QuestionText, ReturnBack, ColumContainer, CoursesCard, IntoCard, CardImg, TextCard, TimeCard } from '../../styles/GlobalStyles';
import { useNavigate, useLocation} from 'react-router-dom';
import BackButton from '../modules/BackButton';
import VideoPlayer from '../modules/VideoPlayer';
import GetTestData from '../../utils/GetDataCourses';

function TakeCourse(props) {

  const navigation = useNavigate();
  const [data, setData] = useState([]);
  const [urlVideo, setUrlVideo] = useState("");
  const [videoTitle, setVideoTitle] = useState("");
  const [videoDescription, setVideoDescription] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (!props.isLogged) {
      navigation("/login");
    }
    GetTestData().then((response) => {
      setData(response);
      setUrlVideo(response[0].video);
      setVideoTitle(response[0].title);
      setVideoDescription(response[0].description)
    })
  }, [setData, setUrlVideo, setVideoTitle, setVideoDescription])


  return (

    <MainContainer style={{ marginBottom: "6%" }}>

      <ReturnBack>
        <BackButton back={() => navigation("/coursehome", {state:location.state})} />
      </ReturnBack>

      <div>
        <VideoPlayer video={urlVideo} />
      </div>

      <QuestionText style={{ flexDirection: 'column' }}>
        <h5>{videoTitle}</h5>
        <p>{videoDescription}</p>
      </QuestionText>

      <ColumContainer>

        {data.map(test => {
          return (

            <CoursesCard>
              <IntoCard>
                <CardImg alt="" src={test.img} />
              </IntoCard>
              <TextCard>
                <h2 onClick={() => {
                  setUrlVideo(test.video);
                  setVideoTitle(test.title);
                  setVideoDescription(test.description)
                }} className="pointer">{test.title}</h2>
                <p>{test.description}</p>
              </TextCard>
              <TimeCard>
                <p>{test.time}min</p>
              </TimeCard>
            </CoursesCard>

          )
        })}
      </ColumContainer>


    </MainContainer>

  )
}

export default TakeCourse;
