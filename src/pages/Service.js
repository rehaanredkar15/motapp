
import React from 'react'
import Navbar from '../components/Navbar/Navbar.js';
import Services from '../components/Services/Services.js';
import ReviewList from '../components/ReviewList/ReviewList.jsx';
import Blogs from '../components/Blogs/Blogs.js';
import Footer from '../components/Footer/Footer.jsx';
import ServiceComponent from '../components/ServiceComponent/ServiceComponent.js';



const Service = () => {
    return (
        <>
             <Navbar/>
             <ServiceComponent/>
             <Footer/>
        </>
    )
}

export default Service


