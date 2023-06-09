import Career from "@/components/Career";
import Code from "@/components/Code";
import Contact1 from "@/components/Contact1";
import Finance from "@/components/Finance";
import Hero from "@/components/Hero";
import Team from "@/components/Team";
import Thank from "@/components/Thank";
import Videos from "@/components/Videos";
import Zdoc from "@/components/Zdoc";
import ZimoAI from "@/components/ZimoAI";
import FormControle from "@/components/FormControle";

import ZimoTeam from "@/components/ZimoTeam";
// import { decremented, incremented } from "@/src/store/features/counterSlice";
import Head from "next/head";
// import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  // const { value } = useSelector((state) => state.counter);
  // const dispatch = useDispatch();

  return (
    <>
      <Head>
        <title>Zimo Team</title>
      </Head>

      <main>
        <Hero />
        <Videos />
        <ZimoTeam />
        <ZimoAI />
        <Finance />
        <Zdoc />
        <Career />

        <Code />
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
          <FormControle />
        </div>

        <Team />
        <Thank />
        <Contact1 />
      </main>
    </>
  );
}
