import constants from '../constants.js'

export const setLogin = (input) => (dispatch) => { 
    console.log(constants.POST_USER)
    dispatch({type: constants.POST_USER })

}