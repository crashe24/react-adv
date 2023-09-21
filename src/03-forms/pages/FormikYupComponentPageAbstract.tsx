import {  Formik,  Form } from 'formik';
// yarn add yup
import * as Yup from 'yup'

import '../styles/styles.css'
import {MyTextInput,  MySelect,  MyCheckBox } from '../components'


const FormikYupComponentPageAbstract = () => {
  
  return (
    <div>
        <h1>Abstraction Component Formik</h1>
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
                <MyTextInput label={'FirstName'} name={'firstName'} placehorder='your name'  />
                <MyTextInput label={'LastName'} name={'lastName'} placehorder='your last'  />
                <MyTextInput label={'Email'} name={'email'} type={'email'} placehorder='your@gmail.com'  />
                <MySelect label='Job Type' name='jobType'  >
                    <option value="">Pick sometimes</option>
                    <option value="developer">Developer</option>
                    <option value="designer">Designer</option>
                    <option value="it-senior">Senior</option>
                    <option value="it-jr">Junior</option>
                 </MySelect> 
                
                <MyCheckBox label={'Terms and conditions'} name={'terms'}  />
                
                
                <button type='submit'>Submit</button>
            </Form>
          )
        }
        </Formik>
        
    </div>
  );
}

export default FormikYupComponentPageAbstract;
