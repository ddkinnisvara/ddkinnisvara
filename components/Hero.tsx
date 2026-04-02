'use client'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay },
})

const lineReveal = (delay: number) => ({
  initial: { y: '100%', opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay },
})

export default function Hero() {
  const t = useTranslations('hero')

  return (
    <section className="min-h-[100svh] flex flex-col justify-end relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(12,11,9,0.2) 0%, rgba(12,11,9,0.55) 55%, rgba(12,11,9,1) 100%), linear-gradient(110deg, #1c1812 0%, #0c0b09 45%, #14110e 100%)',
        }}
      />

      {/* Subtle diagonal accent */}
      <div
        className="absolute top-0 right-[18%] w-px h-full z-[2] opacity-15"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, #8A7147 40%, transparent 100%)',
          transform: 'skewX(-6deg)',
        }}
      />

      {/* Architectural building illustration */}
      <div
        className="absolute right-0 top-0 bottom-0 w-[52%] z-[1] pointer-events-none overflow-hidden max-md:w-full"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 400 720"
          fill="none"
          stroke="#C8A96E"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 right-0 h-[92%]"
          style={{ opacity: 0.055 }}
        >
          {/* Crane mast */}
          <line x1="195" y1="0" x2="195" y2="125" strokeWidth="2.5" />
          {/* Crane jib */}
          <line x1="85" y1="22" x2="345" y2="22" strokeWidth="1.8" />
          {/* Counter-jib weight */}
          <rect x="80" y="16" width="12" height="10" strokeWidth="1" />
          {/* Stay cables */}
          <line x1="195" y1="4" x2="320" y2="22" strokeWidth="0.9" />
          <line x1="195" y1="4" x2="105" y2="22" strokeWidth="0.9" />
          {/* Trolley */}
          <rect x="301" y="18" width="10" height="7" strokeWidth="1" />
          {/* Hoist rope */}
          <line x1="306" y1="25" x2="306" y2="95" strokeWidth="1" strokeDasharray="5 3" />
          {/* Hook */}
          <rect x="300" y="93" width="12" height="8" strokeWidth="1" />

          {/* Main building outline */}
          <rect x="68" y="125" width="210" height="570" strokeWidth="1.5" />

          {/* Main building windows: 4 cols × 13 rows */}
          {Array.from({ length: 13 }, (_, row) =>
            Array.from({ length: 4 }, (_, col) => (
              <rect
                key={`mw-${row}-${col}`}
                x={92 + col * 42}
                y={148 + row * 40}
                width="26"
                height="24"
                strokeWidth="0.65"
              />
            ))
          )}

          {/* Scaffolding left side */}
          <line x1="55" y1="125" x2="55" y2="695" strokeWidth="1.3" />
          <line x1="44" y1="125" x2="44" y2="695" strokeWidth="1.3" />
          {[190, 250, 310, 370, 430, 490, 550, 610, 668].map((y) => (
            <line key={`ledger-${y}`} x1="44" y1={y} x2="68" y2={y} strokeWidth="0.9" />
          ))}
          {/* Scaffolding diagonal bracing */}
          <line x1="44" y1="190" x2="55" y2="250" strokeWidth="0.6" />
          <line x1="55" y1="250" x2="44" y2="310" strokeWidth="0.6" />
          <line x1="44" y1="310" x2="55" y2="370" strokeWidth="0.6" />
          <line x1="55" y1="370" x2="44" y2="430" strokeWidth="0.6" />

          {/* Second building (right) */}
          <rect x="283" y="280" width="90" height="415" strokeWidth="1.3" />

          {/* Second building windows: 2 cols × 8 rows */}
          {Array.from({ length: 8 }, (_, row) =>
            Array.from({ length: 2 }, (_, col) => (
              <rect
                key={`b2w-${row}-${col}`}
                x={295 + col * 34}
                y={300 + row * 50}
                width="22"
                height="28"
                strokeWidth="0.65"
              />
            ))
          )}

          {/* Ground line */}
          <line x1="18" y1="696" x2="390" y2="696" strokeWidth="1.8" />
          <line x1="18" y1="700" x2="390" y2="700" strokeWidth="0.6" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-[3] px-[60px] pb-[80px] pt-[140px] max-md:px-5 max-md:pb-12 max-md:pt-[100px]">

        <motion.p
          className="font-space text-[11px] tracking-[3px] text-gold uppercase mb-5 flex items-center gap-3 max-md:text-[10px] max-md:tracking-[2px]"
          {...fadeUp(0.2)}
        >
          <span className="block w-8 h-px bg-gold shrink-0" />
          {t('label')}
        </motion.p>

        <h1 className="font-bebas leading-[0.9] tracking-[1px] text-off-white mb-6 max-w-[900px]"
          style={{ fontSize: 'clamp(42px, 9vw, 140px)' }}>
          <span className="block overflow-hidden">
            <motion.span className="block" {...lineReveal(0.4)}>
              {t('line1')}
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span className="block" {...lineReveal(0.55)}>
              {t('line2')}
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span className="block text-gold" {...lineReveal(0.7)}>
              {t('line3')}
            </motion.span>
          </span>
        </h1>

        <motion.p
          className="text-[17px] text-muted max-w-[460px] font-light leading-[1.7] mb-10 max-md:text-[15px] max-md:mb-8"
          {...fadeUp(1.0)}
        >
          {t('sub')}
        </motion.p>

        <motion.div
          className="flex items-center gap-4 mb-16 max-md:flex-col max-md:items-stretch max-md:gap-3 max-md:mb-10"
          {...fadeUp(1.1)}
        >
          <a
            href="#contact"
            className="font-space text-[11px] tracking-[2px] uppercase text-bg bg-gold px-8 py-4 hover:bg-gold-light hover:-translate-y-0.5 transition-all duration-200 text-center"
          >
            {t('ctaPrimary')}
          </a>
          <a
            href="#projects"
            className="font-space text-[11px] tracking-[2px] uppercase text-gold border border-gold-dim px-8 py-4 hover:border-gold hover:text-gold-light hover:-translate-y-0.5 transition-all duration-200 text-center"
          >
            {t('ctaGhost')}
          </a>
        </motion.div>

        <motion.div className="flex gap-10 max-md:gap-6 flex-wrap" {...fadeUp(1.2)}>
          <div className="flex flex-col">
            <div className="font-bebas text-[44px] text-off-white leading-none max-md:text-[36px]">
              20<span className="text-gold">+</span>
            </div>
            <div className="font-space text-[10px] tracking-[2px] text-muted uppercase mt-1">
              {t('stat1Label')}
            </div>
          </div>
          <div className="flex flex-col">
            <div className="font-bebas text-[44px] text-off-white leading-none max-md:text-[36px]">
              500<span className="text-gold">+</span>
            </div>
            <div className="font-space text-[10px] tracking-[2px] text-muted uppercase mt-1">
              {t('stat2Label')}
            </div>
          </div>
          <div className="flex flex-col">
            <div className="font-bebas text-[44px] text-off-white leading-none max-md:text-[36px]">
              100<span className="text-gold">%</span>
            </div>
            <div className="font-space text-[10px] tracking-[2px] text-muted uppercase mt-1">
              {t('stat3Label')}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
