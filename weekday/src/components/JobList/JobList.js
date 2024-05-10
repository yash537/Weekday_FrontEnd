import React, { useEffect, useState } from "react";
import JobCard from "../JobCard/JobCard";
import { StyledEngineProvider, CssVarsProvider } from "@mui/joy/styles";
import "./JobList.css";
import FilterJob from "../Filter/FilterJob";

const JobList = () => {
  const [jobList, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    loadJobs();
  }, [page]);

  const loadJobs = () => {
    setLoading(true);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const body = JSON.stringify({
      limit: 10,
      offset: page,
    });
    const payload = {
      method: "POST",
      headers: myHeaders,
      body,
    };
    fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", payload)
      .then((response) => response.json())
      .then((data) => {
        setJobs((prevJobs) => [...prevJobs, ...data.jdList]);
        setHasMore(data.hasMore); // Assuming your API returns a flag indicating if there are more jobs
        setLoading(false);
        return data;
      });
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      if (!loading && hasMore) {
        setPage((prevPage) => prevPage + 1);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <StyledEngineProvider injectFirst>
        <CssVarsProvider>
          <FilterJob />
          <div className="job-list ">
            {jobList.map((job, index) => (
              <JobCard job={job} key={job.jdUid + index} />
            ))}
          </div>
        </CssVarsProvider>
      </StyledEngineProvider>
    </>
  );
};

export default JobList;
