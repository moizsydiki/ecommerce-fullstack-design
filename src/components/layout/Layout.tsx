import Header from "./Header";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";

const Layout = () => {
  return (
    <>
      <MobileNavbar />
      <div className="hidden lg:block">
        <Header />
        <Navbar />
      </div>
    </>
  );
};

export default Layout;
