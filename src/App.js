import React ,{useState , useEffect} from 'react'
import './App.css';
import Home from './Compononet/Page/Home';
import Carts from './Compononet/Page/Carts';
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Navbar from './Compononet/Page/Navbar';


function App() {


  const [CartProduct, setCartProduct] = useState([])

  useEffect(() => {
    console.log(CartProduct)
   }, [CartProduct])

  const AddToCart = (product) =>{
    const exist = CartProduct.find((x) => x._id === product._id)

    if(exist){
        const updateitem = CartProduct.map((x) => x._id === product._id ? {...exist , qty:exist.qty + 1} : x)

        setCartProduct(updateitem )
    }
    else{
      const updateitem = [...CartProduct,{...product , qty:1 }]

      setCartProduct(updateitem)
    }

   } 

   const RemoveToCart = (product) =>{
    const exist = CartProduct.find((x) => x._id === product._id)

    if(exist.qty === 1 ){
       
        const updateitem  = CartProduct.filter((elem) =>  elem._id !== product._id)

        setCartProduct(updateitem )

    }
    else{
      const updateitem = CartProduct.map((x) => x._id === product._id ? {...exist , qty:exist.qty - 1} : x)

      setCartProduct(updateitem )
    }

  }

  return (
    <div className="App">
        <BrowserRouter>
          <Navbar CartProduct = {CartProduct}/>
          <div className='Allcontent_wrapper'>
           <Routes>
              <Route path = "/" element = { <Home AddToCart = {AddToCart} CartProduct = {CartProduct}/>} />
              <Route path = "/cart" element = { <Carts AddToCart = {AddToCart} CartProduct = {CartProduct} RemoveToCart = {RemoveToCart}/>} />
           </Routes>
           </div>
         </BrowserRouter>
    </div>
  );
}

export default App;
