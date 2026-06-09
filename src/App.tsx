import { Outlet } from "react-router";

import Layout from "./components/layout/Layout";
import Footer from "./components/layout/footer/Footer";
import Newsletter from "./components/common/Newsletter";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex flex-col gap-0">
        <Layout />
        <Outlet />
        <Newsletter />
        <Footer />
      </main>
    </div>
  );
};

export default App;
