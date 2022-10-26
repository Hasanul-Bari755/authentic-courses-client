import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const [userEmail,setUserEmail] = useState('')
    const { login,setLoading,resetPassword,signInWithGoogle,signInWithGithub } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/course'

    const handleSubmit = (event) => {
         event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;
                setError('')
                console.log(user)
                form.reset()
                navigate(from, { replace: true })
                toast.success('Login successfully')
                // if (user.emailVerified) {
                //      navigate(from, {replace: true})
                // } else {
                //     toast.error('Your email is not verified. Please verify your email address')
                // }
               
            })
            .catch(e => {
                console.error(e)
                setError(e.message)
            })
            .finally(() => {
            setLoading(false)
        })
    }
   
    const getUserEmail = (event) => {
        setUserEmail(event.target.value)
    }
    const handleReset = () => {
        resetPassword(userEmail)
    }

    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, {replace: true})
            })
            .catch(e => {
            console.error(e)
        })
    }

    const handleSignInWithGithub = () => {
        signInWithGithub()
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, {replace: true})
            })
            .catch(e => {
            console.error(e)
        })
    }
    return (
          <div>
    <div className="hero min-h-screen  mt-0">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-blue-800">Login now!</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input onBlur={getUserEmail} name='email' type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered" required/>
          <label className="label">
          
          </label>
            </div>
        <p className='text-red-600'>{error }</p>                
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        <span><small className='text-blue-800'>Don't have an account yet?<Link to='/signup'><button className="btn btn-link">Sign Up</button></Link></small></span>
            
        </div>
            </form>
          <div className='flex justify-between m-7'>
                <button onClick={handleSignInWithGoogle} className="btn btn-sm mr-1"><FaGoogle className='mr-2'></FaGoogle> Login Google</button>
                <button onClick={handleSignInWithGithub} className="btn btn-sm"><FaGithub className='mr-2'></FaGithub>Login github</button>

             </div>
        <button onClick={handleReset} className="btn btn-link normal-case "><small>Forgot Password</small></button>
    </div>
  </div>
   </div>
        </div>
    );
};

export default Login;