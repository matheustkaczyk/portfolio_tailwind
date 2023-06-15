import { AiFillLinkedin, AiFillGithub, AiOutlineWhatsApp } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-4 w-screen">
      <div className="container mx-auto flex items-center justify-around px-4">
        <div>
          <p className="font-bold">&copy; {new Date().getFullYear()} - Matheus Tkaczyk Ribeiro</p>
        </div>
        <div className="container w-fit">
          <ul className="flex flex-row">
            <li>
              <a
                href="https://www.linkedin.com/in/matheustkaczykribeiro/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <AiFillLinkedin size={30} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/matheustkaczyk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <AiFillGithub size={30} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/matheustkaczyk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <AiOutlineWhatsApp size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
