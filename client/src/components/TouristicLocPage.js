import React from 'react'
import IndividualTouristLoc from './IndividualTouristLoc'

function TouristicLocPage({allPlacesFilter, handleSavingRestAndLoc}) {
    
    const indivPlaces = allPlacesFilter.filter((eachPlace)=>{
        if(eachPlace.tourist_loc === true){
            return eachPlace
        }
    })
    
    const indivTouristLoc = indivPlaces.map((eachPlace)=>{
        return (
            <>
                <IndividualTouristLoc eachPlace={eachPlace} key={eachPlace.id} handleSavingRestAndLoc={handleSavingRestAndLoc}/>
            </>
        )
    })
    return (
        <section className="card-row">
            {indivTouristLoc}
        </section>
    )
}

export default TouristicLocPage