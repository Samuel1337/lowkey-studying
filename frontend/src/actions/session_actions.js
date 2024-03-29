import { logIn, logOut, signUp } from "../util/session_api_util"

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'
export const CLEAR_ERRORS = 'CLEAR_ERRORS'

export const login = user => dispatch => logIn(user)
    .then(user=> dispatch(receiveCurrentUser(user)))
    .fail(errors => dispatch(receiveErrors(errors)));

export const logout = () => dispatch => logOut()
    .then(()=> dispatch(logoutCurrentUser()));

export const signup = user => dispatch => signUp(user)
    .then(user => dispatch(receiveCurrentUser(user)))
    .fail(errors => dispatch(receiveErrors(errors)));

const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
})

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
})

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})