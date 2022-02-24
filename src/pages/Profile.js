import React from 'react'
import Navbar from '../components/Navbar/Navbar.js';
import Services from '../components/Services/Services.js';
import ReviewList from '../components/ReviewList/ReviewList.jsx';
import Blogs from '../components/Blogs/Blogs.js';
import Footer from '../components/Footer/Footer.jsx';
import ProfileComponent from '../components/ProfileComponent/ProfileComponent.js';

const Profile = () => {
    return (
        <>
             <Navbar/>
             <ProfileComponent/>
             <Footer/>
        </>
    )
}

export default Profile