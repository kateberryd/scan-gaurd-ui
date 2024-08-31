"use client"
import * as Components from "./components";

export default function Home() {
  return (
    <main className=" bg-black text-white">
      {/* <Components.Header /> */}
      <Components.FirstSection/>
      <Components.SecondSection/>
      <Components.ThirdSection/>
      <Components.FourthSection/>
      <Components.Footer/>
    </main>
  );
}
