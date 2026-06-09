import menu from "../../assets/icons/menu.png";

const navLinks = ["Hot offers", "Gift boxes", "Projects", "Menu item", "Help"];

const Navbar = () => {
  return (
    <nav className="hidden border-b border-gray-200 md:block">
      <div className="mx-auto flex max-w-360 items-center justify-between px-4 py-3">
        {/* Left Side */}
        <div className="flex items-center gap-8">
          {/* Categories */}
          <button className="flex items-center gap-2 font-medium text-gray-800">
            <img src={menu} alt="Menu" />
            <span>All category</span>
          </button>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-gray-700 transition hover:text-blue-500"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          {/* Language */}
          <button className="flex items-center gap-1 text-sm text-gray-700">
            <span>English, USD</span>
            <span>▼</span>
          </button>

          {/* Ship To */}
          <button className="flex items-center gap-2 text-sm text-gray-700">
            <span>Ship to</span>

            <img
              src="https://flagcdn.com/w40/de.png"
              alt="Germany"
              className="h-4 w-6 rounded-sm object-cover"
            />

            <span>▼</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
