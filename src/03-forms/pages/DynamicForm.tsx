import { Formik, Form } from 'formik';
import formJson from '../data/custom-form.json'
import { MySelect, MyTextInput } from '../components';
import * as Yup from 'yup';

const requiredFields: {[key:string]: any } = {}
const initialValues: {[key:string]: any } = {}

// logica para las validaciones y el initial values
for (const inputRef of formJson) {
      initialValues[inputRef.name] = inputRef.value
      if (!inputRef.validations ) {continue}
      let schema = Yup.string()

      for (const rule of inputRef.validations) {
          if (rule.type === 'required') {
            schema = schema.required('Field is required')
          }
         
          if (rule.type === 'minlength') {
            schema = schema.min((rule as any).values || 2, `Field do not have ${(rule as any).values || 2} characters`)
          }
          if (rule.type === 'email') {
            schema = schema.email('Mailformed email')
          }
          requiredFields[inputRef.name] = schema

      }
    }
/// para unir ya con el validations o el validationschema de formik    
const validationSchemaRef = Yup.object({...requiredFields})

export const DynamicForm = () => {
    
  return (
    <div>
      <h1>Dynamic Forms</h1>
      <Formik
            initialValues={initialValues}
            validationSchema={ validationSchemaRef }
            onSubmit={ (values) => console.log('values', values)}
      >
        { (formik) =>(
            <Form noValidate>
                {formJson.map( field =>{
                    if (field.type ==='input' || field.type === 'password' || field.type ==='email') {
                        return <MyTextInput 
                                        key={field.name}
                                        label={field.label} 
                                        name={field.name} 
                                        type={field.type as any} 
                                        placehorder={field.placeHolder}/>
                    } else if ( field.type === 'select') {
                       return (<MySelect 
                        key={field.name}
                        label={field.label}
                        name={field.name}>
                              <option value={''}>Select and option</option>      
                              {
                                field.options?.map(opt =>(
                                    <option key={opt.id} value={opt.id}>{opt.label}</option>      
                                ))
                              }
                        </MySelect>)
                    }
                    return <span> Type: {field.type} is not support</span>
                })}
                <span>Hello</span>
                <button type='submit'>Create</button>
            </Form>
        )}
      </Formik>
    </div>
  );
}

export default DynamicForm