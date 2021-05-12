const actiontypes = () => {
    return {
      productCatalog: {
        set: 'SET_PRODUCT_CATALOG',
        setProduct: 'SET_PRODUCT',
        loading: 'LOADING',
        
      },
   


      cart: {
        add: 'ADD_TO_CART',
        remove: 'REMOVE_FROM_CART',
        delete: 'DELETE_PRODUCT'
      }
    }
  }
  
  export default actiontypes;