import { Outlet } from "react-router";

import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <Layout />
        <Outlet />
      </main>
    </div>
  );
};

export default App;
