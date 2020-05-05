import React, { useEffect } from 'react';
// import Onboarding from '../lib';
import reactOnboardingPro from "react-onboarding-pro";
import "react-onboarding-pro/build/index.css";
//for customcomponent
import { connect } from "react-redux";
import {
    getMoviesAction,
    setFilter,
    recommendationAction,
} from "../../store/actions/index.js";


const CustomComponent = ({
    isFetching,
    movies,
    userid,
    recommendationAction,
    getMoviesAction,
    searchTerm,
    setFilter,
    ratings,
}) => {

    //   setOnSubmit(() => {
    //     console.log('Custom component action completed');
    //   });
    useEffect(() => {
        // setFilter("");
        // Returns the movies
        getMoviesAction(userid);
        // returns a list of recommendations to start the recommendations page
        recommendationAction(userid);
    }, [getMoviesAction, userid, ratings, setFilter, recommendationAction]);
    // How many movies render
    const cardAmount = 25;
    return (
        <div>
            <p>I'm a custom CustomComponent with id </p>
            <button>Toggle button</button>
        </div>
    )
}

const Onboarding = () => {
    const showOnboarding = () => {
        const config = {
            steps: [
                {
                    title: 'Welcome to the platform',
                    description: 'Navigate around the UI to start using it',
                },
                {
                    title: 'Add your profile details',
                    description: 'We use this information in order to tailor your experience',
                },
                {
                    title: 'Who are you?',
                    description: 'Help the community identify you',
                    type: 'form',
                    fields: [
                        {
                            label: 'First Name',
                            name: 'first_name',
                            type: 'text',
                            placeholder: 'John',
                            validation: '[a-zA-Z]',
                            value: 'John'
                        },
                        {
                            label: 'Last Name',
                            name: 'last_name',
                            type: 'text',
                            placeholder: 'Doe',
                            validation: '',
                            value: 'Doe'
                        },
                    ],
                    
                },
                {
                    type: 'component',
                    component: CustomComponent,
                }
            ],
            overlayClose: false
        };
        reactOnboardingPro(config);
    }
    return (
        <div className="container">
            <button onClick={showOnboarding}>Show Onboarding Flow</button>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        userid: state.login.userid,
        isFetching: state.movie.isFetching,
        movies: state.movie.movies,
        moviesError: state.movie.error,
        searchTerm: state.filter.searchTerm,
        watchlist: state.watchlist.movies,
        ratings: state.rating.movies,
    };
};
export default connect(mapStateToProps, {
    getMoviesAction,
    recommendationAction,
    setFilter,
})(Onboarding);
  //ratings on users account
  //get ratings from ratings enpoint to send to database and after questionaire submitted send to page
  //sort movies
  //pagination? 