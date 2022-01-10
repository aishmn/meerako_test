import LandingPage from "@/modules/landing_page";
import Head from "next/head";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Meerako</title>
        <meta name="description" content="Best Software Company in Nepal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LandingPage />
    </div>
  );
}
