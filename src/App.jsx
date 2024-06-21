import React from "react";
import Home from "./pages/Home";
import {Route ,createBrowserRouter ,createRoutesFromElements,RouterProvider} from 'react-router-dom'
import Mainlayout from '../src/layouts/mainlayout'


const router=createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<Mainlayout/>}>
  <Route index element={<Home/>}/>
  </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;

