import React from 'react'
import Landing from './Landing'
import HomeCards from './HomeCards'
import Statistics from './Statistics'
import Organizations from './Organizations'
import Testimony from './Testimony'
function Home({handleClick}) {
  return (
    <div> 
      <Landing handleClick={handleClick} />
      <HomeCards />
      <Statistics />
      <Testimony/>
      <Organizations/>
    </div>
  )
}

export default Home;