import {  Formik, Field, Form, ErrorMessage } from 'formik';
// yarn add yup
import * as Yup from 'yup'

import '../styles/styles.css'


const FormikYupComponentPage = () => {
  
  return (
    <div>
        <h1>Basic Yup Component Formik</h1>
        <Formik 
          initialValues={{
          firstName:'',
          lastName:'',
          email:'',
          terms: false,
          jobType: ''
          }}
          onSubmit= {(values) => {
            console.log('values', values)
          }}
          validationSchema={
            Yup.object({
              firstName: Yup.string().max(15, 'It have to 15 character!!').required('Required'),
              lastName: Yup.string().max(10, 'It have to 10 character!!').required('LastName is required'),
              email: Yup.string().email('Email is not formatted!!').required('email is required'),
              terms: Yup.boolean().oneOf([true],'Accept term to continue'),
              jobType: Yup.string().notOneOf(['it-jr'],'This option is not permit!').required('Required')
          })
          }
        >
        {
          (formik) => (
            <Form >
                <label htmlFor="firstName">FirstName</label>
                <Field name= 'firstName' type='text' placeholder='firstName'/>
                <ErrorMessage name= 'firstName' component={'span'}/>
                
                
                <label htmlFor="lastName">lastName</label>
                <Field name= 'lastName' type='text' />
                <ErrorMessage name= 'lastName'component={'span'}/>
                
                <label htmlFor="email">email</label>
                <Field name= 'email' type='text' />
                <ErrorMessage name= 'email'component={'span'}/>
            
                <label htmlFor="jobType">jobType</label>
                <Field name= 'jobType' as='select' >
                    <option value="">Pick sometimes</option>
                    <option value="developer">Developer</option>
                    <option value="designer">Designer</option>
                    <option value="it-senior">Senior</option>
                    <option value="it-jr">Junior</option>
                 </Field> 
                <ErrorMessage name= 'jobType'component={'span'}/>
            
                <label>
                  <Field name= 'terms' type='checkbox' />
                  Terms and conditions
                </label>
                <ErrorMessage name= 'terms' component={'span'}/>
            
                
                <button type='submit'>Submit</button>
            </Form>
          )
        }
        </Formik>
        
    </div>
  );
}

export default FormikYupComponentPage;
