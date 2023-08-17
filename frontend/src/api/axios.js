import axios from 'axios';

let baseURL = '';

if (window.location.hostname === 'localhost') {
  baseURL = 'http://localhost:2000';
} else {
  baseURL = 'https://elite-house.onrender.com/';
}

export default axios.create({
  baseURL,
});
