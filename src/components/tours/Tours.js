import data from "../../data/db.json"
import Tour from "./tour/Tour"
import {Link} from 'react-router-dom'
import './Tours.css'
function Tours() {
  return (
    <div className="tours-container">
      {
        data.map((e) => 
        <Link to={`/city/${e.id}`}>
        <Tour {...e} key={e.price + 1}/>
        </Link>
        )
        }
    </div>
  )
}

export default Tours