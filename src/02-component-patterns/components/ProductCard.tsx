import styles  from '../styles/styles.module.css'


import { useProduct } from '../hooks/useProduct';
import { createContext } from 'react';
import { ProductCardProps, ProductContextProps } from '../interfaces/Product.interfaces';


export  const ProductContext = createContext ({} as ProductContextProps)
const {Provider} = ProductContext

export const ProductCard = ({ children, product }: ProductCardProps) => {

    const {counter, increassedBy} = useProduct(0)
 
  return (
    <Provider value={{
        counter, increassedBy,product 
    }}>
        <div className={ styles.productCard}>
            {children}
        </div>

</Provider>
  );
}

export default ProductCard;
