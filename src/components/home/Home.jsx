import React from 'react'
import Landing from './Landing'
import HomeCards from './HomeCards'
import Statistics from './Statistics'
import Organizations from './Organizations'
import Testimony from './Testimony'
import Ourmentors from './Ourmentors'

function Home({handleClick}) {
  return (
    <div> 
      <Landing handleClick={handleClick} />
      <HomeCards />
      <Ourmentors/>
      <Statistics />
      <Testimony/>
      <Organizations/>
    </div>
  )
}

export default Home;