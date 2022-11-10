import React from 'react'

import Main from "./Section/Main"
import Services from "./Section/Services"
import Trusted from "./Section/Trusted"


const Home = () => {
  return (
    <div className="flex flex-col">
    <Main />
    <Services />
    <Trusted />
    </div>
    
  );
}

export default Home