import { useEffect,  useRef,  useState } from 'react';
import { InitialValues, Product, onChangeArgsInterface } from '../interfaces/Product.interfaces';

interface useProductArgs {
    product: Product,
    onChange?: (args: onChangeArgsInterface)=> void
    value?:number,
    initialValues?:InitialValues

}

export const useProduct = ({onChange, product, value = 0, initialValues }:useProductArgs) => {
    const [counter, setCounter] = useState<number>(initialValues?.count || value);
    const isMounted = useRef(false);
    const maxCount = initialValues?.maxCount
    
    const increaseBy = (v:number) => {

        let newValue = 0
        if ( initialValues?.maxCount ) {
             newValue = Math.min(counter+v,initialValues?.maxCount)    
        } 
        newValue = Math.max(newValue,0)
        setCounter( newValue)
        onChange && onChange({count: newValue, product })
    }

    
    useEffect(() => {
        if (!isMounted.current) return
        setCounter(value)
    }, [value]);
    
    const validateIsMaxCountReached = !!initialValues?.count && initialValues.maxCount ===counter

    const reset = () => {
        setCounter(initialValues?.count || value)
    }
    return { 
            counter, 
            isMaxCountReached: validateIsMaxCountReached,
            maxCount,
            product,
            increaseBy, 
            reset,
            } 
}


