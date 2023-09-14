import { useContext } from "react";
import styles  from '../styles/styles.module.css'
import { ProductContext } from "./ProductCard";

export interface ProductTitleProps {
    className?:string
    title?: string,
    style?: React.CSSProperties
}

export const ProductTitle = ( { title, className, style} : ProductTitleProps ) => {
    const { product } = useContext(ProductContext);
    return (
        <span style={style}
        className={`${styles.productDescription} ${className}`}
        > {title ? title:  product.title}</span>
    )
}