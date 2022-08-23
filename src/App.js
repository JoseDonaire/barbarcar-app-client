
import './App.css';
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom';

import Home from './pages/Home';
import AddTravel from './pages/travels/AddTravel';
import TravelDetails from './pages/travels/TravelDetails';
import TravelEdit from './pages/travels/TravelEdit';
import Error from './pages/Error';
import NotFound from './pages/NotFound'
import Signup from './pages/auth/Signup';
import Login from './pages/auth/Login';
import Profile from './pages/profile/Profile';
import ProfileDriver from './pages/profile/ProfileDriver';



function App() {
  return (
    <div className="App">

    <Navbar/>


    <Routes>

    <Route path='/' element={<Home/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/signup' element={<Signup/>} />

    <Route path='/travels/add' element={<AddTravel/>} />
    <Route path='/travels/:idTravel/details' element={<TravelDetails/>} />
    <Route path='/travels/:idTravel/edit' element={<TravelEdit/>} />
    <Route path='/profile' element={<Profile/>} />
    <Route path='/profile/driver' element={<ProfileDriver/>} />

    <Route path='/error' element={<Error/>} />
    <Route path='/*' element={<NotFound/>} />
    

    </Routes>
      
    </div>
  );
}

export default App;
