import ContainerLayout from "@/layouts/ContainerLayout";
import Image from "next/image";
import heroImg from "../../public/hero-img.webp";
import React from "react";
import CTAButton from "@/components/CTAButton";

const HeroSection = () => {
  return (
    <div className="bg-hero-gradient min-h-[720px] py-32 lg:py-60 relative text-white">
      <ContainerLayout>
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 flex  flex-col justify-center min-h-full">
            <div
              className="bg-[#c4f6921a] animate-pulse py-4 px-5 w-max rounded-full mb-10 flex items-center"
              data-aos="fade-right"
            >
              <span className="w-2 h-2 bg-[#0daf8a] rounded-full block mr-2" />
              <span className="text-base text-[#0daf8a] font-semibold ">
                Dbaj dziś, by nie leczyć jutro!
              </span>
              <span className="w-2 h-2 bg-[#0daf8a] rounded-full block ml-2" />
            </div>
            <h1 className="mb-10" data-aos="fade-up">
              Odkryj nowoczesną fizjoterapię dla każdego
            </h1>
            <p data-aos="fade-up" data-aos-delay="200">
              W mojej pracy łączę innowacyjne metody fizjoterapeutyczne z
              indywidualnym podejściem do konkretnego problemu. Każdego Pacjenta
              traktuję w sposób holistyczny, by móc nie tylko pozbyć się
              objawów, ale przede wszystkim przyczyny dolegliwości.
            </p>
            <div className="mt-10 flex" data-aos="fade-up">
              <CTAButton text="Zarezerwuj termin" />
            </div>
          </div>
          <div className="flex-1 flex justify-center max-lg:mt-20">
            <div
              className="max-w-[480px] bg-[#c4f6921a] p-4 rounded-[80px]"
              data-aos="fade-left"
            >
              <Image
                alt="Patrycja Wajda"
                src={heroImg}
                layout="responsive"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default HeroSection;
