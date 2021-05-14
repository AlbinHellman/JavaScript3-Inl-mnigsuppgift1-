const actiontypes = () => {
    return {
      productCatalog: {
        getProductCatalog: 'GET_POST',
        setPosts: 'SET_PRODUCT_CATALOG',
        setProduct: 'SET_PRODUCT',
       
        
      },
   


      cart: {
        add: 'ADD_TO_CART',
        remove: 'REMOVE_FROM_CART',
        delete: 'DELETE_PRODUCT'
      }
    }
  }
  
  export default actiontypes;