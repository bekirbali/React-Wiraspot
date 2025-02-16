import React from "react";
import { motion } from "framer-motion";

const HowToSetup = () => {
  const steps = [
    {
      title: "Cihaz Kurulumu",
      description:
        "Kurulum yapılacak mekana göre cihaz tercih edilerek wifinokta yazılımları cihaza yüklenir.",
      icon: "/images/setup/cihazkurulumu.svg", // Using emoji as placeholder, you might want to replace with actual icon
    },
    {
      title: "Entegrasyon",
      description:
        "Wifinokta cihaz,sunucu, web arayüzü olmak üzere 3 platform üzerinden çalışmaktadır.Platformların entegrasyonu yapılarak kontrol edilmektedir.",
      icon: "/images/setup/entegrasyon.svg", // Using emoji as placeholder, you might want to replace with actual icon
    },
    {
      title: "Kontrol ve Teslim",
      description:
        "Kurulum ve entegrasyon işlemlerinden sonra yazılımın genel kontrol ve testleri yapılarak hizmet teslim edilir.",
      icon: "/images/setup/kontrol.svg", // Using emoji as placeholder, you might want to replace with actual icon
    },
  ];

  return (
    <section className="bg-primary-800 text-white py-24 sm:py-32 border-b border-primary-500">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4">Wiraspot Nasıl Kurulur?</h2>
          <p className="text-lg text-primary-200 max-w-3xl mx-auto">
            Alt yapının kurulabilmesi için yazılımı destekleyen router
            cihazınızın olması gerekmektedir, cihaz konusunda online sayınıza
            göre tedarik edebilmekteyiz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center p-6"
            >
              <div className=" mb-6 flex justify-center">
                <img src={step.icon} alt={step.title} className="w-32 h-32" />
              </div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-primary-100">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToSetup;
