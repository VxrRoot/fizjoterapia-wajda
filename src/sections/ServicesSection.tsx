import ContainerLayout from "@/layouts/ContainerLayout";
import Image from "next/image";
import React from "react";
import { Phone } from "lucide-react";
import CTAButton from "@/components/CTAButton";

const ServicesSection = () => {
  return (
    <section className="py-20">
      <ContainerLayout>
        <div>
          <span className="poppins mb-2 text-[#04534B] font-semibold">
            Fizjoterapia
          </span>
          <h2 className="mb-4">Zobacz jak mogę Ci pomóc</h2>
          <p className="max-w-[50rem]">
            Oferuję nowoczesne metody terapeutyczne dostosowane do
            indywidualnych potrzeb każdego pacjenta. Jako doświadczona
            fizjoterapeutka łączę skuteczność z troską o Twój komfort,
            zapewniając pełne zaangażowanie i profesjonalne podejście na każdym
            etapie terapii.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-10">
            <article className="">
              <Image
                alt=""
                className="rounded-xl"
                src="/service-1.avif"
                layout="responsive"
                width={100}
                height={100}
              />
              <h3 className="mt-6">
                IASTM - Innowacyjna terapia tkanek miękkich
              </h3>
              <p className="poppins text-base mt-2">
                Metoda IASTM skutecznie redukuje ból i przyspiesza regenerację.
              </p>
            </article>
            <article className="">
              <Image
                alt=""
                className="rounded-xl"
                src="/service-1.avif"
                layout="responsive"
                width={100}
                height={100}
              />
              <h3 className="mt-6">Terapia Kobido - relaks i odmłodzenie</h3>
              <p className="poppins text-base mt-2">
                Metoda IASTM skutecznie redukuje ból i przyspiesza regenerację.
              </p>
            </article>
            <article className="">
              <Image
                alt=""
                className="rounded-xl"
                src="/service-1.avif"
                layout="responsive"
                width={100}
                height={100}
              />
              <h3 className="mt-6">Drenaż pneumatyczny - ulga i regeneracja</h3>
              <p className="poppins text-base mt-2">
                Metoda IASTM skutecznie redukuje ból i przyspiesza regenerację.
              </p>
            </article>
          </div>
          <div className="mt-24 flex flex-col items-center">
            <CTAButton text="Umów się na wizytę już teraz" />
            <p className="max-w-[60rem] text-center mt-20">
              Jeśli nie znalazłeś/-aś usługi, której potrzebujesz, zapraszam do
              kontaktu telefonicznego. Chętnie udzielę dodatkowych informacji i
              pomogę znaleźć najlepsze rozwiązanie dopasowane do Twoich potrzeb.
            </p>
            <div className="mt-10">
              <a href="tel:+48785395887" className="flex gap-2 poppins">
                <Phone className="text-[#04534B]" />
                <span>+48 785 395 887</span>
              </a>
            </div>
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default ServicesSection;
