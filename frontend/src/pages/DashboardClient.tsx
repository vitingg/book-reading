import { UserProfile } from "../components/client modal/UserProfile";
import { Sidebar, SidebarItem } from "../components/Sidebar";
import { Ranking } from "../components/client modal/Ranking";
import { ManagerBooks } from "../components/ManagerBooks";
import { ThemeToggle } from "../components/ToggleTheme";
import { UserRoundPen, UserCircle } from "lucide-react";
import { useState } from "react";

export function DashboardClient() {
  const [, setOpenPopup] = useState<string | null>(null);
  const [, setRefreshBooks] = useState(false);

  function handleOpenProfile() {
    setRefreshBooks((prev) => !prev);
    setOpenPopup(null);
  }

  function handleOpenRanking() {
    setRefreshBooks((prev) => !prev);
    setOpenPopup(null);
  }

  return (
    <>
      <div
        className="relative z-10 flex h-screen bg-gray-100 
    text-gray-800 dark:bg-gray-900 dark:text-white gap-2"
      >
        <SidebarWork
          setOpenPopup={setOpenPopup}
          handleOpenProfile={handleOpenProfile}
          handleOpenRanking={handleOpenRanking}
        />
        <div className="flex-1 p-6 overflow-auto">
          <div className="bg-white mt-4 dark:bg-gray-800 p-6 rounded-2xl shadow-md">
            <div className="flex justify-between items-center mb-2">
              <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Livros disponíveis para leitura!
              </h1>
              <ThemeToggle />
            </div>
            <ManagerBooks refresh={false} showId={false} userRole="EMPLOYEE" />
          </div>
        </div>
      </div>
    </>
  );
}

// Sidebar do meu client
type SidebarProps = {
  setOpenPopup: (value: string | null) => void;
  handleOpenProfile: () => void;
  handleOpenRanking: () => void;
};

export function SidebarWork({
  setOpenPopup,
  handleOpenProfile,
  handleOpenRanking,
}: SidebarProps) {
  const [openPopupLocal, setOpenPopupLocal] = useState<string | null>(null);

  function handleOpenPopup(popupType: string) {
    setOpenPopup(popupType);
    setOpenPopupLocal(popupType);
  }

  function handleClosePopup() {
    setOpenPopup(null);
    setOpenPopupLocal(null);
  }

  return (
    <>
      <Sidebar>
        <SidebarItem
          icon={<UserRoundPen size={20} />}
          text="Open Profile"
          onClick={() => handleOpenPopup("open")}
          alert
        />
        <SidebarItem
          icon={<UserCircle size={20} />}
          text="See book rank"
          onClick={() => handleOpenPopup("rank")}
          alert
        />
      </Sidebar>

      {openPopupLocal === "open" && (
        <UserProfile
          onClose={handleClosePopup}
          onOpenProfile={handleOpenProfile}
        />
      )}

      {openPopupLocal === "rank" && (
        <Ranking
          onClose={handleClosePopup}
          onOpenProfile={handleOpenProfile}
        />
      )}
    </>
  );
}
