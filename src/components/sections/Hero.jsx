"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

// const socialIcons = [
//   { name: "wordpress", color: "#21759b" },
//   { name: "youtube", color: "#FF0000" },
//   { name: "dropbox", color: "#0061FF" },
//   { name: "facebook", color: "#1877F2" },
//   { name: "instagram", color: "#E4405F" },
//   { name: "linkedin", color: "#0A66C2" },
//   { name: "android", color: "#3DDC84" },
//   { name: "behance", color: "#1769FF" },
//   { name: "whatsapp", color: "#25D366" },
//   { name: "apple", color: "#000000" },
//   { name: "wifi", color: "#4285F4" },
//   { name: "windows", color: "#00A4EF" },
//   { name: "yahoo", color: "#6001D2" },
//   { name: "skype", color: "#00AFF0" },
//   { name: "pinterest", color: "#E60023" },
// ];

export default function Hero() {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <div className="relative isolate overflow-hidden bg-primary-dark min-h-screen">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5" />
        <div className="absolute bottom-0 w-full">
          <svg viewBox="0 0 1440 320" className="w-full">
            <path
              fill="#3B2882"
              fillOpacity="0.8"
              d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <motion.div
          className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            KVKK UYUMLU YASAL 5651 LOGLAMA
          </motion.h1>
          <motion.p
            className="mt-6 text-lg leading-8 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Yasa gereği internet hizmetini paylaştığınız kullanıcıların kayıt
            altına alınması gerekmektedir. Wiraspot mevzuata uygun alt yapı ve
            işgücü yatırıma gerek duymadan çözümler sunmaktadır.
          </motion.p>
          <motion.div
            className="mt-10 flex items-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.a
              href="#contact"
              className="rounded-full bg-indigo-500 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Demo Talebi
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <div className="relative w-[600px] h-[600px]">
            {/* {socialIcons.map((icon, index) => {
              const angle =
                (index * (360 / socialIcons.length) * Math.PI) / 180;
              const radius = 250; // Adjust this value to change the circle size
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.div
                  key={icon.name}
                  className="absolute"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: x + radius - 30, // Center adjustment
                    y: y + radius - 30, // Center adjustment
                  }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                >
                  <div
                    className={`w-[60px] h-[60px] rounded-full bg-white shadow-lg flex items-center justify-center`}
                  >
                    <i
                      className={`fab fa-${icon.name} text-2xl`}
                      style={{ color: icon.color }}
                    />
                  </div>
                </motion.div>
              );
            })} */}
            {/* <Image
              src="/images/hotspot.jpg"
              alt="Hero Image"
              width={600}
              height={600}
              className="rounded-full"
            /> */}
            {/* <Image
              src="/images/hotspot11.jpg"
              alt="Hero Image"
              width={600}
              height={600}
              className="rounded-full"
            /> */}
            <Image
              src="/images/hotspot22.png"
              alt="Hero Image"
              width={600}
              height={600}
              className="rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
