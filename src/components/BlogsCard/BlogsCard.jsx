import React from 'react'
import './BlogsCard.css';

const BlogsCard = () => {
    return (
        <div className="BlogsCard">
          <div className="BlogImage">
                <img src="https://image.freepik.com/free-vector/american-blue-vintage-car_459-15.jpg?w=740" alt="" className="BlogImage" />
            </div>
            <div className="BlogBottom">
            <div className="BlogDetails">
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
               quidem unde atque incidunt?
            </div>
            <div  className="ReadMore">
              <span>Read More</span>
            </div>
            </div>
        </div>
    )
}

export default BlogsCard
