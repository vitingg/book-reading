import { Navbar } from "../components/landing page/nav-bar"
import { BookSection } from "../components/landing page/book-section"
import { Advantages } from "../components/landing page/advantages"
import { Footer } from "../components/landing page/footer"

export function MainPage(){
  return (
    <div>
      <Navbar />
      <BookSection />
      <Advantages />
      <Footer />
    </div>
  ) 
}