import Brands from "./Brands"
import ContactUs from "./ContactUs"
import Footer from "./Footer"
import Testimonials from "./Testimonials"


const PageFooter = () => {
  return (
    <footer className="bg-[#0f2454] text-white">
      <Testimonials/>
      <Brands/>
    <ContactUs/>
    <Footer/>
    </footer>
  )
}

export default PageFooter