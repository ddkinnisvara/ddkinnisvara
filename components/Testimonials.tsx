'use client'
import { useTranslations } from 'next-intl'
import RevealOnScroll from './RevealOnScroll'

export default function Testimonials() {
  const t = useTranslations('testimonials')

  const items = [
    { textKey: 't1Text', nameKey: 't1Name', companyKey: 't1Company', delay: 0 },
    { textKey: 't2Text', nameKey: 't2Name', companyKey: 't2Company', delay: 0.15 },
  ] as const

  return (
    <section className="bg-bg2 py-[120px] px-[60px] max-md:py-16 max-md:px-5">
      <RevealOnScroll>
        <div className="font-space text-[11px] tracking-[3px] text-gold uppercase flex items-center gap-4 mb-4">
          <span className="block w-8 h-px bg-gold shrink-0" />
          {t('label')}
        </div>
      </RevealOnScroll>
      <RevealOnScroll delay={0.05}>
        <h2 className="font-bebas text-[clamp(48px,6vw,96px)] leading-[0.95] tracking-[1px] mb-20 max-md:mb-12">
          {t('title')}
        </h2>
      </RevealOnScroll>

      <div className="grid grid-cols-2 max-md:grid-cols-1">
        {items.map(({ textKey, nameKey, companyKey, delay }, i) => (
          <RevealOnScroll key={nameKey} delay={delay}>
            <div
              className={`py-2 max-md:py-10 ${
                i === 0
                  ? 'pr-16 border-r border-gold/[0.12] max-md:pr-0 max-md:border-r-0 max-md:border-b max-md:border-gold/[0.12]'
                  : 'pl-16 max-md:pl-0'
              }`}
            >
              {/* Decorative quote */}
              <div className="font-bebas text-[56px] text-gold opacity-30 leading-none mb-6 max-md:text-[44px] max-md:mb-4">
                &ldquo;
              </div>

              {/* Quote text */}
              <p className="text-[18px] text-off-white font-light leading-[1.85] mb-10 max-md:text-[16px] max-md:mb-8">
                {t(textKey)}
              </p>

              {/* Attribution */}
              <div className="pt-7 border-t border-gold/[0.1]">
                <div className="text-[15px] font-medium text-off-white">{t(nameKey)}</div>
                <div className="text-[12px] text-muted font-space tracking-[1px] mt-1">{t(companyKey)}</div>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  )
}
