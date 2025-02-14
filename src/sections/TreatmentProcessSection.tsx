import ContainerLayout from "@/layouts/ContainerLayout";
import Image from "next/image";
import img from "../../public/elektrostymulacja1.webp";
import React from "react";

const TreatmentProcessSection = () => {
  return (
    <section className="py-20" id="o-terapii">
      <ContainerLayout>
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="flex-1" data-aos="fade-up">
            <Image
              alt="Patrycja Wajda"
              src={img}
              className=" w-full object-contain sticky top-36 rounded-xl"
              layout="responsive"
              width={1000}
              height={1000}
            />
          </div>
          <div className="flex-1">
            <h2 data-aos="fade-up" data-aos-delay="100">
              Sprawdź proces terapii.
            </h2>
            <div className="mt-10" data-aos="fade-left" data-aos-delay="100">
              <div className="flex items-center">
                <div className="bg-[#c4f692] poppins w-16 aspect-square h-16 rounded-full flex items-center justify-center text-2xl mr-4">
                  1
                </div>
                <h3>Konsultacja i diagnoza</h3>
              </div>
              <p className="text-lg mt-4">
                Podczas pierwszej wizyty przeprowadzam szczegółowy wywiad oraz
                badanie funkcjonalne, aby poznać przyczynę dolegliwości.
                Analizuję historię zdrowia, dotychczasowe leczenie i codzienne
                nawyki. Dzięki temu mogę dokładnie określić obszary wymagające
                terapii oraz zaplanować indywidualny program rehabilitacji.
              </p>
            </div>
            <div className="mt-10" data-aos="fade-left" data-aos-delay="100">
              <div className="flex items-center">
                <div className="bg-[#c4f692] poppins aspect-square w-16 h-16 rounded-full flex items-center justify-center text-2xl mr-4">
                  2
                </div>
                <h3>Indywidualna terapia manualna i&nbsp;narzędziowa</h3>
              </div>
              <p className="text-lg mt-4">
                Każda sesja to połączenie różnorodnych technik terapeutycznych
                dostosowanych do aktualnych potrzeb pacjenta. Stosuję m.in.
                terapię manualną, terapię próżniową, flossing, kinesiotaping,
                falę uderzeniową oraz drenaż pneumatyczny. W razie potrzeby
                wprowadzam terapię wisceralną lub terapię stawów
                skroniowo-żuchwowych. Kluczowym elementem jest stała ocena
                postępów i modyfikacja planu terapii.
              </p>
            </div>
            <div className="mt-10" data-aos="fade-left" data-aos-delay="100">
              <div className="flex items-center">
                <div className="bg-[#c4f692] poppins w-16 h-16 aspect-square rounded-full flex items-center justify-center text-2xl mr-4">
                  3
                </div>
                <h3>Utrwalenie efektów i&nbsp;profilaktyka</h3>
              </div>
              <p className="text-lg mt-4">
                Aby zapewnić długotrwałe efekty, edukuję pacjentów w zakresie
                aktywności fizycznej oraz właściwej postawy ciała. Proponuję
                zestawy ćwiczeń, które pomagają wzmocnić postępy terapii i
                zapobiegać nawrotom dolegliwości. W razie potrzeby oferuję masaż
                relaksacyjny lub leczniczy, który dodatkowo wspiera regenerację
                organizmu.
              </p>
            </div>
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default TreatmentProcessSection;
