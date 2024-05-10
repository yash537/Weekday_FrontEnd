import React, { useEffect, useState } from "react";
import JobCard from "../JobCard/JobCard";
import { StyledEngineProvider, CssVarsProvider } from "@mui/joy/styles";
import "./JobList.css";
import FilterJob from "../Filter/FilterJob";

const JobList = () => {
  const [jobList, setJobs] = useState([]);
  const [oldJobList, setOldJobList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [changedFilterOption, setChangedFilterOption] = useState({
    Remote: [],
    Roles: [],
    Experience: [],
    Minimum_Base_Pay_Salary: [],
    Number_of_Employee: [],
  });

  useEffect(() => {
    loadJobs();
  }, [page]); // Call loadJobs whenever page changes
  // useEffect(() => {
  //   console.log("jobslists");
  //   console.log(jobs);
  // }, [jobs]);

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
        isFilterApplied()
          ? setJobs((prevJobs) => [
              ...prevJobs,
              {
                jdUid: "cfff35e1-053c-11ef-83d3-06301d0a7178-92018",
                jdLink: "https://weekday.works",
                jobDetailsFromCompany:
                  "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
                maxJdSalary: 45,
                minJdSalary: 35,
                salaryCurrencyCode: "USD",
                location: "chennai",
                minExp: 5,
                maxExp: 6,
                jobRole: "tech lead",
                companyName: "Adobe Systems",
                logoUrl: "https://logo.clearbit.com/adobe.com",
              },
            ])
          : setJobs((prevJobs) => [...prevJobs, ...data.jdList]);
        setHasMore(data.hasMore); // Assuming your API returns a flag indicating if there are more jobs
        setLoading(false);
        return data;
      })
      .then((data) => {
        console.log(data);
        setOldJobList((prevJobs) => [...prevJobs, ...data.jdList]);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
        setLoading(false);
      });

    console.log("nknnknknk" + JSON.stringify(oldJobList));
  };

  const handleChange = (filterOptions, filterType) => {
    const _changedFilterOption = changedFilterOption;
    _changedFilterOption[filterType] = filterOptions;
    setChangedFilterOption(_changedFilterOption);
    let _filtedJobs = oldJobList;
    console.log(changedFilterOption);
    if (isFilterApplied()) {
      for (const key in changedFilterOption) {
        if (changedFilterOption[key].length !== 0) {
          switch (key) {
            case "Roles":
              _filtedJobs = getFilteredRoleBaseJob(
                changedFilterOption[key],
                _filtedJobs
              );
              console.log("---------------");
              console.log(_filtedJobs);
              break;
            case "Remote":
              _filtedJobs = getFilteredRemoteJob(
                changedFilterOption[key],
                _filtedJobs
              );

              break;
            case "Experience":
              _filtedJobs = getFilteredExperiencedJob(
                changedFilterOption[key],
                _filtedJobs
              );

              break;
            case "Minimum_Base_Pay_Salary":
              _filtedJobs = getFilteredSalaryBasedJob(
                changedFilterOption[key],
                _filtedJobs
              );
              console.log(_filtedJobs.length);
              break;
            case "Number_of_Employee":
              _filtedJobs = getFilteredExployeWiseJob(
                changedFilterOption[key],
                _filtedJobs
              );
              break;
            default:
              break;
          }
        }
      }

      setJobs(_filtedJobs);
    } else {
      setJobs(oldJobList);
    }
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

  const isFilterApplied = () => {
    for (const key in changedFilterOption) {
      if (changedFilterOption[key].length !== 0) {
        return true;
      }
    }
    return false;
  };

  const getFilteredExperiencedJob = (option, list) => {
    return list.filter((job) => {
      return option.some((option) => {
        return option.value >= job?.minExp && job?.maxExp >= option.value;
      });
    });
  };

  const getFilteredRoleBaseJob = (option, list) => {
    return list.filter((job) => {
      return option.some((opt) => {
        return opt.value === job.jobRole;
      });
    });
  };

  const getFilteredRemoteJob = (option, list) => {
    return list.filter((job) => {
      return option.some((option) => {
        if (option.value === "remote" && option.value === job.location)
          return true;
        else if (option.value === "Hybride" && option.value === job.location)
          return true;
        else if (
          option.value === "in_office" &&
          job.location !== "remote" &&
          job.location !== "Hybride"
        )
          return true;
        else return false;
      });
    });
  };

  const getFilteredSalaryBasedJob = (option, list) => {
    return list.filter((job) => {
      return option.some((option) => {
        return option.value <= job?.minJdSalary;
      });
    });
  };

  const getFilteredExployeWiseJob = (option, list) => {
    return list.filter((job) => {
      return option.some((option) => {
        return option.value === job.jobRole;
      });
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <StyledEngineProvider injectFirst>
        <CssVarsProvider>
          <FilterJob handleChange={handleChange} />
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
