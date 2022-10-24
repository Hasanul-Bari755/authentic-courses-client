import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from './Course';

const Courses = () => {
    const courses = useLoaderData();
    return (
       <div className="grid grid-cols-4 gap-4 w-[95%] mx-auto">
           <div className='grid grid-cols-3 gap-4 col-span-3'>
                {
                    courses.map(course => <Course key={course._id} course={course}></Course>)
                }
           </div>
 
            <div className='col-span-1'>
                
           </div>
      </div>
    );
};

export default Courses;