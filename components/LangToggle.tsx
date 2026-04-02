'use client'
import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/navigation'

export default function LangToggle() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const toggle = () => {
    const next = locale === 'fi' ? 'en' : 'fi'
    router.replace(pathname, { locale: next })
  }

  return (
    <button
      onClick={toggle}
      className="font-space text-[11px] tracking-[2px] uppercase transition-colors duration-200 flex items-center gap-1"
      aria-label="Switch language"
    >
      <span className={locale === 'fi' ? 'text-off-white' : 'text-muted hover:text-off-white'}>
        FI
      </span>
      <span className="text-muted2">/</span>
      <span className={locale === 'en' ? 'text-off-white' : 'text-muted hover:text-off-white'}>
        EN
      </span>
    </button>
  )
}
