import ContainerLayout from "@/layouts/ContainerLayout";
import { Check } from "lucide-react";
import Image from "next/image";
import img1 from "../../public/pierwsza-wizyta.webp";
import img2 from "../../public/certyfikaty.webp";
import img3 from "../../public/gabine.webp";
import img4 from "../../public/oferta.webp";
import img5 from "../../public/drenaz.webp";
import img6 from "../../public/pacjent.webp";
import React from "react";

const items = [
  {
    id: 1,
    title: "Indywidualne podejście do każdego pacjenta",
    desc: "Każda osoba jest inna, dlatego każdą terapię dostosowuję do Twoich indywidualnych potrzeb i problemów zdrowotnych. Zawsze dbam o to, abyś czuł/a się zaopiekowany/a i wysłuchany/a.",
    img: img1,
  },
  {
    id: 2,
    title: "Wieloletnie doświadczenie i zaawansowane szkolenia",
    desc: "Pracuję jako fizjoterapeutka od ponad 5 lat, regularnie podnosząc kwalifikacje na kursach, takich jak terapia wisceralna, fala uderzeniowa i kinesiotaping, by oferować najskuteczniejsze metody leczenia.",
    img: img2,
  },
  {
    id: 3,
    title: "Holistyczne podejście do zdrowia",
    desc: "Nie skupiam się wyłącznie na objawach, ale analizuję całe ciało i przyczyny dolegliwości. Dzięki temu mogę skutecznie pomagać w leczeniu bólu, poprawie funkcjonowania oraz profilaktyce.",
    img: img3,
  },
  {
    id: 4,
    title: "Kompleksowa oferta terapeutyczna",
    desc: "W jednym miejscu znajdziesz szeroką gamę terapii – od masaży leczniczych, przez drenaż limfatyczny, po nowoczesne metody, takie jak flossing czy terapia IASTM. Wszystko po to, aby zapewnić Ci wszechstronną opiekę.",
    img: img4,
  },
  {
    id: 5,
    title: "Nowoczesny sprzęt i techniki pracy",
    desc: "Korzystam z wysokiej jakości sprzętu oraz innowacyjnych metod terapeutycznych, które gwarantują skuteczność i bezpieczeństwo zabiegów.",
    img: img5,
  },
  {
    id: 6,
    title: "Zaufanie i rekomendacje pacjentów",
    desc: "Współpracuję z wieloma pacjentami, którzy wracają do mnie i polecają moje usługi swoim bliskim. Ich zadowolenie to dla mnie najlepszy dowód skuteczności.",
    img: img6,
  },
];

const WhyWorkWithMe = () => {
  return (
    <section className="py-20">
      <ContainerLayout>
        <div>
          <span className="poppins mb-2 text-[#04534B] font-semibold">
            Dlaczego warto?
          </span>
          <h2 className="mb-4" data-aos="fade-up" data-aos-offset="200">
            Twoje zdrowie w najlepszych rękach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-20">
            {items.map((item, idx) => (
              <div
                className="relative aspect-square rounded-lg overflow-hidden h-full"
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <Image
                  alt=""
                  src={item.img}
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover object-center"
                />
                <div className="text-white p-6 bg-gradient-to-t from-[rgba(7,56,51,1)] to-[rgba(255,255,255,0.5)] absolute top-0 left-0 right-0 bottom-0 flex justify-end flex-col">
                  <h4 className="flex space-x-2 text-2xl mb-4 font-bold ">
                    {item.title}
                  </h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default WhyWorkWithMe;
