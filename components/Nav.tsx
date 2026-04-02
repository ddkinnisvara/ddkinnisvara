'use client'
import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'

export default function Nav() {
  const t = useTranslations('nav')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between transition-all duration-[400ms] ${
        scrolled
          ? 'bg-bg/95 backdrop-blur-[12px] py-4 px-[60px] border-b border-gold/[0.08]'
          : 'py-6 px-[60px]'
      } max-md:px-6 max-md:py-5`}
    >
      <a href='#' className='flex flex-col leading-none no-underline'>
        <span className='font-bebas text-[32px] text-off-white tracking-[2px]'>
          D&amp;D
        </span>
        <span className='font-space text-[9px] text-gold tracking-[3px] uppercase'>
          Yhtiöt Oy
        </span>
      </a>

      <div className='hidden md:flex items-center gap-10'>
        <a href='#services' className='font-space text-[11px] tracking-[2px] uppercase text-muted hover:text-off-white transition-colors duration-200'>
          {t('services')}
        </a>
        <a href='#projects' className='font-space text-[11px] tracking-[2px] uppercase text-muted hover:text-off-white transition-colors duration-200'>
          {t('projects')}
        </a>
        <a href='#about' className='font-space text-[11px] tracking-[2px] uppercase text-muted hover:text-off-white transition-colors duration-200'>
          {t('about')}
        </a>
        <a href='#contact' className='font-space text-[11px] tracking-[2px] uppercase text-muted hover:text-off-white transition-colors duration-200'>
          {t('contact')}
        </a>
      </div>

      <a
        href='#contact'
        className='font-space text-[11px] tracking-[2px] uppercase text-bg bg-gold px-6 py-3 hover:bg-gold-light transition-colors duration-200'
      >
        {t('cta')}
      </a>
    </nav>
  )
}
