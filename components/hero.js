import Container from "./container";

export default function Hero() {
  return (
    <Container>
      <div className="flex flex-col justify-center w-full mt-10 h-[740px]">
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
        </div>
      </div>
    </Container>
  );
}
