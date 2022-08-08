import Link from "next/link";
import Container from "./container";

export default function Hero() {
  return (
    <Container>
      <div className="flex flex-col justify-center w-full mt-10 h-[840px]">
        <p className="text-xl">Hello, my name is</p>
        <p className="mt-6 text-5xl md:text-7xl font-bold">Shafrazi Shiffa.</p>
        <p className="mt-6 text-5xl md:text-7xl font-bold text-gray-500">
          I build things for the web.
        </p>
        <div className="w-11/12 lg:w-5/12 mt-5">
          <p className="text-2xl">
            I'm a software developer building beautiful interfaces and
            accessible applications. Welcome to my personal slice of the
            internet.
          </p>
          <div className="mt-8 flex space-x-8">
            <a href="/assets/shafrazi-resume.pdf" target="_blank">
              <button className="bg-black text-white hover:bg-gray-600 rounded px-6 py-2 font-extrabold text-xl">
                Resume
              </button>
            </a>
            <Link href="mailto:shafrazi@live.com">
              <button className="bg-white text-black  hover:bg-gray-300  hover:border-0 border border-black rounded px-6 py-2 font-extrabold text-xl">
                Say Hello!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
