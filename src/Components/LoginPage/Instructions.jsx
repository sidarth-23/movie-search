export default function Instructions() {
  return (
    <div className="h-full w-full bg-opacity-40 bg-black rounded-lg cont p-6 hover:scale-110 md:hover:translate-x-10 hover:bg-opacity-70 duration-100">
      <h1 className="font-bold text-2xl">Instructions</h1>
      <ul className="list-disc list-inside">
        <li>The sample username and password is</li>
        <ol className="list-none list-inside">
          <li>User : admin</li>
          <li>Pass: admin</li>
        </ol>
        <li>
          Addding and deleting the favourites are by the click event on the
          card. There is no delete button
        </li>
        <br />
        <li>
          The login state is not connected to any backend and is just a json
          stored in the localStorage.
        </li>
        <li>
          I had to use nested array instead of JSON to make the localStorage
          work with the application
        </li>
        <li>
          This is my first attempt with react, tailwind and framer motion. So
          I&#39;m not sure of display compatibility
        </li>
        <li>
          I hope I have covered all the required user stories except the Next.js
          part which I&#39;m eager to learn, but not willing to experiment at
          the moment
        </li>
        <li>
          I have not used onChange listener to dynamically search for movies as
          the user enters to prevent API overuse as there is only 1000 calls
          available per day
        </li>
      </ul>
    </div>
  )
}
