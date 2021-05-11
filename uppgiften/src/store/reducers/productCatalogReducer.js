import actiontypes from '../actiontypes';

const initState = null;



const productCatalogReducer = (state = initState, action) => {
  switch(action.type) {
    case actiontypes().productCatalog.set:
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