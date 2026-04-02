'use client'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
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
    <section className="min-h-screen grid grid-rows-[1fr] relative overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(12,11,9,0.3) 0%, rgba(12,11,9,0.6) 60%, rgba(12,11,9,1) 100%), linear-gradient(105deg, #1a1612 0%, #0c0b09 40%, #161310 100%)',
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(#C8A96E 1px, transparent 1px), linear-gradient(90deg, #C8A96E 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Diagonal accent line */}
      <div
        className="absolute top-0 right-[15%] w-px h-full z-[2] opacity-30"
        style={{
          background: 'linear-gradient(to bottom, transparent, #8A7147, transparent)',
          transform: 'skewX(-8deg)',
        }}
      />

      {/* Content */}
      <div className="relative z-[3] flex flex-col justify-end px-[60px] pb-20 min-h-screen max-md:px-6 max-md:pb-[60px]">
        <motion.p
          className="font-space text-[11px] tracking-[4px] text-gold uppercase mb-6 flex items-center gap-4"
          {...fadeUp(0.2)}
        >
          <span className="block w-10 h-px bg-gold shrink-0" />
          {t('label')}
        </motion.p>

        <h1 className="font-bebas text-[clamp(72px,9vw,140px)] leading-[0.92] tracking-[2px] text-off-white mb-8 max-w-[900px] max-md:text-[64px]">
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
          className="text-[18px] text-muted max-w-[480px] font-light leading-[1.7] mb-12"
          {...fadeUp(1.0)}
        >
          {t('sub')}
        </motion.p>

        <motion.div
          className="flex items-center gap-6 mb-20 max-md:mb-10 flex-wrap"
          {...fadeUp(1.1)}
        >
          <a
            href="#contact"
            className="font-space text-[12px] tracking-[2px] uppercase text-bg bg-gold px-9 py-4 hover:bg-gold-light hover:-translate-y-0.5 transition-all duration-200 inline-block"
          >
            {t('ctaPrimary')}
          </a>
          <a
            href="#projects"
            className="font-space text-[12px] tracking-[2px] uppercase text-gold border border-gold-dim px-9 py-4 hover:border-gold hover:text-gold-light hover:-translate-y-0.5 transition-all duration-200 inline-block"
          >
            {t('ctaGhost')}
          </a>
        </motion.div>

        <motion.div className="flex gap-12 max-md:gap-8 flex-wrap" {...fadeUp(1.2)}>
          <div className="flex flex-col">
            <div className="font-bebas text-[48px] text-off-white leading-none">
              20<span className="text-gold">+</span>
            </div>
            <div className="font-space text-[10px] tracking-[2px] text-muted uppercase mt-1">
              {t('stat1Label')}
            </div>
          </div>
          <div className="flex flex-col">
            <div className="font-bebas text-[48px] text-off-white leading-none">
              500<span className="text-gold">+</span>
            </div>
            <div className="font-space text-[10px] tracking-[2px] text-muted uppercase mt-1">
              {t('stat2Label')}
            </div>
          </div>
          <div className="flex flex-col">
            <div className="font-bebas text-[48px] text-off-white leading-none">
              100<span className="text-gold">%</span>
            </div>
            <div className="font-space text-[10px] tracking-[2px] text-muted uppercase mt-1">
              {t('stat3Label')}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute right-[60px] bottom-[60px] z-[2] font-bebas text-[280px] leading-none text-transparent text-stroke-border2 tracking-[-10px] select-none max-md:hidden"
        {...fadeUp(1.4)}
      >
        D&amp;D
      </motion.div>
    </section>
  )
}
