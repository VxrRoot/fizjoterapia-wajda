import ContainerLayout from "@/layouts/ContainerLayout";
import Image from "next/image";
import img1 from "../../public/elektrostymulacja1.avif";
import React from "react";

const TreatmentProcessSection = () => {
  return (
    <section className="py-20">
      <ContainerLayout>
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="flex-1">
            <Image
              alt="Patrycja Wajda"
              src={img1}
              className=" w-full object-contain sticky top-36 rounded-xl"
            />
          </div>
          <div className="flex-1">
            <h2>Sprawdź proces terapii.</h2>
            <div className="mt-10">
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
            <div className="mt-10">
              <div className="flex items-center">
                <div className="bg-[#c4f692] poppins aspect-square w-16 h-16 rounded-full flex items-center justify-center text-2xl mr-4">
                  2
                </div>
                <h3>Indywidualna terapia manualna i narzędziowa</h3>
              </div>
              <p className="text-lg mt-4">
                Każda sesja to połączenie różnych technik terapeutycznych
                dostosowanych do aktualnych potrzeb pacjenta. Stosuję m.in.
                terapię manualną, terapię bańkami, flossing, kinesiotaping, falę
                uderzeniową oraz drenaż pneumatyczny. W razie potrzeby
                wprowadzam terapię wisceralną lub terapię stawów
                skroniowo-żuchwowych. Kluczowym elementem jest stała ocena
                postępów i modyfikacja planu terapii.
              </p>
            </div>
            <div className="mt-10">
              <div className="flex items-center">
                <div className="bg-[#c4f692] poppins w-16 h-16 aspect-square rounded-full flex items-center justify-center text-2xl mr-4">
                  3
                </div>
                <h3>Utrwalenie efektów i profilaktyka</h3>
              </div>
              <p className="text-lg mt-4">
                Aby zapewnić długotrwałe efekty, edukuję pacjentów w zakresie
                ćwiczeń domowych oraz właściwej postawy ciała. Proponuję zestawy
                ćwiczeń, które pomagają wzmocnić efekty terapii i zapobiegać
                nawrotom dolegliwości. W razie potrzeby oferuję masaż
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
