import "./TopBar.css"
import pokeball from "../images/pokeball.png"
import pokeballblack from "../images/pokeball-black.png"

function TopBar() {
  return (
    <>
      <div className="title">
        <div className="title__left">
          <p style={{marginLeft:"50px", marginRight:"30px"}}>Pokédex</p>
          <div className="caught-seen">
            <div className="caught">
              <img src={pokeball} alt="pokeball" style={{width:"30px", marginRight:"10px"}}/>
              <p>633</p>
            </div>
            <div className="seen">
              <img src={pokeballblack} alt="pokeball" style={{width:"30px", marginRight:"10px"}}/>
              <p>856</p>
            </div>
          </div>
          <p style={{color:"white", marginRight:"20vw"}}>A -&gt; Z</p>
        </div>
      </div>
    </>
  )
}
export default TopBar