import React from "react";

const CTAButton = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <a
      href="https://zarejestrowani.pl/w/OusgLO1v4AQICjc9Nn15tA/"
      className={`bg-[#c4f692] text-[#073833] text-xl px-4 py-5 w-max rounded-full font-semibold ${className}`}
      target="_blank"
    >
      {text}
    </a>
  );
};

export default CTAButton;
