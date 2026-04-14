'use client'
import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import LangToggle from './LangToggle'

const links = [
  { href: '#services', num: '01', key: 'services' as const },
  { href: '#about',    num: '02', key: 'about'    as const },
  { href: '#gallery',  num: '03', key: 'gallery'  as const },
  { href: '#contact',  num: '04', key: 'contact'  as const },
]

export default function Nav() {
  const t = useTranslations('nav')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100]">
        {/* Background overlay — opacity-controlled to prevent white-line flash */}
        <div
          className={`absolute inset-0 bg-bg/95 backdrop-blur-[12px] transition-opacity duration-500 ${
            scrolled ? 'opacity-100' : 'opacity-0'
          }`}
        />
        {/* Bottom border — separate so it never flashes */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-px bg-gold/[0.10] transition-opacity duration-500 ${
            scrolled ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <div className="relative z-[1] flex items-center justify-between px-[60px] py-5 max-md:px-5 max-md:py-4">
          {/* Logo */}
          <a href="#" className="flex leading-none no-underline shrink-0 group">
            <img
              src="/images/logo.png"
              alt="D&D Yhtiöt Oy"
              className="h-[40px] max-md:h-[32px] w-auto object-contain brightness-100 group-hover:brightness-125 transition-all duration-300"
            />
          </a>

          {/* Desktop links — centered absolutely */}
          <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            {links.map(({ href, num, key }) => (
              <a key={key} href={href} className="group flex flex-col items-center gap-0.5">
                <span className="font-space text-[9px] tracking-[2px] text-gold opacity-50 group-hover:opacity-90 transition-opacity duration-300">
                  {num}
                </span>
                <span className="font-space text-[11px] tracking-[2px] uppercase text-off-white/70 group-hover:text-off-white transition-colors duration-300">
                  {t(key)}
                </span>
                <span className="block h-px w-0 bg-gold group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Desktop right */}
          <div className="hidden md:flex items-center gap-6 shrink-0">
            <LangToggle />
            <a
              href="#contact"
              className="font-space text-[11px] tracking-[2px] uppercase text-bg bg-gold px-5 py-2.5 hover:bg-gold-light transition-colors duration-200"
            >
              {t('cta')}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-1 z-[101]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-[1.5px] bg-off-white transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
            <span className={`block w-6 h-[1.5px] bg-off-white transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-6 h-[1.5px] bg-off-white transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      <div
        className={`fixed inset-0 z-[99] bg-bg md:hidden flex flex-col px-8 pt-[90px] pb-10 transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col flex-1">
          {links.map(({ href, num, key }) => (
            <a
              key={key}
              href={href}
              onClick={close}
              className="group flex items-baseline gap-4 font-bebas text-[44px] leading-none text-off-white hover:text-gold transition-colors duration-200 tracking-[1px] border-b border-gold/[0.1] py-4"
            >
              <span className="font-space text-[11px] tracking-[2px] text-gold/40 group-hover:text-gold transition-colors duration-200 mb-0.5">
                {num}
              </span>
              {t(key)}
            </a>
          ))}
        </div>
        <div className="flex items-center justify-between pt-8 border-t border-gold/[0.1]">
          <LangToggle />
          <a
            href="#contact"
            onClick={close}
            className="font-space text-[11px] tracking-[2px] uppercase text-bg bg-gold px-6 py-3 hover:bg-gold-light transition-colors duration-200"
          >
            {t('cta')}
          </a>
        </div>
      </div>
    </>
  )
}
