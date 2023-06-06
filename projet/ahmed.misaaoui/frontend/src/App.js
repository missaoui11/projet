import './App.css';
import Navbare from './component/Navbare';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route,Routes } from 'react-router-dom';
import Profile from './component/Profile';
import Avocat from './component/Avocat';
import Signup from "./component/Signup";
import Signin from './component/Signin';
import  Footer  from './component/Footer';
import Aboutus from "./component/Aboutus";
import PrivateRoute from './component/routing/PrivateRoute';
function App() {
  return (
    <div>
    <Navbare/>
    <Routes>
      <Route path='/' element={<Aboutus />}  />
      <Route
            path="/Profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
      <Route path='/Avocat' element={<Avocat />}  />
      <Route path='/Signup' element={<Signup />}  />
      <Route path='/Signin' element={<Signin />}  />
    </Routes>
   
    <Footer/>
    </div>
  );
}

export default App;
