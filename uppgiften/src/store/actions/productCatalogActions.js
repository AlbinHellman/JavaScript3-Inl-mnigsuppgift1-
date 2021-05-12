import axios from 'axios';
import actiontypes from '../actiontypes';

export const getProductCatalog = () => {
  return async dispatch => {
    const res = await axios.get('http://localhost:3333/api/products')

    setTimeout(() => {
      dispatch(loading(false));
      dispatch(setProducts(res.data));
    }, 1000)
   
  }
}

export const loading = (payload) => {
  return {
    type: actiontypes().productCatalog.loading,
    payload
  }
}

export const setProducts = (productCatalog) => {
  return {
    type: actiontypes().productCatalog.set,
    payload: productCatalog
  }
}

export const getOneProduct = () => {
  return async dispatch => {
    dispatch(loading(true));

    const res = await axios.get('http://localhost:3333/api/products/_id')

    setTimeout(() => {
      dispatch(setProduct(res.data));
      dispatch(loading(false));
    }, 1000)
    
    
  }
}

export const setProduct = (product) => {
  return {
    type: actiontypes().productCatalog.setProduct,
    payload: product
  }
}



