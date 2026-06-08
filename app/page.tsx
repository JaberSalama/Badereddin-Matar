import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import StatsSection from '@/components/sections/StatsSection'
import SkillsSection from '@/components/sections/SkillsSection'
import ServicesSection from '@/components/sections/ServicesSection'
import PortfolioSection from '@/components/sections/PortfolioSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import EducationSection from '@/components/sections/EducationSection'
import CertificationsSection from '@/components/sections/CertificationsSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import ContactSection from '@/components/sections/ContactSection'
import ScrollProgressBar from '@/components/ui/ScrollProgressBar'
import BackToTop from '@/components/ui/BackToTop'
import PageLoader from '@/components/ui/PageLoader'

export default function Home() {
  return (
    <>
      <PageLoader />
      <ScrollProgressBar />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <SkillsSection />
        <ServicesSection />
        <PortfolioSection />
        <ExperienceSection />
        <EducationSection />
        <CertificationsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
