import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData();
    const { _id, name, picture, description } = course;
    console.log(course)
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              {name}
              
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              {description}
            </p>
          </div>
          <Link to={`/checkout/${_id}`}><button className="btn btn-success">purchase this course</button></Link>
        </div>
        <div>
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src={picture}
            alt=""
          />
        </div>
      </div>
    </div>
    );
};

export default CourseDetails;