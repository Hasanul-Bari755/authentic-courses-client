import React, { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const Singup = () => {
    const [error, setError] = useState('');

    const {user, createUser, updateUserProfile, verifyEmail } = useContext(AuthContext) 
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/course'
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        
        createUser(email, password)
        .then(result => {
            console.log(result.user)
            setError('')
            form.reset();
            handleUpdateUserProfile(name, photoURL)
          //  handleEmailVerification();
             
            toast.success('Sign up successfully')
        })
            .catch(e => {
                console.error(e)
                setError(e.message)
        })
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
        .catch(e=> console.log(e))
    }

    useEffect(() => {
        if (user) {
            navigate(from, {replace: true})
        }
    },[user,navigate,from])

    // const handleEmailVerification = () => {
    //     verifyEmail()
    //         .then(() => { })
    //     .catch(e=> console.error(e))
    // }
     return (
        <div>
    <div className="hero min-h-screen bg-base-200 mt-0">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign Up now!</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name='name' type="text" placeholder="name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoURL</span>
          </label>
          <input name='photoURL' type="text" placeholder="photoURL" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="email" placeholder="email" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered" required />
        </div>
            <p className='text-red-600'>{error }</p>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        <span><small>Allready have an account yet?<Link to='/login'><button className="btn btn-link">Login</button></Link></small></span>
           
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Singup;