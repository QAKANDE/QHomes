import React from 'react';
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import SecondNavBar from './Components/SecondNavBar'
import CarouselCom from './Components/CarouselCom'
function App() {
  return (
    <div className="App">
    <NavBar/>
    <SecondNavBar/>
    <CarouselCom/>
    <Footer/>
    </div>
  );
}

export default App;
