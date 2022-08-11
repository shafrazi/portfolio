import Head from "next/head";
import PageHeader from "../components/page-header";

export default function About() {
  return (
    <div className="flex flex-col flex-grow">
      <Head>
        <title>About | Shafrazi Shiffa</title>
        <meta name="description" content="Shafrazi's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeader title="About Me" />
    </div>
  );
}
