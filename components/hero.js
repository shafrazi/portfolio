import Link from "next/link";
import Container from "./container";

export default function Hero() {
  return (
    <Container>
      <div className="flex flex-col justify-center w-full mt-10 h-[80vh]">
        <p className="text-xl">Hello, my name is</p>
        <p className="mt-4 md:mt-6 text-4xl md:text-5xl lg:text-7xl font-bold">
          Shafrazi Shiffa.
        </p>
        <p className="mt-4 md:mt-6 text-4xl md:text-5xl lg:text-7xl font-bold text-gray-500">
          I build things for the web.
        </p>
        <div className="w-11/12 lg:w-5/12 mt-5">
          <p className="text-xl md:text-2xl">
            I'm a software developer building beautiful interfaces and
            accessible applications. Welcome to my personal slice of the
            internet.
          </p>
          <div className="mt-8 flex space-x-8">
            <a href="/assets/shafrazi-resume.pdf" target="_blank">
              <button className="bg-black text-white hover:bg-gray-600 rounded px-4 md:px-6 py-2 font-extrabold text-lg md:text-xl">
                Resume
              </button>
            </a>
            <Link href="mailto:shafrazi@live.com">
              <button className="bg-white text-black  hover:bg-gray-300 hover:border-gray-300 border border-black rounded px-4 md:px-6 py-2 font-extrabold text-lg md:text-xl">
                Say Hello!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
