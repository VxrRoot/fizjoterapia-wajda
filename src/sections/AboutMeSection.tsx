"use client";
import { useState } from "react";
import ContainerLayout from "@/layouts/ContainerLayout";
import Image from "next/image";
import aboutMeImg from "../../public/omniee.webp";
import React from "react";
import { ChevronDown } from "lucide-react";

const AboutMeSection = () => {
  const [showAll, setShowAll] = useState(false);

  const courses = [
    { year: "2020", name: "IASTM" },
    { year: "2020", name: "Zastosowanie baniek w terapii" },
    { year: "2020", name: "Podstawy flossingu" },
    { year: "2021", name: "Liczne webinary i szkolenia online" },
    { year: "2022", name: "Terapia wisceralna" },
    { year: "2022", name: "Flossing w terapii i treningu" },
    {
      year: "2023",
      name: "Manualne techniki leczenia dyskopatii lędźwiowej w fazie ostrej",
    },
    { year: "2023", name: "Kurs instruktora ZUMBA Fitness, Kids i Kids Jr." },
    { year: "2023", name: "Stawy skroniowo-żuchwowe – diagnostyka i terapia" },
    { year: "2024", name: "Kobido Up + Facetaping" },
    { year: "2024", name: "Pinoterapia" },
    { year: "2024", name: "Terapia wisceralna" },
  ];

  // Początkowo wyświetlamy tylko 3 elementy
  const visibleCourses = showAll ? courses : courses.slice(0, 3);

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
              pracy z pacjentami. Specjalizuję się w terapii manualnej z
              zastosowaniem technik osteopatycznych, wisceralnych oraz
              nowoczesnych metod rehabilitacji, a także w analizie wpływu stresu
              na cały organizm. Dzięki różnorodnym technikom i indywidualnemu
              podejściu pomagam pacjentom wrócić do pełnej sprawności i poprawić
              jakość życia.
            </p>

            <ul className="mt-4" data-aos="fade-up" data-aos-delay="100">
              {visibleCourses.map((course, index) => (
                <li key={index}>
                  <strong>{course.year}:</strong> {course.name}
                </li>
              ))}
            </ul>

            {/* Przycisk "Pokaż więcej" */}
            <button
              onClick={() => setShowAll(!showAll)}
              className="mt-4    rounded-md transition duration-300 underline flex space-x-2"
            >
              <span>{showAll ? "Pokaż mniej" : "Pokaż wszystko"}</span>
              <ChevronDown
                className={`${showAll && "rotate-180"} transition-all`}
              />
            </button>

            <blockquote
              data-aos="fade-up"
              data-aos-delay="100"
              className="mt-6"
            >
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
              className="w-full rounded-xl"
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
