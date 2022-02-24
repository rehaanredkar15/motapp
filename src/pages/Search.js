import React from 'react'
import Navbar from '../components/Navbar/Navbar.js';
import Footer from '../components/Footer/Footer.jsx';
import SearchComponent from '../components/SearchComponent/SearchComponent.js';

const Search = () => {
    return (
        <>
             <Navbar/>
             <SearchComponent/>
             <Footer/>
        </>
    )
}

export default Search