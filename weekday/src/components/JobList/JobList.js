import React from "react";
import FilterJob from "../Filter/FilterJob";
import JobCard from "../JobCard/JobCard";

const JobList = () => {
  return (
    <>
      <FilterJob />
      <JobCard />
    </>
  );
};

export default JobList;
