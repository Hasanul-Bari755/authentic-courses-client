import React from 'react';

const Faq = () => {
    return (
        <div className='w-[95%] mx-auto mb-36'>
           
            <div tabindex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
                Which type of support of your course?
            </div>
            <div className="collapse-content"> 
                <p className='text-sky-800 font-semibold'>There are three type of support of our courses.At first we will provide pre record video.Then you do not understand.Also provide facebook group suppor.What up group support. Lastly we will provide live screen share support.</p>
            </div>
            </div>
            <div tabindex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
                Time duration of your course?
            </div>
            <div className="collapse-content"> 
                <p className='text-sky-800 font-semibold'>Minimum 15 weeks to maximum 18 weeks.</p>
            </div>
            </div>
            <div tabindex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
                How many time give on your courses per day?
            </div>
            <div className="collapse-content"> 
                <p className='text-sky-800 font-semibold'>At least 6 to 8 hours per day.</p>
            </div>
            </div>
            <div tabindex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
                Success rate of your course?
            </div>
            <div className="collapse-content"> 
                <p className='text-sky-800 font-semibold'>Above 50% success of our course.</p>
            </div>
            </div>
            <div tabindex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
                Total support member of your course?
            </div>
            <div className="collapse-content"> 
                <p className='text-sky-800 font-semibold'>There are 3 support member per 100 students.</p>
            </div>
            </div>
        </div>
    );
};

export default Faq;