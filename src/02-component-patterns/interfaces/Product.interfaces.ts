import { ReactElement } from "react"
import { ProductTitleProps } from "../components/ProductTitle"
import { ProductImageProps } from "../components/ProductImage"
import { ProductButtonsProps } from "../components/ProductButtons"

export interface ProductCardProps {
    children?: ReactElement | ReactElement[]
    product: Product
}

export interface Product {
    id: string,
    title: string,
    img?: string,
}

export interface ProductContextProps {
    counter: number,
    increassedBy: ( value: number) => void,
    product: Product

}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element,
    Title: (Props: ProductTitleProps) => JSX.Element,
    Image: (Props: ProductImageProps) => JSX.Element,
    Buttons: (Props: ProductButtonsProps) => JSX.Element
}

export interface onChangeArgsInterface {
    product: Product,
    count: number
   }