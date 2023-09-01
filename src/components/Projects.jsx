import React from "react";
import Project from "./Project";
import personalPortfolioPage from '../assets/personalPortfolioPage.PNG'
import tftTrackerV2 from '../assets/tftTrackerV2.PNG'
import karaokeBookingSystem from '../assets/karaokeBookingSystem.PNG'
import employeeManager from '../assets/employeeManager.PNG'
import instantMessagingSystem from '../assets/instantMessagingSystem.PNG'
import tftTrackerV1 from '../assets/tftTrackerV1.1.jpg'

function Projects() {
    return (
        <div className="bg-gray-50 flex flex-col gap-5" id="projects">
            <p className="text-center font-medium text-3xl">
                Projects
            </p>

            <div className="flex flex-wrap gap-5 w-full justify-center">


                <Project
                    url="#"
                    image={personalPortfolioPage}
                    projectName="Personal Portfolio Webpage"
                    description="To list my experiences and projects"
                    techStack="React, TailwindCSS, HyperUI"
                />

                <Project
                    url="https://github.com/LohYangXian/tftApp-v1"
                    image={tftTrackerV1}
                    projectName="Teamfight Tactics Stats Tracker v1"
                    description="Personal App to list my most played statistics"
                    techStack="Python, Pyqt5, Riot API"
                />

                <Project
                    url="https://github.com/BT3103AppDev1/l2-final-project-group-13-1"
                    image={karaokeBookingSystem}
                    projectName="Karaoke Booking System"
                    description="Online System for creating and deleting bookings"
                    techStack="Vue.js, Firebase"
                />
            
                <Project
                    url="https://github.com/LohYangXian/tftAppV2"
                    image={tftTrackerV2}
                    projectName="Teamfight Tactics Stats Tracker v2 (In-progress)"
                    description="Personal App to list my most played statistics"
                    techStack="React, Flask, Riot API"
                />

                <Project
                    url="https://github.com/LohYangXian/Instant-Messaging-System-GO-"
                    image={instantMessagingSystem}
                    projectName="Instant Messaging System"
                    description="Deliver and receive messages"
                    techStack="Go, Redis, Docker"
                />

                <Project
                    url="https://github.com/LohYangXian/EmployeeManagementSystem"
                    image={employeeManager}
                    projectName="Employee Management System"
                    description="Retrieve, add, update and delete employee data"
                    techStack="Java, Spring Boot, Angular, Microsoft SQL"
                />

            </div>
        </div>
    );
}

export default Projects