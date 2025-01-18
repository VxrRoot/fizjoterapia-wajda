import CTAButton from "@/components/CTAButton";
import ContainerLayout from "@/layouts/ContainerLayout";
import ContactSection from "@/sections/ContactSection";
import { Phone } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Terapia wisceralna – leczenie refluksu, bólu brzucha i napięć | Korczyna, Krosno",
  description:
    "Terapia wisceralna w Krośnie. Skuteczna metoda leczenia refluksu, zaparć i bólu brzucha. Zadbaj o zdrowie swoich narządów wewnętrznych!",
  keywords:
    "terapia wisceralna, leczenie refluksu, ból brzucha, zespół jelita drażliwego, fizjoterapia jamy brzuszne, fizjoterapia Krosno, fizjoterapia Korczyna",
};

export default function Page() {
  return (
    <main className="pt-32">
      <ContainerLayout>
        <div className="max-w-4xl mx-auto my-20">
          <h1 className="max-lg:text-2xl">
            Terapia wisceralna – zdrowie Twoich narządów wewnętrznych
          </h1>
          <div className="mt-10">
            <div className="bg-[#c4f692] text-[#073833] w-max px-4 py-2 rounded-full">
              Czas trwania: 60minut
            </div>
          </div>
          <Image
            alt="Wizyta fizjoterapeutyczna - Fizjoterapia Patrycja Wajda"
            src="/wisceralka.avif"
            width={1000}
            height={1000}
            className="w-full h-auto rounded-2xl my-14"
          />
          <p className="my-10">
            Terapia wisceralna to wyjątkowa metoda manualna, która skupia się na
            pracy z narządami wewnętrznymi oraz ich powiązaniami z układem
            ruchu, krążenia i nerwowym. Dzięki delikatnym technikom
            terapeutycznym, wykonywanym w obrębie jamy brzusznej, terapia
            wspomaga naturalne procesy regeneracyjne organizmu i łagodzi
            napięcia. Jest to holistyczne podejście do zdrowia, które pozwala
            skutecznie redukować dolegliwości bólowe i poprawia funkcjonowanie
            całego organizmu.
          </p>
          <p className="my-10">
            Terapia wisceralna jest szczególnie skuteczna w leczeniu problemów
            trawiennych, takich jak refluks, zaparcia czy wzdęcia. Dodatkowo
            pomaga przy przewlekłych napięciach mięśniowych, które mogą wpływać
            na bóle kręgosłupa lędźwiowego lub klatki piersiowej. Regularne
            sesje tej terapii poprawiają krążenie, wzmacniają układ
            odpornościowy oraz przynoszą ulgę w bólu. Jeśli szukasz metody,
            która łączy pracę z ciałem i narządami wewnętrznymi, terapia
            wisceralna będzie dla Ciebie idealnym wyborem.
          </p>
          <h2 className="mb-4 text-xl">
            Dolegliwości, w których pomaga terapia wisceralna:
          </h2>
          <ul className="poppins list-disc list-inside">
            <li>Refluks żołądkowy i problemy trawienne</li>
            <li>Zespół jelita drażliwego (IBS)</li>
            <li>Zaparcia, wzdęcia i bóle brzucha</li>
            <li>Bóle kręgosłupa związane z napięciem w jamie brzusznej</li>
            <li>Problemy z odpornością i ogólnym osłabieniem</li>
            <li>Przewlekły stres i napięcia w obrębie jamy brzusznej</li>
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
