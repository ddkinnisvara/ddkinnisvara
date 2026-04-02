'use client'
import { useTranslations } from 'next-intl'
import RevealOnScroll from './RevealOnScroll'

const points = [
  { num: '01', titleKey: 'point1Title', descKey: 'point1Desc', delay: 0 },
  { num: '02', titleKey: 'point2Title', descKey: 'point2Desc', delay: 0.1 },
  { num: '03', titleKey: 'point3Title', descKey: 'point3Desc', delay: 0.2 },
  { num: '04', titleKey: 'point4Title', descKey: 'point4Desc', delay: 0.3 },
] as const

export default function WhyUs() {
  const t = useTranslations('whyUs')

  return (
    <section id="about" className="bg-bg2 py-[120px] px-[60px] max-md:py-20 max-md:px-6">
      <div className="grid grid-cols-2 gap-20 items-start max-md:grid-cols-1 max-md:gap-12">
        <RevealOnScroll>
          <div className="sticky top-[120px] max-md:static">
            <div className="font-bebas text-[clamp(100px,14vw,220px)] leading-[0.85] text-transparent text-stroke-border tracking-[-5px] mb-10 max-md:text-[80px]">
              WHY
              <br />
              D&amp;D
            </div>
            <p className="text-[18px] text-muted max-w-[400px] leading-[1.8]">
              {t('tagline')}
            </p>
          </div>
        </RevealOnScroll>

        <div className="flex flex-col pt-10 max-md:pt-0">
          {points.map(({ num, titleKey, descKey, delay }, i) => (
            <RevealOnScroll key={num} delay={delay}>
              <div
                className={`py-10 grid grid-cols-[80px_1fr] gap-8 items-start border-b border-gold/[0.08] ${
                  i === 0 ? 'border-t border-gold/[0.08]' : ''
                }`}
              >
                <div className="font-bebas text-[64px] text-gold leading-none opacity-50">
                  {num}
                </div>
                <div>
                  <div className="font-bebas text-[28px] tracking-[1px] mb-3">
                    {t(titleKey)}
                  </div>
                  <p className="text-[15px] text-muted leading-[1.7]">
                    {t(descKey)}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
