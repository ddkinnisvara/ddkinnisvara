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
    <div className="bg-gold py-20 px-[60px] grid grid-cols-4 gap-px max-md:grid-cols-2 max-md:py-[60px] max-md:px-6">
      <div className="text-center py-5 border-r border-black/10 max-md:border-b">
        <div className="font-bebas text-[80px] text-bg leading-none">
          <AnimatedCounter target={20} suffix="+" />
        </div>
        <div className="font-space text-[11px] tracking-[2px] text-black/60 uppercase mt-1">
          {t('stat1Label')}
        </div>
      </div>
      <div className="text-center py-5 border-r border-black/10 max-md:border-b max-md:border-r-0">
        <div className="font-bebas text-[80px] text-bg leading-none">
          <AnimatedCounter target={500} suffix="+" />
        </div>
        <div className="font-space text-[11px] tracking-[2px] text-black/60 uppercase mt-1">
          {t('stat2Label')}
        </div>
      </div>
      <div className="text-center py-5 border-r border-black/10">
        <div className="font-bebas text-[80px] text-bg leading-none">
          <AnimatedCounter target={98} suffix="%" />
        </div>
        <div className="font-space text-[11px] tracking-[2px] text-black/60 uppercase mt-1">
          {t('stat3Label')}
        </div>
      </div>
      <div className="text-center py-5">
        <div className="font-bebas text-[80px] text-bg leading-none">24/7</div>
        <div className="font-space text-[11px] tracking-[2px] text-black/60 uppercase mt-1">
          {t('stat4Label')}
        </div>
      </div>
    </div>
  )
}
