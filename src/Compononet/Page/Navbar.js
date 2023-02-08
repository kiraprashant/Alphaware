import React , {useState} from 'react'
import "../Css/Navbar.css"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RxHamburgerMenu ,  RxCross1 } from "react-icons/rx";
import { Link , NavLink } from 'react-router-dom';



function Navbar({CartProduct}) {
    const [ShowMenu, setShowMenu] = useState(false)

    const ShowMenuFun = () =>{
        setShowMenu(!ShowMenu)
    }

  return (
    <>
    <div>
       <div className='Wrapper_Navbar'>
          <div className=' container'>
           <div className='Navbar'>
               <div><img className='NavbarImages' src = "Images/alphaware.png" alt = "" /></div>

                 <div>
                   <ul className='DesktopItem'>
                      <li><NavLink to = "/">Product</NavLink></li>
                       <li className='d-flex align-items-center'><NavLink to = "/cart">{CartProduct.length}<AiOutlineShoppingCart />Cart</NavLink></li>
                    </ul>
                   
                    {ShowMenu ?
                    <div onClick={()=> ShowMenuFun()} className='MobileItem'><RxCross1 /></div>:
                    <div onClick={()=> ShowMenuFun()} className='MobileItem'><RxHamburgerMenu /></div>
                    }

                   
               </div>

           </div>
       </div>
      </div> 
    </div>
    {ShowMenu ?
    <div className='MobileNavbar_Wrapper'>
       <div className='MobileNavbar'>
        <ul>
            <li><NavLink onClick={()=> ShowMenuFun()} to = "/">Product</NavLink></li>
            <li><NavLink onClick={()=> ShowMenuFun()} to = "/cart">{CartProduct.length}<AiOutlineShoppingCart />Cart</NavLink></li>
        </ul>
    </div>
   </div>
   :null 
    }
    </>
  )
}

export default Navbar