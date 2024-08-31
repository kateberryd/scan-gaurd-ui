import React from "react";
import { Btn } from ".";
import { ForwardIcon } from "@/public/svg";
import Image from "next/image";
import Housing from "@/public/svg/housing";

type Props = {};

const FourthSection = (props: Props) => {
  return (
    <div className="grid items-center  sm:justify-center px-20 py-16  md:bg-gray-900 sm:bg-gray-900  ">
      <div className="grid lg:grid-cols-2 lg:px-10 lg:py-6 w-full lg:bg-gray-900 items-center  gap-12 rounded-xl">
        <div className="gap-[15px] flex flex-col  items-center text-center md:items-start md:text-start">
          <h1 className="text-[25px] font-bold grid border-separate w-fit mb-4">
            <span>The Edge ScanGuard Offers</span>
          </h1>
          <p className="mb-4">
            ScanGuard runs on the blockchain technology allowing relevant data
            about products used on a daily basis; production date, distribution,
            and expiration date, to be immutable and safely stored.
          </p>
          <div className="flex">
            <Btn
              text="Learn more"
              icon={<ForwardIcon />}
              border="border"
              borderColor="white"
              color="bg-transparent"
            />
          </div>
        </div>
        <div className="w-1/2 block">
          <Housing />
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
