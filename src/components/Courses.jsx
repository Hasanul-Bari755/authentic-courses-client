import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Course from './Course';

const Courses = () => {
    const courses = useLoaderData();
    return (
       <div className="grid grid-cols-4 gap-6 w-[95%] mx-auto mt-2">
           <div className='grid grid-cols-3 gap-4 col-span-3'>
                {
                    courses.map(course => <Course key={course._id} course={course}></Course>)
                }
           </div>
 
            <div className='col-span-1'>
                
                {
                    courses.map(c => <ul key={c._id} className="menu bg-base-100 w-56 rounded-box text-center"><li className='bg-emerald-200 mb-2 font-bold'><Link to={`/course/${c._id}`}>{c.name}</Link></li></ul>)
                }
           </div>
      </div>
    );
};

export default Courses;