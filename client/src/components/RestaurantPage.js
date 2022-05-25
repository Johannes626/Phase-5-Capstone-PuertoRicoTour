import React from 'react'
import IndividualRestaurant from './IndividualRestaurant'

function RestaurantPage({allPlaces}) {
    
    const indivPlaces = allPlaces.filter((eachPlace)=>{
        if(eachPlace.restaurant === true){
            return eachPlace
        }
    })
    const indivRestaurant = indivPlaces.map((eachPlace)=>{
        return (
            <>
                <IndividualRestaurant eachPlace={eachPlace} key={eachPlace.id}/>
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