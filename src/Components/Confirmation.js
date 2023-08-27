import { useLocation } from "react-router-dom"



export default function Confirmation(){
    const location = useLocation();
    const values = location.state; 
    return (
    <div className="confirm">
        <h1>Confirmation page</h1>
        <p>Name: {values.name}</p>
        <p>Size: {values.size}</p><br></br>
        <p>Toppings:</p>
        <p>Pepperoni: {values.pepperoni.toString()}</p>
        <p>Sausage: {values.sausage.toString()}</p>
        <p>Ham: {values.ham.toString()}</p>
        <p>Steak: {values.steak.toString()}</p><br></br>
        <p>Special Requests: {values.text}</p>
      </div>
    )}
  