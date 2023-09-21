import {  useFormik } from 'formik';
// yarn add yup
import * as Yup from 'yup'

import '../styles/styles.css'


const FormikYupPage = () => {
  const formik = useFormik({
    initialValues:{
        firstName:'',
        lastName:'',
        email:'',
    },
    onSubmit: (values) => { console.log('values', values)},
    validationSchema : Yup.object({
        firstName: Yup.string().max(15, 'It have to 15 character!!').required('Required'),
        lastName: Yup.string().max(10, 'It have to 10 character!!').required('LastName is required'),
        email: Yup.string().email('Email is not formatted!!').required('email is required'),
    })
  })

  return (
    <div>
        <h1>Basic Yup Formik</h1>
        <form noValidate onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">FirstName</label>
            <input type="text" {...formik.getFieldProps('firstName')}/>
            { formik.touched.firstName && formik.errors.firstName && <span> {formik.errors.firstName} </span>}
            
            <label htmlFor="lastName">lastName</label>
            <input type="text" {...formik.getFieldProps('lastName')}
            />
            { formik.touched.lastName && formik.errors.lastName && <span> {formik.errors.lastName}</span>}
            
            <label htmlFor="email">email</label>
            <input type="email" {...formik.getFieldProps('email')}
            />
            { formik.touched.email && formik.errors.email && <span>{ formik.errors.email}</span>}
            
            <button type='submit'>Submit</button>
        </form>
    </div>
  );
}

export default FormikYupPage;
