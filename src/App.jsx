import { Routes, Route } from "react-router-dom";
import HomePage from "./assets/components/HomePage";
import NavBar from "./assets/components/NavBar";
import NotFound from "./assets/components/NotFound";
import Users from "./assets/components/Users";
import UserTodos from "./assets/components/UserTodos";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />


        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId/todos" element={<UserTodos />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

    </>
  );
}

export default App;