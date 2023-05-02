import './Tour.css'
import {Link} from 'react-router-dom'
export default function Tour(props) {
  return (
    <div className='tour-card'>
        <img src={props.image} className='tour-image'/>
        <div className="tour-info">
          <p>{props.name}</p>
        </div>
    </div>
  )
}