import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {

    state = {
        reviews: [],
        searchTerm: ''
    }

    handleChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        fetch(URL + `&query=${this.state.searchTerm}`)
        .then(resp => resp.json())
        .then(json => this.setState({reviews: json.results}))
    }

    render() {
        return (
            <div style={{border: '2px black solid'}} className='searchable-movie-reviews'>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name='searchTerm' value={this.state.searchTerm} onChange={this.handleChange}/><br/>
                    <input type='submit' value='Search'/>
                </form>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}

