import React from "react";
import { Btn } from ".";
import { ForwardIcon } from "@/public/svg";
import HeroSection from "./HeroSection";

type Props = {};

const ThirdSection = (props: Props) => {
  return (
    <div className="flex flex-col  w-full px-20 py-16 gap-2  items-center text-center md:items-start md:text-start">
      <HeroSection
        buttonText="Register Product"
        icon={<ForwardIcon />}
        title="Showcase Your Authentic Products—Add your items to our platform to ensure buyers trust your brand when they scan your product's barcode."
        text="Take control with ScanGuard. Register your products to guarantee authenticity, flag counterfeits, and keep your brand’s reputation intact."
      />
    </div>
  );
};

export default ThirdSection;
