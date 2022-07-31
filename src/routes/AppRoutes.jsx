/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import { React, Component } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from '../components/pages/HomePage';
import Landing from '../components/pages/LandingPage'
import Login from '../components/pages/LoginPage';
import CreateAccount from '../components/pages/CreateAccountPage';
import RoutingWelcome1 from '../components/pages/WelcomePage1';
import Welcome2 from '../components/pages/WelcomePage2';
import Welcome3 from '../components/pages/WelcomePage3';
import ToDoTests from '../components/pages/TestsPage';
import TakeTest from '../components/pages/TakeTestPage';
import UserProfile from '../components/pages/UserProfilePage';
import AccountSettings from '../components/pages/AccountSettingsPage';
import EvaluationTest from '../components/pages/EvaluationTestPage';
import TransactionHistory from '../components/pages/TransactionHistoryPage';
import CurrentBalance from '../components/pages/CurrentBalancePage';
import Payment from '../components/pages/PaymentPage';
import CourseHome from '../components/pages/CoursePage';
import TakeCourse from '../components/pages/TakeCoursePage';


class AppRoutes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home userName={this.props.userName} isLogged={this.props.isLogged} userCoins={this.props.userCoins} setUserCoins={this.props.setUserCoins} userId={this.props.userId} />} />
          <Route path="/" element={<Landing />} />
          <Route path="/welcome1" element={<RoutingWelcome1 />} />
          <Route path="/welcome2" element={<Welcome2 />} />
          <Route path="/welcome3" element={<Welcome3 />} />
          <Route path="/login" element={<Login setUserName={this.props.setUserName} setIsLogged={this.props.setIsLogged} setUserEmail={this.props.setUserEmail} setUserCoins={this.props.setUserCoins} setUserId={this.props.setUserId} setUserPhone={this.props.setUserPhone} />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/test" element={<ToDoTests userName={this.props.userName} isLogged={this.props.isLogged} userCoins={this.props.userCoins} />} />
          <Route path="/userprofile" element={<UserProfile userName={this.props.userName} isLogged={this.props.isLogged} userCoins={this.props.userCoins} />} />
          <Route path="/accountsettings" element={<AccountSettings userName={this.props.userName} userEmail={this.props.userEmail} userPhone={this.props.userPhone} isLogged={this.props.isLogged} setUserName={this.props.setUserName} setIsLogged={this.props.setIsLogged} setUserEmail={this.props.setUserEmail} />} />
          <Route path="/evaluation" element={<EvaluationTest isLogged={this.props.isLogged} userCoins={this.props.userCoins} userId={this.props.userId} />} />
          <Route path="/taketest" element={<TakeTest isLogged={this.props.isLogged} userCoins={this.props.userCoins} setUserCoins={this.props.setUserCoins} />} />
          <Route path={"/transactions"} element={<TransactionHistory isLogged={this.props.isLogged} userCoins={this.props.userCoins} setUserCoins={this.props.setUserCoins} />} />
          <Route path={"/currentbalance"} element={<CurrentBalance isLogged={this.props.isLogged} userCoins={this.props.userCoins} setUserCoins={this.props.setUserCoins} />} />
          <Route path={"/buy"} element={<Payment isLogged={this.props.isLogged} userCoins={this.props.userCoins} setUserCoins={this.props.setUserCoins} userId={this.props.userId} />} />
          <Route path={"/coursehome"} element={<CourseHome isLogged={this.props.isLogged} userCoins={this.props.userCoins} setUserCoins={this.props.setUserCoins} />} />
          <Route path={"/takecourse"} element={<TakeCourse isLogged={this.props.isLogged} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

      </BrowserRouter>


    );
  }
}


export default AppRoutes;
