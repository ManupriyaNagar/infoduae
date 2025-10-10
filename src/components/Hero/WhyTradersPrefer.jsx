"use client";
import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, Users, ThumbsUp, RefreshCw } from "lucide-react";

const features = [
  {
    title: "High Potential Returns",
    icon: TrendingUp,
    description:
      "At InfodD, we focus on strategies designed to deliver high-potential returns. Our platform empowers Fund Managers to optimize their trading approaches, maximizing profitability while managing risk effectively.",
  },
  {
    title: "Complete Transparency",
    icon: ShieldCheck,
    description:
      "We believe in full transparency. Investors can monitor their accounts in real-time, staying fully informed about the performance of their investments at all times.",
  },
  {
    title: "Referral Benefits",
    icon: Users,
    description:
      "Our referral program lets users expand their network and boost earnings. By inviting new investors or Fund Managers to InfodD, you can unlock additional rewards and incentives.",
  },
  {
    title: "User-Friendly Experience",
    icon: ThumbsUp,
    description:
      "We provide a seamless and hassle-free environment. InfodD is intuitive and easy to navigate, making it ideal for both novice and seasoned investors.",
  },
  {
    title: "Consistent Performance",
    icon: RefreshCw,
    description:
      "Consistency is the cornerstone of successful investing. InfodD supports Fund Managers in maintaining steady performance, ensuring reliable growth and returns for investors.",
  },
];

export default function WhyTradersPrefer() {
  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto ">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-6xl font-bold text-center mb-12 text-gray-900"
        >
          Why Traders Prefer <span className="text-transparent bg-gradient-to-r from-[#00FFAA] to-[#00BFA6] bg-clip-text">InfodD</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white transition-all p-6 border border-gray-100"
            >
              <feature.icon className="w-10 h-10 text-[#00BFA6]  mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
