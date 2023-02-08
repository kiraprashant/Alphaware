import React from 'react'
import "../Css/Carts.css"
import { HiMinusSm , HiPlusSm} from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import { Link } from 'react-router-dom';




function Carts({AddToCart , CartProduct , RemoveToCart}) {

  const itemPrice = CartProduct.reduce((a , elem) => a + elem.qty * elem.price , 0 )
  const discountAmount = CartProduct.reduce((a , elem) => a + elem.qty * elem.discountAmount , 0 )
  const TaxPrice = Math.ceil(discountAmount * 0.20);
  const DeliveryCharge = 50
  const TotalPrice = itemPrice + TaxPrice  + DeliveryCharge;

  return (
    <>
     <div className='container'>
       {CartProduct.length ===0 ? <div><div className='EmptyCartList'>You are cart is empty</div> <div className='text-center ShopCart'>
       <Link to = "/"><button>Shop Now</button></Link></div> </div>: null}

       {CartProduct.length > 0 ?
        <div className='row'>
           <div className='col-md-8 col-sm-12'>
              <div className='AddCart_List'>
                {CartProduct.map((elem)=>{
                    return(
                      <div className='Cart_Item'>

                        <div className='d-flex align-items-center'>                      
                          <div className='Cart_Item_Images'><img src = {elem.imageUrl} alt = {elem.name} /></div>
                            <div className='Cart_Item_Details'>
                              <div>{elem.name}</div>
                              <div className='d-flex align-items-center'>
                              {elem.rating > 0 ? <AiFillStar style={{color:"#ffd814"}} /> : <AiFillStar style={{color:"#aeacb2"}} /> } 
                              {elem.rating} Rating
                              </div>
                              <div className='Cart_Qty'>
                              <span>Qty: </span>
                              <span>
                                <span onClick={()=> RemoveToCart(elem)} className='MinusCart'><HiMinusSm/></span>
                                {elem.qty}
                                <span onClick={()=> AddToCart(elem)} className='PlusCart'><HiPlusSm /></span>
                                </span>
    
                    
                              </div>
                          </div>
                         </div> 

                         <div className='d-flex'>
                             <div className='ActualPrice'>₹{elem.price * elem.qty}</div> 
                             <div className='DiscountPrice'>₹{elem.discountAmount  * elem.qty }</div>
                         </div>


                      </div>
                    )
                })}
              </div>
           </div>

           <div className='col-md-4 col-sm-12'>
             <div className='AddCart_Checkout'>
              <div className='text-center Order_Summary_Heading'>Order Summary</div>
              <div className='d-flex align-items-center justify-content-between'> 
                 <div>Original Price</div>
                 <div className='OriginalPricing'>₹{itemPrice}</div>
              </div>

              <div className='d-flex align-items-center justify-content-between'>
                 <div>Discount Price</div>
                 <div className='Pricing DiscountPricing'>₹{discountAmount}</div>
              </div>

              <div className='d-flex align-items-center justify-content-between'>
                <div>Tax Price</div>
                 <div className='Pricing'>₹{TaxPrice}</div>
              </div>

              <div className='d-flex align-items-center justify-content-between'>
                <div>Delivery Charge</div>
                <div className='Pricing'>₹{DeliveryCharge}</div>
              </div>

              <div className='d-flex align-items-center justify-content-between Total_price'>
                <div>Total Price</div>
                <div className='Pricing'>₹{TotalPrice}</div>
              </div>

             </div>
          </div>

        </div>

        :null
       }
       {/* End Here  */}

     </div>
    </>
  )
}

export default Carts