
import './App.css';
import Signupp from './Signup/Signupp';
import Loginn from './Login/Loginn';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Homee from './Home/Homee';
import Audio6 from './Audio/Audio6';
import Audio2 from './Audio/Audio2';
import Audio1 from './Audio/Audio1';
import Settings from './Settings/Settings';
import Payment from './Payment/Payment';
import Premium from './Premium/Premium';






function App() {


  return (
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<Signupp/>}>
      </Route>
      <Route path='/audio' element={<Audio6/>}>
      </Route>
      <Route path='/Home' element={<Homee/>}>
      </Route>
      <Route path='/login' element={<Loginn/>}>
      </Route>
      <Route path='/sett' element={<Settings/>}>
      </Route>
      <Route path='/pay' element={<Payment/>}>
      </Route>
      <Route path='/pre' element={<Premium/>}>
      </Route>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
