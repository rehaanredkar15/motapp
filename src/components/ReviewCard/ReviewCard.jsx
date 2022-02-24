import React from 'react'
import './ReviewCard.css'
const ReviewCard = () => {
    return (
        <div className="Card">
            <div className="CustomerImage">
               <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?cs=srgb&dl=pexels-stefan-stefancik-91227.jpg&fm=jpg" alt="" className="UserImage" />
            </div>
            <div className="cutomerratings">
            ⭐  ⭐ ⭐ ⭐ ⭐ ⭐ 
            </div>
            
            <div className="userreview">
              <div className="review">
               Lorem ipsum dolor sit amet consectetur 
               repellat, rem fuga quae blanditiis tempora?
             </div>
             <div className="userName">
              Rehaan
             </div>
            </div>
        </div>
    )
}

export default ReviewCard
