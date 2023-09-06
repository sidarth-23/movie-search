export default function WelcomeHeader(props) {
  const logoutHandler = (event) => {
    event.preventDefault();
    props.onLogout();
  }
  return (
    <div className="w-screen top-0 bg-gradient-to-r from-violet-400 to-pink-300 p-5 shadow-md flex flex-row justify-between content-center">
      <p className="text-2xl text-center bg-clip-text text-transparent bg-gradient-to-r from-black to-indigo-700 font-bold">
        Welcome back , <span className="text-3xl font-extrabold font-mono">{props.name[0]}</span>
      </p>
      <button
        className="bg-gradient-to-r from-cyan-500 to-blue-500 h-10 border-2 border-green-400 mb-1 rounded-md duration-500 hover:translate-y-1"
        onClick={logoutHandler}
      >
        <p className="px-4">Logout</p>
      </button>
    </div>
  )
}
