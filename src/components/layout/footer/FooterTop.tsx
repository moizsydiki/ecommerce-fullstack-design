import youtube from "../../../assets/icons/youtube3.png";
import twitter from "../../../assets/icons/twitter3.png";
import logo from "../../../assets/logos/logo-colored.png";
import facebook from "../../../assets/icons/facebook3.png";
import linkedin from "../../../assets/icons/linkedin3.png";
import appStore from "../../../assets/images/app_store.png";
import instagram from "../../../assets/icons/instagram3.png";
import playStore from "../../../assets/images/google_play.png";

const footerSections = [
  {
    title: "About",
    links: ["About Us", "Find store", "Categories", "Blogs"],
  },
  {
    title: "Partnership",
    links: ["About Us", "Find store", "Categories", "Blogs"],
  },
  {
    title: "Information",
    links: ["Help Center", "Money Refund", "Shipping", "Contact us"],
  },
  {
    title: "For users",
    links: ["Login", "Register", "Settings", "My Orders"],
  },
];

const FooterTop = () => {
  return (
    <div className="border-t border-gray-200 bg-white">
      <div className="mx-auto grid max-w-360 grid-cols-2 gap-10 px-4 py-10 md:grid-cols-3 lg:grid-cols-7">
        {/* Brand Section */}
        <div className="col-span-2 lg:col-span-2">
          <img src={logo} alt="Brand Logo" className="h-10 w-auto" />

          <p className="mt-4 max-w-70 text-gray-500">
            Best information about the companies goes here but now lorem ipsum
            is
          </p>

          {/* Social Icons */}
          <div className="mt-5 flex items-center gap-3">
            <img src={facebook} alt="Facebook" className="h-8 w-8" />
            <img src={twitter} alt="Twitter" className="h-8 w-8" />
            <img src={linkedin} alt="LinkedIn" className="h-8 w-8" />
            <img src={instagram} alt="Instagram" className="h-8 w-8" />
            <img src={youtube} alt="YouTube" className="h-8 w-8" />
          </div>
        </div>

        {/* Footer Links */}
        {footerSections.map((section) => (
          <div key={section.title}>
            <h3 className="mb-4 font-semibold text-gray-900">
              {section.title}
            </h3>

            <div className="flex flex-col gap-3">
              {section.links.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-500 transition hover:text-black"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}

        {/* App Section */}
        <div>
          <h3 className="mb-4 font-semibold text-gray-900">Get app</h3>

          <div className="flex flex-col gap-3">
            <img src={appStore} alt="App Store" className="h-10.5 w-31" />
            <img src={playStore} alt="Google Play" className="h-10.5 w-31" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
