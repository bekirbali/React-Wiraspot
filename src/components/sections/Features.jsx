"use client";

import { motion } from "framer-motion";
import {
  WifiIcon,
  GlobeAltIcon,
  BoltIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Kolay Kullanım",
    description: "Hızlı ve kolay şekilde internete bağlanabilirsiniz.",
    icon: WifiIcon,
  },
  {
    name: "Hızlı İnternet",
    description: "Kullanıcı bazlı limitlendirme ile hızlı internet deneyimi.",
    icon: BoltIcon,
  },
  {
    name: "Erişim Kolaylığı",
    description:
      "Bir noktadan açtığınız hesap ile tüm pop noktalarından erişebilirsiniz.",
    icon: GlobeAltIcon,
  },
  {
    name: "Güvenli Bağlantı",
    description:
      "Gelişmiş güvenlik protokolleri ile verilerinizin güvenliğinden emin olabilirsiniz",
    icon: ShieldCheckIcon,
  },
];

export default function Features() {
  return (
    <div id="features" className="bg-primary-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold leading-10 text-primary-600">
            Özellikler
          </h2>
          <p className="mt-2 text-lg font-semibold tracking-tight text-primary-900 sm:text-xl">
            Hızlı ve Kesintisiz Kablosuz İnternet Erişimi
          </p>
          <p className="mt-6 text-lg leading-8 text-primary-600">
            Avm, Restoran, Cafe, Yurt, Park, Havuz, Oyun Sahaları veya Toplantı
            Odaları gibi Muhtelif Mekanlarda Müşterileriniz, Konuklarınız veya
            Mekan Sakinlerini için Hızlı ve Kesintisiz Kablosuz İnternet Erişim
            Platformudur.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="flex flex-col group hover:scale-105 transition-all duration-300"
              >
                <dt className="text-base font-semibold leading-7 text-primary-900">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-600 group-hover:bg-primary-500 transition-colors">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-primary-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>

        {/* <motion.div
          className="mt-16 sm:mt-24 flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 bg-primary-200 rounded-2xl"></div>
            <div className="relative z-10 bg-white rounded-xl shadow-lg p-8">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">1Gbps</div>
                  <div className="mt-2 text-sm text-primary-600">Max Speed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">99.9%</div>
                  <div className="mt-2 text-sm text-primary-600">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">24/7</div>
                  <div className="mt-2 text-sm text-primary-600">Support</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </div>
  );
}
