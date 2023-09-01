import React from "react";
import Experience from "./Experience";
import ncslogo from "../assets/ncslogo.png"
import nuslogo from "../assets/nuslogo.png"
import autodesklogo from "../assets/autodesklogo.svg"

function Experiences() {
    return (
        <div className="bg-gray-50 flex flex-col gap-5" id="experiences">
            <p className="text-center font-medium text-3xl">
                Experiences
            </p>

            <div className="flex flex-wrap gap-5 w-full justify-center">
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4"> */}

                <Experience
                    role="Software Engineer Intern"
                    logo={autodesklogo}
                    companyName="Autodesk"
                    url="https://www.autodesk.com.sg/"
                    description="Backend Developer in PSETS - Files and Derivatives"
                    techStack="Stack: Java, Spring Boot, Mockito, Postman API, AWS"
                    startDate="May 2023"
                    endDate="Present"
                />
                
                <Experience
                    role="Teaching Assistant"
                    logo={nuslogo}
                    companyName="NUS"
                    url="https://www.comp.nus.edu.sg/"
                    description="Teaching Assistant for CS2040, Data Structures and Algorithms"
                    techStack="Stack: Java"
                    startDate="June 2023"
                    endDate="Aug 2023"
                />

                <Experience
                    role="Software Engineer Intern"
                    logo={ncslogo}
                    companyName="NCS Group"
                    url="https://www.ncs.co/en-sg/"
                    description="FullStack Developer for MOH Hospital Subvention System Project"
                    techStack="Stack: Angular, Java, Spring Boot, Postman API"
                    startDate="Dec 2022"
                    endDate="May 2023"
                />
                
            </div>
        </div>
    );
}

export default Experiences;