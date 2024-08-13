import React from 'react'
import './demos.scss'
import ReactPlayer from 'react-player'
const FarmDemo = () => {
  return (
    <div className='demo_wrap'>
        <h1 style={{textAlign:'center', padding:20}}>ფერმის დემო ვიდეო</h1>
        <hr style={{margin:10}} />
        <ReactPlayer width={'100%'} height={'100%'} controls={true} url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />
    </div>
  )
}

export default FarmDemo