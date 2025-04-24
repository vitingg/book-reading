import { Form } from "../components/Form"
import book from "../assets/books.png"
import bg from "../assets/bg.jpg"




export function SingIn() {
  return (
    <>
    
      <img src={bg} alt="background" className="absolute w-full h-full object-cover z-0" />

        <div className="h-screen flex flex-col items-center 
        justify-center relative" >
      
          <div className="flex items-center justify-center text-6xl font-family font-medium font-stretch-condensed mt-20">
          Conheça nosso site de livros!
        </div>
      <div className="grid grid-cols-2 gap-60">
        

          <div className="">
            <img src={book} alt="livros" className="w-150 h-150" />
          </div>

          <div className="">
            <Form/>
          </div>
      </div>
    </div>
    </>
  )
}