import React from "react";
import { motion } from "framer-motion";

const Purchase = () => {
  return (
    <section
      id="purchase"
      className="bg-gradient-to-b from-primary-100 to-primary-200 py-24 sm:py-32"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex flex-col justify-between bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-3xl font-bold text-primary-900 mb-2">
              Aylık Paket
            </h3>
            <a href="#contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary-900 text-primary-100 py-3 px-4 rounded-xl font-semibold hover:bg-primary-600 transition-colors duration-300"
              >
                Hemen Satın Al
              </motion.button>
            </a>
          </div>

          <div className="bg-primary-900 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative">
            <div className="absolute top-0 right-0 bg-primary-300 text-primary-900 text-sm font-semibold px-4 py-1 rounded-tr-2xl rounded-bl-2xl">
              Popüler
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">
              Başlangıç Paketi
            </h3>
            <a href="#contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white text-primary-600 py-3 px-4 rounded-xl font-semibold hover:bg-primary-100 transition-colors duration-300"
              >
                Hemen Satın Al
              </motion.button>
            </a>
          </div>

          <div className="flex flex-col justify-between bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-3xl font-bold text-primary-900 mb-2">
              Standart Paket
            </h3>
            <a href="#contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary-900 text-primary-100 py-3 px-4 rounded-xl font-semibold hover:bg-primary-600 transition-colors duration-300"
              >
                Hemen Satın Al
              </motion.button>
            </a>
          </div>

          <div className="flex flex-col justify-between bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-3xl font-bold text-primary-900 mb-2">
              Limitsiz Paket
            </h3>
            <a href="#contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary-900 text-primary-100 py-3 px-4 rounded-xl font-semibold hover:bg-primary-600 transition-colors duration-300"
              >
                Hemen Satın Al
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Purchase;
