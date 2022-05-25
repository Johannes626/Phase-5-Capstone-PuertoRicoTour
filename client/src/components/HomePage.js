import React from 'react'
import HomeFeatured from './HomeFeatured'

function HomePage({allPlaces}) {

    const indivPlaces = allPlaces.filter((eachPlace)=>{
        if (eachPlace.saved_places.length >= 5){
            return eachPlace
        }
    })

    const eachPlaceCard = indivPlaces.map((eachPlace)=>{
        return(
            <>
                <HomeFeatured eachPlace={eachPlace} key={eachPlace.id}/>
            </>
        )
    })
    
    

    return (
        <>
            <div className="home-page-container">
                <h2>Check out our featured locations down below!</h2>
            </div>
            <section className="card-row">
                {eachPlaceCard}
            </section>
        </>
    )
}

export default HomePage