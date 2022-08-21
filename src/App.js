
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
import Profile from './pages/auth/Profile';
import ProfileDriver from './pages/auth/ProfileDriver';



function App() {
  return (
    <div className="App">

    <Navbar/>


    <Routes>

    <Route to='/' element={<Home/>} />
    <Route to='/travels/add' element={<AddTravel/>} />
    <Route to='/travels/:id/details' element={<TravelDetails/>} />
    <Route to='/travels/:id/edit' element={<TravelEdit/>} />
    <Route to='/error' element={<Error/>} />
    <Route to='/*' element={<NotFound/>} />
    <Route to='/login' element={<Login/>} />
    <Route to='/signup' element={<Signup/>} />
    <Route to='/profile' element={<Profile/>} />
    <Route to='/profile/driver' element={<ProfileDriver/>} />
    

    </Routes>
      
    </div>
  );
}

export default App;
