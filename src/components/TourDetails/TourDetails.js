import React from 'react'
import Data from '../../data/db.json'
import { useParams } from 'react-router-dom'
import './TourDetails.css'

export default function TourDetails() {
  const id = useParams().id
  let minHeight = '55px'
  let expandHeight = '100%'
  const [height, setHeight] = React.useState(minHeight)
  const [state, setState] = React.useState(false)
  let styles = {
    height: height,
  }
  function showHandler() {
    if(state == false) {
      setHeight((prevheight) => (expandHeight))
      setState((prevState) => (!prevState))
    } else {
      setHeight((prevheight) => (minHeight))
      setState((prevState) => (!prevState))
    }
  }
  for(let i = 0; i < Data.length; i++) {
    if(Data[i].id == id) {
      return (
        <div className='tour-details-card'>
          <img src={Data[i].image} width={"100px"}/>
          <h3>{Data[i].name}</h3>
          <div  className='details-info' style={styles}>
            <p>{Data[i].info}</p>
            <button className='show-button' onClick={showHandler}>{state ? 'Show less' : 'Show more'}</button>
          </div>
          <p>Ticket Price: <b>{Data[i].price}$</b></p>
        </div>
      )
    }
  }
}