import homeIcon from "../../assets/icons/home.png";
import aboutIcon from "../../assets/icons/about.png";
import categoryIcon from "../../assets/icons/list.png";
import languageIcon from "../../assets/icons/language.png";
import ordersIcon from "../../assets/icons/inventory_2.png";
import contactIcon from "../../assets/icons/headset_mic.png";
import favoriteIcon from "../../assets/icons/favorite_border.png";
import userIcon from "../../assets/images/Avatar.png";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const primaryMenu = [
  {
    icon: homeIcon,
    label: "Home",
  },
  {
    icon: categoryIcon,
    label: "Categories",
  },
  {
    icon: favoriteIcon,
    label: "Favorites",
  },
  {
    icon: ordersIcon,
    label: "My orders",
  },
];

const secondaryMenu = [
  { icon: languageIcon, label: "English | USD" },
  { icon: contactIcon, label: "Contact us" },
  { icon: aboutIcon, label: "About" },
];

const footerMenu = ["User agreement", "Partnership", "Privacy policy"];

const MobileSidebar = ({ isOpen, onClose }: MobileSidebarProps) => {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 h-full w-70 bg-white transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between bg-gray-100 p-4">
          <div className="flex flex-col items-start gap-3">
            <div className="h-12 w-12 rounded-full bg-gray-300 overflow-hidden">
              <img
                src={userIcon}
                alt="User"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex items-center gap-2">
              <button className="text-lg font-medium text-gray-800 hover:text-black">
                Sign in
              </button>
              <span className="text-gray-400">|</span>
              <button className="text-lg font-medium text-gray-800 hover:text-black">
                Register
              </button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col p-4">
          {/* Primary Menu */}
          <div className="space-y-6">
            {primaryMenu.map((item) => (
              <button
                key={item.label}
                className="flex items-center gap-3 text-left text-lg text-gray-700"
              >
                <img src={item.icon} alt={item.label} className="h-6 w-6" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <div className="my-4 h-px w-full bg-gray-200" />

          {/* Secondary Menu */}
          <div className="space-y-6">
            {secondaryMenu.map((item) => (
              <button
                key={item.label}
                className="flex items-center gap-3 text-left text-lg text-gray-700"
              >
                <img src={item.icon} alt={item.label} className="h-6 w-6" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          {/* Footer Menu */}
          <div className="my-4 h-px w-full bg-gray-200" />
          <div className="space-y-6 ml-9">
            {footerMenu.map((item) => (
              <button key={item} className="block text-left text-gray-600">
                {item}
              </button>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
};

export default MobileSidebar;
