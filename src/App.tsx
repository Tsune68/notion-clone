import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { Home } from "./pages/Home";
import NoteDetail from "./pages/NoteDetail";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { authRepository } from "./modules/auth/auth.repository";
import { useCurrentUserStore } from "./modules/auth/current-user.state";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { set } = useCurrentUserStore();
  const setSession = async () => {
    const currentUser = await authRepository.getCurrentUser();
    set(currentUser);
    setIsLoading(false);
  };

  useEffect(() => {
    setSession();
  }, []);

  if (isLoading) return <div>読み込み中</div>;

  return (
    <BrowserRouter>
      <div className="h-full">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/notes/:id" element={<NoteDetail />} />
          </Route>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
