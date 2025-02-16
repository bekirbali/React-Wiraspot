"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function DemoForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_MAIL_KEY
      )
      .then(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
        onClose();
      })
      .catch((err) => {
        console.error("Error sending email:", err);
      });
  };

  const handleChange = (e) => {
    if (e.target.name === "phone") {
      // Only allow numbers
      const value = e.target.value.replace(/\D/g, "");
      setFormData({
        ...formData,
        [e.target.name]: value,
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
    <div className="mt-2">
      <div className="text-center mb-6">
        <motion.h3
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-semibold leading-6 text-primary-900"
        >
          Demo Talebi
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-2 text-sm text-gray-500"
        >
          Size özel demo için lütfen formu doldurun.
        </motion.p>
      </div>

      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <div>
          <label
            htmlFor="demoName"
            className="block text-sm font-medium text-primary-900"
          >
            Ad Soyad
          </label>
          <input
            type="text"
            id="demoName"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-primary-900 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
          />
        </div>

        <div>
          <label
            htmlFor="demoEmail"
            className="block text-sm font-medium text-primary-900"
          >
            Email
          </label>
          <input
            type="demoEmail"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-primary-900 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
          />
        </div>

        <div>
          <label
            htmlFor="demoPhone"
            className="block text-sm font-medium text-primary-900"
          >
            Telefon
          </label>
          <input
            type="tel"
            id="demoPhone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            pattern="[0-9]*"
            inputMode="numeric"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-primary-900 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
          />
        </div>

        <div>
          <label
            htmlFor="demoCompany"
            className="block text-sm font-medium text-primary-900"
          >
            Firma Adı
          </label>
          <input
            type="text"
            id="demoCompany"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-primary-900 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
          />
        </div>

        <div>
          <label
            htmlFor="demoMessage"
            className="block text-sm font-medium text-primary-900"
          >
            Mesaj
          </label>
          <textarea
            id="demoMessage"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-primary-900 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
          />
        </div>

        <div className="mt-6 flex justify-end gap-x-3">
          <button
            type="button"
            onClick={onClose}
            className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            İptal
          </button>
          <button
            type="submit"
            className="rounded-md bg-primary-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
          >
            Gönder
          </button>
        </div>
      </motion.form>
    </div>
  );
}
