import { LogOut } from "lucide-react"


export function DropdownMenu (){
  return (
  <div className="flex flex-row bg-inherit absolute 
    ml-22 mb-30 w-34 border rounded-md p-3 items-center 
    justify-around transition ease-in-out delay-75">
    <ul className="flex flex-row items-center">
      
      <li className="text-xl font-medium flex 
      flex-row gap-2 items-center"> <LogOut />
      <a href="/">Logout</a> </li>
    </ul>
  </div>
  )
}