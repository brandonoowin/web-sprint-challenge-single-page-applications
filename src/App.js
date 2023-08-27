import React, {useEffect, useState} from "react";
import { Route, Routes, Link } from "react-router-dom";
import './App.css'
import Home from "./Components/Home";
import Form from "./Components/Form";


const App = () => {

  const [completedOrder, useCompletedOrder] = useState({})
  const [orderValue, useOrderValue] = useState({ name:'', size:'', toppings:'', special:''})

  const onChange = () => {

  }

  const onClick = () => {

  }

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
      </Routes>
    </div>
    

  );
};
export default App;
