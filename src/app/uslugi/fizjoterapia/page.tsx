import CTAButton from "@/components/CTAButton";
import ContainerLayout from "@/layouts/ContainerLayout";
import ContactSection from "@/sections/ContactSection";
import { Phone } from "lucide-react";
import { Metadata } from "next";
import terapiaImg from "../../../../public/terapia.webp";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Wizyta fizjoterapeutyczna – diagnostyka i terapia bólu | Korczyna, Krosno",
  description:
    "Wizyta fizjoterapeutyczna w Korczynie. Profesjonalna diagnostyka i leczenie bólu pleców, stawów i urazów. Umów się na wizytę!",
  keywords:
    "wizyta fizjoterapeutyczna, diagnostyka bólu, terapia manualna, rehabilitacja pourazowa, fizjoterapia Krosno, fizjoterapia Korczyna",
};

export default function PhysiotherapyPage() {
  return (
    <main className="pt-32">
      <ContainerLayout>
        <div className="max-w-4xl mx-auto my-20">
          <h1 className="max-lg:text-2xl">
            Wizyta fizjoterapeutyczna – kompleksowa diagnostyka i terapia
          </h1>
          <div className="mt-10">
            <div className="bg-[#c4f692] text-[#073833] w-max px-4 py-2 rounded-full">
              Czas trwania: 60 minut
            </div>
          </div>
          <Image
            alt="Wizyta fizjoterapeutyczna - Fizjoterapia Patrycja Wajda"
            src={terapiaImg}
            width={1000}
            height={1000}
            className="w-full h-auto rounded-2xl my-14"
          />
          <p className="my-10">
            {" "}
            Wizyta fizjoterapeutyczna to kluczowy etap diagnostyki i terapii,
            który pozwala na precyzyjne określenie przyczyn problemów
            zdrowotnych oraz opracowanie indywidualnego planu leczenia. Podczas
            wizyty przeprowadzane są szczegółowy wywiad oraz badanie
            funkcjonalne, które pozwalają na ocenę stanu pacjenta. Na podstawie
            wyników dobierane są najskuteczniejsze metody terapeutyczne, takie
            jak terapia manualna, ćwiczenia korekcyjne, czy techniki
            relaksacyjne. Dzięki kompleksowemu podejściu wizyta
            fizjoterapeutyczna pomaga nie tylko w złagodzeniu objawów, ale
            również w trwałym wyeliminowaniu ich przyczyn.
          </p>
          <p className="my-10">
            {" "}
            Ta forma terapii jest szczególnie skuteczna w leczeniu bólu
            kręgosłupa, napięć mięśniowych, przeciążeń oraz urazów sportowych.
            Wizyta fizjoterapeutyczna to doskonały wybór dla osób z
            ograniczeniami ruchomości, problemami posturalnymi czy przewlekłymi
            dolegliwościami bólowymi. Regularne sesje fizjoterapeutyczne
            pomagają poprawić zakres ruchu, zmniejszyć dyskomfort oraz zwiększyć
            jakość życia pacjenta. Jeśli szukasz skutecznego rozwiązania swoich
            problemów zdrowotnych, fizjoterapia może być idealnym wyborem.
          </p>
          <h2 className="mb-4 text-xl">
            Kiedy warto skorzystać z wizyty fizjoterapeutycznej?
          </h2>
          <ul className="poppins list-disc list-inside">
            <li>Bóle kręgosłupa (szyjnego, piersiowego i lędźwiowego )</li>
            <li>Przepukliny i dyskopatie</li>
            <li>Przeciążenia mięśniowe i stawowe</li>
            <li>Migreny i napięciowe bóle głowy</li>
            <li>Rehabilitacja pourazowa i pooperacyjna</li>
            <li>Ograniczenia ruchomości stawów</li>
            <li>Problemy z postawą ciała</li>
          </ul>
          <div className="border-t border-[#073833] mt-10 pt-10">
            <h3 className="text-center">
              Zmagasz się z bólem? <br /> Umów się na terapię i poczuj ulgę!
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
