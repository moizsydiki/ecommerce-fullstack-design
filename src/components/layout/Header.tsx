import cart from "../../assets/icons/Cart.png";
import orders from "../../assets/icons/Orders.png";
import profile from "../../assets/icons/profile.png";
import message from "../../assets/icons/message.png";
import logo from "../../assets/logos/logo-colored.png";

const actions = [
  {
    icon: profile,
    label: "Profile",
  },
  {
    icon: message,
    label: "Message",
  },
  {
    icon: orders,
    label: "Orders",
  },
  {
    icon: cart,
    label: "My cart",
  },
];

const Header = () => {
  return (
    <header className="border-b border-gray-200">
      <div className="mx-auto flex max-w-360 items-center justify-between px-4 py-5">
        <div className="shrink-0">
          <img src={logo} alt="Brand logo" className="h-10 w-auto" />
        </div>
        <div className="mx-10 hidden  max-w-175 flex-1 lg:flex">
          <div className="flex w-full overflow-hidden rounded-md border border-blue-500">
            <input
              type="text"
              placeholder="Search"
              className="flex-1 px-4 py-2 outline-none"
            />
            <select className="border-l border-blue-500 px-4 outline-none">
              <option>All category</option>
            </select>
            <button className="bg-blue-500 px-6 text-white">Search</button>
          </div>
        </div>
        <div className="hidden items-center gap-6 lg:flex">
          {actions.map((action) => (
            <div
              key={action.label}
              className="flex cursor-pointer flex-col items-center text-sm text-gray-500 transition hover:text-black"
            >
              <img src={action.icon} alt={action.label} className="h-5 w-5" />

              <span>{action.label}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
