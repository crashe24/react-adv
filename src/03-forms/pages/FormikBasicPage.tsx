import { FormikErrors, useFormik } from 'formik';

import '../styles/styles.css'

interface FormValues  {
    firstName: string,
    lastName: string,
    email: string,
}
const FormikBasicPage = () => {

  const validate = (formValues: FormValues) => {
        const errors: FormikErrors<FormValues> = {}
            if (!formValues.firstName) {
                errors.firstName = 'Required'
            } else if (formValues.firstName.length >= 15) {
                errors.firstName = 'Must be 15 characters or less'
            }

            if (!formValues.lastName) {
                errors.lastName = 'Required'
            } else if (formValues.lastName.length >= 10) {
                errors.lastName = 'Must be 10 characters or less'
            }
            
            if (!formValues.email)  {
                errors.email = 'Required'
            } else if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(formValues.email)) {
               errors.email = 'Invalid email address'   
               
            }

        

        return errors 
  }

  const formik = useFormik({
    initialValues:{
        firstName:'',
        lastName:'',
        email:'',
    },
    onSubmit: (values) => { console.log('values', values)},
    validate
  })
  return (
    <div>
        <h1>Basic Tutorial Formik</h1>
        <form noValidate onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">FirstName</label>
            <input type="text" name='firstName'
            onBlur={ formik.handleBlur }
            onChange={ formik.handleChange}
            value={ formik.values.firstName}
            />
            { formik.touched.firstName && formik.errors.firstName && <span> {formik.errors.firstName} </span>}
            
            <label htmlFor="lastName">lastName</label>
            <input type="text" name='lastName' 
            onBlur={ formik.handleBlur }
            onChange={ formik.handleChange} 
            value={ formik.values.lastName}
            />
            { formik.touched.lastName && formik.errors.lastName && <span> {formik.errors.lastName}</span>}
            
            <label htmlFor="email">email</label>
            <input type="email" name='email' 
            onBlur={ formik.handleBlur }
            onChange={ formik.handleChange}
            value={ formik.values.email}
            />
            { formik.touched.email && formik.errors.email && <span>{ formik.errors.email}</span>}
            
            <button type='submit'>Submit</button>
        </form>
    </div>
  );
}

export default FormikBasicPage;
