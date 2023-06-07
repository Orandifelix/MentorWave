import React from 'react'
import Landing from './Landing'
import HomeCards from './HomeCards'
import Statistics from './Statistics'
import Organizations from './Organizations'
function Home({handleClick}) {
  return (
    <div> 
      <Landing handleClick={handleClick} />
      <HomeCards />
      <Statistics />
      <Organizations/>
    </div>
  )
}

export default Home;