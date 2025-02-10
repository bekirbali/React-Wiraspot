"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";

export default function Contact() {
  const [formStatus, setFormStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("submitting");
    setFieldErrors({});
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get("first-name"),
      lastName: formData.get("last-name"),
      email: formData.get("email"),
      phoneNumber: formData.get("phone-number"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        if (response.status === 400 && result.errors) {
          const errors = result.errors.reduce((acc, error) => {
            acc[error.field] = error.message;
            return acc;
          }, {});
          setFieldErrors(errors);
          setFormStatus("error");
          setErrorMessage("Please correct the errors below.");
        } else {
          throw new Error(result.message || "Failed to submit form");
        }
        return;
      }

      setFormStatus("success");
      e.currentTarget.reset();
    } catch (error) {
      setFormStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  };

  const getFieldError = (fieldName) => {
    const key = fieldName.replace(/-/g, "");
    return fieldErrors[key] || "";
  };

  return (
    <div
      id="contact"
      className="relative isolate bg-primary-100 py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <motion.div
          className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-primary-200 ring-1 ring-primary-900/10 lg:w-1/2">
              <svg
                className="absolute inset-0 h-full w-full stroke-primary-300 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width={200}
                    height={200}
                    x="100%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth={0} fill="white" />
                <svg
                  x="100%"
                  y={-1}
                  className="overflow-visible fill-primary-200"
                >
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                  fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-primary-900">
              Get in touch
            </h2>
            <p className="mt-6 text-lg leading-8 text-primary-600">
              Have questions about our hotspot service? We're here to help.
              Contact us through any of these channels or fill out the form.
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-primary-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <MapPinIcon
                    className="h-7 w-6 text-primary-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  123 Innovation Drive
                  <br />
                  Tech City, TC 12345
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon
                    className="h-7 w-6 text-primary-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a
                    className="hover:text-primary-900"
                    href="tel:+1 (555) 234-5678"
                  >
                    +1 (555) 234-5678
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon
                    className="h-7 w-6 text-primary-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a
                    className="hover:text-primary-900"
                    href="mailto:support@wiraspot.com"
                  >
                    support@wiraspot.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </motion.div>
        <motion.form
          onSubmit={handleSubmit}
          className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <AnimatePresence mode="wait">
              {formStatus === "success" && (
                <motion.div
                  className="mb-6 rounded-md bg-green-50 p-4"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <CheckCircleIcon
                        className="h-5 w-5 text-green-400"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-green-800">
                        Thank you for your message. We'll be in touch soon!
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {formStatus === "error" && errorMessage && (
                <motion.div
                  className="mb-6 rounded-md bg-red-50 p-4"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <XCircleIcon
                        className="h-5 w-5 text-red-400"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-red-800">
                        {errorMessage}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ${
                      getFieldError("first-name")
                        ? "ring-red-300"
                        : "ring-gray-300"
                    } placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                  />
                  {getFieldError("first-name") && (
                    <p className="mt-2 text-sm text-red-600">
                      {getFieldError("first-name")}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ${
                      getFieldError("last-name")
                        ? "ring-red-300"
                        : "ring-gray-300"
                    } placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                  />
                  {getFieldError("last-name") && (
                    <p className="mt-2 text-sm text-red-600">
                      {getFieldError("last-name")}
                    </p>
                  )}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ${
                      getFieldError("email") ? "ring-red-300" : "ring-gray-300"
                    } placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                  />
                  {getFieldError("email") && (
                    <p className="mt-2 text-sm text-red-600">
                      {getFieldError("email")}
                    </p>
                  )}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Phone number
                </label>
                <div className="mt-2.5">
                  <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ${
                      getFieldError("phone-number")
                        ? "ring-red-300"
                        : "ring-gray-300"
                    } placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                  />
                  {getFieldError("phone-number") && (
                    <p className="mt-2 text-sm text-red-600">
                      {getFieldError("phone-number")}
                    </p>
                  )}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ${
                      getFieldError("message")
                        ? "ring-red-300"
                        : "ring-gray-300"
                    } placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                  />
                  {getFieldError("message") && (
                    <p className="mt-2 text-sm text-red-600">
                      {getFieldError("message")}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <motion.button
                type="submit"
                disabled={formStatus === "submitting"}
                className={`rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                  formStatus === "submitting"
                    ? "cursor-not-allowed opacity-60"
                    : ""
                }`}
                whileHover={{ scale: formStatus !== "submitting" ? 1.02 : 1 }}
                whileTap={{ scale: formStatus !== "submitting" ? 0.98 : 1 }}
              >
                {formStatus === "submitting" ? "Sending..." : "Send message"}
              </motion.button>
            </div>
          </div>
        </motion.form>
      </div>
    </div>
  );
}
