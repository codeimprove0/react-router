
import React from 'react'
import './App.css';



import Nav from './components/Nav'

import { BrowserRouter as Router, Route, Routes,useRoutes } from 'react-router-dom'

// import Routes from './routes'
// import {renderRoutes} from 'react-router-config'

import Home from './components/Home'
import Login from './components/Login'
import Blog from './components/Blog'
import PageNotFound from './components/PageNotFound'


const AppRoute = ()=>{
  let routes = useRoutes([
    { path:"/",element:<Home/>},
    { path:"/home",element:<Home/>},
    { path:"/login",element:<Login/>},
    { path:"/blog/:blogId",element:<Blog/>}
  ])
 
  return routes;
}

function App() {
  return (
    <div className="app">
      <Router>
          <Nav/>
          <AppRoute/>
          {/* <Routes>
              <Route path="/" exact={true} element={<Home/>}/>
              <Route path="/home"  element={<Home/>}/>
              <Route path="/login"  element={<Login/>}/>
              <Route path="/blog/:blogId"  element={<Blog/>}/> 
              <Route path="**" exact={true}  element={<PageNotFound/>}/>
          </Routes>  */}
          {/* <Switch>{renderRoutes(Routes)}</Switch> */}
      </Router>

    </div>
  );
}

export default App;
