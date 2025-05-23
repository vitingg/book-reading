import { Sidebar, SidebarItem } from "../components/siderbar";
import { ManagerBooks } from "../components/books";
import { CreateBook } from "../components/manager modal/create-book";
import { UpdateBook } from "../components/manager modal/update-book";
import { DeleteBook } from "../components/manager modal/delete-book";
import { ThemeToggle } from "../components/toggle-themes";
import { useState } from "react";
import { BookUp2, Trash2, BookPlus } from "lucide-react";

export function DashboardManager() {
  const [_, setOpenPopup] = useState<string | null>(null);
  const [refreshBooks, setRefreshBooks] = useState(false);

  function handleBookCreated() {
    setRefreshBooks((prev) => !prev);
    setOpenPopup(null);
  }

  function handleBookDeleted() {
    setRefreshBooks((prev) => !prev);
    setOpenPopup(null);
  }

  function handleBookUpdated() {
    setRefreshBooks((prev) => !prev);
    setOpenPopup(null);
  }

  return (
    <div
      className="relative z-10 flex h-screen bg-gray-100 
    text-gray-800 dark:bg-gray-900 dark:text-white gap-2"
    >
      <SidebarWork
        setOpenPopup={setOpenPopup}
        handleBookCreated={handleBookCreated}
        handleBookDeleted={handleBookDeleted}
        handleBookUpdated={handleBookUpdated}
      />

      <div className="flex-1 p-6 overflow-auto">
        <div className="bg-white mt-4 dark:bg-gray-800 p-6 rounded-2xl shadow-md">
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Livros disponíveis
            </h1>
            <ThemeToggle />
          </div>
          <ManagerBooks
            refresh={refreshBooks}
            showId={true}
            userRole="MANAGER"
          />
        </div>
      </div>
    </div>
  );
}

// Sidebar do meu Manager
type SidebarProps = {
  setOpenPopup: (value: string | null) => void;
  handleBookCreated: () => void;
  handleBookDeleted: () => void;
  handleBookUpdated: () => void;
};

export function SidebarWork({
  setOpenPopup,
  handleBookCreated,
  handleBookDeleted,
  handleBookUpdated,
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
          icon={<BookPlus size={20} />}
          text="Add books"
          onClick={() => handleOpenPopup("add")}
          alert
        />

        <SidebarItem
          icon={<BookUp2 size={20} />}
          text="Update books"
          onClick={() => handleOpenPopup("update")}
          alert
        />

        <SidebarItem
          icon={<Trash2 size={20} />}
          text="Delete books"
          onClick={() => handleOpenPopup("delete")}
          alert
        />
      </Sidebar>

      {openPopupLocal === "add" && (
        <CreateBook
          onClose={handleClosePopup}
          onBookCreated={handleBookCreated}
        />
      )}
      {openPopupLocal === "delete" && (
        <DeleteBook onClose={handleClosePopup} onDelete={handleBookDeleted} />
      )}
      {openPopupLocal === "update" && (
        <UpdateBook onClose={handleClosePopup} onUpdate={handleBookUpdated} />
      )}
    </>
  );
}
