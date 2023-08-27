export default function Form(props){
    return (
      <div className="orderForm">
        <h1>The Order Form</h1>
        <form id="pizza-form">
          <label>
            Name:&nbsp; 
            <input 
            id="name-input"
            type='text'
            placeholder='enter name here'
            />
          </label><br></br>
          <label>
            Pizza Size:&nbsp;
            <select id="size-dropdown">
              <option value="" disabled selected>Select your size</option>
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
              type="checkbox" 
              name="pepperoni" 
              value='pepperoni'/>
              Pepperoni</label><br></br>
            <label>
              <input 
              id='sausage' 
              type="checkbox" 
              name="sausage" 
              value='sausage'/>
              Sausage</label><br></br>
            <label>
              <input 
              id='ham' 
              type="checkbox" 
              name="ham" 
              value='ham'/>
              Ham</label><br></br>
            <label>
              <input 
              id='steak' 
              type="checkbox" 
              name="steak" 
              value='steak'/>
              Steak</label>
          </label><br></br>
  
          <label>Special Instructions:</label><br></br>
            <input 
            id="special-text"
            type="text"
            placeholder="Please list any special instructions that you want the kitchen to be aware of."
            /><br></br><br></br>
          <input type="submit" value='Place your Order' />
        </form>
      </div>
  
      
    )}