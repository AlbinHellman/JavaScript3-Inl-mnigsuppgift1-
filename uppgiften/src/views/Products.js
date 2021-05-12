import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../komponenter/produkter/ProductCard';
import { getProductCatalog } from '../store/actions/productCatalogActions';

const Products = () => {

  const dispatch = useDispatch();
  const productCatalog = useSelector(state => state.productCatalog)

  useEffect(() => {
    dispatch(getProductCatalog())
  }, [dispatch])

  const loading = useSelector(state => state.loading);

  return (
    
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {loading && !productCatalog && <p>Laddar...</p>}
      {
        productCatalog && productCatalog.map(product => (
          <ProductCard key={product._id} product={product} />
        ))
      }
    </div>
  )
}

export default Products