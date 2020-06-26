import React from 'react'; 

const Dropdownlist = (props) => {
    return(
    <div>
    <select className="Dropdownlist" onChange={props.handleChoice} id="animalsList" name="animalsList">
    <option value="All">ALL</option>
    <option value="Dogs">DOGS</option>
    <option value="Cats">CATS</option>
    </select>
    </div>
    )
}

export default Dropdownlist; 

