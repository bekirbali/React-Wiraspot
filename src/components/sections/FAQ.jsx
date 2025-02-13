import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [openKey, setOpenKey] = useState("what-is-wiraspot");
  const router = useRouter();

  const faqItems = [
    {
      key: "what-is-wiraspot",
      question: "Wiraspot nedir?",
      answer:
        "Wiraspot, güvenli ve hızlı internet erişimi sağlayan yenilikçi bir VPN hizmetidir. Kullanıcılarımıza özel şifreleme teknolojileri ile güvenli bir bağlantı sunuyoruz.",
    },
    {
      key: "how-to-register",
      question: "Nasıl üye olabilirim?",
      answer:
        'Üyelik işlemi için web sitemizden "Üye Ol" butonuna tıklayarak gerekli bilgileri doldurmanız yeterlidir. Ardından e-posta doğrulaması yaparak hesabınızı aktifleştirebilirsiniz.',
    },
    {
      key: "supported-devices",
      question: "Hangi cihazlarda kullanabilirim?",
      answer:
        "Wiraspot, Windows, Mac, iOS, Android ve Linux işletim sistemlerinde kullanılabilir. Aynı anda birden fazla cihazda kullanım seçeneği paketinize göre değişiklik gösterebilir.",
    },
    {
      key: "payment-options",
      question: "Ödeme seçenekleri nelerdir?",
      answer:
        "Kredi kartı, banka kartı ve havale/EFT ile ödeme yapabilirsiniz. Ödemeleriniz SSL sertifikası ile güvence altındadır.",
    },
    {
      key: "refund-policy",
      question: "İptal ve iade politikanız nedir?",
      answer:
        "Satın alma işleminden sonraki 14 gün içerisinde iade talep edebilirsiniz. İptal işlemleri için müşteri hizmetlerimizle iletişime geçmeniz yeterlidir.",
    },
    {
      key: "technical-support",
      question: "Teknik destek alabilir miyim?",
      answer:
        "7/24 teknik destek ekibimiz size yardımcı olmak için hazır. Canlı destek, e-posta veya telefon üzerinden bizimle iletişime geçebilirsiniz.",
    },
  ];

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setOpenKey(hash);
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleQuestion = (key) => {
    const newKey = openKey === key ? null : key;
    setOpenKey(newKey);

    if (newKey !== null) {
      window.history.pushState(null, "", `#${key}`);
    } else {
      window.history.pushState(null, "", "#");
    }
  };
  return (
    <section id="faq" className="py-20 bg-primary-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary-100 mb-12">
          Sıkça Sorulan Sorular
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
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
                  <ChevronDownIcon className="h-6 w-6 text-primary-light" />
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
                      <p className="text-gray-300">{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
