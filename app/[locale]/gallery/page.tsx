'use client'
import { useTranslations, useLocale } from 'next-intl'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import RevealOnScroll from '@/components/RevealOnScroll'

const allImages = [
  '01', '02', '03', '04', '05', '06', '07', '08', '09',
  '010', '011', '012', '013', '014', '015', '016', '017', '018', '019',
  '020', '021', '022', '023', '024', '025', '026', '027', '028', '029',
  '030', '031', '032', '033', '034', '035', '036', '037', '038', '039',
  '040', '041', '042', '043', '044', '045', '046', '047', '048', '049',
  '050', '051', '052', '053', '054', '055', '056', '057', '058', '059',
  '060', '061', '062', '063', '064', '065', '066', '067', '068', '069',
  '070', '071', '072', '073', '074', '075', '076', '077', '078', '079',
  '080', '081', '082', '083', '084', '085', '086', '087', '088', '089',
  '090', '091', '092', '093', '094', '095', '096',
]

export default function GalleryPage() {
  const t = useTranslations('galleryPage')
  const locale = useLocale()
  const homeHref = locale === 'fi' ? '/' : '/en'

  return (
    <>
      <Nav />
      <main className="overflow-x-hidden w-full pt-[100px]">
        <section className="py-[60px] px-[60px] max-md:py-10 max-md:px-5">
          <RevealOnScroll>
            <a
              href={homeHref}
              className="font-space text-[12px] tracking-[2px] text-gold hover:text-gold-light transition-colors duration-200 mb-8 inline-block"
            >
              {t('backLink')}
            </a>
          </RevealOnScroll>
          <RevealOnScroll delay={0.05}>
            <div className="font-space text-[11px] tracking-[3px] text-gold uppercase mb-4">
              {t('label')}
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h1 className="font-bebas text-[clamp(48px,6vw,96px)] leading-[0.95] tracking-[1px] mb-16 max-md:mb-10">
              {t('title')}
            </h1>
          </RevealOnScroll>

          <div className="grid grid-cols-3 gap-3 max-md:grid-cols-2 max-md:gap-2">
            {allImages.map((num, i) => (
              <RevealOnScroll key={num} delay={Math.min(i * 0.02, 0.3)}>
                <div className="group relative overflow-hidden" style={{ aspectRatio: '4 / 3' }}>
                  <div className="absolute inset-0 transition-transform duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]">
                    <Image
                      src={`/gallery/${num}.JPG`}
                      alt=""
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-bg/20 group-hover:bg-bg/0 transition-colors duration-300" />
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
