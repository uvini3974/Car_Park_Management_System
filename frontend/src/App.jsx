import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShowCar from './pages/ShowCar';
import CreateCars from './pages/CreateCars';
import EditCar from './pages/EditCar';
import DeleteCar from './pages/DeleteCar';
import LoginDesign from './pages/LoginDesign';
import SignUpPage from './pages/SignUpPage';


const App = () => {
  return (
  <Routes>
      <Route path='/Login' element={<LoginDesign/>}/>
      <Route path='/' element={<SignUpPage/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/cars/create' element={<CreateCars/>}/>
      <Route path='/cars/details/:id' element={<ShowCar/>}/>
      <Route path='/cars/edit/:id' element={<EditCar/>}/>
      <Route path='/cars/delete/:id' element={<DeleteCar/>}/>
    </Routes>
  );
};

export default App;