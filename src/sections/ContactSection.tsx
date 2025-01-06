import ContainerLayout from "@/layouts/ContainerLayout";
import Image from "next/image";
import React from "react";
import { Facebook, InstagramIcon, Instagram } from "lucide-react";
import CTAButton from "@/components/CTAButton";

const ContactSection = () => {
  return (
    <section className="bg-[#073833] text-white py-20">
      <ContainerLayout>
        <div>
          <h2 className="mb-6">Kontakt</h2>
          <div className="poppins text-lg">Fizjoterapia Patrycja Wajda</div>
          <div className="poppins flex items-center gap-2 text-lg">
            Adres: <address>Rynek 4, 38-420 Korczyna</address>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row mt-10">
          <div className="flex-1 lg:pr-20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2579.7653424483874!2d21.810584799999994!3d49.715219299999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473c45d830dcac65%3A0xb633519d09e8d52f!2sFizjoterapia%20Patrycja%20Wajda!5e0!3m2!1spl!2spl!4v1736199082359!5m2!1spl!2spl"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl"
            ></iframe>
          </div>
          <div className="basis-1/3 max-lg:mt-10 min-h-full flex flex-col ">
            <div className="flex items-center gap-4">
              <Image
                alt=""
                src="/avatar.avif"
                className="!w-20 !h-20 rounded-full"
                layout="responsive"
                width={80}
                height={80}
              />
              <div className="poppins">
                <p>mgr. Patrycja Wajda</p>
                <a href="tel:+48785395887" className="underline">
                  +48 785 395 887
                </a>
              </div>
            </div>
            <div className="mt-10 flex gap-4">
              <a
                href="https://www.facebook.com/fizjoterapia.wajda"
                target="_blank"
              >
                <Facebook className="text-white" />
              </a>
              <a
                href="https://www.instagram.com/fizjoterapia.wajda/"
                target="_blank"
              >
                <Instagram className="text-white" />
              </a>
            </div>
            <div className="mt-auto flex max-lg:mt-10">
              <CTAButton text="Znajdź termin" />
            </div>
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default ContactSection;
