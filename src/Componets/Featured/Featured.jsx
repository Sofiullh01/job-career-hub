import { useEffect, useState } from "react";
import Job from "../Job/Job";

const Featured = () => {
  const [jobs, setJobs] = useState([]);
  // it's not best weay
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">
          Featured Jobs : {jobs.length}
        </h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-4 mt-6">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div
        className={
          dataLength === jobs.length ? "hidden" : "flex justify-center"
        }
      >
        <button
          onClick={() => setDataLength(jobs.length)}
          className="btn btn-primary mt-4 block"
        >
          See All Jobs
        </button>
      </div>
    </div>
  );
};

export default Featured;
