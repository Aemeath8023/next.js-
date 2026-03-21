'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Shield, Check } from 'lucide-react';
import { useRef } from 'react';

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="bg-white text-black overflow-hidden">
      {/* Navigation - Apple 风格 */}
      <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-2xl z-50 border-b border-gray-200/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tight">Rain</div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#features" className="text-sm text-gray-600 hover:text-black">Features</a>
            <a href="#pricing" className="text-sm text-gray-600 hover:text-black">Pricing</a>
            <a href="#about" className="text-sm text-gray-600 hover:text-black">About</a>
          </div>
          <button className="px-5 py-2 btn-primary rounded-full text-sm">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section - Apple 超大标题风格 */}
      <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* 微妙渐变背景 */}
        <motion.div 
          style={{ y }}
          className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-purple-50/20"
        />
        
        {/* 装饰性圆形 */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-pink-200/30 to-purple-200/30 rounded-full blur-3xl" />
        
        <motion.div 
          style={{ opacity }}
          className="relative max-w-5xl mx-auto px-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* 超大标题 - Apple 风格 */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none mb-6">
              <span className="block">Elegance</span>
              <span className="block gradient-text">Redefined.</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto font-light tracking-tight">
              极简设计，卓越性能，创新体验
            </p>
            
            <div className="flex gap-4 justify-center flex-wrap">
              <motion.button 
                className="group px-8 py-4 btn-primary rounded-full text-base font-semibold flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                开始体验
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button 
                className="px-8 py-4 bg-white text-black rounded-full font-semibold border border-gray-300 hover:bg-gray-50 text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                观看演示
              </motion.button>
            </div>
          </motion.div>
          
          {/* Hero 图片/产品展示 */}
          <motion.div 
            className="mt-16 md:mt-24"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="relative mx-auto max-w-4xl">
              <div className="card-shadow rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 p-2">
                <div className="rounded-2xl bg-white overflow-hidden">
                  {/* 这里可以放你的产品截图或图片 */}
                  <div className="aspect-video bg-gradient-to-br from-purple-100 via-blue-50 to-pink-50 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                        <Sparkles className="w-10 h-10 text-white" />
                      </div>
                      <p className="text-gray-600 font-medium">Your Product Screenshot</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section - Apple 风格 */}
      <section id="features" className="py-24 md:py-32 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-24"
          >
            <p className="text-sm font-semibold text-purple-600 mb-4 uppercase tracking-wider">Features</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6">
              为什么选择我们
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              重新定义您的工作方式
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { icon: Sparkles, title: '极简设计', desc: '简洁优雅的设计理念，让复杂变得简单' },
              { icon: Zap, title: '闪电般快速', desc: '顶级性能优化，毫秒级响应速度' },
              { icon: Shield, title: '企业级安全', desc: '银行级别的数据加密保护' }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                className="group p-8 md:p-10 bg-white rounded-3xl border border-gray-200/50 hover:border-gray-300 card-shadow-hover transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 p-3 mb-6 inline-block">
                  <feature.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 tracking-tight">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - 极简风格 */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 md:gap-16">
            {[
              { number: '100万+', label: '活跃用户' },
              { number: '99.9%', label: '在线率' },
              { number: '24/7', label: '客服支持' }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl sm:text-6xl md:text-7xl font-black gradient-text mb-3">
                  {stat.number}
                </div>
                <p className="text-gray-600 font-medium text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial/Quote Section - Apple 风格 */}
      <section className="py-20 md:py-32 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-100 to-blue-100 mx-auto mb-8 flex items-center justify-center">
              <Check className="w-10 h-10 text-purple-600" />
            </div>
            <blockquote className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-8 tracking-tight">
              "这完全改变了我们团队的协作方式"
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-200 to-gray-300" />
              <div className="text-left">
                <div className="font-semibold">张明</div>
                <div className="text-sm text-gray-600">CEO at TechCorp</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Apple 深色风格 */}
      <section id="pricing" className="py-20 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 lg:p-24 text-white text-center overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* 装饰性渐变 */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30">
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl" />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tight">
                准备好了吗？
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                加入数千名已转变工作流程的专业人士
              </p>
              
              <div className="flex gap-4 justify-center flex-wrap">
                <motion.button 
                  className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-100"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  免费试用
                </motion.button>
                <motion.button 
                  className="px-8 py-4 bg-white/10 text-white rounded-full font-bold border border-white/30 hover:bg-white/20"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  预约演示
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer - Apple 风格 */}
      <footer id="about" className="border-t border-gray-200 py-16 md:py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="text-2xl font-bold tracking-tight mb-4">Rain</div>
              <p className="text-gray-600 text-sm leading-relaxed">
                重新定义优雅设计
              </p>
            </div>
            
            {[
              { title: '产品', items: ['功能', '价格', '安全'] },
              { title: '公司', items: ['关于', '博客', '招聘'] },
              { title: '资源', items: ['文档', '支持', '状态'] },
              { title: '法律', items: ['隐私', '条款', '联系'] }
            ].map((col) => (
              <div key={col.title}>
                <h4 className="font-semibold text-sm mb-4 text-gray-900">{col.title}</h4>
                <ul className="space-y-3">
                  {col.items.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-600 hover:text-black text-sm">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <p>&copy; 2024 Rain. 版权所有</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-black">Twitter</a>
              <a href="#" className="hover:text-black">GitHub</a>
              <a href="#" className="hover:text-black">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
