import React from 'react';
import Reviews from './Pages/Reviewsandratings';

import MenuPage from './Components/Manu';
import Landing from './Pages/Landing';
import OrderPage from './Pages/Orderplacement';
import PaymentForm from './Pages/Paymentandcheckout';



function App() {
  return (
    <div className="App">
    
      <Landing/>
      <OrderPage/>
      <MenuPage/>
      <PaymentForm/>
      <Reviews/>
    </div>
  );
}

export default App;
