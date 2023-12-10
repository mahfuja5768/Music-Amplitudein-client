import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../components/ProviderContext/AuthProvider";
import Swal from "sweetalert2";
import { saveUser } from "../api/auth";
import { imageUpload } from "../api/utils";

const Register = () => {
  const { createUser, updateUserProfile, googleLogin } = useContext(AuthContext);

  const navigate = useNavigate();

  // console.log(location);

  const [registerError, setRegisterError] = useState("");
  const [showPass, setShowPass] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formValues = e.target;
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const image = form.get("image");

    console.log(name, email, password, image);

    setRegisterError("");
    formValues.reset();

    // if (name.length === 0 || password.length < 0) {
    //   return;
    // } else if (password.length < 6) {
    //   return setRegisterError(" The password is less than 6 characters");
    // } else if (!/[A-Z]/.test(password)) {
    //   return setRegisterError(" The password don't have a capital letter");
    // } else if (!/[!#$%&?]/.test(password)) {
    //   return setRegisterError(" The password don't have a special character");
    // }

    try {
      const imageData = await imageUpload(image);
      const result = await createUser(email, password);
      await updateUserProfile(name, imageData?.data?.display_url);

      // console.log(result.user);
      const saveUserInfo = await saveUser(result?.user);
      console.log(saveUserInfo);

      formValues.reset();
      Swal.fire({
        title: "Success!",
        text: "Successfully user created!",
        icon: "success",
        confirmButtonText: "Done",
      });
      formValues.reset();
      navigate("/");
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error!",
        text: `${error.message}`,
        icon: "error",
        confirmButtonText: "Done",
      });
      formValues.reset();
    }
  };

  const handleGoogle = async () => {
    try {
      const result = await googleLogin();
      // console.log(result.user);
      const saveUserInfo = await saveUser(result?.user);
      console.log(saveUserInfo);

      Swal.fire({
        title: "Success!",
        text: "Successfully user logged in!",
        icon: "success",
        confirmButtonText: "Done",
      });
      navigate("/");
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error!",
        text: `${error.message}`,
        icon: "error",
        confirmButtonText: "Done",
      });
    }
  };

  return (
    <div className="py-0 lg:py-8 px-4">
      <div className="py-8 max-w-[1280px] mx-auto px-4 lg:px-12">
        <h1 className="lg:text-5xl text-4xl font-bold text-center  ">
          Register Now
        </h1>
        <div className="border-b-red border-b-4 w-24 my-3 mb-12 mx-auto"></div>
        <div className="grid grid-cols-1 lg:grid-cols-4 items-center gap-6">
          <div className="lg:col-span-2">
            <img
              className="mx-auto"
              src={
                "https://i.ibb.co/yFcRx9F/login-concept-illustration-65141-421-removebg-preview.png"
              }
              alt=""
            />
          </div>
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit}>
              <div className="">
                <div className="form-control">
                  <label className="label">
                    <span className="text-xl ">Name</span>
                  </label>
                  <label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      className="input input-bordered  rounded-lg w-full"
                      required
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-xl ">Email</span>
                  </label>
                  <label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      className="input input-bordered  rounded-lg w-full"
                      required
                    />
                  </label>
                </div>

                <div className="form-control  text-lg ">
                  <label className="label">
                    <span className="text-lg">Password</span>{" "}
                    <span>
                      {showPass ? (
                        <FaEyeSlash onClick={() => setShowPass(!showPass)} />
                      ) : (
                        <FaEye onClick={() => setShowPass(!showPass)} />
                      )}
                    </span>
                  </label>
                  <input
                    type={showPass ? "password" : "text"}
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="form-control my-3">
                <label className="label">
                  <span className="label-text">Choose your photo </span>
                </label>
                <input
                  type="file"
                  required
                  id="image"
                  name="image"
                  accept="image/*"
                  className="w-full cursor-pointer file-input-primary"
                />
              </div>
              <p className=" text-lg my-5">
                Already have an account ?
                <Link to="/login" className="link text-blue-500 ms-2">
                  Login now
                </Link>
              </p>

              {registerError && (
                <h3 className="text-red  text-lg pb-2">{registerError}</h3>
              )}
              <input
                type="submit"
                className="w-full cursor-pointer hover:bg-hoverText bg-red text-white my-2 rounded-lg py-4 font-bold"
                value="  Register now"
              />
              <h2 className="text-center my-1">Or</h2>
            </form>
            <button
              onClick={handleGoogle}
              className="btn cursor-pointer bg-transparent border-2 text-center mx-auto mt-6 hover:text-white hover:border-white rounded-full flex justify-center items-center border-red  text-red normal-case"
            >
              <span>
                <FaGoogle></FaGoogle>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
