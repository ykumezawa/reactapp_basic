import React, {useState} from "react"

const Basic1 = (props) => {
      
    const[count, setCount] = useState(0)

    const[product, setProducts] = useState({name:'',price:''})
    
    return (
        <>
          <button onClick={() => setCount(count+1)}>Click{count}</button>
          <form>
              <input type='text' value={product.name}
              onChange={evt =>setProducts({...product,name:evt.target.value})}/>


              <input type='text' value={product.price}
              onChange={evt =>setProducts({...product,price:evt.target.value})}/>
          </form>
          <h3>Product name is {product.name}</h3>  
          <h3>Product price is {product.price}</h3>  
        </>
    )
}

export default Basic1
