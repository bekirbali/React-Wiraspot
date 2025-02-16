import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Cihazınızın Wi-Fi özelliğini açın!",
    description:
      "Kablosuz ağlardan Wiraspot ağını seçin, cihazınızda yüklü web tarayıcınız ile otomatik olarak karşılama sayfasına yönlendirileceksiniz.",
  },
  {
    number: "2",
    title: "Wiraspot' a Kayıt Olun!",
    description:
      "Karşılama ekranından kayıt ol kısmını tıklayarak kaydınızı oluşturabilir ve sms ile gelen doğrulama kodunu sisteme girerek aktivasyonunuzu sağlayabilirsiniz.",
  },
  {
    number: "3",
    title: "İnternet'e Bağlanın",
    description:
      "Kayıt ve aktivasyon işlemlerinden sonra internete çıkış yapabilir, tüm Wiraspot pop noktalarından aynı kullanıcı bilgileri ile giriş yapabilirsiniz.",
  },
];

const HowToConnect = () => {
  return (
    <section
      id="how-to-connect"
      className="bg-gradient-to-b from-primary-800 to-primary-900 py-24 sm:py-32"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Nasıl Bağlanırım?
          </h2>
          <p className="text-primary-100 leading-relaxed">
            Cafe, restoran, avm yani Wiraspot' un olduğu her yerde telefon,
            tablet ve bilgisayarınızdan internete kolaylıkla erişim
            sağlayabilirsiniz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="text-center flex flex-col items-center"
            >
              <motion.div
                className="w-16 h-16 rounded-full bg-primary-300 flex items-center justify-center mb-6 shadow-lg shadow-primary-900/50"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-2xl font-bold text-primary-900">
                  {step.number}
                </span>
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-4">
                {step.title}
              </h3>
              <p className="text-primary-100 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-300 text-primary-900 py-3 px-8 rounded-full font-semibold hover:bg-primary-300 transition-colors duration-300 shadow-lg shadow-primary-900/50"
          >
            Hemen Başla
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowToConnect;
