import './App.css';
import NavBar from './components/NavBar'
import PageSelection from './components/PageSelection'
import LoginPage from './components/LoginPage'
import LogoutPage from './components/LogoutPage'
import SavesPage from './components/SavesPage'
import HomePage from './components/HomePage'
import RestaurantPage from './components/RestaurantPage'
import TouristicLocPage from './components/TouristicLocPage'
import MapPage from './components/MapPage'
import CreateUser from './components/CreateUser'
import {useState, useEffect} from 'react'
import {
  Routes,
  Route,
  useNavigate
} from "react-router-dom";


function App() {
  
  const [userToLogin, setUserToLogin] = useState({
    username: "",
    password: ""
  })
  const [userLogged, setUserLogged] = useState(false)
  const [userPlaces, setUserPlaces] = useState([])
  const [greeting, setGreeting] = useState("")
  const [currentUser, setCurrentUser] = useState(null)
  const [allPlaces, setAllPlaces] = useState([])
  const [allPlacesFilter, setAllPlacesFilter] = useState(allPlaces)
  // const [placesWeShow, setPlacesWeShow] = useState([])
  const [reRender, setReRender] = useState(true)
  const [searchBar, setSearchBar] = useState("")
  // const [allRestaurants, setAllRestaurants] = useState([])
  // const [allTouristicLoc, setAllTouristic] = useState([])
  
  let navigate = useNavigate();
  //function that fetches all places
  useEffect(()=>{
    fetch("/places")
    .then(res => res.json())
    .then(placeInfo => {
      setAllPlaces(placeInfo)
      setAllPlacesFilter(placeInfo)
      //do logic for filtering rest and touristic loc, then set state in here
      // setAllRestaurants
      // setAllTouristic
    })
  }, [reRender])
  //function that handles login submission
  const handleLoginSubmit = (e) => {
    e.preventDefault()
    fetch("/login", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(userToLogin)
    })
    .then(res => res.json())
    .then(userLoggedInfo => {
      setCurrentUser(userLoggedInfo)
      setUserPlaces(userLoggedInfo.saved_places)
      setGreeting(userLoggedInfo.username)
      if (userLoggedInfo.errors) {
        setUserLogged(false)
        alert(userLoggedInfo.errors)
      } else if (userLoggedInfo.name) {
        setUserLogged(true)
      } else {
        alert("An error has occurred, please refresh the page.")
      }
      navigate("/")
    })
  }
  // function that handles user persistance
  useEffect(()=>{
    fetch("/userInSession")
    .then(res => res.json())
    .then(loggedInUser => {
      setCurrentUser(loggedInUser)
      
      if (loggedInUser !== null) {
        setUserPlaces(loggedInUser.saved_places)
        setUserLogged(true)
        setGreeting(loggedInUser.username)
      } else {
        setUserLogged(false)
      }
    })
  }, [reRender])

  console.log(userLogged)

  const handleSavingRestAndLoc = (id) => {
    const placeToSave = allPlaces.filter((each)=>{
      if(each.id === id){
        return each
      }
    })
    const placeToPost = placeToSave[0]
    if (userLogged === true && placeToPost.id === id){
        fetch("/saved_places", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "name": placeToPost.name,
                "image": placeToPost.image,
                "location": placeToPost.location,
                "description": placeToPost.description,
                "restaurant": placeToPost.restaurant,
                "tourist_loc": placeToPost.tourist_loc,
                "favorite": false,
                "user_id": currentUser.id,
                "place_id": id
            })
        })
        .then(res => res.json())
        .then(addedSave => {
          setUserPlaces([...userPlaces, addedSave])
          // const placesToShow = allPlaces.filter((each)=>{
          //   if(each.id !== addedSave.place.id){
          //     return each
          //   }
          // })
          // setAllPlaces(placesToShow)
          //Here I have access to the added save at the moment it is being added.
          //Potential place for conditional to only render non-saved cards???
          navigate("page-saves")
        })
    }
  }
  const handleSearchFilter = (e) => {
    setSearchBar(e.target.value)
    if (searchBar === ""){
      setReRender(!reRender)
      console.log("hi")
    }

    const newPlaces = allPlaces.filter((eachPlace)=>{
      return eachPlace.name.toLowerCase().includes(searchBar.toLowerCase())
    })
    setAllPlacesFilter(newPlaces)
  }
  return (
    <div className="App">
        <NavBar userLogged={userLogged} greeting={greeting} setReRender={setReRender} reRender={reRender} handleSearchFilter={handleSearchFilter} setSearchBar={setSearchBar} searchBar={searchBar}/>
        <PageSelection/>
        <Routes>
          <Route path="/" element={<HomePage allPlaces={allPlaces} handleSavingRestAndLoc={handleSavingRestAndLoc}/>}/>
          <Route path="page-login" element={<LoginPage userToLogin={userToLogin} setUserToLogin={setUserToLogin} handleLoginSubmit={handleLoginSubmit}/>}/>
          <Route path="/page-login/create-account" element={<CreateUser/>}/>
          
          <Route path="page-logout" element={<LogoutPage setCurrentUser={setCurrentUser} setUserLogged={setUserLogged} setUserPlaces={setUserPlaces}/>}/>
          <Route path="page-saves" element={<SavesPage currentUser={currentUser} userPlaces={userPlaces} userLogged={userLogged} setUserPlaces={setUserPlaces} reRender={reRender} setReRender={setReRender}/>}/>
          <Route path="restaurants" element={<RestaurantPage handleSavingRestAndLoc={handleSavingRestAndLoc} allPlacesFilter={allPlacesFilter} userPlaces={userPlaces}/>}/>
          <Route path="touristic-locations" element={<TouristicLocPage handleSavingRestAndLoc={handleSavingRestAndLoc} allPlacesFilter={allPlacesFilter}/>}/>
          <Route path="map-locations" element={<MapPage/>}/>
        </Routes>
    </div>
  );
}

export default App;


