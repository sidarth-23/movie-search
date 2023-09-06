import React, { useState, useEffect } from "react"
import axios from "axios"
import Background from "./Components/UI/Background"
import LoginPage from "./Components/LoginPage/LoginPage"
import LoggedInPage from "./Components/UserPage/LoggedInPage"

const InitialuserData = [
  ["admin", "admin", []],
  ["sid", "sid", []],
]

function App() {
  const [isLogin, setIsLogin] = useState(false)
  const [userArray, setUserArray] = useState([])
  const [error, setError] = useState(false)
  const [data, setData] = useState([])

  const handleGetRequest = (value) => {
    const apiUrl = "http://www.omdbapi.com/"

    const config = {
      params: {
        apikey: "1256d4af",
        s: value,
      },
    }
    axios
      .get(apiUrl, config)
      .then((response) => {
        setData(response.data.Search)
      })
      .catch((error) => {
        console.error("Error:", error)
        setData([])
      })
  }

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData")
    if (!storedUserData) {
      localStorage.setItem("userData", JSON.stringify(InitialuserData))
      setUserArray(InitialuserData)
    } else {
      setUserArray(JSON.parse(storedUserData))
    }
  }, [])

  const checkCredential = (user, pass) => {
    const userMatch = userArray.find(
      (item) => item[0] === user && item[1] === pass
    )

    if (userMatch) {
      setIsLogin(true)
      setUserArray(userMatch)
    } else {
      setError(true)
    }
  }

  const handleAddFavourite = (item) => {
    const dataToAdd = [item.imdbID, item.Title, item.Year, item.Poster]
    if (userArray[2].find((fav) => fav[0] === dataToAdd[0])) return;

    const hostData = JSON.parse(localStorage.getItem('userData'));
    const index = hostData.findIndex(item => userArray[0] === item[0]);

    const updatedUserArray = [...userArray]
    updatedUserArray[2] = [...updatedUserArray[2], dataToAdd]

    hostData[index] = updatedUserArray;
    localStorage.setItem('userData', JSON.stringify(hostData))

    setUserArray(updatedUserArray);
  }

  const handleDeleteFavourite = (itemId) => {
    const updatedFavorites = userArray[2].filter((fav) => fav[0] !== itemId)

    const hostData = JSON.parse(localStorage.getItem("userData"));
    const index = hostData.findIndex((item) => userArray[0] === item[0]);

    const updatedUserArray = [...userArray]
    updatedUserArray[2] = updatedFavorites

    hostData[index] = updatedUserArray
    localStorage.setItem("userData", JSON.stringify(hostData))

    setUserArray(updatedFavorites);
  }

  const handleSignup = (user, password) => {
    if (!user || !password || userArray.find((item) => item[0] === user)) {
      setError(true)
      return
    }

    const hostData = JSON.parse(localStorage.getItem("userData"));
    const toSend = [...hostData, [user, password, []]]
    localStorage.setItem('userData', JSON.stringify(toSend));
  }

  const handleLogout = () => {
    setIsLogin(false)
  }

  return (
    <React.Fragment>
      <Background />
      {!isLogin ? (
        <LoginPage
          onCheck={checkCredential}
          onError={error}
          signup={handleSignup}
        />
      ) : (
        <LoggedInPage
          onLogout={handleLogout}
          item={userArray}
          searchCardClick={handleAddFavourite}
          addFavourite={userArray[2]}
          data={data}
          deleteFavourite={handleDeleteFavourite}
          searchQuery={handleGetRequest}
        />
      )}
    </React.Fragment>
  )
}

export default App
