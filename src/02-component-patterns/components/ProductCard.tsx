import styles  from '../styles/styles.module.css'


import { useProduct } from '../hooks/useProduct';
import { createContext } from 'react';
import { InitialValues, Product,  ProductContextProps, onChangeArgsInterface } from '../interfaces/Product.interfaces';


export  const ProductContext = createContext ({} as ProductContextProps)
const {Provider} = ProductContext



 interface ProductCardProps {
  //children?: ReactElement | ReactElement[],
  children?: (args:ProductCardHandlers) => JSX.Element,
  product: Product,
  className?: string,
  style?: React.CSSProperties,
  onChange?: (args:onChangeArgsInterface)=>void,
  value?:number,
  initialValues?:InitialValues
}

interface ProductCardHandlers {
  count:number,
  isMaxCountReached: boolean,
  maxCount?:number,
  product: Product,
  increaseBy: (value:number) => void,
  reset: () => void,

}

export const ProductCard = ({ children, product, className, style, onChange,value,initialValues }: ProductCardProps) => {

    //const {counter, increassedBy, maxCount,isMaxCountReached } 
    const { counter,  
      isMaxCountReached,
      maxCount,
      increaseBy, 
      reset } = useProduct( {onChange, product, value,initialValues} )
 
  return (
    <Provider value={{counter, increaseBy,product, maxCount }}>
        <div className={`${styles.productCard} ${className}`}
        style={style}
        >
            {children({
              count: counter,
              isMaxCountReached,
              maxCount: initialValues?.maxCount,
              product,
              increaseBy,
              reset
            })}
        </div>
    </Provider>
  );
}

export default ProductCard;
