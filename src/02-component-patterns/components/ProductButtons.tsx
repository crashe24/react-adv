import { useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles  from '../styles/styles.module.css'

export interface ProductButtonsProps {
    className?:string,
    style?: React.CSSProperties
}

export const ProductButtons = ({className,style}: ProductButtonsProps) => {

    // TODO maxCount
    const { increaseBy,counter, maxCount} = useContext(ProductContext);
    
    // TODO isMaxReached = useCallback, dependences[counter, maxcount]
    // counter === maxCount 
    const isMaxReached = useCallback(
      () =>  !!maxCount && counter === maxCount, [counter, maxCount],
    );

    const validateStyles = `${styles.buttonAdd}  ${isMaxReached() && styles.disabled}`

    return (
    
        <div className={`${styles.buttonsContainer} ${className}`}
        style={style}>
                <button className={styles.buttonMinus}
                onClick={ ()=> increaseBy(-1)}                
                > - </button>
                <div className={styles.countLabel}> {counter} </div>
                {/* <button className={`${styles.buttonAdd}  ${isMaxReached() && styles.disabled}`} */}
                <button className={validateStyles}
                onClick={ ()=> increaseBy(+1)}
                > + </button>
        </div>
      
    )
}