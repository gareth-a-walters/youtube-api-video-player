import axios from 'axios';
const KEY = 'AIzaSyCrU4jSlZtnT2KBF4XT2kuEGr1uagkj5Ng';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
