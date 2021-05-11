import {React, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getOneProduct, setProduct } from '../store/actions/productCatalogActions';
import { useParams } from 'react-router-dom';



const ProductDetails = () => {

    const id = useParams().id
  const dispatch = useDispatch();
 

  useEffect(() => {
      dispatch(getOneProduct(id))
  
      return () => {
          dispatch(setProduct(null))
      }

    }, [dispatch, id])

    const product = useSelector(state => state.product)

    if (!product) {
        return <div>Laddar...</div>
    }



  
    return (
  
    <div className="col">
      <div className="card h-100">
        <img
          src={product.image}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <div className="card-text">
          <p>{ product.short }</p>
          <p className="text-danger h5">{ product.price }</p>
          <button className="btn btn-info" onClick={() => {
            dispatch(addToCart(product))
          }}>Add to cart</button>
          </div>
     </div> 
 </div>
</div>
 )



}


export default ProductDetails;