import actiontypes from '../actiontypes';

const initState = {
  productCatalog: null,
product: true
}



const productCatalogReducer = (state = initState, action) => {
  switch(action.type) {
    
    

      
    case actiontypes().productCatalog.setPosts:
     return {
       ...state,
       productCatalog: action.payload
     }
     
      case actiontypes().productCatalog.setProduct:
        return {
          ...state,
          product: action.payload
        }
        
    default:
      return state
  }
}

export default productCatalogReducer;