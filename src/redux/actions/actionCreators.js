import { FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS, FETCH_DATA_REQUEST } from "./actionTypes";

export const fetchDataRequest = () => {
    return {
        type: FETCH_DATA_REQUEST
    };
}

export const fetchDataSuccess = (data) => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: data
    }
}

export const fetchDataFailure = (error) => {
    return {
        type: FETCH_DATA_FAILURE,
        payload: error
    }
}

export const fetchData = () => {
    return (dispatch) => {
        dispatch(fetchDataRequest());
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => dispatch(fetchDataSuccess(data)))
            .catch(error => dispatch(fetchDataFailure(error.message)));
    }
}