/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import {useState} from 'react';
import AppRoutes from './routes/AppRoutes';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [userName, setUserName] = useState("userName");
  const [isLogged, setIsLogged] = useState(false);
  const [userEmail, setUserEmail] = useState("userEmail");
  const [userPhone, setUserPhone] = useState("userPhone");
  const [userCoins, setUserCoins] = useState(0);
  const [userId, setUserId] = useState("");


  return (
    <>
      <AppRoutes userName={userName} setUserName={setUserName} isLogged={isLogged} setIsLogged={setIsLogged} userEmail={userEmail} setUserEmail={setUserEmail} userPhone={userPhone} setUserPhone={setUserPhone} userCoins={userCoins} setUserCoins={setUserCoins} userId={userId} setUserId={setUserId} />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Zoom} />
    </>
  );
}

export default App;
