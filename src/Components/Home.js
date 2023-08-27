import { useNavigate } from "react-router-dom"

export default function Home(props){
    const navigate = useNavigate()
    const onClick = () => {
      navigate('/pizza')
    }
    return (
        <div className='header'>
          <h1>BLOOMTECH PIZZA PARLOR</h1>
          <img src="https://img.freepik.com/free-vector/sticker-template-with-pizza-isolated_1308-62307.jpg?w=740&t=st=1693115023~exp=1693115623~hmac=2995edb2c58bca3121d69998af21b6b29ca57591e4e890cce64765a5e18e1262" alt='img'></img>
          <p>Your favorite food delivered right to you while coding. 
            We are here to deliver the best, fresh, and newest pizza around! </p>
          <h2>Ready to customize your Pizza?</h2>
          <button id="pizza-button" onClick={onClick}>Click Here</button>
      </div>
    )}