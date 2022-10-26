import React from 'react';

const Blog = () => {
    return (
        <div className='lg:w-[95%] lg:mx-auto lg:mt-3 grid lg:grid-cols-2 lg:gap-3  grid-cols-1'>
           <div className="max-w-md p-6 overflow-hidden rounded-lg shadow dark:bg-gray-900 dark:text-gray-100">
	        <article>
		  <h2 className="text-xl font-bold"> What is cors?</h2>
		   <p className="mt-4 dark:text-gray-400">Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
		
	     </article>
        </div>
           <div className="max-w-md p-6 overflow-hidden rounded-lg shadow dark:bg-gray-900 dark:text-gray-100">
	        <article>
		  <h2 className="text-xl font-bold">Why are you using firebase?</h2>
                    <p className="mt-4 dark:text-gray-400">Firebase provides tools to grow your app and business, for startups & global enterprises. Get your app up and running quickly & securely with fully managed backend infrastructure. Build Fast For Any Device. Backed by Google. Accelerate Development. Monitor App Performance.</p>
                    <h2 className='text-xl font-bold'> What other options do you have to implement authentication?</h2>
                    <p className="mt-4 dark:text-gray-400">Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
		
	     </article>
        </div>
           <div className="max-w-md p-6 overflow-hidden rounded-lg shadow dark:bg-gray-900 dark:text-gray-100">
	        <article>
		  <h2 className="text-xl font-bold">How does the private route work?</h2>
		   <p className="mt-4 dark:text-gray-400">The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
		
	     </article>
        </div>
           <div className="max-w-md p-6 overflow-hidden rounded-lg shadow dark:bg-gray-900 dark:text-gray-100">
	        <article>
		  <h2 className="text-xl font-bold">What is Node? How does Node work?</h2>
                    <p className="mt-4 dark:text-gray-400">Node.js, a JavaScript runtime for building server-side or desktop applications.</p>
                    <p className='mt-4 dark:text-gray-400'>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive</p>
		
	     </article>
        </div>
    </div>
    );
};

export default Blog;