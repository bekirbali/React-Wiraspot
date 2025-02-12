import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqItems = [
    {
      question: "Wiraspot nedir?",
      answer:
        "Wiraspot, güvenli ve hızlı internet erişimi sağlayan yenilikçi bir VPN hizmetidir. Kullanıcılarımıza özel şifreleme teknolojileri ile güvenli bir bağlantı sunuyoruz.",
    },
    {
      question: "Nasıl üye olabilirim?",
      answer:
        'Üyelik işlemi için web sitemizden "Üye Ol" butonuna tıklayarak gerekli bilgileri doldurmanız yeterlidir. Ardından e-posta doğrulaması yaparak hesabınızı aktifleştirebilirsiniz.',
    },
    {
      question: "Hangi cihazlarda kullanabilirim?",
      answer:
        "Wiraspot, Windows, Mac, iOS, Android ve Linux işletim sistemlerinde kullanılabilir. Aynı anda birden fazla cihazda kullanım seçeneği paketinize göre değişiklik gösterebilir.",
    },
    {
      question: "Ödeme seçenekleri nelerdir?",
      answer:
        "Kredi kartı, banka kartı ve havale/EFT ile ödeme yapabilirsiniz. Ödemeleriniz SSL sertifikası ile güvence altındadır.",
    },
    {
      question: "İptal ve iade politikanız nedir?",
      answer:
        "Satın alma işleminden sonraki 14 gün içerisinde iade talep edebilirsiniz. İptal işlemleri için müşteri hizmetlerimizle iletişime geçmeniz yeterlidir.",
    },
    {
      question: "Teknik destek alabilir miyim?",
      answer:
        "7/24 teknik destek ekibimiz size yardımcı olmak için hazır. Canlı destek, e-posta veya telefon üzerinden bizimle iletişime geçebilirsiniz.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-primary-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Sıkça Sorulan Sorular
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left p-4 bg-primary rounded-lg focus:outline-none hover:bg-primary-light transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-white">
                    {item.question}
                  </span>
                  <span className="text-white transform transition-transform duration-200">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </div>
                {openIndex === index && (
                  <p className="mt-4 text-primary-200">{item.answer}</p>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
