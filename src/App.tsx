import { Outlet } from "react-router";

import Layout from "./components/layout/Layout";
import Footer from "./components/layout/footer/Footer";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <Layout />
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};

export default App;
