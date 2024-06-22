import React from 'react'
import { useState,useEffect } from 'react';
import Jobslist from './Jobslist'

const Joblisting = ({isHome = false}) => {
  const [jobs,setJobs] =useState([]);
  const [loading,setloading]=useState(true);

  useEffect(()=>{
    const fetchjobs =async()=>{
      try{
        const res= await fetch('http://localhost:8000/jobs');
        const data =await res.json();
        setJobs(data);
      }
      catch(error){
        console.log("Error in fetching data",error)
      }
      finally{
        setloading(false);
      }
    }
    fetchjobs();
  },[])


  return (
    <section className="bg-blue-50 px-4 py-10">
    <div className="container-xl lg:container m-auto">
      <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
        {isHome ? 'Recent jobs' : 'Browse jobs'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {loading ? (<h2>hello</h2>) : (
          <>
          {jobs.map((job)=>(
            <Jobslist key={job.id} job={job}/>
        ))}
          </>
        )}
      </div>
    </div>
  </section>
  )
}

export default Joblisting