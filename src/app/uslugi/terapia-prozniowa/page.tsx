import CTAButton from "@/components/CTAButton";
import ContainerLayout from "@/layouts/ContainerLayout";
import ContactSection from "@/sections/ContactSection";
import { Phone } from "lucide-react";
import { Metadata } from "next";
import terapiaImg from "../../../../public/banki.webp";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Terapia Próżniowa – regeneracja i poprawa krążenia | Korczyna, Krosno",
  description:
    "Profesjonalna terapia próżniowa – poprawa krążenia, redukcja napięcia mięśniowego i regeneracja organizmu. Umów wizytę w Korczynie lub Krośnie!",
  keywords:
    "terapia próżniowa, masaż podciśnieniowy, poprawa krążenia, regeneracja organizmu, fizjoterapia Krosno, fizjoterapia Korczyna",
};

export default function Page() {
  return (
    <main className="pt-32">
      <ContainerLayout>
        <div className="max-w-4xl mx-auto my-20">
          <h1 className="max-lg:text-2xl">
            Terapia Próżniowa – skuteczna metoda poprawy krążenia i regeneracji
          </h1>
          <div className="mt-10">
            {/* <div className="bg-[#c4f692] text-[#073833] w-max px-4 py-2 rounded-full">
              Czas trwania: 45 minut
            </div> */}
          </div>
          <Image
            alt="Terapia Próżniowa - Fizjoterapia Patrycja Wajda"
            src={terapiaImg}
            width={1000}
            height={1000}
            className="w-full h-auto rounded-2xl my-14"
          />
          <p className="my-10">
            Terapia próżniowa to nowoczesna metoda regeneracji i poprawy
            krążenia, polegająca na wykorzystaniu podciśnienia do stymulacji
            skóry i głębszych tkanek. Jest to skuteczna technika stosowana w
            fizjoterapii, pomagająca w redukcji obrzęków, napięcia mięśniowego i
            poprawie elastyczności skóry. Działa na zasadzie masażu
            podciśnieniowego, który pobudza układ limfatyczny i wspomaga
            usuwanie toksyn z organizmu.
          </p>
          <p className="my-10">
            Dzięki terapii próżniowej możesz osiągnąć lepszą regenerację po
            wysiłku fizycznym, redukcję cellulitu oraz przyspieszenie procesów
            gojenia. To idealne rozwiązanie zarówno dla sportowców, jak i osób
            borykających się z przewlekłymi dolegliwościami bólowymi. Terapia
            doskonale sprawdza się także w redukcji napięcia mięśniowego,
            poprawie jędrności skóry i zwiększeniu elastyczności tkanek.
          </p>
          <h2 className="mb-4 text-xl">Korzyści terapii próżniowej:</h2>
          <ul className="poppins list-disc list-inside">
            <li>Poprawa krążenia krwi i limfy</li>
            <li>Zmniejszenie obrzęków i zastojów płynów</li>
            <li>Redukcja napięcia mięśniowego</li>
            <li>Przyspieszenie regeneracji po urazach</li>
            <li>Eliminacja toksyn z organizmu</li>
            <li>Poprawa elastyczności skóry i redukcja cellulitu</li>
          </ul>
          <div className="border-t border-[#073833] mt-10 pt-10">
            <h3 className="text-center">
              Chcesz poprawić swoje samopoczucie i zredukować napięcie?
              <br /> Umów się na terapię próżniową!
            </h3>
            <div className="flex flex-col lg:flex-row max-lg:space-y-4 lg:space-x-8 items-center justify-center mt-10">
              <CTAButton
                className="!text-base !py-3"
                text="Zarezerwuj termin"
              />
              <span>lub</span>
              <a href="tel:+48785395887" className="flex gap-2 poppins ">
                <Phone className="text-[#04534B]" />
                <span>+48 785 395 887</span>
              </a>
            </div>
          </div>
        </div>
      </ContainerLayout>
      <ContactSection />
    </main>
  );
}
