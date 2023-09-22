import { ErrorMessage, useField } from "formik";

interface Props {
    label:string,
    name: string,
    type?: 'text' | 'email' | 'password',
    placehorder?: string,
    [x:string]: any,
}
export const MyTextInput = ({label, ...props}: Props) => {

  const [field] = useField(props)
  return (
    <>
                <label htmlFor={props.id || props.name}>{label}</label>
                <input className= 'text-input' {...field} {...props} />
                <ErrorMessage name={ props.name } component={'span'} className="mi-estilo" />
                
                
    </>
  );
}

export default MyTextInput;
