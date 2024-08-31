import React from "react";
import { Btn } from ".";
import { ForwardIcon } from "@/public/svg";
import Image from "next/image";

type Props = {};

const FourthSection = (props: Props) => {
  return (
    <div className="flex flex-col-reverse md:flex-row px-4 py-8 w-full bg-gray-900">
      <div className="md:w-1/2 flex flex-col items-center justify-center">
        <Image
          src="/your-image-path.jpg" // Replace with your actual image path
          alt="ScanGuard benefits image"
          width={500} // Adjust width as needed
          height={300} // Adjust height as needed
          className="rounded-lg object-cover"
        />
      </div>
      <div className="md:w-1/2 gap-[15px] flex flex-col items-center justify-center">
        <h1 className="text-[25px] font-bold grid border-separate w-fit borde-t mb-4">
          <span>The edge ScanGuard offers</span>
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
    </div>
  );
};

export default FourthSection;