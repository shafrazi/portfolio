import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="max-w-[100rem] w-full mx-auto px-2 py-6 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:justify-between">
      <div className="flex space-x-5">
        <Link href="https://github.com/shafrazi">
          <a target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faGithub}
              width={25}
              className="mouse-pointer"
            />
          </a>
        </Link>
        <Link href="https://linkedin.com/in/shafrazi">
          <a target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faLinkedin}
              width={25}
              className="mouse-pointer"
            />
          </a>
        </Link>
        <Link href="https://twitter.com/shafrazi">
          <a target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faTwitter}
              width={25}
              className="mouse-pointer"
            />
          </a>
        </Link>
        <Link href="mailto:shafrazi@live.com">
          <a target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faEnvelope}
              width={25}
              className="mouse-pointer"
            />
          </a>
        </Link>
      </div>
      <div className="mt-3 pb-4 md:pb-0 md:mt-0">
        <p>© shafrazi shiffa 2022</p>
      </div>
    </footer>
  );
}
