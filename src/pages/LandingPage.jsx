import React from 'react';
import Header from '../components/Header';
import AboutMe from '../components/AboutMe';
import Footer from '../components/Footer';
import Intro from '../components/Intro';
import Experiences from '../components/Experiences';
import Projects from '../components/Projects';

function LandingPage() {

    return (
        <div className='flex flex-col justify-between gap-28 bg-gray-50'>
            <Header></Header>
            <Intro></Intro>
            <AboutMe></AboutMe>
            <Experiences></Experiences>
            <Projects></Projects>
            <Footer></Footer>
        </div>
    );
}


export default LandingPage;