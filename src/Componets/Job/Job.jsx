import PropTypes from "prop-types";
import { FaLocationDot,FaBangladeshiTakaSign } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
   const {id,logo,job_title,company_name,remote_or_onsite,location,job_type,salary,job_description} = job
  return (
    <div>
      <div className="card card-compact  bg-base-100 shadow-xl pt-4">
        <figure>
          <img
            src={logo}
            alt="Logo"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p className="mx-4">{company_name}</p>
          <div className="text-[#7E90FE]">
            <button className="px-5 py-2 font-bold border-2 rounded-md border-[#7E90FE] mr-4">{remote_or_onsite}</button>
            <button className="px-5 py-2 font-bold border-2 rounded-md border-[#7E90FE] mr-4">{job_type}</button>
          </div>
          <div className="flex gap-x-2 justify-center items-center my-4">
          <FaLocationDot/><p><span className="mr-3">{location}</span> </p> 
          <FaBangladeshiTakaSign/><p><span className="mr-3">{salary}</span></p>
          </div>
          <div className="card-actions ">
            <Link to ={`/job/${id}`}>
            <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Job.propTypes = {
    job: PropTypes.object.isRequired
}
export default Job;
