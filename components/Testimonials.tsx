'use client'
import { useTranslations } from 'next-intl'
import RevealOnScroll from './RevealOnScroll'

export default function Testimonials() {
  const t = useTranslations('testimonials')

  return (
    <section className="bg-bg2 py-[120px] px-[60px] max-md:py-20 max-md:px-6">
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

      <div className="grid grid-cols-2 gap-0.5 max-md:grid-cols-1">
        {[
          { textKey: 't1Text', nameKey: 't1Name', companyKey: 't1Company', initialsKey: 't1Initials', delay: 0 },
          { textKey: 't2Text', nameKey: 't2Name', companyKey: 't2Company', initialsKey: 't2Initials', delay: 0.2 },
        ].map(({ textKey, nameKey, companyKey, initialsKey, delay }) => (
          <RevealOnScroll key={nameKey} delay={delay}>
            <div className="bg-bg3 p-14 relative border border-gold/[0.08] hover:border-gold/[0.15] transition-colors duration-300 max-md:p-10">
              <span className="font-bebas text-[120px] text-gold opacity-[0.12] leading-[0.8] mb-[-20px] block">
                &ldquo;
              </span>
              <p className="text-[18px] leading-[1.8] text-off-white font-light mb-8">
                {t(textKey)}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-gold flex items-center justify-center shrink-0">
                  <span className="font-bebas text-[18px] text-bg">
                    {t(initialsKey)}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-[15px]">{t(nameKey)}</div>
                  <div className="text-[13px] text-muted font-space tracking-[1px]">
                    {t(companyKey)}
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  )
}
