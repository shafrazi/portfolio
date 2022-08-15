import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import PageHeader from "../components/page-header";

export default function About() {
  return (
    <div className="flex flex-col flex-grow w-full items-center">
      <Head>
        <title>About | Shafrazi Shiffa</title>
        <meta name="description" content="Shafrazi's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeader title="About Me" />
      <div className="flex flex-col lg:flex-row w-9/12 mt-8">
        <div className="w-full lg:w-2/12 flex flex-col">
          <div className="flex justify-center items-center">
            <Image
              src="/profile.jpg"
              alt="Shafrazi Shiffa"
              width={200}
              height={200}
              className="rounded-[18px]"
            />
          </div>
          <p className="text-center mt-2 text-xl md:text-3xl font-extrabold">
            Shafrazi Shiffa
          </p>
          <p className="text-center mt-1 md:mt-2 text-lg md:text-xl">
            Full stack web developer
          </p>
        </div>
        <div className="w-full lg:w-10/12 flex flex-col lg:px-12 py-6 lg:py-0 text-base md:text-lg">
          <p className="">
            Hello! I'm Shafrazi, a Full Stack Web Developer based in Sri Lanka.
          </p>
          <p className="mt-3">
            I’m a self-taught developer working on all things front-end and
            back-end. I have experience designing and developing applications
            for the web, from simple landing pages to fully fledged dynamic web
            applications. I love to build solutions for real world problems.
          </p>
          <p className="mt-3">
            Currently, I'm a Full Stack Web Developer at{" "}
            <Link href="https://arrowaccel.com">
              <a className="mouse-pointer text-blue-600" target="_blank">
                Arrow Accel
              </a>
            </Link>{" "}
            a company based in Amsterdam, Netherlands. I aspire toward a career
            that will allow me to build inclusive and accessible applications
            through carefully crafted code and user-centric design that result
            in engaging experiences.
          </p>
          <p className="mt-3">
            Here are a few technologies I've been working with recently:
          </p>
          <div className="flex space-x-16">
            <ul className="mt-4">
              <li className="flex">
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className="mr-4"
                  width="10"
                />
                <span>JavaScript</span>
              </li>
              <li className="flex">
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className="mr-4"
                  width="10"
                />
                <span>Ruby</span>
              </li>
              <li className="flex">
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className="mr-4"
                  width="10"
                />
                <span>Ruby on Rails</span>
              </li>
              <li className="flex">
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className="mr-4"
                  width="10"
                />
                <span>React</span>
              </li>
            </ul>
            <ul className="mt-4">
              <li className="flex">
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className="mr-4"
                  width="10"
                />
                <span>NextJS</span>
              </li>
              <li className="flex">
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className="mr-4"
                  width="10"
                />
                <span>TailwindCSS</span>
              </li>
              <li className="flex">
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className="mr-4"
                  width="10"
                />
                <span>Postgresql</span>
              </li>
              <li className="flex">
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className="mr-4"
                  width="10"
                />
                <span>PrismaDB</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
