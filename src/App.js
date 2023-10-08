import Nav from "./Components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyRoute from "./MyRoute";
import Login from "./pages/Login";
const App = () => {
  return (
    <>
      <div className="bg-slate-800">
        <Nav/>
        <Login/>
      </div>
    </>
  );
};
export default App;