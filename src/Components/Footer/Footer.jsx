import Logo from "../../assets/icons8-github.svg"

export default function Footer({url, title}) {
  return (
    <footer>
      <a href="https://github.com/sidarth-23" target="_blank" rel="noreferrer">
        <img src={Logo} alt="" />
      </a>
      <a href={url} target="_blank" rel="noreferrer">
        <code className="text-2xl text-right pl-4">{title}</code>
      </a>
    </footer>
  )
}
