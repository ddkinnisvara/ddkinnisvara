import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WhyUs from '@/components/WhyUs'
import StatsBar from '@/components/StatsBar'
import Projects from '@/components/Projects'
import Testimonials from '@/components/Testimonials'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Nav />
      <main className="overflow-x-hidden w-full">
        <Hero />
        <Services />
        <WhyUs />
        <StatsBar />
        <Projects />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
