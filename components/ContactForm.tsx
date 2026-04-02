'use client'
import { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useTranslations } from 'next-intl'
import RevealOnScroll from './RevealOnScroll'

type FormData = {
  name: string
  phone?: string
  email: string
  service: string
  message: string
}

export default function ContactForm() {
  const t = useTranslations('contact')
  const [submitted, setSubmitted] = useState(false)

  const schema = useMemo(
    () =>
      z.object({
        name: z.string().min(1, t('errorNameRequired')),
        phone: z.string().optional(),
        email: z.string().min(1, t('errorEmailRequired')).email(t('errorEmailInvalid')),
        service: z.string().min(1, t('errorServiceRequired')),
        message: z.string().min(1, t('errorMessageRequired')),
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (_data: FormData) => {
    await new Promise((r) => setTimeout(r, 600))
    setSubmitted(true)
  }

  const inputClass =
    'w-full bg-black/[0.08] border border-black/20 text-bg placeholder-black/40 px-5 py-4 font-dm text-[15px] outline-none focus:border-black/60 transition-colors duration-200 rounded-none'

  const services = [
    t('service1'), t('service2'), t('service3'),
    t('service4'), t('service5'), t('service6'),
  ]

  return (
    <section
      id="contact"
      className="bg-gold py-[120px] px-[60px] grid grid-cols-2 gap-20 items-start max-md:grid-cols-1 max-md:py-20 max-md:px-6 max-md:gap-12"
    >
      <RevealOnScroll>
        <p className="font-space text-[11px] tracking-[3px] uppercase text-black/50 mb-4">
          {t('topLabel')}
        </p>
        <h2 className="font-bebas text-[clamp(64px,7vw,110px)] leading-[0.9] tracking-[1px] text-bg mb-6">
          {t('title')}
        </h2>
        <p className="text-[18px] text-black/60 font-light">{t('sub')}</p>

        <div className="mt-12 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(12,11,9,0.5)" strokeWidth="1.5">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.1 2.18a2 2 0 012-2.18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.06 6.06l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
            </svg>
            <strong className="text-[16px] text-bg">{t('phone')}</strong>
          </div>
          <div className="flex items-center gap-4">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(12,11,9,0.5)" strokeWidth="1.5">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <strong className="text-[16px] text-bg">{t('email')}</strong>
          </div>
          <div className="flex items-center gap-4">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(12,11,9,0.5)" strokeWidth="1.5">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <strong className="text-[16px] text-bg">{t('address')}</strong>
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll delay={0.2}>
        {submitted ? (
          <div className="flex items-center justify-center min-h-[320px]">
            <p className="font-bebas text-[32px] text-bg text-center leading-snug">
              {t('successMessage')}
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="contact-form flex flex-col gap-4"
            noValidate
          >
            <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
              <div>
                <input
                  {...register('name')}
                  type="text"
                  placeholder={t('namePlaceholder')}
                  className={inputClass}
                />
                {errors.name && (
                  <p className="text-[12px] text-bg/70 mt-1 font-space">{errors.name.message}</p>
                )}
              </div>
              <div>
                <input
                  {...register('phone')}
                  type="tel"
                  placeholder={t('phonePlaceholder')}
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <input
                {...register('email')}
                type="email"
                placeholder={t('emailPlaceholder')}
                className={inputClass}
              />
              {errors.email && (
                <p className="text-[12px] text-bg/70 mt-1 font-space">{errors.email.message}</p>
              )}
            </div>

            <div>
              <select {...register('service')} className={inputClass}>
                <option value="" disabled>{t('serviceDefault')}</option>
                {services.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              {errors.service && (
                <p className="text-[12px] text-bg/70 mt-1 font-space">{errors.service.message}</p>
              )}
            </div>

            <div>
              <textarea
                {...register('message')}
                placeholder={t('messagePlaceholder')}
                rows={5}
                className={`${inputClass} resize-none`}
              />
              {errors.message && (
                <p className="text-[12px] text-bg/70 mt-1 font-space">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="self-start bg-bg text-gold font-space text-[12px] tracking-[2px] uppercase px-10 py-[18px] hover:bg-bg3 transition-colors duration-200 disabled:opacity-60"
            >
              {isSubmitting ? '...' : t('submit')}
            </button>
          </form>
        )}
      </RevealOnScroll>
    </section>
  )
}
