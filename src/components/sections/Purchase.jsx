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
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-primary-900 mb-4">Satın Al</h2>
          <p className="text-lg text-primary-600 max-w-2xl mx-auto">
            İhtiyacınıza en uygun paketi seçin ve hemen kullanmaya başlayın
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-primary-900/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <h3 className="text-2xl font-bold text-white mb-2">
              Başlangıç Paketi
            </h3>
            <p className="text-primary-200 mb-6">
              Bireysel kullanıcılar için ideal
            </p>
            <div className="text-4xl font-bold text-white mb-8">₺99/ay</div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-primary-400 text-white py-3 px-4 rounded-xl font-semibold hover:bg-primary-300 transition-colors duration-300"
            >
              Hemen Satın Al
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="bg-primary-600 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 transform scale-105 relative"
          >
            <div className="absolute top-0 right-0 bg-primary-300 text-primary-900 text-sm font-semibold px-4 py-1 rounded-tr-2xl rounded-bl-2xl">
              Popüler
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Pro Paket</h3>
            <p className="text-primary-100 mb-6">Küçük işletmeler için ideal</p>
            <div className="text-4xl font-bold text-white mb-8">₺199/ay</div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-white text-primary-600 py-3 px-4 rounded-xl font-semibold hover:bg-primary-100 transition-colors duration-300"
            >
              Hemen Satın Al
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-primary-900/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <h3 className="text-2xl font-bold text-white mb-2">
              Kurumsal Paket
            </h3>
            <p className="text-primary-200 mb-6">Büyük işletmeler için ideal</p>
            <div className="text-4xl font-bold text-white mb-8">₺399/ay</div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-primary-400 text-white py-3 px-4 rounded-xl font-semibold hover:bg-primary-300 transition-colors duration-300"
            >
              Hemen Satın Al
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Purchase;
