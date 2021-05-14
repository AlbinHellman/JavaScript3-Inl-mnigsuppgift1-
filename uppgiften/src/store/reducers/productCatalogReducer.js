import actiontypes from '../actiontypes';

const initState = {
product: true
}



const productCatalogReducer = (state = initState, action) => {
  switch(action.type) {
    
    

      
    case actiontypes().productCatalog.setPosts:
     state = action.payload
     return state
     
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