import React from 'react';
import people1 from '../../../assets/reviewers/people1.jpg'
import people2 from '../../../assets/reviewers/people2.jpg'
import people3 from '../../../assets/reviewers/people3.jpg'
import Review from './Review';

const Reviews = () => {
    const reviews = [
        {
            id: 1,
            img: people1,
            name: 'Emma L',
            review: "Great prices, excellent quality, and top-notch service. A satisfied customer!",
            location: 'Washington'
        },
        {
            id: 2,
            img: people2,
            name: 'Sarah M',
            review: "Smooth and easy process from listing to sale. Highly recommended!",
            location: 'Los Angles'
        },
        {
            id: 3,
            img: people3,
            name: 'John D',
            review: "Impressed with the variety and condition of phones. A reliable platform for refurbished devices.",
            location: 'Newyork'
        }
    ]
    return (
        <div>
            <h2 className='text-4xl font-bold text-center mt-10 text-primary'>Reviews</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 place-items-center my-10'>
            
            {
                reviews.map(review => <Review review={review} key={review.id}></Review>)
            }
            </div>
        </div>
        
    );
};

export default Reviews;