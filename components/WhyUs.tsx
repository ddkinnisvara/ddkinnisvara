'use client'
import { useTranslations } from 'next-intl'
import RevealOnScroll from './RevealOnScroll'

const points = [
  { num: '01', titleKey: 'point1Title', delay: 0 },
  { num: '02', titleKey: 'point2Title', delay: 0.1 },
  { num: '03', titleKey: 'point3Title', delay: 0.2 },
  { num: '04', titleKey: 'point4Title', delay: 0.3 },
] as const

export default function WhyUs() {
  const t = useTranslations('whyUs')

  return (
    <section id="about" className="bg-bg2 py-[120px] px-[60px] max-md:py-16 max-md:px-5">
      <div className="grid grid-cols-2 gap-20 items-start max-md:grid-cols-1 max-md:gap-10">

        {/* Left — sticky display column */}
        <RevealOnScroll>
          <div className="sticky top-[100px] max-md:static">
            <div className="font-space text-[11px] tracking-[4px] text-gold uppercase flex items-center gap-3 mb-6">
              <span className="block w-8 h-px bg-gold shrink-0" />
              WHY
            </div>
            <div
              className="font-bebas leading-[0.88] tracking-[-2px]"
              style={{ fontSize: 'clamp(78px, 13vw, 210px)' }}
            >
              <span className="block text-off-white">D&amp;D</span>
            </div>
          </div>
        </RevealOnScroll>

        {/* Right — numbered points */}
        <div className="flex flex-col pt-2 max-md:pt-0">
          {points.map(({ num, titleKey, delay }, i) => (
            <RevealOnScroll key={num} delay={delay}>
              <div
                className={`py-9 grid grid-cols-[56px_1fr] gap-6 items-center border-b border-gold/[0.1] max-md:py-7 max-md:grid-cols-[44px_1fr] max-md:gap-4 ${
                  i === 0 ? 'border-t border-gold/[0.1]' : ''
                }`}
              >
                <div className="font-bebas text-[48px] text-gold leading-none opacity-25 max-md:text-[36px]">
                  {num}
                </div>
                <div className="font-bebas text-[28px] tracking-[0.5px] text-off-white leading-none max-md:text-[22px]">
                  {t(titleKey)}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
