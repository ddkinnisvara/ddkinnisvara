'use client'
import { useTranslations, useLocale } from 'next-intl'
import Image from 'next/image'
import RevealOnScroll from './RevealOnScroll'

const previewImages = [
  '/gallery/01.JPG',
  '/gallery/08.JPG',
  '/gallery/015.JPG',
  '/gallery/024.JPG',
  '/gallery/035.JPG',
  '/gallery/048.JPG',
] as const

export default function Gallery() {
  const t = useTranslations('gallery')
  const locale = useLocale()
  const galleryHref = locale === 'fi' ? '/gallery' : '/en/gallery'

  return (
    <section id="gallery" className="py-[120px] px-[60px] max-md:py-16 max-md:px-5">
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

      <div className="grid grid-cols-3 gap-3 max-md:grid-cols-2 max-md:gap-2">
        {previewImages.map((src, i) => (
          <RevealOnScroll key={src} delay={i * 0.06}>
            <div className="group relative overflow-hidden cursor-pointer" style={{ aspectRatio: '4 / 3' }}>
              <div className="absolute inset-0 transition-transform duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]">
                <Image src={src} alt="" fill className="object-cover object-center" />
              </div>
              <div
                className="absolute inset-0 bg-bg/20 group-hover:bg-bg/0 transition-colors duration-300"
              />
            </div>
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll delay={0.3}>
        <div className="flex justify-center mt-12">
          <a
            href={galleryHref}
            className="font-space text-[11px] tracking-[2px] uppercase text-bg bg-gold px-8 py-3.5 hover:bg-gold-light transition-colors duration-200 inline-flex items-center gap-2"
          >
            {t('seeMore')} &rarr;
          </a>
        </div>
      </RevealOnScroll>
    </section>
  )
}
