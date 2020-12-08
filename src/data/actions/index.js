import {FETCH_DATA} from './types'
import axios from 'axios';

const YOUR_APP_ID = 'af57d8f6';
const YOUR_APP_KEY = 'd2915dfe8ab9af100310f7d44a3ec3d9';
const apiUrl = `https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;

export const fetchRecipes = () => {
    return (dispatch) => {
        return axios.get(apiUrl)
            .then(response => {
                const recipes = response.data;
                dispatch(fetchData(recipes))
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const fetchData =  (data) => {
    return {
      type: FETCH_DATA ,
      payload: {
        value: data
      }
    }
};