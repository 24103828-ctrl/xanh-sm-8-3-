/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Smartphone, 
  Leaf, 
  Zap, 
  ShieldCheck, 
  Clock, 
  CreditCard, 
  Star, 
  Download,
  Facebook,
  Instagram,
  Twitter,
  ChevronRight
} from "lucide-react";

export default function App() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const shake = {
    animate: {
      x: [0, -2, 2, -2, 2, 0],
      transition: {
        duration: 0.4,
        repeat: Infinity,
        repeatDelay: 1.5
      }
    }
  };

  const pulse = {
    animate: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 1.2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-brand-soft selection:text-brand">
      
      {/* Announcement Bar */}
      <div className="bg-brand text-white py-2 px-6 text-center text-xs font-bold tracking-widest uppercase relative z-[60]">
        🌸 Chúc mừng 8/3 - Giảm ngay 20% cho tất cả chuyến xe Xanh SM 🌸
      </div>
      
      {/* Navigation (Optional but adds to professional look) */}
      <nav className="fixed top-10 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Xanh_SM_logo.svg/120px-Xanh_SM_logo.svg.png" 
              alt="Xanh SM Logo" 
              className="h-10 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <a 
            href="https://www.xanhsm.com/download" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:block bg-brand hover:bg-brand-hover text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-brand-glow active:scale-95"
          >
            Tải ứng dụng
          </a>
        </div>
      </nav>

      {/* SECTION 1: HERO SECTION (Attention) */}
      <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 -z-10 w-[50%] h-[50%] bg-brand-soft/50 blur-3xl rounded-full translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 -z-10 w-[40%] h-[40%] bg-accent-soft/50 blur-3xl rounded-full -translate-x-1/4 translate-y-1/4" />
        
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-wrap gap-3 mb-8 items-center">
              <motion.a 
                href="#discount-section"
                variants={pulse}
                animate="animate"
                className="inline-flex items-center gap-2 py-2.5 px-6 rounded-full bg-accent text-white text-sm font-bold uppercase tracking-wider shadow-lg shadow-accent-glow border border-white/20 cursor-pointer hover:scale-105 transition-transform"
              >
                🌸 Chúc mừng 8/3
              </motion.a>
              <motion.a 
                href="#discount-section"
                variants={pulse}
                animate="animate"
                className="inline-flex items-center gap-1.5 py-2 px-5 rounded-full bg-brand text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-brand-glow border border-white/10 cursor-pointer hover:scale-105 transition-transform"
              >
                🎁 Giảm 20% toàn bộ chuyến xe - Đi ngay
              </motion.a>
              <span className="inline-flex items-center gap-1.5 py-1.5 px-4 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider shadow-sm border border-slate-200">
                ⚡ Xe điện VinFast
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 text-slate-900">
              8/3 – Chuyến xe xanh <br />
              <span className="text-brand">dành tặng phái đẹp</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
              Di chuyển êm ái – An toàn – Không khí thải. Trải nghiệm dịch vụ taxi điện hàng đầu Việt Nam.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://www.xanhsm.com/download" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-brand hover:bg-brand-hover text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-brand-glow flex items-center gap-2 active:scale-95"
              >
                Tải ứng dụng ngay <ChevronRight size={20} />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Thay ảnh hero tại đây */}
            <div className="aspect-[4/3] rounded-[2rem] bg-brand-soft overflow-hidden shadow-2xl relative group">
              <img 
                src="https://lh3.googleusercontent.com/d/1oxOnS64We6WL-F1tzTxfDYy5_SxTsKAx" 
                alt="Xanh SM Hero" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand/20 to-transparent" />
            </div>
            
            {/* Floating UI Element */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-slate-100">
              <div className="w-12 h-12 bg-brand-soft rounded-full flex items-center justify-center text-brand">
                <Leaf size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">100% Xe điện</p>
                <p className="text-xs text-slate-500">Bảo vệ môi trường</p>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* SECTION 2: GIỚI THIỆU DỊCH VỤ (Interest) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.h2 {...fadeIn} className="text-4xl font-bold mb-6">Xanh SM – Dịch vụ gọi xe điện công nghệ</motion.h2>
            <motion.p {...fadeIn} className="text-lg text-slate-600">
              Xanh SM là dịch vụ gọi xe điện giúp bạn di chuyển nhanh chóng, an toàn và thân thiện với môi trường. Chỉ cần vài thao tác trên ứng dụng, bạn có thể đặt xe và bắt đầu chuyến đi của mình.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Xe điện hiện đại",
                desc: "Hệ thống xe điện VinFast vận hành êm ái và thân thiện với môi trường.",
                icon: <Zap className="text-brand" size={32} />,
                img: "https://cdn.xanhsm.com/2024/08/3df7b19c-dsc01652.jpg"
              },
              {
                title: "Đặt xe nhanh chóng",
                desc: "Chỉ cần vài thao tác trên ứng dụng để đặt xe trong vài giây.",
                icon: <Smartphone className="text-brand" size={32} />,
                img: "https://cafefcdn.com/zoom/700_438/203337114487263232/2023/12/6/xanh-sm-emag-cover-mobi-08-1701855466110670966778.jpg"
              },
              {
                title: "Thân thiện môi trường",
                desc: "Không khí thải, góp phần giảm ô nhiễm và bảo vệ môi trường.",
                icon: <Leaf className="text-brand" size={32} />,
                img: "https://cdn.tuoitrethudo.vn/stores/news_dataimages/2025/042025/01/20/anh-120250401205109.jpg?rt=20250401205445"
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
              >
                <div className="w-16 h-16 bg-brand-soft rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-slate-600 mb-6">{feature.desc}</p>
                <div className="rounded-2xl overflow-hidden h-40 bg-slate-100">
                  <img src={feature.img} alt={feature.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: LỢI ÍCH KHI SỬ DỤNG (Interest) */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1 order-2 md:order-1">
              <h2 className="text-4xl font-bold mb-12">Vì sao nên chọn Xanh SM?</h2>
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { title: "Xe điện hiện đại, sạch sẽ", icon: <ShieldCheck className="text-brand" /> },
                  { title: "Tài xế chuyên nghiệp", icon: <Star className="text-brand" /> },
                  { title: "Giá cước minh bạch", icon: <CreditCard className="text-brand" /> },
                  { title: "Trải nghiệm êm ái", icon: <Clock className="text-brand" /> }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    {...fadeIn}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-1 p-2 bg-brand-soft rounded-lg">
                      {item.icon}
                    </div>
                    <p className="font-semibold text-lg text-slate-700">{item.title}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="flex-1 order-1 md:order-2">
              {/* Thay ảnh minh họa lợi ích tại đây */}
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://khpt.1cdn.vn/2025/07/26/xanh-sm-vp-tn-1.jpg" 
                  alt="Benefits" 
                  className="w-full aspect-square object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: ƯU ĐÃI NGÀY 8/3 (Desire) */}
      <section id="discount-section" className="py-24 bg-brand relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <span className="text-accent-hover font-bold tracking-widest uppercase text-sm mb-4 block">Quà tặng đặc biệt</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Ưu đãi đặc biệt ngày Quốc tế Phụ nữ 8/3</h2>
              <p className="text-lg text-slate-600 mb-8">
                Nhân dịp ngày 8/3, Xanh SM gửi tặng khách hàng mã ưu đãi đặc biệt để mỗi chuyến đi của phái đẹp thêm phần trọn vẹn.
              </p>
              
              <div className="bg-brand-soft border-2 border-dashed border-brand-glow rounded-2xl p-8 mb-8 text-center md:text-left">
                <p className="text-brand font-bold mb-2">Mã ưu đãi:</p>
                <div className="text-4xl md:text-5xl font-black text-brand tracking-tighter mb-4">WOMEN83</div>
                <div className="flex flex-col gap-2">
                  <p className="text-xl font-bold text-slate-800">Giảm 20% cho mỗi chuyến xe</p>
                  <p className="text-slate-500">Tối đa 30.000 VNĐ • Áp dụng trong ngày 8/3</p>
                </div>
              </div>

              <motion.a 
                href="https://www.xanhsm.com/download" 
                target="_blank" 
                rel="noopener noreferrer"
                variants={shake}
                animate="animate"
                className="inline-block w-full md:w-auto bg-accent hover:bg-accent-hover text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-accent-glow active:scale-95 text-center"
              >
                Đặt xe ngay để nhận ưu đãi
              </motion.a>
            </div>
            
            <div className="flex-1 w-full max-w-md">
              {/* Thay ảnh ưu đãi tại đây */}
              <div className="rounded-3xl overflow-hidden shadow-lg border-8 border-white">
                <img 
                  src="https://cdn.tienphong.vn/images/a6bf4f60924201126af6849ca45a3980d44800cec5bf2c3f922224ce7d6e439a372a5a443903b9f5008e8c88a33bf7805d6241f9b42334e6e06c1be9adec76eb/anh-1-2627-103.jpg" 
                  alt="8/3 Gift" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: ĐÁNH GIÁ KHÁCH HÀNG (Desire) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Khách hàng nói gì về Xanh SM?</h2>
            <div className="flex items-center justify-center gap-2 text-brand">
              <div className="flex">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} fill="currentColor" />)}
              </div>
              <span className="font-bold text-xl">4.8/5 sao</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Nguyễn Thu Hà",
                role: "Nhân viên văn phòng",
                comment: "Xe sạch sẽ, tài xế thân thiện và đi rất êm. Tôi rất yên tâm khi sử dụng Xanh SM cho những chuyến đi làm hàng ngày.",
                avatar: "https://picsum.photos/seed/user1/100/100" // Thay avatar khách hàng 1
              },
              {
                name: "Trần Minh Tâm",
                role: "Freelancer",
                comment: "Ứng dụng dễ dùng, đặt xe rất nhanh. Đặc biệt là xe điện không có mùi xăng, rất thoải mái.",
                avatar: "https://picsum.photos/seed/user2/100/100" // Thay avatar khách hàng 2
              },
              {
                name: "Lê Mỹ Linh",
                role: "Sinh viên",
                comment: "Tôi thích vì đây là dịch vụ xe điện thân thiện môi trường. Giá cả lại rất cạnh tranh và minh bạch.",
                avatar: "https://picsum.photos/seed/user3/100/100" // Thay avatar khách hàng 3
              }
            ].map((review, i) => (
              <motion.div 
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 relative"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img src={review.avatar} alt={review.name} className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md" referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="font-bold text-slate-900">{review.name}</h4>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">{review.role}</p>
                  </div>
                </div>
                <p className="text-slate-600 italic leading-relaxed">"{review.comment}"</p>
                <div className="absolute top-8 right-8 text-brand-soft">
                  <Star size={48} fill="currentColor" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: KÊU GỌI HÀNH ĐỘNG (Action) */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div 
            {...fadeIn}
            className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden"
          >
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#10b98133,transparent)]" />
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8 relative z-10">
              Tải ứng dụng Xanh SM và trải nghiệm chuyến xe xanh ngay hôm nay
            </h2>
            
            <div className="flex flex-wrap justify-center gap-6 relative z-10">
              <a 
                href="https://www.xanhsm.com/download" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-2xl font-bold flex items-center gap-3 transition-all active:scale-95"
              >
                <div className="w-8 h-8 bg-slate-900 rounded-md flex items-center justify-center text-white">
                  <Smartphone size={18} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold leading-none opacity-60">Tải trên</p>
                  <p className="text-lg leading-tight">App Store</p>
                </div>
              </a>
              
              <a 
                href="https://www.xanhsm.com/download" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-2xl font-bold flex items-center gap-3 transition-all active:scale-95"
              >
                <div className="w-8 h-8 bg-brand rounded-md flex items-center justify-center text-white">
                  <Download size={18} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold leading-none opacity-60">Tải trên</p>
                  <p className="text-lg leading-tight">Google Play</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Xanh_SM_logo.svg/120px-Xanh_SM_logo.svg.png" 
                  alt="Xanh SM Logo" 
                  className="h-8 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-slate-500 max-w-sm mb-8">
                GSM – Green and Smart Mobility. Tiên phong trong cuộc cách mạng di chuyển xanh tại Việt Nam.
              </p>
              <div className="space-y-2 mb-8 text-slate-500 text-sm">
                <p>Dịch vụ: <span className="font-semibold text-slate-700">Xanh SM</span></p>
                <p>Hotline: <a href="tel:19002088" className="font-semibold text-brand hover:underline">1900 2088</a></p>
                <p>Website: <a href="https://www.xanhsm.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">https://www.xanhsm.com</a></p>
                <p>Facebook: <a href="https://www.facebook.com/XanhSMOfficial" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">https://www.facebook.com/XanhSMOfficial</a></p>
              </div>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/XanhSMOfficial" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-400 hover:text-brand hover:shadow-md transition-all border border-slate-100">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-400 hover:text-brand hover:shadow-md transition-all border border-slate-100">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-400 hover:text-brand hover:shadow-md transition-all border border-slate-100">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h5 className="font-bold mb-6">Dịch vụ</h5>
              <ul className="space-y-4 text-slate-500">
                <li><a href="#" className="hover:text-brand transition-colors">Xanh SM Taxi</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Xanh SM Luxury</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Xanh SM Bike</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Xanh Express</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-bold mb-6">Công ty</h5>
              <ul className="space-y-4 text-slate-500">
                <li><a href="#" className="hover:text-brand transition-colors">Về GSM</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Tuyển dụng</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Tin tức</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Liên hệ</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-400">
            <p>© 2025 GSM. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-slate-600">Điều khoản sử dụng</a>
              <a href="#" className="hover:text-slate-600">Chính sách bảo mật</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
