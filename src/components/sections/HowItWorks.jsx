"use client";

import { motion } from "framer-motion";
import {
  DevicePhoneMobileIcon,
  SignalIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

const steps = [
  {
    id: 1,
    name: "Order Your Device",
    description:
      "Choose your plan and receive your Wiraspot device within 2-3 business days.",
    icon: DevicePhoneMobileIcon,
  },
  {
    id: 2,
    name: "Quick Setup",
    description:
      "Power on your device and follow the simple setup instructions in our mobile app.",
    icon: SignalIcon,
  },
  {
    id: 3,
    name: "Connect Anywhere",
    description:
      "Enjoy high-speed internet on all your devices wherever you go.",
    icon: GlobeAltIcon,
  },
];

export default function HowItWorks() {
  return (
    <div className="bg-gradient-to-b from-primary-100 to-primary-200 py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            className="text-3xl font-bold tracking-tight text-primary-900 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            How It Works
          </motion.h2>
          <motion.p
            className="mt-6 text-lg leading-8 text-primary-700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Get started with our service in three simple steps. We've made the
            process as easy as possible.
          </motion.p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {steps.map((step) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: step.id * 0.2, duration: 0.8 }}
                className="flex flex-col items-center text-center bg-white/50 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/70 transition-colors"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-600 shadow-lg shadow-primary-400/20"
                >
                  <step.icon
                    className="h-8 w-8 text-white"
                    aria-hidden="true"
                  />
                </motion.div>
                <dt className="text-xl font-semibold leading-7 text-primary-900">
                  <div className="mb-2 text-primary-600">Step {step.id}</div>
                  {step.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-primary-700">
                  <p className="flex-auto">{step.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>

        <motion.div
          className="relative mt-16 sm:mt-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="relative flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-x-2 rounded-full bg-primary-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-400/20 hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-colors"
            >
              Get Started Now
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          className="mt-16 rounded-2xl bg-white/70 backdrop-blur-sm p-8 sm:mt-24 sm:p-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div id="faq" className="mx-auto max-w-2xl lg:mx-0">
            <h3 className="text-2xl font-bold tracking-tight text-primary-900">
              Frequently Asked Questions
            </h3>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="bg-white/50 p-6 rounded-xl">
                <h4 className="text-base font-semibold leading-7 text-primary-900">
                  Do I need technical knowledge?
                </h4>
                <p className="mt-2 text-base leading-7 text-primary-700">
                  Not at all! Our device is designed for easy setup with clear
                  instructions in our mobile app.
                </p>
              </div>
              <div className="bg-white/50 p-6 rounded-xl">
                <h4 className="text-base font-semibold leading-7 text-primary-900">
                  How fast is the connection?
                </h4>
                <p className="mt-2 text-base leading-7 text-primary-700">
                  Our service provides speeds up to 1Gbps, depending on your
                  location and plan.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
