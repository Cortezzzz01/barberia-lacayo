import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Gallery } from "@/components/gallery"
import { Schedule } from "@/components/schedule"
import { Location } from "@/components/location"
import { Reviews } from "@/components/reviews"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <Schedule />
      <Location />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  )
}
