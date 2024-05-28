import AboutUs from '@/components/AboutUs/AboutUs'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import WorkGallery from '@/components/WorkGallery/WorkGallery'

export default function Home() {
  const items = [
    { title: 'Team', url: '/about' },
    { title: 'Sobre', url: '/about' },
  ]
  return (
    <>
      <Navbar logo={{ title: 'home', url: '/' }} items={items} />
      <main>
        <WorkGallery />
        <AboutUs />
      </main>
      <Footer />
    </>
  )
}
