import React,{ useState } from 'react'
// import {Search,Person,Chat,Notifications } from "@material-ui/icons";
import BlogsCard from '../BlogsCard/BlogsCard.jsx';
import './Blogs.css';



const Blogs = () => {


    return (
        <div className="BlogsList">
           <h2 className="Blogstitle">Blogs</h2>  
           <p className="Blogstitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
           incididunt ut labore et dolore magna aliqua. Ut incididunt ut labore et dolore magna aliqua.  enim ad minim veniam</p>  
          <div className="Blogswrapper">
           <BlogsCard/>
           <BlogsCard/>
           <BlogsCard/>
          </div>
        </div>
    )
}

export default Blogs
