import React from "react";
import Hero from "./components/hero"
import Navbar from "./components/navbar";
import HomeCards from "./components/Homecards";
import Joblisting from "./components/Joblisting";

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero title="Become a webdev"
      subtitle="Find your webdev job that suits your skills and needs"/>
      <HomeCards/>
      <Joblisting/>

      <section className="m-auto max-w-lg my-10 px-6">
        <a
          href="jobs.html"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All Jobs
        </a>
      </section>
    </>
  );
}

export default App;

