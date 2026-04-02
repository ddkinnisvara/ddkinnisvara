import { getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'
import Link from 'next/link'

const PROJECT_IDS = ['1', '2', '3', '4'] as const
type ProjectId = typeof PROJECT_IDS[number]

const cardBgs: Record<ProjectId, string> = {
  '1': 'linear-gradient(135deg, #1a1f2e 0%, #0e1118 50%, #1c1712 100%)',
  '2': 'linear-gradient(135deg, #1e1a14 0%, #0f0e0c 50%, #1a1f24 100%)',
  '3': 'linear-gradient(135deg, #1f1710 0%, #0c0b09 50%, #1a1510 100%)',
  '4': 'linear-gradient(135deg, #101a12 0%, #0a0f0b 50%, #141a10 100%)',
}

export async function generateStaticParams() {
  return PROJECT_IDS.map((id) => ({ id }))
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string; locale: string }>
}) {
  const { id } = await params

  if (!PROJECT_IDS.includes(id as ProjectId)) {
    notFound()
  }

  const pid = id as ProjectId
  const t = await getTranslations('projectDetail')
  const p = (key: string) => t(`p${pid}${key}` as Parameters<typeof t>[0])

  const highlights = [p('H1'), p('H2'), p('H3'), p('H4')]

  return (
    <div className="min-h-screen bg-bg text-off-white">
      {/* Back link */}
      <div className="px-[60px] pt-32 pb-8 max-md:px-5 max-md:pt-28">
        <Link
          href="/#projects"
          className="font-space text-[11px] tracking-[2px] uppercase text-muted hover:text-gold transition-colors duration-200 flex items-center gap-2"
        >
          {t('backLink')}
        </Link>
      </div>

      {/* Hero image placeholder */}
      <div
        className="mx-[60px] max-md:mx-5 overflow-hidden relative"
        style={{ height: 'clamp(280px, 40vw, 480px)' }}
      >
        <div className="absolute inset-0" style={{ background: cardBgs[pid] }} />
        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(200,169,110,1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,110,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Gradient overlay at bottom */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(12,11,9,0.9) 0%, rgba(12,11,9,0.2) 50%, transparent 100%)',
          }}
        />
        {/* Tag + title */}
        <div className="absolute bottom-0 left-0 px-10 py-8 max-md:px-6 max-md:py-6">
          <span className="font-space text-[10px] tracking-[3px] uppercase text-gold bg-gold/[0.12] border border-gold/[0.18] px-2.5 py-1 mb-3 inline-block">
            {p('Tag')}
          </span>
          <h1 className="font-bebas text-[clamp(32px,4vw,64px)] tracking-[1px] text-off-white leading-none mt-1">
            {p('Title')}
          </h1>
          <p className="font-space text-[11px] tracking-[2px] text-muted uppercase mt-2">
            {p('Loc')}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="px-[60px] py-16 max-md:px-5 max-md:py-10 grid grid-cols-[1fr_320px] gap-16 max-lg:grid-cols-1 max-lg:gap-10">
        {/* Left — description + highlights */}
        <div>
          <p className="text-[18px] text-off-white/80 font-light leading-[1.85] max-md:text-[16px] mb-16 max-md:mb-10 max-w-[620px]">
            {p('Desc')}
          </p>

          <div className="mb-4">
            <div className="font-space text-[10px] tracking-[3px] text-gold uppercase flex items-center gap-3 mb-8">
              <span className="block w-6 h-px bg-gold shrink-0" />
              {t('highlightsTitle')}
            </div>
            <div className="flex flex-col">
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className="flex items-start gap-5 py-5 border-b border-gold/[0.08] first:border-t first:border-gold/[0.08]"
                >
                  <span className="font-bebas text-[28px] text-gold opacity-25 leading-none shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-bebas text-[20px] tracking-[0.5px] text-off-white leading-tight">
                    {h}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — project details card */}
        <div>
          <div className="border border-gold/[0.10] p-8 max-md:p-6">
            <div className="font-space text-[10px] tracking-[3px] text-gold uppercase mb-6">
              {p('Tag')}
            </div>
            {[
              [t('typeLabel'),     p('Type')],
              [t('areaLabel'),     p('Area')],
              [t('yearLabel'),     p('Year')],
              [t('durationLabel'), p('Duration')],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between items-baseline py-3.5 border-b border-gold/[0.07] last:border-0">
                <span className="font-space text-[10px] tracking-[2px] uppercase text-muted">{label}</span>
                <span className="font-dm text-[14px] text-off-white font-medium text-right">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA band */}
      <div className="mx-[60px] mb-20 max-md:mx-5 max-md:mb-12 border-t border-gold/[0.08] pt-12 flex items-center justify-between gap-6 max-md:flex-col max-md:items-start">
        <p className="font-bebas text-[clamp(24px,3vw,40px)] tracking-[1px] text-off-white">
          {t('ctaTitle')}
        </p>
        <Link
          href="/#contact"
          className="font-space text-[11px] tracking-[2px] uppercase text-bg bg-gold px-8 py-4 hover:bg-gold-light transition-colors duration-200 shrink-0"
        >
          {t('ctaButton')} →
        </Link>
      </div>
    </div>
  )
}
