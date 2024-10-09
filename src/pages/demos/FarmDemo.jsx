import React from 'react'
import './demos.scss'
import ReactPlayer from 'react-player'
import farm from "../../assets/vids/farm.mp4"
import buyoy from "../../assets/vids/buyoy.mp4"
import { useParams } from 'react-router-dom'
const FarmDemo = () => {
  const { id } = useParams();
  return (
    <div className='demo_wrap'>
      <h1 style={{ textAlign: 'center', padding: 20 }}>ფერმის დემო ვიდეო</h1>
      <hr style={{ margin: 10 }} />
      {id === 'farm' ?
        <ReactPlayer width={'100%'} height={'100%'} controls={true} url={farm} />
        :
        <ReactPlayer width={'100%'} height={'100%'} controls={true} url={buyoy} />
      }
    </div>
  )
}

export default FarmDemo