import {LOAD_COMMENTS, LOAD_COMMENTS_SUCCESS, LOAD_COMMENTS_ERROR} from "./type";
import axios from "axios";



/**
 * Creation of action creator
 * @returns {{type: string}}
 */
export const loadApiComments = () => {
    return {
        type: LOAD_COMMENTS,
    }
}

/**
 * Creation of action creator
 * @returns {{type: string}}
 */
export const loadCommentsSuccess = (comments) => {
    return {
        type: LOAD_COMMENTS_SUCCESS,
        payload: comments
    }
}

/**
 * Creation of action creator
 * @returns {{type: string}}
 */
export const loadCommentsError = (error) => {
    return {
        type: LOAD_COMMENTS_ERROR,
        payload: error
    }
}

export const apiCall = () => {
    return (dispatch) => {

        dispatch(loadApiComments());

        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
                dispatch(loadCommentsSuccess(response.data));
            })
            .catch((error) => {
                dispatch(loadCommentsError(error.message))
            });
    }
}

