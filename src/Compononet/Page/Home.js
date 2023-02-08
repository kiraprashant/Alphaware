import React ,{useEffect , useState} from 'react'
import "../Css/Home.css"
import axios from 'axios'
import { useSelector , useDispatch} from "react-redux"
import { AllProductdata } from '../../Action'
import { AiFillStar, AiOutlineShoppingCart} from "react-icons/ai";
import { Link } from 'react-router-dom'




function Home({AddToCart,CartProduct}) {

  const myproduct = useSelector((state)=> state.ProductReducer)
  const [Search, setSearch] = useState("")


  const Dispatch = useDispatch()

  useEffect(() => {
    
    axios.post("http://3.7.252.58:4001/product/getAllProduct").then((res)=>{
       Dispatch(AllProductdata(res.data))

    }) 
    .catch((err)=>{
      console.log(err)
    })

  }, [])


 const HandleChange = (e) =>{
  setSearch(e.target.value)
 }

 const filteredData = myproduct.filter(item =>
  item.name.toLowerCase().includes(Search.toLowerCase())
);
  
  return (
    <>
      <div className='container'>
 
         <div className='row'>
           <div className='col-md-12'><input type = "text" name = "Search" placeholder = "Typing Here" value = {Search} onChange = {(e)=> HandleChange(e)} /></div>
         </div>

        <div className='Allproduct'>
        {CartProduct.length > 0 ? <div className='MobileCart'>
        <Link to = "/cart"><span style={{fontSize:"14px"}}>{CartProduct.length}</span><span><AiOutlineShoppingCart /></span></Link></div> : null}
          <div className='row'>
          {filteredData.map((elem , i)=>{
             return(
              <div className='col-md-4 col-sm-6 col-12 my-3'>
                  <div className='Mycard'>
                    <div className='MyImage_CardTop'>
                       <img src = {elem.imageUrl} alt = {elem.name}/>
                    </div>
              
                     <div className='Mycard_Body'>
                       <div className='Product_Name'>{elem.name}</div>
                       <div className='Product_Rating d-flex align-items-center justify-content-center'>
                       {elem.rating > 0 ? <AiFillStar style={{color:"#ffd814"}} /> : <AiFillStar style={{color:"#aeacb2"}} /> } 
                       {elem.rating} Rating</div>
                       <div className='text-center ProductPrice'><span className='Original_ProductPrice'>₹{elem.price}</span><span className='Discount_ProductPrice'>₹{elem.discountAmount}</span></div>
                       <div className='Product_Add_To_Cart mt-auto'><button onClick={()=> AddToCart(elem)}>Add To Cart</button></div>
                     </div>

                  </div>
              </div>
             )
          })
          }
          </div>
       </div>
      </div> 
    </>
  )
}

export default Home