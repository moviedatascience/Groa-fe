import React from "react";
import { render } from "@testing-library/react";
import { getAllByTestId, getByTestId, getAllByText } from "../../utils/test-utils.js";
import { BrowserRouter as Router } from "react-router-dom";
//  redux testing
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
const mockStore = configureStore([thunk]);

import MovieCard from "./MovieCard.js";


let store = mockStore()

it("renders stars with array has length", () => {

    const fakemovies = 
        {name:'a', Year: '1000'}



    const { container } = render( 
            <Router>
                <MovieCard name={fakemovies.name}/>
            </Router >
    );

let box = getAllByTestId(container, "box");
expect(box.length).toBe(1)

});