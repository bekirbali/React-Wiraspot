import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

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

        <div className="flex flex-col gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col md:flex-row gap-8"
          >
            <div className="md:w-1/3">
              <h3 className="text-2xl font-bold text-primary-900 mb-2">
                Aylık Paket
              </h3>
              <div className="text-4xl font-bold text-primary-900 mb-4">
                ₺599<span className="text-lg font-normal">/ay</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-primary-500 transition-colors duration-300"
              >
                Hemen Satın Al
              </motion.button>
            </div>
            <div className="md:w-2/3">
              <h4 className="font-semibold text-primary-900 mb-4">
                Paket Özellikleri:
              </h4>
              <div className="flex gap-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-primary-600 w-5 h-5" />
                    <span>5651 Loglama</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-primary-600 w-5 h-5" />
                    <span>Reklam Sistemi</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-primary-600 w-5 h-5" />
                    <span>Filtreleme Sistemi</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-primary-600 w-5 h-5" />
                    <span>Toplu SMS Gönderimi</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-primary-600 w-5 h-5" />
                    <span>İnternet Limitlendirme</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-primary-600 w-5 h-5" />
                    <span>5 Farklı Yöntem ile Kullanıcı Girişi</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-primary-600 w-5 h-5" />
                    <span>Toplam ve Kullanıcı Bazlı Trafik Raporlama</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-primary-600 w-5 h-5" />
                    <span>Kişileştirilmiş Karşılama Ekranı</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="bg-primary-900 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col md:flex-row gap-8 relative"
          >
            <div className="absolute top-0 right-0 bg-primary-300 text-primary-900 text-sm font-semibold px-4 py-1 rounded-tr-2xl rounded-bl-2xl">
              Popüler
            </div>
            <div className="md:w-1/3">
              <h3 className="text-2xl font-bold text-white mb-2">
                Başlangıç Paketi
              </h3>
              <div className="text-4xl font-bold text-white mb-4">
                ₺2500<span className="text-lg font-normal">/yıl</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white text-primary-900 py-3 px-4 rounded-xl font-semibold hover:bg-primary-100 transition-colors duration-300"
              >
                Hemen Satın Al
              </motion.button>
            </div>
            <div className="md:w-2/3">
              <h4 className="font-semibold text-white mb-4">
                Paket Özellikleri:
              </h4>
              <div className="flex gap-4">
                <ul className="space-y-3 text-primary-100">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-primary-300 w-5 h-5" />
                    <span>5651 Loglama</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-primary-300 w-5 h-5" />
                    <span>Reklam Sistemi</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-primary-300 w-5 h-5" />
                    <span>Filtreleme Sistemi</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-primary-300 w-5 h-5" />
                    <span>Toplu SMS Gönderimi</span>
                  </li>
                </ul>
                <ul className="space-y-3 text-primary-100">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-primary-300 w-5 h-5" />
                    <span>İnternet Limitlendirme</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-primary-300 w-5 h-5" />
                    <span>5 Farklı Yöntem ile Kullanıcı Girişi</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-primary-300 w-5 h-5" />
                    <span>Toplam ve Kullanıcı Bazlı Trafik Raporlama</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-primary-300 w-5 h-5" />
                    <span>Kişileştirilmiş Karşılama Ekranı</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col md:flex-row gap-8"
          >
            <div className="md:w-1/3">
              <h3 className="text-2xl font-bold text-primary-900 mb-2">
                Standart Paket
              </h3>
              <div className="text-4xl font-bold text-primary-900 mb-4">
                ₺5000<span className="text-lg font-normal">/yıl</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-primary-500 transition-colors duration-300"
              >
                Hemen Satın Al
              </motion.button>
            </div>
            <div className="md:w-2/3">
              <h4 className="font-semibold text-primary-900 mb-4">
                Paket Özellikleri:
              </h4>
              <div className="flex gap-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-primary-600 w-5 h-5" />
                    <span>5651 Loglama</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-primary-600 w-5 h-5" />
                    <span>Reklam Sistemi</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-primary-600 w-5 h-5" />
                    <span>Filtreleme Sistemi</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-primary-600 w-5 h-5" />
                    <span>Toplu SMS Gönderimi</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-primary-600 w-5 h-5" />
                    <span>İnternet Limitlendirme</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-primary-600 w-5 h-5" />
                    <span>5 Farklı Yöntem ile Kullanıcı Girişi</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-primary-600 w-5 h-5" />
                    <span>Toplam ve Kullanıcı Bazlı Trafik Raporlama</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-primary-600 w-5 h-5" />
                    <span>Kişileştirilmiş Karşılama Ekranı</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col md:flex-row gap-8"
          >
            <div className="md:w-1/3">
              <h3 className="text-2xl font-bold text-primary-900 mb-2">
                Limitsiz Paket
              </h3>
              <div className="text-4xl font-bold text-primary-900 mb-4">
                ₺7000<span className="text-lg font-normal">/yıl</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-primary-500 transition-colors duration-300"
              >
                Hemen Satın Al
              </motion.button>
            </div>
            <div className="md:w-2/3">
              <h4 className="font-semibold text-primary-900 mb-4">
                Paket Özellikleri:
              </h4>
              <div className="flex gap-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-primary-600 w-5 h-5" />
                    <span>5651 Loglama</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-primary-600 w-5 h-5" />
                    <span>Reklam Sistemi</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-primary-600 w-5 h-5" />
                    <span>Filtreleme Sistemi</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-primary-600 w-5 h-5" />
                    <span>Toplu SMS Gönderimi</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-primary-600 w-5 h-5" />
                    <span>İnternet Limitlendirme</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-primary-600 w-5 h-5" />
                    <span>5 Farklı Yöntem ile Kullanıcı Girişi</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-primary-600 w-5 h-5" />
                    <span>Toplam ve Kullanıcı Bazlı Trafik Raporlama</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-primary-600 w-5 h-5" />
                    <span>Kişileştirilmiş Karşılama Ekranı</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Purchase;
