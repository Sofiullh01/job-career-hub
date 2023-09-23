const getStoredJobApplication = () => {
    const storedJobApplication = localStorage.getItem('job-application');

    if (storedJobApplication){
        return JSON.parse(storedJobApplication);
    }
    return [];
}

const saveJobApplication = id => {
    const storedJobApplications = getStoredJobApplication();

    const isExsts = storedJobApplications.find(jobId => jobId  === id);

    if(!isExsts){
        storedJobApplications.push(id);
        localStorage.setItem('job-application', JSON.stringify(storedJobApplications))
    }
}
export {getStoredJobApplication,saveJobApplication}