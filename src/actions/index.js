// since this is a dynamic data, 
// that is why we are importing action to.

import Jsonplaceholder from "../api/Jsonplaceholder";

export const fetchUser = (id) => async dispatch => {
    const response = await Jsonplaceholder.get(`/users/${id}`);
    console.log(response)
    dispatch({type:'FETCH_USER', payload: response})
};

export const fetchPosts = () => async dispatch => {
    const response = await Jsonplaceholder.get('/posts');
    dispatch({type:'FETCH_POST', payload: response.data})
};

