import { ProductButtons, ProductImage, ProductTitle } from "../components"
import ProductCard from "../components/ProductCard"
import '../styles/custom-styles.css'
import { useShoppingCart } from "../hooks/useShoppingCart";
import { products } from "../data/products";


const ShoppingPage = () => {

      const{shoppingCart, onProductCountChange} = useShoppingCart() 
    
  
  


  return (
    <div className="bg-dark">
        <h1>
          ShoppingPage
        </h1>
        <hr />
        <div style={{
          display: 'flex', flexDirection:'row',flexWrap:'wrap'
        }}>
        
          {
          products.map(prod =>(
            <ProductCard key={prod.id} product={prod}   className="bg-dark text-bold"
            onChange={ onProductCountChange}
            value={ shoppingCart[prod.id]?.count || 0}>
              <ProductImage className="custom-image" />
              <ProductTitle className="text-white"/>
              <ProductButtons  className = "custom-buttons"/>

            </ProductCard>

          ))
          }
        </div>
        <div className="shopping-cart">
           {
              Object.entries(shoppingCart).map( ([key, productRef])=> (
                  <ProductCard 
                  key={key}
                  product={productRef} 
                    className="bg-dark text-bold"
                    style={{width:'100px'}}
                    onChange={onProductCountChange}
                    value={productRef.count}>
                        <ProductImage className="custom-image" />
                        <ProductButtons  className = "custom-buttons"
                        />
                  </ProductCard>
              ))
           }
            {/* <ProductCard  product={product} 
              className="bg-dark text-bold"
              style={{width:'100px'}}>
                  <ProductImage className="custom-image" />
                  <ProductButtons  className = "custom-buttons"/>
            </ProductCard> */}
        </div>
        <div>
          <code>
            {JSON.stringify(shoppingCart, null, 5)}
          </code>
        </div> 
    </div>
    
  )
}

export default ShoppingPage