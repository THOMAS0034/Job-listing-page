import React from "react";
import Home from "./pages/Home";
import {Route ,createBrowserRouter ,createRoutesFromElements,RouterProvider} from 'react-router-dom'
import Mainlayout from '../src/layouts/mainlayout'
import Jobspage from "./pages/jobspage";
import Notfound from "./pages/Notfound";
import Jobpage,{jobloader} from "./pages/Jobpage";
import Addjobpage from "./pages/Addjobpage";
import Editjobpage from "./pages/Editjobpage";


//add
const App = () => {
  const addJob =async(newJob)=> {
    const res = await fetch('/api/jobs',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(newJob),
    });
    return;
  };
  
//del


const deletejob = async(id)=>{
  const res = await fetch(`/api/jobs/${id}`,{
    method:'DELETE',
  });
  return;
};

const updatejob = async(job)=>{
  const res = await fetch(`/api/jobs/${job.id}`,{
    method:'PUT',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(job),
  });
  return;
};

  const router=createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<Mainlayout/>}>
    <Route index element={<Home/>}/>
    <Route path='/jobs' element={<Jobspage/>}/>
    <Route path='/jobs/:id' element={<Jobpage deletejob={deletejob}/>} loader={jobloader}/>
    <Route path='*' element={<Notfound/>}/>
    <Route path='/add-job' element={<Addjobpage addJobsubmit={addJob}/>}/>
    <Route path='/edit-job/:id' element={<Editjobpage updateJobsubmit={updatejob}/>} loader={jobloader}/>
    </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  );
}

export default App;

