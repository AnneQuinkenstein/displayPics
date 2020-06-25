import React from 'react'; 

const AnimalCard = (porps) => {
    return(
        <div className="divContainer">
            <div className="imgContainer">
                <img src={porps.imgUrl} alt="pet-image"/>
            </div>
            <p>{porps.name}</p>
        </div>
    )
}

export default AnimalCard; 

