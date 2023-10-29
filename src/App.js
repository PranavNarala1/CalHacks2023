import logo from './logo.svg';
import './App.css';


import Navbar from './components/navbar'
import Header from './components/navbar'
import HuggingFace from './components/navbar'

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';


function App() {
  return (
    <div className="App">
      <Navbar variant="contained"/>
      <Header variant="contained"/>

      <Box
      sx={{
        width: '100%',
        height: 20,
        backgroundColor: 'none',
      }}
    />
    <Divider />

    <HuggingFace variant="contained"/>

    </div>
  );
}

export default App;
