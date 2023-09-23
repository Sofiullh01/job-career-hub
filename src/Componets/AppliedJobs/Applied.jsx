import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/localStor";
import ApCard from "../ApCard/ApCard";

const Applied = () => {
    const jobs = useLoaderData();
  const [appliedJobs, setAppliedJob] = useState([]);
  const [displayJob, setDisplayJob ] = useState([]);

  const handleJobsFilter = filter => {
    if(filter === 'All'){
        setDisplayJob(appliedJobs);
    }
    else if(filter === 'Remote'){
        const remoteJob = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
        setDisplayJob(remoteJob)
    }
    else if(filter === 'Onside'){
        const onsideJob = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
        setDisplayJob(onsideJob)
    }
  }

  useEffect(() => {
    const storedJobId = getStoredJobApplication();

    if (jobs.length) {
      // const jobsApplied = jobs?.filter(job => storedJobId.includes(job.id));

      const jobsApplied = [];
      for (const id of storedJobId) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJob(jobsApplied);
      setDisplayJob(jobsApplied);
    }
  }, [jobs, setAppliedJob]);

  return (
    <div>
      <div className=" h-72 flex items-center justify-center">
        <img src="/public/images/bg1.png" alt="" className="absolute left-0" />
        <img
          src="/public/images/bg2.png"
          alt=""
          className="absolute right-0 -top-14"
        />
        <h3 className="text-4xl font-extrabold">
          Jobs I Applied : {appliedJobs.length}
        </h3>
      </div>
      <div className="flex justify-end">
      <details className=" dropdown mb-32 flex justify-end w-36 ">
        <summary className="m-1 btn">open or close</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-32">
          <li onClick={()=>handleJobsFilter('All')}>
            <a>All</a>
          </li>
          <li onClick={()=>handleJobsFilter('Remote')}>
            <a>Remote</a>
          </li>
          <li onClick={()=>handleJobsFilter('Onside')}>
            <a>Onside</a>
          </li>
        </ul>
      </details>
      </div>
      <div className="space-y-5">
        {
            displayJob?.map(job => <ApCard 
                key={job.id}
                job={job}
                ></ApCard>)
        }
      </div>
    </div>
  );
};

export default Applied;
