import React from "react";
import { Button, Container, Paper, styled, Typography } from "@mui/material";
//import Start1 from '../Images/Start1.jpg';
import Sweet from '../Images/Sweet.jpg';



const Card = styled(Paper) (({ theme }) =>  ({
  backgroundImage: `url(${Sweet})`,
  backgroundSize: '100%',
  backgroundRepeat: 'no-repeat',
  height: '100vh',
  display: 'flex',
  alignItems: 'top',
  justifyContent: 'center',
  color:'#C06C84'
  
}));


const HomePage = () => {
  return (
    
      <Card>
    <Container maxWidth="md">
      
      <Typography variant="h1" align="center" gutterBottom>
        Welcome to New Star!
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        We're a sweet and bites shop that has been serving our community for over 20 years. Our mission is to provide our customers with high-quality, delicious food and sweets that they can enjoy with their loved ones.
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Check out our menu and place your order online today!
      </Typography>
      <Button variant="contained" color="primary" size="large">
        Order Now
      </Button>
      
    </Container>
    
    </Card>
    
    
    
  );
};

export default HomePage;
