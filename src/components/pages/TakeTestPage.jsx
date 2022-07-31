/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */


import React, { useState, useEffect } from 'react';
import { AnswersContainer, AnswerText, MainContainer, QuestionsSection, QuestionText, ReturnBack } from '../../styles/GlobalStyles';
import BackButton from '../modules/BackButton';
import SubmitQuizButton from '../modules/QuizNextButton';
import VideoPlayer from '../modules/VideoPlayer';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { useNavigate, useLocation } from 'react-router-dom';
import {toast} from 'react-toastify';



function TakeTest(props) {

  const [answer, setAnswer] = useState(undefined);
  const [option, setOption] = useState(
    {
      0: {text:"A", variant:false},
      1: {text:"B", variant:false},
      2: {text:"C", variant:false},
      3: {text:"D", variant:false},
    }
  );


  const navigation = useNavigate();
  
  const location = useLocation();

  useEffect(() => {
    console.log(props);
    if (!props.isLogged) {
      
      navigation("/login");
    }
  })

  const evaluate = () => {
    if(answer === undefined) {
      toast.warn('You have not selected any answer.')
    } else if(location.state.data.options[answer].isCorrect === "true") {
      console.dir(props.setUserCoins);
      props.setUserCoins(props.userCoins + parseInt(location.state.data.points));
      navigation("/evaluation", {state:{title:location.state.data.title}})
    } else {
      let correctAnswer = location.state.data.options.find(element => element.isCorrect === "true")
      toast.error(`Incorrect!\n The correct answer is: ${correctAnswer.answer}`);
      navigation("/test");
    }
  }

  return (

    <MainContainer style={{ marginBottom: '40px' }}>

      <ReturnBack>
        <BackButton back={() => navigation("/test")} />
        <p>{location.state.data.title}</p>
      </ReturnBack>

      <div>
        <VideoPlayer video={location.state.data.video} />
      </div>

      <QuestionsSection>

        <QuestionText>
          <h5>{location.state.data.question}</h5>
        </QuestionText>

        <AnswersContainer>



            <ButtonGroup className="mb-2" vertical={true}>
              {location.state.data.options.map((item, index) => {
                return (
                  <AnswerText>
                    <ToggleButton
                      id={`radio-${index}`}
                      type="radio"
                      variant={option[index].variant ? "outline-success" : "outline-primary"}
                      checked={answer === index}
                      value={index}
                      onChange={(e) => setAnswer(e.currentTarget.value)}
                    >
                      {option[index].text}
                    </ToggleButton>
                    <p>{item.answer}</p>

                  </AnswerText>)
              })}
            </ButtonGroup>
            


        </AnswersContainer>

      </QuestionsSection>

      <SubmitQuizButton evaluate={evaluate} />

    </MainContainer >

  )
}


export default TakeTest;
