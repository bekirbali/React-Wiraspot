"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import Modal from "../ui/Modal";
import DemoForm from "../ui/DemoForm";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      opacity: {
        value: 0.3,
      },
      size: {
        value: 3,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        outModes: {
          default: "out",
        },
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
      links: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.2,
        width: 1,
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
        onClick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 0.5,
          },
        },
        push: {
          quantity: 4,
        },
      },
    },
    background: {
      color: "transparent",
    },
    fullScreen: {
      enable: false,
      zIndex: 0,
    },
    detectRetina: true,
  };

  return (
    <div className="relative isolate overflow-hidden bg-primary-dark min-h-screen">
      {/* Background pattern */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-5" />
        <div className="absolute bottom-0 w-full overflow-hidden">
          <motion.div
            animate={{
              x: [0, -1440],
            }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex"
          >
            <Image
              src="/images/wave1.svg"
              alt="Wave Background"
              width={1440}
              height={320}
              className="w-[1440px] flex-shrink-0"
              priority
            />
            <Image
              src="/images/wave1.svg"
              alt="Wave Background"
              width={1440}
              height={320}
              className="w-[1440px] flex-shrink-0"
              priority
            />
            <Image
              src="/images/wave1.svg"
              alt="Wave Background"
              width={1440}
              height={320}
              className="w-[1440px] flex-shrink-0"
              priority
            />
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-5" />
        <div className="absolute bottom-0 w-full overflow-hidden">
          <motion.div
            animate={{
              x: [0, -2440],
            }}
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex"
          >
            <Image
              src="/images/wave1.svg"
              alt="Wave Background"
              width={1440}
              height={320}
              className="w-[1440px] flex-shrink-0"
              priority
            />
            <Image
              src="/images/wave1.svg"
              alt="Wave Background"
              width={1440}
              height={320}
              className="w-[1440px] flex-shrink-0"
              priority
            />
            <Image
              src="/images/wave1.svg"
              alt="Wave Background"
              width={1440}
              height={320}
              className="w-[1440px] flex-shrink-0"
              priority
            />
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <Particles
          className="absolute inset-0 h-[750px]"
          init={particlesInit}
          options={particlesOptions}
        />
        <motion.div
          className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="mt-20 md:mt-10 text-4xl text-center lg:text-left font-bold tracking-tight text-white sm:text-6xl !pl-0 !ml-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            KVKK UYUMLU YASAL 5651 LOGLAMA
          </motion.h1>
          <motion.p
            className="mt-6 text-lg leading-8 text-gray-300 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Yasa gereği internet hizmetini paylaştığınız kullanıcıların kayıt
            altına alınması gerekmektedir. Wiraspot mevzuata uygun alt yapı ve
            işgücü yatırıma gerek duymadan çözümler sunmaktadır.
          </motion.p>
          <motion.div
            className="mt-10 flex items-center gap-x-6 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="rounded-full bg-indigo-500 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 z-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Demo Talebi
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <div className="relative w-[600px] h-[600px]">
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

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <DemoForm onClose={() => setIsModalOpen(false)} />
      </Modal>
    </div>
  );
}
