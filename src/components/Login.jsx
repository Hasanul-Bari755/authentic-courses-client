import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
    <div className="hero min-h-screen bg-base-200 mt-0">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        <span><small>Don't have an account yet?<Link to='/signup'><button className="btn btn-link">Sign Up</button></Link></small></span>
            <div className='flex justify-between'>
                <button className="btn btn-sm mr-1"><FaGoogle className='mr-2'></FaGoogle> Login Google</button>
                <button className="btn btn-sm"><FaGithub className='mr-2'></FaGithub>Login github</button>

             </div>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;