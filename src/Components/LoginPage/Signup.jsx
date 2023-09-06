import { useState } from "react"

export default function Signup(props) {
  const [user, setUser] = useState("")
  const [pass1, setPass1] = useState("")
  const [pass2, setPass2] = useState("")
  const [errorIn, setErrorIn] = useState(false)

  const handleUserChange = (event) => {
    setUser(event.target.value)
  }
  const handlePass2Change = (event) => {
    setPass2(event.target.value)
  }
  const handlePass1Change = (event) => {
    setPass1(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (pass1 !== pass2 || !pass1 || !pass2 || !user) {
      setErrorIn(true);
    }
    else {
      props.signup(user, pass1);
    }
  }

  return (
    <div className="h-fill w-full bg-opacity-40 bg-black rounded-lg cont p-6 hover:scale-110 md:hover:-translate-x-10 md:focus:-translate-x-10 hover:bg-opacity-70 duration-100 flex flex-col justify-center items-center">
      <h1 className="text-2xl">Signup for your own favourites stored</h1>
      <form onSubmit={handleSubmit} action="submit">
        <div className="flex flex-col p-2">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            onChange={handleUserChange}
            value={user}
            className={`rounded-md text-black p-2 border-2 ${
              !errorIn ? "border-stone-500" : "border-red-600"
            }`}
          />
        </div>
        <div className="flex flex-col p-2">
          <label htmlFor="pass1">Password</label>
          <input
            type="password"
            name="pass1"
            onChange={handlePass1Change}
            value={pass1}
            className={`rounded-md text-black p-2 border-2 ${
              !errorIn ? "border-stone-500" : "border-red-600"
            }`}
          />
        </div>
        <div className="flex flex-col p-2">
          <label htmlFor="username">Connfirm Password</label>
          <input
            type="password"
            name="pass2"
            onChange={handlePass2Change}
            value={pass2}
            className={`rounded-md text-black p-2 border-2 ${
              !errorIn ? "border-stone-500" : "border-red-600"
            }`}
          />
        </div>
        <div className="w-full flex justify-center p-2">
          <button
            type="submit"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 h-10 border-2 border-green-400 mb-1 rounded-md duration-500 hover:translate-y-1 "
          >
            <p className="px-4">Sign Up!!</p>
          </button>
        </div>
      </form>
    </div>
  )
}
