'use client'
import { useTranslations } from 'next-intl'
import RevealOnScroll from './RevealOnScroll'

const icons = [
  <svg key="1" className="w-9 h-9 text-gold mb-5" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="6" y="20" width="36" height="22" rx="0" />
    <path d="M2 20L24 6L46 20" />
    <rect x="18" y="30" width="12" height="12" />
  </svg>,
  <svg key="2" className="w-9 h-9 text-gold mb-5" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M8 42V18L24 6L40 18V42" />
    <rect x="16" y="28" width="6" height="14" />
    <rect x="26" y="28" width="6" height="14" />
    <path d="M4 42H44" />
    <path d="M14 18H34" />
  </svg>,
  <svg key="3" className="w-9 h-9 text-gold mb-5" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M10 38L6 42h36l-4-4" />
    <rect x="10" y="10" width="28" height="28" />
    <path d="M10 22h28M22 10v28" />
    <circle cx="22" cy="22" r="4" />
  </svg>,
  <svg key="4" className="w-9 h-9 text-gold mb-5" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 36C4 28 12 24 24 24S44 28 44 36" />
    <path d="M4 36H44" />
    <circle cx="24" cy="14" r="8" />
    <path d="M16 36V42M32 36V42" />
  </svg>,
  <svg key="5" className="w-9 h-9 text-gold mb-5" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="24" cy="24" r="18" />
    <path d="M24 12V24L32 32" />
    <path d="M14 8L6 4M34 8L42 4" />
  </svg>,
  // Post-construction cleaning
  <svg key="6" className="w-9 h-9 text-gold mb-5" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M16 6h16v10H16z" />
    <path d="M24 16v26" />
    <path d="M18 42h12" />
    <path d="M10 28c4-2 8 2 14 0s10 2 14 0" />
  </svg>,
  // Demolition
  <svg key="7" className="w-9 h-9 text-gold mb-5" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="18" cy="14" r="8" />
    <path d="M18 22v12" />
    <path d="M18 34l16 8" />
    <path d="M18 34l-10 8" />
    <path d="M30 10l10 10M34 10l6 0M40 10v6" />
  </svg>,
  // CTA
  <svg key="8" className="w-9 h-9 text-gold mb-5 opacity-80" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M24 6v36M6 24h36M9.5 9.5l29 29M38.5 9.5l-29 29" />
  </svg>,
]

const cards = [
  { num: '01', titleKey: 'card1Title', descKey: 'card1Desc', delay: 0 },
  { num: '02', titleKey: 'card2Title', descKey: 'card2Desc', delay: 0.08 },
  { num: '03', titleKey: 'card3Title', descKey: 'card3Desc', delay: 0.16 },
  { num: '04', titleKey: 'card4Title', descKey: 'card4Desc', delay: 0.08 },
  { num: '05', titleKey: 'card5Title', descKey: 'card5Desc', delay: 0.16 },
  { num: '06', titleKey: 'card6Title', descKey: 'card6Desc', delay: 0 },
  { num: '07', titleKey: 'card7Title', descKey: 'card7Desc', delay: 0.08 },
] as const

export default function Services() {
  const t = useTranslations('services')

  return (
    <section id="services" className="py-[120px] px-[60px] max-md:py-16 max-md:px-5">
      <RevealOnScroll>
        <div className="font-space text-[11px] tracking-[3px] text-gold uppercase mb-4">
          {t('label')}
        </div>
      </RevealOnScroll>
      <RevealOnScroll delay={0.05}>
        <h2 className="font-bebas text-[clamp(48px,6vw,96px)] leading-[0.95] tracking-[1px] mb-16 max-md:mb-10">
          {t('title')}
        </h2>
      </RevealOnScroll>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-px md:bg-bg">
        {cards.map(({ num, titleKey, descKey, delay }, i) => (
          <RevealOnScroll key={num} delay={delay}>
            <div className="group relative bg-bg hover:bg-bg3 transition-colors duration-300 overflow-hidden h-full border border-gold/[0.07]">
              <div className="p-10 max-md:p-5 flex flex-col h-full">
                <div className="font-space text-[10px] text-gold-dim tracking-[2px] mb-4 max-md:mb-3">
                  {num}
                </div>
                <div className="max-md:[&>svg]:w-7 max-md:[&>svg]:h-7 max-md:[&>svg]:mb-3">
                  {icons[i]}
                </div>
                <div className="font-bebas text-[28px] max-md:text-[19px] tracking-[1px] text-off-white leading-tight">
                  {t(titleKey)}
                </div>
                <p className="text-[14px] text-muted leading-[1.75] mt-3 flex-1 max-md:hidden">
                  {t(descKey)}
                </p>
                <div className="mt-6 max-md:mt-3 font-space text-[10px] tracking-[2px] text-gold-dim uppercase flex items-center gap-2 group-hover:gap-4 group-hover:text-gold transition-all duration-300 max-md:hidden">
                  <span>{t('learnMore')}</span>
                  <span>&rarr;</span>
                </div>
                <div className="mt-3 md:hidden text-gold opacity-40 text-[14px]">→</div>
              </div>
              <div className="service-card-line" />
            </div>
          </RevealOnScroll>
        ))}

        {/* Card 6 — CTA */}
        <RevealOnScroll delay={0.16}>
          <div className="group relative bg-bg hover:bg-bg3 transition-colors duration-300 overflow-hidden h-full border border-gold/[0.07]">
            <div className="p-10 max-md:p-5 flex flex-col h-full">
              <div className="font-space text-[10px] text-gold-dim tracking-[2px] mb-4 max-md:mb-3">08</div>
              <div className="max-md:[&>svg]:w-7 max-md:[&>svg]:h-7 max-md:[&>svg]:mb-3">
                {icons[7]}
              </div>
              <div className="font-space text-[10px] tracking-[3px] text-gold-dim uppercase mb-2 max-md:hidden">
                {t('card8Label')}
              </div>
              <div className="font-bebas text-[28px] max-md:text-[19px] tracking-[1px] text-off-white leading-tight flex-1 mb-4 max-md:mb-3">
                {t('card8Title')}
              </div>
              <a
                href="#contact"
                className="font-space text-[10px] tracking-[2px] uppercase text-bg bg-gold px-5 py-3 hover:bg-gold-light transition-all duration-200 inline-block self-start"
              >
                {t('card8Cta')} &rarr;
              </a>
            </div>
            <div className="service-card-line" />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
