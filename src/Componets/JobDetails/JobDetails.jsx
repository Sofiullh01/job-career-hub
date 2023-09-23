import { useLoaderData, useParams , useNavigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/localStor";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs?.find((job) => job.id === idInt);
  const {job_description,job_responsibility,educational_requirements,experiences,phone,email,address,salary,job_title} = job || {};
  const naviget = useNavigate();
  const handleApplyJob = () => {

    
    saveJobApplication(idInt)
    toast.success('You have applide successfully')
    naviget('/applied')
  };

  return (
    <div>
      <div className=" h-72 flex items-center justify-center">
        <img src="/public/images/bg1.png" alt="" className="absolute left-0" />
        <img
          src="/public/images/bg2.png"
          alt=""
          className="absolute right-0 -top-14"
        />
        <h3 className="text-4xl font-extrabold">Job Details</h3>
      </div>
      <div className="grid md:grid-cols-4 gap-4">
        <div className="md:col-span-3">
            <p className="mb-4"><span className="font-bold">Job Description:</span>
            {job_description}</p>
            <p className="mb-4"><span className="font-bold">Job Responsibility:</span>
            {job_responsibility}</p>
            <p className="mb-5"><span className="font-bold">Educational Requirements:</span> <br />
            {educational_requirements}
            </p>
            <p><span className="font-bold">Experiences</span> <br />
            {experiences}
            </p>
        </div>
        <div className="md:col-span-1">
          <div className="relative flex w-full max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr from-blue-400 to-purple-400 bg-clip-border p-8 text-white shadow-md shadow-pink-500/40">
            <div className="relative m-0 mb-8 overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border  text-center text-gray-700 shadow-none">
              <h1 className="mt-6 flex justify-center gap-1 font-sans text-7xl font-normal tracking-normal text-white antialiased">
              <span className="text-3xl font-bold">Job Details</span>
              </h1>
            </div>
            <hr />
            <div className="p-0">
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-4 mt-6">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      ></path>
                    </svg>
                  </span>
                  <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased ">
                    <span className=" font-bold">Salary : <span className="font-light">{salary}</span></span>
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      ></path>
                    </svg>
                  </span>
                  <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                  <span className=" font-bold">Job Title: <span className="font-light">{job_title}</span></span>
                  </p>
                </li>
                <hr />
                {/* <p className="font-bold">{contact_information}</p> */}
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      ></path>
                    </svg>
                  </span>
                  <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                  <span className=" font-bold">Phone : <span className="font-light">{phone}</span></span>
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      ></path>
                    </svg>
                  </span>
                  <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                  <span className=" font-bold"> Email : <span className="font-light">{email}</span></span>
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      ></path>
                    </svg>
                  </span>
                  <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                  <span className=" font-bold">Address : <span className="font-light">{address}</span></span>
                  </p>
                </li>
              </ul>
            </div>
            <div className="mt-6 p-0">
              <button onClick={handleApplyJob}
                className="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-blue-600 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-dark="true"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
