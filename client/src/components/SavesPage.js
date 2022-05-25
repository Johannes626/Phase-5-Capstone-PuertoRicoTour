import React from 'react'
import SavedPlace from './SavedPlace'
import {useState} from 'react'

function SavesPage({currentUser, userPlaces, userLogged}) {

    const [] = useState()
    
    const handleSaveDelete = (e) => {
        console.log(e)
    }

    const indivSavedPlace = userPlaces.map((eachPlace)=>{
        return (
            <>
                <SavedPlace eachPlace={eachPlace} key={eachPlace.id} handleSaveDelete={handleSaveDelete}/>
            </>
        )
    })

    return (
        <section className="card-row">
            {userLogged === true ? indivSavedPlace : <h2>Please login to view your saves!</h2>}
        </section>
    )
}

export default SavesPage