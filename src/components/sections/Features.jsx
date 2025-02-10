"use client";

import { motion } from "framer-motion";
import {
  WifiIcon,
  GlobeAltIcon,
  BoltIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Lightning Fast Speeds",
    description:
      "Experience blazing-fast internet speeds up to 1Gbps, perfect for streaming, gaming, and remote work.",
    icon: BoltIcon,
  },
  {
    name: "Global Coverage",
    description:
      "Stay connected anywhere with our extensive network coverage across multiple countries and regions.",
    icon: GlobeAltIcon,
  },
  {
    name: "Reliable Connection",
    description:
      "Enjoy uninterrupted connectivity with our advanced network infrastructure and backup systems.",
    icon: WifiIcon,
  },
  {
    name: "Secure Network",
    description:
      "Your data is protected with enterprise-grade encryption and advanced security protocols.",
    icon: ShieldCheckIcon,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Features() {
  return (
    <div id="features" className="bg-primary-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-base font-semibold leading-7 text-primary">
            Everything you need
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-primary-900 sm:text-4xl">
            Powerful Features for Modern Connectivity
          </p>
          <p className="mt-6 text-lg leading-8 text-primary-600">
            Our hotspot service comes packed with features designed to provide
            you with the best possible internet experience.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                variants={item}
                className="flex flex-col"
              >
                <dt className="text-base font-semibold leading-7 text-primary-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-primary-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          className="mt-16 sm:mt-24 flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 bg-primary-200 rounded-2xl"></div>
            <div className="relative z-10 bg-white rounded-xl shadow-lg p-8">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">1Gbps</div>
                  <div className="mt-2 text-sm text-primary-600">Max Speed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">99.9%</div>
                  <div className="mt-2 text-sm text-primary-600">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">24/7</div>
                  <div className="mt-2 text-sm text-primary-600">Support</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
