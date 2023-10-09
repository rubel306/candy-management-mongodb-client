import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="lg:container md:container mx-auto">
      <div className="w-12/12 mx-auto">
        <div className="bg-orange-500 p-4">
          <h2 className="text-3xl text-white text-center">
            Candy Management System
          </h2>
        </div>
      </div>
      <Outlet></Outlet>
      <div className="w-12/12 mx-auto">
        <div className="bg-slate-700 p-4">
          <h2 className="text-3xl text-white text-center">
            &copy; All Rights Reserved
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Main;
