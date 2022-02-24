import React,{useState} from 'react'
// import {Search,Person,Chat,Notifications } from "@material-ui/icons";
import ServiceCard from '../ServiceCard/ServiceCard.jsx';
import './Services.css';



const Services = () => {
    const [SearchTerm, setSearchTerm] = useState('')


    return (
        <div className="ServicesList">
           <h2 className="servicestitle">How we can help you to grow</h2>  
          <div className="wrapperCard">
           <ServiceCard/>
           <ServiceCard/>
           <ServiceCard/>
          </div>
        </div>
    )
}

export default Services
