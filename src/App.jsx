import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import Users from "./components/Users";
import UserTodos from "./components/UserTodos";

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