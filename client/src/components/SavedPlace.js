import React from 'react'

function SavedPlace({eachPlace, handleSaveDelete}) {

    return (
        <div className="card">
            <div>
                <img src={eachPlace.image} alt={eachPlace.name} className="card-image"/>
                <h3>{eachPlace.name}</h3>
                {eachPlace.restaurant === true ? <h4>Restaurant ✔️</h4> : <h4>Restaurant ❌</h4>}
                {eachPlace.tourist_loc === true ? <h4>Touristic ✔️</h4> : <h4>Touristic ❌</h4>}
                {eachPlace.favorite ? <button>In your favorites!</button> : <button>Add to favorites?</button>}
                <button type="click" onClick={handleSaveDelete}>Remove from Saves</button>
            </div>
        </div>
    )
}

export default SavedPlace