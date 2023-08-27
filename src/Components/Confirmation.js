
export default function Confirmation(props){
    const { name, size, toppings, special } = props
    return (
    <div>
        <h1>Confirmation page</h1>
        <p>{name}</p>
        <p>{size}</p>
        <p>{toppings}</p>
        <p>{special}</p>
      </div>
    )}
  