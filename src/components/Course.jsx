import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    const {_id,name,picture } = course;
    return (
        <div>
        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
	  <img src={picture} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	  <div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{name }</h2>
			<p className="dark:text-gray-100">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
		</div>
		<Link to={`/course/${_id}`}><button class="btn btn-sm btn-wide">Details</button></Link>
	</div>
  </div>
        </div>
    );
};

export default Course;