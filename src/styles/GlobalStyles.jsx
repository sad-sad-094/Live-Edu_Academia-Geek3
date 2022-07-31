/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import styled from 'styled-components';

export const LandingImg = styled.img`
  width: 35%;
  margin: 2rem auto;
`;

export const LandingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 70%;
  margin: auto;
`;

export const Button = styled.button`
  width: 70%;
  padding: 3px 2px;
  margin: 0 auto;
  border-radius: 15px;
  border: 1px solid #BFC3FC;
  justify-conent: center;
  align-items: center;
  background-color: #BFC3FC;
  font-size: 14px;
  font-weight: bold;
  color: #FFFFFF;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
  }
`;

export const BasicContainer = styled.div`
  display:flex;
  width: 70%;
  margin: 2rem auto;
  justify-content: center;
  align-items: center;
`;

export const WelcomeContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: felx-end;

  a {
    text-decoration:none;
    cursor: pointer;
    font-width: bold;
    color:#0048BA;
  }
`;

export const WelcomeTextContainer = styled.div`
  width: 70%;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  padding-left: 1rem;
  padding-bottom: 1rem;
`;

export const SingUp = styled.div`
  display: flex;
  width: 70%;
  justify-content: center;
  margin: 0 auto;
`;

export const Input = styled.input`
  width: 90%;
  height: auto;
  padding: 4px 6px;
  margin: 2px auto;
  border: #BFC3FC;
  border-radius: 15px;
  font-size: 14px;
`;

export const UserHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 10rem;
  margin: 0 auto;
  background-color: #BFC3FC;
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  h1 {
    font-size: 26px;
    margin: 0;
    font-weight: bold;
  }

  p {
    font-size: 20px;
    margin: 0;
  }
`;

export const UserHi = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 30%;
`;

export const UserScore = styled.div`
  display: flex;
  flex-direction: row
  align-items: center;
  gap: 1rem;
  margin-right: 30%;
`;

export const CoursesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;

  h3 {
    font-size: 22px;
  }

  h2 {
    font-size: 16px;
    font-weight: bold;
    margin: 0;
    margin-top: 4px;
  }

  p {
    font-size: 12px;
    margin: 0;
    margin-top: 4px;
  }

`;

export const Courses = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
`;

export const EachCourse = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
`;

export const ColumContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 70px;
  gap: 10px;

  h3 {
    font-size: 22px;
  }
`;

export const CoursesCard = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  margin-left: 2px:
  margin-right: 2px;
  alig-items: center;
  border: 3px solid #BFC3FC;
  border-radius: 15px;

  h2 {
    font-size: 16px;
    font-weight: bold;
    margin: 0;
    margin-top: 4px;
  }

  p {
    font-size: 12px;
    margin: 0;
    margin-top: 4px;
  }
`;

export const CardImg = styled.img`
  width: 90px;
`;

export const IntoCard = styled.div`
  display: flex;
  align-items: center;
  padding: 2px 15px;
`;

export const TextCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2px;
  margin-left: 10px;
`;

export const TimeCard = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  padding: 2px 15px;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

export const ReturnBack = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  gap: 1rem;

  p {
    font-size: 18px;
    margin: auto auto;
  }
`;

export const QuestionsSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  justify-content: center;
  align-items: center;
`;

export const QuizButton = styled.button`
  width: 70%;
  padding: 3px 2px;
  margin: 0 auto;
  border-radius: 15px;
  border: 1px solid #BFC3FC;
  background-color: #BFC3FC;
  justify-conent: center;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  color: black;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
}
`;

export const ComeBackButton = styled.button`
  width: 10%;
  padding: 3px 2px;
  margin: 0 auto;
  justify-conent: center;
  align-items: center;
  background-color: #BFC3FC;
  border: 1px solid #BFC3FC;
  border-radius: 15px;
  font-size: 14px;
  font-weight: bold;
  color: black;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
`;

export const AnswersContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  margin: 1rem auto;
`;

export const AnswerText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  margin: 0.5rem 0;
  margin-right: auto;
`;

export const AnswerText1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  margin: 0.5rem auto;
`;


export const QuestionText = styled.div`
  display:flex;
  width: 70%;
  margin: 1rem auto;
  justify-content: center;
  align-items: center;

  h5 {
    font-weight: bold;
    font-size: 20px;
  }
`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const LogoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20%;
`;

export const UName = styled.p`
  font-size: 18px;
  margin: auto auto;
`;

export const UEmail = styled.p`
  font-size: 18px;
  margin: auto auto;
`;

export const UPhone = styled.p`
  font-size: 18px;
  margin: auto auto;
`;

export const THistory = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  margin: 2px auto;
  gap: 2rem;
  alig-items: center;
  border: 3px solid #BFC3FC;
  border-radius: 15px;

  h2 {
    font-size: 16px;
    font-weight: bold;
    margin: 0 auto;
    margin-top: 4px;
  }

  p {
    font-size: 18px;
    margin: 0 auto;
    margin-top: 4px;
  }
`;

export const CredCardsAv = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  margin: 0 auto;
  pading: 0.5rem;
  alig-items: center;
  border: 3px solid #BFC3FC;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  h2 {
    font-size: 18px;
    font-width: bold;
  }
`;

