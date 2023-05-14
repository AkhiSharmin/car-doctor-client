import { Link } from "react-router-dom";
import login from "../../../src/assets/images/login/login.svg";

const SingUp = () => {
  const handelSingUp = (event) => {
    event.preventDefault();
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex">
        <div className="w-1/2 mr-12">
          <img src={login} alt="" />
        </div>
        <div className="card w-full flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">SingUp!</h1>
            <form onSubmit={handelSingUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your Name"
                  name="Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your Email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-orange-500 border-0"
                  type="submit"
                  value="SingUp"
                />
              </div>
            </form>
            <p className="my-4 text-center">
              Already have an Account?
              <Link className="text-orange-500 font-bold" to="/login">
                LogIn
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
