import { ProductButtons, ProductImage, ProductTitle } from "../components"
import ProductCard from "../components/ProductCard"
import '../styles/custom-styles.css'

const product = {
  id: '1',
  title: 'Coffec Mug - Card',
  img: './coffee-mug.png'
}
const ShoppingPage = () => {
  return (
    <div className="bg-dark">
        <h1>
          ShoppingPage
        </h1>
        <hr />
        <div style={{
          display: 'flex', flexDirection:'row',flexWrap:'wrap'
        }}>
        
          <ProductCard product={product} className="bg-dark text-bold">
            <ProductCard.Image  className="custom-image"/>
            <ProductCard.Title className="text-white"/>
            <ProductCard.Buttons className= "custom-buttons"  /> 
          </ProductCard>

          <ProductCard product={product}   className="bg-dark text-bold">
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white"/>
            <ProductButtons  className = "custom-buttons"/>

          </ProductCard>

          <ProductCard product={product} style={{background:'#70d1f8'}}>
            <ProductImage />
            <ProductTitle />
            <ProductButtons/>

          </ProductCard>
          

        </div>
    </div>
  )
}

export default ShoppingPage