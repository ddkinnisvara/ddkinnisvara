'use client'
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'
import RevealOnScroll from './RevealOnScroll'

// Each card has its own atmospheric gradient suggesting the project type
const cardBgs = [
  'linear-gradient(135deg, #1a1f2e 0%, #0e1118 50%, #1c1712 100%)', // Construction — cool concrete blue
  'linear-gradient(135deg, #1e1a14 0%, #0f0e0c 50%, #1a1f24 100%)', // Maintenance — neutral dark
  'linear-gradient(135deg, #1f1710 0%, #0c0b09 50%, #1a1510 100%)', // Renovation — warm interior
  'linear-gradient(135deg, #101a12 0%, #0a0f0b 50%, #141a10 100%)', // Outdoor — earthy green-dark
]

const cards = [
  { id: '1', tagKey: 'card1Tag', titleKey: 'card1Title', locKey: 'card1Loc', delay: 0 },
  { id: '2', tagKey: 'card2Tag', titleKey: 'card2Title', locKey: 'card2Loc', delay: 0.08 },
  { id: '3', tagKey: 'card3Tag', titleKey: 'card3Title', locKey: 'card3Loc', delay: 0.08 },
  { id: '4', tagKey: 'card4Tag', titleKey: 'card4Title', locKey: 'card4Loc', delay: 0.16 },
] as const

