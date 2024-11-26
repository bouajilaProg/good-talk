import { createContext, StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FriendList from "./pages/FriendList";
import Home from "./pages/Home";
import Messages from "./pages/Messages";
import Register from "./pages/Register";
import Login from "./pages/Login";

interface GlobalData {
  user: string;
  setUser: (user: string) => void;
}

export const GlobalContext = createContext<GlobalData>({
  user: "zwawin",
  setUser: () => {},
});

function GlobalProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState(localStorage.getItem("user") || "zwawin");

  return (
    <GlobalContext.Provider value={{ user, setUser }}>
      {children}
    </GlobalContext.Provider>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/friends" element={<FriendList />} />
        <Route path="/messages/:id" element={<Messages />} />
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </StrictMode>,
  );
}
