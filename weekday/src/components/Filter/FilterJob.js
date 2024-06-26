import React from "react";
import CustomerFilter from "../../common/CustomFilter";
import "./FilterJob.css";
import Input from "@mui/joy/Input";

const FilterJob = ({ handleChange, handleSearch }) => {
  const JobRoleFilter = [
    { value: "ios", label: "iOS" },
    { value: "android", label: "Android" },
    { value: "JAVA", label: "Java" },
    { value: "frontend", label: "Frontend" },
    { value: "fullstack", label: "Fullstack" },
    { value: "flutter", label: "Flutter" },
    { value: "tech-lead", label: "Tech Lead" },
  ];

  const noOfEmpFilter = [
    { value: "1-10", label: "1-10" },
    { value: "11-20", label: "11-20" },
    { value: "21-50", label: "21-50" },
    { value: "51-100", label: "51-100" },
    { value: "101-200", label: "101-200" },
    { value: "201-500", label: "201-500" },
    { value: "500+", label: "500+" },
  ];

  const expFilter = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
    { value: "10", label: "10" },
  ];

  const workModeFilter = [
    { value: "remote", label: "Remote" },
    { value: "hybrid", label: "Hybrid" },
    { value: "in_office", label: "In-office" },
  ];

  const salaryFilter = [
    { value: "0", label: "0L" },
    { value: "10", label: "10L" },
    { value: "20", label: "20L" },
    { value: "30", label: "30L" },
    { value: "40", label: "40L" },
    { value: "50", label: "50L" },
    { value: "60", label: "60L" },
    { value: "70", label: "70L" },
  ];

  return (
    <div className="filter-container">
      <CustomerFilter
        filter={JobRoleFilter}
        handleChange={handleChange}
        placeholder={"Roles"}
      />
      <CustomerFilter
        filter={noOfEmpFilter}
        handleChange={handleChange}
        placeholder={"Number_of_Employee"}
      />
      <CustomerFilter
        filter={expFilter}
        placeholder={"Experience"}
        handleChange={handleChange}
      />
      <CustomerFilter
        placeholder={"Remote"}
        handleChange={handleChange}
        filter={workModeFilter}
      />
      <CustomerFilter
        filter={salaryFilter}
        handleChange={handleChange}
        placeholder={"Minimum_Base_Pay_Salary"}
      />
      <Input
        className="Search-job"
        size="sm"
        placeholder="Search Company Name"
        color="neutral"
        onKeyUp={handleSearch}
      />
    </div>
  );
};

export default FilterJob;
