import { ProductButtons, ProductImage, ProductTitle } from "../components"
import ProductCard from "../components/ProductCard"
import '../styles/custom-styles.css'
import { products } from "../data/products";

const product = products[0]
const ShoppingPage = () => {

  //const validateIncrementValue = (value:number, valueMax?:number): boolean => !!valueMax && value === valueMax 

  
  return (
    <div className="bg-dark">
        <h1>
          ShoppingPage
        </h1>
        <hr />
        
            <ProductCard key={product.id} product={product}
             className="bg-dark text-bold" initialValues={{count:4, maxCount:10}}>
              { (values)=>(
                <>
                  <ProductImage className="custom-image" />
                  <ProductTitle className="text-white"/>
                  <ProductButtons  className = "custom-buttons"/>
                 <button onClick={values.reset}>Reset</button>
                 <button onClick={() => values.increaseBy(-2)}>-2</button>
                 {
                  (!values.isMaxCountReached && <button onClick={() => values.increaseBy(2)}>+2</button>)
                 }
                 
                 <span>{values.count}</span>
                 
                </>

              )}

            </ProductCard>

     
    </div>
    
  )
}

export default ShoppingPage