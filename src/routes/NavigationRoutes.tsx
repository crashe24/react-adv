import { Suspense } from "react";

import { BrowserRouter, NavLink, Navigate, Route, Routes } from "react-router-dom";

import logo from '../assets/react.svg'
import { routes } from "./routes";



const NavigacionRoutes = () => {
  return (
    <Suspense fallback={<span>...Loading...</span>}>

        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="react logo" />
                    <ul>
                      {
                        routes.map( ({to,names}) => (
                          <li key={names}>
                            
                            <NavLink 
                            to={to} 
                            className={ ({isActive}) => isActive ?'nav-active':''}>
                            {names}
                          </NavLink>  

                          </li>
                        )
                        ) 
                      }
                    </ul>
                </nav>
                <Routes>
                  {routes.map( ({Component, path}) => (
                    <Route 
                        key={path} 
                        path={path} 
                        element={<Component />} />
                  ))}
                  <Route path="/*" element={<Navigate to={routes[0].to} replace/>} />
                </Routes>
            </div>      
        </BrowserRouter>
    </Suspense>
  );
}

export default NavigacionRoutes;
