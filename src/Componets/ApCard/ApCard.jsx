import { FaLocationDot,FaBangladeshiTakaSign } from "react-icons/fa6";

const ApCard = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job || {};
  return (
    <div>
      <div className=" grid grid-cols-4 max-w-full flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className=" col-span-1 relative w-full m-0  shrink-0 overflow-hidden rounded-xl rounded-r-none bg-gray-200 bg-clip-border text-gray-700 flex justify-center items-center px-8">
          <img src={logo} alt="image" className=" w-full  object-cover" />
        </div>
        <div className="p-6 col-span-2">
          <h6 className="mb-4 block font-sans text-xl leading-relaxed tracking-normal text-pink-500 antialiased font-bold  ">
            {job_title}
          </h6>
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {company_name}
          </h4>
          <div className="text-[#7E90FE]">
            <button className="px-5 py-2 font-bold border-2 rounded-md border-[#7E90FE] mr-4">{remote_or_onsite}</button>
            <button className="px-5 py-2 font-bold border-2 rounded-md border-[#7E90FE] mr-4">{job_type}</button>
          </div>
          <div className="flex gap-x-2 items-center my-4">
          <FaLocationDot/><p><span className="mr-3">{location}</span> </p> 
          <FaBangladeshiTakaSign/><p><span className="mr-3">{salary}</span></p>
          </div>
        </div>
        <div className="col-span-1 flex justify-center items-center">
          <button
            className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            View Details
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApCard;
