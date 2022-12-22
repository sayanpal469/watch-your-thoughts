import React from 'react';
import About from '../components/About/About';
import Banner from '../components/Banner/Banner';
import Blogs from '../components/Blogs/Blogs';
import Contact from '../components/Contact/Contact';
import Expert from '../components/Expert/Expert';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Objective from '../components/Objective/Objective';
import Services from '../components/Services/Services';
import Testimonials from '../components/Testimonials/Testimonials';

const PageLayout = () => {
    return (
        <>
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Objective></Objective>
            <Expert></Expert>
            <Services></Services>
            <Blogs></Blogs>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footer/>
        </>
    );
};

export default PageLayout;