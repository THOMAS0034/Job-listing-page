import React from "react";
import Home from "./pages/Home";
import {Route ,createBrowserRouter ,createRoutesFromElements,RouterProvider} from 'react-router-dom'
import Mainlayout from '../src/layouts/mainlayout'
import Jobspage from "./pages/jobspage";
import Notfound from "./pages/Notfound";
import Jobpage,{jobloader} from "./pages/Jobpage";
import Addjobpage from "./pages/Addjobpage";

const router=createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<Mainlayout/>}>
  <Route index element={<Home/>}/>
  <Route path='/jobs' element={<Jobspage/>}/>
  <Route path='/jobs/:id' element={<Jobpage/>} loader={jobloader}/>
  <Route path='*' element={<Notfound/>}/>
  <Route path='/add-job' element={<Addjobpage/>}/>
  </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;

