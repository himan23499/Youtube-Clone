import axios from 'axios';

const BaseUrl = 'https://youtube-v31.p.rapidapi.com';
// const mySecret = process.env['REACT_APP_RAPID_API_KEY'];
const options = {
 
  
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': '334c4f98bemsh9623abc42f70181p1f0e33jsn38b1ea7094ae',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromApi = async (url) => {
  
    const {data} = await axios.get(`${BaseUrl}/${url}`,options);
    return data;
 

};
