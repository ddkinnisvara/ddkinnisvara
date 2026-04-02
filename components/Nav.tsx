'use client'
import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import LangToggle from './LangToggle'

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

  const linkClass =
    'group flex flex-col items-center gap-[3px] font-space text-[11px] tracking-[2px] uppercase text-muted hover:text-off-white transition-colors duration-300'

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-[400ms] ${
          scrolled
            ? 'bg-bg/95 backdrop-blur-[12px] border-b border-gold/[0.08]'
            : ''
        }`}
      >
        <div className="flex items-center justify-between px-[60px] py-5 max-md:px-5 max-md:py-4">
          {/* Logo */}
          <a href="#" className="flex leading-none no-underline shrink-0">
            <span className="font-bebas text-[30px] text-off-white tracking-[2px]">D&amp;D</span>
          </a>

          {/* Desktop links — centered absolutely */}
          <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            <a href="#services" className={linkClass}>
              {t('services')}
              <span className="block h-px w-0 bg-gold group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#about" className={linkClass}>
              {t('about')}
              <span className="block h-px w-0 bg-gold group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#projects" className={linkClass}>
              {t('projects')}
              <span className="block h-px w-0 bg-gold group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#contact" className={linkClass}>
              {t('contact')}
              <span className="block h-px w-0 bg-gold group-hover:w-full transition-all duration-300" />
            </a>
          </div>

          {/* Desktop right actions */}
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
            <span
              className={`block w-6 h-[1.5px] bg-off-white transition-all duration-300 origin-center ${
                menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-off-white transition-all duration-300 ${
                menuOpen ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-off-white transition-all duration-300 origin-center ${
                menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''
              }`}
            />
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
          <a href="#services" onClick={close} className="font-bebas text-[52px] leading-none text-off-white hover:text-gold transition-colors duration-200 tracking-[1px] border-b border-gold/[0.1] py-5">
            {t('services')}
          </a>
          <a href="#about" onClick={close} className="font-bebas text-[52px] leading-none text-off-white hover:text-gold transition-colors duration-200 tracking-[1px] border-b border-gold/[0.1] py-5">
            {t('about')}
          </a>
          <a href="#projects" onClick={close} className="font-bebas text-[52px] leading-none text-off-white hover:text-gold transition-colors duration-200 tracking-[1px] border-b border-gold/[0.1] py-5">
            {t('projects')}
          </a>
          <a href="#contact" onClick={close} className="font-bebas text-[52px] leading-none text-off-white hover:text-gold transition-colors duration-200 tracking-[1px] border-b border-gold/[0.1] py-5">
            {t('contact')}
          </a>
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
