import Head from "next/head";
import Image from "next/image";
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
      <div className="flex w-9/12 mt-8">
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
      </div>
    </div>
  );
}
