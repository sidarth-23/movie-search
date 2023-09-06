import { useRef } from 'react'
import Imdb from '../../assets/title-logo.svg'

export default function LoginHeader(props) {
  const inputClass =
    "bg-white text-black opacity-100 border-2 rounded-lg p-2 mt-1 duration-100 hover:scale-110 focus:scale-110 shadow-md"

  const userRef = useRef();
  const passwordRef = useRef();

  const loginHandler = (event) => {


    event.preventDefault();
    const userName = userRef.current.value;
    const password = passwordRef.current.value;
    props.onCheck(userName, password);
  }

  return (
    <div className="w-screen top-0 bg-gradient-to-r from-violet-400 to-pink-300 p-5 shadow-md flex flex-row justify-center md:justify-between">
      <img src={Imdb} alt="IMDB" className="hidden lg:block" />
      <form
        onSubmit={loginHandler}
        action="submit"
        className=" grid grid-cols-2 md:grid-cols-3 gap-6"
      >
        <div className="flex flex-col">
          <label
            htmlFor="userName"
            className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-yellow-500"
          >
            Username
          </label>
          <input
            name="userName"
            ref={userRef}
            type="text"
            className={
              !props.onError
                ? `border-slate-500 ${inputClass}`
                : `border-red-500 ${inputClass}`
            }
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="password"
            className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-900 to-yellow-700"
          >
            Password
          </label>
          <input
            name="password"
            ref={passwordRef}
            type="password"
            className={
              !props.onError
                ? `border-slate-500 ${inputClass}`
                : `border-red-500 ${inputClass}`
            }
          />
        </div>
        <div className="flex flex-col justify-between translate-x-32 md:translate-x-0">
          <div className='flex'>
            <p
              className={
                "inline p-1 text-red-100 rounded-lg bg-red-500 bg-opacity-40 items-center justify-center " +
                (props.onError ? "visible" : "hidden")
              }
            >
              Please try again
            </p>
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 h-10 border-2 border-green-400 mb-1 rounded-md duration-500 hover:translate-y-1 "
          >
            <p>Login</p>
          </button>
        </div>
      </form>
    </div>
  )
}
