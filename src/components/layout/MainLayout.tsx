import { Outlet } from "react-router";
import Login from "../../pages/Login";

const MainLayout = () => {
  return (
    <div>
      {/* <h2>React Project Setup</h2>
      <p>This is Main Layout</p> */}
      <Login />
      <Outlet />
    </div>
  );
};

export default MainLayout;
