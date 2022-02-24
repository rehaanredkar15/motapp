import React from 'react'
import './SearchComponent.css';
import ServiceCard from '../ServiceCard/ServiceCard.jsx';

const SearchComponent = () => {
    return (
        <div className="SearchWrapper">
            <div className="SearchTitle">
             <h1>Search Your Required MoT centers</h1>
             <div  className="ScrollDown">
             <p>Scroll Down</p>
             </div>
            </div>
            <div className="cardWrapper">
               <div className="cardWrap"> 
                 <ServiceCard/>
               </div>
               <div className="cardWrap"> 
                 <ServiceCard/>
               </div>
               <div className="cardWrap"> 
                 <ServiceCard/>
               </div>
               <div className="cardWrap"> 
                 <ServiceCard/>
               </div>
               <div className="cardWrap"> 
                 <ServiceCard/>
               </div>
               <div className="cardWrap"> 
                 <ServiceCard/>
               </div>
               <div className="cardWrap"> 
                 <ServiceCard/>
               </div>
               <div className="cardWrap"> 
                 <ServiceCard/>
               </div>
               <div className="cardWrap"> 
                 <ServiceCard/>
               </div>
            </div>
        </div>
    )
}

export default SearchComponent
