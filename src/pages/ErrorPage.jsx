import { Link } from "react-router-dom";
import gif from "../assets/loader.gif";

const ErrorPage = () => {
    return (
        <div className="my-12 px-4 py-12">
          <div className="flex flex-col justify-center items-center gap-5 ">
          <h2 className="md:text-3xl text-2xl text-red font-bold text-center">
            Sorry, this page is not found! <Link to='/'> <br /><span className="flex underline justify-center text-green-400 mt-3">back to home page</span></Link>
          </h2>
          <img
            src={gif}
            className="h-[400px]"
            alt=""
          />
          
        </div>
        </div>
    );
};

export default ErrorPage;