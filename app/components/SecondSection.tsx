import React from "react";
import { Btn } from ".";
import { BarcodeIcon, ForwardIcon } from "@/public/svg";
import Housing from "@/public/svg/housing";
import Image from "next/image";
import housing from "@/public/housing.svg";
import HeroSection from "./HeroSection";
type Props = {};

const SecondSection = (props: Props) => {
  return (
    <div className="md:grid-cols-2 grid px-20 py-16 w-full gap-12 items-center justify-center ">
      <div className="lg:block hidden ">
        <Image src={housing} alt="housing" />
      </div>

      <HeroSection
        buttonText="Learn more "
        icon={<ForwardIcon />}
        title="Trusted Authentication,"
        subtitle="Exclusively from ScanGuard"
        text="Delivering simple, convenient, and trustworthy product verification to
          over 300,000 customers nationwide."
      />


      <div className="lg:hidden block ">
        <Image src={housing} alt="housing" />
      </div>
    </div>
  );
};

export default SecondSection;
