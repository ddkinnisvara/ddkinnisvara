'use client'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

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

      {/* Right: real construction photo */}
      <div className="absolute right-0 top-0 h-full w-[52%] z-[1] max-md:w-full">
        <Image
          src="/images/house-exterior.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
        {/* Left blend — photo fades into dark background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(12,11,9,1) 0%, rgba(12,11,9,0.65) 22%, rgba(12,11,9,0.1) 60%, rgba(12,11,9,0) 100%)',
          }}
        />
        {/* Bottom fade for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(12,11,9,0.9) 0%, rgba(12,11,9,0.3) 30%, transparent 60%)',
          }}
        />
        {/* Mobile: extra overlay so photo doesn't compete with text */}
        <div className="absolute inset-0 bg-bg/60 md:hidden" />
      </div>

      {/* Content */}
      <div className="relative z-[3] px-[60px] pb-[80px] pt-[140px] max-md:px-5 max-md:pb-12 max-md:pt-[100px] max-w-[54%] max-md:max-w-full">

        <motion.p
          className="font-space text-[11px] tracking-[3px] text-gold uppercase mb-5 max-md:text-[10px] max-md:tracking-[2px]"
          {...fadeUp(0.2)}
        >
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
          className="text-[17px] text-muted max-w-[460px] font-light leading-[1.7] mb-10 max-md:hidden"
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
            href="#gallery"
            className="font-space text-[11px] tracking-[2px] uppercase text-gold border border-gold-dim px-8 py-4 hover:border-gold hover:text-gold-light hover:-translate-y-0.5 transition-all duration-200 text-center"
          >
            {t('ctaGhost')}
          </a>
        </motion.div>

        <motion.div className="flex gap-10 max-md:grid max-md:grid-cols-3 max-md:gap-x-4" {...fadeUp(1.2)}>
          <div className="flex flex-col">
            <div className="font-bebas text-[44px] text-off-white leading-none max-md:text-[36px]">
              20<span className="text-gold">+</span>
            </div>
            <div className="font-space text-[10px] tracking-[2px] text-muted uppercase mt-1 max-md:tracking-[0px] max-md:text-[9px]">
              {t('stat1Label')}
            </div>
          </div>
          <div className="flex flex-col">
            <div className="font-bebas text-[44px] text-off-white leading-none max-md:text-[36px]">
              500<span className="text-gold">+</span>
            </div>
            <div className="font-space text-[10px] tracking-[2px] text-muted uppercase mt-1 max-md:tracking-[0px] max-md:text-[9px]">
              {t('stat2Label')}
            </div>
          </div>
          <div className="flex flex-col">
            <div className="font-bebas text-[44px] text-off-white leading-none max-md:text-[36px]">
              100<span className="text-gold">%</span>
            </div>
            <div className="font-space text-[10px] tracking-[2px] text-muted uppercase mt-1 max-md:tracking-[0px] max-md:text-[9px]">
              {t('stat3Label')}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
