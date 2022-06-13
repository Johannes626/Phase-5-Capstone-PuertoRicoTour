import React from 'react'
import SavedPlace from './SavedPlace'

function SavesPage({reRender, setReRender, userPlaces, userLogged, setUserPlaces}) {

    const handleSaveDelete = (id) => {
        fetch(`/saved_places/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then((idData)=>{
            setUserPlaces(userPlaces.filter((eachSave)=>{
                if (eachSave.id !== idData)
                return eachSave
            }))
        })
    }

    const handleFavorites = (id, favorite) => {
        if(favorite === false){
            fetch(`/saved_places/${id}`, {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({favorite: true})
            })
            .then(res => res.json())
            .then(editedData=>{
                setReRender(!reRender)
            })
        } else if (favorite === true){
            fetch(`/saved_places/${id}`, {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({favorite: false})
            })
            .then(res => res.json())
            .then(editedData=>{
                setReRender(!reRender)
            })
        }
    }

    const indivSavedPlace = userPlaces.map((eachPlace)=>{
        return (
            <>
                <SavedPlace eachPlace={eachPlace} key={eachPlace.id} handleSaveDelete={handleSaveDelete} handleFavorites={handleFavorites}/>
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