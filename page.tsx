'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Shield, ChevronDown } from 'lucide-react';
import { useRef } from 'react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.23, 1, 0.320, 1] }
};

const fadeInDown = {
  initial: { opacity: 0, y: -30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.8 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2
    }
  }
};

export default function Home() {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  return (
    <div className="bg-white text-black overflow-hidden">
      {/* Fixed Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 w-full bg-white/80 backdrop-blur-2xl z-50 border-b border-gray-200/30"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            className="text-2xl font-bold tracking-tight bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Rain
          </motion.div>
          <div className="flex gap-8 items-center">
            {['Features', 'About', 'Pricing'].map((item, idx) => (
              <motion.a
                key={item}
                href="#"
                className="text-sm text-gray-600 hover:text-black transition relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + idx * 0.1 }}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0071e3] group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
            <motion.button 
              className="px-5 py-2 bg-[#0071e3] text-white rounded-full text-sm font-medium hover:bg-[#0077ed] transition-all hover:shadow-lg hover:shadow-blue-500/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div 
          className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-300/20 to-blue-100/20 rounded-full blur-3xl"
          animate={{ 
            y: [0, 40, 0],
            x: [0, 20, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-40 left-10 w-96 h-96 bg-gradient-to-br from-purple-200/10 to-pink-100/10 rounded-full blur-3xl"
          animate={{ 
            y: [0, -40, 0],
            x: [0, -20, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="max-w-5xl mx-auto text-center relative z-10"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 rounded-full bg-blue-100 text-[#0071e3] text-sm font-medium">
              ✨ Now with AI-powered features
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-tight mb-6 bg-gradient-to-br from-black via-gray-800 to-gray-600 bg-clip-text text-transparent"
          >
            Elegance Redefined
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto"
          >
            Experience the perfect convergence of minimalism, performance, and innovation.
            Built for those who demand more from their tools.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex gap-4 justify-center flex-wrap"
          >
            <motion.button 
              className="px-8 py-4 bg-[#0071e3] text-white rounded-full font-semibold flex items-center gap-2 hover:bg-[#0077ed] transition-all hover:shadow-lg hover:shadow-blue-500/40 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </motion.button>
            <motion.button 
              className="px-8 py-4 border-2 border-gray-300 rounded-full font-semibold hover:bg-gray-50 transition-all hover:border-gray-400"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Watch Demo
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator with Animation */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 z-10"
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
            <motion.div 
              className="w-1 h-2 bg-gray-400 rounded-full"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Features Section with Stagger */}
      <section ref={featuresRef} className="py-32 px-6 bg-gradient-to-b from-white via-gray-50 to-white relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-7xl font-black tracking-tight mb-6 bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
              Why Creators Love Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Designed with precision. Built with passion. Crafted for perfection.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                icon: Sparkles,
                title: "Beautifully Minimal",
                desc: "Clean design philosophy that elegantly enhances your workflow",
                color: "from-blue-500 to-cyan-400"
              },
              {
                icon: Zap,
                title: "Lightning Performance",
                desc: "Optimized at every level for speed and responsiveness",
                color: "from-purple-500 to-pink-400"
              },
              {
                icon: Shield,
                title: "Enterprise Grade",
                desc: "Military-level security with transparent privacy controls",
                color: "from-green-500 to-emerald-400"
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                variants={scaleIn}
                className="group relative"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br rounded-3xl opacity-0 group-hover:opacity-10 transition-all duration-300 blur-2xl"
                  style={{
                    backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))`
                  }}
                />
                <div className="relative p-8 bg-white rounded-3xl border border-gray-200/50 hover:border-gray-300 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-gray-200/30">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} p-3 mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-full h-full" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-[#0071e3] transition-colors">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                  
                  {/* Hover Arrow Animation */}
                  <motion.div
                    className="mt-6 flex items-center text-[#0071e3] font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: -10, opacity: 0 }}
                    whileHover={{ x: 0 }}
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Interactive Stats Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { number: "1M+", label: "Active Users" },
              { number: "99.9%", label: "Uptime" },
              { number: "24/7", label: "Support" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-8"
              >
                <motion.div
                  className="text-5xl font-black bg-gradient-to-r from-[#0071e3] to-blue-600 bg-clip-text text-transparent mb-3"
                  whileInView={{ scale: [0.8, 1.1, 1] }}
                  transition={{ delay: idx * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section with Enhanced Design */}
      <section className="py-32 px-6 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl p-16 md:p-24 text-white text-center border border-gray-700/50 backdrop-blur-sm"
          >
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-6xl md:text-7xl font-black mb-6 tracking-tight"
            >
              Ready to Level Up?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Join thousands of professionals who've transformed their workflow.
              Start your free trial today with full access to all features.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="flex gap-4 justify-center flex-wrap"
            >
              <motion.button 
                className="px-8 py-4 bg-[#0071e3] text-white rounded-full font-bold hover:bg-[#0077ed] transition-all hover:shadow-lg hover:shadow-blue-500/50 text-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Free Trial
              </motion.button>
              <motion.button 
                className="px-8 py-4 bg-white/10 text-white rounded-full font-bold hover:bg-white/20 transition-all border border-white/30 text-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Demo
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200/50 py-16 px-6 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16"
          >
            <div>
              <h3 className="font-bold text-lg mb-6">Rain</h3>
              <p className="text-gray-600 text-sm">Redefining elegance in digital design.</p>
            </div>
            {[
              { title: 'Product', items: ['Features', 'Pricing', 'Security'] },
              { title: 'Company', items: ['About', 'Blog', 'Careers'] },
              { title: 'Resources', items: ['Docs', 'Support', 'Status'] },
              { title: 'Legal', items: ['Privacy', 'Terms', 'Contact'] }
            ].map((col) => (
              <div key={col.title}>
                <h4 className="font-semibold mb-4">{col.title}</h4>
                <ul className="space-y-3">
                  {col.items.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-600 hover:text-black transition text-sm">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="border-t border-gray-200 pt-8 flex justify-between items-center text-sm text-gray-600"
          >
            <p>&copy; 2024 Rain. All rights reserved.</p>
            <div className="flex gap-8">
              {['Twitter', 'GitHub', 'LinkedIn'].map((social) => (
                <a key={social} href="#" className="hover:text-black transition">
                  {social}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
