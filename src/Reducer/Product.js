const initialProduct = []

const ProductReducer = (state = initialProduct,action) =>{
     if(action.type === "AllProductdata"){
        return action.payload
     }
     else{
        return state
     }
}

export default ProductReducer