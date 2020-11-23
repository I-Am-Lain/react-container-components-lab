// Code MovieReviews Here

// rafce

import React from 'react'

const MovieReviews = (props) => {

    return (
        <div className='review-list'>
            {
            props.reviews.map(review => {
                return (
                    <ul key={review.link.url} className='review'>
                        <li><a href={review.link.url}> {review.headline} </a></li>
                        <li>{review.byline}</li>
                    </ul>
                    )
                })
            }
        </div>
    )
}

export default MovieReviews
