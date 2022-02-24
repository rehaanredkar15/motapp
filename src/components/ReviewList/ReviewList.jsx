import React from 'react';
import './ReviewList.css';
import ReviewCard from '../ReviewCard/ReviewCard.jsx';

const ReviewList = () => {
    return (
        <div className="ReviewWrap">
             <div className="Reviewdesc">
            <h2>Weekly Reviews By Our Clients</h2>
             <div className="description">
            <p>Here are the reviews from our clients who have been using our product</p>
            <p>and shared their imense joy and satisfaction by using MOT</p>
             </div>
             </div>
            <div className="CardWrap">
            <ReviewCard/>
            <ReviewCard/>
            <ReviewCard/>
            <ReviewCard/>
            <ReviewCard/>
            </div>
        </div>
    )
}

export default ReviewList
