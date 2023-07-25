import pokeball from "../images/pokeball.png"
import bg from "../images/bg.png"
import { useEffect } from "react";

function Modal({
  onClick, 
  id, 
  name,
  imageGif,
  image,
  type, 
  height, 
  weight,
  stats,
  statsName}) {

    useEffect(() => {
      document.title = `${name} | Pokédex`
    }, []);

  return (
    <>
      <div style={{
        display:"flex", 
        position:"fixed", 
        top:"0",
        left:"0",
        zIndex:"10",
        width:"100%",
        height:"100%",
        alignItems:"center",
        justifyContent:"space-evenly",
        backgroundImage:`url(${bg})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        }}>
          <div onClick={onClick} 
            style={{
            position:"absolute",
            top:"50px",
            right:"50px",
            borderRadius:"50%",
            padding:"5px 10px",
            background:"black",
            color:"white",
            fontWeight:"900",
            cursor:"pointer",
          }}>X</div>

          <div>
            <img src={imageGif} alt={name} style={{Filter: "drop-shadow(10px 10px 12px black)", width:"250px"}} />
          </div>

          <div style={{
            display:"flex",
            alignContent:"center",
            justifyContent:"space-around",
            flexDirection:"column",
            width:"450px",
            height:"500px",
            }}>
              <div className="stat-container-title">
                <img src={image} alt={name} className="image-title" style={{marginBottom:"20px"}}/>
                <p style={{width:"180px", color:"black"}}>No.{id}</p>
                <p>{name}</p>
                <img src={pokeball} alt="pokeball-logo" className="pokeball-title" />
              </div>
              <div style={{display:"flex", width:"100%"}}>
                <div style={{background:"#dbdbd9", textAlign:"center"}} className="stats-left">
                  <p>Type</p>
                  <p>Height</p>
                  <p>Weight</p>
                </div>
                <div style={{background:"#fff"}} className="stats-right">
                  <p>{type}</p>
                  <p>{height}0 cm</p>
                  <p>{weight} lbs</p>
                </div>
              </div>
              <div className="base-stats">
                <div>
                  {statsName.map((stats) => (
                    <p className="stats">{stats}</p>
                  ))}
                </div>
                <div>
                  {stats.map((stats) => (
                    <p className="stats">{stats}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default Modal