import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const FAQ = () => {
  const [openKey, setOpenKey] = useState("wiraspot-nedir");

  const faqItems = [
    {
      key: "wiraspot-nedir",
      question: "Wiraspot Hotspot nedir?",
      answer:
        "İnternete erişmek isteyen kullanıcılar, mekanınızda kablosuz ağa şifresiz olarak bağlanır. Wiraspot üzerinden internet erişimine ulaşmak için kayıt ve sms onayı gerektirmektedir. Kayıt olup giriş yapan kullanıcıların 5156 sayılı kanuna göre logları tutulmaktadır.",
    },
    {
      key: "5651-no-lu-yasaya-uygun-mu",
      question: "5651 No'lu Yasaya Uygun mu?",
      answer:
        "İnternet ortamında işlenen belirli suçlarla içerik, yer ve erişim sağlayıcıları üzerinden mücadeleye ilişkin esas ve usûlleri düzenlemek amacıyla oluşturulan 5651 sayılı yasa gereği internet hizmetini paylaştığınız kullanıcıların kayıt altına alınması gerekmektedir. Ayrıca alınan kayıtların 1 yıl süreyle saklanması ve talep edildiğinde ilgili mercilerle paylaşılması zorunluluğu bulunmaktadır. Tüm bu yükümlülükler için gerekli olan altyapı ve işgücü yatırımına gerek duymadan, hukuki tüm sorumluluklarınızı Wiraspot üstlenmektedir.",
    },
    {
      key: "kurulum-destegi-var-mi",
      question: "Kurulum Desteğiniz Var mı?",
      answer:
        "Wiraspot tarafınıza iletilecek cihaz ile tak çalıştır mantığı ile çalışmaktadır.Kurulum desteği talep edildiğinde uzak bağlantı sağlanarak kurulum yapılmaktadır.Yerinde kurulum desteği talep edildiğinde teknik ekibimiz yönlendirilmektedir.",
    },
    {
      key: "yuksek-yatirim-maliyeti-gerekir-mi",
      question: "Yüksek Yatırım Maliyeti Gerekir mi?",
      answer:
        "Wiraspot hizmetiyle, kesintisiz ve sorunsuz bir internet erişimi için bir yatırım bütçesi ayırmanıza gerek kalmaz; tüm teknolojik donanım güncellemesiyle birlikte, gereken tüm maliyetler Wiraspot tarafından karşılanır ve hizmetinize sunulur.",
    },
    {
      key: "donanim-arizasi-olur-mu",
      question: "Donanım Arızası ile Karşılaşır mıyız?",
      answer:
        "Wiraspot hizmetiyle tarafınıza sunulan tüm altyapı donanımı 7 gün 24 saat izlenmektedir. Olası cihaz arızalarında yerinde müdahale yapılarak, arızalı cihazlar için anında değişim gerçekleştirilmektedir.",
    },
    {
      key: "telefon-destegi-mevcut-mu",
      question: "Telefon Desteğiniz Mevcut mudur?",
      answer:
        "İnternet erişimi ile ilgili her türlü problemde Wiraspot tarafından sunulan ve mesai saatleri içerisinde hizmet veren Çağrı Merkezi'ni arayarak destek alabilirsiniz.",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleQuestion = (key) => {
    const newKey = openKey === key ? null : key;
    setOpenKey(newKey);
  };
  return (
    <section id="faq" className="py-20 bg-primary-dark">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col items-center gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center text-primary-100">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-primary-100 text-center text-lg">
            Merak ettiğiniz sorular için bir telefon kadar yakınız.
          </p>
        </motion.div>
        <motion.div
          className="max-w-3xl mx-auto space-y-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {faqItems.map((item) => (
            <div
              key={item.key}
              className="bg-primary-400/90 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md hover:bg-primary-500 transition-all duration-300"
            >
              <button
                onClick={() => toggleQuestion(item.key)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <h1 className="text-xl font-semibold text-white">
                  {item.question}
                </h1>
                <motion.div
                  animate={{ rotate: openKey === item.key ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDownIcon className="h-6 w-6 text-primary-100" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openKey === item.key && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4">
                      <p className="text-primary-100">{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
