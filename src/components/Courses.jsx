import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Course from './Course';

const Courses = () => {
    const courses = useLoaderData();
    return (
       <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:w-[95%] lg:mx-auto mt-2 w-[85%] mx-auto">
           <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 lg:col-span-3 mt-3'>
                {
                    courses.map(course => <Course key={course._id} course={course}></Course>)
                }
           </div>
 
            <div className='lg:col-span-1 w-[80%] mx-auto'>
                
                {
                    courses.map(c => <ul key={c._id} className="menu bg-base-100 w-56 rounded-box text-center"><li className='bg-emerald-200 mb-2 font-bold text-black'><Link to={`/course/${c._id}`}>{c.name}</Link></li></ul>)
                }
           </div>
      </div>
    );
};

export default Courses;