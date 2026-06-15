import { Bookmark, Cog, Users, Zap } from "lucide-react";
import { motion } from "motion/react";

const stats = [
  { icon: Bookmark, value: "30+", label: "Years Experience" },
  { icon: Cog, value: "500+", label: "Turbine Systems Serviced" },
  { icon: Users, value: "100+", label: "Clients" },
  { icon: Zap, value: "150MW", label: "Largest Unit Retrofitted" },
];

export function StatsHighlights() {
  return (
    <section className="py-10 bg-white">
      <div className="site-shell">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="w-10 h-10 rounded-full bg-[#FFF0EB] flex items-center justify-center mb-2">
                <stat.icon className="w-4 h-4 text-[#FF6B35]" strokeWidth={2} />
              </div>
              <div className="text-[#1E3A5F] text-[28px] md:text-[36px] font-bold leading-tight">
                {stat.value}
              </div>
              <div className="text-[#5A6B7D] text-[12px] md:text-[13px] mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}