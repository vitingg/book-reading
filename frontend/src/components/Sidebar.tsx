import { createContext, useContext, useState, ReactNode } from 'react';
import { ArrowRightToLine, ArrowLeftToLine, MoreVertical } from 'lucide-react';

import logo from "../assets/logo.png"
import johndoe from "../assets/johndoe.jpeg"

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

type SidebarContextType = {
  expanded: boolean;
}

type SidebarItemProps = {
  icon: ReactNode;
  text: string;
  active?: boolean;
  alert?: boolean;
}

type SidebarProps = {
  children: ReactNode;
}

export function Sidebar({ children }: SidebarProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <aside className="h-full">
      <nav className="h-full flex flex-col bg-gray-100 border-r shadow-sm text-black 
      dark:bg-gray-400 dark:text-white dark:border-gray-100">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src={logo}
            alt=""
            className={`overflow-hidden transition-all ${expanded ? 'w-32' : 'w-0'}`}
          />
          <button onClick={() => setExpanded((curr) => !curr)} className="p-1.5 rounded-md">
            {expanded ? <ArrowLeftToLine /> : <ArrowRightToLine />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 p-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3">
          <img src={johndoe} alt="" className="w-10 h-10 rounded-md" />

          <div
            className={`flex justify-between items-center 
            overflow-hidden transition-all 
            ${expanded ? 'w-52 ml-3' : 'w-0'} `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
            <MoreVertical />
          </div>
        </div>
      </nav>
    </aside>
  );
}


export function SidebarItem({ icon, text, active = false, alert = false }: SidebarItemProps) {
  const context = useContext(SidebarContext);

  
  if (!context) throw new Error('SidebarItem must be used within a Sidebar');

  const { expanded } = context;

  return (
    <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors 
        ${
          active
            ? 'bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800'
            : 'hover:bg-indigo-50 text-gray-600 '
        }
      `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all 
        ${expanded ? 'w-52 ml-3' : 'w-0'}`}
      >
        {text}
      </span>

      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 
        rounded bg-indigo-400 
        ${expanded ? '' : 'top-2'}`}
        />
      )}

      {expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm 
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 
        `}
        >
          {text}
        </div>
      )}
    </li>
  );
}