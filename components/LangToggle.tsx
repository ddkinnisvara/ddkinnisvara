'use client'
import { useState, useRef, useEffect } from 'react'
import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/navigation'

const langs = [
  { code: 'fi', label: 'FI', flag: '🇫🇮' },
  { code: 'en', label: 'EN', flag: '🇬🇧' },
] as const

type LangCode = 'fi' | 'en'

export default function LangToggle() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const switchTo = (next: LangCode) => {
    setOpen(false)
    if (next !== locale) router.replace(pathname, { locale: next })
  }

  const current = langs.find(l => l.code === locale)!

  return (
    <div ref={ref} className="relative">
      {/* Desktop: dropdown trigger */}
      <button
        onClick={() => setOpen(v => !v)}
        className="hidden md:flex items-center gap-2 font-space text-[11px] tracking-[2px] uppercase text-off-white/70 hover:text-off-white transition-colors duration-200 group"
        aria-label="Switch language"
      >
        <span className="text-[17px] leading-none">{current.flag}</span>
        <span>{current.label}</span>
        <svg
          width="9" height="5" viewBox="0 0 9 5" fill="none"
          className={`opacity-50 group-hover:opacity-80 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        >
          <path d="M1 1l3.5 3L8 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Desktop: dropdown panel */}
      {open && (
        <div className="absolute top-full right-0 mt-2.5 bg-bg border border-gold/[0.15] min-w-[120px] py-1 z-[200] shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          {langs.map(({ code, label, flag }) => (
            <button
              key={code}
              onClick={() => switchTo(code)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 font-space text-[11px] tracking-[2px] uppercase transition-colors duration-150 ${
                locale === code ? 'text-gold' : 'text-off-white/60 hover:text-off-white'
              }`}
            >
              <span className="text-[15px] leading-none">{flag}</span>
              {label}
              {locale === code && <span className="ml-auto w-1 h-1 rounded-full bg-gold shrink-0" />}
            </button>
          ))}
        </div>
      )}

      {/* Mobile: simple toggle */}
      <button
        onClick={() => switchTo(locale === 'fi' ? 'en' : 'fi')}
        className="md:hidden flex items-center gap-2 font-space text-[11px] tracking-[2px] uppercase text-off-white transition-colors duration-200"
        aria-label="Switch language"
      >
        <span className="text-[17px] leading-none">{current.flag}</span>
        <span>{current.label}</span>
      </button>
    </div>
  )
}
