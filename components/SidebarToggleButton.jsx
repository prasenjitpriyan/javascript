import { FaBars } from "react-icons/fa";

const SidebarToggleButton = () => {
  return (
    <button
      data-drawer-target="separator-sidebar"
      data-drawer-toggle="separator-sidebar"
      aria-controls="separator-sidebar"
      aria-expanded="false" // Update dynamically based on state
      type="button"
      className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    >
      <span className="sr-only">Open sidebar</span>
      <FaBars className="w-6 h-6" aria-hidden="true" />
    </button>
  );
};

export default SidebarToggleButton;
