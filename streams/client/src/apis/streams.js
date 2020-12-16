import axios from 'axios';

export default axios.create({
  // server location 
  baseURL: 'http://localhost:3001'
});