import axios from 'axios';

export default function conseguirPersonajes(path){
    axios.defaults.baseURL = 'https://rickandmortyapi.com/api/'
    return axios.get(path)
}