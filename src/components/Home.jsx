import React from 'react';

const Home = () => {
    return (
        <div>
        <section className="dark:bg-gray-800 dark:text-gray-100">
	     <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12 flex justify-center  justify-items-center">
		
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Skill Development To Our main Auth..</h3>
				<span className="text-xs dark:text-gray-400">Next Batch February 19, 2023</span>
				<p>Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.</p>
			</div>
			<img src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
	    </div>
			</section>
			
        </div>
    );
};

export default Home;