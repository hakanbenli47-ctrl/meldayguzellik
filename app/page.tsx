"use client"
import { motion } from "framer-motion"
import { useTheme } from "@/app/theme/theme"
import { content } from "@/data/content"
import { FaInstagram } from "react-icons/fa"
import { useState, useEffect } from "react"

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? `${theme.headerBg} shadow-xl py-4` : "bg-transparent py-6"
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12">
        
        <span className={`${theme.title} text-lg tracking-widest`}>
          {content.salon.shortName}
        </span>

        <nav className="hidden md:flex gap-8 text-xs uppercase tracking-widest">
          <a href="#hizmetler" className={theme.link}>Hizmetler</a>
          <a href="#hakkimizda" className={theme.link}>Hakkımızda</a>
          <a href="#ekip" className={theme.link}>Ekip</a>
        </nav>

        <a href={`tel:${content.salon.phone}`} className={`${theme.button} px-6 py-2`}>
          Ara
        </a>
      </div>
    </header>
  )
}

export default function Home() {
  const { theme } = useTheme()

  return (
    <main className={`${theme.bg} overflow-x-hidden`}>

      <Header />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center px-6 md:px-12 pt-32 overflow-hidden">

        {/* Glow */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className={`${theme.accentLine} opacity-10 blur-[140px] w-[800px] h-[800px] rounded-full`} />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <p className={`${theme.subtitle} text-xs tracking-[0.4em] mb-6`}>
            {content.salon.location}
          </p>

          <h1 className={`${theme.title} text-5xl md:text-7xl font-light leading-[1.05]`}>

  <span className={`block ${theme.subtitle} opacity-80`}>
    Sadece saç değil,
  </span>

  <span className={`block mt-4 italic font-serif text-4xl md:text-6xl bg-clip-text text-transparent ${theme.accentText}`}>
    Özgüven tasarlıyoruz.
  </span>

</h1>

          <p className={`${theme.subtitle} mt-8 max-w-md`}>
            {content.salon.slogan}
          </p>

          <div className="flex gap-4 mt-10 flex-wrap">
            <a href={`tel:${content.salon.phone}`} className={`${theme.button} px-8 py-4`}>
              Ara
            </a>
            <a href={`https://wa.me/${content.salon.whatsapp}`} className="px-8 py-4 bg-gradient-to-r from-[#fbe4ec] to-[#f6d3df] text-[#c2185b] hover:from-[#f6d3df] hover:to-[#efc2d2] transition shadow-sm hover:shadow-md">
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* HAKKIMIZDA */}
   {/* HAKKIMIZDA */}
<section id="hakkimizda" className={`${theme.sectionSoft} py-28 px-6 md:px-16 relative overflow-hidden`}>

  {/* glow */}
  <div className={`absolute right-0 top-0 w-[400px] h-[400px] ${theme.accentLine} opacity-10 blur-[120px] rounded-full`} />

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

    {/* SOL */}
    <div>
      <div className={`w-16 h-[2px] ${theme.accentLine} mb-6`} />

      <h2 className={`${theme.title} text-3xl md:text-4xl font-serif italic mb-6 leading-snug`}>
        Kendinize Vakit Ayırın
      </h2>

      <p className={`${theme.subtitle} max-w-md leading-relaxed`}>
        Modern teknikler, kişiye özel analiz ve profesyonel dokunuşlarla
        saçınıza en uygun uygulamayı sunuyoruz.
      </p>

      <div className="mt-8">
        <a
          href={`https://wa.me/${content.salon.whatsapp}`}
          className={`${theme.button} px-6 py-3 text-sm`}
        >
          Ücretsiz Danış
        </a>
      </div>
    </div>

    {/* SAĞ BLOK */}
    <div className="relative">
      <div className={`${theme.card} p-10 h-[300px] flex items-center justify-center text-center`}>
        <p className={`${theme.subtitle} text-sm leading-relaxed`}>
          Kişiye özel analiz<br />
          +<br />
          Profesyonel dokunuş<br />
          =<br />
          Fark yaratan sonuç
        </p>
      </div>

      <div className={`absolute -bottom-6 -left-6 w-24 h-24 ${theme.accentLine} opacity-20 rounded-full blur-xl`} />
    </div>

  </div>
</section>

      {/* HİZMETLER */}
      <section id="hizmetler" className={`${theme.sectionAlt} py-32 px-6 md:px-16`}>
        <h2 className={`${theme.title} text-4xl mb-20`}>
          Güzellik <span className={`${theme.link} italic`}>Menüsü</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {content.hizmetler.map((item, i) => (
            <div key={i} className={`${theme.card} p-8 transition-all duration-300 hover:-translate-y-2`}>
              <span className={`${theme.link} text-xs`}>0{i+1}</span>
              <h3 className={`${theme.title} text-xl mt-4 mb-2`}>
                {item.title}
              </h3>
              <p className={`${theme.subtitle} text-sm`}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className={`${theme.subtitle} mb-6`}>
            Size en uygun hizmeti birlikte belirleyelim
          </p>

          <a
            href={`https://wa.me/${content.salon.whatsapp}`}
            target="_blank"
            className={`${theme.button} px-10 py-4`}
          >
            Hemen Randevu Oluştur
          </a>
        </div>
      </section>

      {/* EKİP */}
      <section id="ekip" className="py-32 px-6 md:px-16">
        <h2 className={`${theme.title} text-4xl mb-20`}>
          İşletme <span className={`${theme.link} italic`}>Sahibi</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {content.ekip.map((item, i) => (
            <div key={i}>
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  className="w-full h-[300px] object-cover mb-6 grayscale hover:grayscale-0 hover:scale-105 transition duration-500"
                />
              </div>

              <h3 className={theme.title}>{item.name}</h3>
              <p className={`${theme.subtitle} text-sm`}>{item.role}</p>

              <p className={`${theme.subtitle} text-sm mt-4 italic`}>
                "{item.bio}"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* YORUMLAR */}
      <section className={`${theme.sectionSoft} py-32 px-6 md:px-16`}>
        <h2 className={`${theme.title} text-4xl mb-20`}>
          Sizden <span className={`${theme.link} italic`}>Gelenler</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              name: "Ayşe T.",
              comment: "Beklentimin çok üstündeydi."
            },
            {
              name: "Zeynep Y.",
              comment: "Renk tam istediğim gibi oldu."
            },
            {
              name: "Merve Ç.",
              comment: "Herkesten övgü aldım."
            }
          ].map((item, i) => (
            <div key={i} className={`${theme.card} p-8`}>
              <p className={`${theme.subtitle} italic`}>
                "{item.comment}"
              </p>
              <span className={`block mt-4 ${theme.link}`}>
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ALT CTA */}
      <section className="py-24 px-6 text-center">
        <h2 className={`${theme.title} text-3xl md:text-4xl mb-6`}>
          Değişime Hazır Mısınız?
        </h2>

        <p className={`${theme.subtitle} mb-10`}>
          Size en uygun saç tasarımını birlikte belirleyelim.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a href={`tel:${content.salon.phone}`} className={`${theme.button} px-8 py-4`}>
            Ara
          </a>

          <a href={`https://wa.me/${content.salon.whatsapp}`} className={`${theme.soft} px-8 py-4`}>
            WhatsApp
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={`${theme.footerBg} py-20 px-6 text-center`}>
        <h3 className="text-2xl mb-4 text-white/90">{content.salon.shortName}</h3>

        <p className={`${theme.subtitle} mb-6`}>
          {content.salon.slogan}
        </p>

        <a href="#" className={`${theme.subtitle} flex justify-center items-center gap-2`}>
          <FaInstagram /> instagram
        </a>

        <p className={`${theme.subtitle} text-xs mt-10`}>
          {content.salon.copyright}
        </p>
      </footer>

    </main>
  )
}