"use client";

import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const benefits = [
  {
    title: "Work From Anywhere",
    description:
      "Stay productive with reliable internet access whether you're at home, in a café, or traveling.",
  },
  {
    title: "Stream Without Buffering",
    description:
      "Enjoy your favorite content in 4K without interruptions or loading screens.",
  },
  {
    title: "Gaming-Grade Connection",
    description:
      "Experience low-latency gaming with minimal ping and zero lag spikes.",
  },
  {
    title: "Multiple Device Support",
    description:
      "Connect all your devices simultaneously without compromising speed.",
  },
  {
    title: "Easy Setup",
    description:
      "Get started in minutes with our plug-and-play hotspot device.",
  },
  {
    title: "Cost-Effective",
    description: "Save money with our competitive pricing and no hidden fees.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Benefits() {
  return (
    <div id="benefits" className="bg-primary-400 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-base font-semibold leading-7 text-primary">
              Everything you gain
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-primary-900 sm:text-4xl">
              All the benefits you need
            </p>
            <p className="mt-6 text-base leading-7 text-primary-700">
              Discover why thousands of users choose our hotspot service for
              their connectivity needs.
            </p>

            <motion.div
              className="mt-10"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            ></motion.div>
          </motion.div>

          <motion.dl
            className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-primary-700 sm:grid-cols-2 lg:gap-y-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={itemVariants}
                className="relative pl-9 p-4 rounded-lg transition-colors"
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  transition: { duration: 0.2 },
                }}
              >
                <dt className="font-semibold text-primary-900">
                  <CheckCircleIcon
                    className="absolute left-0 top-1 h-5 w-5 text-primary"
                    aria-hidden="true"
                  />
                  {benefit.title}
                </dt>
                <dd className="mt-2">{benefit.description}</dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="relative rounded-2xl bg-primary px-6 py-8 sm:px-12 sm:py-16">
            <div className="absolute inset-0 bg-primary-600/90 mix-blend-multiply" />
            <div className="relative mx-auto max-w-2xl lg:mx-0">
              <figure>
                <blockquote className="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                  <p>
                    "Switching to Wiraspot was a game-changer for my remote work
                    setup. The speed and reliability are unmatched."
                  </p>
                </blockquote>
                <figcaption className="mt-8 text-base">
                  <div className="font-semibold text-white">Sarah Thompson</div>
                  <div className="mt-1 text-primary-100">Digital Nomad</div>
                </figcaption>
              </figure>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
