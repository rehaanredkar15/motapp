import React from 'react'
import Navbar from '../components/Navbar/Navbar.js';
import Services from '../components/Services/Services.js';
import ReviewList from '../components/ReviewList/ReviewList.jsx';
import Blogs from '../components/Blogs/Blogs.js';
import Footer from '../components/Footer/Footer.jsx';
import LandingScreen from '../components/LandingScreen/LandingScreen.js';

const Home = () => {
    return (
        <>
             <Navbar/>
             <LandingScreen/>
             <Services/>
             <Blogs/>
             <ReviewList/>
             <Footer/>
        </>
    )
}

export default Home
