import React from 'react'
import './ProfileComponent.css';
import {  useParams } from "react-router-dom";


const ProfileComponent = () => {
  
   const username = useParams().companyName;
  
  return (
    <div className="wrapper">
     <div className="cityImage">
     
     </div>
      <div className="companyDetails">
        <div className="companyDescription">
         <h1> {username}</h1>

         <h3>Overview</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores adipisci quo modi odit, omnis fugit ratione corrupti exercitationem voluptate, quibusdam sequi quam recusandae illum, aperiam debitis. Dolorum eligendi expedita quod.
            Debitis, ducimus minima illum labore expedita, consectetur commodi iste tenetur voluptatibus nam laudantium tempore eum, quas eveniet aliquam harum neque possimus sapiente fugit tempora natus sint. Doloremque harum iste ipsam!
            Quos necessitatibus vero, architecto officia amet eaque iusto, ducimus consectetur debitis ex assumenda, corrupti sunt modi provident laboriosam. Rem obcaecati provident magni ex ratione natus iure eveniet, ullam nobis explicabo.
          </p>
        </div>
        <div className="companyContact">
        <button className="ContactButton">Claim Business</button>
        <ul className="ContactList">
          <li className="ContactListItem" >Address</li>
          <li className="ContactListItem">9632587412</li>
          <li className="ContactListItem">www.wesbite.com</li>
          <li className="ContactListItem">Year started 2000</li>
        </ul>
        </div>
      </div>
    </div>
  )
}

export default ProfileComponent