import React from "react";
import { Btn } from ".";
import { ForwardIcon } from "@/public/svg";
import Image from "next/image";
import frame from "@/public/frame.svg";
import HeroSection from "./HeroSection";

type Props = {};

const FourthSection = (props: Props) => {
  return (
    <div className="grid items-center  sm:justify-center px-20 py-16 lg:bg-transparent  md:bg-gray-900 sm:bg-gray-900  ">
      <div className="grid md:grid-cols-2 lg:px-10 lg:py-6 w-full lg:bg-gray-900 items-center  gap-12 rounded-xl">
        <HeroSection
          buttonText="Learn more "
          icon={<ForwardIcon />}
          title="The Edge ScanGuard Offers"
          text="ScanGuard runs on the blockchain technology allowing relevant data about products used on a daily basis; production date, distribution, and expiration date, to be immutable and safely stored."
        />
        <div className="block">
          <Image src={frame} alt="housing" />
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
