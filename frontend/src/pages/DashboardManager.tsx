import { Sidebar, SidebarItem } from "../components/Sidebar";
import { ManagerBooks } from "../components/ManagerBooks"
import { CreateBook } from "../components/popups/CreateBook"
import { UpdateBook } from "../components/popups/UpdateBook";
import { DeleteBook } from "../components/popups/DeleteBook";
import { ThemeToggle } from '../components/ToggleTheme';
import { useState } from "react";
import {
  Boxes,
  UserCircle,
  BarChart,
  LayoutDashboard,
} from "lucide-react";


export function DashboardManager() {
  return (
    <>
    <div className="relative z-10 flex h-screen bg-gray-100 
    text-gray-800 dark:bg-gray-900 dark:text-white gap-2" >
      <SidebarWork />
      <div className="flex-1 p-6 overflow-auto">
          <div className="bg-white mt-4 dark:bg-gray-800 p-6 rounded-2xl shadow-md">
            <div className="flex justify-between items-center mb-2">
              <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Livros disponíveis para atualização
              </h1>
              <ThemeToggle />
            </div>
              <ManagerBooks />
          </div>
      </div>
    </div>
    </>
  )
}

// Sidebar do meu Manager
export function SidebarWork(){
  const [openPopup, setOpenPopup] = useState<string | null>(null)

  return (
    <>
      <Sidebar> 
        <SidebarItem 
        icon={<LayoutDashboard 
        size={20}/>} text="Add books" 
        onClick={() => setOpenPopup("add")} 
        alert />

        <SidebarItem 
        icon={<Boxes size={20} />} 
        text="Show books"
        alert />

        <SidebarItem 
        icon={<UserCircle size={20} />} 
        text="Update books" 
        onClick={() => setOpenPopup("update")} 
        alert />

        <SidebarItem 
        icon={<BarChart size={20} />} 
        text="Delete books" 
        onClick={() => setOpenPopup("delete")} 
        alert />

      </Sidebar>
      {openPopup === 'add' && <CreateBook onClose={() => setOpenPopup(null)} />}
      {openPopup === 'update' && <UpdateBook onClose={() => setOpenPopup(null)} />}
      {openPopup === 'delete' && <DeleteBook onClose={() => setOpenPopup(null)} />}
    </>
  )
}