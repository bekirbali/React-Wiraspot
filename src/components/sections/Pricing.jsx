"use client";

import { motion } from "framer-motion";
import { CheckIcon } from "@heroicons/react/20/solid";

const tiers = [
  {
    name: "Basic",
    id: "tier-basic",
    href: "#contact",
    priceMonthly: "$29",
    description: "Perfect for individual users and small households.",
    features: [
      "Up to 100Mbps download speed",
      "Connect up to 5 devices",
      "24/7 email support",
      "Basic security features",
      "Monthly data cap: 500GB",
    ],
    featured: false,
  },
  {
    name: "Pro",
    id: "tier-pro",
    href: "#contact",
    priceMonthly: "$49",
    description: "Ideal for remote workers and streaming enthusiasts.",
    features: [
      "Up to 500Mbps download speed",
      "Connect up to 10 devices",
      "24/7 priority support",
      "Advanced security features",
      "Monthly data cap: 2TB",
      "Static IP address",
      "Guest network access",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    href: "#contact",
    priceMonthly: "$99",
    description: "For businesses and power users who need the best.",
    features: [
      "Up to 1Gbps download speed",
      "Unlimited device connections",
      "24/7 dedicated support",
      "Enterprise-grade security",
      "Unlimited data",
      "Multiple static IPs",
      "Advanced network management",
      "Custom configuration options",
    ],
    featured: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Pricing() {
  return (
    <div
      id="pricing"
      className="bg-gradient-to-b from-primary-300 to-primary-400 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold leading-7 text-primary-100">
              Pricing
            </h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Choose your perfect plan
            </p>
          </motion.div>
          <motion.p
            className="mt-6 text-lg leading-8 text-primary-100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Select a plan that suits your needs. All plans include our
            high-quality hotspot device.
          </motion.p>
        </div>

        <motion.div
          className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 gap-x-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {tiers.map((tier, tierIdx) => (
            <motion.div
              key={tier.id}
              className={classNames(
                tier.featured
                  ? "bg-white/20 ring-2 ring-primary-200"
                  : "bg-white/10 ring-1 ring-white/20",
                tierIdx === 0 ? "lg:rounded-l-2xl" : "",
                tierIdx === tiers.length - 1 ? "lg:rounded-r-2xl" : "",
                "rounded-2xl p-8 xl:p-10 backdrop-blur-sm relative hover:z-10"
              )}
              whileHover={{
                scale: tier.featured ? 1.05 : 1.02,
                transition: { duration: 0.2 },
              }}
              initial={{ scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3
                  id={tier.id}
                  className={classNames(
                    tier.featured ? "text-white" : "text-primary-100",
                    "text-lg font-semibold leading-8"
                  )}
                >
                  {tier.name}
                </h3>
                {tier.featured && (
                  <p className="rounded-full bg-primary-200 px-2.5 py-1 text-xs font-semibold leading-5 text-primary-900">
                    Most popular
                  </p>
                )}
              </div>
              <p className="mt-4 text-sm leading-6 text-primary-200">
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-white">
                  {tier.priceMonthly}
                </span>
                <span className="text-sm font-semibold leading-6 text-primary-200">
                  /month
                </span>
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.featured
                    ? "bg-primary-100 text-primary-900 hover:bg-primary-200"
                    : "bg-white/10 text-white hover:bg-white/20",
                  "mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
                )}
              >
                Get started
              </a>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-primary-200"
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-primary-100"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p className="text-base text-primary-100">
            All plans include a 30-day money-back guarantee and free device
            shipping.
            <br />
            Need a custom plan?{" "}
            <a
              href="#contact"
              className="text-white hover:text-primary-200 underline"
            >
              Contact us
            </a>{" "}
            for enterprise solutions.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
