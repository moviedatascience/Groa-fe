export const FETCHING_USER_LOGIN = "FETCHING_USER_LOGIN"
export const FETCHING_USER_LOGIN_SUCCESS = "FETCHING_USER_LOGIN_SUCCESS"
export const FETCHING_USER_LOGIN_FAIL = "FETCHING_USER_LOGIN_FAIL"
export const USER_LOGOUT = "USER_LOGOUT"

export const loginAction = {
    login,
    logout
};

// LOGIN
function login(username, password) {
    return dispatch => {
        dispatch({ type: FETCHING_USER_LOGIN });
                (username, password)
                    .then(res => {
                        console.log(res)
                            dispatch({ type: FETCHING_USER_LOGIN_SUCCESS, payload: res.data });
                            
                        })
                    .catch(err => {
                            console.log(err)
                            dispatch({ type: FETCHING_USER_LOGIN_FAIL });
                        },);
            };
}

//LOGOUT
function logout() {
    return dispatch => {
        dispatch({ type: USER_LOGOUT });
    }
}
