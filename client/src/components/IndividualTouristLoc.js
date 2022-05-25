import React from 'react'

function IndividualTouristLoc({eachPlace}) {
    return (
        <div className="card">
            <div>
                <img src={eachPlace.image} alt={eachPlace.name} className="card-image"/>
                <h3>{eachPlace.name}</h3>
                {eachPlace.restaurant === true ? <h4>Restaurant ✔️</h4> : <h4>Restaurant ❌</h4>}
                {eachPlace.tourist_loc === true ? <h4>Touristic ✔️</h4> : <h4>Touristic ❌</h4>}
                {eachPlace.favorite ? <h5>In your favorites!</h5> : <h5>Add to favorites?</h5>}
            </div>
        </div>
    )
}

export default IndividualTouristLoc