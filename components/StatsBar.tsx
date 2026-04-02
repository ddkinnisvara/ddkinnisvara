'use client'
import { useRef, useEffect, useState } from 'react'
import { useInView, animate } from 'framer-motion'
import { useTranslations } from 'next-intl'

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const controls = animate(0, target, {
      duration: 1.5,
      ease: [0, 0, 0.2, 1],
      onUpdate: (v) => setCount(Math.floor(v)),
    })
    return controls.stop
  }, [isInView, target])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export default function StatsBar() {
  const t = useTranslations('stats')

  return (
    <div className="py-16 px-[60px] grid grid-cols-4 gap-px max-md:grid-cols-2 max-md:py-10 max-md:px-5" style={{ backgroundColor: '#D6BA80' }}>
      <div className="text-center py-4 border-r border-black/10 max-md:pb-8">
        <div className="font-bebas text-[72px] text-bg leading-none max-md:text-[60px]">
          <AnimatedCounter target={20} suffix="+" />
        </div>
        <div className="font-space text-[10px] tracking-[2px] text-black/55 uppercase mt-1">
          {t('stat1Label')}
        </div>
      </div>
      <div className="text-center py-4 max-md:pb-8 md:border-r border-black/10">
        <div className="font-bebas text-[72px] text-bg leading-none max-md:text-[60px]">
          <AnimatedCounter target={500} suffix="+" />
        </div>
        <div className="font-space text-[10px] tracking-[2px] text-black/55 uppercase mt-1">
          {t('stat2Label')}
        </div>
      </div>
      <div className="text-center py-4 border-r border-black/10 max-md:pt-8 max-md:border-t max-md:border-black/10">
        <div className="font-bebas text-[72px] text-bg leading-none max-md:text-[60px]">
          <AnimatedCounter target={98} suffix="%" />
        </div>
        <div className="font-space text-[10px] tracking-[2px] text-black/55 uppercase mt-1">
          {t('stat3Label')}
        </div>
      </div>
      <div className="text-center py-4 max-md:pt-8 max-md:border-t max-md:border-black/10">
        <div className="font-bebas text-[72px] text-bg leading-none max-md:text-[60px]">24/7</div>
        <div className="font-space text-[10px] tracking-[2px] text-black/55 uppercase mt-1">
          {t('stat4Label')}
        </div>
      </div>
    </div>
  )
}
