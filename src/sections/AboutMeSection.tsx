import ContainerLayout from "@/layouts/ContainerLayout";
import Image from "next/image";
import aboutMeImg from "../../public/omniee.webp";

import React from "react";

const AboutMeSection = () => {
  return (
    <section className="py-20">
      <ContainerLayout>
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="flex-1">
            <h2 data-aos="fade-up" data-aos-delay="100">
              O mnie
            </h2>
            <p className="mt-10" data-aos="fade-up" data-aos-delay="100">
              Jestem pasjonatką fizjoterapii z wieloletnim doświadczeniem w
              pracy z Pacjentami. Specjalizuję się w terapii manualnej,
              rehabilitacji pourazowej oraz redukcji napięcia mięśniowego.
              Dzięki różnorodnym technikom i indywidualnemu podejściu pomagam
              Pacjentom wrócić do pełnej sprawności i poprawić jakość życia.
            </p>
            <ul className="mt-4" data-aos="fade-up" data-aos-delay="100">
              <li>
                <strong>2018:</strong> II wiosenne warsztaty dla
                fizjoterapeutów, Kraków (Organizator: BardoMed)
              </li>
              <li>
                <strong>2019:</strong> Badanie i dokumentacja medyczna w
                fizjoterapii (Prowadzący: Renata Skalska-Izdebska)
              </li>
              <li>
                <strong>2020:</strong> IASTM - Terapia punktów spustowych
                (Prowadzący: Tomasz Tittinger i Rafał Słoniak)
              </li>
            </ul>
            <blockquote data-aos="fade-up" data-aos-delay="100">
              „Do każdego Pacjenta podchodzę w sposób indywidualny i
              holistyczny, zapewniając pełne zaangażowanie i komfort.”
            </blockquote>
          </div>
          <div className="flex-1">
            <Image
              alt="Fizjoterapia Patrycja Wajda"
              src={aboutMeImg}
              height={1000}
              width={1000}
              className="w-full rounded-xl "
              data-aos="fade-up"
              data-aos-delay="100"
            />
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default AboutMeSection;
