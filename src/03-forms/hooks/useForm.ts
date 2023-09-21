import { useState } from "react";
import { InitialStateInterface } from "../pages/RegisterPage";

export const useForm = (initialState:InitialStateInterface) => {
    const [formData, setFormData] = useState<InitialStateInterface>(initialState);

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
  return {formData, onChange, onSubmit};
}


