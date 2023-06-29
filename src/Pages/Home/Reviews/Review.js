import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card w-96 bg-primary text-primary-content mb-4">
            <div className="card-body">
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={review.img} alt='' />
                    </div>
                </div>
                <h2 className="card-title">{review.name}</h2>
                <p>{review.review}</p>
                <div className="card-actions justify-start">
                    <button className="font-semibold">location: {review.location}</button>
                </div>
            </div>
        </div>
    );
};

export default Review;