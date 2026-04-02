'use client'
import { useTranslations } from 'next-intl'
import RevealOnScroll from './RevealOnScroll'

const cards = [
  { tagKey: 'card1Tag', titleKey: 'card1Title', locKey: 'card1Loc', delay: 0 },
  { tagKey: 'card2Tag', titleKey: 'card2Title', locKey: 'card2Loc', delay: 0.08 },
  { tagKey: 'card3Tag', titleKey: 'card3Title', locKey: 'card3Loc', delay: 0.08 },
  { tagKey: 'card4Tag', titleKey: 'card4Title', locKey: 'card4Loc', delay: 0.16 },
] as const

export default function Projects() {
  const t = useTranslations('projects')

  return (
    <section id="projects" className="py-[120px] px-[60px] max-md:py-16 max-md:px-5">
      <RevealOnScroll>
        <div className="font-space text-[11px] tracking-[3px] text-gold uppercase flex items-center gap-4 mb-4">
          <span className="block w-8 h-px bg-gold shrink-0" />
          {t('label')}
        </div>
      </RevealOnScroll>
      <RevealOnScroll delay={0.05}>
        <h2 className="font-bebas text-[clamp(48px,6vw,96px)] leading-[0.95] tracking-[1px] mb-16">
          {t('title')}
        </h2>
      </RevealOnScroll>

      <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1 max-md:gap-3">
        {cards.map(({ tagKey, titleKey, locKey, delay }) => (
          <RevealOnScroll key={tagKey} delay={delay}>
            <div
              className="group relative overflow-hidden cursor-pointer"
              style={{ aspectRatio: '2 / 1' }}
            >
              {/* Background */}
              <div
                className="absolute inset-0 transition-transform duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                style={{
                  background: 'linear-gradient(160deg, #1c1914 0%, #0c0b09 100%)',
                }}
              />
              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(to top, rgba(12,11,9,0.95) 0%, rgba(12,11,9,0.3) 55%, transparent 100%)',
                }}
              />
              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 px-7 py-6 max-md:px-5 max-md:py-5">
                <span className="font-space text-[10px] tracking-[3px] uppercase text-gold bg-gold/[0.12] border border-gold/[0.18] px-2.5 py-1 mb-3 inline-block">
                  {t(tagKey)}
                </span>
                <div className="font-bebas text-[clamp(22px,2.4vw,34px)] tracking-[0.5px] text-off-white leading-none mt-1">
                  {t(titleKey)}
                </div>
                <div className="text-[12px] text-muted mt-1.5 font-space tracking-[1px]">
                  {t(locKey)}
                </div>
              </div>
              {/* Arrow — desktop hover only */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 translate-y-1.5 group-hover:translate-y-0 transition-all duration-300 text-gold max-md:hidden">
                <svg width="32" height="32" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="20" cy="20" r="17" />
                  <path d="M14 20h12M23 15l5 5-5 5" />
                </svg>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  )
}
