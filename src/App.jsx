import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Box} from '@mui/material';
// import  Navbar from './Components/Navbar';
// import  Feed from './Components/Feed';
// import  VideoDetails from './Components/VideoDetails';
// import  ChannelDetails from './Components/ChannelDetails';
// import  SearchFeed from './Components/SearchFeed';
import {Navbar,Feed,VideoDetails,ChannelDetails,SearchFeed} from './Components/index'
export default function App() {
  return (
  <BrowserRouter>
    <Box sx={{backgroundColor:'#000'}}> 
      <Navbar> </Navbar>
      <Routes>
        <Route path='/' exact element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetails/>}/>
        <Route path="/channel/:id" element={<ChannelDetails/>}/>
        <Route path="/search/:searchTerm" element={<SearchFeed/>}/>
      </Routes>
       
    </Box>
  
  </BrowserRouter>
  )
}
