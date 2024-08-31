import React from "react";
import { Btn } from ".";
import { ForwardIcon } from "@/public/svg";

type Props = {};

const ThirdSection = (props: Props) => {
  return (
    <div className="flex flex-col  w-full px-20 py-16 gap-2  items-center text-center md:items-start md:text-start">
      <h1 className="text-[25px] font-bold  border-separate w-fit  mb-4">
        Showcase Your Authentic Products—Add your items to our platform to
        ensure buyers trust your brand when they scan your product's barcode.
      </h1>{" "}
      <p className="mb-4 text-[15px] sm:w-[85%]">
        Take control with ScanGuard. Register your products to guarantee
        authenticity, flag counterfeits, and keep your brand’s reputation
        intact.
      </p>
      <div className="flex">
        <Btn
          text="Register product "
          icon={<ForwardIcon />}
          border="border"
          borderColor="white"
        />
      </div>
    </div>
  );
};

export default ThirdSection;
