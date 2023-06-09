import logo from './logo.svg';
import './App.css';
import Welcome from './pages/Welcome';
import PlanLayout from './pages/Layouts/PlanLayout';
import { BrowserRouter,Route, Routes, } from 'react-router-dom'
import PhoneConfirmation from './pages/PhoneConfirmation';
import CodeConfirm from './pages/CodeConfirm';
import AllowNotification from './pages/AllowNotification';
import AppLayout from './pages/Layouts/AppLayout';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <PlanLayout>
        <Routes>
          <Route  path='/' element={<Welcome/>}/>
          <Route  path='/invite' element={<PhoneConfirmation/>}/>
          <Route  path='/code_confirm' Component={CodeConfirm}/>
          <Route  path='/allow_notification' Component={AllowNotification}/>
        </Routes>  
      </PlanLayout>
      <AppLayout>
        <Routes>
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </AppLayout>
    </BrowserRouter>


    );
}

export default App;
