import React from 'react'

function IndividualRestaurant({eachPlace, handleSavingRestAndLoc}) {

    const {id, image, restaurant, name, tourist_loc, description} = eachPlace
    return (
        <div className="card">
            <div>
                <img src={image} alt={name} className="card-image"/>
                <h3>{name}</h3>
                {restaurant === true ? <h4>Restaurant ✔️</h4> : <h4>Restaurant ❌</h4>}
                {tourist_loc === true ? <h4>Touristic ✔️</h4> : <h4>Touristic ❌</h4>}
                <p>{description}</p>
                <button type="click" onClick={()=>{handleSavingRestAndLoc(id)}}>Add to saves!</button>
            </div>
        </div>
    )
}

export default IndividualRestaurant