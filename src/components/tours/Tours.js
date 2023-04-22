import data from "../../data/db.json"
function Tours() {
  return (
    data.map((e) => 
    <div>
      <img src={e.image}></img>
      <p>{e.name}</p>
      <hr></hr>
    </div>
    )
  )
}

export default Tours