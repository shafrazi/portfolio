import Head from "next/head";
import Hero from "../components/hero";

export default function Home() {
  return (
    <div className="flex flex-col flex-grow">
      <Head>
        <title>Shafrazi Shiffa</title>
        <meta name="description" content="Shafrazi's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </div>
  );
}
