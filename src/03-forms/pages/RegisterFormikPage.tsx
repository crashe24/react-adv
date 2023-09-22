
import '../styles/styles.css'
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { MyTextInput } from '../components';


export interface InitialStateInterface {
    name: string;
    email: string;
    password1: string;
    password2: string;
}

const initialState: InitialStateInterface = {
    name:'',
        email:'',
        password1:'',
        password2:'',
}

export const RegisterFormikPage = () => {

  return (
    <>
   
    <Formik initialValues={ {...initialState} }
            onSubmit= {(values)=> console.log('values', values)  }
            validationSchema = {Yup.object({
              name: Yup.string()
              .min(2, 'name permit min 2 character')
              .max(15,'Name permit only 15 characters').required('name is required'),
              email: Yup.string().email('Email did not have correct format').required('email is required'),
              password1: Yup.string().min(6,'Password has min 6 character ').required('password is required'),
              password2: Yup.string().oneOf([Yup.ref('password1')], 'password is not equals').required('pass2 is required')
            })}

    >
        {(formik) =>(
            <Form>
                  <h1>Register Formik Page</h1>

              <MyTextInput label='Name' name='name' placehorder='Name '/>
              <MyTextInput label='Email' name='email'type='email' placehorder='Email '/>
              <MyTextInput label='Password' name='password1'type='password' placehorder='****** '/>
              <MyTextInput label='Password' name='password2'type='password' placehorder='****** '/>
              <button type="submit">Create</button>
              <button type="button" onClick={formik.handleReset}>Reset</button>
              </Form>
              )
        }
          

      
    </Formik>
    </>
  );
}

export default RegisterFormikPage;
