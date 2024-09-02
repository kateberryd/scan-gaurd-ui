import { ForwardIcon } from "@/public/svg";
import Btn from "./Btn";

type HeroSectionProps = {
  title: string;
  subtitle?: string;
  text: string;
  buttonText: string;
  icon: React.ReactElement;
  color?: string;
};

const HeroSection = ({
  title,
  subtitle,
  buttonText,
  icon,
  color,
  text,
}: HeroSectionProps) => {
  return (
    <div className="flex flex-col items-center text-center md:items-start md:text-start">
      <h1 className="text-[25px] font-bold grid border-separate w-fit mb-4">
        <span>{title}</span>
        <span>{subtitle}</span>{" "}
      </h1>
      <p className="mb-4">{text}</p>
      <div className="flex">
        <Btn
          text={buttonText}
          icon={icon}
          color={color}
          border="border"
          borderColor="white"
        />
      </div>
    </div>
  );
};

export default HeroSection;
