import React, { useState } from "react";
import AddNewSchool from "./AddNewSchool";
import AllSchools from "./AllSchools";

const SchoolManagement = () => {
  // Keeps track of the current view
  // Default to "add" to show the form as default 
  const [view, setView] = useState("add"); 

  return (
    <div className="bg-zinc-100 min-h-screen">
      {/* Buttons to switch between views */}
      <div className="mb-4 flex items-center justify-center mt-12 sm:space-x-2 sm:space-y-2">
        <button
          onClick={() => setView("add")}
          className="m-3 px-4 py-3 bg-blue-500 rounded-md text-white text-xl hover:bg-blue-600 sm:text-sm md:text-base lg:text-lg xl:text-xl"
        >
          Add New School
        </button>
        <button
          onClick={() => setView("view")}
          className="m-3 px-4 py-3 bg-blue-500 rounded-md text-white text-xl hover:bg-blue-600 sm:text-sm md:text-base lg:text-lg xl:text-xl"
        >
          View All School Details
        </button>
      </div>

      {/* Conditional rendering based on state */}
      <div className="p-4">
        {view === "add" && <AddNewSchool />}
        {view === "view" && <AllSchools />}
      </div>
    </div>
  );
};

export default SchoolManagement;
