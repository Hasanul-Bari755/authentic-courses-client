import React from 'react';

import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const course = useLoaderData();
    const { _id, name, picture } = course;

    toast('Wellcome!', {
       icon: '👏',
    });
    
    return (
        <div className='lg:w-[35%] lg:mx-auto w-[90%] mx-auto'>
            <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
                <img src={picture} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                <div className="mt-6 mb-2">
                    <span className="block text-xs font-medium tracking-widest uppercase dark:text-emerald-400">Course ID: {_id }</span>
                    <h2 className="text-xl font-semibold tracking-wide">Course name: {name}</h2>
                    <h5 className='text-4xl font-semibold bg-gray-800 text-white text-center rounded-sm p-2'>Price: {course.price }$</h5>
                </div>
                
            </div>
        </div>
    );
};

export default CheckOut;