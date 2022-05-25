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
import {useState, useEffect} from 'react'
import {
  BrowserRouter,
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
  
  let navigate = useNavigate();
  //function that fetches all places
  useEffect(()=>{
    fetch("/places")
    .then(res => res.json())
    .then(placeInfo => {
      setAllPlaces(placeInfo)
    })
  }, [])
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
      } else {
        setUserLogged(false)
      }
    })
  }, [])

  console.log(userLogged)


  return (
    <div className="App">
      {/* <BrowserRouter> */}
        <NavBar userLogged={userLogged} greeting={greeting}/>
        <PageSelection/>
        <Routes>
          <Route path="/" element={<HomePage allPlaces={allPlaces}/>}/>
          <Route path="page-login" element={<LoginPage userToLogin={userToLogin} setUserToLogin={setUserToLogin} handleLoginSubmit={handleLoginSubmit}/>}/>
          <Route path="page-logout" element={<LogoutPage setCurrentUser={setCurrentUser} setUserLogged={setUserLogged} setUserPlaces={setUserPlaces}/>}/>
          <Route path="page-saves" element={<SavesPage currentUser={currentUser} userPlaces={userPlaces} userLogged={userLogged}/>}></Route>
          <Route path="restaurants" element={<RestaurantPage allPlaces={allPlaces}/>}/>
          <Route path="touristic-locations" element={<TouristicLocPage allPlaces={allPlaces}/>}/>
          <Route path="map-locations" element={<MapPage/>}/>
        </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
