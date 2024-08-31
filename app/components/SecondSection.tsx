import React from "react";
import { Btn } from ".";
import { ForwardIcon } from "@/public/svg";
import Housing from "@/public/svg/housing";

type Props = {};

const SecondSection = (props: Props) => {
  return (
    <div className="lg:grid-cols-2 grid px-20 py-16 w-full gap-12 items-center justify-center ">
      <div className="lg:block hidden w-1/2">
        <Housing />
      </div>
      <div className="flex flex-col sm:items-center sm:text-center md:items-start md:text-start">
        <h1 className="text-[25px] font-bold grid border-separate w-fit mb-4">
          <span>Trusted Authentication,</span>
          <span>Exclusively from ScanGuard</span>{" "}
        </h1>
        <p className="mb-4">
          Delivering simple, convenient, and trustworthy product verification to
          over 300,000 customers nationwide.
        </p>
        <div className="flex">
          <Btn
            text="Learn more "
            icon={<ForwardIcon />}
            border="border"
            borderColor="white"
          />
        </div>
      </div>
      <div className="lg:hidden  block">
        <Housing />
      </div>
    </div>
  );
};

export default SecondSection;
