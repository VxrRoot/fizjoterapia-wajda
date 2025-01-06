import ContainerLayout from "@/layouts/ContainerLayout";
import Image from "next/image";
import React from "react";
import CTAButton from "@/components/CTAButton";

const HeroSection = () => {
  return (
    <div className="bg-hero-gradient min-h-[720px] py-32 lg:py-60 relative text-white">
      <ContainerLayout>
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 flex  flex-col justify-center min-h-full">
            <div className="bg-[#c4f6921a] py-4 px-5 w-max rounded-full mb-10 flex items-center">
              <span className="w-2 h-2 bg-[#0daf8a] rounded-full block mr-2" />
              <span className="text-base text-[#0daf8a] font-semibold">
                Dbaj dziś, by nie leczyć jutro!
              </span>
              <span className="w-2 h-2 bg-[#0daf8a] rounded-full block ml-2" />
            </div>
            <h1 className=" mb-10">
              Odkryj nowoczesną fizjoterapię dla każdego
            </h1>
            <p>
              Nasze podejście łączy innowacyjne metody z indywidualnym
              wsparciem, aby skutecznie redukować ból i poprawiać jakość życia.
              Zaufaj profesjonalizmowi i holistycznemu podejściu naszych
              terapeutów.
            </p>
            <div className="mt-10 flex">
              <CTAButton text="Zarezerwuj termin" />
            </div>
          </div>
          <div className="flex-1 flex justify-center max-lg:mt-20">
            <div className="max-w-[480px] bg-[#c4f6921a] p-4 rounded-[80px]">
              <Image alt="Patrycja Wajda" src="hero-img.avif" />
            </div>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default HeroSection;
