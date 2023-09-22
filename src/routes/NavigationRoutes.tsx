import { BrowserRouter, NavLink, Navigate, Route, Routes } from "react-router-dom";

import logo from '../assets/react.svg'
import RegisterPage from "../03-forms/pages/RegisterPage";
import FormikBasicPage from "../03-forms/pages/FormikBasicPage";
import FormikYupPage from "../03-forms/pages/FormikYupPage";
import FormikYupComponentPage from "../03-forms/pages/FormikYupComponentPage";
import FormikYupComponentPageAbstract from "../03-forms/pages/FormikYupComponentPageAbstract";
import RegisterFormikPage from "../03-forms/pages/RegisterFormikPage";
import DynamicForm from "../03-forms/pages/DynamicForm";

const NavigacionRoutes = () => {
  return (
    <BrowserRouter>
        <div className="main-layout">
            <nav>
                <img src={ logo } alt="react logo" />
                <ul>
                  <li>
                    <NavLink to="/" 
                      className={ ({isActive}) => isActive ?'nav-active':''}>
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about"
                    className={ ({isActive}) => isActive ?'nav-active':''}>
                      About</NavLink>
                  </li>
                  <li>
                    <NavLink to="/user"
                    className={ ({isActive}) => isActive ?'nav-active':''}>
                      User</NavLink>
                  </li>
                  <li>
                    <NavLink to="/register"
                    className={ ({isActive}) => isActive ?'nav-active':''}>
                      Register</NavLink>
                  </li>
                  <li>
                    <NavLink to="/formik-basic"
                    className={ ({isActive}) => isActive ?'nav-active':''}>
                      FormikBasic</NavLink>
                  </li>
                  <li>
                    <NavLink to="/formik-yup"
                    className={ ({isActive}) => isActive ?'nav-active':''}>
                      FormikYup</NavLink>
                  </li>
                  <li>
                    <NavLink to="/formik-yup-component"
                    className={ ({isActive}) => isActive ?'nav-active':''}>
                      FormikYupComponent</NavLink>
                  </li>
                  <li>
                    <NavLink to="/formik-abstraction"
                    className={ ({isActive}) => isActive ?'nav-active':''}>
                      FormikAbstract</NavLink>
                  </li>
                  <li>
                    <NavLink to="/register-pageFormik"
                    className={ ({isActive}) => isActive ?'nav-active':''}>
                      RegisterPageFormik</NavLink>
                  </li>
                  <li>
                    <NavLink to="/dynamic-form"
                    className={ ({isActive}) => isActive ?'nav-active':''}>
                      DynamicForm</NavLink>
                  </li>
                </ul>
            </nav>
            <Routes>
              <Route path="about" element={<h1>About Page</h1>} />
              <Route path="user" element={<h1>User Page</h1>} />
              <Route path="register" element={<RegisterPage />} />
              <Route path="formik-basic" element={<FormikBasicPage />} />
              <Route path="formik-yup" element={<FormikYupPage />} />
              <Route path="formik-yup-component" element={<FormikYupComponentPage />} />
              <Route path="formik-abstraction" element={<FormikYupComponentPageAbstract />} />
              <Route path="register-pageFormik" element={<RegisterFormikPage />} />
              <Route path="dynamic-form" element={<DynamicForm />} />
              <Route path="/" element={<h1>Main Page</h1>} />
              <Route path="/*" element={<Navigate to={'/'} replace/>} />
            </Routes>
        </div>      
    </BrowserRouter>
  );
}

export default NavigacionRoutes;
