import React from 'react'
import IndividualRestaurant from './IndividualRestaurant'

function RestaurantPage({allPlacesFilter, handleSavingRestAndLoc}) {
    
    const indivPlaces = allPlacesFilter.filter((eachPlace)=>{
        if(eachPlace.restaurant === true){
            return eachPlace
        }
    })
    
    const indivRestaurant = indivPlaces.map((eachPlace)=>{
        
        return (
            <>
                <IndividualRestaurant eachPlace={eachPlace} key={eachPlace.id} handleSavingRestAndLoc={handleSavingRestAndLoc}/>
            </>
        )
    })
    

    return (
        <section className="card-row">
            {indivRestaurant}
        </section>
    )
}

export default RestaurantPage