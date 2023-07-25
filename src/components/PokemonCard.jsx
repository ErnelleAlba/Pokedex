import "./PokemonCard.css"
import pokeball from "../images/pokeball-black.png"
import { PokemonImagesBaseUrl } from "../api/PokemonApi"
import Modal from "./Modal"
import { useEffect, useState } from "react"

function PokemonCard({
  id,
  idForImg, 
  image, 
  name, 
  type, 
  weight, 
  height, 
  stats, 
  statsName}){

  const imageGif = (PokemonImagesBaseUrl + idForImg + ".gif")
  const [isShown, setIsShown] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
// To open Modal 
  function modalHandler() {
    setModalIsOpen(true);
  }
// To close Modal 
  function closeModalHandler() {
    setModalIsOpen(false);
  }
  
  return (
    <>
      <div className="container">
        {isShown && (
        <div className="show">
          <div className="stat-container-title">
            <img src={image} alt={name} className="image-title" style={{marginBottom:"30px"}}/>
            <p style={{width:"180px", color:"black"}}>No.{id}</p>
            <p>{name}</p>
            <img src={pokeball} alt="pokeball-logo" className="pokeball-title" />
          </div>
          <img src={imageGif} alt={name} style={{ width:"180px"}}/>
          <div style={{display:"flex", width:"100%"}}>
            <div style={{background:"#dbdbd9", textAlign:"center"}} className="stats-left">
            <p>Type</p>
            <p>Height</p>
            <p>Weight</p>
            </div>
            <div style={{background:"#ffffff"}} className="stats-right">
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
      )}
      <div className="right" 
        // On Hover in card div.show will display
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        // On click Modal will open
        onClick={modalHandler}>
        <img src={imageGif} alt={name} style={{maxHeight:"50px", marginRight:"10px", width:"50px"}} />
        <p style={{width:"270px"}}>No. {id}</p>
        <p>{name}</p>
        <img src={pokeball} alt="pokeball-logo" style={{marginLeft:"auto", width:"40px"}} />
      </div>
      {modalIsOpen && (
        <Modal 
        id={id} 
        name={name}
        imageGif={imageGif}
        image={image}
        height={height}
        weight={weight}
        stats={stats}
        statsName={statsName}
        type={type}
        onClick={closeModalHandler}/>
      )}
      </div>
    </>
  )
}

export default PokemonCard