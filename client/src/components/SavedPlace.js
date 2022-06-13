import React from 'react'

function SavedPlace({eachPlace, handleSaveDelete, handleFavorites}) {
    
    const {id, image, restaurant, name, tourist_loc, favorite, description} = eachPlace
    
    return (
        <div className="card">
            <div>
                <img src={image} alt={name} className="card-image"/>
                <h3>{name}</h3>
                {restaurant === true ? <h4>Restaurant ✔️</h4> : <h4>Restaurant ❌</h4>}
                {tourist_loc === true ? <h4>Touristic ✔️</h4> : <h4>Touristic ❌</h4>}
                <p>{description}</p>
                {favorite ? <button type="click" onClick={()=>{handleFavorites(id, favorite)}}>Favorite!</button> : <button type="click" onClick={()=>{handleFavorites(id, favorite)}}>Add to favorites?</button>}
                <button type="click" onClick={()=>{handleSaveDelete(id)}}>Remove from Saves</button>
            </div>
        </div>
    )
}

export default SavedPlace