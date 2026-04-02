'use client'
import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('footer')

  return (
    <footer className="bg-bg pt-16 pb-8 px-[60px] border-t border-gold/[0.08] max-md:px-5 max-md:pt-12">
      <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-[60px] mb-16 max-md:grid-cols-1 max-md:gap-10 md:gap-10 lg:gap-[60px]">
        <div>
          <div className="font-bebas text-[44px] max-md:text-[36px] text-off-white tracking-[2px] leading-none mb-1">
            D&amp;D
          </div>
          <p className="text-[14px] text-muted max-w-[280px] leading-[1.7] mb-6 mt-3">
            {t('tagline')}
          </p>
          <div className="flex gap-3">
            {/* LinkedIn */}
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-9 h-9 border border-gold/[0.15] flex items-center justify-center text-muted hover:border-gold hover:text-gold transition-colors duration-200"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              className="w-9 h-9 border border-gold/[0.15] flex items-center justify-center text-muted hover:border-gold hover:text-gold transition-colors duration-200"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <div className="font-space text-[10px] tracking-[3px] uppercase text-gold mb-5">
            {t('servicesTitle')}
          </div>
          <div className="flex flex-col gap-2.5">
            {[t('service1'), t('service2'), t('service3'), t('service4'), t('service5')].map((s) => (
              <a key={s} href="#" className="text-[14px] text-muted hover:text-off-white transition-colors duration-200">{s}</a>
            ))}
          </div>
        </div>

        <div>
          <div className="font-space text-[10px] tracking-[3px] uppercase text-gold mb-5">
            {t('companyTitle')}
          </div>
          <div className="flex flex-col gap-2.5">
            {[t('company1'), t('company2'), t('company3'), t('company4')].map((c) => (
              <a key={c} href="#" className="text-[14px] text-muted hover:text-off-white transition-colors duration-200">{c}</a>
            ))}
          </div>
        </div>

        <div>
          <div className="font-space text-[10px] tracking-[3px] uppercase text-gold mb-5">
            {t('contactTitle')}
          </div>
          <div className="flex flex-col gap-2.5">
            <a href="tel:+358401234567" className="text-[14px] text-muted hover:text-off-white transition-colors duration-200">+358 40 123 4567</a>
            <a href="mailto:info@ddyhtiot.fi" className="text-[14px] text-muted hover:text-off-white transition-colors duration-200">info@ddyhtiot.fi</a>
            <span className="text-[14px] text-muted">Mannerheimintie 12</span>
            <span className="text-[14px] text-muted">00100 Helsinki</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center pt-8 border-t border-gold/[0.08] max-md:flex-col max-md:gap-3 max-md:items-start">
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
