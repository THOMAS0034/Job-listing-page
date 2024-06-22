import React from "react";
import Home from "./pages/Home";
import {Route ,createBrowserRouter ,createRoutesFromElements,RouterProvider} from 'react-router-dom'
import Mainlayout from '../src/layouts/mainlayout'
import Jobspage from "./pages/jobspage";
import Notfound from "./pages/Notfound";

const router=createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<Mainlayout/>}>
  <Route index element={<Home/>}/>
  <Route path='/jobs' element={<Jobspage/>}/>
  <Route path='*' element={<Notfound/>}/>
  </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;

