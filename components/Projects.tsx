'use client'
import { useTranslations } from 'next-intl'
import RevealOnScroll from './RevealOnScroll'

const bgGradients = [
  'linear-gradient(135deg, #1f1c17 0%, #2a2318 100%)',
  'linear-gradient(135deg, #17191f 0%, #1a2030 100%)',
  'linear-gradient(135deg, #1a1714 0%, #231e17 100%)',
  'linear-gradient(135deg, #141618 0%, #1c2020 100%)',
]

const cards = [
  { tagKey: 'card1Tag', titleKey: 'card1Title', locKey: 'card1Loc', delay: 0 },
  { tagKey: 'card2Tag', titleKey: 'card2Title', locKey: 'card2Loc', delay: 0.1 },
  { tagKey: 'card3Tag', titleKey: 'card3Title', locKey: 'card3Loc', delay: 0.2 },
  { tagKey: 'card4Tag', titleKey: 'card4Title', locKey: 'card4Loc', delay: 0.3 },
] as const

const ArrowIcon = () => (
  <svg
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms] text-gold"
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <circle cx="24" cy="24" r="20" />
    <path d="M18 24h12M27 19l5 5-5 5" />
  </svg>
)

export default function Projects() {
  const t = useTranslations('projects')

  return (
    <section id="projects" className="py-[120px] px-[60px] max-md:py-20 max-md:px-6">
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

      <div className="grid grid-cols-2 gap-0.5 bg-gold/[0.08] max-md:grid-cols-1">
        {cards.map(({ tagKey, titleKey, locKey, delay }, i) => (
          <RevealOnScroll key={tagKey} delay={delay}>
            <div
              className={`group relative overflow-hidden ${
                i === 0 ? 'md:row-span-2' : 'aspect-[4/3]'
              } max-md:aspect-[4/3]`}
            >
              <div
                className="w-full h-full min-h-[280px] transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:saturate-50"
                style={{
                  background: bgGradients[i],
                  filter: 'brightness(0.5) saturate(0.7)',
                }}
              />
              <div
                className="absolute inset-0 p-8 flex flex-col justify-end"
                style={{
                  background: 'linear-gradient(to top, rgba(12,11,9,0.9) 0%, transparent 60%)',
                }}
              >
                <span className="font-space text-[10px] tracking-[3px] uppercase text-gold bg-gold/[0.12] px-3 py-1 mb-2 self-start">
                  {t(tagKey)}
                </span>
                <div className="font-bebas text-[32px] tracking-[1px] text-off-white leading-none">
                  {t(titleKey)}
                </div>
                <div className="text-[13px] text-muted mt-1">{t(locKey)}</div>
              </div>
              <ArrowIcon />
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  )
}
