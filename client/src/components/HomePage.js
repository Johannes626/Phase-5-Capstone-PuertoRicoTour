import React from 'react'
import HomeFeatured from './HomeFeatured'

function HomePage({allPlaces, handleSavingRestAndLoc}) {

    const indivPlaces = allPlaces.filter((eachPlace)=>{
        if (eachPlace.saved_places.length >= 5){
            return eachPlace
        }
    })

    const eachPlaceCard = indivPlaces.map((eachPlace)=>{
        return(
            <>
                <HomeFeatured eachPlace={eachPlace} key={eachPlace.id} handleSavingRestAndLoc={handleSavingRestAndLoc}/>
            </>
        )
    })
    
    

    return (
        <>
            <div className="home-page-container">
                {eachPlaceCard.length >= 1 ? <h2>Check out our featured locations down below!</h2> : <h2>There are currently no featured locations. Go to restaurants, touristic locations, or the map to save a location!</h2>}
            </div>
            <section className="card-row">
                {eachPlaceCard}
            </section>
        </>
    )
}

export default HomePage