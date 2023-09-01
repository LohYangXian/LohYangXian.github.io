import React from "react";
import selfPortrait from '../assets/SelfPortrait.JPG'

function Intro() {
    return (
        <div className="bg-black group relative block max-w-sm min-h-full mx-auto h-auto" id="aboutme">
            <img
                alt="Developer"
                src= { selfPortrait }
                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                />

            <div className="relative p-4 sm:p-6 lg:p-8">
                <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                Software Engineer
                </p>

                <p className="text-xl font-bold text-white sm:text-2xl">Yang Xian</p>

                <div className="mt-32 sm:mt-48 lg:mt-64">
                <div
                    className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                >
                    <p className="text-sm text-white">
                    Hey there! I am Yang Xian, an aspiring Full Stack Developer :) I aspire to 
                    become an architect, shaping intricate systems that stand the test of time. I thrive on the challenges of working with 
                    large-scale systems, constantly seeking opportunities to enhance performance and scalability.
                    </p>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Intro;