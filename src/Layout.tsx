import { Navigate, Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";
import { SearchModal } from "./components/SearchModal";
import { useCurrentUserStore } from "./modules/auth/current-user.state";

const Layout = () => {
  const { currentUser } = useCurrentUserStore();

  if (!currentUser) return <Navigate replace to="/Signin" />;
  return (
    <div className="h-full flex">
      <SideBar onSearchButtonClicked={() => {}} />
      <main className="flex-1 h-full overflow-y-auto">
        <Outlet />
        <SearchModal
          isOpen={false}
          notes={[]}
          onItemSelect={() => {}}
          onKeywordChanged={() => {}}
          onClose={() => {}}
        />
      </main>
    </div>
  );
};

export default Layout;
