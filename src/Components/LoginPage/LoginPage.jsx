import LoginHeader from "./LoginHeader";
import Footer from "../Footer/Footer";
import LoginBody from "./LoginBody";

export default function LoginPage(props) {
  return (
    <div className="flex flex-col top-0 h-full justify-between">
      <LoginHeader onCheck={props.onCheck} onError={props.onError} />
      <LoginBody signup={props.signup} />
      <Footer url={"https://github.com/sidarth-23"} title={"Github"} />
    </div>
  )
}