export default function Projects() {
  const t = useTranslations('projects')
  const locale = useLocale()

  const hrefFor = (id: string) =>
    locale === 'fi' ? `/projects/${id}` : `/en/projects/${id}`

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
        {cards.map(({ id, tagKey, titleKey, locKey, delay }, i) => (
          <RevealOnScroll key={tagKey} delay={delay}>
            <a
              href={hrefFor(id)}
              className="group relative overflow-hidden cursor-pointer block"
              style={{ aspectRatio: '2 / 1' }}
            >
              {/* Background — unique per card */}
              <div
                className="absolute inset-0 transition-transform duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                style={{ background: cardBgs[i] }}
              />
              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(to top, rgba(12,11,9,0.95) 0%, rgba(12,11,9,0.3) 55%, transparent 100%)',
                }}
              />
              {/* Construction illustration overlay */}
              {i === 0 && (
                <svg viewBox="0 0 220 120" fill="none" stroke="#C8A96E" xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-0 right-0 h-full pointer-events-none" aria-hidden="true"
                  style={{ opacity: 0.07 }}>
                  {/* Crane */}
                  <line x1="130" y1="0" x2="130" y2="32" strokeWidth="2" />
                  <line x1="80" y1="8" x2="200" y2="8" strokeWidth="1.5" />
                  <rect x="76" y="4" width="8" height="7" strokeWidth="0.9" />
                  <line x1="130" y1="2" x2="188" y2="8" strokeWidth="0.8" />
                  <line x1="130" y1="2" x2="96" y2="8" strokeWidth="0.8" />
                  <line x1="178" y1="8" x2="178" y2="28" strokeWidth="1" strokeDasharray="4 3" />
                  <rect x="173" y="27" width="10" height="6" strokeWidth="0.9" />
                  {/* Main building */}
                  <rect x="88" y="32" width="115" height="85" strokeWidth="1.3" />
                  {Array.from({ length: 4 }, (_, row) =>
                    Array.from({ length: 4 }, (_, col) => (
                      <rect key={`c1-${row}-${col}`} x={97 + col * 24} y={40 + row * 19} width="16" height="13" strokeWidth="0.6" />
                    ))
                  )}
                  {/* Left shorter building */}
                  <rect x="20" y="55" width="60" height="62" strokeWidth="1.2" />
                  {Array.from({ length: 3 }, (_, row) =>
                    Array.from({ length: 2 }, (_, col) => (
                      <rect key={`c1b2-${row}-${col}`} x={28 + col * 22} y={63 + row * 18} width="15" height="12" strokeWidth="0.6" />
                    ))
                  )}
                  <line x1="10" y1="117" x2="210" y2="117" strokeWidth="1.4" />
                </svg>
              )}
              {i === 1 && (
                <svg viewBox="0 0 220 120" fill="none" stroke="#C8A96E" xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-0 right-0 h-full pointer-events-none" aria-hidden="true"
                  style={{ opacity: 0.07 }}>
                  {/* Maintenance: precision target circles + technical lines */}
                  <circle cx="155" cy="60" r="48" strokeWidth="1.2" />
                  <circle cx="155" cy="60" r="32" strokeWidth="0.9" />
                  <circle cx="155" cy="60" r="14" strokeWidth="0.9" />
                  <circle cx="155" cy="60" r="3" strokeWidth="1.2" />
                  {/* Crosshairs */}
                  <line x1="155" y1="8" x2="155" y2="112" strokeWidth="0.8" />
                  <line x1="103" y1="60" x2="207" y2="60" strokeWidth="0.8" />
                  {/* Tick marks */}
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
                    const rad = (angle * Math.PI) / 180
                    const x1 = 155 + Math.cos(rad) * 44
                    const y1 = 60 + Math.sin(rad) * 44
                    const x2 = 155 + Math.cos(rad) * 50
                    const y2 = 60 + Math.sin(rad) * 50
                    return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="1" />
                  })}
                  {/* Wrench handle suggestion */}
                  <line x1="30" y1="20" x2="85" y2="90" strokeWidth="1.5" />
                  <circle cx="30" cy="20" r="12" strokeWidth="1.2" />
                  <circle cx="85" cy="90" r="8" strokeWidth="1.2" />
                </svg>
              )}
              {i === 2 && (
                <svg viewBox="0 0 220 120" fill="none" stroke="#C8A96E" xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-0 right-0 h-full pointer-events-none" aria-hidden="true"
                  style={{ opacity: 0.07 }}>
                  {/* Renovation: staggered tile/brick pattern */}
                  {Array.from({ length: 5 }, (_, row) =>
                    Array.from({ length: 7 }, (_, col) => (
                      <rect
                        key={`tile-${row}-${col}`}
                        x={col * 32 + (row % 2 === 0 ? 0 : 16) - 8}
                        y={10 + row * 22}
                        width="28"
                        height="18"
                        strokeWidth="0.7"
                      />
                    ))
                  )}
                  {/* Blueprint corner marks */}
                  <path d="M10,10 L10,4 L16,4" strokeWidth="1.2" />
                  <path d="M210,10 L210,4 L204,4" strokeWidth="1.2" />
                  <path d="M10,110 L10,116 L16,116" strokeWidth="1.2" />
                  <path d="M210,110 L210,116 L204,116" strokeWidth="1.2" />
                </svg>
              )}
              {i === 3 && (
                <svg viewBox="0 0 220 120" fill="none" stroke="#C8A96E" xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-0 right-0 h-full pointer-events-none" aria-hidden="true"
                  style={{ opacity: 0.07 }}>
                  {/* Outdoor: rolling landscape + trees */}
                  {/* Hills */}
                  <path d="M0,85 Q40,45 80,75 Q120,30 165,68 Q190,50 220,62 L220,120 L0,120 Z" strokeWidth="1.2" />
                  <path d="M0,95 Q55,72 100,88 Q145,65 185,82 Q200,76 220,80" strokeWidth="0.8" />
                  {/* Tree 1 */}
                  <polygon points="38,75 50,45 62,75" strokeWidth="1" />
                  <line x1="50" y1="75" x2="50" y2="85" strokeWidth="1.2" />
                  {/* Tree 2 */}
                  <polygon points="148,68 162,36 176,68" strokeWidth="1" />
                  <line x1="162" y1="68" x2="162" y2="80" strokeWidth="1.2" />
                  {/* Fence */}
                  <line x1="0" y1="102" x2="220" y2="102" strokeWidth="0.9" />
                  {[15, 35, 55, 75, 95, 115, 135, 155, 175, 195, 215].map((x) => (
                    <line key={x} x1={x} y1="95" x2={x} y2="109" strokeWidth="0.8" />
                  ))}
                  {/* Sun arc */}
                  <path d="M185,5 A28,28 0 0,1 213,33" strokeWidth="1.2" />
                  <line x1="195" y1="2" x2="198" y2="8" strokeWidth="0.9" />
                  <line x1="208" y1="10" x2="213" y2="7" strokeWidth="0.9" />
                </svg>
              )}
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
              {/* Arrow on hover */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 translate-y-1.5 group-hover:translate-y-0 transition-all duration-300 text-gold max-md:hidden">
                <svg width="32" height="32" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="20" cy="20" r="17" />
                  <path d="M14 20h12M23 15l5 5-5 5" />
                </svg>
              </div>
            </a>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  )
}
