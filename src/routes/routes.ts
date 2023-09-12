import { LazyExoticComponent, lazy } from "react";
import { NoLazy } from "../01-lazyload/pages";
//import { LazyPage1, LazyPage2,LazyPage3 } from "../01-lazyload/pages";

type JSXComponent = ()=> JSX.Element

interface RouteInterface {
    to:string,
    path:string,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent
    names:string,
}

const LazyLayout = lazy( ()=> import(/* webpackChunkName: "LazyLayout" */'../01-lazyload/layout/LazyLayout'))

const Lazy1 = lazy( ()=> import(/* webpackChunkName: "LazyPage1" */'../01-lazyload/pages/LazyPage1'))
const Lazy2 = lazy( ()=> import(/* webpackChunkName: "LazyPage2" */'../01-lazyload/pages/LazyPage2'))
const Lazy3 = lazy( ()=> import(/* webpackChunkName: "LazyPage3" */'../01-lazyload/pages/LazyPage3'))

export const routes: RouteInterface[] = [
    { to: '/lazy1', path: 'lazy1', Component: Lazy1, names: 'Lazy-1' },
    { to: '/lazy2', path: 'lazy2', Component: Lazy2, names: 'Lazy-2' },
    { to: '/lazy3', path: 'lazy3', Component: Lazy3, names: 'Lazy-3' },
    { 
        path: '/lazyLayout/*', 
        to: '/lazyLayout/', 
        Component: LazyLayout, 
        names: 'Lazy-Layout' },
    { to: '/no-lazy', path: 'no-lazy', Component: NoLazy, names: 'No Lazy' },
]