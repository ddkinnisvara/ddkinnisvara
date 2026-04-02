'use client'
import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('footer')

  return (
    <footer className="bg-bg pt-20 pb-10 px-[60px] border-t border-gold/[0.08] max-md:px-6">
      <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-[60px] mb-20 max-md:grid-cols-2 max-md:gap-10">
        <div>
          <div className="font-bebas text-[48px] text-off-white tracking-[2px] leading-none">
            D&amp;D
          </div>
          <div className="font-space text-[9px] text-gold tracking-[3px] uppercase mb-5">
            Yhti&ouml;t Oy
          </div>
          <p className="text-[15px] text-muted max-w-[280px] leading-[1.7] mb-7">
            {t('tagline')}
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 border border-gold/[0.15] flex items-center justify-center text-muted font-space text-[10px] hover:border-gold hover:text-gold transition-colors duration-200">
              in
            </a>
            <a href="#" className="w-10 h-10 border border-gold/[0.15] flex items-center justify-center text-muted font-space text-[10px] hover:border-gold hover:text-gold transition-colors duration-200">
              ig
            </a>
          </div>
        </div>

        <div>
          <div className="font-space text-[10px] tracking-[3px] uppercase text-gold mb-6">
            {t('servicesTitle')}
          </div>
          <div className="flex flex-col gap-3">
            {[t('service1'), t('service2'), t('service3'), t('service4'), t('service5')].map((s) => (
              <a key={s} href="#" className="text-[15px] text-muted hover:text-off-white transition-colors duration-200">{s}</a>
            ))}
          </div>
        </div>

        <div>
          <div className="font-space text-[10px] tracking-[3px] uppercase text-gold mb-6">
            {t('companyTitle')}
          </div>
          <div className="flex flex-col gap-3">
            {[t('company1'), t('company2'), t('company3'), t('company4')].map((c) => (
              <a key={c} href="#" className="text-[15px] text-muted hover:text-off-white transition-colors duration-200">{c}</a>
            ))}
          </div>
        </div>

        <div>
          <div className="font-space text-[10px] tracking-[3px] uppercase text-gold mb-6">
            {t('contactTitle')}
          </div>
          <div className="flex flex-col gap-3">
            <a href="tel:+358401234567" className="text-[15px] text-muted hover:text-off-white transition-colors duration-200">+358 40 123 4567</a>
            <a href="mailto:info@ddyhtiot.fi" className="text-[15px] text-muted hover:text-off-white transition-colors duration-200">info@ddyhtiot.fi</a>
            <a href="#" className="text-[15px] text-muted hover:text-off-white transition-colors duration-200">Mannerheimintie 12</a>
            <a href="#" className="text-[15px] text-muted hover:text-off-white transition-colors duration-200">00100 Helsinki</a>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center pt-10 border-t border-gold/[0.08] max-md:flex-col max-md:gap-4 max-md:text-center">
        <div className="font-space text-[11px] text-muted2 tracking-[1px]">
          {t('copyright')}
        </div>
        <div className="font-space text-[11px] text-muted2 tracking-[1px]">
          {t('regNumber')}
        </div>
      </div>
    </footer>
  )
}
