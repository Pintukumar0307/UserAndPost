import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
        <Link to={'/user'}><button className='btn'>User</button></Link> 
        <Link to={'/post'}><button className='btn'>Post</button></Link> 

    </div>
  )
}

export default Home