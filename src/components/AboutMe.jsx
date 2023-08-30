import React from "react";

function AboutMe() {
    return (
        <section>
            <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
                <div className="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
                    <div className="max-w-md mx-auto text-center lg:text-left">
                    <header>
                        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Hi.</h2>

                        <p className="mt-4 text-gray-500">
                        I am Yangxian, a Penultimate Business Analytics student in NUS
                        </p>
                    </header>

                    <a
                        href="loh-yang-xian-resume.pdf"
                        download="LohYangXian_Resume.pdf"
                        className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-900 border border-gray-900 rounded hover:shadow focus:outline-none focus:ring"
                    >
                        Download Resume
                    </a>
                    </div>
                </div>

                <div className="lg:col-span-2 lg:py-8">
                    <ul className="grid grid-cols-2 gap-4">
                    <li>
                        <a href="#" className="block group">
                        <img
                            src="https://images.unsplash.com/photo-1573495627361-d9b87960b12d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                            alt=""
                            className="object-cover w-full rounded aspect-square"
                        />

                        <div className="mt-3">
                            <h3
                            className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                            >
                            Career Goals
                            </h3>

                            <p className="mt-1 text-sm text-gray-700">
                                As I navigate my journey, my ultimate goal is to evolve into a Software Architect. I envision myself shaping impactful systems and untangling intricate challenges encountered by both corporations and our society at large.
                            </p>
                        </div>
                        </a>
                    </li>

                    <li>
                        <a href="#" className="block group">
                        <img
                            src="https://images.unsplash.com/photo-1516282417715-f1193d45c97a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                            alt=""
                            className="object-cover w-full rounded aspect-square"
                        />

                        <div className="mt-3">
                            <h3
                            className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                            >
                            Let's Connect!
                            </h3>

                            <p className="mt-1 text-sm text-gray-700">                
                                If you're on the lookout for aspiring talent, internships, or simply wish to forge connections, don't hesitate to reach out. Let's explore the possibilities together!
                            </p>
                        </div>
                        </a>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;