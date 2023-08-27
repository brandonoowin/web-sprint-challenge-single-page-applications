import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import './App.css'
import Home from "./Components/Home";
import Form from "./Components/Form";
import Confirmation from './Components/Confirmation'



const App = () => {

  return (
    <div>
      <nav>
        <p>BLOOMTECH PIZZA PARLOR</p>
          <div className="links">
            <Link to='/'>Home</Link>&nbsp;
            <Link to='pizza'>Order Form</Link>
          </div>
      </nav>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='pizza' element={<Form />}/>
        <Route path='confirmation' element={<Confirmation />}/>
      </Routes>
    </div>
    

  );
};
export default App;
