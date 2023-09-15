import styles  from '../styles/styles.module.css'


import { useProduct } from '../hooks/useProduct';
import { ReactElement, createContext } from 'react';
import { Product,  ProductContextProps, onChangeArgsInterface } from '../interfaces/Product.interfaces';


export  const ProductContext = createContext ({} as ProductContextProps)
const {Provider} = ProductContext



 interface ProductCardProps {
  children?: ReactElement | ReactElement[]
  product: Product
  className?: string,
  style?: React.CSSProperties,
  onChange?: (args:onChangeArgsInterface)=>void,
  value?:number,
}

export const ProductCard = ({ children, product, className, style, onChange,value }: ProductCardProps) => {

    const {counter, increassedBy} = useProduct( {onChange, product, value} )
 
  return (
    <Provider value={{counter, increassedBy,product }}>
        <div className={`${styles.productCard} ${className}`}
        style={style}
        >
            {children}
        </div>
    </Provider>
  );
}

export default ProductCard;
