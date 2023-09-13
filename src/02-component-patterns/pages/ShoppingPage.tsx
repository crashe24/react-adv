import { ProductButtons, ProductImage, ProductTitle } from "../components"
import ProductCard from "../components/ProductCard"

const product = {
  id: '1',
  title: 'Coffec Mug - Card',
  img: './coffee-mug.png'
}
const ShoppingPage = () => {
  return (
    <div>
        <h1>
          ShoppingPage
        </h1>
        <hr />
        <div style={{
          display: 'flex', flexDirection:'row',flexWrap:'wrap'
        }}>
          {/* <ProductCard product={product} >
            <ProductImage  />
            <ProductTitle title="" />
            <ProductActionsButtons counter={0} increassedBy={function (value: number): void {
            throw new Error("Function not implemented.")
          } }  />

          </ProductCard> */}
          <ProductCard product={product} >
            <ProductCard.Image  />
            <ProductCard.Title title="" />
            <ProductCard.Buttons  /> 

          </ProductCard>
          <ProductCard product={product} >
            <ProductImage  />
            <ProductTitle title="" />
            <ProductButtons  />

          </ProductCard>
          

        </div>
    </div>
  )
}

export default ShoppingPage