import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center flex items-center justify-center">
            <h2 className="text-3xl">Opps!!!</h2>
            <Link to ="/" className="mt-24 bg-slate-500 hover:bg-slate-800 py-2 px-6 text-white font-semibold rounded-lg">Go back</Link>
        </div>
    );
};

export default ErrorPage;