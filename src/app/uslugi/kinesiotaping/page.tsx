import CTAButton from "@/components/CTAButton";
import ContainerLayout from "@/layouts/ContainerLayout";
import ContactSection from "@/sections/ContactSection";
import { Phone } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Kinesiotaping – wsparcie w regeneracji i leczeniu bólu | Korczyna, Krosno",
  description:
    "Profesjonalny kinesiotaping. Skuteczne wsparcie w leczeniu bólu kręgosłupa, obrzęków i przeciążeń mięśniowych. Umów wizytę!",
  keywords:
    "kinesiotaping, taśmy terapeutyczne, leczenie bólu, terapia kręgosłupa, regeneracja mięśni, fizjoterapia Krosno, fizjoterapia Korczyna",
};

export default function Page() {
  return (
    <main className="pt-32">
      <ContainerLayout>
        <div className="max-w-4xl mx-auto my-20">
          <h1 className="max-lg:text-2xl">
            Kinesiotaping – wsparcie w regeneracji i leczeniu bólu
          </h1>
          <div className="mt-10">
            <div className="bg-[#c4f692] text-[#073833] w-max px-4 py-2 rounded-full">
              Czas trwania: 60minut
            </div>
          </div>
          <Image
            alt="Wizyta fizjoterapeutyczna - Fizjoterapia Patrycja Wajda"
            src="/taping.avif"
            width={1000}
            height={1000}
            className="w-full h-auto rounded-2xl my-14"
          />
          <p className="my-10">
            Kinesiotaping to nowoczesna metoda terapeutyczna, która polega na
            aplikacji elastycznych taśm na skórę. Dzięki odpowiedniemu
            naklejeniu taśmy wspierają naturalne procesy regeneracji organizmu,
            poprawiają krążenie krwi i limfy oraz zmniejszają napięcia w
            mięśniach i stawach. Ta technika jest całkowicie bezbolesna i nie
            ogranicza ruchomości, co sprawia, że jest doskonałym rozwiązaniem
            zarówno dla sportowców, jak i osób z przewlekłymi problemami
            bólowymi.
          </p>
          <p className="my-10">
            Kinesiotaping pomaga w leczeniu dolegliwości bólowych kręgosłupa,
            obrzęków limfatycznych oraz przeciążeń mięśniowo-szkieletowych.
            Taśmy stosuje się także w celu wspomagania gojenia po urazach oraz
            stabilizacji stawów. To skuteczna metoda, która wspiera proces
            rehabilitacji i poprawia komfort codziennego życia. Dzięki
            kinesiotapingowi możesz szybciej wrócić do pełnej sprawności.
          </p>
          <h2 className="mb-4 text-xl">
            Dolegliwości, w których pomaga kinesiotaping:
          </h2>
          <ul className="poppins list-disc list-inside">
            <li>Bóle kręgosłupa i sztywność mięśni</li>
            <li>Obrzęki limfatyczne</li>
            <li>Przeciążenia i urazy mięśni oraz stawów</li>
            <li>Korekcja postawy ciała</li>
            <li>Stany zapalne i obrzęki pourazowe</li>
            <li>Stabilizacja po zabiegach ortopedycznych</li>
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
