import React from 'react'
import { useState, useEffect } from 'react';
import { Box } from '@mui/material';

const images = [
    'https://www.searchenginejournal.com/wp-content/uploads/2023/03/chagpt-gpt4-6410b6078d3af-sej-1520x800.webp',
    'https://images.indianexpress.com/2023/03/gpt-4-openai-1.jpg?w=640',
    'https://i.guim.co.uk/img/media/b765ad682ab45937c4579ae9a20a188820fbc6fc/0_192_5834_3499/master/5834.jpg?width=620&quality=45&dpr=2&s=none',
  ];
  
  


const Imageshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);
  return (
    
    
      <Box
  sx={{
    height: '100vh',
    backgroundImage: `url(${images[currentIndex]})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }}
/>


  )
}

export default Imageshow
