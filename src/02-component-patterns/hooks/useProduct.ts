import { useEffect,  useState } from 'react';
import { Product, onChangeArgsInterface } from '../interfaces/Product.interfaces';

interface useProductArgs {
    product: Product,
    onChange?: (args: onChangeArgsInterface)=> void
    value?:number,

}

export const useProduct = ({onChange, product, value = 0 }:useProductArgs) => {
    const [counter, setCounter] = useState(value);


    const increassedBy = (value:number) => {
        const newValue = Math.max(counter+value,0)
        setCounter( newValue)
        onChange && onChange({count: newValue, product })
    }

    useEffect(() => {
      setCounter(value)
    }, [value]);

    return { counter, increassedBy} 
}


