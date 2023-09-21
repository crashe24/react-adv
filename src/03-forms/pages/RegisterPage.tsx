import { useFormGeneric } from '../hooks/useFormGeneric';
import '../styles/styles.css'

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

export const RegisterPage = () => {

const { name, email, password1, password2, 
    onSubmit, onChange, onReset, isValidEmail} = useFormGeneric(initialState)

  return (
    <div>
      <h1>Register Page</h1>
      <form noValidate onSubmit={onSubmit}>
        <input value={ name }      type="text"     
        name='name' onChange={onChange} 
        placeholder="name" className={ `${name.trim().length<=0 && 'has-error'}`}/>
        { name.trim().length <=0 && <span>Este campo es necesario</span>}
        
        <input value={ email }     
        type="email"    name='email' 
        onChange={onChange} placeholder="email"
        className={`${!isValidEmail(email) && 'has-error'}`}
        />
        { !isValidEmail(email) && <span>El email es obligatorio</span> }
        <input value={ password1 } type="password" name='password1' onChange={onChange} 
        placeholder="password1"/>
        { password1.trim().length <=0 && <span>Este campo es necesario</span>}
        { password1.trim().length >0 && password1.trim().length <=6 && <span>El password debe tener un minimo de 6 caracteres</span>}
        <input value={ password2 } type="password" name='password2' onChange={onChange} 
        placeholder="repeat password"/>
        { password2.trim().length <=0 && <span>Este campo es necesario</span>}
        { password2.trim().length>0 && password1 !== password2 && <span>Los password deben ser identicos</span>}

        <button type="submit">Create</button>
        <button type="button" onClick={onReset}>Reset</button>
      </form>
    </div>
  );
}

export default RegisterPage;
