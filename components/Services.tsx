'use client'
import { useTranslations } from 'next-intl'
import RevealOnScroll from './RevealOnScroll'

const icons = [
  <svg key="1" className="w-12 h-12 text-gold mb-6" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="6" y="20" width="36" height="22" rx="0" />
    <path d="M2 20L24 6L46 20" />
    <rect x="18" y="30" width="12" height="12" />
  </svg>,
  <svg key="2" className="w-12 h-12 text-gold mb-6" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M8 42V18L24 6L40 18V42" />
    <rect x="16" y="28" width="6" height="14" />
    <rect x="26" y="28" width="6" height="14" />
    <path d="M4 42H44" />
    <path d="M14 18H34" />
  </svg>,
  <svg key="3" className="w-12 h-12 text-gold mb-6" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M10 38L6 42h36l-4-4" />
    <rect x="10" y="10" width="28" height="28" />
    <path d="M10 22h28M22 10v28" />
    <circle cx="22" cy="22" r="4" />
  </svg>,
  <svg key="4" className="w-12 h-12 text-gold mb-6" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 36C4 28 12 24 24 24S44 28 44 36" />
    <path d="M4 36H44" />
    <circle cx="24" cy="14" r="8" />
    <path d="M16 36V42M32 36V42" />
  </svg>,
  <svg key="5" className="w-12 h-12 text-gold mb-6" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="24" cy="24" r="18" />
    <path d="M24 12V24L32 32" />
    <path d="M14 8L6 4M34 8L42 4" />
  </svg>,
]

const cards = [
  { num: '01', titleKey: 'card1Title', descKey: 'card1Desc', delay: 0 },
  { num: '02', titleKey: 'card2Title', descKey: 'card2Desc', delay: 0.1 },
  { num: '03', titleKey: 'card3Title', descKey: 'card3Desc', delay: 0.2 },
  { num: '04', titleKey: 'card4Title', descKey: 'card4Desc', delay: 0.1 },
  { num: '05', titleKey: 'card5Title', descKey: 'card5Desc', delay: 0.2 },
] as const

export default function Services() {
  const t = useTranslations('services')

  return (
    <section id="services" className="py-[120px] px-[60px] max-md:py-20 max-md:px-6">
      <RevealOnScroll>
        <div className="font-space text-[11px] tracking-[4px] text-gold uppercase flex items-center gap-4 mb-5">
          <span className="block w-10 h-px bg-gold shrink-0" />
          {t('label')}
        </div>
      </RevealOnScroll>
      <RevealOnScroll delay={0.05}>
        <h2 className="font-bebas text-[clamp(52px,6vw,96px)] leading-[0.95] tracking-[1px] mb-20">
          {t('title')}
        </h2>
      </RevealOnScroll>

      <div className="grid grid-cols-3 gap-px bg-gold/[0.08] border border-gold/[0.08] max-md:grid-cols-1">
        {cards.map(({ num, titleKey, descKey, delay }, i) => (
          <RevealOnScroll key={num} delay={delay}>
            <div className="group relative bg-bg hover:bg-bg3 transition-colors duration-300 overflow-hidden h-full">
              <div className="p-12 max-md:p-8 flex flex-col h-full">
                <div className="font-space text-[11px] text-gold-dim tracking-[2px] mb-8">
                  {num}
                </div>
                {icons[i]}
                <div className="font-bebas text-[32px] tracking-[1px] text-off-white mb-3 leading-none">
                  {t(titleKey)}
                </div>
                <p className="text-[15px] text-muted leading-[1.7] mt-4 flex-1">
                  {t(descKey)}
                </p>
                <div className="mt-8 font-space text-[11px] tracking-[2px] text-gold-dim uppercase flex items-center gap-2 group-hover:gap-4 group-hover:text-gold transition-all duration-300">
                  <span>{t('learnMore')}</span>
                  <span>&rarr;</span>
                </div>
              </div>
              <div className="service-card-line" />
            </div>
          </RevealOnScroll>
        ))}

        <RevealOnScroll delay={0.3}>
          <div className="bg-bg3 p-12 max-md:p-8 flex items-end min-h-[300px]">
            <div className="w-full">
              <p className="font-space text-[11px] tracking-[3px] text-gold-dim uppercase mb-4">
                {t('card6Label')}
              </p>
              <p className="font-bebas text-[36px] text-off-white leading-[1.1] mb-6">
                {t('card6Title')}
              </p>
              <a
                href="#contact"
                className="font-space text-[11px] tracking-[2px] uppercase text-bg bg-gold px-6 py-3 hover:bg-gold-light transition-colors duration-200 inline-block"
              >
                {t('card6Cta')}
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
