import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import formSchema from './formSchema';

export default function Form(){


    const initialFormErrors = {
        name:'', size:'', pepperoni:'', sausage:'', ham:'', steak:'', text:''
      }

      const [values, setValues] = useState({ name:'', size:'', pepperoni: false, sausage: false, ham: false, steak: false, text:''})
      const [formErrors, setFormErrors] = useState(initialFormErrors)
      
    
      const onSubmit = () => {
        setValues({ name:'', size:'', pepperoni:false, sausage:false, ham:false, steak:false, text:''})
        console.log(values)
      }
    
      const onChange = (name, value) => {
        validate(name, value)
        setValues({...values, [name]: value})
      }
    
      const validate = (name, value) => {
        if (name === 'name') {
            Yup.reach(formSchema, name)
            .validate(value)
            .then(() => setFormErrors({...formErrors, [name] : '' }))
            .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
        }
      }
    
    const handleChange = (event) => {
        const { name, checked, value, type} = event.target;
        const newVal = type === 'checkbox' ? checked : value;
        onChange(name, newVal);
    }


    
    const navigate = useNavigate()
    const handleSubmit = (event) => { 
        event.preventDefault();
        onSubmit();
        navigate('/confirmation', { state: values })
    }

    return (
      <div className="orderForm">
        <h1>The Order Form</h1>
        <p style={{color: 'red'}}>{formErrors.name}</p>
        <form onSubmit={handleSubmit} id="pizza-form">
          <label>
            Name:&nbsp; 
            <input 
            name='name'
            id="name-input"
            type='text'
            placeholder='enter name here'
            onChange={handleChange}
            />
          </label><br></br>
          <label>
            Pizza Size:&nbsp;
            <select id="size-dropdown" name='size' value={values.size} onChange={handleChange}>
              <option value='small'>Small</option>
              <option value='medium'>Medium</option>
              <option value='large'>Larger</option>
            </select>
          </label><br></br>
  
          <label>
            Choose your toppings:<br></br>
            <label>
              <input 
              id='pepperoni' 
              name='pepperoni'
              type="checkbox"
              checked={values.pepperoni}
              onChange={handleChange}/>
              Pepperoni</label><br></br>
            <label>
              <input 
              id='sausage' 
              name='sausage'
              type="checkbox" 
              checked={values.sausage}
              onChange={handleChange}/>
              Sausage</label><br></br>
            <label>
              <input 
              id='ham' 
              name='ham'
              type="checkbox" 
              checked={values.ham}
              onChange={handleChange}/>
              Ham</label><br></br>
            <label>
              <input 
              id='steak' 
              name='steak'
              type="checkbox" 
              checked={values.steak}
              onChange={handleChange}/>
              Steak</label>
          </label><br></br>
  
          <label>Special Instructions:</label><br></br>
            <input 
            name='text'
            id="special-text"
            type="text"
            placeholder="Please list any special instructions that you want the kitchen to be aware of."
            onChange={handleChange}
            /><br></br><br></br>
          <input type="submit" value='Place your Order'/>
        </form>
      </div>
  
      
    )}