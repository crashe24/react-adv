import { useState } from "react";


export const useFormGeneric = <T>(initialState:T) => {
    const [formData, setFormData] = useState<T>(initialState);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
         setFormData( prev => ({
                ...prev,
                [event.target.name] : event.target.value

            })
         )
        }
    
    const onSubmit = (e: React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault()
        console.log('formData', formData)

    }

    const onReset = () => {
        setFormData({...initialState})
    }

    const isValidEmail = ( email: string ) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

  return {...formData, onChange, onSubmit, onReset, isValidEmail};
}


