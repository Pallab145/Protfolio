import Image from 'next/image';
import logo from '../assets/raviKumarLogo.webp';
import { FaLinkedin } from 'react-icons/fa';
import { IoLogoGithub } from 'react-icons/io';
import { FaSquareXTwitter } from 'react-icons/fa6';


export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home" style={{ width: '25px', height: '25px', borderRadius: '0.5rem' }}>
          <Image src={logo} className="mx-2" width={50} height={33} alt="Logo" />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/your-linkedin-profile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://www.github.com/in/your-github-profile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub">
          <IoLogoGithub />
        </a>
        <a href="https://www.twitter.com/in/your-twitter-profile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter">
          <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  );
}
