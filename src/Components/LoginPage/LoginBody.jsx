import Instructions from "./Instructions";
import Signup from "./Signup";

export default function LoginBody(props) {
  return (
    <div className="w-screen p-6 overflow-auto grid grid-cols-1 gap-8 md:grid-cols-2">
      <Instructions />
      <Signup signup={props.signup} />
    </div>
  )
}