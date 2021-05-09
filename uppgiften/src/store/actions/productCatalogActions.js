import axios from 'axios';
import actiontypes from '../actiontypes';

export const getProductCatalog = () => {
  return async dispatch => {
    const res = await axios.get('http://localhost:3333/api/products')
    dispatch(setProducts(res.data))
  }
}

export const setProducts = (products) => {
  return {
    type: actiontypes().productCatalog.set,
    payload: products
  }
}

export const getOneProductCatalog = (id) => {
  return async dispatch => {
    const res = await axios.get('http://localhost:3333/api/products/' + id)
    dispatch(setProduct(res.data))
  }
}

export const setProduct = (product) => {
  return {
    type: actiontypes().productCatalog.setProduct,
    payload: product
  }
}


