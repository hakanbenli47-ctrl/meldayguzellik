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
      scrolled ? `${theme.headerBg} shadow-[0_10px_40px_rgba(0,0,0,0.6)] py-4` : "bg-transparent py-6"
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12">
        <div>
          <span className={`${theme.title} text-lg tracking-widest`}>
            {content.salon.shortName}
          </span>
        </div>

        <nav className="hidden md:flex gap-8 text-xs uppercase tracking-widest">
          <a href="#hizmetler">Hizmetler</a>
          <a href="#hakkimizda">Hakkımızda</a>
          <a href="#ekip">Ekip</a>
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
      <section className="relative min-h-screen flex items-center px-6 md:px-16 pt-32 overflow-hidden">

        {/* LIGHT EFFECT */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 bg-yellow-400/10 blur-[140px] rounded-full" />
        </div>

        <div className="max-w-6xl w-full relative z-10">
          <p className={`${theme.subtitle} text-xs tracking-[0.4em] mb-6`}>
            {content.salon.location}
          </p>

          <h1 className={`${theme.title} text-5xl md:text-7xl font-light leading-[1.05]`}>
            <span className="block text-white/80">
              Sadece saç değil,
            </span>
            <span className="block mt-4 text-yellow-400 italic font-serif text-4xl md:text-6xl drop-shadow-[0_0_20px_rgba(255,215,0,0.2)]">
              Özgüven tasarlıyoruz.
            </span>
          </h1>

          <p className={`${theme.subtitle} mt-8 max-w-md`}>
            {content.salon.slogan}
          </p>

          <div className="flex gap-4 mt-10 flex-wrap">
            <a href={`tel:${content.salon.phone}`} className={`${theme.button} px-8 py-4 shadow-[0_10px_30px_rgba(255,215,0,0.2)] hover:scale-105 transition`}>
              Ara
            </a>
            <a href={`https://wa.me/${content.salon.whatsapp}`} className={`${theme.soft} px-8 py-4`}>
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* HAKKIMIZDA */}
      <section id="hakkimizda" className={`${theme.sectionSoft} py-24 px-6 md:px-16`}>
        <h2 className={`${theme.title} text-3xl font-serif italic mb-6`}>
          Kendinize Vakit Ayırın
        </h2>
        <p className={`${theme.subtitle} max-w-2xl`}>
          Modern dokunuşlar, profesyonel ekipmanlar ve alanında uzman kadromuzla saçınıza ve cildinize en uygun bakımı sunuyoruz.
        </p>
      </section>

      {/* HİZMETLER */}
      <section id="hizmetler" className={`${theme.sectionAlt} py-32 px-6 md:px-16`}>
        <h2 className={`${theme.title} text-4xl mb-20`}>
          Güzellik <span className="text-yellow-400 italic">Menüsü</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {content.hizmetler.map((item, i) => (
            <div key={i} className={`${theme.card} p-8 transition-all duration-300 hover:border-yellow-400 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]`}>
              <span className="text-yellow-400 text-xs">0{i+1}</span>
              <h3 className={`${theme.title} text-xl mt-4 mb-2`}>{item.title}</h3>
              <p className={`${theme.subtitle} text-sm`}>{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-20 text-center">

  <p className={`${theme.subtitle} mb-6`}>
    Size en uygun hizmeti birlikte belirleyelim
  </p>

  <a
    href={`https://wa.me/${content.salon.whatsapp}`}
    target="_blank"
    className="inline-block bg-yellow-400 text-black px-10 py-4 text-xs tracking-widest uppercase hover:scale-105 transition shadow-[0_10px_30px_rgba(255,215,0,0.2)]"
  >
    Hemen Randevu Oluştur
  </a>

</div>
      </section>

      {/* EKİP */}
      <section id="ekip" className="py-32 px-6 md:px-16">
        <h2 className={`${theme.title} text-4xl mb-20`}>
          İşletme <span className="italic text-yellow-400">Sahibi</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {content.ekip.map((item, i) => (
            <div key={i} className="group">
              <div className="overflow-hidden">
                <img src={item.img} className="w-full h-[300px] object-cover mb-6 grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-500" />
              </div>
              <h3 className={`${theme.title}`}>{item.name}</h3>
              <p className={`${theme.subtitle} text-sm`}>{item.role}</p>
              <p className={`${theme.subtitle} text-sm mt-4 italic`}>
                "{item.bio}"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* YORUMLAR */}
      <section id="yorumlar" className={`${theme.sectionSoft} py-32 px-6 md:px-16`}>
        <h2 className={`${theme.title} text-4xl mb-20`}>
          Sizden <span className="italic text-yellow-400">Gelenler</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              name: "Ayşe T.",
              comment: "Saç kesimi ve bakım için geldim, gerçekten beklentimin çok üstündeydi. Hem ilgi hem sonuç mükemmeldi."
            },
            {
              name: "Zeynep Y.",
              comment: "Saç boyama işlemi yaptırdım, renk tam istediğim gibi oldu. Çok profesyonel bir ekip."
            },
            {
              name: "Merve Ç.",
              comment: "Gelin saçı ve makyaj için tercih ettim, sonuç inanılmazdı. Herkesten övgü aldım."
            }
          ].map((item, i) => (
            <div key={i} className={`${theme.card} p-8 transition hover:-translate-y-2 hover:shadow-xl`}>
              <p className={`${theme.subtitle} italic`}>"{item.comment}"</p>
              <span className="block mt-4 text-yellow-400">{item.name}</span>
            </div>
          ))}
        </div>
      </section>
<section className="py-24 px-6 text-center">

  <h2 className={`${theme.title} text-3xl md:text-4xl mb-6`}>
    Değişime Hazır Mısınız?
  </h2>

  <p className={`${theme.subtitle} mb-10`}>
    Size en uygun saç tasarımını birlikte belirleyelim.
  </p>

  <div className="flex justify-center gap-4 flex-wrap">
    <a
      href={`tel:${content.salon.phone}`}
      className={`${theme.button} px-8 py-4`}
    >
      Ara
    </a>

    <a
      href={`https://wa.me/${content.salon.whatsapp}`}
      className="bg-yellow-400 text-black px-8 py-4 hover:scale-105 transition"
    >
      WhatsApp
    </a>
  </div>

</section>
      {/* FOOTER */}
      <footer className={`${theme.footerBg} py-20 px-6 text-center`}>
        <h3 className="text-2xl mb-4">{content.salon.shortName}</h3>
        <p className={`${theme.subtitle} mb-6`}>{content.salon.slogan}</p>

        <a href="#" className="flex justify-center items-center gap-2 text-white/60 hover:text-white">
          <FaInstagram /> abdullah_camm
        </a>

        <p className="text-white/30 text-xs mt-10">{content.salon.copyright}</p>
      </footer>

    </main>
  )
}